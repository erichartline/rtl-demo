import React from "react";

const TodoList = () => {
  const [todo, setTodo] = React.useState("");
  const [todosList, setTodosList] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo("");
    setTodosList([...todosList, todo]);
  };

  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          aria-label="Your todo"
          placeholder="Add todo..."
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          required
        />
        <button type="submit" disabled={todo.length === 0}>
          Add
        </button>
      </form>
      <div>
        <ul>
          {todosList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
