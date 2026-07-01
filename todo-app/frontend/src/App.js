import { useEffect, useState } from "react";
import { getTodos, createTodo, toggleTodo, deleteTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    load();
  }, []);

  const addTodo = async () => {
    await createTodo(title);
    setTitle("");
    load();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTodo(t.id).then(load)}
              style={{ textDecoration: t.completed ? "line-through" : "" }}
            >
              {t.title}
            </span>
            <button onClick={() => deleteTodo(t.id).then(load)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
