import React, { useState, useCallback, useEffect } from "react";
import { ReactFlow, useConnection, useNodesState, useEdgesState, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import FormNode from "./components/FormNode";
import axios from "axios";
import NodePopup from "./components/NodePopup";
import FormModal from "./components/FormModal";
import { Node } from "./types";
const nodeTypes = {
  form: FormNode,
};

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "1", source: "1", target: "2" }];

const FlowForm = () => {
  useEffect(() => {
    try {
      const fetchNodes = async () => {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/api/v1/workflow/actions/blueprints/exampleId/graph");
        setNodes(res.data.nodes);
        setEdges(res.data.edges.map(edge => ({ ...edge, id: edge.source + edge.target })));
        setForms(res.data.forms);
        setLoading(false);
      };
      fetchNodes();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [forms, setForms] = useState(null);
  const [toggleFormModal, setToggleFormModal] = useState(false);
  const [directiveNodes, setDirectNodes] = useState(null);
  const [transitiveNodes, setTransitiveNodes] = useState(null);

  const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);
  const handleClicked = (event, node) => {
    setAnchorEl(event.currentTarget);
    setSelectedNode(node);
    searchForDirectiveNodes(node);
  };

  if (loading) {
    return <h2>loading nodes</h2>;
  }

  //search previous nodes when a node is selected can always be moved afterwards

  const searchForDirectiveNodes = selectedNode => {
    //search through the nodes and map them to the edges and see if the their is an edge that is the target of the current Node?

    const directiveNodes = [];
    const transitiveNodes = [];
    nodes.forEach(curNode => {
      edges.forEach(edge => {
        if (curNode.id === edge.source && edge.target === selectedNode.id) {
          directiveNodes.push(curNode);
        }
      });
    });

    nodes.forEach(currentNode => {
      directiveNodes.forEach(curentDirectiveNode => {
        edges.forEach(edge => {
          if (currentNode.id === edge.source && edge.target === curentDirectiveNode.id && !transitiveNodes.includes(currentNode)) {
            transitiveNodes.push(currentNode);
          }
        });
      });
    });

    //awful but works
    if (transitiveNodes.length > 0) {
      nodes.forEach(currentNode => {
        transitiveNodes.forEach(curentDirectiveNode => {
          edges.forEach(edge => {
            if (currentNode.id === edge.source && edge.target === curentDirectiveNode.id && !transitiveNodes.includes(currentNode)) {
              transitiveNodes.push(currentNode);
            }
          });
        });
      });
    }

    setTransitiveNodes(transitiveNodes);
    setDirectNodes(directiveNodes);
  };
  const handleClick = () => {
    console.log("input clicked");
    setToggleFormModal(true);
  };
  const handleClearEmail = () => {
    console.log("clear email called");
  };
  const handleClose = () => {
    setSelectedNode(null);
    setAnchorEl(null);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={handleClicked}
      >
        <Background variant="dots" color="#ccc" />
        {selectedNode && (
          <NodePopup
            selectedNode={selectedNode}
            handleClose={handleClose}
            anchorEl={anchorEl}
            handleClearEmail={handleClearEmail}
            handleClick={handleClick}
          />
        )}
        {toggleFormModal && <FormModal selectedNode={selectedNode} transitiveNodes={transitiveNodes} directiveNodes={directiveNodes} forms={forms} />}
      </ReactFlow>
    </div>
  );
};

export default FlowForm;
