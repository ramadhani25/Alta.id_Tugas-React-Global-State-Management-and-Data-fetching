import React from "react";
import style from "./style.module.css";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <ul style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <li
          style={{
            listStyle: "none",
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </li>
      </div>
      <button className={style.btn} onClick={handleRemoveClick}>
        Delete
      </button>
    </ul>
  );
};

export default Todo;
