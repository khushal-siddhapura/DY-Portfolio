import AnimatedSection from "../../../components/AnimatedSection";

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);
const YouTube = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.8 8.2c-.2-1.2-.9-2.1-2.1-2.3C18 5.5 12 5.5 12 5.5s-6 0-7.7.4c-1.2.2-1.9 1.1-2.1 2.3C2 9.9 2 12 2 12s0 2.1.2 3.8c.2 1.2.9 2.1 2.1 2.3C6 18.5 12 18.5 12 18.5s6 0 7.7-.4c1.2-.2 1.9-1.1 2.1-2.3.2-1.7.2-3.8.2-3.8s0-2.1-.2-3.8z" />
    <path d="M10 9.75L15 12L10 14.25V9.75z" fill="currentColor" stroke="none" />
  </svg>
);

const ConnectSection = () => {
  return (
    <section
      id="connect"
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <AnimatedSection className="container mx-auto px-4 text-center">
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8"
          style={{ color: "var(--text)" }}
        >
          Have a project in mind? <br />
          <span style={{ color: "var(--accent)" }}>
            Let's create something
          </span>{" "}
          extraordinary.
        </h2>
        <a
          href="mailto:ceo@digitalyagnesh.com"
          data-hoverable
          className="inline-block relative text-xl md:text-2xl font-medium group"
          style={{ color: "var(--text)" }}
        >
          <span>pandyayagnesh216@gmail.com</span>
          <span
            className="absolute bottom-0 left-0 w-full h-0.5"
            style={{
              background: "var(--accent)",
              transform: "scaleX(0)",
              transition: "transform 0.5s ease",
              transformOrigin: "left",
            }}
          />
        </a>
        <div className="flex justify-center gap-6 mt-12">
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/yagnesh-pandya-aa297a2a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-gray-500 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/yagneshpandyaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-gray-500 transition-all duration-300 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:text-white hover:border-transparent hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@yagneshpandyaofficial1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-gray-500 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-110"
            aria-label="YouTube"
          >
            <YouTube className="w-5 h-5" />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ConnectSection;
