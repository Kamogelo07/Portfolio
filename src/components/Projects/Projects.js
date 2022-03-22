import React from "react";
import { projects } from "../../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="project-container">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have create two JavaScript projects and one React app project thus
            far for my protfolio.
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
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.title}
                  </h2>
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
