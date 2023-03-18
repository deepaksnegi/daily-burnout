import React from "react";
import "./header.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="logo">Daily Burnout</div>
      <ul className="header-menus">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
