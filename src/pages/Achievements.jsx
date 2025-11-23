import React from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

const Achievements = () => {
  const items = [
    
    "Certificate of Merit — Puducherry Technological University - First Rank — B.Tech 2nd Year (2022-2023)",
    "Certificate of Merit — Puducherry Technological University - First Rank — B.Tech 3rd Year (2023-2024)",
    "Certificate of Merit — Puducherry Technological University - First Rank — B.Tech Final Year (2024-2025)",
    "Runner-up Ideathon (TALROP & Times of India) — ₹40,000 prize",
  ];
   return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
  >

    
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4"><FaTrophy className="icon" /> Achievements</h2>

      <div className="mt-4 d-flex flex-column gap-3">
        {items.map((text, i) => (
          <div key={i} className="edu-card p-3 d-flex align-items-start gap-2">
            <FaMedal className="icon" size={20} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
 
  </motion.div>
 );
 
};

export default Achievements;
