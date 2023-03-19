import React, { useState } from "react";
import "./header.css";
import menu from "../../assets/bars.png";

type Props = {};

const Header = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="logo">Daily Burnout</div>
      {!menuOpened ? (
        <div className="menu-icon" onClick={() => setMenuOpened(true)}>
          <img src={menu} alt="menu-icon" />
        </div>
      ) : (
        <ul className="header-menus" onClick={() => setMenuOpened(false)}>
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
