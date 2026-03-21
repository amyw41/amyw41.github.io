import { Link } from 'react-router-dom'
import '../App.css'

function Amazon() {
    return (
        <div className="project-detail-page relish-page-container">
            <Link to="/" className="sidebar-back" style={{ position: 'fixed', top: '80px', left: '4rem', zIndex: 100 }}>
                <span className="back-arrow">←</span> HOME
            </Link>
            <section className="project-hero">
                <h1 className="project-title">Amazon through a UX lens</h1>
                <div className="project-meta-info">
                    <span className="project-tag">UX Research</span>
                    <span className="project-tag">UX Design</span>
                </div>
                <div className="project-subtitle">UX REDESIGN CASE STUDY • 2025</div>
            </section>

            <section className="project-content">
                <p>Project details coming soon...</p>
            </section>
        </div>
    )
}

export default Amazon
