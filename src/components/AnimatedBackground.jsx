import React, { useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AnimatedBackground = React.memo(({
  colors = ['#A9FF1C', '#0070f3', '#7928CA', '#FF0080', '#00BFFF', '#FF4500'],
  shapes = ['circle', 'square'],
  shapeCount = 50
}) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  };

  const shapesArray = useMemo(() => {
    return [...Array(shapeCount)].map((_, i) => ({
      id: i,
      type: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 25 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotate: Math.random() * 360,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
    }));
  }, [shapeCount, shapes, colors]);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900 opacity-80 backdrop-filter backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="absolute inset-0 z-0">
        {shapesArray.map(shape => {
          const x = useTransform(smoothMouseX, [0, window.innerWidth], [-20, 20]);
          const y = useTransform(smoothMouseY, [0, window.innerHeight], [-20, 20]);
          
          return (
            <motion.div
              key={shape.id}
              className={`absolute ${shape.type === 'circle' ? 'rounded-full' : 'rounded-md'}`}
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                opacity: 0.15,
                x: useTransform(x, [-1, 1], [-1 * (shape.x - 50), 1 * (shape.x - 50)]),
                y: useTransform(y, [-1, 1], [-1 * (shape.y - 50), 1 * (shape.y - 50)]),
                filter: `blur(${Math.random() * 2}px)`
              }}
              animate={{
                x: [`${shape.x}%`, `${shape.x + (Math.random() - 0.5) * 20}%`],
                y: [`${shape.y}%`, `${shape.y + (Math.random() - 0.5) * 20}%`],
                scale: [1, 1.1, 1],
                rotate: [shape.rotate, shape.rotate + 360],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
});

export default AnimatedBackground;