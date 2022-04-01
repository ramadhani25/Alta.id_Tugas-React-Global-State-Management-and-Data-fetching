import React, { useState } from "react";
import style from "./style.module.css";
import Navbar from "../../layouts/Navbar";

const AboutApp = () => {
  const [navMenu] = useState([
    {
      link: "/",
      menu: "Home",
    },
    {
      link: "/About/About-app",
      menu: "About App",
    },
    {
      link: "/About/About-author",
      menu: "About Author",
    },
  ]);

  return (
    <div>
      <Navbar navMenu={navMenu} />
      <div className={style.AboutAuthor}>
        <h1>About the App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          delectus ad aspernatur dolorum necessitatibus a illum labore fugiat
          qui ex sed sapiente quibusdam quas, aliquam ipsa, laudantium iure!
          Cupiditate, fugiat.
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
