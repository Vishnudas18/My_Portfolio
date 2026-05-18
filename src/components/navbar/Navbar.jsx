import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "0.75rem 1.5rem" : "1.5rem 1.5rem",
        transition: "padding 0.5s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.75rem 2rem" : "0",
          borderRadius: scrolled ? "9999px" : "0",
          background: scrolled ? "rgba(7, 7, 10, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "all 0.5s ease",
        }}
      >
        {/* Logo */}
        <a href="#" className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", textDecoration: "none" }}>
          PORTFOLIO<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                borderRadius: "0.5rem",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.background = "transparent"; }}
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ padding: "0.5rem", color: "rgba(255,255,255,0.8)", background: "none", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "100%",
              left: "1.5rem",
              right: "1.5rem",
              marginTop: "0.5rem",
              padding: "1.5rem",
              borderRadius: "1.25rem",
              background: "rgba(7,7,10,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ padding: "0.75rem 1rem", fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.8)", textDecoration: "none", borderRadius: "0.75rem", transition: "all 0.3s" }}
              >
                {link.name}
              </a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
