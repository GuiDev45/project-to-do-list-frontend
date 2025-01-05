import { TaskListType } from "../../models/TaskListType";
import TaskItem from "../TaskItem";

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
}: TaskListType) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
