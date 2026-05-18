import React from "react";
import { motion } from "framer-motion";
import "./skills.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const categories = [
  {
    label: "Frontend",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.35)",
    direction: "left",
    duration: 50,        // slowest
    skills: [
      { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Angular",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Sass",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    ],
  },
  {
    label: "Backend",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.35)",
    direction: "right",
    duration: 38,        // medium
    skills: [
      { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "REST APIs",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "Tools & Workflow",
    accent: "#f0abfc",
    glow: "rgba(240,171,252,0.07)",
    border: "rgba(240,171,252,0.32)",
    direction: "left",
    duration: 44,        // between
    skills: [
      { name: "Git",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Linux",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Postman",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

const SkillPill = ({ skill, accent, glow, border }) => (
  <div
    className="skill-pill"
    style={{ "--accent": accent, "--glow": glow, "--border": border }}
  >
    <div className="skill-pill__icon-wrap">
      <img
        src={skill.icon}
        alt={skill.name}
        className="skill-pill__icon"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    </div>
    <span className="skill-pill__name">{skill.name}</span>
  </div>
);

const MarqueeRow = ({ cat, idx }) => {
  const items = [...cat.skills, ...cat.skills];   // 2× for seamless loop

  return (
    <motion.div
      custom={idx + 2}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-60px" }}
      className="marquee-row"
    >
      {/* Row glow underlay */}
      <div
        className="marquee-row__glow"
        style={{ background: `radial-gradient(ellipse 60% 80% at 50% 100%, ${cat.glow.replace('0.08','0.18').replace('0.07','0.15')} 0%, transparent 70%)` }}
      />

      {/* Category label */}
      <div className="marquee-label">
        <span className="marquee-label__line" style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}40)` }} />
        <span className="marquee-label__dot" style={{ background: cat.accent, boxShadow: `0 0 10px ${cat.accent}` }} />
        <span className="marquee-label__text" style={{ color: cat.accent }}>{cat.label}</span>
        <span className="marquee-label__line" style={{ background: `linear-gradient(-90deg, transparent, ${cat.accent}40)` }} />
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-fade marquee-fade--left" style={{ background: `linear-gradient(90deg, #07070a 0%, rgba(7,7,10,0.5) 50%, transparent 100%)` }} />
        <div className="marquee-fade marquee-fade--right" style={{ background: `linear-gradient(-90deg, #07070a 0%, rgba(7,7,10,0.5) 50%, transparent 100%)` }} />

        <div
          className={`marquee-track marquee-track--${cat.direction}`}
          style={{ "--duration": `${cat.duration}s` }}
        >
          {items.map((skill, i) => (
            <SkillPill
              key={`${skill.name}-${i}`}
              skill={skill}
              accent={cat.accent}
              glow={cat.glow}
              border={cat.border}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section
    id="skills"
    className="skills-section"
  >
    {/* Background mesh */}
    <div className="skills-bg-mesh" />
    <div className="orb w-[500px] h-[500px] bg-primary/5 top-0 -right-48" />
    <div className="orb w-[300px] h-[300px] bg-secondary/5 bottom-0 -left-24" />

    <div className="skills-inner">

      {/* Section label */}
      <motion.div
        custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}
      >
        <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">02</span>
        <span style={{ width: "2rem", height: "1px", background: "rgba(167,139,250,0.3)" }} />
        <span className="text-muted text-sm tracking-widest uppercase font-medium">Skills</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        className="font-display font-bold text-white tracking-tight text-center"
        style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, marginBottom: "1rem", padding: "0 1.5rem" }}
      >
        Technologies I <span className="text-gradient">work with.</span>
      </motion.h2>

      <motion.p
        custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-80px" }}
        className="text-muted text-center"
        style={{ fontSize: "0.925rem", marginBottom: "3.5rem", padding: "0 1.5rem" }}
      >
        A curated stack of tools and frameworks I use to build products that scale.
      </motion.p>

      {/* Marquee rows */}
      <div className="skills-rows">
        {categories.map((cat, idx) => (
          <MarqueeRow key={cat.label} cat={cat} idx={idx} />
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
