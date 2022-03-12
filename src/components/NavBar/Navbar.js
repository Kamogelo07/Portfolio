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
            {/* className="nav-a" to="/"> */}
            <li>Home</li>
          </a>

          <a href="#projects">
            {/* className="nav-a" to="/projects">*/}

            <li>Projects</li>
          </a>

          <a href="#skills">
            {/* className="nav-a" to="/skills"> */}
            <li>Skills</li>
          </a>

          {/* <a href="#API">
              className="nav-a" to="/api"> 
            <li>API</li>
          </a> */}

          <a href="#contacts">
            {/*className="nav-a" to="#contacts"> */}
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>

      <nav className={`${showMenu ? "menu-hide" : "menu-show"}`}>
        <div className="nav-branding"> </div>
        <ul className="menu-nav">
          <a href="#home" onClick={toggleMenu}>
            {/* onClick={toggleMenu} className="nav-a" to="/"> */}
            <li>Home</li>
          </a>

          <a href="#projects" onClick={toggleMenu}>
            {/*onClick={toggleMenu} className="nav-a" to="/projects">*/}

            <li>Projects</li>
          </a>

          <a href="#skills" onClick={toggleMenu}>
            {/* onClick={toggleMenu} className="nav-a" to="/skills"> */}
            <li>Skills</li>
          </a>

          {/* <a href="#API">
             onClick={toggleMenu} className="nav-a" to="/api"> 
            <li>API</li>
          </a> */}

          <a href="#contacts" onClick={toggleMenu}>
            {/* onClick={toggleMenu} className="nav-a" to="#contacts"> */}
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
