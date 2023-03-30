import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-s1">
          <div className="footer-logo"></div>
          <div className="footer-sociallinks"></div>
        </div>
        <div className="footer-s2">
          <div className="footer-s2-container">
            <div className="services">
              <p>Services</p>
              <a>Moderated Testing</a>
              <a>Umoderated testing</a>
              <a>User Interviews</a>
            </div>
            <div className="resources">
              <p>Services</p>
              <a>Guides</a>
              <a>Tools</a>
              <a>Glossary</a>
            </div>
            <div className="pricing">
              <a>Pricing</a>
            </div>
            <div className="aboutus">
              <a>About us</a>
            </div>
            <div className="contactus">
              <a>Contact us</a>
            </div>
          </div>
        </div>
        <div className="footer-s3">
          <div className="footer-s3-container">
            <div className="footer">
              <a>Privacy</a>
              <a>Accessability</a>
              <a>Terms</a>
              <a>Legal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
