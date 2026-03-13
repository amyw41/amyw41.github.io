import { useEffect } from 'react'
import '../App.css'
import art1 from '../assets/play-art-1.jpg'
import art2 from '../assets/play-art-2.jpg'
import art3 from '../assets/play-art-3.jpg'
import art4 from '../assets/play-art-4.jpg'
import art5 from '../assets/play-art-5.jpg'

function Play() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="project-detail-page page-fade-in" style={{ padding: '8vw 8vw' }}>

      <div className="play-gallery-grid" style={{ marginTop: '0' }}>
        <img src={art2} alt="Cow print sketch" className="play-art-img" />
        <img src={art3} alt="Pencil portrait sketch" className="play-art-img" />
        <img src={art4} alt="Camera and mask girl" className="play-art-img" />
        <img src={art1} alt="Profile painting" className="play-art-img" />
        <img src={art5} alt="Profile pencil sketch" className="play-art-img" />
      </div>

    </div>
  );
}

export default Play;

