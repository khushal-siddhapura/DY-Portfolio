const Footer = () => {
  return (
    <footer className="py-8" style={{ borderTop: `1px solid var(--border)` }}>
      <div
        className="container mx-auto px-4 text-center text-sm"
        style={{ color: "var(--muted)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Digital Yagnesh. All rights
          reserved.
        </p>
        <p className="mt-2">Designed & Built with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
