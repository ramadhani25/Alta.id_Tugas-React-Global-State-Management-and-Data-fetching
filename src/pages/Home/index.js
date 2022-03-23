import "./Home.css";
import React, { useState } from "react";
import FormTodo from "../../components/FormTodo/index";
import ListTodo from "../../components/ListTodo/index";
import Navbar from "../../layouts/Navbar";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [navMenu, setNavMenu] = useState([
    {
      link: "/",
      menu: "Home",
    },
    {
      link: "/About/About-app",
      menu: "About",
    },
  ]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar navMenu={navMenu} />
      <div className="Home">
        <h1>TODOS</h1>
        <FormTodo addTodo={addTodo} />
        <ListTodo
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  );
};

export default Home;
