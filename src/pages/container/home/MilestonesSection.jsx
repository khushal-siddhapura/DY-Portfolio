// --- src/sections/MilestonesSection.jsx ---
import { useEffect, useState, useRef } from "react";

// --- HOOKS (Adjusted for universal application) ---
// Tracks scroll progress for an element relative to viewport.
const useElementScrollProgress = (ref, sectionHeightVh = 300) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onScroll = () => {
      const { top } = element.getBoundingClientRect();

      // total distance for sticky reveal (rough approximation)
      const totalScrollDistance =
        (sectionHeightVh / 100) * window.innerHeight - window.innerHeight || 1;

      let currentProgress = (-top / totalScrollDistance) * 100;
      currentProgress = Math.max(0, Math.min(100, currentProgress));
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, sectionHeightVh]);

  return progress;
};

// Counts up to a target number when shouldStart toggles true
const useCountUp = (end, duration = 1500, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (shouldStart && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const timePassed = timestamp - startTime;
        const progress = Math.min(timePassed / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (timePassed < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    } else if (!shouldStart && hasAnimated.current) {
      // Reset so it can animate again later if needed
      hasAnimated.current = false;
      setCount(0);
    }
  }, [end, duration, shouldStart]);

  return count;
};

// --- COMPONENT ---
const MilestonesSection = () => {
  const milestones = [
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "+", label: "Successful Projects" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 11, suffix: "+", label: "Featured Talk Show" },
  ];

  // Virtual scroll height (enough room to reveal each milestone)
  const sectionScrollHeightVh = milestones.length * 150;

  const sectionRef = useRef(null);
  const scrollProgress = useElementScrollProgress(
    sectionRef,
    sectionScrollHeightVh
  );

  const activeIndex = Math.min(
    milestones.length - 1,
    Math.floor((scrollProgress / 100) * milestones.length)
  );

  return (
    <section
      ref={sectionRef}
      className="relative transition-colors duration-500"
      style={{
        // background follows App.jsx CSS variable
        background: "var(--bg)",
        minHeight: "100vh",
        height: `${sectionScrollHeightVh}vh`,
      }}
    >
      {/* Sticky centered container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <div className="relative text-center">
            {milestones.map((item, index) => {
              const isActive = activeIndex === index;
              const count = useCountUp(item.value, 1500, isActive);

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-out`}
                  style={{
                    // show/hide with transform + opacity
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* Decorative giant number (subtle, uses --text with low opacity) */}
                  <span
                    aria-hidden="true"
                    className="absolute leading-none whitespace-nowrap transition-all duration-700 ease-out"
                    style={{
                      fontSize: "min(30vw, 20rem)",
                      // Use text color with very low opacity so it adapts to theme
                      color: "var(--text)",
                      opacity: isActive ? 0.06 : 0.03,
                      transform: isActive
                        ? "translate(-50%, -50%) scale(1)"
                        : "translate(-50%, -50%) scale(0.75)",
                      top: "50%",
                      left: "50%",
                      fontWeight: 900,
                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  >
                    {count}
                    {item.suffix}
                  </span>

                  {/* Milestone Label */}
                  <h2
                    className="relative z-10 font-bold bg-clip-text text-transparent transition-all duration-700 ease-out"
                    style={{
                      // Active: gradient between accent -> text for punch
                      // Inactive: muted color
                      backgroundImage: isActive
                        ? "linear-gradient(90deg, var(--accent), var(--text))"
                        : "none",
                      color: isActive ? "transparent" : "var(--muted)",
                      fontSize: "clamp(1.75rem, 4vw, 3.75rem)",
                      lineHeight: 1,
                    }}
                  >
                    {item.label}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
