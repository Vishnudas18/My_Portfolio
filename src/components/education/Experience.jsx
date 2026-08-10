import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, MapPin, Calendar, Building2 } from "lucide-react";
import "./experience.css";

const experience = [
  {
    title: "Web Developer",
    org: "ESAB India Pvt Ltd",
    period: "June 2026 — Present",
    location: "Chennai, India",
    type: "Full-time",
    current: true,
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "Vue.js", "Docker", "Git"],
    points: [
      "Developing and maintaining full-stack web applications using modern frontend and backend technologies, with a focus on responsive interfaces and scalable application architecture.",
      "Working on an Asset Management System to manage assets, categories, users, permissions, attachments, calibration, financial information, and asset lifecycle operations.",
      "Building REST APIs with Node.js and Express.js, integrating PostgreSQL databases, implementing authentication and role-based access control, and using Docker for development and deployment workflows.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    org: "Codeedex Technologies",
    period: "Jan 2026 — May 2026",
    location: "Perinthalmanna,Malappuram",
    type: "Internship",
    current: false,
    tags: ["React", "Node.js", "MongoDB", "Express", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
    points: [
      "Developed full-stack web applications using the MERN stack, building responsive and dynamic user interfaces with HTML, CSS, and JavaScript.",
      "Worked on real-world projects including an E-commerce platform and a Shop Admin Panel — implementing product management, authentication, and dashboard functionalities.",
      "Gained experience with Angular, Next.js, and TypeScript for scalable applications; collaborated via Git workflows and scrum meetings.",
    ],
  },
  {
    title: "Internship Trainee",
    org: "Luminar Technolab",
    period: "Aug 2023 — Apr 2024",
    location: "Kochi, Kerala",
    type: "Training",
    current: false,
    tags: ["MERN", "MEAN", "Full Stack", "REST APIs", "MongoDB"],
    points: [
      "Completed 8+ months as a ME(A)RN Stack Internship Trainee, gaining hands-on experience in building full-stack projects.",
      "Developed an adaptive and collaborative mindset through intensive training, pair programming, and real-world problem-solving sessions.",
    ],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="work" className="exp-section">
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary/5 -bottom-24 right-0" />
      <div className="orb w-[300px] h-[300px] bg-secondary/5 top-0 -left-24" />

      <div className="exp-inner">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="exp-label-row"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">03</span>
          <span className="exp-label-line" />
          <span className="text-muted text-sm tracking-widest uppercase font-medium">Experience</span>
        </motion.div>

        {/* ── Title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.05 }}
          className="exp-title font-display font-bold text-white tracking-tight text-center"
        >
          Professional <span className="text-gradient">background.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1 }}
          className="exp-subtitle text-muted text-center"
        >
          My journey building products and solving real-world problems.
        </motion.p>

        {/* ── Timeline ── */}
        <div className="exp-timeline">
          {experience.map((item, idx) => {
            const isOpen = expanded === idx;
            const isLast = idx === experience.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="exp-row"
              >
                {/* ── Left: dot + line ── */}
                <div className="exp-dot-col">
                  {/* Animated dot */}
                  <div className={`exp-dot ${isOpen ? "exp-dot--active" : ""}`}>
                    {isOpen && <div className="exp-dot-ring" />}
                    <Briefcase size={14} className="exp-dot-icon" />
                  </div>

                  {/* Connecting line */}
                  {!isLast && (
                    <div className="exp-line" />
                  )}
                </div>

                {/* ── Right: card ── */}
                <div className="exp-card-col">
                  <div
                    className={`exp-card ${isOpen ? "exp-card--open" : ""}`}
                    onClick={() => setExpanded(isOpen ? -1 : idx)}
                  >
                    {/* Glow accent on left edge */}
                    <div className={`exp-card-edge ${isOpen ? "exp-card-edge--active" : ""}`} />

                    {/* ── Card header ── */}
                    <div className="exp-card-header">
                      <div className="exp-card-header-left">

                        {/* Badges row */}
                        <div className="exp-badges">
                          <span className="exp-badge exp-badge--type">{item.type}</span>
                          {item.current && (
                            <span className="exp-badge exp-badge--current">
                              <span className="exp-badge-dot" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="exp-card-title">{item.title}</h3>

                        {/* Meta */}
                        <div className="exp-meta">
                          <span className="exp-meta-org">
                            <Building2 size={12} />
                            {item.org}
                          </span>
                          <span className="exp-meta-divider" />
                          <span className="exp-meta-item">
                            <Calendar size={11} />
                            {item.period}
                          </span>
                          <span className="exp-meta-divider" />
                          <span className="exp-meta-item">
                            <MapPin size={11} />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`exp-chevron ${isOpen ? "exp-chevron--active" : ""}`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    {/* ── Expandable body ── */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="exp-body">
                            {/* Divider */}
                            <div className="exp-body-divider" />

                            {/* Bullet points */}
                            <ul className="exp-points">
                              {item.points.map((point, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -16 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                  className="exp-point"
                                >
                                  <span className="exp-point-bullet" />
                                  <span className="exp-point-text">{point}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tech tags */}
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: item.points.length * 0.08 + 0.1 }}
                              className="exp-tags"
                            >
                              {item.tags.map((tag, i) => (
                                <motion.span
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.04 + 0.2 }}
                                  className="exp-tag"
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
