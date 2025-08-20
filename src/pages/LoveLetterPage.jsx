import { useState } from "react";
import YellowParticlesBackground from "../components/background/LoveLetterBackgroudn";
import LoveLetter from "../components/LoveLetter/LoveLetter";

const LoveLetterPage = () => {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    const audio = document.getElementById("love-music");
    if (audio) {
      audio.muted = false;
      audio
        .play()
        .then(() => setStarted(true))
        .catch(err => console.log("Music play blocked:", err));
    } else {
      setStarted(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background Music */}
      <audio id="love-music" loop>
        <source src="/letter.m4a" type="audio/mpeg" />
      </audio>

      {!started ? (
        // Initial Screen: Only Cute Yes Button
        <div className="flex flex-col items-center space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-pink-600">
            At last Maan, I want to say something! 💌
          </h1>
        <button
          onClick={handleStart}
          className="px-8 py-4 text-2xl font-bold rounded-full bg-pink-500 text-white shadow-lg shadow-pink-300 hover:bg-pink-600 transition transform hover:scale-110 animate-bounce"
        >
           Click Here💕
        </button>
        </div>
      ) : (
        // After Clicking Yes: Show Love Letter + Background
        <>
          <LoveLetter />
          <YellowParticlesBackground />
        </>
      )}
    </div>
  );
};

export default LoveLetterPage;
