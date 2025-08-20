import React, { useEffect, useState } from "react";

const Particle = ({ left, size, emoji }) => {
  return (
    <div
      className="absolute bottom-0 animate-[float_7s_linear]"
      style={{
        left: `${left}%`,
      }}
    >
      <span
        style={{
          fontSize: `${size}px`,
          display: "block",
        }}
      >
        {emoji}
      </span>
    </div>
  );
};

const VintageParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  // Warm brownish vintage theme symbols
  const emojis = ["❤️", "💖", "🌸", "🌺", "✨", "🫶"];


  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: 18 + Math.random() * 20,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 7000); // stays for 7s before fading
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f4e1c1]">
      {particles.map((p) => (
        <Particle key={p.id} left={p.left} size={p.size} emoji={p.emoji} />
      ))}
    </div>
  );
};

export default VintageParticlesBackground;
