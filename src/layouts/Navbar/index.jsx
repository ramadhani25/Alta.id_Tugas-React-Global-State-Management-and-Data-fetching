import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Navbar = ({ navMenu }) => {
  return (
    <nav>
      <Link to="/" className={style.logo}>
        <h1>ToDoList</h1>
      </Link>
      <div className={style.navLinks}>
        {navMenu.map((item, itemIdx) => (
          <Link className={style.link} key={itemIdx} to={item.link}>
            {item.menu}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
