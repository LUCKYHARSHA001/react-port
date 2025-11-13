import React from "react";
import Navbar from "./navbar";
import '../styles/hero.css'
import harsha from '../assets/images/harsha.jpg'
const hero = () => {
  return (
    <>
      <div className="container">
        <div className="topleft">
          part-time dreamer,<br></br>
          full-time developer
        </div>
        <img className="center-image" src={harsha} alt="Middle Picture"></img>
        <div className="bottom-right">
          Currently open<br></br>
          to ideas, feedback,<br></br>
          and maybe an internship
        </div>
      </div>
    </>
  );
};

export default hero;
