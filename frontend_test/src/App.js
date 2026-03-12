import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">

      {/* Header */}
      <div className="p-4 border-b border-slate-700 text-xl font-semibold">
        Pipeline Builder
      </div>

      {/* Toolbar */}
      <div className="border-b border-slate-700">
        <PipelineToolbar />
      </div>

      {/* Canvas */}
      <div className="flex-1">
        <PipelineUI />
      </div>

      {/* Submit */}
      <div className="p-4 border-t border-slate-700">
        <SubmitButton />
      </div>

    </div>
  );
}

export default App;