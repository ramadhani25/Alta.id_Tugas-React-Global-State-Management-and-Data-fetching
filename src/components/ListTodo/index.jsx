import React from "react";
import Todo from "../Todo";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodo;
