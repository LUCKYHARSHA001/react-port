import React from 'react'
import '../styles/Heropage.css'
const Heropage = () => {
  return (
   <div className="hero-section">
    <div className="hero-content">
        <p className="role-tag">FULL STACK DEVELOPER</p>
        <h1 className="main-heading">
            Building the <br />
            <span className="digital-future">Digital Future</span>.
        </h1>
        <p className="tagline">
            I design and build exceptional digital experiences that are fast, accessible, and visually stunning. Let's turn your vision into a reality.
        </p>
        <div className="cta-buttons">
            <a href="#" className="btn btn-primary">View Work →</a>
            <a href="#" className="btn btn-secondary">View CV 📄</a>
            <a href="#" className="btn btn-tertiary">Contact Me</a>
        </div>
    </div>
    <div className="hero-graphic"></div>
   </div>
  )
}

export default Heropage