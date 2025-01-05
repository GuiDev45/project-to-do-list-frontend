import { TaskType } from "./TaskType";

export type TaskListType = {
  tasks: TaskType[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};
