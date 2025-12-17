import React from 'react';
import './AboutSkills.css';

const AboutSkills = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>

        <p>
          I am a Full-Stack Developer with over 1 year of professional experience
          in backend development, automation, and full-stack web applications.
          My primary focus is on building efficient backend systems using Python.
        </p>

        <p>
          I have hands-on experience working with Flask and FastAPI to develop
          RESTful APIs, handle backend logic, and integrate databases like MongoDB.
          I also work extensively on automation tasks and data processing using
          Pandas and NumPy.
        </p>

        <p>
          On the frontend, I use React to create clean, responsive, and user-friendly
          interfaces. I enjoy building complete end-to-end applications by connecting
          frontend components with backend APIs.
        </p>

        <p>
          I am always eager to learn new technologies, improve my skills,
          and contribute to impactful real-world projects.
        </p>

        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Python Backend Development & Automation</li>
            <li>Flask & FastAPI (REST APIs)</li>
            <li>Pandas & NumPy</li>
            <li>React.js</li>
            <li>MongoDB</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Jenkins (CI/CD Basics)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutSkills;
