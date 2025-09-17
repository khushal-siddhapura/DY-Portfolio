// src/components/ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property from location object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This is what adds the animation!
    });
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
