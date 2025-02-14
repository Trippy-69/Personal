import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoveStory() {
  const letters = [
    "Dear Kuchi, you'll always be my favorite 'what if.' I hope life brings you all the happiness you deserve.",
    "Kuchi, I still smile when I think of our time together. Thank you for being a part of my life.",
  ];

  // Floating hearts configuration
  const generateHearts = (isMobile) => {
    const count = isMobile ? 10 : 15; // Fewer hearts on mobile
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Spread across the full width
      top: Math.random() * 100, // Spread across the full height
      size: `${2 + Math.random() * 3}rem`, // Keep the same size
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 2,
      opacity: isMobile ? 0.2 : 0.4 // Slightly more transparent on mobile
    }));
  };

  const [isMobile, setIsMobile] = useState(false);
  const [hearts, setHearts] = useState(() => generateHearts(false));

  // Mobile detection and heart regeneration
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 640px)').matches;
      setIsMobile(mobile);
      setHearts(generateHearts(mobile));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Floating Heart Component
  const FloatingHeart = ({ left, top, size, delay, duration, opacity }) => (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        opacity: opacity
      }}
      initial={{ y: -10, rotate: -15 }}
      animate={{
        y: [0, 20, 0],
        rotate: [-15, 15, -15],
        scale: [0.9, 1.1, 0.9]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: delay,
        ease: 'easeInOut'
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
        style={{ 
          color: '#fb7185',
          filter: 'drop-shadow(0 2px 4px rgba(251, 113, 133, 0.15))'
        }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen p-6 bg-gradient-to-b from-pink-50 to-pink-100" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Floating Hearts Background */}
      <div className="fixed inset-0">
        {hearts.map((heart) => (
          <FloatingHeart key={heart.id} {...heart} />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto relative z-10 space-y-16">
        {/* Our Story Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-4">Our Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            From the moment we met, you brought so much joy and light into my life. 
            Our journey together has been filled with laughter, love, and unforgettable memories. 
            Even though we're not together anymore, you'll always hold a special place in my heart. 
            This site is a tribute to the love we shared and the beautiful moments we created together. 💖
          </p>
        </motion.div>

        {/* Letters Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-6">Letters to You</h3>
          <div className="space-y-6">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <p className="text-gray-700 italic text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  {letter}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wishes Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-4">My Wishes for You</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            I hope you find everything you're looking for in life. 
            May you always be surrounded by love, happiness, and success. 
            No matter where life takes you, know that I'll always be cheering for you from afar. 🌟
          </p>
        </motion.div>

        {/* Thank You Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-4">Thank You</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for being a part of my life and teaching me so much about love and kindness. 
            You've made me a better person, and I'll always cherish the time we spent together. 💖
          </p>
        </motion.div>
      </div>
    </div>
  );
}