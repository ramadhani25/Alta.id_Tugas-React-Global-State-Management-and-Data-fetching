import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { addTodo } from "../../store/todoSlice";

const FormTodo = () => {
  const dispatch = useDispatch();

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
      dispatch(addTodo(todo));
      setTodo({ ...todo, task: "" });
    } else {
      alert("Isi input terlebih dahulu...");
      setTodo({ ...todo, task: "" });
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
