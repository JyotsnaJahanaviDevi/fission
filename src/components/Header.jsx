import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
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
    <div className="flex items-center space-x-6">
      <a href="#about" className="hidden lg:block hover:underline">About Us</a>
      <a href="#services" className="hidden lg:block hover:underline">Services</a>
      <a href="#industries" className="hidden lg:block hover:underline">Industries</a>
      <a href="#case-studies" className="hidden lg:block hover:underline">Case Studies</a>
      <a href="#contact" className="hidden lg:block hover:underline">Contact</a>
      <button className="hidden lg:block px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
        Menu
      </button>
      <button className="lg:hidden text-white focus:outline-none">
        {/* SVG for a simple hamburger menu */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </motion.header>
);

export default Header;