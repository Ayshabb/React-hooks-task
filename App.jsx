import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import TaskForm from "./TaskForm";
import useTasks from "./useTasks";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { tasks, addTask } = useTasks();

  return (
    <div className={theme} style={{ padding: "20px" }}>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>

      <h2>Task List</h2>

      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
