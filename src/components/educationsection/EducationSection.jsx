import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const educationData = [
  {
    degree: "Master of Computer Application",
    institution: "Nehru College of Engineering & Research Centre, Pambady",
    period: "2024 — 2026",
    grade: "CGPA: 8.8",
    icon: "MCA",
  },
  {
    degree: "Bachelor of Science – Physics",
    institution: "NSS College Ottappalam",
    period: "2020 — 2023",
    grade: "Percentage: 60%",
    icon: "BSc",
  },
  {
    degree: "Computer Science (Higher Secondary)",
    institution: "GHSS Cherpulassery",
    period: "2018 — 2020",
    grade: "Percentage: 70%",
    icon: "HSS",
  },
];

const certifications = [
  {
    name: "ME(A)RN Stack Development",
    issuer: "Luminar Technolab",
    period: "Aug 2023 — Apr 2024",
    desc: "8-month intensive full-stack training covering MongoDB, Express, Angular/React, and Node.js with hands-on project experience.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div className="orb w-[400px] h-[400px] bg-secondary/8 -top-20 -left-32" />

      <div style={{ width: "100%", maxWidth: "900px", position: "relative", zIndex: 10 }}>

        {/* Section Label */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">04</span>
          <span style={{ width: "2rem", height: "1px", background: "rgba(167,139,250,0.3)" }} />
          <span className="text-muted text-sm tracking-widest uppercase font-medium">Education</span>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
          className="font-display font-bold text-white tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem", textAlign: "center" }}>
          Academic <span className="text-gradient">foundation.</span>
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
          className="text-muted"
          style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto" }}>
          My educational background and certifications.
        </motion.p>

        {/* Education Cards — horizontal timeline style */}
        <div className="edu-cards-list" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-60px" }}
              transition={{ delay: idx * 0.1 }}
              className="edu-card-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(14,14,20,0.5)",
                transition: "all 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.2)";
                e.currentTarget.style.background = "rgba(14,14,20,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.background = "rgba(14,14,20,0.5)";
              }}
            >
              {/* Badge */}
              <div
                className="font-display font-bold text-primary"
                style={{
                  minWidth: "52px",
                  height: "52px",
                  borderRadius: "0.75rem",
                  background: "rgba(167,139,250,0.1)",
                  border: "1px solid rgba(167,139,250,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 className="text-white font-bold" style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>
                  {item.degree}
                </h3>
                <p className="text-muted font-light" style={{ fontSize: "0.85rem", marginBottom: "0.35rem" }}>
                  {item.institution}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span className="text-muted font-medium" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    {item.period}
                  </span>
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                  <span className="text-primary/80 font-semibold" style={{ fontSize: "0.75rem" }}>
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Graduation Icon */}
              <div className="text-primary/30 edu-grad-icon" style={{ flexShrink: 0 }}>
                <GraduationCap size={22} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
            <span className="text-white font-semibold" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Certifications
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
          </div>

          <div className="edu-cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(14,14,20,0.4)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(129,140,248,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}
              >
                <div className="text-secondary" style={{ padding: "0.5rem", borderRadius: "0.625rem", background: "rgba(129,140,248,0.1)", flexShrink: 0 }}>
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold" style={{ fontSize: "0.9rem", marginBottom: "0.2rem" }}>{cert.name}</h4>
                  <p className="text-primary/70 font-medium" style={{ fontSize: "0.78rem", marginBottom: "0.2rem" }}>{cert.issuer}</p>
                  <span className="text-muted" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{cert.period}</span>
                  <p className="text-muted font-light" style={{ fontSize: "0.8rem", lineHeight: 1.6, marginTop: "0.6rem" }}>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;
