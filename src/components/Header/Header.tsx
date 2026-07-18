"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className={`container navContainer`}>
        <Link href="#home" className="logo">
          <Image
            src="/Logo.png"
            alt="Dhruvexa Logo"
            width={40}
            height={40}
            className="logo-image"
            unoptimized={true}
          />
          <div className="logo-text">
            <span className="logo-title">DHRUVEXA</span>
            <span className="logo-subtitle">TECHNOLOGIES</span>
          </div>
        </Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`navLinks ${menuOpen ? "active" : ""}`}>
          <Link
            href="#home"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Ecosystem
          </Link>
          <Link
            href="#about"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Founders
          </Link>
          <Link
            href="#contact"
            className="ctaButton"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
