import React from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideCliHandler from "react-outside-click-handler";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const getMenuStyle = (showMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !showMenu && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideCliHandler
          onOutsideClick={() => {
            setShowMenu(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(showMenu)}>
            <a href="/">Home</a>
            <a href="#residencie">Residencies</a>
            <a href="#companies">Download</a>
            <a href="#value">ValueS</a>
            <button className="button">Login</button>
          </div>
        </OutsideCliHandler>
        <div
          className="menu-icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
