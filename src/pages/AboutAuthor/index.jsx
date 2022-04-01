import React, { useState } from "react";
import style from "./style.module.css";
import Navbar from "../../layouts/Navbar";

const AboutAuthor = () => {
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
        <h1>About the Author</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          delectus ad aspernatur dolorum necessitatibus a illum labore fugiat
          qui ex sed sapiente quibusdam quas, aliquam ipsa, laudantium iure!
          Cupiditate, fugiat. Temporibus nemo atque nostrum minus veniam ipsam,
          amet dolore explicabo voluptates sit illo. Veniam nam dignissimos
          ipsam, unde repudiandae distinctio maiores, aliquam suscipit
          blanditiis dicta earum placeat impedit ex voluptas.
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
