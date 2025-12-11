import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Jagdish Giri</h1>
          <h2>Full Stack Developer</h2>
          {/* <p>Building modern, responsive, and scalable web applications with passion.</p> */}
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
      

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in building web applications using
          React, Node.js, and other modern technologies. I love creating user-friendly
          interfaces and solving complex problems.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>React.js</li>
            <li>python </li>
            <li>mongoDB</li>
            <li>CSS3 & HTML5</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Jagdish Giri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;