// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4 flex gap-4 flex-wrap bg-slate-800">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
        </div>
    );
};
