interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  id,
  title,
  completed,
  onToggleComplete,
  onDelete,
}: TaskItemProps) {
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
