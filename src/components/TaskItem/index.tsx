import { TaskItemType } from "../../models/TaskItemType";

export default function TaskItem({
  id,
  title,
  completed,
  onToggleComplete,
  onDelete,
}: TaskItemType) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
}
