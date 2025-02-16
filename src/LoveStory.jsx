import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoveStory() {
  const letters = [
    "Dear Kuchi, you'll always be my favorite 'what if' I hope life brings you all the happiness you deserve.",
    "Kuchi, I still smile when I think of our time together. Thank you for being a part of my life.",
    "Kuchi, The world feels hollow now, a maze of shadows where you once stood I search for you in every crowded silence, in the whispers of the wind, but all that remains are ghosts echoes of your embrace, the warmth of your arms still burning against my skin",
    `Chali gayi na tum, vapis aaogi kya?
Dard badh gaya hai, sambhal paogi kya?
Toot raha hoon bohot, apnaogi kya?
Apna bana kar, saath nibhaogi kya?
Kisi aur ka na hokar, sirf mera rahogi kya?
Jab bhi hamara naam sunogi, yaad karogi kya?
Duniya ka bojh bhari hoga, tab mujhe dhoondogi kya?
Apne kareebiyon se mera haal puchhogi kya?
Tum wapas aaogi kya?
Pyaar mera abhi bhi hai, tum samajh paogi kya?
Samajh kar mujhe, mere saath reh paogi kya?
Pagal ho gaya hoon tere ishq mein, mujhe sawar paogi kya?
Is rishte ko ek aakhri mauka de paogi kya?
Bhale saalon beet jaye, tum laut aaogi kya?
Main hamesha intezar karunga, tum palat kar dekhogi kya?
Jab bhi milogi, sab bhool kar gale lagaogi kya?
Jaakar bhi ek din wapas aaogi kya?
Aaogi tab bhi apnaunga tumhe, bas batao... wapas aaogi kya?`,
`Jab wo gaya, sab kuch chhut gaya, Meri pasand, meri muskurahat, sab kho gaya. Maa ne pehli baar poocha "Kya hua?" Par main bas chup raha, jaise shabdon ka bhi mujhse rishta toot gaya ho
Woh nahi, toh mohabbat bhi nahi, Meri duniya mein ab roshni bhi nahi. Uske bina sab bekaar sa lagta hai, Meri saanson ka bojh bhi ab bhari lagta hai.

Jo khaana kabhi khushi se khaya tha, Aaj woh samne rakha bhi to aansuon se bhara tha. Jo pal kabhi sukoon dete the, Aaj woh hi zehar lagne lage the.

Zinda hoon, par sirf naam ke liye, Dil dhadakta hai, bas ek kaam ke liye. Bas ek aur dukh, ek aur gehri chot, Aur phir shayad yeh kahani bhi khatam ho.

Lekin shayad... ek din, kahin, koi raah mil jaaye, Koi wajah ho jeene ki, jo dil ko fir se sulag jaaye. Ho sakta hai dukh kabhi kam na ho, Par shayad tere aane se fir jeena sikhne ka man ho.`,
`Us din jab tumhe jaana tha,
Sab kuch wahi thamm sa gaya tha.
Zubaan pe kitni baatein thi,
Par kehne ka hausla kahaan tha?

Meri duniya ka har rang chin gaya,
Raaton ka sukoon.
Jo hasi kabhi teri baaton mein thi,
woh aansuon ke saath beh gayi.

Teri yaadon ka ek bhor bacha hai,
Mere dil ka ab bas shor bacha hai.
Log kehte hain waqt sab theek karega,
Par har din tujhse door bita hai.

Kabhi sochta hoon, shayad laut aaye tu,
Ek din phir meri aawaz sun aaye tu.
Par sach yeh hai ki jo chala jata hai,
Woh sirf yaadon mein hi reh paata hai.

Phir bhi... shayad kahin, kisi mod par,
Ek nayi subah, ek naya manzar mile.
Dukh shayad hamesha saath chale,
Magar kabhi beech-beech mein muskurane ka bahaana zarur mile..`,
`"Tere Jaane Ke Baad"

Tere jaane ke baad sab kuch badal gaya,
Par log kehte hain ki waqt ke saath sab theek ho jata hai.
Sach bataun? Kuch bhi theek nahi hota.

Tere bina woh shaam ajeeb lagti hai,
Jab mai tujhe pick karne aaya karta tha.
Ab sirf akela baithe sochta hoon
Wahi jagah, wahi raste, par ab tu nahi hai.

Woh galiyan jahan hum kabhi saath ghoome the,
Mujhe itna satane lagi ki maine pura sheher hi chhod diya.
Door chale jaana asaan tha,
Par woh yaadein... inse bhaagna mushkil.

Hamara woh chup chup ke milna yaad aata hai,
Jab har baar dar lagta tha kisi ke dekh lene ka.
Aur jab hum bike par ghoomte the,
Tu apna sar mere kandhe par rakh deti thi,
Jaise har ek tension, har fikr uss ek pal ke liye khatam ho gayi ho.

Log kehte hain tu khush hai,
Par main jaanta hoon, tujhe bhi fark padta hai.
Bas tu kabhi jataati nahi.
Main samajh sakta hoon, par kabhi keh nahi sakta.

Kayi baar mann karta hai tujhe sab bata doon,
Ke jaane ke baad bhi tu har pal mere saath hai.
Par phir sochta hoon, shayad tu bhi yahi mehsoos karti hai,
Bas mujhe batati nahi.

Aur agar kabhi kisi raat tujhe bhi yeh dukh mehsoos ho,
To bas ek baar sochna,
Ki main ab bhi wahi hoon,
Bas tere bina thoda adhoora ho gaya hoon.`,
  ];

  // Floating hearts configuration
  const generateHearts = (isMobile) => {
    const count = isMobile ? 10 : 15;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: `${2 + Math.random() * 3}rem`,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 2,
      opacity: isMobile ? 0.2 : 0.4
    }));
  };

  const [isMobile, setIsMobile] = useState(false);
  const [hearts, setHearts] = useState(() => generateHearts(false));

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

  const FloatingHeart = ({ left, top, size, delay, duration, opacity }) => (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
      initial={{ y: -10, rotate: -15 }}
      animate={{ y: [0, 20, 0], rotate: [-15, 15, -15], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration, repeat: Infinity, repeatType: 'mirror', delay, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
        style={{ color: '#fb7185', filter: 'drop-shadow(0 2px 4px rgba(251, 113, 133, 0.15))' }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen p-6 bg-gradient-to-b from-pink-50 to-pink-100" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="fixed inset-0">
        {hearts.map((heart) => (
          <FloatingHeart key={heart.id} {...heart} />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10 space-y-16">
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
            This site is a tribute to the love we shared and the beautiful moments we created together. 
          </p>
        </motion.div>

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
                {typeof letter === 'string' && letter.startsWith('Chali') ? (
                  <div className="space-y-4">
                    {letter.split('\n').map((line, lineIndex) => (
                      <motion.p
                        key={lineIndex}
                        className="text-gray-700 italic text-xl mb-4"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: lineIndex * 0.3,
                          duration: 0.6,
                          ease: 'easeInOut'
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 italic text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                    {letter}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-4">My Wishes for You</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
          Bas ek cheez chahta hoon tu khush rahe.
Jahan bhi ho, jis bhi mod pe ho, zindagi tujhe muskurane ki wajah de.
Main nahi hoon tere saath, par iska matlab yeh nahi ki tu ruk jaaye.
Aage badhna, apne liye, apni khushi ke liye.

Kayi raaton tak ho sakta hai tu mujhe yaad kare,
Ho sakta hai dil dukhe, aankhein nam ho.
Par kabhi apne dukh ko apni takdeer mat samajhna.
Jo chala gaya, woh ek kahani thi.
Jo aane wala hai, woh tera naya safar hai.

Agar kabhi akela mehsoos ho,
To yaad rakhna ki tere hone se kisi ki duniya roshan hai.
Agar kabhi dil bhatakne lage,
To sirf ek baar apni zindagi ko ek naye nazariye se dekhna.

Main chah kar bhi wapas nahi aa sakta,
Par meri har dua tere saath rahegi.
Jeena, khush rehna, aur apne dil ka khayal rakhna.
Kyunki tu sirf kisi ki yaadon ka hissa nahi,
Tu kisi ki kahani ka naya shuruwaat hai. 
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl text-pink-600 font-bold mb-4">Thank You</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for being a part of my life and teaching me so much about love. 
            You've made me a better person, and I'll always cherish the time we spent together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}