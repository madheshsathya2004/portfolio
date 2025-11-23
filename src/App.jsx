import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Internships from "./pages/Internships";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Workshops from "./pages/Workshops";
import Extras from "./pages/Extras";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
