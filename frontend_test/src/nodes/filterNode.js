import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const FilterNode = ({ id }) => {

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-input` },
    { type: "source", position: Position.Right, id: `${id}-filtered` }
  ];

  return (
    <BaseNode title="Filter" handles={handles}>
      <span>Filter Data</span>
    </BaseNode>
  );
};