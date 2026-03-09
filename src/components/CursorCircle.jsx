import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CursorCircle() {
  const cursorCircleRef = useRef(null);
  const hasMovedRef = useRef(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);
  const location = useLocation();

  // Reset hover states on every route change so the cursor
  // always shows as the default large circle when entering a new page.
  useEffect(() => {
    setIsHoveringButton(false);
    setIsHoveringProject(false);
  }, [location.pathname]);

  useEffect(() => {
    const circle = cursorCircleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;

      // Show on first move, and clear any hover states that were set
      // before the mouse moved (e.g. cursor was already over a link on load)
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setIsHoveringButton(false);
        setIsHoveringProject(false);
        circle.style.opacity = '1';
      }

      // Check if cursor is over footer
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isOver = e.clientY >= footerRect.top && e.clientY <= footerRect.bottom;
        setIsInFooter(isOver);
      }
    };

    const handleMouseOver = (e) => {
      // Only apply hover states after the cursor has actually moved
      if (!hasMovedRef.current) return;

      const target = e.target;
      if (!target || !target.closest) return;

      // Generic check for anything interactive
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHoveringButton(true);
      }

      // Project boxes specifically
      if (target.closest('.project-preview-box')) {
        setIsHoveringProject(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;

      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
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
      style={{ opacity: 0 }}
      ref={cursorCircleRef}
    >
      <span className="cursor-text">case study</span>
    </div>
  );
}

export default CursorCircle;
