import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../assets/data/testimonialsData.js";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

type Props = {};

const Testimonials = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { review, name, status, image } = testimonialsData[selectedIndex];

  const handleChangeTestimonial = (direction: number) => {
    let newSelectedIndex = selectedIndex + direction;

    if (newSelectedIndex >= testimonialsData.length) newSelectedIndex = 0;
    if (newSelectedIndex < 0) newSelectedIndex = testimonialsData.length - 1;

    setSelectedIndex(newSelectedIndex);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-left">
        <span>Testimonials</span>
        <span className="stroke">What they</span>
        <span>say about us</span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2 }}
          key={selectedIndex}
          className="review"
        >
          {review}
        </motion.span>
        <span>
          <span>{name}</span> -{status}
        </span>
      </div>
      <div className="testimonials-right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2 }}
          key={selectedIndex}
          src={image}
          alt={name}
        />
        <div className="change-testimonials">
          <img
            src={leftArrow}
            alt="previous"
            onClick={() => handleChangeTestimonial(-1)}
          />
          <img
            src={rightArrow}
            alt="next"
            onClick={() => handleChangeTestimonial(+1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
