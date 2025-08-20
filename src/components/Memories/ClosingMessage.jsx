import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ClosingMessage() {
  return (
    <div className="relative py-16 bg-gradient-to-t from-pink-100 via-pink-50 to-white text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-pink-600"
      >
        And this is just the beginning... 💕
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-pink-500"
      >
        Here’s to a lifetime of beautiful moments together.
      </motion.p>

       {/* Cute button with text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 flex flex-col items-center"
      >
        <p className="text-pink-600 text-lg mb-3 font-medium">
          I have something special for you… 💌
        </p>
        <Link
          to="/letter"
          className="px-8 py-4 text-xl font-bold rounded-full bg-pink-500 text-white shadow-lg shadow-pink-300 
                     hover:bg-pink-600 transition transform hover:scale-110 animate-bounce"
        >
          Open It💕
        </Link>
      </motion.div>
    </div>
  );
}
