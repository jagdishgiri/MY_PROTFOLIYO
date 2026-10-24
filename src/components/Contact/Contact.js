import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mkjjowja', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact">
        <h2 className="contact-title">Let's Create Something Exceptional!</h2>
        <p className="contact-subtitle">
          Got a project, idea, or opportunity? Don't just browse — reach out!
          I'm a passionate developer ready to bring ideas to life, and I guarantee your message won't go unnoticed.
          Let's build something amazing together.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          {status === 'success' && (
            <p className="form-success">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
