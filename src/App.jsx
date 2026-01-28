import React, { useRef, useEffect, useState } from 'react';

function CurvedTextLoop() {
  const textRef = useRef(null);
  const [viewWidth, setViewWidth] = useState(1200);

  useEffect(() => {
    // Set initial width
    setViewWidth(window.innerWidth);

    // Handle resize
    const handleResize = () => setViewWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let frame;
    let offset = 0;
    const speed = 0.7;

    const animate = () => {
      if (textRef.current) {
        const width = textRef.current.getBBox().width;
        if (Math.abs(offset) > width / 2) offset = 0;
        textRef.current.setAttribute('startOffset', offset);
      }
      offset -= speed;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const phrase = 'see projects below!';
  const repeated = Array(20).fill(phrase).join(' • ');

  return (
    <div
      style={{
        width: '100vw',
        position: 'absolute',
        left: 0,
        margin: '48px 0',
        zIndex: 3,
      }}
    >
      <svg
        width="100%"
        height="110"
        viewBox={`0 0 ${viewWidth} 110`}
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <path
            id="wavePath"
            d={`M0,55 
              C${viewWidth / 6},0 
               ${viewWidth / 3},110 
               ${viewWidth / 2},55 
              S${(viewWidth * 5) / 6},0 
               ${viewWidth},55`}
          />
        </defs>

        <text
          fontFamily="'Playfair Display', serif"
          fontSize="3.8rem"
          fill="rgba(0,0,0,0.6)"
          letterSpacing="0.02em"
        >
          <textPath
            ref={textRef}
            href="#wavePath"
            startOffset="0"
          >
            {repeated.split('•').map((chunk, i) => (
              <tspan key={i}>
                {chunk}
                <tspan fill="transparent">•</tspan>
              </tspan>
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        fontFamily: 'serif',
      }}
    >
      {/* Background blob */}
      <div
        style={{
          position: 'absolute',
          top: '24%',
          left: '50%',
          transform: 'translate(-85%, -57%)',
          width: '480px',
          height: '200px',
          background:
            'radial-gradient(ellipse at center, #fea3a3 10%, rgba(254,163,163,0) 60%)',
          borderRadius: '50% / 40%',
          filter: 'blur(2px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Nav */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '2rem 100px',
          fontFamily: 'Raleway, sans-serif',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <button style={{ background: 'none', border: 'none' }}>home</button>
        <div style={{ display: 'flex', gap: '60px' }}>
          <button style={{ background: 'none', border: 'none' }}>me</button>
          <button style={{ background: 'none', border: 'none' }}>play</button>
        </div>
      </nav>

      {/* Hero */}
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '5rem',
            fontWeight: 400,
          }}
        >
          amy wang
        </h1>
      </main>

      <CurvedTextLoop />

      {/* Scroll section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '2rem', opacity: 0.7 }}>
          Project Section Placeholder
        </span>
      </section>
    </div>
  );
}

export default App;