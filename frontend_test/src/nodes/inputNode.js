import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode title="Input" handles={handles}>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-600">Name</label>
        <input
          className="border rounded px-2 py-1 text-xs text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-600">Type</label>
        <select
            className="border rounded px-2 py-1 text-xs text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>

    </BaseNode>
  );
};