import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const wavyRef = useRef(null)

  useEffect(() => {
    const target = wavyRef.current
    if (!target) return

    let frame = 0
    const update = () => {
      frame = 0
      const scrollY = window.scrollY || 0
      const shift = (scrollY * 0.5) % 800
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

  return (
    <>
      <nav className="taskbar">
        <span className="nav-left">home</span>
        <span className="nav-right">
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
            <div className="desc-line">
              <span className="arrow">→</span>
              <span>
                is a product designer who uses <span className="desc-italic-bold">aesthetics</span> and <span className="desc-bold">makes it work.</span>
              </span>
            </div>
            <div className="desc-line">
              <span className="arrow">→</span>
              <span>
                currently studying management engineering @ waterloo!
              </span>
            </div>
          </div>
        </main>
        <div className="wavy-text" aria-hidden="true" ref={wavyRef}>
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none">
            <path
              id="wave-path"
              d="M0 55 C 150 55 150 105 300 105 S 450 55 600 55 S 750 105 900 105 S 1050 55 1200 55 S 1350 105 1500 105"
              fill="none"
            />
            <text className="wavy-text-label">
              <textPath href="#wave-path" startOffset="100">
                see my work! see my work! see my work! see my work! see my work!
              </textPath>
            </text>
          </svg>
        </div>
      </section>
      {/* New scrollable section below */}
      <section className="scrollable-section">
        <div className="project-grid">
          {[1,2,3,4].map((i) => (
            <div className="project-card" key={i}>
              <div className="project-image-placeholder"></div>
              <div className="project-info">
                <div className="project-index">0{i}. <span className="project-title">Break the Ice ↗</span></div>
                <div className="project-desc">
                  <span className="project-type">product design</span> — an app to help students make friends by utilizing the sociology concept of “third places”
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App
