import { useState, useEffect, useRef } from 'react';

export default function LoveStory() {
  const letters = [
    "Dear Kuchi, you’ll always be my favorite 'what if.' I hope life brings you all the happiness you deserve.",
    "Kuchi, I still smile when I think of our time together. Thank you for being a part of my life.",
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [blushOpacity, setBlushOpacity] = useState(0);
  const [reduceOpacity, setReduceOpacity] = useState(false);
  const contentRef = useRef(null);
  const heartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      
      setScrollProgress(progress);
      setBlushOpacity(Math.min(progress * 2, 1));

      if (isMobile && contentRef.current && heartRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const heartRect = heartRef.current.getBoundingClientRect();
        
        // Calculate overlap with 20px buffer
        const overlap = heartRect.top < (contentRect.bottom + 20);
        setReduceOpacity(overlap);
      } else {
        setReduceOpacity(false);
      }
    };

    const handleResize = () => {
      handleScroll();
      // Add slight delay for mobile address bar hide
      setTimeout(handleScroll, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="p-6 relative" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Animated Heart Character */}
      <div 
        ref={heartRef}
        className={`fixed right-4 bottom-4 z-20 transition-all duration-300 ${
          reduceOpacity ? 'opacity-40' : 'opacity-100'
        }`}
        style={{
          transform: `translateY(${scrollProgress * -50}px) rotate(${scrollProgress * 20}deg)`,
        }}
      >
        <div className="relative">
          <svg
            className="w-16 h-16 animate-float"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: '#fb7185' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div 
            className="absolute inset-0 flex justify-between px-2 opacity-50"
            style={{ opacity: blushOpacity }}
          >
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
          </div>
          <div className="absolute inset-0 animate-sparkle">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-pink-200 rounded-full"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="max-w-2xl mx-auto">
        {/* Our Story Section */}
        <div className="mt-6 animate-fadeInUp">
          <h3 className="text-2xl text-pink-600 font-bold">Our Story</h3>
          <p className="text-gray-700 mt-2 text-lg">
            From the moment we met, you brought so much joy and light into my life. 
            Our journey together has been filled with laughter, love, and unforgettable memories. 
            Even though we’re not together anymore, you’ll always hold a special place in my heart. 
            This site is a tribute to the love we shared and the beautiful moments we created together. 💖
          </p>
        </div>

        {/* Letters to You Section */}
        <div className="mt-6 animate-fadeInUp delay-200">
          <h3 className="text-2xl text-pink-600 font-bold">Letters to You</h3>
          <div className="mt-4 space-y-4">
            {letters.map((letter, index) => (
              <div 
                key={index} 
                className="bg-pink-50 p-4 rounded-lg shadow-sm transition-transform hover:scale-[1.005]"
              >
                <p className="text-gray-700">{letter}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Wishes Section */}
        <div className="mt-6 animate-fadeInUp delay-400">
          <h3 className="text-2xl text-pink-600 font-bold">My Wishes for You</h3>
          <p className="text-gray-700 mt-2 text-lg">
            I hope you find everything you’re looking for in life. 
            May you always be surrounded by love, happiness, and success. 
            No matter where life takes you, know that I’ll always be cheering for you from afar. 🌟
          </p>
        </div>

        {/* Thank You Section */}
        <div className="mt-6 animate-fadeInUp delay-600">
          <h3 className="text-2xl text-pink-600 font-bold">Thank You</h3>
          <p className="text-gray-700 mt-2 text-lg">
            Thank you for being a part of my life and teaching me so much about love and kindness. 
            You’ve made me a better person, and I’ll always cherish the time we spent together. 💖
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-sparkle div {
          animation: sparkle 1.5s infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }

        @media (max-width: 640px) {
          .animate-float { animation-duration: 2s; }
          .animate-fadeInUp { animation-duration: 0.6s; }
          .animate-sparkle div { animation-duration: 1s; }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}