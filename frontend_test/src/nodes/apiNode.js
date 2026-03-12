import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const APINode = ({ id }) => {

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-request` },
    { type: "source", position: Position.Right, id: `${id}-response` }
  ];

  return (
    <BaseNode title="API" handles={handles}>
      <span>API Request Node</span>
    </BaseNode>
  );
};