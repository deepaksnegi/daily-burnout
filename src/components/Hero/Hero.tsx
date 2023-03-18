import React from "react";
import Header from "../header/Header";
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

        <div className="headline">
          <div className="headline-first">
            <span className="stoke">Shape </span>
            <span>Your</span>
          </div>
          <div className="headline-second">
            <span>Ideal Body</span>
          </div>

          <div className="headline-info">
            In here we will you to shape and build your ideal body and live up
            your life to fullest.
          </div>
        </div>

        <div className="progress-numbers">
          <div>
            <span>+ 140</span> <span>Expert Coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-right">right</div>
    </div>
  );
};

export default Hero;
