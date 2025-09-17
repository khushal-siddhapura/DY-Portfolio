import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Megaphone,
  CodeXml,
  Palette,
  CalendarCheck,
  MicVocal,
  UsersRound,
  Lightbulb,
  BrainCircuit,
  PartyPopper,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Service and testimonial data remains the same ---
const services = [
  {
    icon: Megaphone,

    title: "Digital Marketing",

    description:
      "Driving results with data-backed campaigns across social media, Google Ads, SEO, and content.",

    color: "text-blue-400",

    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: CodeXml,

    title: "Website Development",

    description:
      "Building fast, responsive, and SEO-optimized websites that convert visitors into customers.",

    color: "text-green-400",

    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: Palette,

    title: "Brand & Design",

    description:
      "Crafting memorable logos, brand identities, and visual assets that tell your unique story.",

    color: "text-purple-400",

    imageUrl:
      "https://images.unsplash.com/photo-1522120691812-dcdfb625f397?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: CalendarCheck,

    title: "Event Management",

    description:
      "Executing flawless virtual and in-person events, from webinars to major product launches.",

    color: "text-orange-400",

    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: MicVocal,

    title: "Podcast Production",

    description:
      "End-to-end podcast support, from strategic planning and recording to editing and distribution.",

    color: "text-red-400",

    imageUrl:
      "https://images.unsplash.com/photo-1714893656818-9bd2b65c11ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    icon: UsersRound,

    title: "Social Media Management",

    description:
      "Building engaged communities with strategic content, management, and growth hacking.",

    color: "text-pink-400",

    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: Lightbulb,

    title: "Content Strategy",

    description:
      "Designing content ecosystems that attract, engage, and convert your target audience effectively.",

    color: "text-yellow-400",

    imageUrl:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: BrainCircuit,

    title: "Branding Consultancy",

    description:
      "Strategic guidance to build, refine, or reposition your brand for maximum market impact.",

    color: "text-teal-400",

    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
  },

  {
    icon: PartyPopper,

    title: "Wedding Events",

    description:
      "Creating unforgettable wedding experiences with precision planning and creative flair.",

    color: "text-rose-400",

    imageUrl:
      "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const testimonials = [
  {
    quote:
      "The website Yagnesh built for us is not only beautiful but also super effective. It’s easy to use, fast, and has helped us get more customers than ever before.",
    name: "Kiran Gajjar",
    company: "Founder, Interior Solutions",
  },
  {
    quote:
      "Yagnesh really understood our needs and gave us a clear strategy that worked. Our online presence grew faster than we imagined, and it directly boosted our business.",
    name: "Meghal Shah",
    company: "CEO, MSACA and Credorbit",
  },

  {
    quote:
      "Working with Yagnesh was smooth and stress-free. The social media campaigns brought amazing results and reached far more people than we expected.",
    name: "",
    company: "Trigno Pizza & Cafe, Vadodara",
  },
];

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const HorizontalScrollServices = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ["0%", `-${(1 - 1 / services.length) * 100}%`]
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[500vh]"
      style={{ background: "var(--surface)" }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2
            className="text-5xl md:text-8xl font-bold text-center pointer-events-none"
            style={{ color: "var(--border)" }} // Using --border for a subtle, theme-aware background text
          >
            SERVICES
          </h2>
        </div>

        {/* Cards */}
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative h-[450px] w-[300px] md:h-[500px] md:w-[400px] overflow-hidden rounded-2xl shadow-xl flex-shrink-0"
              style={{
                background: "var(--surface)", // Card background is --surface
                border: "1px solid var(--border)",
              }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t"
                style={{
                  // Dynamic gradient for a premium look
                  background: `linear-gradient(to top, var(--bg) 0%, rgba(var(--bg-rgb), 0.8) 20%, rgba(var(--bg-rgb), 0.5) 40%, transparent 60%)`,
                }}
              ></div>

              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div>
                  <div
                    className="p-3 rounded-xl self-start"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--bg)", // Icon background is --bg
                    }}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2" style={{ color: "var(--muted)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Business() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter"
            style={{ color: "var(--text)" }}
          >
            Creative Digital Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl"
            style={{ color: "var(--muted)" }}
          >
            Tailored strategies to help your business grow. Explore my services
            and projects that showcase how I deliver measurable results.
          </motion.p>
        </div>
      </header>

      <HorizontalScrollServices />

      {/* Case Study Section */}
      <div style={{ background: "var(--bg)" }}>
        <AnimatedSection className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* FORCED LIGHT: Manually setting dark text color and overriding dark mode's white text */}
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-600">
                Featured Case Study
              </h2>

              {/* FORCED LIGHT: Manually setting blue color and overriding dark mode's purple */}
              <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-purple-500">
                GrowFresh Organics — E-commerce Transformation
              </p>

              {/* FORCED LIGHT: Manually setting blue border and overriding dark mode's purple */}
              <div className="mt-8 space-y-6 pl-6 border-l-2 border-blue-500 dark:border-blue-500">
                <p className="text-gray-600 dark:text-gray-500">
                  <strong className="font-semibold text-gray-800 dark:text-red-500">
                    Challenge:
                  </strong>{" "}
                  Low online visibility and poor conversion rates despite
                  quality products.
                </p>
                <p className="text-gray-600 dark:text-gray-500">
                  <strong className="font-semibold text-gray-800 dark:text-yellow-500">
                    Solution:
                  </strong>{" "}
                  Complete website redesign, robust SEO optimization, and
                  targeted social media campaigns.
                </p>
                <p className="text-gray-600 dark:text-gray-500">
                  <strong className="font-semibold text-gray-800 dark:text-green-500">
                    Outcome:
                  </strong>{" "}
                  A monumental increase in traffic, conversions, and revenue,
                  establishing them as a market leader.
                </p>
              </div>
            </div>

            {/* This section appears to be working, but applying the same logic for consistency */}
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  icon: TrendingUp,
                  value: "247%",
                  label: "Increase in Organic Traffic",
                  color: "text-green-500",
                },
                {
                  icon: Target,
                  value: "89%",
                  label: "Higher Conversion Rate",
                  color: "text-blue-500",
                },
                {
                  icon: BarChart3,
                  value: "137%",
                  label: "Monthly Revenue Growth",
                  color: "text-purple-500",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-6 rounded-2xl shadow-sm bg-gray-50 border border-gray-200 dark:bg-gray-50 dark:border-gray-200"
                >
                  <stat.icon
                    className={`h-10 w-10 ${stat.color} flex-shrink-0`}
                  />
                  <div>
                    <p className={`text-4xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection
          className="py-24 sm:py-32"
          style={{ background: "var(--surface)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                What My Clients Say
              </h2>
              <p
                className="mt-4 max-w-2xl mx-auto text-lg"
                style={{ color: "var(--muted)" }}
              >
                Real stories from clients who have achieved real growth.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-8 rounded-2xl shadow-sm"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p className="text-lg" style={{ color: "var(--muted)" }}>
                    "{testimonial.quote}"
                  </p>
                  <div
                    className="mt-6 pt-6"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <p className="font-bold" style={{ color: "var(--text)" }}>
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-24 sm:py-32">
          <div className="text-center px-4">
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tighter"
              style={{ color: "var(--text)" }}
            >
              Ready to Elevate Your <br /> Digital Presence?
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-lg"
              style={{ color: "var(--muted)" }}
            >
              Let’s build a powerful digital strategy that delivers exceptional,
              measurable results.
            </p>
            <Link to="/connect" className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-text)",
                }}
              >
                Get in Touch <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
