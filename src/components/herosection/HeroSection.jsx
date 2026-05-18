import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Eye } from "lucide-react";
import resumePDF from "@/assets/Vishnudas_Resume.pdf";

const HeroSection = () => {
  const [role, setRole] = useState("");
  const roles = ["MERN Stack Developer", "Full Stack Developer", "Software Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    const currentRole = roles[roleIndex];

    const timer = setInterval(() => {
      if (!deleting) {
        setRole(currentRole.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentRole.length) {
          deleting = true;
        }
      } else {
        setRole(currentRole.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
          clearInterval(timer);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <HeroGeometric>
      <div className="flex flex-col items-center justify-center text-center w-full px-6 relative z-20">

        {/* Greeting */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-6"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Vishnudas <span className="text-gradient">P</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-[2px] bg-primary/40" />
          <span className="font-display text-lg md:text-xl text-primary font-medium tracking-wide min-w-[220px]">
            {role}
            <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 align-middle animate-pulse" />
          </span>
          <span className="w-8 h-[2px] bg-primary/40" />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-lg text-muted text-base md:text-lg leading-relaxed font-light mb-14"
        >
          Building scalable, pixel-perfect web applications with the MERN stack — focused on clean code and great user experiences.
        </motion.p>

        {/* Actions */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          {/* Resume Button — Gradient border with glow */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))",
              border: "1px solid rgba(167,139,250,0.35)",
              backdropFilter: "blur(12px)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(129,140,248,0.3))";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.6)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(167,139,250,0.25), inset 0 0 20px rgba(167,139,250,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(129,140,248,0.15))";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.35)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Eye size={15} />
            View Resume
            <span style={{ display: "inline-block", marginLeft: "0.25rem", transition: "transform 0.3s" }}>↗</span>
          </a>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="https://github.com/Vishnudas18"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnudas-p-4a4600277"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </HeroGeometric>
  );
};

export default HeroSection;
