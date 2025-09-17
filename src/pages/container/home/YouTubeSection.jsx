import { useEffect, useRef, useState } from "react";

// This is a placeholder for your AnimatedSection component.
// I've created a simple version here so the component works standalone.
const AnimatedSection = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

// A single TV knob for decoration
const TVKnob = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-inner">
    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center">
      <div className="w-1 h-3 md:w-1.5 md:h-4 bg-gray-500 transform rotate-45"></div>
    </div>
  </div>
);

const YouTubeSection = () => {
  const youtubeVideos = [
    {
      id: "xFsmMfyMnoo",
      title: "From Vadodara Streets to Gujarati Hip-Hop Ft. Vardan Barot",
    },

    {
      id: "FVQVq-91594",
      title: "Ft. CA Meghal Shah’s Shocking Rise: ₹5 Cr to ₹1050 Cr",
    },
    {
      id: "sURQUtze_z8",
      title: "Radha’s Love, Krishna’s Wisdom ft. Aanchal Shah",
    },
    {
      id: "JmYChmXgABc",
      title: "Gujarati Folk Legend Ft. Mayur Dave Gets Personal",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false); // For static effect
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1
          );
          setIsChanging(false);
        }, 300); // Duration of the static effect
      }, 3000); // Change video every 3 seconds
    }
    return () => resetTimeout();
  }, [currentIndex, isPaused, youtubeVideos.length]);

  const goToSlide = (slideIndex) => {
    if (slideIndex === currentIndex) return;
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(slideIndex);
      setIsChanging(false);
    }, 300);
  };

  return (
    <>
      {/* We add custom styles directly to the head for the animations and aesthetics */}
      <style>{`
        @keyframes static-flicker {
          0%, 100% { opacity: 0.1; }
          10% { opacity: 0.2; }
          20% { opacity: 0.05; }
          30% { opacity: 0.3; }
          40% { opacity: 0.1; }
          50% { opacity: 0.25; }
          60% { opacity: 0.1; }
          70% { opacity: 0.3; }
          80% { opacity: 0.08; }
          90% { opacity: 0.2; }
        }
        .static-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(#000, #000 1px, #fff 1px, #fff 2px);
          animation: static-flicker 0.15s infinite;
          z-index: 20;
          pointer-events: none;
        }
        .tv-bezel {
          background: #3a322c;
          background-image: linear-gradient(45deg, #4d433b 25%, transparent 25%), 
                            linear-gradient(-45deg, #4d433b 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, #4d433b 75%),
                            linear-gradient(-45deg, transparent 75%, #4d433b 75%);
          background-size: 2px 2px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 15px rgba(0,0,0,0.7);
        }
        .tv-screen-glow {
          box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.15);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .channel-button::after {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          border-radius: 0.5rem;
          background: conic-gradient(from 180deg at 50% 50%, #ffdc8b, #f26a38, #b83a93, #6c52bb, #2a94d6, #58b87a, #ffdc8b);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .channel-button.active::after, .channel-button:hover::after {
          opacity: 1;
        }
      `}</style>

      <section
        id="youtube"
        className="py-20 md:py-32 overflow-hidden bg-gray-900 bg-opacity-50"
        style={{
          background: "var(--surface, #111827)",
          color: "var(--text, #F9FAFB)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-amber-300 font-serif">
              Broadcasts from the Studio
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-400">
              Tune in for our latest features, insights, and visionary ideas.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            {/* --- The Vintage TV Set --- */}
            <div
              className="max-w-5xl mx-auto flex flex-col items-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* TV Body */}
              <div className="w-full tv-bezel p-4 md:p-6 rounded-t-2xl flex items-center justify-center space-x-6 md:space-x-12">
                {/* TV Screen */}
                <div className="flex-grow aspect-video relative overflow-hidden rounded-lg bg-black tv-screen-glow border-4 border-black">
                  {isChanging && <div className="static-effect"></div>}
                  {youtubeVideos.map((video, index) => (
                    <div
                      key={video.id}
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
                      style={{
                        opacity: index === currentIndex ? 1 : 0,
                        visibility:
                          index === currentIndex ? "visible" : "hidden",
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Control Panel */}
                <div className="flex flex-col items-center space-y-4 md:space-y-6 bg-gray-800 p-4 rounded-lg shadow-lg border-t-2 border-gray-700">
                  <TVKnob />
                  <div className="w-20 md:w-24 h-20 md:h-24 bg-black grid grid-cols-5 gap-1 p-1 rounded-md">
                    {/* Speaker Grill */}
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto my-auto"
                      ></div>
                    ))}
                  </div>
                  <TVKnob />
                </div>
              </div>

              {/* Channel Selector / Thumbnails */}
              {/* <div className="w-full bg-gray-800 p-4 border-t-2 border-gray-900 flex justify-center items-center space-x-2 md:space-x-4 rounded-b-lg">
                <p className="hidden sm:block text-sm font-semibold text-gray-400 mr-4">
                  CHANNELS
                </p>
                {youtubeVideos.map((video, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`relative channel-button w-20 h-12 md:w-28 md:h-16 rounded-md overflow-hidden transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                    aria-label={`Go to video ${slideIndex + 1}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        currentIndex === slideIndex
                          ? "bg-opacity-20"
                          : "bg-opacity-60 hover:bg-opacity-40"
                      }`}
                    ></div>
                    {currentIndex === slideIndex && (
                      <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                    )}
                  </button>
                ))}
              </div> */}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default YouTubeSection;
