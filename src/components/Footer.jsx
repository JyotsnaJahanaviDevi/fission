import React from 'react';

const Footer = () => (
  <footer className="bg-black py-16 px-4 md:px-12 text-gray-400 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
      <div className="flex flex-col space-y-2">
        <a href="#about" className="hover:text-white transition-colors">About Us</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#industries" className="hover:text-white transition-colors">Industries</a>
        <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-white">Your Partner in <span className="text-[#A9FF1C]">Reliable IT Innovation</span></p>
        <p className="text-xl md:text-2xl font-black font-['Inter'] mt-2 text-white">FISSION</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1 1 1 2.5 2 4.1-1.2.1-2.4-.6-3.4-.6C15 14.5 13.5 16 11.5 16s-3.5-1.5-3.5-3.5 1.5-3.5 3.5-3.5c1.5 0 3 .5 4 1.5C16.5 8.9 17.1 8.2 18 7.5"></path></svg>
          </a>
        </div>
      </div>
      <div className="text-sm space-y-2 text-center md:text-right">
        <p>Copyright © 2025 Fission. All rights reserved.</p>
        <p>info@fission.it</p>
      </div>
    </div>
  </footer>
);

export default Footer;