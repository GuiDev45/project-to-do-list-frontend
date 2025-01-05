import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskFormData } from "../../schemas";
import { FormType } from "../../models/FormType";

export default function FormCustom({ onSubmit }: FormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Título da tarefa" />
      {errors.title && <span>{errors.title.message}</span>}
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}
