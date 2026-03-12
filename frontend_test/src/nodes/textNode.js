import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {

  const [text, setText] = useState(data?.text || "{{input}}");

  const textareaRef = useRef(null);
  const measureRef = useRef(null);

  const updateNodeInternals = useUpdateNodeInternals();

  // variable detection using regex to find {{variableName}} patterns
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    return [...new Set(
      [...text.matchAll(regex)].map(match => match[1])
    )];
  }, [text]);

  // syntax highlight renderer for {{variables}} with removable tokens
  const highlightText = (input) => {

    const regex = /{{\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*}}/g;
    const matches = [...input.matchAll(regex)].map(m => m[0]);

    return matches.map((token, index) => {
      const handleRemove = () => {
        setText((prev) => prev.replace(token, ""));
      };

      return (
        <span
          key={index}
          className="relative inline-flex items-center bg-indigo-200 text-indigo-900 px-1 rounded font-medium mr-1"
        >
          {token}
          <button
            onClick={handleRemove}
            className="ml-1 text-indigo-700 hover:text-indigo-900 font-bold text-xs leading-none"
            style={{ position: "absolute", top: "-4px", right: "-4px", width: "14px", height: "14px", lineHeight: "12px" }}
          >
            ×
          </button>
        </span>
      );
    });

  };

  // update react flow internals whenever variables change to update handles
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  // auto resize textarea height based on content
  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    const measure = measureRef.current;

    if (!textarea || !measure) return;

    // Auto height adjustment
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Measure width using hidden element
    measure.textContent = text || "";
    const newWidth = Math.min(Math.max(measure.offsetWidth + 30, 200), 350);
    textarea.style.width = `${newWidth}px`;

  }, [text]);

  // handle configuration: one source handle for output, and dynamic target handles for each detected variable in the text
  const variableHandles = variables.map((variable, index) => ({
    type: "target",
    position: Position.Left,
    id: `${id}-${variable}`,
    style: { top: `${40 + index * 25}px` }
  }));

  const handles = [
    ...variableHandles,
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode title="Text" handles={handles}>
      <div className="flex flex-col gap-1">

        <label className="text-xs text-slate-600">
          Text
        </label>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full
            border
            rounded
            px-2
            py-1
            text-xs
            resize-none
            bg-white
            text-black
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-400
          "
        />
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre text-xs font-sans"
        />

        {/* highlighted preview below textarea */}
        <div className="mt-1 text-xs text-slate-700">
          {highlightText(text)}
        </div>

      </div>
    </BaseNode>
  );
};