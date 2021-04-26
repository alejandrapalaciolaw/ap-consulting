import React from "react";
import homeData from "../data/home";

import style from "../styles/Hero.module.css";

const HeroComponent = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{homeData.hero.content}</h1>
      <h2>{homeData.hero.subContent}</h2>
    </div>
  );
};

export default HeroComponent;
