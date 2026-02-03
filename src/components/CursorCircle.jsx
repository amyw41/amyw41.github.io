import { useEffect, useRef, useState } from 'react';

function CursorCircle() {
  const cursorCircleRef = useRef(null);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const circle = cursorCircleRef.current;
    if (!circle) return;
    
    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHoveringButton(false);
      }
    };
    
    window.addEventListener('mousemove', moveCircle);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', moveCircle);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div className={`cursor-circle ${isHoveringButton ? 'cursor-hover' : ''}`} ref={cursorCircleRef} />;
}

export default CursorCircle;
