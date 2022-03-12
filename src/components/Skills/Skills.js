import React from "react";
import { skillsList } from "../../skillsList";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>

          <div className="grid-skills">
            {skillsList.map((skill) => (
              <a className="grid-container" key={skill.title} target="_blank">
                <div>
                  <div className="grid-skills-child">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {skill.title}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"></div>
      </div>
    </section>
  );
}
