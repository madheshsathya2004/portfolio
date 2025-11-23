import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaDownload, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
  
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
  >

  
    <section className="container py-5 text-center">
      <h2 className="fw-bold neon mb-5">Contact Me</h2>

      <div className="row justify-content-center mb-4">
        {/* Email */}
        <div className="col-md-4 contact-card p-4 mb-3">
          <FaEnvelope size={32} className="icon mb-2" />
          <h5 className="fw-bold">Email</h5>
          <p><a href="mailto:madhehsathya2004@gmail.com" className="contact-link">madhehsathya2004@gmail.com</a></p>
        </div>

        {/* Phone */}
        <div className="col-md-4 contact-card p-4 mb-3">
          <FaPhoneAlt size={32} className="icon mb-2" />
          <h5 className="fw-bold">Phone</h5>
          <p><a href="tel:+919791273986" className="contact-link">+91 9791273986</a></p>
        </div>

        {/* Address */}
        <div className="col-md-4 contact-card p-4 mb-3">
          <FaMapMarkerAlt size={32} className="icon mb-2" />
          <h5 className="fw-bold">Location</h5>
          <p>No 58, Jeevanandham Street,<br />Puducherry — 605001</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 d-flex justify-content-center gap-3">
        <a className="btn btn-primary btn-lg custom-btn" href="/resume.pdf" download>
          <FaDownload className="me-2" /> Download Resume
        </a>
        <a className="btn btn-outline-light btn-lg custom-btn" href="https://www.linkedin.com/in/madhesh-s-219aa8278/" target="_blank" rel="noreferrer">
          <FaLinkedin className="me-2" /> LinkedIn
        </a>
        <a className="btn btn-outline-light btn-lg custom-btn" href="https://github.com/madheshsathya2004" target="_blank" rel="noreferrer">
          <FaGithub className="me-2" /> Github
        </a>
      </div>
    </section>
 
  </motion.div>
   );
};

export default Contact;
