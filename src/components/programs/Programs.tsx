import React from "react";
import "./programs.css";
import { programsData } from "../../assets/data/programsData.js";

import rightArrow from "../../assets/rightArrow.png";

type Props = {};

const Programs = (props: Props) => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke">Explore Our </span>
        <span>Programs</span>
        <span className="stroke">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.heading}>
            <img src={program.image} alt={program.heading} />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span> <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
