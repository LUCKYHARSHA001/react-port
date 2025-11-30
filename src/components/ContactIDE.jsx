import React from 'react';
import '../styles/ContactIDE.css'; 

const ContactIDE = () => {
  return (

    <div className="contact-page-wrapper" id="Contact">
      
      <div className="top-part">
        <h1>initiate Contact</h1>
        <p>Ready to launch your next project? Signal me.</p>
      </div>

      <div className="ide-container">

        <div className="ide-sidebar">
          <div className="sidebar-header">EXPLORER</div>
          
          <div className="explorer-section">
            <div className="explorer-title">▼ PORTFOLIO</div>

            <div className="file-list">
              <a href="mailto:harshaalla7@gmail.com" className="file-item">
                <span className="file-icon">✉</span>
                <span>harsha_email.json</span>
              </a>
              <a href="tel:+91 9391994575" className="file-item">
                <span className="file-icon">📞</span>
                <span>phone_number.js</span>
              </a>
              <div className="file-item">
                <span className="file-icon">📍</span>
                <span>Vijayawada_AP.map</span>
              </div>
              <a href="https://github.com/LUCKYHARSHA001" target="_blank" rel="noreferrer" className="file-item">
                <span className="file-icon">🐙</span>
                <span>github_profile.git</span>
              </a>
            </div>
          </div>
        </div>

        <div className="ide-editor">

          <div className="editor-tabs">
            <div className="tab">
              <span className="tab-icon">⚛</span>
              Contact.jsx
              <span style={{marginLeft: '10px', fontSize: '12px'}}>✕</span>
            </div>
          </div>

          <div className="code-area">
            <form>

              <div className="code-line">
                <span className="line-num">1</span>
                <div className="code-content">
                  <span className="keyword">import</span> <span className="bracket">{`{`}</span> <span className="variable">sendTransmission</span> <span className="bracket">{`}`}</span> <span className="keyword">from</span> <span className="string">'./universe'</span>;
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">2</span>
                <div className="code-content"></div>
              </div>

              <div className="code-line">
                <span className="line-num">3</span>
                <div className="code-content">
                  <span className="keyword">const</span> <span className="function">ContactForm</span> = <span className="bracket">()</span> <span className="keyword">=&gt;</span> <span className="bracket">{`{`}</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">4</span>
                <div className="code-content" style={{ paddingLeft: '20px' }}>
                  <span className="keyword">const</span> <span className="variable">sender</span> = <span className="bracket">{`{`}</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">5</span>
                <div className="code-content" style={{ paddingLeft: '40px' }}>
                  <span className="variable">name:</span> <span className="string">"</span>
                  <input type="text" className="code-input" placeholder="Harsha" style={{ width: '150px' }} />
                  <span className="string">",</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">6</span>
                <div className="code-content" style={{ paddingLeft: '40px' }}>
                  <span className="variable">email:</span> <span className="string">"</span>
                  <input type="email" className="code-input" placeholder="email@example.com" style={{ width: '200px' }} />
                  <span className="string">",</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">7</span>
                <div className="code-content" style={{ paddingLeft: '40px' }}>
                   <span className="variable">message:</span> <span className="string">`</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">8</span>
                <div className="code-content" style={{ paddingLeft: '60px' }}>
                  <textarea 
                    className="code-input" 
                    rows="1" 
                    placeholder="Tell me about your project...Lets Collabrate" 
                    style={{ borderBottom: 'none', fontStyle: 'italic', color: '#ce9178', width: '90%', verticalAlign: 'top' }}
                  ></textarea>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">9</span>
                <div className="code-content" style={{ paddingLeft: '40px' }}>
                  <span className="string">`</span>
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">10</span>
                <div className="code-content" style={{ paddingLeft: '20px' }}>
                   <span className="bracket">{`}`}</span>;
                </div>
              </div>

              <div className="code-line">
                <span className="line-num">11</span>
                <div className="code-content"></div>
              </div>

              <div className="code-line">
                <span className="line-num">12</span>
                <div className="code-content">
                  <span className="keyword">return</span> 
                  <button type="button" className="submit-btn">
                     sendTransmission(sender);
                  </button>
                </div>
              </div>

               <div className="code-line">
                <span className="line-num">13</span>
                <div className="code-content">
                  <span className="bracket">{`}`}</span>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIDE;