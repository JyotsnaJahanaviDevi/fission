import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Variant for the slide-in menu
  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:px-12 flex items-center justify-between text-white"
      >
        <div className="flex items-center space-x-2">
          {/* Custom SVG logo based on the video */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className="fill-current text-[#A9FF1C]">
            <path d="M 20 10 L 10 20 L 10 80 L 20 90 L 80 90 L 90 80 L 90 20 L 80 10 Z" />
            <path d="M 30 10 L 20 20 L 20 80 L 30 90 L 90 90 L 100 80 L 100 20 L 90 10 Z" />
          </svg>
          <span className="text-xl font-bold font-['Inter']">fission</span>
        </div>
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col p-8 md:px-12 text-white"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold">fission</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-white text-3xl">
                &times;
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-2xl font-bold">
              <a href="#about" onClick={handleLinkClick}>About Us</a>
              <a href="#services" onClick={handleLinkClick}>Services</a>
              <a href="#industries" onClick={handleLinkClick}>Industries</a>
              <a href="#case-studies" onClick={handleLinkClick}>Case Studies</a>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;