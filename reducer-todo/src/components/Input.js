import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

const Input = () => {
  const [todoItem, setTodoItem] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = e => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todoItem });
    setTodoItem("");
  };

  console.log(state);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoItem"
          onChange={handleChange}
          value={todoItem}
        />
        <button>Submit</button>
        <button
          type="button"
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          Clear
        </button>
      </form>

      {state.todos.map(todo => {
        console.log(todo);
        return (
          <li
            onClick={() =>
              dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })
            }
            style={{ textDecoration: todo.completed ? "line-through" : null }}
            key={todo.id}
          >
            {todo.todo}
          </li>
        );
      })}
    </>
  );
};

export default Input;
