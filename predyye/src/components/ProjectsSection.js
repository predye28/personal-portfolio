import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style/Style.css";

const projectsData = [
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
  {
    title: "app adventure",
    technologies: "swift, mongodb",
    description: "app adventure y se trata de esto y esto y que va de esto y impacta de esta manera",
    image: "prueba", 
    link: "https://github.com/predye28/ProyectoDeQA",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            {project.image === "prueba" && (
              <StaticImage
                src="../images/imgProjects/prueba.jpg"
                alt={project.title}
                className="project-image"
                placeholder="blurred"
                quality={100}
              />
            )}
   
            <h3 className="project-title">{project.title}</h3>
            <p className="project-technologies">{project.technologies}</p>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
