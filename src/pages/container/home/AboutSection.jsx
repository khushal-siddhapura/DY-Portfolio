import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// The SVG icon remains the same.
const ArrowUpRight = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

// Theme-aware orbs + central image component
const ThemeAwareOrbsAndImage = () => {
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Observe changes to <html class=""> so we can react to theme toggles
    const root = document.documentElement;
    const mo = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => mo.disconnect();
  }, []);

  // Light-mode: stronger opacity, normal blend, slightly darker stops for contrast
  // Dark-mode: softer opacity + screen blend for glow
  const orbConfigs = [
    {
      // main pink-ish orb
      sizeClass: "w-30 h-30 md:w-50 md:h-50",
      light: {
        style: {
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(255,95,166,0.85))",
          opacity: 1,
          mixBlendMode: "normal",
          pointerEvents: "none",
        },
      },
      dark: {
        style: {
          background: "linear-gradient(135deg, var(--accent), #ff5fa6)",
          opacity: 0.7,
          mixBlendMode: "screen",
          pointerEvents: "none",
        },
      },
      animate: { y: [0, -20, 0], x: [0, 22, 0] },
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
    {
      // secondary blue-ish orb
      sizeClass: "w-24 h-24 md:w-34 md:h-34",
      light: {
        style: {
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(37,99,235,0.8))",
          opacity: 1,
          mixBlendMode: "normal",
          pointerEvents: "none",
        },
      },
      dark: {
        style: {
          background: "linear-gradient(135deg, #3b82f6, var(--accent))",
          opacity: 0.6,
          mixBlendMode: "screen",
          pointerEvents: "none",
        },
      },
      animate: { y: [0, 25, 0], x: [0, -25, 0] },
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
    },
  ];

  return (
    <>
      {orbConfigs.map((orb, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${orb.sizeClass} rounded-full blur-2xl`}
          style={isDark ? orb.dark.style : orb.light.style}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}

      {/* central floating image sits on top and accepts hover */}
      <motion.img
        src="/images/Yagnesh-Pandya/10.jpg"
        alt="Creative Visual"
        className="relative w-40 h-40 md:w-64 md:h-64 object-contain drop-shadow-2xl"
        style={{ zIndex: 40, pointerEvents: "auto" }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        whileHover={{ scale: 1.07, rotate: 4 }}
        draggable={false}
      />
    </>
  );
};

// The AnimatedWords component remains the same.
const AnimatedWords = ({ text, colorVar }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, rotate: "5deg" },
    visible: {
      opacity: 1,
      y: 0,
      rotate: "0deg",
      transition: { type: "spring", damping: 15, stiffness: 200 },
    },
  };

  return (
    <motion.p
      className="text-xl max-w-2xl"
      style={{ color: `var(${colorVar})` }}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.5em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const AboutSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Raw transform values based on scroll
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "0%", "-33.33%", "-33.33%", "-66.67%", "-66.67%"]
  );
  const foregroundYRaw = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["-15%", "5%"]
  );
  const backgroundYRaw = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["5%", "-5%"]
  );

  const springConfig = { stiffness: 400, damping: 90, mass: 2 };
  const x = useSpring(xRaw, springConfig);
  const foregroundY = useSpring(foregroundYRaw, springConfig);
  const backgroundY = useSpring(backgroundYRaw, springConfig);

  const imageScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.9, 1, 0.9]
  );
  const imageBlur = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    ["8px", "0px", "8px"]
  );

  const subjectImageUrl = "/images/Yagnesh-Pandya/HeroMiddle.jpeg";
  const backgroundImageUrl =
    "https://placehold.co/800x800/1a1a1a/333333?text=Background";

  return (
    <>
      <style jsx global>{`
        .animated-gradient-text {
          background: linear-gradient(
            to right,
            var(--accent),
            var(--text),
            var(--accent)
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-flow 5s linear infinite;
        }
        @keyframes gradient-flow {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

      <section
        id="about"
        ref={targetRef}
        className="relative h-[300vh] bg-[var(--background)]"
      >
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Panel 1: Introduction */}
            <div className="flex flex-col justify-center h-screen w-screen px-8 md:px-24">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 py-4 animated-gradient-text">
                Crafting the Digital Frontier.
              </h2>
              <AnimatedWords
                text="I'm Yagnesh Pandya — a digital marketer, content creator, and public speaker focused on helping businesses thrive online."
                colorVar="--muted"
              />
            </div>

            {/* Panel 2: The Image with Parallax & Focus Effect */}
            <div className="flex items-center justify-center h-screen w-screen px-8">
              <motion.div
                className="relative w-[70vw] h-[70vh] md:w-[35vw] md:h-[70vh] rounded-2xl overflow-hidden"
                style={{
                  scale: imageScale,
                  filter: useTransform(imageBlur, (val) => `blur(${val})`),
                }}
              >
                <motion.img
                  src={backgroundImageUrl}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ y: backgroundY }}
                />
                <motion.img
                  src={subjectImageUrl}
                  alt="Yagnesh Pandya"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ y: foregroundY }}
                />
              </motion.div>
            </div>

            {/* Panel 3: Proof & CTA + Creative Side Visual */}
            <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen px-6 md:px-24 md:gap-12">
              {/* Left Section (text + CTA) */}
              <div className="flex flex-col justify-center items-center md:flex-1 text-center md:text-left pt-8 md:pt-0">
                <h3
                  className="text-2xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8"
                  style={{ color: "var(--text)" }}
                >
                  8+ Years of Experience. <br />
                  <span className="animated-gradient-text">
                    100+ Successful Clients.
                  </span>
                </h3>
                <AnimatedWords
                  text="As founder of Digital Yagnesh, I partner with entrepreneurs, influencers, and brands to elevate their online presence through strategic marketing and polished execution."
                  colorVar="--muted"
                />
                <motion.a
                  href="#connect"
                  className="inline-flex items-center mt-8 md:mt-12 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-colors duration-300 group relative overflow-hidden w-fit mx-auto md:mx-0"
                  style={{
                    border: `1px solid var(--accent)`,
                    color: "var(--accent)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: "spring", delay: 0.5 }}
                >
                  <span
                    className="absolute inset-0 bg-[var(--accent)] transition-transform duration-300 ease-in-out origin-bottom transform scale-y-0 group-hover:scale-y-100"
                    aria-hidden="true"
                  ></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Let's Innovate Together
                    <ArrowUpRight
                      className="inline w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300"
                      strokeWidth="2.5"
                    />
                  </span>
                </motion.a>
              </div>

              {/* Right Section (Creative Animation) - UPDATED */}
              <div className="relative w-full flex-1 flex items-center justify-center">
                <ThemeAwareOrbsAndImage />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
