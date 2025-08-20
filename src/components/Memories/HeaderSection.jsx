import React from "react";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <div className="relative min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-white overflow-hidden">
      
      {/* Floating sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 18 + 12}px`,
          }}
          animate={{
            y: [0, -80],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-pink-600 drop-shadow-lg"
      >
        Our Beautiful Memories
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-pink-500 italic"
      >
        A journey of love, laughter, and endless moments ❤️
      </motion.p>
    </div>
  );
}
