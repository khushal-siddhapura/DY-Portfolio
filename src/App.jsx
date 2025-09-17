// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./pages/Footer";
// import Header from "./pages/Header";
// import CustomCursor from "./components/CustomCursor";
// import Preloader from "./components/Preloader";
// import HeroSection from "./pages/HeroSection";
// import ServicesSection from "./pages/container/home/ServicesSection";
// import FeaturedWorkSection from "./pages/container/home/FeaturedWorkSection";
// import PhilosophySection from "./pages/container/home/PhilosophySection";
// import MilestonesSection from "./pages/container/home/MilestonesSection";
// import YouTubeSection from "./pages/container/home/YouTubeSection";
// import ConnectSection from "./pages/container/home/ConnectSection";
// import AboutSection from "./pages/container/home/AboutSection";
// import About from "./pages/container/about/About";
// import Business from "./pages/container/business/Business";
// import Contact from "./pages/container/contact/Contact";
// import ClientsPage from "./pages/container/clients_page/ClientsPage";

// const App = () => {
//   const [theme, setTheme] = useState(() => {
//     try {
//       const saved = localStorage.getItem("theme");
//       if (saved) return saved;
//       if (
//         window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//       ) {
//         return "dark";
//       }
//     } catch (e) {}
//     return "light";
//   });

//   const [loading, setLoading] = useState(true);
//   const [isMounted, setIsMounted] = useState(false);

//   // --- inside App.jsx ---
//   useEffect(() => {
//     try {
//       localStorage.setItem("theme", theme);
//     } catch (e) {}

//     const root = document.documentElement;

//     if (theme === "dark") {
//       root.style.setProperty("--bg", "#0a0a0a");
//       root.style.setProperty("--surface", "#0f0f10");
//       root.style.setProperty("--text", "#e6eef8");
//       root.style.setProperty("--muted", "#9aa6b2");
//       root.style.setProperty("--accent", "#60a5fa");
//       root.style.setProperty("--border", "rgba(255,255,255,0.08)");
//       root.style.setProperty("--cursor-accent", "#60a5fa");
//       root.style.setProperty("--bg-rgb", "10,10,10");
//       root.style.setProperty("--accent-text", "#0f172a");
//     } else {
//       root.style.setProperty("--bg", "#f8fafc");
//       root.style.setProperty("--surface", "#ffffff");
//       root.style.setProperty("--text", "#0f172a");
//       root.style.setProperty("--muted", "#475569");
//       root.style.setProperty("--accent", "#2563eb");
//       root.style.setProperty("--border", "rgba(15,23,42,0.06)");
//       root.style.setProperty("--cursor-accent", "#2563eb");
//       root.style.setProperty("--bg-rgb", "248,250,252");
//       root.style.setProperty("--accent-text", "#f8fafc");
//     }

//     // KEEP data-theme (optional) for CSS targeting or debugging
//     root.setAttribute("data-theme", theme);

//     // IMPORTANT: toggle Tailwind's 'dark' class so `dark:` utilities respond
//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//   }, [theme]);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       setTimeout(() => setIsMounted(true), 100);
//     }
//   }, [loading]);

//   if (loading) return <Preloader />;

//   return (
//     <Router>
//       <CustomCursor accentVar="--cursor-accent" />
//       <div
//         style={{
//           background: "var(--bg)",
//           color: "var(--text)",
//           minHeight: "100vh",
//         }}
//         className={`font-sans antialiased transition-opacity duration-1000 ease-in-out ${
//           isMounted ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <Header theme={theme} setTheme={setTheme} />

//         <main>
//           <Routes>
//             {/* Home Page (all sections) */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <AboutSection />
//                   <ServicesSection />
//                   <FeaturedWorkSection />
//                   <PhilosophySection />
//                   <MilestonesSection />
//                   <YouTubeSection />
//                   <ConnectSection />
//                 </>
//               }
//             />

//             <Route path="/about" element={<About />} />
//             <Route path="/business" element={<Business />} />
//             <Route path="/clients" element={<ClientsPage />} />
//             <Route path="/connect" element={<Contact />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"; // Import Outlet
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

// Import your new Layout component

// Import page components
import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/container/home/ServicesSection";
import FeaturedWorkSection from "./pages/container/home/FeaturedWorkSection";
import PhilosophySection from "./pages/container/home/PhilosophySection";
import MilestonesSection from "./pages/container/home/MilestonesSection";
import YouTubeSection from "./pages/container/home/YouTubeSection";
import ConnectSection from "./pages/container/home/ConnectSection";
import AboutSection from "./pages/container/home/AboutSection";
import About from "./pages/container/about/About";
import Business from "./pages/container/business/Business";
import Contact from "./pages/container/contact/Contact";
import ClientsPage from "./pages/container/clients_page/ClientsPage";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";

// A small component for the Home page to keep the routes clean
const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FeaturedWorkSection />
    <PhilosophySection />
    <MilestonesSection />
    <YouTubeSection />
    <ConnectSection />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    } catch (e) {}
    return "light";
  });

  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg", "#0a0a0a");
      root.style.setProperty("--surface", "#0f0f10");
      root.style.setProperty("--text", "#e6eef8");
      root.style.setProperty("--muted", "#9aa6b2");
      root.style.setProperty("--accent", "#60a5fa");
      root.style.setProperty("--border", "rgba(255,255,255,0.08)");
      root.style.setProperty("--cursor-accent", "#60a5fa");
      root.style.setProperty("--bg-rgb", "10,10,10");
      root.style.setProperty("--accent-text", "#0f172a");
      root.classList.add("dark");
    } else {
      root.style.setProperty("--bg", "#f8fafc");
      root.style.setProperty("--surface", "#ffffff");
      root.style.setProperty("--text", "#0f172a");
      root.style.setProperty("--muted", "#475569");
      root.style.setProperty("--accent", "#2563eb");
      root.style.setProperty("--border", "rgba(15,23,42,0.06)");
      root.style.setProperty("--cursor-accent", "#2563eb");
      root.style.setProperty("--bg-rgb", "248,250,252");
      root.style.setProperty("--accent-text", "#f8fafc");
      root.classList.remove("dark");
    }
    root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setIsMounted(true), 100);
    }
  }, [loading]);

  if (loading) return <Preloader />;

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor accentVar="--cursor-accent" />
      <div
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          minHeight: "100vh",
        }}
        className={`font-sans antialiased transition-opacity duration-1000 ease-in-out ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/*
          We've restructured the routes. The Layout component is now the parent
          route for '/', and all other routes are nested inside it.
        */}
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            {/* The index route renders at the parent's path ('/') */}
            <Route index element={<Home />} />

            {/* Other pages are nested as children */}
            <Route path="about" element={<About />} />
            <Route path="business" element={<Business />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="connect" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
