import { useEffect, useState } from "react";

const Preloader = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsFadingOut(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{ background: "var(--bg)" }}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        style={{ color: "var(--text)" }}
        className="text-4xl md:text-6xl font-bold animate-pulse"
      >
        DY.
      </div>
    </div>
  );
};

export default Preloader;
