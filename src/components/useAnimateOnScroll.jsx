import { useEffect, useRef, useState } from "react";

// --- Custom Hook for animations on scroll ---
const useAnimateOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        try {
          observer.unobserve(ref.current);
        } catch (e) {}
      }
    };
  }, [ref]);
  return [ref, isVisible];
};

export default useAnimateOnScroll;
