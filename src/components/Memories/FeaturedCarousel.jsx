import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featured = [
  { img: "img1.jpg", caption: "Our First Meet ❤️" },
  { img: "img2.jpg", caption: "That cinema Day🎬" },
  { img: "img4.jpg", caption: "Rose Day🌹" },  
  { img: "img5.jpg", caption: "Valentine's Day🥰" },
  { img: "img6.jpg", caption: "Random Cursion Bridge Walk🧑‍🤝‍🧑" },
  { img: "img9.jpg", caption: "My Special Holi" },
  
];

export default function FeaturedCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Slider {...settings}>
        {featured.map((item, i) => (
          <motion.div key={i}>
            <img
              src={item.img}
              alt={item.caption}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <p className="mt-4 text-center text-lg text-pink-600 font-semibold">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
