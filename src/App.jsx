import React, { useRef, useEffect } from 'react';
// CurvedTextLoop component
function CurvedTextLoop() {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = React.useState(0);
  useEffect(() => {
    let frame;
    let offset = 0;
    const speed = 0.7; // px per frame
    function CurvedTextLoop() {
      const textRef = useRef(null);
      useEffect(() => {
        let frame;
        let offset = 0;
        const speed = 0.7; // px per frame
        const animate = () => {
          if (textRef.current) {
            // Reset offset for seamless loop
            if (Math.abs(offset) > textRef.current.getBBox().width / 2) {
              offset = 0;
            }
            textRef.current.setAttribute('startOffset', `${offset}`);
          }
          offset -= speed;
          frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
      }, []);

      // Repeat phrase with invisible dots for spacing
      const phrase = 'see projects below!';
      const repeated = Array(20).fill(phrase).join(' 7 '); // invisible dot (middot)

      return (
        <div style={{ width: '100vw', position: 'absolute', left: 0, right: 0, margin: '48px 0', zIndex: 3 }}>
          <svg
            width="100vw"
            height="110"
            viewBox={`0 0 ${window.innerWidth} 110`}
            style={{ display: 'block', width: '100vw', height: '110px', overflow: 'visible' }}
            preserveAspectRatio="none"
          >
            <defs>
              {/* Responsive wave path: 3 full sine waves across the width */}
              <path id="wavePath" d={`M0,55 C${window.innerWidth/6},0 ${(window.innerWidth/3)},110 ${(window.innerWidth/2)},55 S${window.innerWidth*5/6},0 ${window.innerWidth},55`} />
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
                side="left"
                method="align"
                spacing="auto"
              >
                {repeated.split('•').map((word, i) => (
                  <tspan key={i}>
                    {word.trim()}
                    <tspan fill="transparent">•</tspan>
                  </tspan>
                ))}
              </textPath>
            </text>
          </svg>
  }
      );
  function App() {
    return (
      <div style={{ minHeight: '100vh', minWidth: '100vw', background: 'transparent', position: 'relative', fontFamily: 'serif', padding: 0 }}>
        {/* Red circle background - fixed to viewport */}
        <div
          style={{
            position: 'absolute',
            top: '24%',
            left: '50%',
            transform: 'translate(-85%, -57%)',
            width: '480px',
            height: '200px',
            background: 'radial-gradient(ellipse at center, #fea3a3 10%, rgba(254,163,163,0.0) 60%)',
            borderRadius: '50% / 40%',
            zIndex: 1,
            pointerEvents: 'none',
            filter: 'blur(2px)',
          }}
        />
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 100px 0 100px', fontSize: '1.1rem', fontFamily: 'Raleway, sans-serif', position: 'relative', zIndex: 2 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>home</button>
          </a>
          <div style={{ display: 'flex', gap: '60px' }}>
            <a href="/me" style={{ textDecoration: 'none' }}>
              <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>me</button>
            </a>
            <a href="/play" style={{ textDecoration: 'none' }}>
              <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>play</button>
            </a>
          </div>
        </nav>
        <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'left', marginRight: '3rem' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 400, margin: 0 }}>amy wang</h1>
          </div>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>
            <div style={{ fontSize: '1.1rem' }}>
              <span>
                &rarr; is a product designer who uses <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontStyle: 'italic' }}>aesthetics</span> and <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700 }}>makes it work.</span>
              </span>
            </div>
            <div style={{ fontSize: '1.1rem' }}>
              <span>
                &rarr; currently studying management engineering @ waterloo!
              </span>
            </div>
          </div>
        </main>
        <CurvedTextLoop />

        {/* New scrollable section below */}
        <section style={{ minHeight: '100vh', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '2rem', color: '#222', opacity: 0.7 }}>
            {/* Replace this with your actual content */}
            <span>Project Section Placeholder</span>
          </div>
        </section>

      </div>
    );
  }









function App() {
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw', background: 'transparent', position: 'relative', fontFamily: 'serif', padding: 0 }}>
      {/* Red circle background - fixed to viewport */}
      <div
        style={{
          position: 'absolute',
          top: '24%',
          left: '50%',
          transform: 'translate(-85%, -57%)',
          width: '480px',
          height: '200px',
          background: 'radial-gradient(ellipse at center, #fea3a3 10%, rgba(254,163,163,0.0) 60%)',
          borderRadius: '50% / 40%',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'blur(2px)',
        }}
      />
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 100px 0 100px', fontSize: '1.1rem', fontFamily: 'Raleway, sans-serif', position: 'relative', zIndex: 2 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>home</button>
        </a>
        <div style={{ display: 'flex', gap: '60px' }}>
          <a href="/me" style={{ textDecoration: 'none' }}>
            <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>me</button>
          </a>
          <a href="/play" style={{ textDecoration: 'none' }}>
            <button style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.1rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5em 1em' }}>play</button>
          </a>
        </div>
      </nav>
      <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'left', marginRight: '3rem' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 400, margin: 0 }}>amy wang</h1>
        </div>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>
          <div style={{ fontSize: '1.1rem' }}>
            <span>
              &rarr; is a product designer who uses <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontStyle: 'italic' }}>aesthetics</span> and <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700 }}>makes it work.</span>
            </span>
          </div>
          <div style={{ fontSize: '1.1rem' }}>
            <span>
              &rarr; currently studying management engineering @ waterloo!
            </span>
          </div>
        </div>
      </main>
      <CurvedTextLoop />

      {/* New scrollable section below */}
      <section style={{ minHeight: '100vh', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '2rem', color: '#222', opacity: 0.7 }}>
          {/* Replace this with your actual content */}
          <span>Project Section Placeholder</span>
        </div>
      </section>

    </div>
  );

export default App;
