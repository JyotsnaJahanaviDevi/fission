import React, { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';

const FloatingGradients = () => {
  const containerRef = useRef(null);

  const circles = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      size: Math.random() * 150 + 100,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
  }, []);

  useEffect(() => {
    circles.forEach((circle, i) => {
      gsap.to(`.circle-${i}`, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        scale: Math.random() * 0.5 + 1,
        opacity: Math.random() * 0.2 + 0.1,
        duration: Math.random() * 10 + 15,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
  }, [circles]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#1a1a1a] z-0">
      {circles.map((circle, i) => (
        <div
          key={i}
          className={`absolute rounded-full filter blur-xl mix-blend-screen opacity-10 circle-${i}`}
          style={{
            backgroundColor: circle.color,
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGradients;