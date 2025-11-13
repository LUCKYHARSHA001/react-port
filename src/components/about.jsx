import React from 'react';
import '../styles/about.css'; // Make sure to create this CSS file
import Image from '../assets/images/camera.png'

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <h2 className="aboutme-title">A Little About Me</h2>
      <div className="aboutme-main">
        <div className="camera-section">
          <img src={Image} alt="Retro Camera" className="camera-img" />
          <div className="camera-labels">
            <span className="made-in-label">MADE IN 2006</span>
            <div className="introvert-warning">
              <span>⚠️ CAUTION</span> <br />
              INTROVERT
            </div>
          </div>
        </div>
        <div className="desc-section">
          <div className="desc-box">
            <p>
              I&apos;m Harsha, a third year Computer Science student at
              <span className="highlight"> Aditya University</span>
              {' '}with an eye for clean visuals and a soft spot for
              <span className="highlight"> Full Stack Development</span>.
            </p>
          </div>
          <div className="desc-box">
            <p>
             I've built and shipped robust solutions as a <span className="highlight">full stack developer</span>, passionate about crafting <span className="highlight">efficient code</span> from database to interface. Whether architecting <span className="highlight">scalable systems</span> or creating polished user flows, I believe every project should reflect a balance of performance and usability. My motto? <span className="highlight">User-driven design</span>, <span className="highlight">reliable solutions</span>, and always a touch of creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
