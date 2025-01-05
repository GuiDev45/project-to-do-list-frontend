export type TaskItemType = {
  id: string;
  title: string;
  completed: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};
