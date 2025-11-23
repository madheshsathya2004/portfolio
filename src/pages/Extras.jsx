import React from "react";
import { FaLanguage, FaTableTennis, FaMedal, FaKeyboard } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const Extras = () => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Languages & Extracurriculars</h2>

      {/* Languages Section */}
      <div className="card shadow-sm extras-card mb-4 p-3">
        <div className="d-flex align-items-center mb-2">
          <FaLanguage className="me-2 icon" size={24} />
          <h4 className="m-0">Languages</h4>
        </div>

        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item">
            <FaLanguage className="me-2 icon" /> Tamil — Native Proficiency
          </li>
          <li className="list-group-item">
            <FaLanguage className="me-2 icon" /> English — Full Professional Proficiency
          </li>
          <li className="list-group-item">
            <FaLanguage className="me-2 icon" /> Hindi — Elementary Proficiency
          </li>
        </ul>
      </div>

      {/* Extra-curricular Section */}
      <div className="card shadow-sm extras-card p-3">
        <div className="d-flex align-items-center mb-2">
          <MdEmojiEvents className="me-2 icon" size={26} />
          <h4 className="m-0">Extra-curricular Activities</h4>
        </div>

        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item">
            <FaTableTennis className="me-2 icon" /> Table Tennis — Winner (PTU Annual Sports Meet 2022-2023)
          </li>
          <li className="list-group-item">
            <FaMedal className="me-2 icon" /> Technical Quiz — 1st place (World Water Day event)
          </li>
          <li className="list-group-item">
            <FaMedal className="me-2 icon" /> Technical Quiz — 3rd place (PTU literary club)
          </li>
          <li className="list-group-item">
            <FaKeyboard className="me-2 icon" /> Codegolf Participation — ICON symposium
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Extras;
