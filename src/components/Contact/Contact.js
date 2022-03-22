import React from "react";
import resume from "../../Resume/01KamogeloLetsoalo_Resume.pdf";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section id="contacts">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <button className="resume-btn">
            <a href={resume} download="01KamogeloJoyLetsoalo_Resume">
              Resume
            </a>
          </button>
          <div className="icons">
            <a
              className="icons-a"
              href="https://www.linkedin.com/in/kamogelo-letsoalo-76a766124/"
              target="_blank"
            >
              <i className=" fab fa-linkedin fa-2x"></i>
            </a>
            <a
              className="icons-a"
              href="https://github.com/Kamogelo07"
              target="_blank"
            >
              <i className=" fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
