// Contact.js
import React from 'react';
import './Contact.css'; // Import custom styles

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Email: janine.sarcia@gmail.com</p>
        <p>Phone: 09127768077</p>
        <p>&copy; {new Date().getFullYear()} Janine Sarcia. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

