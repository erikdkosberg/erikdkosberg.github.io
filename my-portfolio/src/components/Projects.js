import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'VCDS Interface',
      description: 'A SQL Alchemy backend setup to generate charts of sensor data in the VCDS (VagCom) reader for Volkswagen/Audi using Plotly and Python.',
      link: 'https://github.com/erikdkosberg/VCDS-Interface'
    },
    {
      title: 'Media Library Application',
      description: 'Python interface to the Photos.db sqlite tables for iCloud photos from one of three different methods: osxphotos, pyicloud, or querying the tables directly.',
      link: 'https://github.com/erikdkosberg/Media-Library-Application'
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a className="button" href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
