import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-[#0a0a1a]">
      {/* 1. Vibrant Gradient Base - Replacing pure black with a rich deep purple/blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] opacity-100" />
      
      {/* 2. Abstract Particle Video - High quality "Great" effect */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
      >
        <source src="https://cdn.pixabay.com/video/2016/09/13/5187-183786465_large.mp4" type="video/mp4" />
      </video>

      {/* 3. Ultra-Bright Aurora Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: ["-10%", "10%", "-10%"],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-primary/40 rounded-full blur-[140px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: ["10%", "-10%", "10%"],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-secondary/35 rounded-full blur-[140px] mix-blend-screen"
        />
        
        {/* Center Glow to brighten the main content area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      {/* 4. Glowing Particles / Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.2
            }}
            animate={{ 
              y: ["0%", "100%", "0%"],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 2, 1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[0.5px] shadow-[0_0_15px_white]"
          />
        ))}
      </div>

      {/* 5. Animated Glass Texture */}
      <motion.div 
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
      />

      {/* 6. Sophisticated Grid - Brighter and more visible */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      {/* 7. Subtle Light Sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg] pointer-events-none"
      />
    </div>
  );
};

export default BackgroundAnimation;
