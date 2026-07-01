import { useEffect, useState } from "react";
import { getTodos, createTodo, toggleTodo, deleteTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    if (!title) return;
    await createTodo(title);
    setTitle("");
    loadTodos();
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        value={title}
        placeholder="Enter todo..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTodo(t.id).then(loadTodos)}
              style={{
                cursor: "pointer",
                textDecoration: t.completed ? "line-through" : "none"
              }}
            >
              {t.title}
            </span>

            <button onClick={() => deleteTodo(t.id).then(loadTodos)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
