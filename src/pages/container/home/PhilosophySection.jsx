// --- src/sections/PhilosophySection.jsx ---
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ICONS (unchanged)
const MindIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2c4.4 0 8 3.1 8 7v1a5 5 0 0 1-2 4v2a3 3 0 0 1-3 3h-1v3h-4v-4H9a3 3 0 0 1-3-3v-1a4 4 0 0 1-2-3V9c0-3.9 3.6-7 8-7z" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);
const Zap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Target = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
// DATA (unchanged)
const philosophies = [
  {
    icon: MindIcon,
    title: "Strategic Innovation",
    description:
      "Fusing creative thinking with data-driven strategies to solve complex challenges.",
  },
  {
    icon: Zap,
    title: "Dynamic Leadership",
    description:
      "Empowering teams to achieve their full potential through a culture of collaboration and trust.",
  },
  {
    icon: Target,
    title: "Purpose-Driven Results",
    description:
      "Focusing on delivering measurable outcomes that drive business growth and create value.",
  },
];

const PhilosophySection = () => {
  const particlesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [nodePositions, setNodePositions] = useState([]);

  // GSAP Particle Animation
  useEffect(() => {
    import("https://cdn.skypack.dev/gsap")
      .then((gsapModule) => {
        const gsap = gsapModule.default;
        particlesRef.current.forEach((el) => {
          if (el) {
            gsap.to(el, {
              y: "random(-100, 100)",
              x: "random(-100, 100)",
              scale: "random(0.5, 1.5)",
              duration: "random(10, 20)",
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        });
      })
      .catch((err) => console.error("Failed to load GSAP", err));
  }, []);

  // Calculate positions for desktop circular layout
  useEffect(() => {
    const calculatePositions = () => {
      const isDesktop = window.innerWidth > 768;
      const radius = isDesktop ? 320 : 160;
      const positions = philosophies.map((_, index) => {
        const angle = (index / philosophies.length) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
      });
      setNodePositions(positions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  const activePhilosophy = philosophies[activeIndex];

  return (
    <section
      id="philosophy"
      className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-36 overflow-hidden transition-colors duration-500"
      // fallback background via CSS variable
      style={{ background: "var(--bg)" }}
    >
      {/* Background Nebula/Particles */}
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-70 transition-colors duration-500">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(99, 102, 241, 0.18)"
                  : i % 2 === 0
                  ? "rgba(168, 85, 247, 0.18)"
                  : "rgba(37, 99, 235, 0.18)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-grid-black/[0.04] dark:bg-grid-white/[0.06] -z-10 transition-colors duration-500"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 relative z-10 w-full max-w-5xl flex flex-col items-center justify-center"
      >
        <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
          {/* Central Display */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full flex flex-col items-center justify-center text-center transition-all duration-500">
            {/* Use CSS variables for surface and text to ensure theme compliance */}
            <div
              className="absolute inset-0 rounded-full backdrop-blur-xl border shadow-xl transition-colors duration-500"
              style={{
                background:
                  "color-mix(in srgb, var(--surface) 80%, transparent)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full animate-pulse border-2"
              style={{ borderColor: "rgba(168,85,247,0.12)" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10 px-4 md:px-8"
                style={{ color: "var(--text)" }}
              >
                <h2
                  className="text-3xl md:text-5xl font-bold mb-4 transition-colors duration-500"
                  style={{ color: "var(--text)" }}
                >
                  {activePhilosophy.title}
                </h2>
                <p
                  className="text-sm md:text-base transition-colors duration-500"
                  style={{ color: "var(--muted)" }}
                >
                  {activePhilosophy.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Circular Nodes */}
          {nodePositions.length > 0 &&
            philosophies.map((item, index) => {
              const Icon = item.icon;
              const { x, y } = nodePositions[index];
              return (
                <motion.div
                  key={index}
                  className="absolute hidden md:flex flex-col items-center cursor-pointer group"
                  style={{
                    x: `calc(-50% + ${x}px)`,
                    y: `calc(-50% + ${y}px)`,
                    top: "50%",
                    left: "50%",
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                  }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      background:
                        "color-mix(in srgb, var(--surface) 60%, transparent)",
                      borderColor:
                        activeIndex === index
                          ? "rgba(168,85,247,0.9)"
                          : "rgba(168,85,247,0.35)",
                      boxShadow:
                        activeIndex === index
                          ? "0 0 25px rgba(168,85,247,0.35)"
                          : "none",
                    }}
                    animate={{ scale: activeIndex === index ? 1.12 : 1 }}
                  >
                    <Icon
                      className="w-8 h-8 group-hover:text-purple-700 transition-colors"
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.div>
                  <p
                    className="mt-4 text-sm text-center font-semibold transition-colors duration-300"
                    style={{
                      opacity: activeIndex === index ? 1 : 0.6,
                      color: "var(--text)",
                    }}
                  >
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
        </div>

        {/* Mobile Version */}
        <div className="w-full mt-12 space-y-4 md:hidden">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={item.title}
                className={`w-full p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  isActive ? "shadow-lg" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: isActive
                    ? "color-mix(in srgb, var(--surface) 90%, var(--accent) 6%)"
                    : "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;
