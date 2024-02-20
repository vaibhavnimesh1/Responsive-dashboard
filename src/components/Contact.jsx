import React from "react";
import "./style.css";

const ContactForm = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div className="form">
          <h2 htmlFor="name">Name:</h2>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form">
          <h2 htmlFor="email">Email:</h2>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form">
          <h2 htmlFor="message">Message:</h2>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
