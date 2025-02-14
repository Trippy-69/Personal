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
    <footer 
      className="w-full py-4 bg-pink-300/70 backdrop-blur-sm border-t border-pink-300/30 mt-auto"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <div className="text-center px-4">
        <p className="text-sm text-white font-medium">
          Made with ♥️ by Preet
        </p>
        <p className="text-xs text-pink-50 mt-1 px-2 break-words">
          Yours since {timeSince}
        </p>
      </div>
    </footer>
  );
}

export default Footer;