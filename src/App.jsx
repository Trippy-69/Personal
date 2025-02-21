import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [hugMessage, setHugMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showComplimentHearts, setShowComplimentHearts] = useState(false);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const audioRef = useRef(null);
  const surpriseAudioRef = useRef(null);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const compliments = [
    "Kuchi, tmpe cat eye frame bohot suit krta h! 💖",
    "Kuchi, tmhara smile ispe kon naa fida ho! 🌟",
    "Kuchi, you're my Vitamin K",
    "Kuchi, you're incredibly jhakass! 🌸",
    "Kuchi, tmhara baat bhi utna special hai jitni ki tum khud!🌟",
    "Kuchi, buddhu! �",
    "Hor das kinniya tareefan chaidiya tenu 👀",
    "You're the one, you're the only one!",
    "Kuchi, I'll always love you baby🥺",
    "Meri Good Morning tu hai Meri Good Night bhi tu👉👈",
    "Kuchi, tum kitni pyari ho andaza h?",
    "Baby i love you the most",
    "Safar khubsurat hai manzil se bhi! (tere sath)",
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

  const songLyrics = [
    { text: "Aage rahiyo naa piche rahiyo✨", start: 0.5, end: 4 },
    { text: "Mera Rahiyo yaar bss mera rahiyo💖", start: 5, end: 9 },
    { text: "Aage rahiyo naa piche rahiyo✨", start: 10, end: 14 },
    { text: "Mera Rahiyo yaar bss mera rahiyo💖", start: 15, end: 20 },
  ];

  // Floating hearts configuration for compliments
  const generateComplimentHearts = (isMobile) => {
    const count = isMobile ? 8 : 12;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: `${1.5 + Math.random() * 2}rem`,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 2,
      opacity: isMobile ? 0.2 : 0.3,
    }));
  };

  const [isMobile, setIsMobile] = useState(false);
  const [complimentHearts, setComplimentHearts] = useState([]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 640px)").matches;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const FloatingHeart = ({ left, top, size, delay, duration, opacity }) => (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
      initial={{ y: -10, rotate: -15 }}
      animate={{ y: [0, 20, 0], rotate: [-15, 15, -15], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration, repeat: Infinity, repeatType: "mirror", delay, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
        style={{ color: "#fb7185", filter: "drop-shadow(0 2px 4px rgba(251, 113, 133, 0.15))" }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );

  const handleForgiveClick = () => {
    setShowCelebration(true);
    setThankYouMessage(true);
    setCompliment("");
    setHugMessage(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setShowCelebration(false);
      setThankYouMessage(false);
    }, 5000);
  };

  const handleComplimentClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHugMessage(false);
    setThankYouMessage(false);
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);
    setShowComplimentHearts(true);
    setComplimentHearts(generateComplimentHearts(isMobile));
    timeoutRef.current = setTimeout(() => {
      setCompliment("");
      setShowComplimentHearts(false);
    }, 4000);
  };

  const handleHugClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCompliment("");
    setThankYouMessage(false);
    setHugMessage(true);
    setShowHearts(true);
    timeoutRef.current = setTimeout(() => {
      setHugMessage(false);
      setShowHearts(false);
    }, 4000);
  };

  const handleLetsTalkClick = () => {
    const phoneNumber = "8637521809";
    const message = "It's your kuchi💕";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSurpriseClick = () => {
    if (surpriseAudioRef.current) {
      surpriseAudioRef.current.currentTime = 0;
      surpriseAudioRef.current.play();
      setIsSongPlaying(true);
      setLyrics(songLyrics);
    }
  };

  const handleVideoClick = () => {
    setIsVideoVisible(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleVideoClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoVisible(false);
  };

  const handleAudioEnd = () => {
    setIsSongPlaying(false);
    setLyrics([]);
    setCurrentTime(0);
    clearInterval(intervalRef.current);
    if (surpriseAudioRef.current) {
      surpriseAudioRef.current.pause();
      surpriseAudioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isSongPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(surpriseAudioRef.current?.currentTime || 0);
      }, 100);
    }
    return () => clearInterval(intervalRef.current);
  }, [isSongPlaying]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-center relative overflow-hidden p-2 sm:p-4">
      {showCelebration && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />}

      {showHearts && (
        <div className="fixed inset-0 pointer-events-none flex flex-wrap">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl sm:text-5xl animate-heart opacity-75"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1.5}s`,
                filter: "drop-shadow(2px 2px 4px rgba(255, 182, 193, 0.8))",
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}

      {showComplimentHearts && (
        <div className="fixed inset-0 pointer-events-none">
          {complimentHearts.map((heart) => (
            <FloatingHeart key={heart.id} {...heart} />
          ))}
        </div>
      )}

      <audio ref={audioRef} src="/celebration.mp3" />
      <audio ref={surpriseAudioRef} src="/suprize.mp3" onEnded={handleAudioEnd} />
      <video ref={videoRef} src="/break.mp4" className="hidden" />

      {thankYouMessage && (
        <div className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-xl shadow-lg z-20 max-w-[90%]">
          <p className="text-pink-600 text-sm sm:text-lg font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            Smileee💖
          </p>
        </div>
      )}

      {compliment && (
        <div className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-xl shadow-lg z-20 max-w-[90%]">
          <p className="text-pink-600 text-sm sm:text-lg font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            {compliment}
          </p>
        </div>
      )}

      {hugMessage && (
        <div className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-xl shadow-lg z-20 max-w-[90%]">
          <p className="text-pink-600 text-sm sm:text-lg font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            Virtual hug sent to Preet 💖
          </p>
        </div>
      )}

      {isSongPlaying && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-30 flex items-center justify-center p-2">
          <div className="bg-white/90 p-4 sm:p-6 rounded-2xl shadow-xl w-full max-w-[400px] relative overflow-hidden">
            <button
              onClick={handleAudioEnd}
              className="absolute top-1 right-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center z-50 hover:scale-110 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full text-pink-500 opacity-70 hover:opacity-100"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <div className="absolute inset-0 z-10">
              <Confetti
                width={400}
                height={150}
                numberOfPieces={100}
                recycle={true}
                colors={["#fb7185", "#f9a8d4", "#f472b6"]}
              />
            </div>
            <div className="min-h-[80px] sm:min-h-[100px] flex items-center justify-center relative z-20">
              {songLyrics.map(
                (line, index) =>
                  currentTime >= line.start &&
                  currentTime <= line.end && (
                    <p
                      key={index}
                      className="text-pink-600 text-lg sm:text-2xl text-center font-bold animate-fade-in"
                      style={{ fontFamily: "Times New Roman, serif" }}
                    >
                      {line.text}
                    </p>
                  )
              )}
            </div>
          </div>
        </div>
      )}

      {isVideoVisible && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-30 flex items-center justify-center p-2">
          <div className="bg-white/90 p-3 sm:p-4 rounded-2xl shadow-xl w-full max-w-[500px] relative">
            <button
              onClick={handleVideoClose}
              className="absolute -top-3 -right-3 bg-pink-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors text-lg sm:text-xl"
            >
              ×
            </button>
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full rounded-lg"
              onEnded={() => setIsVideoVisible(false)}
            >
              <source src="/break.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <div
        className="bg-white p-4 sm:p-6 rounded-3xl shadow-2xl w-full max-w-[380px] sm:max-w-md relative z-10 border-4 border-pink-500 transform transition-all hover:scale-[1.02] hover:shadow-pink-600 text-center flex flex-col items-center overflow-y-auto min-h-[70vh] sm:min-h-[60vh] max-h-[95vh]"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        <h2 className="text-xl sm:text-4xl text-pink-600 font-bold leading-tight mb-3 sm:mb-4">
          In memory of my beloved, Kuchi💖
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg text-justify mb-3 sm:mb-4">
          I'll always love you a fish and a bird may indeed fall in love, but where shall they live?<br />
          I don't know where you went without any clue, but I still remember the warmth of your hug. I would have held you till my arms ached but how could I have known it was a farewell? <br />
          Your touch faded, but your warmth still lives in the spaces between my heartbeats<br />
          <span className="block mt-2 text-center font-semibold text-pink-600">15-May-2021 - 25-Aug-2022</span>
        </p>
        <div className="w-full grid grid-cols-2 gap-2 sm:gap-3">
          <button
            onClick={handleForgiveClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Celebrate 🎉
          </button>
          <button
            onClick={handleComplimentClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Compliments from Preet💌
          </button>
          <button
            onClick={handleHugClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Hug 🤗
          </button>
          <button
            onClick={handleLetsTalkClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Let's Talk 💬
          </button>
          <button
            onClick={handleSurpriseClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Surprise 🎵
          </button>
          <button
            onClick={handleVideoClick}
            className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-12 sm:h-14"
          >
            Break 🎥
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-15px); opacity: 0.9; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-float {
            animation: float infinite alternate ease-in-out;
          }

          @keyframes heart {
            0% { transform: translateY(0) scale(0); opacity: 1; }
            50% { transform: translateY(-80px) scale(1.2); opacity: 0.8; }
            100% { transform: translateY(-150px) scale(1.5); opacity: 0; }
          }
          .animate-heart {
            animation: heart 1.8s ease-out;
          }

          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
          }

          button:active {
            transform: scale(0.95);
          }

          @media (max-width: 640px) {
            .max-w-md {
              max-width: 380px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;