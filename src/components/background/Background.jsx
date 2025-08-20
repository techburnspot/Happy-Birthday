import React, { useEffect, useState } from "react";

const Heart = ({ left, size }) => {
  return (
    <div
      className="absolute bottom-0 animate-[float_6s_linear]"
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
        💞
      </span>
    </div>
  );
};

const ParticlesBackground = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // random horizontal position
        size: 30 + Math.random() * 10, // consistent size range
      };

      setHearts((prev) => [...prev, newHeart]);

      // Remove after animation ends
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 6000);
    }, 300); // control frequency here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#F49CBB]">
      {hearts.map((heart) => (
        <Heart key={heart.id} left={heart.left} size={heart.size} />
      ))}
    </div>
  );
};

export default ParticlesBackground;
