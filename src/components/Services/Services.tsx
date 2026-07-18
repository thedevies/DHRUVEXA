"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Service = {
  isProduct: boolean;
  mockup: "laptop" | "phone";
  image: string;
  title: string;
  description: string;
  highlights: string[];
  link: string;
};

const services: Service[] = [
  {
    isProduct: true,
    mockup: "laptop",
    image: "/HireXplore.png",
    title: "HireXplore",
    description: "AI-powered job search assistant with smart resume parsing.",
    highlights: [
      "Smart resume parsing",
      "Multi-platform scraping",
      "AI job matching",
      "Automated email alerts",
    ],
    link: "https://hirexplore.shivrajtaware.in/",
  },
  {
    isProduct: true,
    mockup: "phone",
    image: "/VVS APP.jpeg",
    title: "VVS App",
    description: "A mobile-first experience designed for the VVS community.",
    highlights: [
      "Mobile-optimized interface",
      "Smooth portrait browsing",
      "Responsive onboarding flow",
      "Touch-friendly interactions",
    ],
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function LaptopMockup({
  screenshot,
  alt,
  sizes,
  priority = false,
}: {
  screenshot: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="laptop-mockup">
      <div className="laptop-mockup-screen">
        <Image
          src={screenshot}
          alt={alt}
          fill
          sizes={sizes}
          className="laptop-mockup-screenshot"
          unoptimized
          priority={priority}
        />
      </div>
      <Image
        src="/Apple Macbook Pro.png"
        alt=""
        fill
        sizes={sizes}
        className="laptop-mockup-frame"
        unoptimized
        aria-hidden="true"
      />
    </div>
  );
}

function PhoneMockup({
  screenshot,
  alt,
  sizes,
  priority = false,
}: {
  screenshot: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="phone-card">
      <div className="phone-mockup">
        <div className="phone-mockup-screen">
          <Image
            src={screenshot}
            alt={alt}
            fill
            sizes={sizes}
            className="phone-mockup-screenshot"
            unoptimized
            priority={priority}
          />
        </div>

        <Image
          src="/Apple iPhone 17 Pro.png"
          alt=""
          fill
          className="phone-mockup-frame"
          unoptimized
        />
      </div>
    </div>
  );
}

function ProductMockup({
  service,
  sizes,
  priority = false,
}: {
  service: Service;
  sizes: string;
  priority?: boolean;
}) {
  if (service.mockup === "phone") {
    return (
      <PhoneMockup
        screenshot={service.image}
        alt={`${service.title} product screenshot`}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <LaptopMockup
      screenshot={service.image}
      alt={`${service.title} product screenshot`}
      sizes={sizes}
      priority={priority}
    />
  );
}

export default function Services() {
  const [activeProduct, setActiveProduct] = useState<Service | null>(null);

  useEffect(() => {
    if (!activeProduct) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProduct(null);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeProduct]);

  return (
    <section id="services" className="services-section">
      <div className="container services-container">
        <div className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services-title"
          >
            Our <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="services-subtitle"
          >
            We operate a suite of high-performance internal ventures spanning
            across various technological landscapes.
          </motion.p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              type="button"
              variants={itemVariants}
              className={`glass-panel service-card ${
                service.isProduct ? "product-card" : ""
              }`}
              onClick={() => service.isProduct && setActiveProduct(service)}
              aria-haspopup="dialog"
            >
              <div className="service-glow" />

              {service.isProduct && (
                <div className="service-cardContent">
                  <div className="product-mockup-wrapper">
                    <ProductMockup
                      service={service}
                      sizes="(max-width: 768px) 90vw, 380px"
                    />
                  </div>

                  <div className="product-card-body">
                    <h3 className="service-cardTitle">{service.title}</h3>
                    <p className="service-cardDescription">
                      {service.description}
                    </p>
                    <span className="product-card-cta">
                      View details <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <motion.div
              className="modal-content glass-panel"
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActiveProduct(null)}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div className="product-mockup-wrapper modal-mockup-wrapper">
                <ProductMockup
                  service={activeProduct}
                  sizes="(max-width: 768px) 90vw, 640px"
                  priority
                />
              </div>

              <div className="modal-body">
                <h3 id="product-modal-title" className="modal-title">
                  {activeProduct.title}
                </h3>
                <p className="modal-description">{activeProduct.description}</p>

                <ul className="modal-highlights">
                  {activeProduct.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {activeProduct.link !== "#" && (
                  <a
                    href={activeProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-visit-btn"
                  >
                    Visit website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}