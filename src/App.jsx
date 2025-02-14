import React, { useState, useRef, useEffect } from "react";
import Confetti from 'react-confetti';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [hugMessage, setHugMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [timeSince, setTimeSince] = useState("");
  const audioRef = useRef(null);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  // Custom list of English compliments focused on Khushboo
  const compliments = [
    "Kuchi, tmpe cat eye frame bohot suit krta h! 💖",
    "Kuchi, tmhara smile ispe kon naa fida ho! 🌟",
    "Kuchi, you're my Vitamin K",
    "Kuchi, you're incredibly jhakass! 🌸",
    "Kuchi, tmhara baat bhi utna special hai jitni ki tum khud!🌟",
    "Kuchi, buddhu! 🍀",
    "Hor das kinniya tareefan chaidiya tenu 👀",
    "You're the one, you're the only one!",
    "Kuchi, I'll always love you baby🥺",
    "Meri Good Morning tu hai Good Night bhi tu👉👈",
    "Kuchi, tum kitni pyari ho andaza h?",
    "baby i love you the most",
    "Kuchi, you're beautiful inside and out! 🌹",
    "Kuchi, tmpe bun bohot suit kta hai! ✨",
    "Kuchi, you're my favorite! 💕",
    "Kuchi, you have the best smile (sacchi!) 😊",
    "Kuchi, you're like first rain! pehli barish",
    "Kuchi, tenu suit suit krda! 🌟",
    "Kuchi, tumari baatein itni sweet h ki chocolate apna job chhod de! 💘",
    "Kuchi, you're simply the best! 🏆",
    "Kuchi, you have a different positivity within you! 🌈",
    "Kuchi, you carry a different aura!",
    "kuchi, tum dil ki bohot saaf ho :) 💛",
    "Kuchi, chalti firti cocaine💎",
    "Kuchi, you're one of a kind! 🌟",
    "Kuchi, your beauty is unmatched! 🌸",
    "Kuchi, you're the best as I always say! 🌹",
    "Kuchi, tum ek poem ho jo bina likhe bhi bohot kuch keh jati ho! ✨",
    "Kuchi, your eyes are like gehra samandar! (dub jau?) 👀",
  ];

  useEffect(() => {
    const startDate = new Date("2002-01-10");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);

      setTimeSince(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleForgiveClick = () => {
    setShowCelebration(true);
    setThankYouMessage(true);

    // Play the sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset sound to start
      audioRef.current.play();
    }

    // Reset everything after 5 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setThankYouMessage(false);
    }, 5000);
  };

  const handleComplimentClick = () => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Pick a random compliment from the list
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);

    // Set a new timeout to clear the compliment after 6 seconds
    timeoutRef.current = setTimeout(() => setCompliment(""), 4000);
  };

  const handleHugClick = () => {
    setHugMessage(true);
    setShowHearts(true);

    // Clear the hug message and hearts after 4 seconds
    setTimeout(() => {
      setHugMessage(false);
      setShowHearts(false);
    }, 4000);
  };

  const handleLetsTalkClick = () => {
    // Redirect to WhatsApp with a pre-filled message
    const phoneNumber = "8637521809"; // Your phone number
    const message = "It's your kuchi ♥️"; // Pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-center relative overflow-hidden p-4 sm:p-8">
      {/* Full-screen Confetti */}
      {showCelebration && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={400} // Increased confetti pieces
          recycle={false}
        />
      )}

      {/* Heart Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none flex flex-wrap">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-5xl sm:text-7xl animate-heart opacity-80"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                filter: "drop-shadow(2px 2px 4px rgba(255, 182, 193, 0.8))",
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}

      {/* Audio element */}
      <audio ref={audioRef} src="/celebration.mp3" />

      {/* Thank You Message */}
      {thankYouMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-xl font-bold">Smileee💖</p>
        </div>
      )}

      {/* Compliment Message */}
      {compliment && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-xl font-bold">{compliment}</p>
        </div>
      )}

      {/* Hug Message */}
      {hugMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-xl font-bold">Virtual hug sent to Preet 💖</p>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl max-w-xs sm:max-w-md relative z-10 border-4 border-pink-500 transform transition-all hover:scale-105 hover:shadow-pink-600 text-center flex flex-col items-center" style={{ fontFamily: 'Times New Roman, serif' }}>
        <h2 className="text-3xl sm:text-5xl text-pink-600 font-bold leading-tight">In memory of beloved, Kuchi💖</h2>
        <p className="text-gray-700 mt-4 text-lg sm:text-xl text-center">
          I'll love you my baby girl whereever you are🥺<br/>
          15-May-2021 - 25-Aug-2022 
        </p>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center w-full">
          <button onClick={handleForgiveClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Celebrate 🎉
          </button>
          <button onClick={handleComplimentClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Compliments from Preet 💌
          </button>
          <button onClick={handleHugClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Hug 🤗
          </button>
          <button onClick={handleLetsTalkClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Let's Talk 💬
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        <p className="text-sm">Made with ♥️ by Preet</p>
        <p className="text-sm">Yours since {timeSince}</p>
      </footer>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-20px); opacity: 0.9; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-float {
            animation: float infinite alternate ease-in-out;
          }

          @keyframes heart {
            0% { transform: translateY(0) scale(0); opacity: 1; }
            50% { transform: translateY(-100px) scale(1.5); opacity: 0.8; }
            100% { transform: translateY(-200px) scale(2); opacity: 0; }
          }
          .animate-heart {
            animation: heart 2s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;