import { useState, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const location = useLocation();
  const isTargetPage = location.pathname.startsWith('/projects/') || location.pathname === '/play';

  const [loading, setLoading] = useState(isTargetPage);
  const [fadeout, setFadeout] = useState(false);
  const prevPathRef = useRef(location.pathname);

  // Synchronously sync state with location to prevent any one-frame visual glitches
  if (location.pathname !== prevPathRef.current) {
    prevPathRef.current = location.pathname;
    if (isTargetPage) {
      setLoading(true);
      setFadeout(false);
    } else {
      setLoading(false);
    }
  }

  useLayoutEffect(() => {
    if (!isTargetPage) return;

    let isFinished = false;

    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;
      window.dispatchEvent(new CustomEvent('loader-finished'));
      
      // Give the page a tiny window to hot-swap GIF blobl URLs if needed before fading
      setTimeout(() => {
        setFadeout(true);
      }, 50);

      setTimeout(() => {
        setLoading(false);
      }, 550); // 500ms after fadeout starts
    };

    // We use a small timeout to let React flush the new DOM elements to the page
    const checkImagesTimeoutId = setTimeout(() => {
      // Find all image elements on the newly rendered page. Keep in mind there might be layout changes or dynamically added images.
      const images = Array.from(document.images);
      
      if (images.length === 0) {
        finishLoading();
        return;
      }

      let loadedCount = 0;

      const checkIfAllLoaded = () => {
        if (loadedCount >= images.length) {
          // slight delay for rendering buffer
          setTimeout(finishLoading, 150);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            checkIfAllLoaded();
          }, { once: true });
          img.addEventListener('error', () => {
            // Treat broken images as loaded so it doesn't block forever
            loadedCount++;
            checkIfAllLoaded();
          }, { once: true });
        }
      });
      
      // Fallback: If network is slow, hide loader after 6 seconds regardless
      setTimeout(() => {
         finishLoading();
      }, 6000);

      // Trigger first check
      checkIfAllLoaded();
    }, 50);

    return () => clearTimeout(checkImagesTimeoutId);
  }, [location.pathname, isTargetPage]);

  if (!loading) return null;

  return (
    <div className={`page-loader-overlay ${fadeout ? 'fade-out' : ''}`}>
      <span className="page-loader-spinner"></span>
    </div>
  );
}
