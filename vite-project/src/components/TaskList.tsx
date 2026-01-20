import TaskItem from './TaskItem'
import './TaskList.css'

interface TaskListProps {
  tasks: string[]
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>Ничего не найдено</p>
      </div>
    )
  }

  return (
    <div className="task-list-container">
      {tasks.map((task, index) => (
        <TaskItem key={index} text={task} />
      ))}
    </div>
  )
}

export default TaskList
