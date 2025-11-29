import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Load saved tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title }]);
  };

  return { tasks, addTask };
}

export default useTasks;
