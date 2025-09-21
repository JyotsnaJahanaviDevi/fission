import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const MainContent = () => {
  const mainRef = useRef(null);
  const industriesRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const { scrollYProgress } = useScroll();

  const clipPath = useTransform(scrollYProgress, [0, 0.25], ['circle(100%)', 'circle(0%)']);

  // Variants for grid block animation
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.5,
      },
    },
  };

  const gridItemVariants = {
    hidden: { scale: 0, opacity: 0, rotate: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // State for accordion
  const [expanded, setExpanded] = useState(null);
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Animated background style
  const animatedBgStyle = {
    animation: 'move-grid 30s linear infinite',
    backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 50%),
      repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 50%)
    `,
    backgroundSize: '20px 20px',
  };

  // CSS Keyframes for the animation
  const styleSheet = document.styleSheets[0];
  const keyframes = `@keyframes move-grid {
    0% { background-position: 0 0; }
    100% { background-position: 200px 200px; }
  }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  // Function to scroll the carousels
  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth / 2;
      ref.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const processSteps = [
    {
      title: "DISCOVER & STRATEGIZE",
      content: "We work closely with you to understand your business goals, target audience, and competitive landscape. This phase involves workshops, market research, and strategic planning.",
    },
    {
      title: "DESIGN & PROTOTYPE",
      content: "Our team of designers creates wireframes, prototypes, and user interfaces that are both beautiful and functional. We iterate based on your feedback to ensure the design meets your expectations.",
    },
    {
      title: "DEVELOP & IMPLEMENT",
      content: "Using agile methodologies, our developers build a robust and scalable solution. We maintain transparent communication throughout the process, providing regular updates and demos.",
    },
    {
      title: "TEST & REFINE",
      content: "Quality assurance is integrated into every step. We perform extensive testing to identify and fix any bugs, ensuring the final product is flawless and performs optimally.",
    },
    {
      title: "LAUNCH & SUPPORT",
      content: "We handle the seamless deployment of your solution. Our partnership doesn't end there; we provide ongoing maintenance, support, and new feature development to ensure long-term success.",
    },
  ];

  const testimonials = [
    {
      quote: "They exceeded expectations on every metric. From communication to delivery, everything was seamless and professional.",
      author: "Sarah Johnson, CEO of TechNova",
    },
    {
      quote: "Fission's team felt like an extension of our own. They delivered our project ahead of schedule and above expectations - truly the gold standard of partnership.",
      author: "Amanda Smith, IT Director at InstaCart",
    },
    {
      quote: "We were impressed by how quickly Fission understood our industry. Their expertise and agile process helped us increase productivity by 50%.",
      author: "Keith Messick, CTO of InnovateCo",
    },
  ];

  return (
    <div ref={mainRef} className="bg-[#1a1a1a] text-white overflow-hidden">
      {/* The Curtain Effect */}
      <motion.div
        style={{ clipPath: clipPath }}
        className="h-[100vh] sticky top-0 bg-[#A9FF1C] z-10"
      />

      {/* The main content that appears after the curtain */}
      <div className="relative z-20" style={animatedBgStyle}>
        {/* Animated Grid on top of the background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
          <motion.div 
            className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1 p-4"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[...Array(100)].map((_, i) => (
              <motion.div key={i} variants={gridItemVariants} className="bg-white aspect-square rounded-sm" />
            ))}
          </motion.div>
        </div>

        <div className="min-h-screen pt-48 relative z-10 px-4 md:px-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-black font-['Inter'] leading-tight">
              EMPOWERING YOUR BUSINESS THROUGH <span className="text-[#A9FF1C]">RELIABLE IT INNOVATION</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-2 w-full bg-[#A9FF1C] mt-2 rounded-full"
            />
            <div className="mt-8 md:flex md:items-center md:space-x-8">
              <p className="text-lg text-gray-300 max-w-lg">
                From IT consulting to cutting-edge development, we leverage technology to fuel your growth and efficiency.
              </p>
              <button className="mt-4 md:mt-0 px-8 py-4 bg-[#A9FF1C] text-black font-bold rounded-full flex items-center space-x-2 hover:bg-white transition-colors">
                <span>Request a Free Consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-20 md:mt-40 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold font-['Inter']">TRUSTED BY LEADING COMPANIES</h2>
            <p className="text-lg text-gray-400 mt-2 italic">in Technology, Healthcare, Finance, and more...</p>
            <div className="mt-8 flex justify-center items-center space-x-6 md:space-x-12">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-sm md:text-base font-medium text-gray-500">
                  LOREM IPSUM{i + 1}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="py-20 px-4 md:px-12 relative z-10" id="services">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#A9FF1C] font-semibold text-sm mb-2"
          >
            OUR SERVICES
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between"
          >
            <h2 className="text-4xl md:text-6xl font-black font-['Inter']">WHAT WE DO</h2>
            <p className="text-lg text-gray-300 max-w-lg mt-4 md:mt-0">
              End-to-End IT Solutions: From advisory consulting to creative design and emerging tech, Fission provides a one-stop partnership for all your digital needs.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              { title: "CORE IT SERVICES", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
              { title: "SPECIALIZED IT SERVICES", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4"></path><path d="M8 12l4 4-4 4"></path></svg> },
              { title: "DESIGN & EXPERIENCE SERVICE", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path><path d="M9 12l2 2 4-4"></path></svg> },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`p-8 rounded-3xl ${i === 0 ? 'bg-[#A9FF1C] text-black' : 'bg-[#2b2b2b] text-white'}`}
              >
                <div className={`p-4 rounded-xl inline-block ${i === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold mt-4 font-['Inter']">{service.title}</h3>
                <p className="mt-2 text-sm">
                  {i === 0 ? "From core development to infrastructure, we provide the tech foundation for your business." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <div className="mt-6 flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-20 px-4 md:px-12 relative z-10" id="industries">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#A9FF1C] font-semibold text-sm mb-2"
          >
            INDUSTRY EXPERTISE
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between"
          >
            <h2 className="text-4xl md:text-6xl font-black font-['Inter']">INDUSTRIES WE SERVE</h2>
            <p className="text-lg text-gray-300 max-w-lg mt-4 md:mt-0">
              We've driven innovation and solved complex challenges across a range of industries.
            </p>
          </motion.div>
          
          {/* Horizontal Scroll Carousel */}
          <div className="mt-12 flex space-x-8 overflow-x-auto snap-x snap-mandatory pb-4" ref={industriesRef} style={{ scrollbarWidth: 'none' }}>
            {[
              { title: "INFORMATION TECHNOLOGY & SAAS", image: "https://placehold.co/400x400/2b2b2b/fff?text=IT" },
              { title: "HEALTHCARE & LIFE SCIENCES", image: "https://placehold.co/400x400/2b2b2b/fff?text=Healthcare" },
              { title: "FINANCIAL SERVICES & FINTECH", image: "https://placehold.co/400x400/2b2b2b/fff?text=Fintech" },
              { title: "MANUFACTURING & LOGISTICS", image: "https://placehold.co/400x400/2b2b2b/fff?text=Logistics" },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <img src={industry.image} alt={industry.title} className="w-full h-auto rounded-3xl" />
                <p className="text-sm text-gray-400 mt-4 font-['Inter']">0{i + 1}</p>
                <h3 className="text-xl font-bold font-['Inter'] mt-1">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button onClick={() => scrollCarousel(industriesRef, -1)} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scrollCarousel(industriesRef, 1)} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        <div className="py-20 px-4 md:px-12 relative z-10" id="process">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#A9FF1C] font-semibold text-sm mb-2"
          >
            PROCESS
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between"
          >
            <h2 className="text-4xl md:text-6xl font-black font-['Inter']">OUR APPROACH & PROCESS</h2>
            <p className="text-lg text-gray-300 max-w-lg mt-4 md:mt-0">
              At Fission, our process is both innovative and transparent. We believe in working closely with our clients at every step to ensure solutions are perfectly aligned with business goals.
            </p>
          </motion.div>
          
          {/* Accordion List */}
          <div className="mt-12 space-y-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="border-b border-gray-700 py-6"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleAccordion(i)}
                >
                  <div className="flex items-center">
                    <span className="text-xl font-['Inter'] font-semibold text-gray-400 mr-4">0{i + 1}</span>
                    <span className="text-xl md:text-2xl font-bold font-['Inter'] text-white">{step.title}</span>
                  </div>
                  <AnimatePresence initial={false} mode="wait">
                    <motion.svg
                      key={expanded === i ? "minus" : "plus"}
                      initial={{ opacity: 0, rotate: expanded === i ? -45 : 45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: expanded === i ? 45 : -45 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      {expanded === i ? (
                        <path d="M5 12h14" />
                      ) : (
                        <>
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </>
                      )}
                    </motion.svg>
                  </AnimatePresence>
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="text-gray-300 overflow-hidden"
                    >
                      {step.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <button className="mt-12 px-8 py-4 bg-[#A9FF1C] text-black font-bold rounded-full flex items-center space-x-2 hover:bg-white transition-colors">
            <span>Start a Project Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="py-20 px-4 md:px-12 relative z-10" id="case-studies">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-black font-['Inter'] max-w-lg leading-tight"
          >
            SUCCESS STORIES & CASE STUDIES
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "FINTECH MOBILE APP DEVELOPMENT", desc: "Enabled a secure, user-friendly banking app, resulting in 1M+ downloads." },
              { title: "E-COMMERCE WEBSITE OVERHAUL", desc: "Delivered robust platform enhancing user experience and sales." },
              { title: "AI-DRIVEN ANALYTICS PLATFORM FOR RETAIL", desc: "Improved customer targeting and sales driving measurable revenue growth." },
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="p-6 rounded-3xl bg-[#2b2b2b]"
              >
                <img src="https://placehold.co/400x250/fff/2b2b2b?text=Case+Study" alt="" className="w-full h-auto rounded-xl" />
                <h3 className="text-xl font-bold font-['Inter'] mt-4">{study.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="py-20 px-4 md:px-12 relative z-10" id="testimonials">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[#A9FF1C] font-semibold text-sm mb-2"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-black font-['Inter'] max-w-lg leading-tight"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>
          
          {/* Testimonials Carousel */}
          <div className="mt-12 flex space-x-8 overflow-x-auto snap-x snap-mandatory pb-4" ref={testimonialsRef} style={{ scrollbarWidth: 'none' }}>
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-shrink-0 w-80 md:w-96 snap-center p-6 bg-[#2b2b2b] rounded-3xl"
              >
                <p className="text-xl md:text-2xl font-medium italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-gray-400 mt-auto">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button onClick={() => scrollCarousel(testimonialsRef, -1)} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scrollCarousel(testimonialsRef, 1)} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        <div className="py-20 px-4 md:px-12 relative z-10" id="contact">
          <div className="bg-[#2b2b2b] rounded-3xl p-8 md:p-16 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-center space-x-2 text-[#A9FF1C] font-semibold text-sm"
            >
              <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
              <span>LET'S TALK</span>
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl md:text-6xl font-black font-['Inter'] mt-4"
            >
              READY TO TRANSFORM <br /> YOUR IT STRATEGY?
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Let's discuss how our experts can solve your IT challenges and drive your business forward. We offer a free, no-obligation consultation to assess your needs and chart a path to success.
            </motion.p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-8 px-8 py-4 bg-[#A9FF1C] text-black font-bold rounded-full flex items-center space-x-2 mx-auto hover:bg-white transition-colors"
            >
              <span>Get Your Free Consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;