import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import screenshot1 from "@/assets/Screenshot 2026-05-18 124311.png";
import screenshot2 from "@/assets/Screenshot 2026-05-18 124418.png";
import eplantImg from "@/assets/eplant.png";
import cartilloteImg from "@/assets/cartillote.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const projects = [
  {
    title: "SYOPI – Admin Panel",
    description:
      "Full-stack MERN e-commerce platform for dresses and accessories with Admin, User, and Delivery Partner apps. Built revenue analytics, order tracking, return management, COD settlements, and role-based authentication. Deployed independently on Netlify & Render.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Shadcn UI", "Netlify"],
    link: "https://syopi-admin.netlify.app/",
    github: "#",
    image: screenshot1,
    accent: "rgba(167,139,250,0.15)",
  },
  {
    title: "CareBridge",
    description:
      "Full-stack web application digitalizing Anganwadi services — integrating health, nutrition, and education management with child registration, attendance tracking, vaccination alerts, and nutrition guidance.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "REST API"],
    link: "https://carebridge-anganwadi.netlify.app/",
    github: "#",
    image: screenshot2,
    accent: "rgba(129,140,248,0.15)",
  },
  {
    title: "Cartilotte E-Commerce",
    description:
      "A modern, premium multi-vendor e-commerce web application featuring dynamic category-based routing, interactive product galleries, and a sleek user-friendly interface.",
    tags: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
    link: "https://user-ecommerce.netlify.app/",
    github: "#",
    image: cartilloteImg,
    accent: "rgba(59,130,246,0.15)",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
      <div className="orb w-[500px] h-[500px] bg-accent/6 top-1/3 -right-64" />

      <div style={{ width: "100%", maxWidth: "1100px", position: "relative", zIndex: 10 }}>

        {/* Section Label */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">05</span>
          <span style={{ width: "2rem", height: "1px", background: "rgba(167,139,250,0.3)" }} />
          <span className="text-muted text-sm tracking-widest uppercase font-medium">Projects</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="font-display font-bold text-white tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem", textAlign: "center" }}
        >
          Selected <span className="text-gradient">work.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="text-muted"
          style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "30rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}
        >
          A collection of projects I've built from concept to deployment.
        </motion.p>

        {/* 3-Column Card Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(14,14,20,0.6)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.2)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Project Image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: project.accent }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(14,14,20,0.8))" }} />
              </div>

              {/* Card Content */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.75rem" }}>
                {/* Title */}
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: "1.2rem", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-muted font-light"
                  style={{ fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-muted/80"
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "0.2rem 0.625rem",
                        borderRadius: "9999px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.05)", marginTop: "0.5rem" }} />

                {/* Action Buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.25rem" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <GithubIcon size={15} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    Live Demo <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
