import React from "react";
import "../css/Contactform.css";
import contact from "../images/contact.png";
import contactemail from "../images/contactemail.png";
import contactlocation from "../images/contactlocation.png";
import contactphone from "../images/contactphone.png";

const Contactform = () => {
  return (
    <div class="contact-form-container">
      <div class="left-div">
        <h1>Contact Us</h1>
        <p>Get in touch with us</p>
        <form class="contact-form">
          <input type="text" name="name" placeholder="Enter your name" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <textarea name="message" placeholder="Type your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="right-div">
        <img src={contact} alt="Contact Image" />
        <div class="image-info">
          <div class="info-item">
            <img src={contactlocation} alt="Location" />
            <p>4398 Dubai St N, Suite 888Boston, MA, 84020</p>
          </div>
          <div class="info-item">
            <img src={contactphone} alt="Phone Number" />
            <p>123-456-7890</p>
          </div>
          <div class="info-item">
            <img src={contactemail} alt="Email Address" />
            <p>support.ImmersiveInsights.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
