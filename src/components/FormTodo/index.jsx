import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./style.module.css";

const FormTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    } else {
      alert("Isi input terlebih dahulu...");
    }
  };

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="task"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button className={style.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
