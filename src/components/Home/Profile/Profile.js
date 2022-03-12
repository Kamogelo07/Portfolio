import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/kamogelo-letsoalo-76a766124/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Kamogelo07/Portfolio" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Kamogelo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionate about web app development
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a
              href="01KamogeloLetsoalo_Resume.pdf"
              download="01KamogeloLetsoaloResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
