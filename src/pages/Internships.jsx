import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Internships = () => {
   return (
   
   <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
  >
     
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Internships</h2>

      <div className="mt-4">
        <div className="edu-card p-3 mb-3">
          <h5><FaBriefcase className="icon" /> Summer Intern — French Institute of Puducherry</h5>
          <small>May 2024 - June 2024</small>
          <p className="mt-2">
            Built "SIPIS" • React.js + QGIS + Leaflet • Designed demographic visualization UI.
          </p>
        </div>

        <div className="edu-card p-3 mb-3">
          <h5><FaBriefcase className="icon" /> Intern — SYSCORP</h5>
          <small>May 2023 - June 2023</small>
          <p className="mt-2">
            SEO, CRM & Google Ads campaign optimization for engagement and retention.
          </p>
        </div>

        <div className="edu-card p-3">
          <h5><FaBriefcase className="icon" /> Intern — RINEX</h5>
          <small>May 2022 - June 2022</small>
          <p className="mt-2">
            ML projects (Spam Ham, Species Classifier) + Streamlit + Chatbot integration.
          </p>
        </div>
      </div>
    </section>

  </motion.div>
   );
};

export default Internships;
