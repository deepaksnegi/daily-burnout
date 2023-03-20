import React, { useRef, useState } from "react";
import "./header.css";
import menu from "../../assets/bars.png";
import useOnClickOutside from "../../useOnClickOutside";

type Props = {};

const Header = (props: Props) => {
  const isMobileView = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setMenuOpened(false));

  return (
    <div className="header">
      <div className="logo">Daily Burnout</div>
      {!menuOpened && isMobileView ? (
        <div className="menu-icon" onClick={() => setMenuOpened(true)}>
          <img src={menu} alt="menu-icon" />
        </div>
      ) : (
        <div
          ref={ref}
          className="header-menus"
          onClick={() => setMenuOpened(false)}
        >
          <a href="/">Home</a>

          <a href="#programs"> Programs </a>

          <a href="#reasons"> Why Us </a>

          <a href="#plans"> Plans </a>

          <a href="#testimonials"> Testimonials </a>
        </div>
      )}
    </div>
  );
};

export default Header;
