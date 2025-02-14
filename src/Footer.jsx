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
    <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
      <p className="text-sm">Made with ♥️ by Preet</p>
      <p className="text-sm">Yours since {timeSince}</p>
    </footer>
  );
}

export default Footer;