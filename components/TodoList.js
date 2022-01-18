import React from "react";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todo, setTodo] = React.useState("");
  const [todosList, setTodosList] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo("");
    setTodosList([
      ...todosList,
      {
        id: uuid(),
        todo: todo,
      },
    ]);
  };

  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          required
        />
        <button type="submit" name="add">
          Add
        </button>
      </form>
      <div>
        <ul>
          {todosList.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
