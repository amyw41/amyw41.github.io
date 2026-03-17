import { useEffect } from 'react'
import '../App.css'
import woongki from '../assets/art-woongki.jpg'
import zaizai from '../assets/art-zaizai.jpg'
import yuri from '../assets/art-yuri.jpg'
import chihen from '../assets/art-chihen.jpg'
import minase from '../assets/art-minase.jpg'

function Play() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="play-gradient" aria-hidden="true"></div>
      <section className="page-container play-container">
        <h1 className="about-title">In my free time, I dabble in a little art.</h1>

        <div className="play-gallery-grid" style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
          {/* Column 1 */}
          <div className="play-gallery-col">
            <div className="play-item">
              <img src={woongki} alt="Woongki" className="play-art-img" />
              <div className="play-caption">
                <span>AHOF - Cha Woongki</span>
                <span>2023</span>
              </div>
            </div>
            <div className="play-item">
              <img src={zaizai} alt="Zaizai" className="play-art-img" />
              <div className="play-caption">
                <span>Niu Zaizai</span>
                <span>2023</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="play-gallery-col">
            <div className="play-item">
              <img src={yuri} alt="Yuri" className="play-art-img" />
              <div className="play-caption">
                <span>Squid Game - Jo Yuri (Player 222)</span>
                <span>2025</span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="play-gallery-col">
            <div className="play-col-stack">
              <div className="play-item">
                <img src={chihen} alt="Chihen" className="play-art-img" />
                <div className="play-caption">
                  <span>[WIP] AHOF - Chihen</span>
                  <span>2026</span>
                </div>
              </div>
              <div className="play-item">
                <img src={minase} alt="Minase" className="play-art-img" />
                <div className="play-caption">
                  <span>[WIP] Junsei Motojima</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Play;
