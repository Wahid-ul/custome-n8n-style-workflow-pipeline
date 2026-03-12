import { useStore } from "./store";

export const SubmitButton = () => {

  // read nodes and edges from zustand store
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {

    const pipeline = {
      nodes: nodes,
      edges: edges
    };

    try {

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pipeline)
      });

      const result = await response.json();

      alert(`
Pipeline Analysis

Number of Nodes: ${result.num_nodes}
Number of Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}
      `);

    } catch (error) {

      console.error("Pipeline submission error:", error);
      alert("Failed to submit pipeline");

    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleSubmit}
        className="
        bg-green-600 hover:bg-green-500
        px-8 py-2
        rounded-lg
        font-semibold
        shadow-md
        transition
        text-white
        "
      >
        Submit Pipeline
      </button>
    </div>
  );

};