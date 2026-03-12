import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LoggerNode = ({ id }) => {

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-input` }
  ];

  return (
    <BaseNode title="Logger" handles={handles}>
      <span>Logs Data</span>
    </BaseNode>
  );
};