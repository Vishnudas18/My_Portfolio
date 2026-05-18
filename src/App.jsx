import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Experience";
import EducationSection from "./components/educationsection/EducationSection";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const SectionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.08 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* Spacer between sections with a subtle divider line */
const SectionDivider = () => (
  <div style={{ padding: "1.5rem 0" }}>
    <div className="section-divider" />
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground noise">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        <SectionDivider />

        {/* 2. About */}
        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionDivider />

        {/* 3. Skills */}
        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionDivider />

        {/* 4. Experience */}
        <SectionReveal>
          <Education />
        </SectionReveal>

        <SectionDivider />

        {/* 5. Education */}
        <SectionReveal>
          <EducationSection />
        </SectionReveal>

        <SectionDivider />

        {/* 6. Projects */}
        <SectionReveal>
          <Projects />
        </SectionReveal>
      </main>

      {/* 7. Footer */}
      <SectionDivider />
      <Footer />
    </div>
  );
}

export default App;
