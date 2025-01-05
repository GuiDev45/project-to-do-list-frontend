import { TaskFormData } from "../schemas";

export type FormType = {
  onSubmit: (data: TaskFormData) => void;
};
