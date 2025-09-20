// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

// /* --- Small SVG icons (kept inline for portability) --- */
// const UserIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );
// const MailIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect width="20" height="16" x="2" y="4" rx="2" />
//     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//   </svg>
// );
// const PhoneIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );
// const LocationIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const TwitterIcon = (props) => (
//   <svg {...props} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );
// const YoutubeIcon = (props) => (
//   <svg {...props} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// );
// const SnapchatIcon = (props) => (
//   <svg {...props} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.29 18.22c-1.37 0-2.3-.92-2.8-1.76h-.07c-.15.54-.25 1.1-.25 1.74 0 .2-.02.38-.04.58h-2.22s.03-.36.03-.73c0-2.2.8-4.25 2.5-5.5 1.54-1.14 3.4-1.2 4.6-1.2.4 0 .78.03 1.15.08.1.02.18.02.26.04v2.4c-1.07-.4-2.2-.4-3.3-.4-1.6 0-3 .5-3 2.1 0 1 .6 1.5 1.3 1.5.6 0 1.2-.3 2.1-.8.9-.5 1.8-1 1.8-2v-1.7c-.1-.02-.2-.04-.3-.06-.3-.1-.6-.2-1-.2-.8 0-1.5.2-2.1.6-.6.5-1 1.1-1 1.9 0 .3.1.6.2.9h.3c.1-.2.2-.4.4-.5.5-.4 1.2-.6 2-.6 1.4 0 2.9.5 2.9 2.6 0 1.3-.9 2.2-2.2 2.2z" />
//   </svg>
// );

// /* --- Background bubbles (pointer-events-none so clicks reach UI) --- */
// const BackgroundBubbles = () => {
//   return (
//     <div className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
//       {[...Array(10)].map((_, i) => {
//         const size = Math.random() * 120 + 60;
//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             initial={{
//               x: Math.random() * 100 + "vw",
//               y: Math.random() * 100 + "vh",
//               scale: 0,
//               opacity: 0,
//             }}
//             animate={{
//               x: Math.random() * 100 + "vw",
//               y: Math.random() * 100 + "vh",
//               scale: Math.random() * 1.2 + 0.2,
//               opacity: [0, 0.18, 0],
//             }}
//             transition={{
//               duration: Math.random() * 18 + 8,
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "linear",
//               delay: Math.random() * 4,
//             }}
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               // Use theme accent if present, otherwise fall back to cyan-blue soft
//               background:
//                 "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.14), rgba(59,130,246,0.06) 60%, transparent)",
//               filter: "blur(14px)",
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default function Contact() {
//   const [step, setStep] = useState("idle");
//   const mapQuery = encodeURIComponent(
//     "Digital Yagnesh, Skywalk Elegant, Jagatput Road, Gota, Ahmedabad, Gujarat 380054"
//   );
//   const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
//   const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep("sending");
//     setTimeout(() => setStep("success"), 1800);
//   };
//   const resetForm = () => setStep("idle");

//   return (
//     <div
//       className="font-sans antialiased text-[var(--text)] bg-[var(--bg)] min-h-screen w-full flex flex-col items-center justify-start p-6 pt-28 md:pt-36 pb-28 relative overflow-visible"
//       // helpful comment: ensure CSS variables --accent, --bg, --text, --surface, --border, --muted exist in global styles
//     >
//       <BackgroundBubbles />

//       {/* --- HERO CAPSULE --- */}
//       <div className="relative z-20 w-full max-w-lg flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           {step === "idle" && (
//             <motion.div
//               key="idle"
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.92 }}
//               transition={{ duration: 0.45, ease: "backOut" }}
//               className="text-center flex flex-col items-center relative"
//             >
//               {/* rotating blurred halo */}
//               <motion.div
//                 aria-hidden
//                 className="absolute -inset-6 -z-10 rounded-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                 style={{
//                   background:
//                     "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.14), rgba(59,130,246,0.08) 40%, transparent 60%)",
//                   filter: "blur(36px)",
//                   opacity: 1,
//                 }}
//               />

//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 onClick={() => setStep("composing")}
//                 className="cursor-pointer focus:outline-none relative"
//                 aria-label="Open message composer"
//               >
//                 <div
//                   className="w-48 h-48 bg-[var(--surface)]/60 backdrop-blur-md rounded-full flex items-center justify-center border-2 shadow-lg"
//                   style={{
//                     borderColor: "rgba(6,182,212,0.45)",
//                     boxShadow: "0 12px 30px rgba(6,182,212,0.12)",
//                   }}
//                 >
//                   <svg
//                     className="w-24 h-24 text-[var(--accent)]"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                   >
//                     <path d="M22 2l-7 20-4-9-9-4Z" />
//                     <path d="M22 2L11 13" />
//                   </svg>
//                 </div>
//               </motion.button>

//               <h1 className="mt-8 text-3xl font-bold tracking-tight">
//                 Have a message?
//               </h1>
//               <p className="mt-2 text-[var(--muted)]">
//                 Tap the capsule to start — quick and confidential.
//               </p>
//             </motion.div>
//           )}

//           {step === "composing" && (
//             <motion.div key="composing" className="w-full max-w-lg">
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//                 className="bg-[var(--surface)]/80 backdrop-blur-xl rounded-2xl border overflow-hidden z-30"
//                 style={{
//                   borderColor: "rgba(148,163,184,0.12)",
//                   boxShadow: "0 20px 40px rgba(6,182,212,0.05)",
//                 }}
//               >
//                 {/* small gradient accent stripe (like the old card vibe) */}
//                 <div
//                   aria-hidden
//                   style={{
//                     height: 6,
//                     background:
//                       "linear-gradient(90deg, rgba(6,182,212,0.95), rgba(59,130,246,0.95))",
//                   }}
//                 />

//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold mb-6 text-center">
//                     Your Message
//                   </h2>
//                   <form onSubmit={handleFormSubmit} className="space-y-5">
//                     <div className="relative">
//                       <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         required
//                         className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--muted)]"
//                       />
//                     </div>

//                     <div className="relative">
//                       <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         required
//                         className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--muted)]"
//                       />
//                     </div>

//                     <textarea
//                       name="message"
//                       placeholder="What's on your mind?"
//                       required
//                       rows="5"
//                       className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--accent)] resize-none placeholder:text-[var(--muted)]"
//                     />

//                     <motion.button
//                       whileTap={{ scale: 0.97 }}
//                       type="submit"
//                       className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all"
//                       style={{
//                         // gradient like old: cyan -> blue (explicit values to ensure it renders)
//                         background:
//                           "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
//                         boxShadow: "0 12px 30px rgba(59,130,246,0.18)",
//                       }}
//                     >
//                       Send <Send className="w-5 h-5" />
//                     </motion.button>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {step === "sending" && (
//             <motion.div
//               key="sending"
//               className="w-full max-w-lg flex flex-col items-center"
//             >
//               <motion.div
//                 className="bg-[var(--surface)]/80 backdrop-blur-xl rounded-2xl p-4 border"
//                 animate={{ y: [0, -18, 0], opacity: [1, 0.9, 0.4] }}
//                 transition={{ duration: 1.8 }}
//                 style={{
//                   borderColor: "rgba(148,163,184,0.12)",
//                   boxShadow: "0 20px 40px rgba(6,182,212,0.05)",
//                 }}
//               >
//                 <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-6">
//                   <div
//                     className="w-24 h-1 rounded-full animate-pulse"
//                     style={{
//                       background:
//                         "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
//                     }}
//                   />
//                 </div>
//               </motion.div>
//               <p className="mt-4 text-[var(--muted)]">Sending…</p>
//             </motion.div>
//           )}

//           {step === "success" && (
//             <motion.div
//               key="success"
//               className="text-center p-8 bg-[var(--surface)]/60 backdrop-blur-md rounded-2xl shadow-2xl border z-30"
//               style={{
//                 borderColor: "rgba(148,163,184,0.12)",
//                 boxShadow: "0 20px 50px rgba(34,197,94,0.08)",
//               }}
//             >
//               <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
//                 <svg
//                   className="w-10 h-10 text-green-400"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//               <h2 className="mt-6 text-3xl font-bold text-green-400">
//                 Message Sent!
//               </h2>
//               <p className="mt-2 text-slate-400">
//                 Thanks — I'll get back to you shortly.
//               </p>
//               <button
//                 onClick={resetForm}
//                 className="mt-8 px-6 py-2 border rounded-lg text-[var(--muted)] hover:bg-slate-700 hover:text-white transition"
//                 style={{ borderColor: "rgba(148,163,184,0.12)" }}
//               >
//                 Send Another
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* --- CONTACT + MAP (side-by-side) --- */}
//       <motion.div
//         initial={{ opacity: 0, y: 36 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="relative z-20 w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <div
//           className="absolute -inset-4 rounded-xl blur-xl opacity-10 -z-10"
//           style={{
//             background:
//               "radial-gradient(circle at 30% 30%, var(--accent) 0%, transparent 70%)",
//           }}
//         ></div>
//         {/* Contact card */}

//         <div
//           className="rounded-2xl p-6 hover:shadow-lg transition-shadow"
//           style={{
//             background: "var(--surface)",
//             border: "1px solid rgba(148,163,184,0.06)",
//           }}
//         >
//           <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">
//             Contact Information
//           </h3>
//           <ul className="space-y-4 text-[var(--muted)]">
//             <li className="flex items-center gap-3">
//               <MailIcon className="text-[var(--accent)]" />{" "}
//               <a
//                 href="mailto:contact@yagneshpandya.com"
//                 className="hover:text-[var(--accent)] transition-colors"
//               >
//                 contact@yagneshpandya.com
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <PhoneIcon className="text-[var(--accent)]" /> +91 9876543210
//             </li>
//             <li className="flex items-center gap-3">
//               <LocationIcon className="text-[var(--accent)]" /> Ahmedabad,
//               Gujarat
//             </li>
//           </ul>
//           <p className="mt-4 text-sm text-[var(--muted)]">
//             Prefer to meet? See location on the map.
//           </p>
//           <a
//             href={mapLink}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block mt-3 text-sm text-[var(--accent)] underline"
//           >
//             Open in Google Maps
//           </a>
//           {/* </div> */}
//         </div>

//         {/* Map portal (exact address) */}
//         <div
//           className="relative rounded-2xl overflow-hidden transition-all"
//           style={{
//             border: "1px solid rgba(148,163,184,0.08)",
//             boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
//           }}
//         >
//           <iframe
//             title="Digital Yagnesh location"
//             src={mapSrc}
//             className="w-full h-72 md:h-full"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//           <div
//             className="absolute bottom-4 left-4 bg-[var(--surface)]/60 backdrop-blur-md rounded-md px-3 py-2 border text-sm"
//             style={{ borderColor: "rgba(148,163,184,0.08)" }}
//           >
//             <div className="flex items-center gap-2">
//               <LocationIcon className="w-4 h-4 text-red-400" />
//               <div>
//                 <div className="font-semibold text-[var(--text)]">
//                   Digital Yagnesh
//                 </div>
//                 <div className="text-xs text-[var(--muted)]">
//                   Skywalk Elegant, Jagatput Road, Gota, Ahmedabad 380054
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* --- SOCIAL ORBIT --- */}
//       <div className="relative mt-12 flex items-center justify-center w-full">
//         <section className="relative w-full max-w-5xl mx-auto mt-28 px-6">
//           <h3 className="text-center text-2xl md:text-3xl font-bold text-[var(--accent)] mb-12">
//             Connect With Me
//           </h3>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 name: "Instagram",
//                 icon: <Instagram className="w-6 h-6 text-pink-400" />,
//                 url: "#",
//               },
//               {
//                 name: "Facebook",
//                 icon: <Facebook className="w-6 h-6 text-blue-500" />,
//                 url: "#",
//               },
//               {
//                 name: "LinkedIn",
//                 icon: <Linkedin className="w-6 h-6 text-blue-400" />,
//                 url: "#",
//               },
//               {
//                 name: "Twitter",
//                 icon: <TwitterIcon className="w-6 h-6" />,
//                 url: "#",
//               },
//               {
//                 name: "YouTube",
//                 icon: <YoutubeIcon className="w-6 h-6 text-red-500" />,
//                 url: "#",
//               },
//               {
//                 name: "Snapchat",
//                 icon: <SnapchatIcon className="w-6 h-6 text-yellow-400" />,
//                 url: "#",
//               },
//             ].map((link) => (
//               <a
//                 key={link.name}
//                 href={link.url}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group flex items-center gap-4 rounded-xl p-5 shadow-lg transition-all duration-300"
//                 style={{
//                   background:
//                     "linear-gradient(160deg, var(--surface) 0%, color-mix(in srgb, var(--accent) 10%, transparent) 100%)",
//                   border: "1px solid rgba(148,163,184,0.08)",
//                   boxShadow: "0 6px 18px rgba(6,182,212,0.05)",
//                 }}
//               >
//                 <div
//                   className="absolute -inset-2 rounded-2xl blur-xl opacity-25 -z-10"
//                   style={{
//                     background:
//                       "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)",
//                   }}
//                 ></div>

//                 <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden">
//                   {/* subtle gradient behind icon on hover */}
//                   <div
//                     aria-hidden
//                     className="absolute inset-0 transition-opacity duration-300"
//                     style={{
//                       background:
//                         "linear-gradient(90deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))",
//                       opacity: 0,
//                     }}
//                   />
//                   <div className="relative z-10 flex items-center justify-center w-full h-full rounded-lg bg-slate-200 dark:bg-slate-700/50 group-hover:bg-slate-700 transition-colors">
//                     {link.icon}
//                   </div>
//                 </div>
//                 <span className="font-medium text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
//                   {link.name}
//                 </span>
//               </a>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ EmailJS

/* ... (all your SVG icons & BackgroundBubbles stay the same) ... */

// /* --- Small SVG icons (kept inline for portability) --- */
const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const SnapchatIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.29 18.22c-1.37 0-2.3-.92-2.8-1.76h-.07c-.15.54-.25 1.1-.25 1.74 0 .2-.02.38-.04.58h-2.22s.03-.36.03-.73c0-2.2.8-4.25 2.5-5.5 1.54-1.14 3.4-1.2 4.6-1.2.4 0 .78.03 1.15.08.1.02.18.02.26.04v2.4c-1.07-.4-2.2-.4-3.3-.4-1.6 0-3 .5-3 2.1 0 1 .6 1.5 1.3 1.5.6 0 1.2-.3 2.1-.8.9-.5 1.8-1 1.8-2v-1.7c-.1-.02-.2-.04-.3-.06-.3-.1-.6-.2-1-.2-.8 0-1.5.2-2.1.6-.6.5-1 1.1-1 1.9 0 .3.1.6.2.9h.3c.1-.2.2-.4.4-.5.5-.4 1.2-.6 2-.6 1.4 0 2.9.5 2.9 2.6 0 1.3-.9 2.2-2.2 2.2z" />
  </svg>
);

/* --- Background bubbles (pointer-events-none so clicks reach UI) --- */
const BackgroundBubbles = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
      {[...Array(10)].map((_, i) => {
        const size = Math.random() * 120 + 60;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 1.2 + 0.2,
              opacity: [0, 0.18, 0],
            }}
            transition={{
              duration: Math.random() * 18 + 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 4,
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              // Use theme accent if present, otherwise fall back to cyan-blue soft
              background:
                "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.14), rgba(59,130,246,0.06) 60%, transparent)",
              filter: "blur(14px)",
            }}
          />
        );
      })}
    </div>
  );
};

export default function Contact() {
  const [step, setStep] = useState("idle");
  const formRef = useRef(); // ✅ for EmailJS
  const mapQuery = encodeURIComponent(
    "Digital Yagnesh, Skywalk Elegant, Jagatput Road, Gota, Ahmedabad, Gujarat 380054"
  );
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  // ✅ Send email via EmailJS
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("sending");

    emailjs
      .sendForm(
        "service_a2djnl9", // 🔹 replace
        "template_hrh10o7", // 🔹 replace
        formRef.current,
        "WbdWOYnuDYFt6eNww" // 🔹 replace
      )
      .then(
        () => {
          setStep("success");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStep("idle"); // fallback if error
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const resetForm = () => setStep("idle");

  return (
    <div className="font-sans antialiased text-[var(--text)] bg-[var(--bg)] min-h-screen w-full flex flex-col items-center justify-start p-6 pt-28 md:pt-36 pb-28 relative overflow-visible">
      <BackgroundBubbles />
      {/* --- HERO CAPSULE --- */}
      <div className="relative z-20 w-full max-w-lg flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: "backOut" }}
              className="text-center flex flex-col items-center relative"
            >
              {/* rotating blurred halo */}
              <motion.div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.14), rgba(59,130,246,0.08) 40%, transparent 60%)",
                  filter: "blur(36px)",
                  opacity: 1,
                }}
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                onClick={() => setStep("composing")}
                className="cursor-pointer focus:outline-none relative"
                aria-label="Open message composer"
              >
                <div
                  className="w-48 h-48 bg-[var(--surface)]/60 backdrop-blur-md rounded-full flex items-center justify-center border-2 shadow-lg"
                  style={{
                    borderColor: "rgba(6,182,212,0.45)",
                    boxShadow: "0 12px 30px rgba(6,182,212,0.12)",
                  }}
                >
                  <svg
                    className="w-24 h-24 text-[var(--accent)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M22 2l-7 20-4-9-9-4Z" />
                    <path d="M22 2L11 13" />
                  </svg>
                </div>
              </motion.button>

              <h1 className="mt-8 text-3xl font-bold tracking-tight">
                Have a message?
              </h1>
              <p className="mt-2 text-[var(--muted)]">
                Tap the capsule to start — quick and confidential.
              </p>
            </motion.div>
          )}

          {step === "composing" && (
            <motion.div key="composing" className="w-full max-w-lg">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[var(--surface)]/80 backdrop-blur-xl rounded-2xl border overflow-hidden z-30"
                style={{
                  borderColor: "rgba(148,163,184,0.12)",
                  boxShadow: "0 20px 40px rgba(6,182,212,0.05)",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    height: 6,
                    background:
                      "linear-gradient(90deg, rgba(6,182,212,0.95), rgba(59,130,246,0.95))",
                  }}
                />

                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Your Message
                  </h2>

                  {/* ✅ Connected EmailJS form */}
                  <form
                    ref={formRef}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                      <input
                        type="text"
                        name="name" // ✅ matches EmailJS variable
                        placeholder="Your Name"
                        required
                        className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--muted)]"
                      />
                    </div>

                    <div className="relative">
                      <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                      <input
                        type="email"
                        name="email" // ✅ matches EmailJS variable
                        placeholder="Your Email"
                        required
                        className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-[var(--accent)] placeholder:text-[var(--muted)]"
                      />
                    </div>

                    <textarea
                      name="message" // ✅ matches EmailJS variable
                      placeholder="What's on your mind?"
                      required
                      rows="5"
                      className="w-full bg-slate-200 dark:bg-slate-700/50 border border-[var(--border)] rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--accent)] resize-none placeholder:text-[var(--muted)]"
                    />

                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all"
                      style={{
                        background:
                          "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
                        boxShadow: "0 12px 30px rgba(59,130,246,0.18)",
                      }}
                    >
                      Send <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ... your sending & success states remain unchanged ... */}
          {step === "sending" && (
            <motion.div
              key="sending"
              className="w-full max-w-lg flex flex-col items-center"
            >
              <motion.div
                className="bg-[var(--surface)]/80 backdrop-blur-xl rounded-2xl p-4 border"
                animate={{ y: [0, -18, 0], opacity: [1, 0.9, 0.4] }}
                transition={{ duration: 1.8 }}
                style={{
                  borderColor: "rgba(148,163,184,0.12)",
                  boxShadow: "0 20px 40px rgba(6,182,212,0.05)",
                }}
              >
                <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-6">
                  <div
                    className="w-24 h-1 rounded-full animate-pulse"
                    style={{
                      background:
                        "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
                    }}
                  />
                </div>
              </motion.div>
              <p className="mt-4 text-[var(--muted)]">Sending…</p>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              className="text-center p-8 bg-[var(--surface)]/60 backdrop-blur-md rounded-2xl shadow-2xl border z-30"
              style={{
                borderColor: "rgba(148,163,184,0.12)",
                boxShadow: "0 20px 50px rgba(34,197,94,0.08)",
              }}
            >
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                <svg
                  className="w-10 h-10 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-green-400">
                Message Sent!
              </h2>
              <p className="mt-2 text-slate-400">
                Thanks — I'll get back to you shortly.
              </p>
              <button
                onClick={resetForm}
                className="mt-8 px-6 py-2 border rounded-lg text-[var(--muted)] hover:bg-slate-700 hover:text-white transition"
                style={{ borderColor: "rgba(148,163,184,0.12)" }}
              >
                Send Another
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* --- CONTACT INFO, MAP & SOCIALS remain unchanged --- */}
      {/* Keep your map, contact info and social links code here */}
      {/* --- CONTACT + MAP (side-by-side) --- */}{" "}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div
          className="absolute -inset-4 rounded-xl blur-xl opacity-10 -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--accent) 0%, transparent 70%)",
          }}
        ></div>
        {/* Contact card */}

        <div
          className="rounded-2xl p-6 hover:shadow-lg transition-shadow"
          style={{
            background: "var(--surface)",
            border: "1px solid rgba(148,163,184,0.06)",
          }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">
            Contact Information
          </h3>
          <ul className="space-y-4 text-[var(--muted)]">
            <li className="flex items-center gap-3">
              <MailIcon className="text-[var(--accent)]" />{" "}
              <a
                href="mailto:pandyayagnesh216@gmail.com"
                className="hover:text-[var(--accent)] transition-colors"
              >
                pandyayagnesh216@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="text-[var(--accent)]" /> +91 99985 84960
            </li>
            <li className="flex items-center gap-3">
              <LocationIcon className="text-[var(--accent)]" /> Ahmedabad,
              Gujarat
            </li>
          </ul>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Prefer to meet? See location on the map.
          </p>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm text-[var(--accent)] underline"
          >
            Open in Google Maps
          </a>
          {/* </div> */}
        </div>
          
        {/* Map portal (exact address) */}
        <div
          className="relative rounded-2xl overflow-hidden transition-all"
          style={{
            border: "1px solid rgba(148,163,184,0.08)",
            boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
          }}
        >
          <iframe
            title="Digital Yagnesh location"
            src={mapSrc}
            className="w-full h-72 md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="absolute bottom-4 left-4 bg-[var(--surface)]/60 backdrop-blur-md rounded-md px-3 py-2 border text-sm"
            style={{ borderColor: "rgba(148,163,184,0.08)" }}
          >
            <div className="flex items-center gap-2">
              <LocationIcon className="w-4 h-4 text-red-400" />
              <div>
                <div className="font-semibold text-[var(--text)]">
                  Digital Yagnesh
                </div>
                <div className="text-xs text-[var(--muted)]">
                  Skywalk Elegant, Jagatput Road, Gota, Ahmedabad 380054
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* --- SOCIAL ORBIT --- */}
      <div className="relative mt-12 flex items-center justify-center w-full">
        <section className="relative w-full max-w-5xl mx-auto mt-28 px-6">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-[var(--accent)] mb-12">
            Connect With Me
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Instagram",
                icon: <Instagram className="w-6 h-6 text-pink-400" />,
                url: "https://www.instagram.com/yagneshpandyaofficial/",
              },
              {
                name: "Facebook",
                icon: <Facebook className="w-6 h-6 text-blue-500" />,
                url: "https://www.facebook.com/people/im_yagneshpandya/100083360655364/?mibextid=wwXIfr&rdid=yWck5MvjBUO4AgwZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16RkqwzzGX%2F%3Fmibextid%3DwwXIfr",
              },
              {
                name: "LinkedIn",
                icon: <Linkedin className="w-6 h-6 text-blue-400" />,
                url: "https://www.linkedin.com/in/yagnesh-pandya-aa297a2a6/",
              },
              {
                name: "Twitter",
                icon: <TwitterIcon className="w-6 h-6" />,
                url: "#",
              },
              {
                name: "YouTube",
                icon: <YoutubeIcon className="w-6 h-6 text-red-500" />,
                url: "https://www.youtube.com/@yagneshpandyaofficial1",
              },
              {
                name: "Snapchat",
                icon: <SnapchatIcon className="w-6 h-6 text-yellow-400" />,
                url: "#",
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl p-5 shadow-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(160deg, var(--surface) 0%, color-mix(in srgb, var(--accent) 10%, transparent) 100%)",
                  border: "1px solid rgba(148,163,184,0.08)",
                  boxShadow: "0 6px 18px rgba(6,182,212,0.05)",
                }}
              >
                <div
                  className="absolute -inset-2 rounded-2xl blur-xl opacity-25 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)",
                  }}
                ></div>

                <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden">
                  {/* subtle gradient behind icon on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))",
                      opacity: 0,
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-center w-full h-full rounded-lg bg-slate-200 dark:bg-slate-700/50 group-hover:bg-slate-700 transition-colors">
                    {link.icon}
                  </div>
                </div>
                <span className="font-medium text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
