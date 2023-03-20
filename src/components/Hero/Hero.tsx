import React from "react";
import Header from "../header/Header";
import "./hero.css";
import heroImage from "../../assets/hero_image.png";
import heroBackgroundImage from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />
        <div className="tag-line">
          <motion.div
            transition={{ type: "tween", duration: 3 }}
            initial={{ left: "238px" }}
            whileInView={{ left: "1.1rem" }}
          ></motion.div>
          <span>The best fitness club in your town</span>
        </div>

        <div className="headline">
          <div className="headline-first">
            <span className="stroke">Shape </span>
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
            <span>
              <CountUp end={140} start={100} duration={4} prefix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <CountUp end={978} start={700} duration={4} prefix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <CountUp end={50} start={30} duration={4} prefix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-right">
        <button>Join Now</button>

        <motion.div
          className="heart-rate"
          transition={{ type: "spring", duration: 3 }}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={heroImage} className="hero-image" alt="hero" />
        <motion.img
          transition={{ type: "spring", duration: 3 }}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={heroBackgroundImage}
          className="hero-background"
          alt="hero background"
        />

        <motion.div
          className="calories"
          transition={{ type: "spring", duration: 3 }}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={calories} alt="calories image" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
