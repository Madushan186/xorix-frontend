// Banner.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BannerImg from "../assets/banner1.jpg";
import BannerImg2 from "../assets/banner2.jpg"; // second image

const images = [BannerImg, BannerImg2];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Banner"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", top: 0, left: 0 }}
        />
      </AnimatePresence>

      {/* Centered Two-Line Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          position: "absolute",
          top: "80%",        // vertical center
          left: "37%",       // horizontal center
          transform: "translate(-50%, -50%)", // perfectly center
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Shop the Latest</div>
        <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>T-shirt Style</div>
      </motion.div>
    </div>
  );
};

export default Banner;
