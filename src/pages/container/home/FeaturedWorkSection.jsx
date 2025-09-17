// import AnimatedSection from "../../../components/AnimatedSection";

// const FeaturedWorkSection = () => {
//   const items = [
//     "Project Alpha",
//     "NextGen Platform",
//     "Quantum Leap",
//     "InnovateX",
//     "Synergy Hub",
//     "Visionary OS",
//   ];
//   return (
//     <section id="work" className="py-20 md:py-32">
//       <style>{`
//         .marquee-wrapper {
//           overflow: hidden;
//           white-space: nowrap;
//           box-sizing: border-box;
//           width: 100%;
//           background: var(--surface);
//           color: var(--muted);
//           font-size: 20px;
//         }
//         .marquee {
//           display: inline-flex;
//           will-change: transform;
//           animation: marquee-scroll 20s linear infinite;
//         }
//         .marquee span {
//           padding-right: 2rem;
//         }
//         @keyframes marquee-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//       `}</style>
//       <AnimatedSection className="container mx-auto px-4 text-center mb-16">
//         <h2
//           className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
//           style={{ color: "var(--text)" }}
//         >
//           Impactful Ventures
//         </h2>
//         <p
//           className="text-lg max-w-2xl mx-auto"
//           style={{ color: "var(--muted)" }}
//         >
//           A glimpse into projects and initiatives led.
//         </p>
//       </AnimatedSection>
//       <div
//         className="relative w-full overflow-hidden select-none"
//         style={{
//           background: "var(--surface)",
//           borderTop: `1px solid var(--border)`,
//           borderBottom: `1px solid var(--border)`,
//         }}
//       >
//         <div
//           className="marquee flex whitespace-nowrap"
//           style={{ padding: "1.5rem 0" }}
//         >
//           {[...items, ...items].map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-4 text-3xl md:text-5xl font-bold tracking-tighter hover:text-white transition-colors duration-300 cursor-pointer"
//               style={{ color: "var(--muted)" }}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default FeaturedWorkSection;

import AnimatedSection from "../../../components/AnimatedSection";

const FeaturedWorkSection = () => {
  // --- Step 2: Update the items array ---
  // Use an array of objects to store both the image source and alt text.
  const items = [
    {
      src: "/images/clients-logos/Reliance-digital.webp",
      alt: "Reliance Digital",
    },
    {
      src: "/images/clients-logos/Gandhinagar-University.webp",
      alt: "Gandhinagar University",
    },
    { src: "/images/clients-logos/Martinoz.jpg", alt: "Martinozz Pizza" },
    { src: "/images/clients-logos/Credorbit.png", alt: "Credorbit" },
    { src: "/images/clients-logos/bjp.png", alt: "BJP Gujarat" },
    { src: "/images/clients-logos/BurgerFarm.webp", alt: "Burger Farm" },
    { src: "/images/clients-logos/GujaratPolice.webp", alt: "Gujarat Police" },
    { src: "/images/clients-logos/ITC.webp", alt: "ITC Narmada" },
    { src: "/images/clients-logos/telehelp.png", alt: "Telehelp" },
    { src: "/images/clients-logos/Lapinoz.jpg", alt: "Lapinoz Pizza" },
    { src: "/images/clients-logos/MSACA.png", alt: "MSACA" },
    { src: "/images/clients-logos/RoadSathi.png", alt: "Road Sathi" },
    { src: "/images/clients-logos/ShantiJunior.jpg", alt: "Shanti Juniors" },
    { src: "/images/clients-logos/saregama.jpg", alt: "saregama gujarati" },
    { src: "/images/clients-logos/TrignoPizza.png", alt: "Trigno Pizza" },
    {
      src: "/images/clients-logos/PodarJumboKids.jpg",
      alt: "Podar Jumbo Kids",
    },
    { src: "/images/clients-logos/AacoreHolidays.png", alt: "Aacore Holidays" },
    {
      src: "/images/clients-logos/InteriorSolution.png",
      alt: "Interior Solution",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32">
      <style>{`
        .marquee {
          display: inline-flex;
          will-change: transform;
          animation: marquee-scroll 25s linear infinite; /* Adjusted duration for images */
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <AnimatedSection className="container mx-auto px-4 text-center mb-16">
        <h2
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          style={{ color: "var(--text)" }}
        >
          Impactful Ventures
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          A glimpse into projects and initiatives led.
        </p>
      </AnimatedSection>

      <div
        className="relative w-full overflow-hidden select-none"
        style={{
          background: "var(--surface)",
          borderTop: `1px solid var(--border)`,
          borderBottom: `1px solid var(--border)`,
        }}
      >
        <div
          className="marquee flex items-center whitespace-nowrap" // Added items-center
          style={{ padding: "1.5rem 0" }}
        >
          {/* --- Step 3: Render images instead of text --- */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              {" "}
              {/* Increased margin for spacing */}
              <img
                src={item.src}
                alt={item.alt}
                // Adjust height and other properties to fit your design
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
