export type TaskItemType = {
  id: string;
  text: string;
  status: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};
