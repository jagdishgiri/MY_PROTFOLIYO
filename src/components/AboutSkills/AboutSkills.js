import React from 'react';
import {
  FaPython, FaReact, FaGitAlt, FaGithub, FaAws, FaDatabase,
} from 'react-icons/fa';
import {
  SiFlask, SiFastapi, SiMongodb, SiPandas, SiNumpy, SiJenkins, SiHtml5, SiCss, SiJavascript,
} from 'react-icons/si';
import './AboutSkills.css';

const skillCategories = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST APIs', icon: <FaDatabase /> },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'AWS', icon: <FaAws /> },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
    ],
  },
];

const AboutSkills = () => {
  return (
    <div className="about-page">

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Passionate about building <span>scalable software</span></h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a <strong>Full Stack Developer</strong> currently working at <strong>Valuenable</strong>,
                where I design and develop backend systems and full-stack web applications.
                My primary stack is <strong>Python (Flask/FastAPI)</strong> on the backend
                and <strong>React.js</strong> on the frontend.
              </p>
              <p>
                I specialize in building RESTful APIs, automating workflows, and integrating
                databases like MongoDB. I enjoy the entire development lifecycle — from
                architecture design to deployment.
              </p>
              <p>
                I'm always looking for opportunities to solve real-world problems through clean,
                efficient, and maintainable code.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tech Stack</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">Lines of Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="about-container">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Where I've <span>Worked</span></h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-company">Valuenable</span>
                </div>
                <span className="timeline-date">2024 — Present</span>
                <ul className="timeline-points">
                  <li>Developed and maintained RESTful APIs using Python (Flask/FastAPI)</li>
                  <li>Built full-stack web applications with React.js frontend and Python backend</li>
                  <li>Worked with MongoDB for database design and management</li>
                  <li>Automated business workflows using Python scripting</li>
                  <li>Collaborated on CI/CD pipeline setup using Jenkins and Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="about-container">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">My <span>Tech Stack</span></h2>

          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <div className="skill-category" key={i}>
                <h4 className="category-title">{cat.category}</h4>
                <div className="skill-cards">
                  {cat.skills.map((skill, j) => (
                    <div className="skill-card" key={j}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutSkills;
