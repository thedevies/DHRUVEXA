"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background" />
      <div className={`container hero-content`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-badge"
        >
          Building the Future of Technology
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title"
        >
          Innovating with <span style={{ color: "#7e0fdc" }}>DHRUVEXA</span> Technologies
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          We architect, build, and operate a dynamic portfolio of proprietary platforms and digital ventures. Discover how we are shaping the digital landscape through our internal ecosystems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-actions"
        >
          <Link href="#services" className="hero-primaryButton">
            Explore Our Ventures <ArrowRight size={20} />
          </Link>
          <Link href="#about" className="hero-secondaryButton">
            Learn About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
