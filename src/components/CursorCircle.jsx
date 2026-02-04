import { useEffect, useRef, useState } from 'react';

function CursorCircle() {
  const cursorCircleRef = useRef(null);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const circle = cursorCircleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;

      // Check if cursor is over footer
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isOver = e.clientY >= footerRect.top && e.clientY <= footerRect.bottom;
        setIsInFooter(isOver);
      }
    };

    const handleMouseOver = (e) => {
      // General links/buttons
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHoveringButton(true);
      }

      // Project boxes specifically
      if (e.target.closest('.project-preview-box')) {
        setIsHoveringProject(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHoveringButton(false);
      }

      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('.project-preview-box')) {
        setIsHoveringProject(false);
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

  return (
    <div
      className={`cursor-circle ${isHoveringButton ? 'cursor-hover' : ''} ${isHoveringProject ? 'cursor-project' : ''} ${isInFooter ? 'cursor-footer' : ''}`}
      ref={cursorCircleRef}
    >
      <span className="cursor-text">case study</span>
    </div>
  );
}

export default CursorCircle;
