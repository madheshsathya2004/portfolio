import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          Madhesh S
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
             <li className="nav-item me-3">
              <NavLink to="/education" className="nav-link">Education</NavLink>
            </li>
            
            <li className="nav-item me-3">
              <NavLink to="/skills" className="nav-link">Skills</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </li>
            
           
            <li className="nav-item me-3">
              <NavLink to="/internships" className="nav-link">Internships</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/achievements" className="nav-link">Achievements</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/extras" className="nav-link">More</NavLink>
            </li>
            <li className="nav-item ms-2">
              <a
                href="https://www.linkedin.com/in/madhesh-s-219aa8278/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item ms-2">
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary btn-sm"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
