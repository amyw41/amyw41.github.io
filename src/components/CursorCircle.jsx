import { useEffect, useRef, useState } from 'react';

function CursorCircle() {
  const cursorCircleRef = useRef(null);

  // Three distinct cursor states
  const [isHoveringButton, setIsHoveringButton] = useState(false);   // plain links/buttons → shrink
  const [isHoveringProject, setIsHoveringProject] = useState(false); // project cards → "view case study"
  const [isInFooter, setIsInFooter] = useState(false);               // dark footer → white border
  const [isClicked, setIsClicked] = useState(false);                 // click → shrink briefly

  useEffect(() => {
    const circle = cursorCircleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;

      // Check if cursor is over footer
      const footer = document.querySelector('.footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsInFooter(e.clientY >= rect.top && e.clientY <= rect.bottom);
      }
    };

    const handleMouseOver = (e) => {
      const projectBox = e.target.closest('.project-preview-box');
      if (projectBox) {
        // Project cards: show label, don't shrink
        setIsHoveringProject(true);
        setIsHoveringButton(false);
        return;
      }

      // Plain interactive elements (links, buttons) that are NOT project boxes
      const isInteractive =
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a');

      if (isInteractive) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseOut = (e) => {
      // Leaving a project box
      if (e.target.closest && e.target.closest('.project-preview-box')) {
        const relatedInBox = e.relatedTarget?.closest?.('.project-preview-box');
        if (!relatedInBox) {
          setIsHoveringProject(false);
        }
      }

      // Leaving a plain interactive element
      const isInteractive =
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a');

      if (isInteractive) {
        setIsHoveringButton(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Reset all hover states on route change (page navigation)
    const resetStates = () => {
      setIsHoveringButton(false);
      setIsHoveringProject(false);
      setIsClicked(false);
    };

    window.addEventListener('mousemove', moveCircle);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('popstate', resetStates);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('popstate', resetStates);
    };
  }, []);

  // Reset hover state whenever the component re-mounts (i.e. page navigation)
  useEffect(() => {
    setIsHoveringButton(false);
    setIsHoveringProject(false);
    setIsClicked(false);
  }, []);

  const classes = [
    'cursor-circle',
    isClicked ? 'cursor-clicked' : '',
    // Only shrink for plain buttons when not clicked and not on a project
    (!isClicked && isHoveringButton && !isHoveringProject) ? 'cursor-hover' : '',
    // Project card: big + label
    isHoveringProject ? 'cursor-project' : '',
    isInFooter ? 'cursor-footer' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={cursorCircleRef}>
      <span className="cursor-text">view case study</span>
    </div>
  );
}

export default CursorCircle;
