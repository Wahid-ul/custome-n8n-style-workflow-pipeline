import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles = [] }) => {
  return (
    <div className="min-w-[200px] max-w-[400px] rounded-xl border border-slate-300 bg-white shadow-md p-3 text-sm">

      {/* Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          className="
            !w-4
            !h-4
            !bg-indigo-500
            border-2
            border-white
            rounded-full
            cursor-grab
            hover:ring-2
            hover:ring-indigo-300
          "
          style={handle.style}
        />
      ))}

      {/* Title */}
      <div className="font-semibold text-slate-700 border-b pb-1 mb-2">
        {title}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {children}
      </div>

    </div>
  );
};