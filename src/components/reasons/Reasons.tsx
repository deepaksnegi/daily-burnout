import React from "react";
import "./reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

type Props = {};

const Reasons = (props: Props) => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons-left">
        <img src={image1} loading="lazy" alt="body building" />
        <img src={image2} loading="lazy" alt="body building" />
        <img src={image3} loading="lazy" alt="body building" />
        <img src={image4} loading="lazy" alt="body building" />
      </div>
      <div className="reasons-right">
        <span>Some Reasons</span>
        <div>
          <span className="stroke">Why </span>
          <span>Choose us?</span>
        </div>

        <div className="details">
          <div>
            <img src={tick} alt="tick"></img>
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Train Smarter and Faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 Free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Reliable Partners</span>
          </div>

          <span className="partners-text">Our Partners</span>
          <div className="partners">
            <img src={nb} alt="nb" />
            <img src={adidas} alt="adidas" />
            <img src={nike} alt="nike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
