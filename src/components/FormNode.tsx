import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const FormNode = ({ id, data }) => {
  const onChange = useCallback(evt => {
    console.log(evt.target.value);
  }, []);
  const handleClick = useCallback(() => {
    console.log("clicked", id);
  }, [id]);

  return (
    <div className="react-flow__node-default form-node" key={data.component_key} onClick={handleClick}>
      <h2>{id}</h2>
      <Handle type="source" position={Position.Right} />
      <strong>{data.name}</strong>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default FormNode;
