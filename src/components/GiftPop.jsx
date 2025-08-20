import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function GiftPopup() {
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGift(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!showGift) return null;

  return (
    <>
      {/* Custom animations */}
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes unwrap {
          0% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0; }
        }
        @keyframes boxTopOpen {
          0% { transform: translateY(0); }
          100% { transform: translateY(-60px) rotate(-5deg); }
        }
        @keyframes boxBottomDrop {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px #ff1e56, 0 0 20px #ff1e56; }
          50% { box-shadow: 0 0 20px #ff1e56, 0 0 40px #ff1e56; }
        }
      `}</style>

      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
        {/* Gift box container */}
        <div
          className="relative flex flex-col items-center"
          style={{ animation: "popIn 0.8s ease forwards" }}
        >
          {/* Top part of the box */}
          <div
            className="w-40 h-20 bg-pink-500 rounded-t-md relative z-20 flex items-center justify-center"
            style={{
              animation: "boxTopOpen 1s ease forwards",
              animationDelay: "1.5s",
              transformOrigin: "bottom",
            }}
          >
            {/* Bow */}
            <div
              className="absolute w-20 h-6 bg-pink-300 rounded-full -top-3 z-30"
              style={{
                animation: "unwrap 0.8s ease forwards",
                animationDelay: "0.5s",
              }}
            ></div>
            {/* Vertical ribbon */}
            <div
              className="absolute w-4 h-full bg-pink-300"
              style={{
                animation: "unwrap 0.8s ease forwards",
                animationDelay: "0.5s",
              }}
            ></div>
          </div>

          {/* Bottom part of the box */}
          <div
            className="w-40 h-20 bg-pink-400 rounded-b-md relative z-10"
            style={{
              animation: "boxBottomDrop 1s ease forwards",
              animationDelay: "1.5s",
            }}
          >
            {/* Vertical ribbon */}
            <div
              className="absolute w-4 h-full bg-pink-300 left-1/2 -translate-x-1/2"
              style={{
                animation: "unwrap 0.8s ease forwards",
                animationDelay: "0.5s",
              }}
            ></div>
          </div>

          {/* Message inside */}
         <Link
  to="/memories"
  className="absolute text-center bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg"
  style={{
    top: "20%", // roughly between top and bottom
    transform: "translateY(-50%)", // center vertically
    opacity: 0,
    animation: "fadeIn 0.8s ease forwards, glow 1.5s infinite alternate",
    animationDelay: "2.7s, 2.7s",
  }}
>
  Your Present Maan
</Link>
        </div>
      </div>
    </>
  );
}
