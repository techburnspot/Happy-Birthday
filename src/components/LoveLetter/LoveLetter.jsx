import React, { useState, useEffect } from "react";

export default function LoveLetter() {
 const letterLines = [
  "My dearest love, 💖",
  "Maan,",
  "Every morning begins with your name on my lips, and every night ends with you in my heart. 🌙",
  "Even when you’re right beside me, I still find myself missing you—because my soul always craves more of you. 💕",
  "Each day with you feels like the most magical chapter of a fairytale written just for us. 📖✨",
  "Your smile is my sunshine ☀️, your voice my favorite melody 🎶, and your touch my greatest comfort.",
  "With every heartbeat, I fall deeper in love with you—more than words could ever describe. ❤️",
  "Our silly fights, our endless laughter, and our little moments together—each one is a treasure, a gem I’ll cherish for a lifetime. 💎",
  "You are my today, my tomorrow, and my forever. ♾️",
  "",
  "Forever and always yours, ❤️",
  "— Vansh"
];


  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < letterLines.length) {
      if (charIndex < letterLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prev) => prev + letterLines[lineIndex].charAt(charIndex)
          );
          setCharIndex((prev) => prev + 1);
        }, 120); // slower typing speed for old letter feel
        return () => clearTimeout(timeout);
      } else {
        setCurrentText((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, lineIndex, letterLines]);

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="relative max-w-3xl p-10 rounded-xl shadow-2xl bg-[url('/letter.jpg')] bg-cover bg-center border-8 border-yellow-800 animate-bgMove">
        {/* Love letter text */}
        <pre className="whitespace-pre-wrap font-[cursive] text-lg md:text-2xl text-[#3e2c1c] leading-relaxed tracking-wide animate-fadeIn drop-shadow">
          {currentText}
        </pre>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Subtle background movement */
        .animate-bgMove {
          animation: bgMove 45s ease-in-out infinite alternate;
        }
        @keyframes bgMove {
          0% { background-position: center; }
          50% { background-position: top; }
          100% { background-position: center; }
        }
      `}</style>
    </div>
  );
}
