import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState("false");
  const toggleMenu = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <div onClick={toggleMenu} className={showMenu ? "nav-btn" : "btn-cross"}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={"nav-default"}>
        <ul className="menu-nav-default">
          <a href="#home">
            <li>Home</li>
          </a>

          <a href="#projects">
            <li>Projects</li>
          </a>

          <a href="#skills">
            <li>Skills</li>
          </a>

          <a href="#contacts">
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>

      <nav className={`${showMenu ? "menu-hide" : "menu-show"}`}>
        <div className="nav-branding"> </div>
        <ul className="menu-nav">
          <a href="#home" onClick={toggleMenu}>
            <li>Home</li>
          </a>

          <a href="#projects" onClick={toggleMenu}>
            <li>Projects</li>
          </a>

          <a href="#skills" onClick={toggleMenu}>
            <li>Skills</li>
          </a>

          <a href="#contacts" onClick={toggleMenu}>
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
