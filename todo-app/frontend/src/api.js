const API = "http://localhost:8000";

export async function getTodos() {
  const res = await fetch(`${API}/todos`);
  return res.json();
}

export async function createTodo(title) {
  await fetch(`${API}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
}

export async function toggleTodo(id) {
  await fetch(`${API}/todos/${id}`, {
    method: "PUT",
  });
}

export async function deleteTodo(id) {
  await fetch(`${API}/todos/${id}`, {
    method: "DELETE",
  });
}
