export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing'

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    )

    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div
      className="cursor-grab bg-indigo-600 hover:bg-indigo-500
      transition rounded-lg px-6 py-4
      flex items-center justify-center
      text-white font-medium shadow-md"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {label}
    </div>
  )
}