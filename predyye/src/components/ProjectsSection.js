import React from "react";
import "../style/Style.css";

const projectsData = [
  {
    title: "BiblioTec",
    description: "An page para la biblioteca de el tecnologio de Costa Rica, gestionando las reservas de los cubiculos de los estudiando, creada el front con React + Vue, y el backend con firebase",
    technologies: "React + Vue, Firebase",
    githubLink: "https://github.com/Jeremy-mfs/BiblioTec",
    externalLink: "https://tecdigital.tec.ac.cr/dotlrn/index",
  },
  {
    title: "Personal Portfolio",  
    description: "A responsive portfolio site built with Gatsby to showcase projects and skills.",
    technologies: "Gatsby, React, GraphQL",
    githubLink: "https://github.com/predye28/personal-portfolio",
    externalLink: "https://tecdigital.tec.ac.cr/dotlrn/index",
  },
  {
    title: "BiblioTec",
    description: "An page para la biblioteca de el tecnologio de Costa Rica, gestionando las reservas de los cubiculos de los estudiando, creada el front con React + Vue, y el backend con firebase",
    technologies: "React + Vue, Firebase",
    githubLink: "https://github.com/Jeremy-mfs/BiblioTec",
    externalLink: "https://tecdigital.tec.ac.cr/dotlrn/index",
  },
  {
    title: "BiblioTec",
    description: "An page para la biblioteca de el tecnologio de Costa Rica, gestionando las reservas de los cubiculos de los estudiando, creada el front con React + Vue, y el backend con firebase",
    technologies: "React + Vue, Firebase",
    githubLink: "https://github.com/Jeremy-mfs/BiblioTec",
    externalLink: "https://tecdigital.tec.ac.cr/dotlrn/index",
  },
 
];

const ProjectCard = ({ project }) => {
  return (
    
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-technologies">{project.technologies}</p>
      <div className="project-links">
        <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="external-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="section-spacing" />
      <h2 className="section-subtitle">Projects</h2>
      <div className="underline"></div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;