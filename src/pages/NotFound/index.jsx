import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <h1>Oops! Something went wrong!</h1>
      <Link className={style.link} to="/">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
