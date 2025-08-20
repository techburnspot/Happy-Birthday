import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Replace with your own image URLs, song files, and lyrics
const images = [
  { src: "img1.jpg", song: "song1.mp3", lyrics: "From this moment, my heart belongs only to you ❤️" },
{ src: "img2.jpg", song: "song2.mp3", lyrics: "Hold me close… and I’ll show you a forever made just for us 🌿💞" },
{ src: "img4.jpg", song: "song4.mp3", lyrics: "Every glance, every smile… makes me fall all over again 💕" },
{ src: "img6.jpg", song: "song6.mp3", lyrics: "You are the most beautiful answer to all my prayers ❤️✨" },
{ src: "img3.jpg", song: "song3.mp3", lyrics: "Every day with you feels like my favorite love story 📖💖" },
{ src: "img8.jpg", song: "song8.mp3", lyrics: "You’re the kind of magic I never want to stop believing in ✨" },
{ src: "img11.jpg", song: "song11.mp3", lyrics: "Your love is my sweetest melody, and my soul sings it endlessly 🎶💓" },
{ src: "img12.jpg", song: "song12.mp3", lyrics: "Through every season, I’ll choose you again and again 🌸🍂❄️☀️" },
{ src: "img13.jpg", song: "song13.mp3", lyrics: "You’re my dream, my reality, and my favorite ‘what if’ 💭❤️" },
{ src: "img7.jpg", song: "song7.mp3", lyrics: "Every heartbeat is a soft whisper of ‘I love you’ 💓" },
{ src: "img10.jpg", song: "song10.mp3", lyrics: "Together, we write a love story even the stars envy ✨🌙" },
{ src: "img14.jpg", song: "song14.mp3", lyrics: "You’re my safe place, my wild adventure, my forever home 🏡💖" }

];

export default function MemoriesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const audioRef = useRef(new Audio());

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const song = images[index].song;
    if (song) {
      audioRef.current.src = song;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    audioRef.current.pause();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((item, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-pink-200 hover:border-pink-400 transition-all"
          whileHover={{ scale: 1.03 }}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Image with blur on hover */}
          <img
            src={item.src}
            alt="Memory"
            className={`w-full h-auto object-cover transition-all duration-300 ${
              hoveredIndex === i ? "blur-sm scale-105" : ""
            }`}
          />

          {/* Lyrics overlay without black background */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-center text-white text-lg font-semibold px-4 text-center transition-opacity duration-300 ${
              hoveredIndex === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {hoveredIndex === i ? item.lyrics : "💖 Love Forever"}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
