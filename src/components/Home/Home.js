import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Jagdish Giri</h1>
          <h2>Full Stack Developer (Python & React)</h2>

          <p>
            I build scalable backend systems, automate workflows,
            and develop modern web applications using Python and React.
          </p>

          <p className="hero-highlight">
          • Python Backend Automation • REST APIs • React UI
          </p>

          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Jagdish Giri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
