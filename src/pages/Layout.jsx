import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // 1. Import useLocation
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ theme, setTheme }) => {
  const location = useLocation(); // 2. Get the current location
  const isHomePage = location.pathname === "/"; // 3. Check if it's the homepage

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {/* 4. Conditionally apply padding.
        - If it's NOT the homepage, add padding-top to push content down.
        - If it IS the homepage, add no padding, allowing the HeroSection
          to fill the entire screen.
      */}
      <main className={!isHomePage ? "pt-20" : ""}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
