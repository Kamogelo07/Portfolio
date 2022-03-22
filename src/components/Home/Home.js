import React from "react";
import Typical from "react-typical";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm{" "}
              <span className="highlighted-text">Kamogelo Joy Letsoalo</span>,
            </span>
            <br />
            <span className="profile-role-tagline">
              Passionate about Web App Development
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Aspiring Full Stack Developer",
                    1000,
                    "Bsc IT Graudate",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
