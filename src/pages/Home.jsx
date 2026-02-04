import { useEffect, useRef, useState, useMemo } from 'react'
import '../App.css'
import useScrollReveal from '../hooks/useScrollReveal'

function Home() {
  const wavyRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Refs for project boxes with staggered animation
  const box1Ref = useScrollReveal(0)
  const box2Ref = useScrollReveal(100)
  const box3Ref = useScrollReveal(200)
  const box4Ref = useScrollReveal(300)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { wavePath, waveWidth, repeatedText, waveCycleWidth, viewBoxWidth } = useMemo(() => {
    const STRETCH_FACTOR = 2.5
    const WAVE_UNIT_CYCLE = 600
    const VISUAL_CYCLE_WIDTH = WAVE_UNIT_CYCLE * STRETCH_FACTOR

    const minWidth = windowWidth + (VISUAL_CYCLE_WIDTH * 2)
    const numCycles = Math.ceil(minWidth / VISUAL_CYCLE_WIDTH) + 2

    const totalViewBoxWidth = numCycles * VISUAL_CYCLE_WIDTH
    const totalPixelWidth = totalViewBoxWidth

    let path = `M0 120`
    for (let i = 0; i < numCycles; i++) {
      const xBase = i * VISUAL_CYCLE_WIDTH
      const cp1x = xBase + 375
      const cp2x = xBase + 375
      const endX_Down = xBase + 750
      const cp3x = xBase + 1125
      const endX_Up = xBase + 1500

      path += ` C ${cp1x} 120, ${cp2x} 240, ${endX_Down} 240`
      path += ` S ${cp3x} 120, ${endX_Up} 120`
    }

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

    const update = () => {
      const scrollY = window.scrollY || 0
      const shift = (scrollY * 0.5) % waveCycleWidth
      target.style.setProperty('--wave-shift', `${shift}px`)
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
    }
  }, [waveCycleWidth])

  return (
    <>
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
              <textPath href="#wave-path" startOffset="-10">
                {repeatedText}
              </textPath>
            </text>
          </svg>
        </div>
      </section>
      <section id="work" className="project-preview-row">
        <div className="project-preview-box reveal-item" ref={box1Ref}>
          <div className="project-preview-square project-preview-square-first"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">3d data analysis & cool ocean visuals</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">Product Design</span>
              <span className="project-preview-tag">Hackathon</span>
            </div>
          </div>
          <div className="project-preview-subtitle">1ST OVERALL @ UOTTAHACKS • 2026</div>
        </div>
        <div className="project-preview-box reveal-item" ref={box2Ref}>
          <div className="project-preview-square project-preview-square-second"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">Make eating fun with cute hand-drawn icons</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">Product Design</span>
              <span className="project-preview-tag">Designathon</span>
            </div>
          </div>
          <div className="project-preview-subtitle">FIGMA MAKE-A-THON @ WATERLOO • 2025</div>
        </div>
      </section>

      <section className="project-preview-row">
        <div className="project-preview-box reveal-item" ref={box3Ref}>
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">relish</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
            </div>
          </div>
          <div className="project-preview-subtitle">Description here</div>
        </div>
        <div className="project-preview-box reveal-item" ref={box4Ref}>
          <div className="project-preview-square"></div>
          <div className="project-preview-info">
            <span className="project-preview-title">Placeholder Name</span>
            <div className="project-preview-meta">
              <span className="project-preview-tag">hackathon</span>
            </div>
          </div>
          <div className="project-preview-subtitle">Description here</div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">let's build something together !</div>
        <div className="footer-right">
          <a href="www.linkedin.com/in/amyw41"><span className="footer-symbol">𝜗𝜚⋆₊˚</span> <span className="footer-text">linkedin</span></a>
          <a href="https://x.com/apriberri"><span className="footer-symbol">𐙚⋆.˚</span> <span className="footer-text">x/twitter</span></a>
        </div>
      </footer>
    </>
  );
}

export default Home
