import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Reach out or leave a message below.</p>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:robbiemeucci@gmail.com">robbiemeucci@gmail.com</a></p>
          <p><strong>Location:</strong> Indianapolis, IN</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/robert-meucci-49b113110/" target="_blank" rel="noreferrer">linkedin.com/in/robertmeucci</a></p>
        </div>

        {/* Right: Contact Form */}
        <form
            className="contact-form"
            action="https://formspree.io/f/xyzpggeq"
            method="POST"
        >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
            </form>

      </div>
    </section>
  );
}

export default Contact;
