import React from "react";
import { FaCode, FaCogs, FaLaptopCode, FaDatabase, FaBrain, FaPalette, FaComments, FaKeyboard } from "react-icons/fa";

const Skills = () => {
  const prog = [
    { name: "C", icon: <FaCode className="icon-skill" /> },
    { name: "C++", icon: <FaCogs className="icon-skill" /> },
    { name: "Java", icon: <FaLaptopCode className="icon-skill" /> },
    { name: "HTML", icon: <FaCode className="icon-skill" /> },
    { name: "CSS", icon: <FaPalette className="icon-skill" /> },
    { name: "JavaScript", icon: <FaCode className="icon-skill" /> },
    { name: "SQL", icon: <FaDatabase className="icon-skill" /> },
    { name: "Advanced Java", icon: <FaLaptopCode className="icon-skill" /> },
  ];

  const soft = [
    { name: "Problem Solving", icon: <FaBrain className="icon-skill" /> },
    { name: "Aesthetic Designing", icon: <FaPalette className="icon-skill" /> },
    { name: "Communication", icon: <FaComments className="icon-skill" /> },
    { name: "Fast Typing", icon: <FaKeyboard className="icon-skill" /> },
  ];

  return (
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Skills</h2>

      {/* Programming Skills */}
      <div className="skills-box mt-4 p-4 rounded">
        <h5 className="fw-bold mb-3">Programming Skills</h5>
        <ul className="skill-list">
          {prog.map((p) => (
            <li className="skill-item d-flex align-items-center gap-2" key={p.name}>
              {p.icon} {p.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="skills-box mt-4 p-4 rounded">
        <h5 className="fw-bold mb-3">Soft Skills</h5>
        <ul className="skill-list">
          {soft.map((s) => (
            <li className="skill-item d-flex align-items-center gap-2" key={s.name}>
              {s.icon} {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
