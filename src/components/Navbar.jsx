import React from "react";
import "../styles/Navbar.css";
import harshalogo from "../assets/harshabitmoji.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={harshalogo} className="logoclass" alt="bitmoji" height="50px" width="50px"/>
          Harsha</div>
        <div className="navbar-right">
          <div className="About">About</div>
          <div className="resume">Resume</div>
          <div className="contact">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
