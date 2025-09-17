import useAnimateOnScroll from "./useAnimateOnScroll";

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
