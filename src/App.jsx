import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [hugMessage, setHugMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const audioRef = useRef(null);
  const surpriseAudioRef = useRef(null);
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

  const handleForgiveClick = () => {
    setShowCelebration(true);
    setThankYouMessage(true);
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
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);
    timeoutRef.current = setTimeout(() => setCompliment(""), 4000);
  };

  const handleHugClick = () => {
    setHugMessage(true);
    setShowHearts(true);
    setTimeout(() => {
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-center relative overflow-hidden p-4">
      {showCelebration && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={400} recycle={false} />}

      {showHearts && (
        <div className="fixed inset-0 pointer-events-none flex flex-wrap">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl sm:text-5xl animate-heart opacity-80"
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

      <audio ref={audioRef} src="/celebration.mp3" />
      <audio ref={surpriseAudioRef} src="/suprize.mp3" onEnded={handleAudioEnd} />

      {thankYouMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-lg font-bold">Smileee💖</p>
        </div>
      )}

      {compliment && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-lg font-bold">{compliment}</p>
        </div>
      )}

      {hugMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-20">
          <p className="text-pink-600 text-lg font-bold">Virtual hug sent to Preet 💖</p>
        </div>
      )}

      {isSongPlaying && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-30 flex items-center justify-center">
          <div className="bg-white/90 p-6 rounded-2xl shadow-xl w-[90%] sm:w-[400px] mx-4 relative transition-all duration-200">
            <button
              onClick={handleAudioEnd}
              className="absolute -top-3 -right-3 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors"
            >
              ×
            </button>
            <div className="min-h-[100px] flex items-center justify-center">
              {songLyrics.map(
                (line, index) =>
                  currentTime >= line.start &&
                  currentTime <= line.end && (
                    <p
                      key={index}
                      className="text-pink-600 text-xl sm:text-2xl text-center font-bold animate-fade-in"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                      {line.text}
                    </p>
                  )
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-[95%] sm:max-w-md relative z-10 border-4 border-pink-500 transform transition-all hover:scale-105 hover:shadow-pink-600 text-center flex flex-col items-center overflow-y-auto max-h-[90vh]" style={{ fontFamily: 'Times New Roman, serif' }}>
        <h2 className="text-2xl sm:text-4xl text-pink-600 font-bold leading-tight mb-4">
          In memory of my beloved, Kuchi💖
        </h2>
        <p className="text-gray-700 text-base sm:text-lg text-justify mb-4">
          I'll always love you a fish and a bird may indeed fall in love, but where shall they live?<br/>
          I don't know where you went without any clue, but I still remember the warmth of your hug. I would have held you till my arms ached but how could I have known it was a farewell? <br/>
          Your touch faded, but your warmth still lives in the spaces between my heartbeats<br/>
          <span className="block mt-2 text-center font-semibold text-pink-600">15-May-2021 - 25-Aug-2022</span>
        </p>
        <div className="w-full grid grid-cols-2 gap-2">
          <button onClick={handleForgiveClick} className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-14">
            Celebrate 🎉
          </button>
          <button onClick={handleComplimentClick} className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-14">
            Compliments from Preet 💌
          </button>
          <button onClick={handleHugClick} className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-14">
            Hug 🤗
          </button>
          <button onClick={handleLetsTalkClick} className="bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-14">
            Let's Talk 💬
          </button>
          <button onClick={handleSurpriseClick} className="col-span-2 bg-[#FBAED2] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center h-14">
            Surprise
          </button>
        </div>
      </div>

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

          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;