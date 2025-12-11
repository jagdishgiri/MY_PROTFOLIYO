import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with user authentication and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app to manage tasks with drag-and-drop functionality.',
      tech: ['React', 'Redux', 'Firebase'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio, built to showcase my skills and projects.',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: '#',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              <h4>Tech Stack:</h4>
              <ul>
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;