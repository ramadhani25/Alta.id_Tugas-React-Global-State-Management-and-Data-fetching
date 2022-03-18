import React from "react";
import Todo from "../Todo";

const ListTodo = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default ListTodo;
