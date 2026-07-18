"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="#home" className="logo" style={{ marginBottom: '1rem', display: 'flex' }}>
              <Image src="/Logo.png" alt="Dhruvexa Logo" width={40} height={40} className="logo-image" unoptimized={true} />
              <div className="logo-text">
                <span className="logo-title" style={{ fontSize: '1.25rem' }}>DHRUVEXA</span>
                <span className="logo-subtitle" style={{ fontSize: '0.55rem' }}>TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="footer-description">
              Transforming innovative ideas into powerful proprietary platforms. Operating at the forefront of the digital future.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#services">Ecosystem</Link></li>
              <li><Link href="#about">Founders</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contactInfo">
              <li>
                <MapPin className="footer-contactIcon" size={20} />
                <span>
                  Dhruvexa Technologies<br />
                  Indialand Global Tech Park<br />
                  Behind Global Highstreet, Phase 1<br />
                  Rajiv Gandhi Infotech Park<br />
                  Hinjewadi, Pune, Maharashtra 411057<br />
                  India
                </span>
              </li>
              <li>
                <Mail className="footer-contactIcon" size={20} />
                <span>hello@dhruvexa.com</span>
              </li>
              <li>
                <Phone className="footer-contactIcon" size={20} />
                <span>+91 9*********</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dhruvexa Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
