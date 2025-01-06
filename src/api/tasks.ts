import axios from "axios";

// Configuração base para a API
const api = axios.create({
  baseURL: "http://localhost:3000/api", // Substitua com a URL do seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para buscar as tarefas
export const getTasks = (userId: string) => {
  return api.get(`/tasks?user_id=${userId}`).then((response) => response.data);
};

// Função para adicionar uma nova tarefa
export const addTask = (userId: string, text: string) => {
  return api
    .post("/tasks", {
      user_id: userId,
      text: text,
      status: false, // Status inicial
    })
    .then((response) => response.data);
};

// Função para atualizar o status de uma tarefa (marcar como concluída)
export const updateTaskStatus = (taskId: string, status: boolean) => {
  return api
    .put(`/tasks/${taskId}`, { status })
    .then((response) => response.data);
};

// Função para excluir uma tarefa
export const deleteTask = (taskId: string) => {
  return api.delete(`/tasks/${taskId}`);
};
