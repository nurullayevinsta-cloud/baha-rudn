import './TaskItem.css'

interface TaskItemProps {
  text: string
}

function TaskItem({ text }: TaskItemProps) {
  return (
    <div className="task-item">
      <span className="task-item-text">{text}</span>
    </div>
  )
}

export default TaskItem
