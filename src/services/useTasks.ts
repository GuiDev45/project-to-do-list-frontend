import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTasks, addTask, updateTaskStatus, deleteTask } from "../api/tasks";
import { TaskType } from "../models/TaskType";

// Função para buscar tarefas (useQuery)
export const useTasks = (userId: string) => {
  return useQuery<TaskType[], Error>("tasks", () => getTasks(userId));
};

// Função para adicionar uma nova tarefa (useMutation)
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newTask: { userId: string; text: string }) =>
      addTask(newTask.userId, newTask.text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks"); // Invalida o cache das tarefas para recarregar
      },
    },
  );
};

// Função para atualizar o status de uma tarefa (useMutation)
export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ taskId, status }: { taskId: string; status: boolean }) =>
      updateTaskStatus(taskId, status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks"); // Invalida o cache para refletir a mudança
      },
    },
  );
};

// Função para excluir uma tarefa (useMutation)
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation((taskId: string) => deleteTask(taskId), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks"); // Invalida o cache para refletir a exclusão
    },
  });
};
