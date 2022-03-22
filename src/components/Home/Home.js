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
              <span className="highlighted-text">Kamogelo Joy Letsoalo</span>{" "}
              and I'm
            </span>
            <br />
            <span className="profile-role-tagline">
              passionate about{" "}
              <span className="highlighted-text">Web App Development</span>.
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Bsc IT Graduate",
                    1000,
                    "Front-End Dev",
                    1000,
                    "Aspiring Full-Stack Dev",
                    1000,
                    "Enthusiastic Dev",
                    1000,
                  ]}
                />
              </h2>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
