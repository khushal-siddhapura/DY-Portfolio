const HeroSection = () => {
  const imageUrl =
    "https://placehold.co/800x1000/0a0a0a/ffffff?text=Yagnesh&font=sans-serif";
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <style>{`
        .animate-hero-image { animation: zoom-in 1.5s ease-out 0.5s both; }
        .animate-hero-text { animation: fade-in-up 1s ease-out 1s both; }
        .animate-hero-subtitle { animation: fade-in-up 1s ease-out 1.2s both; }
        @keyframes zoom-in {
          0% { opacity: 0; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Background image mild zoom + theme-aware filters */
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-bg img { width: 100%; height: 100%; object-fit: cover; display: block; transition: filter 0.35s ease, transform 8s linear; transform: scale(1.02); }

        /* Light mode: slightly brighter but refined */
        :root[data-theme="light"] .hero-bg img {
          filter: brightness(0.82) contrast(1.04) saturate(0.98);
        }
        /* Dark mode: stronger dark mood (unchanged) */
        :root[data-theme="dark"] .hero-bg img {
          filter: brightness(0.36) contrast(1.05) saturate(0.9);
        }

        /* Overlay — premium light-mode gradient, darker overlay for dark mode */
        .hero-overlay { position: absolute; inset: 0; z-index: 1; pointer-events: none; transition: background 0.35s ease; }

        /* PREMIUM light gradient: layered warm sheen + cool highlight + subtle vignette */
        :root[data-theme="light"] .hero-overlay {
          background:
            radial-gradient(circle at 12% 18%, rgba(255,223,186,0.08), transparent 8%),
            radial-gradient(circle at 88% 82%, rgba(186,225,255,0.05), transparent 10%),
            linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,245,240,0.92) 36%, rgba(255,255,255,0) 72%),
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.04));
          mix-blend-mode: normal;
          backdrop-filter: blur(2px) saturate(110%);
        }

        /* Dark overlay: keep the same dark mood as before */
        :root[data-theme="dark"] .hero-overlay {
          background: linear-gradient(180deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.6) 35%, rgba(10,10,10,0) 70%);
        }

        /* Copy wrapper — transparent both themes */
        .hero-copy {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 1rem 1rem;
        }
        .hero-copy-inner {
          display: inline-block;
          padding: 1.25rem 1.6rem;
          border-radius: 12px;
          background: transparent; /* transparent for both themes */
        }

        /* Title/sub styling */
        .hero-title { margin: 0; padding: 0; line-height: 0.9; letter-spacing: -0.02em; }
        .hero-sub { margin-top: 0.8rem; }

        /* scroll hint */
        .scroll-hint { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); z-index: 12; color: var(--muted); font-size: 0.95rem; opacity: 0.95; display: flex; gap: 0.5rem; align-items: center; }
        .scroll-dot { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); box-shadow: 0 6px 14px rgba(0,0,0,0.12); animation: scroll-pulse 1.6s infinite; }
        @keyframes scroll-pulse { 0% { transform: translateY(0); } 50% { transform: translateY(6px); } 100% { transform: translateY(0); } }
      `}</style>

      <div className="hero-bg">
        <img
          src={imageUrl}
          alt="Yagnesh, CEO of Digital Yagnesh"
          className="animate-hero-image object-cover w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1200x1200/0a0a0a/333333?text=Image+Not+Found";
          }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-4 hero-copy">
        <div className="hero-copy-inner">
          <h1
            className="text-6xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter uppercase animate-hero-text hero-title"
            style={{ color: "var(--text)" }}
          >
            Yagnesh
          </h1>
          <p
            className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto animate-hero-subtitle hero-sub"
            style={{ color: "var(--muted)" }}
          >
            CEO at Digital Yagnesh — Visionary, Innovator, Leader.
          </p>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden>
        <div className="scroll-dot" />
        <div style={{ color: "var(--muted)" }}>Scroll Down</div>
      </div>
    </section>
  );
};

export default HeroSection;
