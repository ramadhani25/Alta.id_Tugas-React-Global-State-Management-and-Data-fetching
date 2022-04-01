import React from "react";
import Todo from "../Todo";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const { todo } = useSelector((state) => state.todos);

  return (
    <div>
      {todo.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodo;
