import { useEffect, useRef, useState, useMemo } from 'react'
import '../App.css'
import useScrollReveal from '../hooks/useScrollReveal'
import cyberseaImg from '../assets/cybersea_new.png'
import relishMain from '../assets/relish-main.png'
import relishForm from '../assets/relish-form.png'
import relishCalendar from '../assets/relish-calendar.png'
import amazon1 from '../assets/amazon 1.png'
import amazon2 from '../assets/amazon 2.png'
import amazon3 from '../assets/amazon 3.png'

function Home() {
  const wavyRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Refs for project boxes with staggered animation
  const box1Ref = useScrollReveal(0)
  const box2Ref = useScrollReveal(100)
  const box3Ref = useScrollReveal(200)
  const box4Ref = useScrollReveal(300)
  const box5Ref = useScrollReveal(0)
  const box6Ref = useScrollReveal(100)

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
                is a product designer who uses <span className="desc-italic-bold">aesthetics</span> and<br className="mobile-break" /> <span className="desc-bold">makes it work.</span>
              </span>
            </div>
            <div className="desc-line align-desc">
              <span className="arrow">→</span>
              <span className="desc-text">
                currently studying management engineering<br className="mobile-break" /> @ waterloo!
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
      <section id="work" className="projects-container">
        <div className="project-preview-row">
          <div className="project-preview-box reveal-item" ref={box1Ref}>
            <div className="project-preview-square project-preview-square-first">
              <img src={cyberseaImg} alt="Cybersea Project UI" className="project-img" />
            </div>
            <div className="project-preview-info">
              <span className="project-preview-title">3D mesh playground & cool ocean visuals</span>
              <div className="project-preview-meta">
                <span className="project-preview-tag">Product Design</span>
                <span className="project-preview-tag">Hackathon</span>
              </div>
            </div>
            <div className="project-preview-subtitle">1ST OVERALL @ UOTTAHACKS • 2026</div>
          </div>
          <div className="project-preview-box reveal-item" ref={box2Ref}>
            <div className="project-preview-square project-preview-square-second">
              <div className="project-side-by-side-container">
                <img src={relishMain} alt="Relish Main" className="project-side-img" />
                <img src={relishForm} alt="Relish Form" className="project-side-img" />
                <img src={relishCalendar} alt="Relish Calendar" className="project-side-img" />
              </div>
            </div>
            <div className="project-preview-info">
              <span className="project-preview-title">Making food fun w hand-drawn icons</span>
              <div className="project-preview-meta">
                <span className="project-preview-tag">Mobile App</span>
                <span className="project-preview-tag">Designathon</span>
                <span className="project-preview-tag">Product Design</span>
              </div>
            </div>
            <div className="project-preview-subtitle">FIGMA MAKE-A-THON • 2025</div>
          </div>
        </div>

        <div className="project-preview-row">
          <div className="project-preview-box reveal-item" ref={box3Ref}>
            <div className="project-preview-square project-preview-square-third">
              <div className="project-side-by-side-container">
                <img src={amazon1} alt="Amazon 1" className="project-side-img" />
                <img src={amazon2} alt="Amazon 2" className="project-side-img" />
                <img src={amazon3} alt="Amazon 3" className="project-side-img" />
              </div>
            </div>
            <div className="project-preview-info">
              <span className="project-preview-title">Amazon through a UX lense</span>
              <div className="project-preview-meta">
                <span className="project-preview-tag">UX Research</span>
                <span className="project-preview-tag">UX Design</span>
              </div>
            </div>
            <div className="project-preview-subtitle">UX REDESIGN CASE STUDY • 2025</div>
          </div>
          <div className="project-preview-box reveal-item" ref={box4Ref}>
            <div className="project-preview-square project-preview-square-fourth"></div>
            <div className="project-preview-info">
              <span className="project-preview-title">Placeholder Name</span>
              <div className="project-preview-meta">
                <span className="project-preview-tag">hackathon</span>
              </div>
            </div>
            <div className="project-preview-subtitle">Description here</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">let's build something together !</div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/amyw41" target="_blank" rel="noopener noreferrer"><span className="footer-symbol">𝜗𝜚⋆₊˚</span> <span className="footer-text">linkedin</span></a>
          <a href="https://x.com/apriberri" target="_blank" rel="noopener noreferrer"><span className="footer-symbol">𐙚⋆.˚</span> <span className="footer-text">x/twitter</span></a>
        </div>
      </footer>
    </>
  );
}

export default Home
