import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-a`, style:{top:"30%"} },
    { type: "target", position: Position.Left, id: `${id}-b`, style:{top:"70%"} },
    { type: "source", position: Position.Right, id: `${id}-result` }
  ];

  return (
    <BaseNode title="Math" handles={handles}>
      <span>Add / Multiply</span>
    </BaseNode>
  );
};