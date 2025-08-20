import React, { useEffect, useState } from 'react';
import GiftPopup from '../GiftPop';

const Welcome = () => {
  const [stage, setStage] = useState("ask"); 
  const [noBtnPos, setNoBtnPos] = useState({ top: "50%", left: "60%" });
  const [unmuted, setUnmuted] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-music");

    const enableAudio = () => {
      if (audio) {
        setUnmuted(true); // update state → removes mute
        audio.currentTime = 0;
        audio.play().catch(err => console.log("Autoplay blocked:", err));
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  useEffect(() => {
    let timer;
    if (stage === "ask") {
      timer = setTimeout(() => setStage("warn1"), 5000);
    } else if (stage === "warn1") {
      timer = setTimeout(() => setStage("warn2"), 5000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const handleYes = () => {
    setStage("final");
    setTimeout(() => setStage("show"), 5000);

    const audio = document.getElementById("bg-music");
    if (audio) {
      setUnmuted(true);
      audio.currentTime = 0;
      audio.play().catch(err => console.log("Play blocked:", err));
    }
  };

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    setNoBtnPos({ top: `${y}%`, left: `${x}%` });
  };

  const AudioPlayer = () => (
    <audio id="bg-music" autoPlay loop muted={!unmuted}>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );

  if (stage === "ask" || stage === "warn1" || stage === "warn2") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 relative">
        <AudioPlayer />
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Do you love me? 💖</h2>

        {stage === "warn1" && <p className="text-lg text-pink-500">Sochlo , ek aur bar 🤔</p>}
        {stage === "warn2" && <p className="text-lg text-pink-500">Ab to akhiri chance ha dekh lo 😏</p>}

        <button
          onClick={handleYes}
          className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          Yes 💕
        </button>

        <button
          onMouseEnter={moveNoButton}
          style={{ position: "absolute", top: noBtnPos.top, left: noBtnPos.left }}
          className="px-6 py-3 bg-gray-400 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          No 🙈
        </button>
      </div>
    );
  }

  if (stage === "final") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 py-10">
        <AudioPlayer />
        <h2 className="text-3xl font-bold text-pink-600 animate-pulse">
          I know you love me, don’t fake it 😍
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 z-10 relative">
      <AudioPlayer />
      <h1
        className="text-4xl md:text-6xl font-bold text-pink-700"
        style={{
          fontFamily: "'Great Vibes', cursive",
          textShadow: "0 0 8px rgba(255, 105, 180, 0.9), 0 0 16px rgba(255, 105, 180, 0.6)",
        }}
      >
        Happy Birthday, My Love
      </h1>
      <div className="text-5xl animate-pulse mt-4">💖</div>
      <div className="mt-8 p-6 rounded-2xl shadow-lg max-w-xl text-white text-lg leading-relaxed 
                      bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 
                      bg-[length:400%_400%] animate-gradient-x bg-opacity-30 backdrop-blur-sm">
        <p>Today is not just your birthday, it's the day the love of my life came into this world.</p>
        <p className="mt-2">I’m beyond lucky to have you. Wishing you a day filled with love, smiles, and sunshine. 🌼</p>
        <p className="mt-2">Let’s make this birthday the most beautiful one yet. 🎂💫</p>
      </div>
      <GiftPopup />
    </div>
  );
};

export default Welcome;
