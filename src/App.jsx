import React from 'react';

const App = () => {
  const text = "The Right One Will Treat Me Better! GoodBye.";
  const parts = text.split(" GoodBye.");
  const line1 = parts[0]; // "The Right One Will Treat Me Better!"
  const line2 = "GoodBye."; // Separate line

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative px-4 py-8">
      {/* Milky Way Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black">
        {/* Stars Layer 1 (Distant Stars) */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse-star"
            style={{
              width: `${Math.random() * 1 + 0.5}px`,
              height: `${Math.random() * 1 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Stars Layer 2 (Brighter Stars) */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse-star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Glow */}
      <div className="absolute inset-0 animate-fade-nebula opacity-20">
        <div className="w-[150%] h-[150%] bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 blur-2xl animate-gradient-shift"></div>
      </div>

      {/* Milky Way Core Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-black/30 blur-xl"></div>

      {/* Main Text (No Animation) */}
      <div className="relative z-20 text-center max-w-full px-4">
        <div className="inline-block bg-black/70 rounded-lg p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide leading-snug subpixel-antialiased">
            <span className="block sm:inline">{line1}</span>
            <span className="block sm:inline">{line2}</span>
          </h1>
        </div>
      </div>

      {/* Sparkling Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse-star {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes fade-nebula {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes gradient-shift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes sparkle {
          0% { transform: scale(0); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 0.6; }
          100% { transform: scale(0); opacity: 0; }
        }

        .animate-pulse-star {
          animation: pulse-star infinite ease-in-out;
        }

        .animate-fade-nebula {
          animation: fade-nebula 6s infinite ease-in-out;
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s linear infinite;
        }

        .animate-sparkle {
          animation: sparkle infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;