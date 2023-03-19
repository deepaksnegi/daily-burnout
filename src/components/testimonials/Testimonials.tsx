import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../assets/data/testimonialsData.js";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

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
        <span className="review">{review}</span>
        <span>
          <span>{name}</span> -{status}
        </span>
      </div>
      <div className="testimonials-right">
        <div></div>
        <div></div>
        <img src={image} alt={name} />
        <div className="change-testimonials">
          <img
            src={leftArrow}
            alt="previou"
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
