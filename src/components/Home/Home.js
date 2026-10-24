import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const roles = [
  'Full Stack Developer',
  'Python Backend Engineer',
  'React Developer',
  'REST API Developer',
  'Software Engineer',
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRole];
    let timeout;

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length - 1));
      }, 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Jagdish Giri</h1>
          <h2 className="hero-role">
            <span className="typed-text">{displayed}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            Software Engineer at <strong>Valuenable</strong> — building scalable backend systems,
            REST APIs, and modern web applications with Python & React.
          </p>

          <div className="hero-buttons">
            <Link to="/Contact" className="btn-primary">Hire Me</Link>
            <Link to="/Projects" className="btn-secondary">View Projects</Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/jagdishgiri" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jagdish-giri" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:jgiri0785@gmail.com" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-badge">
          <div className="badge-ring">
            <span>2+</span>
            <small>Years Exp.</small>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Jagdish Giri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
