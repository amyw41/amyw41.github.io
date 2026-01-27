import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  // Each block spans full screen in its movement direction
  const blocks = [
    {
      id: 1,
      // Slides top → bottom, so height must be 100vh
      width: '65%',
      height: '100vh',
      top: 0,
      right: 0,
      direction: 'down',
      delay: 0,
      duration: 1.0,
      color: '#3F5A82',
      zIndex: 1,
    },
    {
      id: 2,
      // Slides left → right, so width must be 100vw (accent block)
      width: '100vw',
      height: '28%',
      top: '42%',
      left: 0,
      direction: 'right',
      delay: 0.4,
      duration: 1.0,
      color: '#30476A',
      zIndex: 2,
    },
    {
      id: 3,
      // Slides bottom → top, so height must be 100vh
      width: '45%',
      height: '100vh',
      bottom: 0,
      left: '8%',
      direction: 'up',
      delay: 0.8,
      duration: 1.0,
      color: '#3F5A82',
      zIndex: 3,
    },
    {
      id: 4,
      // Slides right → left, so width must be 100vw
      width: '100vw',
      height: '55%',
      top: 0,
      right: 0,
      direction: 'left',
      delay: 1.2,
      duration: 1.0,
      color: '#3F5A82',
      zIndex: 4,
    },
  ];

  // Get initial position - full screen wipe from off-screen
  const getInitialPosition = (direction: string) => {
    switch (direction) {
      case 'down':
        return { y: '-100vh' };
      case 'up':
        return { y: '100vh' };
      case 'left':
        return { x: '100vw' };
      case 'right':
        return { x: '-100vw' };
      default:
        return { y: '-100vh' };
    }
  };

  useEffect(() => {
    // Complete animation after all blocks have settled
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3400);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="intro-animation">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="animated-block"
          initial={getInitialPosition(block.direction)}
          animate={{ x: 0, y: 0 }}
          transition={{
            duration: block.duration,
            delay: block.delay,
            ease: [0.65, 0, 0.35, 1], // Smooth, firm easing
          }}
          style={{
            position: 'absolute',
            width: block.width,
            height: block.height,
            top: block.top,
            bottom: block.bottom,
            left: block.left,
            right: block.right,
            backgroundColor: block.color,
            zIndex: block.zIndex,
          }}
        />
      ))}
    </div>
  );
};

export default IntroAnimation;
