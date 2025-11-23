import React from "react";
import { FaUsersCog } from "react-icons/fa";

const Workshops = () => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4"><FaUsersCog className="icon" /> Workshops</h2>

      <div className="mt-4 d-flex flex-column gap-3">
        <div className="edu-card p-3">
          Augmented Reality — 2 day workshop by IT Association & Exor Robotics
        </div>

        <div className="edu-card p-3">
          ReactJS — 2 day workshop by IT Dept, Puducherry Technological University (S grade)
        </div>
      </div>
    </section>
  );
};

export default Workshops;
