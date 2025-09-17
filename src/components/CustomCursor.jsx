import { useEffect, useRef } from "react";

const CustomCursor = ({ accentVar = "--cursor-accent" }) => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && followerRef.current) {
        // center the elements (we used translate to shift half in markup)
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const onHover = () => followerRef.current?.classList.add("active");
    const onUnhover = () => followerRef.current?.classList.remove("active");
    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, [data-hoverable]").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, [data-hoverable]").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, []);

  // style injection for cursor active scale and accent border color via CSS variable
  return (
    <>
      <style>{`
        .cursor-follower.active { transform: scale(2.5) !important; }
      `}</style>
      <div
        ref={cursorRef}
        className="hidden md:block w-2 h-2 rounded-full fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-linear"
        style={{
          background: "var(--cursor-accent)",
          transform: "translate3d(-50%, -50%, 0)",
        }}
      />
      <div
        ref={followerRef}
        className="cursor-follower hidden md:block w-8 h-8 rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          border: "2px solid var(--cursor-accent)",
          background: "transparent",
        }}
      />
    </>
  );
};

export default CustomCursor;
