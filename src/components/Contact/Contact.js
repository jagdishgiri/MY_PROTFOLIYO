import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_3wa7bo7',     // ✅ Replace with your Service ID
      'template_3c3xyga',    // ✅ Replace with your Template ID
      formRef.current,
      'nltQZkkAa8VScQ6rj'    // ✅ Replace with your Public Key
    )
      .then(() => {
        alert('Message sent successfully!');
        formRef.current.reset(); // Clear the form
      })
      .catch((error) => {
        alert(`Failed to send message: ${error.text || error}`);
        console.error('EmailJS Error:', error);
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="contact-page">
      <section className="contact">
        {/* <h2>Contact Me</h2> */}
        <h2 className="contact-title">Let’s Create Something Exceptional!</h2>
        <p className="contact-subtitle">
          Got a project, idea, or opportunity? Don’t just browse — reach out!
          I’m a passionate developer ready to bring ideas to life, and I guarantee your message won’t go unnoticed.
          Let’s build something amazing together.
        </p>


        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
