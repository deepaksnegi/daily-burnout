import React, { useState } from "react";
import "./header.css";
import menu from "../../assets/bars.png";

type Props = {};

const Header = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const isMobileView = window.innerWidth <= 768;

  return (
    <div className="header">
      <div className="logo">Daily Burnout</div>
      {!menuOpened && isMobileView ? (
        <div className="menu-icon" onClick={() => setMenuOpened(true)}>
          <img src={menu} alt="menu-icon" />
        </div>
      ) : (
        <ul className="header-menus" onClick={() => setMenuOpened(false)}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#programs"> Programs </a>
          </li>
          <li>
            <a href="#reasons"> Why Us </a>
          </li>
          <li>
            <a href="#plans"> Plans </a>
          </li>
          <li>
            <a href="#testimonials"> Testimonials </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
