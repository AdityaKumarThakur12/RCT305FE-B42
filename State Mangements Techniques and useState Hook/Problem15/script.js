const TaskManager = () => {
  const [tasks, setTasks] = React.useState([]);
  const [filter, setFilter] = React.useState({ priority: "All", status: "All" });
  const [newTask, setNewTask] = React.useState({ title: "", priority: "Medium" });

  const addTask = () => {
    if (newTask.title.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask.title,
          priority: newTask.priority,
          completed: false,
        },
      ]);
      setNewTask({ title: "", priority: "Medium" });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter.priority !== "All" && task.priority !== filter.priority)
        return false;
      if (
        filter.status !== "All" &&
        ((filter.status === "Completed" && !task.completed) ||
          (filter.status === "Incomplete" && task.completed))
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  return (
    <div className="task-manager">
      <h1>Advanced Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="filters">
        <select
          value={filter.priority}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, priority: e.target.value }))
          }
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={filter.status}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${
              task.priority === "High" ? "high-priority" : ""
            }`}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title} ({task.priority})
            </span>
            <div>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TaskManager/>)