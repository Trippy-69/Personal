import React, { useState, useRef } from "react";
import Confetti from 'react-confetti';

function App() {
  // ... (all existing state and functions remain the same)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-center relative overflow-hidden p-4 sm:p-8">
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
        <h1 className="text-3xl sm:text-5xl text-pink-600 font-bold leading-tight">Thanks for understanding me, Kuchi! 💖</h1>
        <p className="text-gray-700 mt-4 text-lg sm:text-xl text-center">
          I love you my baby girl🥺
        </p>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center w-full">
          <button onClick={handleForgiveClick} className="bg-[#FBAED2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#F98FB8] transition transform hover:scale-105 w-full sm:w-auto">
            Celebrate 🎉
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

      {/* Footer */}
      <footer className="absolute bottom-4 text-pink-700 text-sm sm:text-base font-medium mt-8">
        Made with ❤️ by Preet
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