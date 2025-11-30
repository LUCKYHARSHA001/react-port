import React from "react";
import "../styles/Contact.css"
const contact = () => {
  return (
    <div className="contact-page" id="Contact">
      <div className="top-part">
        <h1>initiate Contact</h1>
        <p>Ready to launch your next project? Signal me.</p>
      </div>
      <div className="down-part">
        <div className="down-left-part">
          <div className="contact-container">
            <div className="contact-item">
              <div className="icon-box email-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>harshaalla7@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-box phone-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 9391994575</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-box base-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Base</h3>
                <p>Vijayawada, AP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-right-part">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Harsha"></input>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email@example"
              ></input>
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button type="button" class="submit-btn">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
