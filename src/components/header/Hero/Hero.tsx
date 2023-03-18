import React from "react";
import Header from "../Header";
import "./hero.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <Header />
        <div className="tag-line">
          <div></div>
          <span>The best fitness club in your town.</span>
        </div>
      </div>
      <div className="hero-right">right</div>
    </div>
  );
};

export default Hero;
