// src/components/Footer.jsx
import React, { useState, useEffect } from "react";

function Footer() {
  const [timeSince, setTimeSince] = useState("");

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

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-3 bg-pink-500/20 backdrop-blur-sm border-t border-pink-300/30">
      <div className="text-center px-4">
        <p className="text-xs sm:text-sm text-white font-medium">
          Made with ♥️ by Preet
        </p>
        <p className="text-[10px] sm:text-xs text-pink-100 mt-1 leading-tight break-words">
          Yours since {timeSince}
        </p>
      </div>
    </footer>
  );
}

export default Footer;