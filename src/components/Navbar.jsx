import React from "react";
import "../styles/Navbar.css";
import harshalogo from "../assets/freepikavatar.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img
            src={harshalogo}
            className="logoclass"
            alt="bitmoji"
            height="50px"
            width="50px"
          />
          Harsha
        </div>
        <div className="navbar-right">
          <a href="#skills" className="Skills">
            Skills
          </a>
          <a href="#Projects" className="Projects">
            Projects
          </a>
          <a href="#Contact" className="contact">
            Contact
          </a>
          <a href="/resume.pdf" download="Harsha_Resume.pdf" className="resume">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
