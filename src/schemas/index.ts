import { z } from "zod";

export const taskSchema = z.object({
  text: z.string().min(1, "O título é obrigatório"),
});

export type TaskFormData = z.infer<typeof taskSchema>;
