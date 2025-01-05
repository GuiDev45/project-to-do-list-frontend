import { useState } from "react";
import Header from "../../components/Header";
import FormCustom from "../../components/FormCustom";
import TaskList from "../../components/TaskList";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: { title: string }) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: task.title, completed: false },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <FormCustom onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
}
