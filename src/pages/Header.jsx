// --- src/pages/Header.jsx ---
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import gsap from "gsap";

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Animate menu open/close
  useEffect(() => {
    if (navRef.current) {
      if (menuOpen) {
        gsap.fromTo(
          navRef.current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          navRef.current.querySelectorAll("a, .nav-link"),
          { y: -15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      } else {
        gsap.to(navRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{
        background:
          theme === "dark" ? "rgba(10,10,10,0.75)" : "rgba(248,250,252,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight relative group"
          style={{ color: "var(--text)" }}
        >
          DY.
          <span
            className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--accent) 0 2px, transparent 2px 4px)",
            }}
          ></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {[
            { name: "About", path: "/about" },
            { name: "Business", path: "/business" },
            { name: "Clients", path: "/clients" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group nav-link"
              style={{ color: "var(--text)" }}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--accent) 0 2px, transparent 2px 4px)",
                }}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-3 py-2 rounded-full border transition-all duration-300 text-sm flex items-center gap-2 hover:bg-[var(--accent)] hover:text-black"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              background: "transparent",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Connect */}
          <Link
            to="/connect"
            className="px-4 py-2 rounded-full text-sm relative overflow-hidden border group"
            style={{
              border: `1px solid var(--border)`,
              color: "var(--text)",
            }}
          >
            <span className="relative z-10">Connect</span>
            <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-[var(--accent)] opacity-20 rounded-full"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 p-2 rounded-md border"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        ref={navRef}
        className="md:hidden overflow-hidden flex flex-col items-center gap-4 text-sm font-medium tracking-wide"
        style={{ height: 0, opacity: 0 }}
      >
        {[
          { name: "About", path: "/about" },
          { name: "Business", path: "/business" },
          { name: "Clients", path: "/clients" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="w-full text-center py-2 rounded-lg hover:bg-[var(--accent)] hover:text-black transition-all duration-300 nav-link"
            style={{ color: "var(--text)" }}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
