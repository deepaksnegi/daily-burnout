import React from "react";
import "./footer.css";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="github" />
          <img src={instagram} alt="instagram" />
          <img src={linkedIn} alt="linkedin" />
        </div>
        <div className="logo-footer">
          <div className="logo">Daily Burnout</div>
        </div>
      </div>
      <div className="blur footer-blur-f"></div>
      <div className="blur footer-blur-s"></div>
    </div>
  );
};

export default Footer;
