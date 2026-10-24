import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Tradex Hub',
    description:
      'A trading bot frontend platform that provides real-time market insights and automated trading features. Built with React.js for a fast, responsive user experience.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'REST API'],
    github: 'https://github.com/jagdishgiri/tradex-hub-frontend',
    demo: null,
    category: 'Frontend',
  },
  {
    title: 'Feedback System',
    description:
      'A full-stack feedback management app for hotels — customers can submit reviews and hotel admins can manage and analyze feedback. Separate backend and frontend architecture.',
    tech: ['Python', 'Flask', 'React.js', 'MongoDB'],
    github: 'https://github.com/jagdishgiri/feedback-backend',
    githubFrontend: 'https://github.com/jagdishgiri/feedback-frontend',
    demo: null,
    category: 'Full Stack',
  },
  {
    title: 'Gananath Temple',
    description:
      'A web application for Gananath Temple — provides information about the temple, events, and services. Clean and accessible interface for devotees.',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/jagdishgiri/gananath-temple',
    demo: null,
    category: 'Frontend',
  },
  {
    title: 'My Portfolio',
    description:
      'This very portfolio — designed and developed from scratch to showcase my skills, experience, and projects. Built with React.js and deployed with a professional dark theme.',
    tech: ['React.js', 'CSS3', 'Formspree', 'React Icons'],
    github: 'https://github.com/jagdishgiri/MY_PROTFOLIYO',
    demo: null,
    category: 'Frontend',
  },
];

const categories = ['All', 'Full Stack', 'Frontend'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="projects-container">
          <div className="section-tag">Projects</div>
          <h2 className="section-title">
            Things I've <span>Built</span>
          </h2>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="project-grid">
            {filtered.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="card-top">
                  <span className="project-category">{project.category}</span>
                  <div className="card-links">
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Frontend Repo"
                      >
                        <FaGithub />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.githubFrontend ? 'Backend Repo' : 'GitHub'}
                    >
                      <FaGithub />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
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

export default Projects;
