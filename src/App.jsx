import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import FloatingGradients from './components/FloatingGradients.jsx';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white font-['Inter'] overflow-x-hidden relative">
      <FloatingGradients />
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;