import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* Ambient glow */}
      <div className="orb w-[600px] h-[600px] bg-primary/5 -bottom-64 left-1/2 -translate-x-1/2" />

      <div style={{ width: "100%", maxWidth: "900px", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>

        {/* Top CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          className="footer-cta"
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <p className="text-muted font-medium" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
            Available for opportunities
          </p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Let's build something <span className="text-gradient">great together.</span>
          </h2>
          <p className="text-muted font-light" style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
            I'm always open to exciting projects, collaborations, and new opportunities. Drop me a message!
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dvishnu640@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))",
              border: "1px solid rgba(167,139,250,0.35)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(167,139,250,0.35), rgba(129,140,248,0.35))";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(167,139,250,0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(129,140,248,0.2))";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Mail size={15} />
            Get In Touch
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Contact Info + Links Grid */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-white" style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Vishnudas<span className="text-primary">.</span>
            </h3>
            <p className="text-muted font-light" style={{ fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "18rem" }}>
              MERN Stack Developer crafting scalable, pixel-perfect web applications.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1.25rem" }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href="mailto:dvishnu640@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                <div style={{ padding: "0.375rem", borderRadius: "0.5rem", background: "rgba(167,139,250,0.1)", color: "#a78bfa", flexShrink: 0 }}>
                  <Mail size={13} />
                </div>
                <span className="text-muted font-light" style={{ fontSize: "0.875rem" }}>vishnudasp1800@gmail.com</span>
              </a>

              <a
                href="tel:+918075915737"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                <div style={{ padding: "0.375rem", borderRadius: "0.5rem", background: "rgba(167,139,250,0.1)", color: "#a78bfa", flexShrink: 0 }}>
                  <Phone size={13} />
                </div>
                <span className="text-muted font-light" style={{ fontSize: "0.875rem" }}>+91 80759 15737</span>
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <div style={{ padding: "0.375rem", borderRadius: "0.5rem", background: "rgba(167,139,250,0.1)", color: "#a78bfa", flexShrink: 0 }}>
                  <MapPin size={13} />
                </div>
                <span className="text-muted font-light" style={{ fontSize: "0.875rem" }}>Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1.25rem" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#work" },
                { name: "Projects", href: "#projects" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted"
                  style={{ fontSize: "0.875rem", fontWeight: 400, textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.paddingLeft = "0.25rem"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = ""; e.currentTarget.style.paddingLeft = "0"; }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          paddingTop: "1.5rem",
          paddingBottom: "2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center",
        }}>
          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="https://github.com/Vishnudas18"
              target="_blank"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
            >
              <GithubIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnudas-p-4a4600277"
              target="_blank"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dvishnu640@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "transparent"; }}
            >
              <Mail size={15} />
            </a>
          </div>

          <p className="text-muted" style={{ fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Vishnudas P. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
