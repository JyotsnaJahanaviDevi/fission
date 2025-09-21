import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef(null);

  // Variants for text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  
  return (
    <div ref={heroRef} className="h-[100vh] bg-[#A9FF1C] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <motion.div
        className="font-black text-[clamp(2rem,10vw,8rem)] leading-none text-black font-['Inter']"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>EVENTUALLY,</motion.div>
        <motion.div variants={itemVariants}>EVERYTHING CONNECTS!</motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center space-y-2 text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="animate-bounce">
          <path d="M12 21l-12-18h24z" fill="currentColor" transform="rotate(180 12 12)" />
        </svg>
        <span className="text-sm font-['Inter']">scroll</span>
      </motion.div>
    </div>
  );
};

export default HeroSection;