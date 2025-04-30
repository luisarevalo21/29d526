import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import NodeModal from "./NodePopup";

const FormNode = ({ id, data }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const onChange = useCallback(evt => {
    // console.log(evt.target.value);
  }, []);

  return (
    <div className="react-flow__node-default" style={{ padding: 10, minWidth: 150, display: "flex", alignItems: "center", gap: 5 }}>
      <Handle type="target" position={Position.Left} />
      <div style={{ display: "flex", alignItems: "center", gap: 5, backgroundColor: "#007bff", borderRadius: 5, padding: 5, width: "auto" }}>
        <DynamicFormIcon />
      </div>
      <div style={{ gap: 5, flexDirection: "column", alignItems: "flex-end", textAlign: "left", marginLeft: 10 }}>
        <p style={{ margin: 0 }}>Form</p>
        <h3>{data.name}</h3>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default FormNode;
