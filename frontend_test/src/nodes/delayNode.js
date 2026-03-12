import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => {

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-input` },
    { type: "source", position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode title="Delay" handles={handles}>
      <span>Delay Execution</span>
    </BaseNode>
  );
};