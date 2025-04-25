import { useCallback, useState, useEffect } from "react";
import { ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges, useNodesState, useEdgesState, Controls, MiniMap, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import api from "./api/api";
import FormNode from "./components/FormNode";

const nodeTypes = {
  form: FormNode,
};

function App() {
  const [loading, setLoading] = useState(true);

  const initialNodes = [];
  const initialEdges = [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

  useEffect(() => {
    const fetchNodes = async () => {
      setLoading(true);
      const res = await api.get("http://localhost:3000/api/v1/workflow/actions/blueprints/exampleId/graph");
      console.log("nodes", res.data.nodes);
      console.log("edges", res.data.edges);
      setNodes(res.data.nodes);
      setEdges(res.data.edges.map(edge => ({ ...edge, id: edge.source + edge.target })));
      setLoading(false);
    };
    fetchNodes();
  }, []);

  if (loading) {
    return <div>loading data</div>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
