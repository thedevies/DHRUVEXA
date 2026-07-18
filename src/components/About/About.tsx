"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "SH",
    name: "Satish Hande",
    role: "Chief Executive Officer",
    quote:
      "Technology should never feel complicated. My job is to make sure every product we ship quietly disappears into someone's day and just makes it easier.",
    bio: "Satish leads Dhruvexa's vision and growth, translating ambitious ideas into products people actually want to use. With a sharp eye for what businesses need and what markets are missing, he's focused on building an ecosystem that scales without losing sight of the people it serves. He believes the best technology is invisible — it simplifies lives, empowers businesses, and leaves room for the next generation of innovators to build on top of it.",
  },
  {
    initials: "ST",
    name: "Shivraj Taware",
    role: "Chief Technology Officer",
    quote:
      "Good architecture is a promise you make to your future self. I'd rather spend an extra week now than owe six months of pain later.",
    bio: "Shivraj owns the technological backbone of Dhruvexa — from system design to shipping intelligent, scalable products that hold up under real-world pressure. He's driven by a simple standard: build it right the first time, and build it to last. Every line of code is written with a future-ready mindset, so the systems powering Dhruvexa today are still the systems businesses can trust tomorrow.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-title"
          >
            Meet the <span className="text-gradient">Founders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="about-subtitle"
          >
            The visionaries behind Dhruvexa Technologies, committed to
            engineering the future.
          </motion.p>
        </div>

        <div className="about-teamGrid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`about-member ${
                index % 2 === 1 ? "about-member--reverse" : ""
              }`}
            >
              <div className="about-memberPhoto">
                <div className="about-avatarCircle">
                  <span className="about-avatarInitials">
                    {member.initials}
                  </span>
                </div>
              </div>

              <div className="about-memberThought">
                <span className="about-quoteMark" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="about-quote">{member.quote}</p>

                <div className="about-memberMeta">
                  <h3 className="about-name">{member.name}</h3>
                  <p className="about-role">{member.role}</p>
                </div>

                <p className="about-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}