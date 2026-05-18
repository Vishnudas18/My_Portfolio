import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, GitBranch, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { number: "3+",  label: "Projects\nDelivered" },
  { number: "1+",  label: "Years\nExperience" },
  { number: "10+", label: "Technologies\nMastered" },
  { number: "8mo", label: "Intensive\nTraining" },
];

const specialties = [
  {
    icon: Code2,
    title: "Frontend Craft",
    desc: "Pixel-perfect, responsive UIs with React, Angular, and modern CSS systems.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: Server,
    title: "Backend Systems",
    desc: "Scalable REST APIs and auth systems built with Node.js, Express, and MongoDB.",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.2)",
  },
  {
    icon: GitBranch,
    title: "Agile Workflow",
    desc: "Git-driven collaboration, CI/CD practices, and scrum-based team delivery.",
    color: "#f0abfc",
    bg: "rgba(240,171,252,0.08)",
    border: "rgba(240,171,252,0.2)",
  },
];

const About = () => (
  <section
    id="about"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "5rem 1.5rem 4rem",
      position: "relative",
      overflow: "hidden",
      width: "100%",
    }}
  >
    {/* Background orb */}
    <div className="orb w-[500px] h-[500px] bg-primary/6 top-1/4 -right-48" />
    <div className="orb w-[300px] h-[300px] bg-secondary/5 bottom-0 -left-24" />

    <div style={{ width: "100%", maxWidth: "1000px", position: "relative", zIndex: 10 }}>

      {/* ── Section Label ── */}
      <motion.div
        custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}
      >
        <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">01</span>
        <span style={{ width: "2rem", height: "1px", background: "rgba(167,139,250,0.3)" }} />
        <span className="text-muted text-sm tracking-widest uppercase font-medium">About Me</span>
      </motion.div>

      {/* ── Two-column layout: Heading | Bio ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
        className="about-grid"
      >
        {/* Left — Big heading + CTA line */}
        <motion.div
          custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        >
          <h2
            className="font-display font-bold text-white tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}
          >
            Turning ideas into{" "}
            <span className="text-gradient">digital reality.</span>
          </h2>

          {/* Accent line */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ width: "2.5rem", height: "2px", background: "linear-gradient(90deg, #a78bfa, transparent)", borderRadius: "9999px" }} />
            <span className="text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500 }}>
              Full Stack Developer
            </span>
          </div>

          {/* Availability badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
            <span className="text-white/70" style={{ fontSize: "0.75rem", fontWeight: 500 }}>Available for opportunities</span>
          </div>
        </motion.div>

        {/* Right — Bio */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <p className="text-white/80 font-light" style={{ fontSize: "0.95rem", lineHeight: 1.85 }}>
            I'm a <strong className="text-white font-semibold">Results-driven Full Stack Developer</strong> with expertise
            in <span className="text-primary font-medium">MERN/MEAN stack</span> development, passionate about building
            scalable, user-centric web applications.
          </p>
          <p className="text-white/55 font-light" style={{ fontSize: "0.875rem", lineHeight: 1.85 }}>
            Proficient in React.js, Angular, Node.js, Express.js, and MongoDB — with hands-on experience in
            Next.js, TypeScript, and Tailwind CSS. Built real-world platforms including e-commerce systems and admin dashboards.
          </p>
          <p className="text-white/55 font-light" style={{ fontSize: "0.875rem", lineHeight: 1.85 }}>
            Skilled in RESTful API design, JWT authentication, Agile practices, and Git workflows — committed to
            clean code and high-quality delivery.
          </p>
        </motion.div>
      </div>

      {/* ── Stats Row ── */}
      <motion.div
        custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "1.25rem",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          marginBottom: "2.5rem",
        }}
        className="stats-row"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.75rem 1rem",
              background: "rgba(14,14,20,0.8)",
              textAlign: "center",
              gap: "0.35rem",
            }}
          >
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
            >
              {stat.number}
            </span>
            <span
              className="text-muted font-medium uppercase"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em", whiteSpace: "pre-line", lineHeight: 1.5 }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── Specialty Cards ── */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
        className="specialty-grid"
      >
        {specialties.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              custom={4 + i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-60px" }}
              style={{
                padding: "1.5rem",
                borderRadius: "1.125rem",
                border: `1px solid ${item.border}`,
                background: item.bg,
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                transition: "all 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)`;
                e.currentTarget.style.borderColor = item.color + "55";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = item.border;
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "38px", height: "38px", borderRadius: "0.75rem",
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={17} color={item.color} />
              </div>

              {/* Title */}
              <h4 className="text-white font-semibold" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>
                {item.title}
              </h4>

              {/* Desc */}
              <p className="text-muted font-light" style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default About;
