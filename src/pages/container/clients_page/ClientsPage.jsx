// import { useState, useMemo } from "react";
// import { Link } from "react-router-dom";

// const clientsData = [
//   {
//     id: 1,
//     name: "360 Telehelp",
//     image: "/images/clients-logos/telehelp.png",
//   },
//   {
//     id: 2,
//     name: "Reliance Digital",
//     image: "/images/clients-logos/Reliance-digital.webp",
//   },
//   {
//     id: 3,
//     name: "Brijraj Gadhavi",
//     image: "/images/clients-logos/BrijrajGadhavi.webp",
//   },
//   {
//     id: 4,
//     name: "Gandhinagar University",
//     image: "/images/clients-logos/Gandhinagar-University.webp",
//   },
//   {
//     id: 5,
//     name: "Martinozz Pizza",
//     image: "/images/clients-logos/Martinoz.jpg",
//   },
//   {
//     id: 6,
//     name: "Credorbit",
//     image: "/images/clients-logos/Credorbit.png",
//   },
//   {
//     id: 7,
//     name: "BJP - Gujarat",
//     image: "/images/clients-logos/bjp.png",
//   },
//   {
//     id: 8,
//     name: "Burger Farm",
//     image: "/images/clients-logos/BurgerFarm.webp",
//   },
//   {
//     id: 9,
//     name: "Gujarat Police",
//     image: "/images/clients-logos/GujaratPolice.webp",
//   },
//   {
//     id: 10,
//     name: "ITC Narmada",
//     image: "/images/clients-logos/ITC.webp",
//   },
//   {
//     id: 11,
//     name: "Jignesh Kaviraj",
//     image: "/images/clients-logos/Jignesh.webp",
//   },
//   {
//     id: 12,
//     name: "Lapinoz Pizza",
//     image: "/images/clients-logos/Lapinoz.jpg",
//   },
//   {
//     id: 13,
//     name: "MSACA",
//     image: "/images/clients-logos/MSACA.png",
//   },
//   {
//     id: 14,
//     name: "Road Sathi",
//     image: "/images/clients-logos/RoadSathi.png",
//   },
//   {
//     id: 15,
//     name: "Shanti Juniors Officials",
//     image: "/images/clients-logos/ShantiJunior.jpg",
//   },
//   {
//     id: 16,
//     name: "Saregama",
//     image: "/images/clients-logos/saregama.jpg",
//   },
//   {
//     id: 17,
//     name: "Trigno Pizaa",
//     image: "/images/clients-logos/TrignoPizza.png",
//   },
//   {
//     id: 18,
//     name: "Podar Jumbo Kids - India",
//     image: "/images/clients-logos/PodarJumboKids.jpg",
//   },
//   {
//     id: 19,
//     name: "Aacore Holidays & Resorts",
//     image: "/images/clients-logos/AacoreHolidays.png",
//   },
//   {
//     id: 20,
//     name: "Interior Solutions",
//     image: "/images/clients-logos/InteriorSolution.png",
//   },
// ];

// const ClientCard = ({ client, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   // Create varying heights for masonry effect
//   const cardHeight = 250 + (index % 4) * 80;

//   return (
//     <div
//       className="relative group mb-6 break-inside-avoid"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <a
//         href={client.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`View ${client.name} portfolio - ${client.description}`}
//         className="block bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/40 focus:scale-[1.02]"
//       >
//         {/* Image Container */}
//         <div className="relative overflow-hidden">
//           {!imageLoaded && (
//             <div
//               className="w-full bg-gray-200 animate-pulse"
//               style={{ height: `${cardHeight}px` }}
//             />
//           )}
//           <img
//             src={client.image}
//             alt={`Portfolio showcase for ${client.name}`}
//             loading="lazy"
//             className={`w-full h-auto object-contain transition-all duration-500 ${
//               imageLoaded ? "opacity-100" : "opacity-0"
//             } ${isHovered ? "scale-110" : "scale-100"}`}
//             style={{
//               height: `${cardHeight}px`,
//               // width: "100%",
//               objectPosition: "center",
//             }}
//             onLoad={() => setImageLoaded(true)}
//           />

//           {/* Bluish gradient glow overlay */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-cyan-400/30 transition-opacity duration-500 ${
//               isHovered ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backdropFilter: "blur(1px)" }}
//           />

//           {/* Content overlay */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-400 ${
//               isHovered ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute bottom-0 left-0 right-0 p-6">
//               <h3
//                 className={`text-white text-xl font-bold mb-2 transition-all duration-300 ${
//                   isHovered
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-4 opacity-0"
//                 }`}
//               >
//                 {client.name}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </a>

//       {/* Glow effect behind card */}
//       <div
//         className={`absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-xl transition-opacity duration-500 -z-10 blur-lg ${
//           isHovered ? "opacity-20" : "opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

// const ClientsPage = () => {
//   const clients = useMemo(() => clientsData, []);

//   return (
//     <main
//       className="min-h-screen py-12"
//       style={{ background: "var(--bg)", color: "var(--text)" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <header className="text-center mb-16">
//           <h1
//             className="text-4xl md:text-5xl font-bold mb-6"
//             style={{ color: "var(--text)" }}
//           >
//             Our Amazing Clients
//           </h1>
//           <p
//             className="text-xl max-w-3xl mx-auto"
//             style={{ color: "var(--muted)" }}
//           >
//             We're proud to work with incredible companies that push the
//             boundaries of innovation and excellence in their respective
//             industries.
//           </p>
//         </header>

//         {/* Masonry Grid */}
//         <section
//           className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6"
//           aria-label="Client portfolio grid"
//         >
//           {clients.map((client, index) => (
//             <ClientCard key={client.id} client={client} index={index} />
//           ))}
//         </section>

//         {/* Footer CTA */}
//         <footer
//           className="text-center mt-20 pt-12"
//           style={{ borderTop: "1px solid var(--border)" }}
//         >
//           <h2
//             className="text-2xl font-semibold mb-4"
//             style={{ color: "var(--text)" }}
//           >
//             Ready to Join Our Client Family?
//           </h2>
//           <p
//             className="mb-8 max-w-2xl mx-auto"
//             style={{ color: "var(--muted)" }}
//           >
//             Let's discuss how we can help bring your vision to life with our
//             proven expertise and innovative solutions.
//           </p>
//           <Link to="/connect">
//             <button
//               className="font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4"
//               style={{
//                 background: "var(--accent)",
//                 color: "#fff",
//                 border: "1px solid var(--border)",
//               }}
//               onClick={() => (window.location.href = "#contact")}
//             >
//               Get In Touch
//             </button>
//           </Link>
//         </footer>
//       </div>
//     </main>
//   );
// };

// export default ClientsPage;
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const clientsData = [
  {
    id: 1,
    name: "360 Telehelp",
    image: "/images/clients-logos/telehelp.png",
  },
  {
    id: 2,
    name: "Reliance Digital",
    image: "/images/clients-logos/Reliance-digital.webp",
  },
  {
    id: 3,
    name: "Brijraj Gadhavi",
    image: "/images/clients-logos/BrijrajGadhavi.webp",
  },
  {
    id: 4,
    name: "Gandhinagar University",
    image: "/images/clients-logos/Gandhinagar-University.webp",
  },
  {
    id: 5,
    name: "Martinozz Pizza",
    image: "/images/clients-logos/Martinoz.jpg",
  },
  {
    id: 6,
    name: "Credorbit",
    image: "/images/clients-logos/Credorbit.png",
  },
  {
    id: 7,
    name: "BJP - Gujarat",
    image: "/images/clients-logos/bjp.png",
  },
  {
    id: 8,
    name: "Burger Farm",
    image: "/images/clients-logos/BurgerFarm.webp",
  },
  {
    id: 9,
    name: "Gujarat Police",
    image: "/images/clients-logos/GujaratPolice.webp",
  },
  {
    id: 10,
    name: "ITC Narmada",
    image: "/images/clients-logos/ITC.webp",
  },
  {
    id: 11,
    name: "Jignesh Kaviraj",
    image: "/images/clients-logos/Jignesh.webp",
  },
  {
    id: 12,
    name: "Lapinoz Pizza",
    image: "/images/clients-logos/Lapinoz.jpg",
  },
  {
    id: 13,
    name: "MSACA",
    image: "/images/clients-logos/MSACA.png",
  },
  {
    id: 14,
    name: "Road Sathi",
    image: "/images/clients-logos/RoadSathi.png",
  },
  {
    id: 15,
    name: "Shanti Juniors Officials",
    image: "/images/clients-logos/ShantiJunior.jpg",
  },
  {
    id: 16,
    name: "Saregama",
    image: "/images/clients-logos/saregama.jpg",
  },
  {
    id: 17,
    name: "Trigno Pizaa",
    image: "/images/clients-logos/TrignoPizza.png",
  },
  {
    id: 18,
    name: "Podar Jumbo Kids - India",
    image: "/images/clients-logos/PodarJumboKids.jpg",
  },
  {
    id: 19,
    name: "Aacore Holidays & Resorts",
    image: "/images/clients-logos/AacoreHolidays.png",
  },
  {
    id: 20,
    name: "Interior Solutions",
    image: "/images/clients-logos/InteriorSolution.png",
  },
];

const ClientCard = ({ client }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative group mb-6 break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={client.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${client.name} portfolio - ${client.description}`}
        className="block bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/40 focus:scale-[1.02]"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}

          {imageError && (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  {client.name}
                </p>
              </div>
            </div>
          )}

          <img
            src={client.image}
            alt={`Portfolio showcase for ${client.name}`}
            loading="lazy"
            className={`w-full h-auto object-cover transition-all duration-500 ${
              imageLoaded && !imageError ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-110" : "scale-100"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              display: imageError ? "none" : "block",
            }}
          />

          {/* Bluish gradient glow overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-cyan-400/30 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ backdropFilter: "blur(1px)" }}
          />

          {/* Content overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-400 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className={`text-white text-xl font-bold mb-2 transition-all duration-300 ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {client.name}
              </h3>
            </div>
          </div>
        </div>
      </a>

      {/* Glow effect behind card */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-xl transition-opacity duration-500 -z-10 blur-lg ${
          isHovered ? "opacity-20" : "opacity-0"
        }`}
      />
    </div>
  );
};

const ClientsPage = () => {
  const clients = useMemo(() => clientsData, []);

  return (
    <main
      className="min-h-screen py-12"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text)" }}
          >
            Our Amazing Clients
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We're proud to work with incredible companies that push the
            boundaries of innovation and excellence in their respective
            industries.
          </p>
        </header>

        {/* Masonry Grid */}
        <section
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6"
          aria-label="Client portfolio grid"
        >
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </section>

        {/* Footer CTA */}
        <footer
          className="text-center mt-20 pt-12"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--text)" }}
          >
            Ready to Join Our Client Family?
          </h2>
          <p
            className="mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Let's discuss how we can help bring your vision to life with our
            proven expertise and innovative solutions.
          </p>

          <Link
            to="/connect"
            className="font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "1px solid var(--border)",
            }}
            // onClick={() => (window.location.href = "#contact")}
          >
            Get In Touch
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default ClientsPage;
