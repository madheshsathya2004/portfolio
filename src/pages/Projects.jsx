import React from "react";
import { FaGlobeAmericas, FaRobot, FaServer, FaVideo } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Projects</h2>

      <div className="mt-4 d-flex flex-column gap-4">

        <div className="card project-card w-100">
          <div className="card-body">
            <h5 className="card-title"><FaGlobeAmericas className="icon" /> SIPIS</h5>
            <p>Geo-demographic analytics using React.js + QGIS + Leaflet</p>
            <a href="https://sipis-mmmd.vercel.app/" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </div>

        <div className="card project-card w-100">
          <div className="card-body">
            <h5 className="card-title"><FaRobot className="icon" /> Spam Ham Classifier</h5>
            <p>ML model deployed on Streamlit for SMS filtering</p>
            <a href="https://spamham123-jzdonya6gs2ddkf5fbur6e.streamlit.app/" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </div>

        <div className="card project-card w-100">
          <div className="card-body">
            <h5 className="card-title"><FaServer className="icon" /> PlotSales Website</h5>
            <ul className="mb-2">
              <li>V1 — Java Swing & JDBC</li>
              <li>V2 — Java Servlets & JSP</li>
              <li>V3 — HTML, CSS, JavaScript & PHP</li>
            </ul>
          </div>
        </div>

        <div className="card project-card w-100">
          <div className="card-body">
            <h5 className="card-title"><FaVideo className="icon" /> Parental Control Video Streaming</h5>
            <p>Streaming platform with restricted access modules</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
