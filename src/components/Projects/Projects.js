import React from "react";
import { projects } from "../../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="project-container">
        <div>
          <h1>Projects</h1>
          <p>
            I have created two JavaScript projects and one React app project
            thus far.
          </p>
        </div>
        <div className="grid-projects">
          {projects.map((project) => (
            <a
              className="grid-container"
              href={project.link}
              key={project.title}
              target="_blank"
            >
              <div>
                <div className="grid-child">
                  <h2>{project.title}</h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
