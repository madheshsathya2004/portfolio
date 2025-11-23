import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLanguage,
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase
} from "react-icons/fa";

const Home = () => {
  return (
    <header className="hero text-white d-flex align-items-center justify-content-center text-center">
      <div className="container">

        {/* Profile Photo */}
        <div className="d-flex justify-content-center">
          <img
            src="/profile.jpg"
            alt="Madhesh"
            className="shadow mb-3"
            style={{
              width: 160,
              height: 180,
              objectFit: "cover",
              borderRadius: "8px",
              border: "4px solid var(--neon1)",
            }}
          />
        </div>

        <h1 className="display-5 fw-bold">Madhesh Sathyanarayanan</h1>
        <p className="lead mb-1">B.Tech(Honors)-Information Technology • Full-Stack & ML</p>
        <p className="mb-3">CGPA: 9.62</p>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <Link className="btn custom-btn-outline" to="/projects">Projects</Link>
          <Link className="btn custom-btn-primary" to="/contact">Contact</Link>
        </div>

        <hr className="my-4" />

        <div className="row gy-3">

          {/* Contact Section */}
          <div className="col-md-4">
            <h6 className="muted-title"><FaEnvelope /> Contact</h6>
            <p className="info-text"><FaEnvelope className="me-2" /> madhehsathya2004@gmail.com</p>
            <p className="info-text"><FaPhoneAlt className="me-2" /> +91 9791273986</p>
            <p className="info-text"><FaMapMarkerAlt className="me-2" /> Puducherry, India</p>
          </div>

          {/* Languages Section */}
          <div className="col-md-4">
            <h6 className="muted-title"><FaLanguage /> Languages</h6>
            <p className="info-text">Tamil (Native)</p>
            <p className="info-text">English (Professional)</p>
            <p className="info-text">Hindi (Elementary)</p>
          </div>

          {/* Areas of Interest Section */}
          <div className="col-md-4">
            <h6 className="muted-title"><FaLaptopCode /> Areas of Interest</h6>
            <p className="info-text"><FaNetworkWired className="me-2" /> Networking</p>
            <p className="info-text"><FaDatabase className="me-2" /> Database Systems</p>
            <p className="info-text"><FaLaptopCode className="me-2" /> Advanced Java Programming</p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Home;
