import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function BalloonPopPage() {
  const romanticMessages = [
    "You’re the reason my heart smiles ❤️",
    "My favorite place is next to you 💕",
    "Every moment with you is a gift 🎁",
    "You light up my world ✨",
    "I fall for you more every day 💖",
    "Your smile is my sunshine ☀️",
    "With you, life is a fairytale 🏰",
    "I love you endlessly ♾️"
  ];

  const [balloons, setBalloons] = useState([]);
  const [poppedMessages, setPoppedMessages] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  

  useEffect(() => {
    // Create balloons slowly one by one
    let index = 0;
    const firstBalloon = {
    id: Date.now(),
    message: romanticMessages[index],
    left: Math.random() * 80 + "%",
    speed: Math.random() * 15 + 20
  };
  setBalloons([firstBalloon]);
  index++;

    const interval = setInterval(() => {
      if (index < romanticMessages.length) {
        const newBalloon = {
          id: Date.now(),
          message: romanticMessages[index],
          left: Math.random() * 80 + "%",
          speed: Math.random() * 15 + 20 // slower speed
        };
        setBalloons((prev) => [...prev, newBalloon]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const popBalloon = (id, message) => {
   setBalloons((prev) => prev.filter((b) => b.id !== id));
  setPoppedMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
  if (balloons.length === 0 && poppedMessages.length === romanticMessages.length) {
    setTimeout(() => {
      setShowFinal(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
    }, 500);
  }
}, [balloons, poppedMessages, romanticMessages.length]);
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-pink-200 via-pink-100 to-pink-50 overflow-hidden flex items-center justify-center">
      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute cursor-pointer text-5xl select-none"
          style={{
            left: balloon.left,
            animation: `floatUp ${balloon.speed}s linear forwards`
          }}
          onClick={() => popBalloon(balloon.id, balloon.message)}
        >
          🎈
        </div>
      ))}

      {/* Romantic Messages */}
      <div className="absolute bottom-5 w-full flex flex-col items-center space-y-2">
        {/* Romantic Message */}
{poppedMessages.length > 0 && (
  <div className="absolute bottom-5 w-full flex justify-center">
    <div className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full text-lg italic shadow-lg animate-fadeIn">
      {poppedMessages[poppedMessages.length - 1]}
    </div>
  </div>
)}

      </div>

      {/* Final Message */}
      {showFinal && (
        <div className="absolute text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 animate-pulse drop-shadow-lg">
            Happy Birthday Maan ❤️
          </h1>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
