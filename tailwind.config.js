module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        openLid: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-120deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #ff1e56, 0 0 30px #ff1e56" },
          "50%": { boxShadow: "0 0 25px #ff1e56, 0 0 50px #ff1e56" },
        },
      },
      animation: {
        popIn: "popIn 0.8s ease forwards",
        openLid: "openLid 1s ease forwards",
        fadeIn: "fadeIn 0.8s ease forwards",
        glow: "glow 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
