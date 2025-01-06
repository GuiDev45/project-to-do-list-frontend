import { useState } from "react";
import Header from "../../components/Header";
import FormCustom from "../../components/FormCustom";
import TaskList from "../../components/TaskList";
import { TaskType } from "../../models/TaskType";

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (task: { text: string }) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text: task.text, status: false },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task,
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
