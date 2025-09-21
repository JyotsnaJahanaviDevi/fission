import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  // Use a useEffect hook to force the window to scroll to the top on every render.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white font-['Inter'] overflow-x-hidden">
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;