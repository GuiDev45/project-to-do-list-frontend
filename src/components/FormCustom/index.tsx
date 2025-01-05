import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface FormProps {
  onSubmit: (data: TaskFormData) => void;
}

export default function FormCustom({ onSubmit }: FormProps) {
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
