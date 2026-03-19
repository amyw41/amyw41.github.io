import { useState, useEffect } from 'react';

/**
 * Resolves to `true` once every image in `srcs` has either loaded or errored.
 * Pass the hero/above-the-fold image srcs so animations only fire after the
 * browser has the pixel data and the layout is stable.
 */
function useImagesLoaded(srcs = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!srcs.length) {
      setLoaded(true);
      return;
    }

    let remaining = srcs.length;

    const finish = () => {
      remaining -= 1;
      if (remaining <= 0) setLoaded(true);
    };

    const images = srcs.map((src) => {
      const img = new Image();
      img.onload = finish;
      img.onerror = finish; // don't block animations on a broken image
      img.src = src;
      // If the browser already has it cached, onload may never fire
      if (img.complete) finish();
      return img;
    });

    return () => {
      // Clean up: detach handlers so stale callbacks can't fire
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srcs.join(',')]);

  return loaded;
}

export default useImagesLoaded;
