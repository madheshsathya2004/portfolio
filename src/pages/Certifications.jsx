import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
     return (
   <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
  >

  
    <section className="container py-5">
      <h2 className="fw-bold neon text-center mb-4">Certifications</h2>
      <ul className="mt-3">
        <li>Data Science — RINEX in association with Cognizance, IIT Roorkee (05/2022 - 06/2022)</li>
        <li>App Development — RINEX in association with E-Cell IIT Bhubaneswar (04/2022 - 05/2022)</li>
        <li>Junior Grade Typing (English) — First class with Distinction</li>
        <li>NPTEL: Introduction To Cognitive Psychology; Consumer Psychology; Ethics In Engineering Practice</li>
      </ul>
    </section>
 
  </motion.div>
  );
  
};

export default Certifications;
