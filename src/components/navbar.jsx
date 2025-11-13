import React from "react";
import logo from "../assets/react.svg";
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navi">
        <div className="left">
          <img src={logo} alt="React logo" />
        </div>
        <div className="right">
          <div className="about">About</div>
          <div className="work">Work</div>
          <div className="contact">Contact</div>
          <div className="resume">Resume</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
