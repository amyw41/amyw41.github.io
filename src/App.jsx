import { useEffect, useRef, useState, useMemo } from 'react'
import './App.css'

function App() {
  const wavyRef = useRef(null)
  const cursorCircleRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { wavePath, waveWidth, repeatedText, waveCycleWidth, viewBoxWidth } = useMemo(() => {
    // Original aesthetic relied on stretching the 1200 unit viewBox to ~3000px+ (approx 2.5x stretch).
    const STRETCH_FACTOR = 2.5
    // One full wave cycle in viewBox units (0,55 -> 600,55)
    // Down (0-300) + Up (300-600)
    const WAVE_UNIT_CYCLE = 600

    // We apply stretch to the coordinate system directly now to prevent text distortion.
    const VISUAL_CYCLE_WIDTH = WAVE_UNIT_CYCLE * STRETCH_FACTOR // 1500px

    // We want enough width to cover screen + buffer for scrolling loop (1 cycle)
    // DOUBLE the safety buffer and ensure we cover massive screens.
    const minWidth = windowWidth + (VISUAL_CYCLE_WIDTH * 2)
    const numCycles = Math.ceil(minWidth / VISUAL_CYCLE_WIDTH) + 2

    const totalViewBoxWidth = numCycles * VISUAL_CYCLE_WIDTH
    const totalPixelWidth = totalViewBoxWidth // 1:1 mapping since we stretched coordinates

    let path = `M0 120`
    for (let i = 0; i < numCycles; i++) {
      const xBase = i * VISUAL_CYCLE_WIDTH

      // Stretched control points
      // Amplitude increased significantly (120 to 240 -> Delta 120)
      const cp1x = xBase + 375
      const cp2x = xBase + 375
      const endX_Down = xBase + 750

      const cp3x = xBase + 1125
      const endX_Up = xBase + 1500

      path += ` C ${cp1x} 120, ${cp2x} 240, ${endX_Down} 240`
      path += ` S ${cp3x} 120, ${endX_Up} 120`
    }

    // Text repetition
    // Extreme repetition to prevent any gaps.
    const textBase = "see my work! "
    const textRepeats = Math.ceil(totalViewBoxWidth / 40)

    const text = textBase.repeat(textRepeats)

    return {
      wavePath: path,
      waveWidth: totalPixelWidth,
      viewBoxWidth: totalViewBoxWidth,
      repeatedText: text,
      waveCycleWidth: VISUAL_CYCLE_WIDTH
    }
  }, [windowWidth])

  useEffect(() => {
    const target = wavyRef.current
    if (!target) return

    let frame = 0
    const update = () => {
      frame = 0
      const scrollY = window.scrollY || 0
      const shift = (scrollY * 0.5) % waveCycleWidth
      target.style.setProperty('--wave-shift', `${shift}px`)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const circle = cursorCircleRef.current;
    if (!circle) return;
    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', moveCircle);
    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return (
    <>
      <div className="cursor-circle" ref={cursorCircleRef} />
      <nav className="taskbar">
        <span className="nav-left">home</span>
        <span className="nav-right">
          <span>work</span>
          <span>me</span>
          <span>play</span>
        </span>
      </nav>
      <section className="hero-gradient-container">
        <div className="hero-gradients" aria-hidden="true">
          <div className="page-gradient"></div>
          <div className="center-gradient"></div>
        </div>
        <main className="center-content">
          <h1 className="name">amy wang</h1>
          <div className="desc-group">
            <div className="desc-line align-desc">
              <span className="arrow">→</span>
              <span className="desc-text">
                is a product designer who uses <span className="desc-italic-bold">aesthetics</span> and <span className="desc-bold">makes it work.</span>
              </span>
            </div>
            <div className="desc-line align-desc">
              <span className="arrow">→</span>
              <span className="desc-text">
                currently studying management engineering @ waterloo!
              </span>
            </div>
          </div>
        </main>
        <div
          className="wavy-text"
          aria-hidden="true"
          ref={wavyRef}
          style={{
            width: '100vw',
            '--wave-range': `${waveCycleWidth}px`
          }}
        >
          <svg viewBox={`0 0 ${viewBoxWidth} 400`} style={{ width: waveWidth, height: '100%' }}>
            <path
              id="wave-path"
              d={wavePath}
              fill="none"
            />
            <text className="wavy-text-label">
              <textPath href="#wave-path" startOffset="-1000">
                {repeatedText}
              </textPath>
            </text>
          </svg>
        </div>
      </section>
      <section className="project-preview-row">
        <div className="project-preview-box">
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">relish</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
              <span className="project-preview-date">2025</span>
            </div>
          </div>
        </div>
        <div className="project-preview-box">
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">Placeholder Name</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
              <span className="project-preview-date">2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="project-preview-row">
        <div className="project-preview-box">
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">relish</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
              <span className="project-preview-date">2025</span>
            </div>
          </div>
        </div>
        <div className="project-preview-box">
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">Placeholder Name</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
              <span className="project-preview-date">2026</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
