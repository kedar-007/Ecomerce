import React from "react";
import WarrantyBanner from "../components/WarrantyBanner";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <div className="contactBanner">
        <h2>Contact</h2>
        <p>
          <span>Home {">"} </span>
          Contact
        </p>
      </div>
      <div className="contactTitles">
        <h2>Get In Touch With Us</h2>
        <p>
          For more informations about our products & services. Please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate !
        </p>
      </div>
      <div className="contactFormContainer">
        <form className="contactForm">
          <label>
            Your name
            <input type="text" name="name" placeholder="Your Name" />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="Your Email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Subject" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your Message"></textarea>
          </label>
          <div className="contactSubmitButton">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <WarrantyBanner />
    </div>
  );
}

export default Contact;
