import React, { useState, useRef } from "react";
import Confetti from 'react-confetti';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [hugMessage, setHugMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const audioRef = useRef(null);

  // Custom list of English compliments focused on Khushboo
  const compliments = [
    "Khushboo, tmpe cat eye frame bohot suit krta h! 💖",
    "Khushboo, tmhara smile ispe kon naa fida ho! 🌟",
    "Khushboo, i need Vitamin K",
    "Khushboo, you're incredibly jhakass! 🌸",
    "Khushboo, tmhara baat bhi utna specail hai jitni ki tum khud!🌟",
    "Khushboo, buddhu! 🍀",
    "Hor das kinniya tareefan chaidiya tenu 👀",
    "Khushboo, tum kitni pyari ho andaza h?",
    "Khushboo, you're beautiful inside and out! 🌹",
    "Khushboo, tmpe bun bohot suit kta hai! ✨",
    "Khushboo, you're my favorite pta h! 💕",
    "Khushboo, you have the best smile (sacchi!) 😊",
    "Khushboo, you're like first rain! pehli barish",
    "Khushboo, tenu suit suit krda! 🌟",
    "Khushboo, tumari baatein itni sweet h ki chocolate apna job chhod de! 💘",
    "Khushboo, you're simply the best! 🏆",
    "Khushboo, you have a different positivity within you! 🌈",
    "Khushboo,you carry a different aura!",
    "Khushboo, tum dil ki bohot saaf ho pta h :) 💛",
    "Khushboo, chalti firti cocaine💎",
    "Khushboo, you're one of a kind! 🌟",
    "Khushboo, your beauty is unmatched! 🌸",
    "Khushboo, you're the best as i always say! 🌹",
    "Khushboo, tum ek poem ho jo bina likhe bhi bohot kuch keh jati ho! ✨",
    "Khushboo, your eyes are like gehra samandar! (dub jau?) 👀",
  ];

  const handleForgiveClick = () => {
    setShowCelebration(true);
    setThankYouMessage(true);

    // Play the sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset sound to start
      audioRef.current.play();
    }

    // Reset everything after 4 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setThankYouMessage(false);
    }, 4000);
  };

  const handleComplimentClick = () => {
    // Pick a random compliment from the list
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);

    // Clear the compliment after 3 seconds
    setTimeout(() => setCompliment(""), 4000);
  };

  const handleHugClick = () => {
    setHugMessage(true);
    setShowHearts(true);

    // Clear the hug message and hearts after 3 seconds
    setTimeout(() => {
      setHugMessage(false);
      setShowHearts(false);
    }, 3000);
  };

  const handleLetsTalkClick = () => {
    // Redirect to WhatsApp with a pre-filled message
    const phoneNumber = "8637521809"; // Your phone number
    const message = "Hi, Preet"; // Pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAgreementClick = () => {
    // Redirect to Google Docs
    const googleDocsUrl =
      "https://docs.google.com/document/d/1PuUVZ7N3mogmL1j2Ymf47zwUfLP1QmiEYSN3KVF2ul4/edit?usp=drivesdk";
    window.open(googleDocsUrl, "_blank");
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
          <p className="text-pink-600 text-xl font-bold">Thanks for forgiving me! 💖</p>
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
        <h1 className="text-3xl sm:text-5xl text-pink-600 font-bold leading-tight">I'm Really Sorry, <br /> Khushboo! 💖</h1>
        <p className="text-gray-700 mt-4 text-lg sm:text-xl text-center">
          I should have not behaved like that...You are really special to me, and I feel bad for my behavior..I know tum maaf kr dogi mereko😞
        </p>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center w-full">
          <button onClick={handleForgiveClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Forgive Me? 🥺
          </button>
          <button onClick={handleAgreementClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Forgiveness Agreement 📜
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