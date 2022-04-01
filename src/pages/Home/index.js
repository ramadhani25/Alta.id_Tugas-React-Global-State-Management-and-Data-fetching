import "./Home.css";
import React, { useState } from "react";
import FormTodo from "../../components/FormTodo/index";
import ListTodo from "../../components/ListTodo/index";
import Navbar from "../../layouts/Navbar";

const Home = () => {
  const [navMenu] = useState([
    {
      link: "/",
      menu: "Home",
    },
    {
      link: "/About/About-app",
      menu: "About",
    },
  ]);

  return (
    <>
      <Navbar navMenu={navMenu} />
      <div className="Home">
        <h1>TODOS</h1>
        <FormTodo />
        <ListTodo />
      </div>
    </>
  );
};

export default Home;
