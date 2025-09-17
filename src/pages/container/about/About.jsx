// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- SVG ICONS (Unchanged) ---
// // Note: I've added a CheckCircleIcon for the "Values" section.
// const BriefcaseIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//   </svg>
// );
// const MicIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
//     <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
//     <line x1="12" y1="19" x2="12" y2="23"></line>
//     <line x1="8" y1="23" x2="16" y2="23"></line>
//   </svg>
// );
// const TargetIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10"></circle>
//     <circle cx="12" cy="12" r="6"></circle>
//     <circle cx="12" cy="12" r="2"></circle>
//   </svg>
// );
// const CoffeeIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
//     <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
//     <line x1="6" y1="1" x2="6" y2="4"></line>
//     <line x1="10" y1="1" x2="10" y2="4"></line>
//     <line x1="14" y1="1" x2="14" y2="4"></line>
//   </svg>
// );
// const XIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="18" y1="6" x2="6" y2="18"></line>
//     <line x1="6" y1="6" x2="18" y2="18"></line>
//   </svg>
// );
// // ✨ NEW: Icon for the values section
// const CheckCircleIcon = ({ className }) => (
//   <svg
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//     <polyline points="22 4 12 14.01 9 11.01"></polyline>
//   </svg>
// );

// // --- CONTENT DATA ( ✨ UPDATED with backgroundImageUrls) ---
// const content = {
//   profile: {
//     name: "Yagnesh Pandya",
//     tagline: "Digital Marketer • Content Creator • Speaker",
//     intro:
//       "I’m Yagnesh Pandya, founder of Digital Yagnesh, where I help businesses, creators, and entrepreneurs grow through impactful digital marketing, branding, and content creation. With 8+ years of experience and 50+ clients served, I deliver strategies designed to spark real engagement and measurable results.",
//     imageUrl: "https://placehold.co/128x128/14b8a6/white?text=YP",
//   },
//   sections: [
//     {
//       id: "founder",
//       icon: BriefcaseIcon,
//       title: "Founder of Digital Yagnesh",
//       subtitle:
//         "Building brands through strategy, creativity, and measurable growth.",
//       content:
//         "As the founder of Digital Yagnesh, I’ve partnered with 100+ clients across India — from startups to personal brands — crafting tailored digital marketing strategies that drive awareness, engagement, and conversions.\n\nMy services span social media marketing, ad management, and content creation, blending data with creativity to deliver lasting impact. What sets Digital Yagnesh apart is a results-driven approach and a commitment to long-term growth.\n\nI make sure every brand I work with reflects its true values, building meaningful connections and sustainable success in today’s fast-moving digital world.",
//       // ✨ ADDED
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       id: "host",
//       icon: MicIcon,
//       title: "Host of Talk with Yagnesh",
//       subtitle: "Sharing real stories, real insights, real impact.",
//       content:
//         "In 2021, I launched Talk with Yagnesh on YouTube to spotlight authentic stories from inspiring individuals. From entrepreneurs and creators to educators and innovators, each guest brings experiences that spark learning and motivation.\n\nWith 50+ guests featured, the show has grown into more than just interviews — it’s a community dedicated to growth, knowledge, and inspiration. Through these conversations, I aim to deliver meaningful content that empowers audiences and resonates across the globe.",
//       // ✨ ADDED
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
//     },
//     {
//       id: "mission",
//       icon: TargetIcon,
//       title: "My Mission & Values",
//       subtitle: "The principles that shape my work and client relationships.",
//       content:
//         "My mission is rooted in honesty, clarity, and growth. I believe every brand — big or small — deserves an authentic voice, a clear message, and a strategy that works. I collaborate closely with clients to bring their vision to life while staying true to their goals and values.",
//       values: [
//         {
//           name: "Authenticity",
//           text: "I build honest, transparent relationships with clients and their audiences.",
//         },
//         {
//           name: "Impact",
//           text: "I focus on creating meaningful change that drives real results.",
//         },
//         {
//           name: "Innovation",
//           text: "I explore fresh strategies and creative approaches to stay ahead.",
//         },
//         {
//           name: "Growth",
//           text: "I’m committed to continuous learning and improvement for lasting success.",
//         },
//       ],
//       // ✨ ADDED
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1542626991-a2f572a6b697?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       id: "beyond",
//       icon: CoffeeIcon,
//       title: "Beyond Work",
//       subtitle: "The person behind the professional.",
//       content:
//         "When I’m not building campaigns or creating content, I’m connecting with fellow creators, exploring fresh ideas, and learning from industry leaders. I believe growth never stops — personally or professionally — and I carry that mindset into every project and conversation.",
//       // ✨ ADDED
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop",
//     },
//   ],
// };

// // --- HOOKS (Unchanged) ---
// const useWindowSize = () => {
//   const [size, setSize] = useState([0, 0]);
//   useEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// };

// function useThemeCSSVars() {
//   const [css, setCss] = useState({});
//   useEffect(() => {
//     const root = document.documentElement;
//     const readVars = () => {
//       const style = getComputedStyle(root);
//       setCss({
//         bg: style.getPropertyValue("--bg") || "#f8fafc",
//         surface: style.getPropertyValue("--surface") || "#ffffff",
//         text: style.getPropertyValue("--text") || "#0f172a",
//         muted: style.getPropertyValue("--muted") || "#475569",
//         accent: style.getPropertyValue("--accent") || "#2563eb",
//         border: style.getPropertyValue("--border") || "rgba(15,23,42,0.06)",
//         bgRgb: style.getPropertyValue("--bg-rgb") || "248,250,252",
//       });
//     };
//     readVars();
//     const mo = new MutationObserver(readVars);
//     mo.observe(root, { attributes: true, attributeFilter: ["class"] });
//     return () => mo.disconnect();
//   }, []);
//   return css;
// }

// // --- MAIN COMPONENT ( ✨ UPDATED) ---
// export default function About() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [activeBgImage, setActiveBgImage] = useState(null); // ✨ NEW state for background image
//   const [width] = useWindowSize();
//   const isMobile = useMemo(() => width < 768, [width]);
//   const css = useThemeCSSVars();

//   const openSection = (id) => {
//     const section = content.sections.find((s) => s.id === id);
//     setActiveSection(section);
//     setActiveBgImage(section.backgroundImageUrl); // ✨ SET background on open
//   };

//   const closeSection = () => {
//     setActiveSection(null);
//     setActiveBgImage(null); // ✨ CLEAR background on close
//   };

//   return (
//     <motion.main
//       initial={{ backgroundPosition: "0% 0%" }}
//       animate={{ backgroundPosition: "100% 100%" }}
//       transition={{
//         ease: "linear",
//         duration: 120,
//         repeat: Infinity,
//         repeatType: "mirror",
//       }}
//       className="relative min-h-screen w-full transition-colors duration-300 overflow-hidden font-sans"
//       style={{
//         backgroundColor: css.bg || "var(--bg, #f8fafc)",
//         color: css.text || "var(--text, #0f172a)",
//         backgroundSize: "200% 200%",
//       }}
//     >
//       <div
//         aria-hidden
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           background: `radial-gradient(circle at center, rgba(${css.bgRgb}, 0.03), transparent 30%)`,
//           pointerEvents: "none",
//         }}
//       />

//       {/* ✨ NEW: Animated Background Image Container */}
//       <AnimatePresence>
//         {activeBgImage && (
//           <motion.div
//             key="background-image"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url(${activeBgImage})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               zIndex: 1, // Sits above the radial gradient but below content
//             }}
//           >
//             {/* Overlay to ensure text is readable over any image */}
//             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative w-full min-h-screen flex items-center justify-center p-4 z-10">
//         {isMobile ? (
//           <MobileLayout onSectionClick={openSection} css={css} />
//         ) : (
//           <DesktopLayout onSectionClick={openSection} css={css} />
//         )}
//       </div>

//       <AnimatePresence>
//         {activeSection && (
//           <ModalView section={activeSection} onClose={closeSection} css={css} />
//         )}
//       </AnimatePresence>
//     </motion.main>
//   );
// }

// // --- LAYOUT COMPONENTS (Unchanged from original) ---
// const DesktopLayout = ({ onSectionClick, css }) => {
//   const profileSize = 256;
//   const satelliteSize = 96;
//   const orbitRadius = profileSize / 2 + satelliteSize / 2 + 40;

//   const satelliteConfigs = useMemo(() => {
//     return content.sections.map((_, index) => {
//       const angle = (index / content.sections.length) * (2 * Math.PI);
//       const initialX = Math.cos(angle) * orbitRadius;
//       const initialY = Math.sin(angle) * orbitRadius;
//       const driftMagnitude = 20 + Math.random() * 20;
//       const driftDuration = 10 + Math.random() * 10;
//       return {
//         initialX,
//         initialY,
//         driftMagnitude,
//         driftDuration,
//         driftAngleOffset: Math.random() * 2 * Math.PI,
//       };
//     });
//   }, [orbitRadius]);

//   return (
//     <div
//       style={{ width: 700, height: 700 }}
//       className="relative flex items-center justify-center"
//     >
//       <motion.div
//         layoutId="profile-container"
//         className="z-20 w-64 h-64 rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center p-6"
//         style={{ background: css.surface, border: `1px solid ${css.border}` }}
//         whileHover={{
//           scale: 1.03,
//           boxShadow: `0 0 50px -15px ${css.accent}55`,
//         }}
//         transition={{ type: "spring", damping: 15, stiffness: 100 }}
//       >
//         <motion.img
//           src={content.profile.imageUrl}
//           alt="Yagnesh Pandya"
//           className="w-24 h-24 rounded-full mb-4"
//           style={{
//             border: `4px solid ${css.surface}`,
//             boxShadow: `0 8px 24px rgba(0,0,0,0.08)`,
//           }}
//           layoutId="profile-image"
//         />
//         <motion.h1
//           className="text-2xl font-bold"
//           layoutId="profile-name"
//           style={{ color: css.accent }}
//         >
//           {content.profile.name}
//         </motion.h1>
//         <motion.p
//           className="text-sm mt-1"
//           layoutId="profile-tagline"
//           style={{ color: css.muted }}
//         >
//           {content.profile.tagline}
//         </motion.p>
//       </motion.div>

//       {content.sections.map((section, index) => {
//         const {
//           initialX,
//           initialY,
//           driftMagnitude,
//           driftDuration,
//           driftAngleOffset,
//         } = satelliteConfigs[index];

//         return (
//           <motion.div
//             key={section.id}
//             layoutId={section.id}
//             className="absolute z-10 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
//             style={{
//               width: satelliteSize,
//               height: satelliteSize,
//               top: `calc(50% - ${satelliteSize / 2}px)`,
//               left: `calc(50% - ${satelliteSize / 2}px)`,
//               background: css.surface,
//               border: `1px solid ${css.border}`,
//             }}
//             initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.8 }}
//             animate={{
//               x: [
//                 initialX,
//                 initialX +
//                   driftMagnitude *
//                     Math.cos(
//                       driftAngleOffset +
//                         (index / content.sections.length) * 2 * Math.PI
//                     ),
//                 initialX +
//                   driftMagnitude *
//                     Math.cos(
//                       driftAngleOffset +
//                         (index / content.sections.length) * 2 * Math.PI +
//                         Math.PI
//                     ),
//                 initialX,
//               ],
//               y: [
//                 initialY,
//                 initialY +
//                   driftMagnitude *
//                     Math.sin(
//                       driftAngleOffset +
//                         (index / content.sections.length) * 2 * Math.PI
//                     ),
//                 initialY +
//                   driftMagnitude *
//                     Math.sin(
//                       driftAngleOffset +
//                         (index / content.sections.length) * 2 * Math.PI +
//                         Math.PI
//                     ),
//                 initialY,
//               ],
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               x: {
//                 duration: driftDuration,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//                 delay: index * 0.1,
//               },
//               y: {
//                 duration: driftDuration,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//                 delay: index * 0.1,
//               },
//               opacity: { duration: 0.5, delay: index * 0.1 },
//               scale: {
//                 type: "spring",
//                 damping: 15,
//                 stiffness: 100,
//                 delay: index * 0.1,
//               },
//               default: { type: "spring", damping: 20, stiffness: 120 },
//             }}
//             onClick={() => onSectionClick(section.id)}
//             whileHover={{
//               scale: 1.2,
//               zIndex: 50,
//               boxShadow: `0 0 40px ${css.accent}66`,
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <section.icon className="w-10 h-10" style={{ color: css.accent }} />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// const MobileLayout = ({ onSectionClick, css }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, x: 0 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       transition: { type: "spring", stiffness: 120, damping: 18 },
//     },
//   };

//   return (
//     <motion.div
//       className="w-full max-w-md flex flex-col items-center gap-6 pt-20 pb-8 z-10"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.div
//         layoutId="profile-container"
//         variants={itemVariants}
//         className="w-full rounded-2xl backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center p-6"
//         style={{ background: css.surface, border: `1px solid ${css.border}` }}
//       >
//         <motion.img
//           src={content.profile.imageUrl}
//           alt="Yagnesh Pandya"
//           className="w-24 h-24 rounded-full mb-4"
//           style={{
//             border: `4px solid ${css.surface}`,
//             boxShadow: `0 6px 18px rgba(0,0,0,0.06)`,
//           }}
//           layoutId="profile-image"
//         />
//         <motion.h1
//           className="text-2xl font-bold"
//           layoutId="profile-name"
//           style={{ color: css.accent }}
//         >
//           {content.profile.name}
//         </motion.h1>
//         <motion.p
//           className="text-sm mt-1"
//           layoutId="profile-tagline"
//           style={{ color: css.muted }}
//         >
//           {content.profile.tagline}
//         </motion.p>
//         <p className="text-sm mt-4" style={{ color: css.text }}>
//           {content.profile.intro}
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         className="w-full grid grid-cols-2 gap-4"
//       >
//         {content.sections.map((section) => (
//           <motion.div
//             key={section.id}
//             layoutId={section.id}
//             onClick={() => onSectionClick(section.id)}
//             className="p-4 pt-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer"
//             whileHover={{
//               scale: 1.05,
//               y: -5,
//               boxShadow: `0 10px 20px -5px ${css.accent}33`,
//             }}
//             whileTap={{ scale: 0.95 }}
//             variants={itemVariants}
//             style={{
//               background: css.surface,
//               border: `1px solid ${css.border}`,
//               color: css.text,
//             }}
//           >
//             <section.icon
//               className="w-8 h-8 mb-2"
//               style={{ color: css.accent }}
//             />
//             <h3 className="font-semibold text-sm" style={{ color: css.text }}>
//               {section.title}
//             </h3>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div variants={itemVariants} className="mt-8 text-center">
//         <h2
//           className="text-2xl font-bold tracking-tighter"
//           style={{ color: css.text }}
//         >
//           Let's Connect
//         </h2>
//         <p style={{ color: css.muted }} className="mt-2">
//           Beyond work, I'm always exploring fresh ideas and connecting with
//           fellow creators.
//         </p>
//         <motion.button
//           className="mt-4 px-6 py-2 font-semibold rounded-full shadow-lg transition-transform"
//           whileHover={{
//             scale: 1.05,
//             y: -2,
//             boxShadow: `0 5px 15px ${css.accent}44`,
//           }}
//           whileTap={{ scale: 0.95 }}
//           style={{ background: css.accent, color: css.surface }}
//         >
//           Get In Touch
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- MODAL VIEW COMPONENT ( ✨ UPDATED with more creative content) ---
// const ModalView = ({ section, onClose, css }) => {
//   // Variants for staggering content inside the modal
//   const contentVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.08 + 0.2, // Staggered delay
//         type: "spring",
//         stiffness: 150,
//         damping: 20,
//       },
//     }),
//     exit: {
//       opacity: 0,
//       x: 5,
//       transition: { duration: 0.15 },
//     },
//   };

//   return (
//     <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
//       {/* Backdrop (becomes transparent if a BG image is active) */}
//       <motion.div
//         className="absolute inset-0 bg-black/50"
//         onClick={onClose}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         style={{ backdropFilter: "blur(8px)" }} // Use backdropFilter directly
//       />

//       {/* Main Modal Panel */}
//       <motion.div
//         layoutId={section.id}
//         transition={{ type: "spring", damping: 25, stiffness: 150 }}
//         className="relative z-50 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
//         style={{
//           background: css.surface,
//           border: `1px solid ${css.border}`,
//           color: css.text,
//         }}
//       >
//         {/* Header with creative styling */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, transition: { delay: 0.1 } }}
//           exit={{ opacity: 0, transition: { duration: 0.1 } }}
//           className="flex-shrink-0 p-6 flex items-start gap-5 border-b"
//           style={{ background: css.surface, borderColor: css.border }}
//         >
//           <motion.div
//             className="p-2 rounded-full"
//             style={{
//               background: `${css.accent}22`, // Soft background for the icon
//               filter: `drop-shadow(0 0 15px ${css.accent}99)`, // ✨ Glowing effect
//             }}
//           >
//             <section.icon
//               className="w-10 h-10 flex-shrink-0"
//               style={{ color: css.accent }}
//             />
//           </motion.div>
//           <div>
//             {/* ✨ Gradient Text Title */}
//             <h2
//               className="text-3xl font-bold bg-clip-text text-transparent"
//               style={{
//                 backgroundImage: `linear-gradient(90deg, ${css.accent}, #a855f7)`,
//               }}
//             >
//               {section.title}
//             </h2>
//             <p className="mt-1" style={{ color: css.muted }}>
//               {section.subtitle}
//             </p>
//           </div>
//         </motion.div>

//         {/* Scrollable Content with staggered animations */}
//         <div className="flex-grow p-6 overflow-y-auto">
//           {section.content.split("\n\n").map((paragraph, i) => (
//             <motion.p
//               key={i}
//               className="mb-4 last:mb-0"
//               style={{ color: css.text, whiteSpace: "pre-wrap" }}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={contentVariants}
//             >
//               {paragraph}
//             </motion.p>
//           ))}
//           {section.values && (
//             <div className="mt-8 grid sm:grid-cols-2 gap-5">
//               {section.values.map((value, i) => (
//                 <motion.div
//                   key={value.name}
//                   className="p-4 rounded-xl flex items-start gap-4"
//                   style={{
//                     background: `rgba(${css.bgRgb}, 0.5)`,
//                     // ✨ Creative border
//                     border: `1px solid ${css.border}`,
//                     borderLeft: `4px solid ${css.accent}`,
//                   }}
//                   custom={i + section.content.split("\n\n").length}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={contentVariants}
//                 >
//                   <CheckCircleIcon
//                     className="w-6 h-6 flex-shrink-0 mt-1"
//                     style={{ color: css.accent }}
//                   />
//                   <div>
//                     <h4 style={{ color: css.text }} className="font-bold">
//                       {value.name}
//                     </h4>
//                     <p style={{ color: css.muted }} className="text-sm mt-1">
//                       {value.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Close Button */}
//         <motion.button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 rounded-full"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           whileHover={{ scale: 1.1, rotate: 90 }}
//           aria-label="Close"
//           style={{ background: css.surface, border: `1px solid ${css.border}` }}
//         >
//           <XIcon className="w-6 h-6" style={{ color: css.muted }} />
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// --- SVG ICONS (Unchanged) ---
const BriefcaseIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const MicIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);
const TargetIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);
const CoffeeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);
const XIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
// ✨ NEW: Arrow Icon for CTA buttons
const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- ✨ UPDATED CONTENT DATA ---
// We've restructured 'content' into 'description' and added 'stats', 'keyPoints', and 'cta' for richer modals.
// const content = {
//   profile: {
//     name: "Yagnesh Pandya",
//     tagline: "Digital Marketer • Content Creator • Speaker",
//     intro:
//       "I’m Yagnesh Pandya, founder of Digital Yagnesh, where I help businesses, creators, and entrepreneurs grow through impactful digital marketing, branding, and content creation. With 8+ years of experience and 50+ clients served, I deliver strategies designed to spark real engagement and measurable results.",
//     imageUrl: "https://placehold.co/128x128/14b8a6/white?text=YP",
//   },
//   sections: [
//     {
//       id: "founder",
//       icon: BriefcaseIcon,
//       title: "Founder",
//       subtitle:
//         "Building brands through strategy, creativity, and measurable growth.",
//       description:
//         "As the founder of Digital Yagnesh, I partner with businesses to craft tailored digital marketing strategies that drive awareness, engagement, and conversions. My services blend data with creativity to deliver lasting impact.",
//       stats: [
//         { value: "100+", label: "Clients Served" },
//         { value: "8+", label: "Years Experience" },
//         { value: "95%", label: "Client Retention" },
//       ],
//       cta: {
//         label: "Explore My Services",
//         href: "/business",
//       },
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       id: "host",
//       icon: MicIcon,
//       title: "Podcast Host",
//       subtitle: "Sharing real stories, real insights, real impact.",
//       description:
//         "In 2021, I launched *Talk with Yagnesh* on YouTube to spotlight authentic stories from inspiring individuals. The show has grown into a community dedicated to growth, knowledge, and inspiration, aiming to deliver content that empowers audiences globally.",
//       stats: [
//         { value: "50+", label: "Guests Featured" },
//         { value: "10k+", label: "Monthly Views" },
//         { value: "3", label: "Years Running" },
//       ],
//       cta: {
//         label: "Watch on YouTube",
//         href: "https://www.youtube.com/@YagneshPandyaOfficial1",
//       },
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
//     },
//     {
//       id: "mission",
//       icon: TargetIcon,
//       title: "Mission & Values",
//       subtitle: "The principles that shape my work and client relationships.",
//       description:
//         "My mission is rooted in honesty, clarity, and growth. I believe every brand deserves an authentic voice, a clear message, and a strategy that works. I collaborate closely with clients to bring their vision to life while staying true to their goals and values.",
//       keyPoints: [
//         {
//           name: "Authenticity",
//           text: "Building honest, transparent relationships with clients and their audiences.",
//         },
//         {
//           name: "Impact",
//           text: "Focusing on creating meaningful change that drives real, measurable results.",
//         },
//         {
//           name: "Innovation",
//           text: "Exploring fresh strategies and creative approaches to stay ahead in a dynamic world.",
//         },
//         {
//           name: "Growth",
//           text: "Committing to continuous learning and improvement for lasting success.",
//         },
//       ],
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1542626991-a2f572a6b697?q=80&w=2070&auto=format&fit=crop",
//     },
//     {
//       id: "beyond",
//       icon: CoffeeIcon,
//       title: "Beyond Work",
//       subtitle: "The person behind the professional.",
//       description:
//         "When I’m not building campaigns, I’m connecting with fellow creators, exploring fresh ideas, and learning from industry leaders. I believe growth never stops—personally or professionally—and I carry that mindset into every project and conversation.",
//       cta: {
//         label: "Let's Connect on LinkedIn",
//         href: "https://www.linkedin.com/in/yagnesh-pandya-aa297a2a6/",
//       },
//       backgroundImageUrl:
//         "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop",
//     },
//   ],
// };

const content = {
  profile: {
    name: "Yagnesh Pandya",
    tagline: "Digital Marketer • Content Creator • Speaker",
    intro:
      "I’m Yagnesh Pandya, founder of Digital Yagnesh, where I help businesses, creators, and entrepreneurs grow through impactful digital marketing, branding, and content creation. With 8+ years of experience and 50+ clients served, I deliver strategies designed to spark real engagement and measurable results.",
    imageUrl: "https://placehold.co/128x128/14b8a6/white?text=YP",
  },
  sections: [
    {
      id: "founder",
      icon: BriefcaseIcon,
      title: "Founder",
      subtitle:
        "Building brands through strategy, creativity, and measurable growth.",
      description:
        "As the founder of Digital Yagnesh, I partner with businesses to craft tailored digital marketing strategies that drive awareness, engagement, and conversions. My services blend data with creativity to deliver lasting impact.",
      stats: [
        { value: "100+", label: "Clients Served" },
        { value: "8+", label: "Years Experience" },
        { value: "98%", label: "Client Retention" },
      ],
      cta: {
        label: "Explore My Services",
        href: "/business",
      },
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "host",
      icon: MicIcon,
      title: "Podcast Host",
      subtitle: "Sharing real stories, real insights, real impact.",
      description:
        "In 2021, I launched 𝐓𝐚𝐥𝐤 𝐰𝐢𝐭𝐡 𝐘𝐚𝐠𝐧𝐞𝐬𝐡 on YouTube to spotlight authentic stories from inspiring individuals. The show has grown into a community dedicated to growth, knowledge, and inspiration, aiming to deliver content that empowers audiences globally.",
      stats: [
        { value: "50+", label: "Guests Featured" },
        { value: "10k+", label: "Monthly Views" },
        { value: "3", label: "Years Running" },
      ],
      cta: {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/@YagneshPandyaOfficial1",
      },
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "mission",
      icon: TargetIcon,
      title: "Mission & Values",
      subtitle: "The principles that shape my work and client relationships.",
      description:
        "My mission is rooted in honesty, clarity, and growth. I believe every brand deserves an authentic voice, a clear message, and a strategy that works. I collaborate closely with clients to bring their vision to life while staying true to their goals and values.",
      keyPoints: [
        {
          name: "Authenticity",
          text: "Building honest, transparent relationships with clients and their audiences.",
        },
        {
          name: "Impact",
          text: "Focusing on creating meaningful change that drives real, measurable results.",
        },
        {
          name: "Innovation",
          text: "Exploring fresh strategies and creative approaches to stay ahead in a dynamic world.",
        },
        {
          name: "Growth",
          text: "Committing to continuous learning and improvement for lasting success.",
        },
      ],
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1542626991-a2f572a6b697?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "beyond",
      icon: CoffeeIcon,
      title: "Beyond Work",
      subtitle: "The person behind the professional.",
      description:
        "When I’m not building campaigns, I’m connecting with fellow creators, exploring fresh ideas, and learning from industry leaders. I believe growth never stops—personally or professionally—and I carry that mindset into every project and conversation.",
      cta: {
        label: "Let's Connect on LinkedIn",
        href: "https://www.linkedin.com/in/yagnesh-pandya-aa297a2a6/",
      },
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop",
    },
  ],
};

// --- HOOKS (Unchanged) ---
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

function useThemeCSSVars() {
  const [css, setCss] = useState({});
  useEffect(() => {
    const root = document.documentElement;
    const readVars = () => {
      const style = getComputedStyle(root);
      setCss({
        bg: style.getPropertyValue("--bg") || "#f8fafc",
        surface: style.getPropertyValue("--surface") || "#ffffff",
        text: style.getPropertyValue("--text") || "#0f172a",
        muted: style.getPropertyValue("--muted") || "#475569",
        accent: style.getPropertyValue("--accent") || "#14b8a6", // Changed accent for a fresh look
        border: style.getPropertyValue("--border") || "rgba(15,23,42,0.06)",
        bgRgb: style.getPropertyValue("--bg-rgb") || "248,250,252",
      });
    };
    readVars();
    const mo = new MutationObserver(readVars);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);
  return css;
}

// --- MAIN COMPONENT (Updated) ---
export default function About() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeBgImage, setActiveBgImage] = useState(null);
  const [width] = useWindowSize();
  const isMobile = useMemo(() => width < 768, [width]);
  const css = useThemeCSSVars();

  const openSection = (id) => {
    const section = content.sections.find((s) => s.id === id);
    setActiveSection(section);
    setActiveBgImage(section.backgroundImageUrl);
  };

  const closeSection = () => {
    setActiveSection(null);
    setActiveBgImage(null);
  };

  return (
    <motion.main
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{
        ease: "linear",
        duration: 120,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="relative min-h-screen w-full transition-colors duration-300 overflow-hidden font-sans"
      style={{
        backgroundColor: css.bg || "var(--bg, #f8fafc)",
        color: css.text || "var(--text, #0f172a)",
        backgroundSize: "200% 200%",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(circle at center, rgba(${css.bgRgb}, 0.03), transparent 30%)`,
          pointerEvents: "none",
        }}
      />

      <AnimatePresence>
        {activeBgImage && (
          <motion.div
            key="background-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            {/* ✨ NEW: Ken Burns Effect on the background image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeBgImage})` }}
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 15, ease: "easeInOut" },
              }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full min-h-screen flex items-center justify-center p-4 z-10">
        {isMobile ? (
          <MobileLayout onSectionClick={openSection} css={css} />
        ) : (
          <DesktopLayout onSectionClick={openSection} css={css} />
        )}
      </div>

      <AnimatePresence>
        {activeSection && (
          <ModalView section={activeSection} onClose={closeSection} css={css} />
        )}
      </AnimatePresence>
    </motion.main>
  );
}

// --- ✨ NEW Satellite Component for Desktop ---
// Encapsulating the satellite logic makes the DesktopLayout cleaner.
const Satellite = ({
  section,
  config,
  index,
  onSectionClick,
  css,
  satelliteSize,
}) => {
  const {
    initialX,
    initialY,
    driftMagnitude,
    driftDuration,
    driftAngleOffset,
  } = config;

  return (
    <motion.div
      layoutId={section.id}
      className="absolute z-10 flex flex-col items-center cursor-pointer group"
      style={{
        width: satelliteSize,
        height: satelliteSize + 40, // More space for text
        top: `calc(50% - ${(satelliteSize + 40) / 2}px)`,
        left: `calc(50% - ${satelliteSize / 2}px)`,
      }}
      initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.8 }}
      animate={{
        x: [
          initialX,
          initialX + driftMagnitude * Math.cos(driftAngleOffset),
          initialX,
        ],
        y: [
          initialY,
          initialY + driftMagnitude * Math.sin(driftAngleOffset),
          initialY,
        ],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        x: {
          duration: driftDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: index * 0.2,
        },
        y: {
          duration: driftDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: index * 0.2,
        },
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: index * 0.1,
        },
      }}
      onClick={() => onSectionClick(section.id)}
      whileHover={{ scale: 1.1, zIndex: 50 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl"
        style={{
          background: css.surface,
          border: `1px solid ${css.border}`,
          boxShadow: `0 0 0px 0px ${css.accent}66`,
        }}
        whileHover={{
          boxShadow: `0 0 25px 0px ${css.accent}66`,
        }}
      >
        <section.icon className="w-10 h-10" style={{ color: css.accent }} />
      </motion.div>
      <motion.h3
        className="mt-3 font-semibold text-center w-32 transition-colors duration-300"
        style={{ color: css.muted }}
        whileHover={{ color: css.text }}
      >
        {section.title}
      </motion.h3>
    </motion.div>
  );
};

// --- ✨ UPDATED DesktopLayout Component ---
const DesktopLayout = ({ onSectionClick, css }) => {
  const profileSize = 256;
  const satelliteSize = 96;
  const orbitRadius = profileSize / 2 + satelliteSize / 2 + 70; // Increased radius for text

  const satelliteConfigs = useMemo(() => {
    return content.sections.map((_, index) => {
      const angle = (index / content.sections.length) * (2 * Math.PI);
      return {
        initialX: Math.cos(angle) * orbitRadius,
        initialY: Math.sin(angle) * orbitRadius,
        driftMagnitude: 20 + Math.random() * 20,
        driftDuration: 10 + Math.random() * 10,
        driftAngleOffset: Math.random() * 2 * Math.PI,
        angle,
      };
    });
  }, [orbitRadius]);

  return (
    <div
      style={{ width: 800, height: 800 }}
      className="relative flex items-center justify-center"
    >
      {/* ✨ NEW: Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: css.accent, stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: css.accent, stopOpacity: 0.8 }}
            />
          </linearGradient>
        </defs>
        <g transform="translate(400, 400)">
          {satelliteConfigs.map((config, index) => (
            <motion.line
              key={`line-${index}`}
              x1={0}
              y1={0}
              x2={config.initialX}
              y2={config.initialY}
              stroke={css.border}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      </svg>

      <motion.div
        layoutId="profile-container"
        className="z-20 w-64 h-64 rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center p-6"
        style={{ background: css.surface, border: `1px solid ${css.border}` }}
        whileHover={{
          scale: 1.03,
          boxShadow: `0 0 50px -15px ${css.accent}55`,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
      >
        <motion.img
          src={content.profile.imageUrl}
          alt="Yagnesh Pandya"
          className="w-24 h-24 rounded-full mb-4"
          style={{
            border: `4px solid ${css.surface}`,
            boxShadow: `0 8px 24px rgba(0,0,0,0.08)`,
          }}
          layoutId="profile-image"
        />
        <motion.h1
          className="text-2xl font-bold"
          layoutId="profile-name"
          style={{ color: css.accent }}
        >
          {content.profile.name}
        </motion.h1>
        <motion.p
          className="text-sm mt-1"
          layoutId="profile-tagline"
          style={{ color: css.muted }}
        >
          {content.profile.tagline}
        </motion.p>
      </motion.div>

      {content.sections.map((section, index) => (
        <Satellite
          key={section.id}
          section={section}
          config={satelliteConfigs[index]}
          index={index}
          onSectionClick={onSectionClick}
          css={css}
          satelliteSize={satelliteSize}
        />
      ))}
    </div>
  );
};

// --- Mobile Layout (Unchanged) ---
const MobileLayout = ({ onSectionClick, css }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-md flex flex-col items-center gap-6 pt-20 pb-8 z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        layoutId="profile-container"
        variants={itemVariants}
        className="w-full rounded-2xl backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center p-6"
        style={{ background: css.surface, border: `1px solid ${css.border}` }}
      >
        <motion.img
          src={content.profile.imageUrl}
          alt="Yagnesh Pandya"
          className="w-24 h-24 rounded-full mb-4"
          style={{
            border: `4px solid ${css.surface}`,
            boxShadow: `0 6px 18px rgba(0,0,0,0.06)`,
          }}
          layoutId="profile-image"
        />
        <motion.h1
          className="text-2xl font-bold"
          layoutId="profile-name"
          style={{ color: css.accent }}
        >
          {content.profile.name}
        </motion.h1>
        <motion.p
          className="text-sm mt-1"
          layoutId="profile-tagline"
          style={{ color: css.muted }}
        >
          {content.profile.tagline}
        </motion.p>
        <p className="text-sm mt-4" style={{ color: css.text }}>
          {content.profile.intro}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="w-full grid grid-cols-2 gap-4"
      >
        {content.sections.map((section) => (
          <motion.div
            key={section.id}
            layoutId={section.id}
            onClick={() => onSectionClick(section.id)}
            className="p-4 pt-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: `0 10px 20px -5px ${css.accent}33`,
            }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            style={{
              background: css.surface,
              border: `1px solid ${css.border}`,
              color: css.text,
            }}
          >
            <section.icon
              className="w-8 h-8 mb-2"
              style={{ color: css.accent }}
            />
            <h3 className="font-semibold text-sm" style={{ color: css.text }}>
              {section.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 text-center">
        <h2
          className="text-2xl font-bold tracking-tighter"
          style={{ color: css.text }}
        >
          Let's Connect
        </h2>
        <p style={{ color: css.muted }} className="mt-2">
          Beyond work, I'm always exploring fresh ideas and connecting with
          fellow creators.
        </p>

        {/* UPDATED: We now use the React Router Link component */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/connect"
            className="mt-4 inline-block px-6 py-2 font-semibold rounded-full shadow-lg"
            style={{
              background: css.accent,
              color: "#fff",
              boxShadow: `0 5px 15px ${css.accent}44`,
            }}
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- ✨ UPDATED ModalView Component ---
const ModalView = ({ section, onClose, css }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08 + 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };
  const CtaButton = () => {
    const isInternalLink = section.cta.href.startsWith("/");

    // Common props for both link types
    const commonProps = {
      className:
        "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full shadow-lg",
      style: { background: css.accent, color: "#fff" },
    };

    if (isInternalLink) {
      // Use React Router's <Link> for internal navigation
      return (
        <Link to={section.cta.href} {...commonProps}>
          {section.cta.label}
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      );
    } else {
      // Use a standard <a> tag for external links, opening in a new tab
      return (
        <a
          href={section.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {section.cta.label}
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      <motion.div
        className="absolute inset-0"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        layoutId={section.id}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
        className="relative z-50 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          background: `rgba(${css.bgRgb}, 0.8)`,
          backdropFilter: "blur(16px)",
          border: `1px solid ${css.border}`,
          color: css.text,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="flex-shrink-0 p-6 flex items-center gap-5 border-b"
          style={{ borderColor: css.border }}
        >
          <motion.div
            className="p-3 rounded-full"
            style={{
              background: `${css.accent}22`,
              filter: `drop-shadow(0 0 15px ${css.accent}99)`,
            }}
          >
            <section.icon
              className="w-8 h-8 flex-shrink-0"
              style={{ color: css.accent }}
            />
          </motion.div>
          <div>
            <h2
              className="text-3xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${css.text}, ${css.muted})`,
              }}
            >
              {section.title}
            </h2>
            <p className="mt-1" style={{ color: css.muted }}>
              {section.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="flex-grow p-6 overflow-y-auto">
          <motion.p
            className="mb-6"
            custom={0}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
          >
            {section.description}
          </motion.p>

          {section.stats && (
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              {section.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                >
                  <p
                    className="text-3xl font-bold"
                    style={{ color: css.accent }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: css.muted }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {section.keyPoints && (
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {section.keyPoints.map((point, i) => (
                <motion.div
                  key={point.name}
                  className="p-4 rounded-xl flex items-start gap-4"
                  style={{
                    background: `rgba(${css.bgRgb}, 0.5)`,
                    border: `1px solid ${css.border}`,
                    borderLeft: `4px solid ${css.accent}`,
                  }}
                  custom={i + 1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                >
                  <CheckCircleIcon
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: css.accent }}
                  />
                  <div>
                    <h4 style={{ color: css.text }} className="font-bold">
                      {point.name}
                    </h4>
                    <p style={{ color: css.muted }} className="text-sm mt-1">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {section.cta && (
            <motion.div
              className="mt-8 text-center"
              custom={
                (section.stats?.length || 0) +
                (section.keyPoints?.length || 0) +
                2
              }
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: `0 8px 20px ${css.accent}44`,
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <CtaButton />
              </motion.div>
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          aria-label="Close"
          style={{
            background: `rgba(${css.bgRgb}, 0.8)`,
            border: `1px solid ${css.border}`,
          }}
        >
          <XIcon className="w-6 h-6" style={{ color: css.muted }} />
        </motion.button>
      </motion.div>
    </div>
  );
};
