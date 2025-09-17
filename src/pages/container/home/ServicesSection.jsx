import React, { useEffect, useRef, useState } from "react";
import { Megaphone, Mic2, MonitorSmartphone, Palette } from "lucide-react";

// A small, reusable component for the inner content of a service card.
// This helps avoid code duplication between the mobile and desktop layouts.
const ServiceCardContent = ({ service }) => (
  <>
    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}
    >
      {service.icon}
    </div>
    <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
      {service.title}
    </h3>
    <p
      className="text-sm text-center" // Ensure text is centered
      style={{ color: "var(--muted)" }}
    >
      {service.description}
    </p>
  </>
);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const services = [
    {
      title: "Digital Marketing",
      description: "Drive measurable results with campaigns, SEO & Ads.",
      icon: <Megaphone className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Website Development",
      description: "Responsive, SEO-ready websites with great UX.",
      icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Brand & Design",
      description: "Logos, visuals & branding that resonate deeply.",
      icon: <Palette className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-violet-400",
    },
    {
      title: "Podcast Production",
      description: "Plan, record & publish with professional polish.",
      icon: <Mic2 className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  useEffect(() => {
    const gsapScript = document.createElement("script");
    gsapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;

    scrollTriggerScript.onload = () => {
      if (window.gsap) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        setGsapLoaded(true);
      }
    };

    document.body.appendChild(gsapScript);
    document.body.appendChild(scrollTriggerScript);

    return () => {
      document.body.removeChild(gsapScript);
      document.body.removeChild(scrollTriggerScript);
    };
  }, []);

  useEffect(() => {
    if (!gsapLoaded) return;

    // Use a timeout to ensure the DOM is ready for GSAP to target elements
    const timer = setTimeout(() => {
      const ctx = window.gsap.context(() => {
        window.gsap.from(".services-header", {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        // Target all service cards, whether in mobile or desktop layout
        window.gsap.from(".service-card", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-container", // Use a common parent for the trigger
            start: "top 75%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [gsapLoaded]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 container mx-auto px-4 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--bg)" }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
        style={{ backgroundColor: "rgba(var(--bg-rgb), 0.1)" }}
      />

      <div className="services-header text-center mb-16">
        <h2
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          style={{ color: "var(--text)" }}
        >
          Explore My Services
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Creative solutions designed to make your brand stand out in the
          digital era.
        </p>
      </div>

      {/* Container for responsive layouts */}
      <div className="services-container mt-30">
        {/* --- MOBILE & TABLET LAYOUT (GRID) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card flex flex-col items-center text-center p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
              style={{
                background: "rgba(var(--surface-rgb), 0.75)",
                border: "1px solid var(--border)",
              }}
            >
              <ServiceCardContent service={service} />
            </div>
          ))}
        </div>

        {/* --- DESKTOP LAYOUT (CIRCLE) --- */}
        <div className="hidden md:relative md:flex justify-center items-center">
          <div
            ref={circleRef}
            className="relative w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="absolute w-56 h-56 rounded-full blur-3xl animate-pulse"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(var(--accent-rgb), 0.3) 0%, rgba(var(--accent-rgb), 0) 70%)",
              }}
            />
            {services.map((service, index) => {
              const total = services.length;
              const angle = (index / total) * 360;
              // Use a percentage-based radius to keep items responsive to container size
              const radius = 0.45;
              const x = Math.cos((angle * Math.PI) / 180) * radius * 100 + 50;
              const y = Math.sin((angle * Math.PI) / 180) * radius * 100 + 50;

              return (
                <div
                  key={index}
                  className="service-card absolute flex flex-col items-center text-center p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-500 backdrop-blur-sm"
                  style={{
                    background: "rgba(var(--surface-rgb), 0.75)",
                    border: "1px solid var(--border)",
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: "translate(-50%, -50%)",
                    width: "180px",
                  }}
                >
                  <ServiceCardContent service={service} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
