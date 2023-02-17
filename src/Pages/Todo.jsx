import React, { useState } from "react";

const Todo = () => {
  const [values, setValues] = useState({
    text: "",
  });

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleAddTodo(e) {
    e.preventDefault();

    let { text } = values;

    const newTodos = [...todos, { text, id: crypto.randomUUID() }];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setValues({ text: "" });
  }

  function handleDeleteTodo(id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <main className="text-bg-dark py-5 min-vh-100">
      <div className="container">
        <h1 className="text-center display-1 fw-bold text-success">Todos</h1>
        <form onSubmit={handleAddTodo} className="my-5">
          <div className="input-group">
            <input
              type="text"
              name="text"
              id="todo"
              placeholder="Enter New Todo..."
              className="form-control fs-2 text-bg-dark border-success"
              value={values.text}
              onChange={handleInputChange}
            />
            <button className="btn btn-success input-group-text fs-2 px-5">
              Add
            </button>
          </div>
        </form>
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-dark border border-1 border-success text-light list-group-item d-flex align-items-center justify-content-between fs-2"
            >
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                className="todo-checkbox"
                hidden
              />
              <span className="todo-text">{todo.text}</span>
              <span className="d-flex gap-3">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <label htmlFor={`todo-${todo.id}`} className="btn btn-success">
                  <i className="fa-regular fa-square-check"></i>
                </label>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Todo;
