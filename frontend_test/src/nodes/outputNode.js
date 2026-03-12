import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode title="Output" handles={handles}>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-600">Name</label>

        <input
          className="
            border
            rounded
            px-2
            py-1
            text-xs
            text-black
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-400
          "
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />

      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-600">Type</label>

        <select
          className="
            border
            rounded
            px-2
            py-1
            text-xs
            text-black
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-400
          "
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>

      </div>

    </BaseNode>
  );
};