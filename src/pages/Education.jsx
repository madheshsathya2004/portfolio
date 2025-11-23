import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Education</h2>

      <div className="d-flex flex-column gap-3 mt-3">

        <div className="edu-card p-3">
          <h5><FaGraduationCap className="icon" /> B.Tech — Information Technology</h5>
          <p className="mb-1">Puducherry Technological University</p>
          <small>2021 - 2025</small>
          <p className="mt-2 mb-0">CGPA: 9.62</p>
        </div>

        <div className="edu-card p-3">
          <h5><FaGraduationCap className="icon" /> HSC</h5>
          <p className="mb-1">Petit Seminaire Higher Secondary School</p>
          <small>2020 - 2021</small>
          <p className="mb-0">Percentage: 96.96%</p>
        </div>

        <div className="edu-card p-3">
          <h5><FaGraduationCap className="icon" /> SSLC</h5>
          <p className="mb-1">Petit Seminaire Higher Secondary School</p>
          <small>2018 - 2019</small>
          <p className="mb-0">Percentage: 95.6%</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
