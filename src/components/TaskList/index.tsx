import TaskItem from "../TaskItem";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
}: TaskListProps) {
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
