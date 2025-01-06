import { TaskItemType } from "../../models/TaskItemType";

export default function TaskItem({
  id,
  text,
  status,
  onToggleComplete,
  onDelete,
}: TaskItemType) {
  return (
    <div>
      <input
        type="checkbox"
        checked={status}
        onChange={() => onToggleComplete(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
}
