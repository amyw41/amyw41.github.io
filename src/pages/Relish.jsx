import { useEffect } from 'react'
import '../App.css'
import relishMain from '../assets/relish-main.png'
import relishForm from '../assets/relish-form.png'
import relishCalendar from '../assets/relish-calendar.png'

function Relish() {
    useEffect(() => {
        document.body.classList.add('relish-page');
        return () => document.body.classList.remove('relish-page');
    }, []);

    return (
        <div className="project-detail-page relish-page-container">
            <div className="relish-background-gradient"></div>
            <div className="relish-hero-container">
                <div className="relish-hero-content">
                    <h1 className="relish-title">relish</h1>
                    <div className="project-side-by-side-container">
                        <img src={relishMain} alt="Relish Main" className="project-side-img" />
                        <img src={relishForm} alt="Relish Form" className="project-side-img" />
                        <img src={relishCalendar} alt="Relish Calendar" className="project-side-img" />
                    </div>
                </div>
            </div>

            <div className="case-study-metadata-wrapper">
                <section className="metadata-row">
                    <div className="metadata-col">
                        <span className="metadata-label">ROLE</span>
                        <span className="metadata-value">Product Designer</span>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">TIMELINE</span>
                        <span className="metadata-value">August - September 2025</span>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">TEAM</span>
                        <span className="metadata-value">3 Designers</span>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">SKILLS</span>
                        <ul className="metadata-list">
                            <li>Product Design</li>
                            <li>Product Strategy</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="case-study-container">
                <aside className="case-study-sidebar">
                    <div className="sidebar-back">← BACK</div>
                    <nav className="sidebar-nav">
                        <ul>
                            <li className="active">Overview</li>
                            <li>Solution</li>
                            <li>Core Flows</li>
                            <li>Research</li>
                            <li>Exploring Form Factors</li>
                            <li>Prototyping and Testing</li>
                            <li>Design Decisions</li>
                            <li>Designing for Hardware Constraints</li>
                            <li>Reflection</li>
                        </ul>
                    </nav>
                </aside>

                <main className="case-study-content">
                    <section className="overview-section">
                        <span className="section-label">OVERVIEW</span>
                        <h2 className="overview-title">What should OpenAI build as their first AI device?</h2>
                        <p className="overview-subtitle">
                            As a team of 3 product designers, our goal was to land on a clear vision within 7 weeks.
                        </p>
                    </section>

                    <section className="process-grid">
                        <div className="process-col">
                            <h3>Product Strategy</h3>
                            <p>Thinking broadly about OpenAI, the AI landscape, and exploring widely in the solution space.</p>
                        </div>
                        <div className="process-col">
                            <h3>Prototyping & Testing</h3>
                            <p>Going wide in ideation and rapidly testing concepts with users.</p>
                        </div>
                        <div className="process-col">
                            <h3>Iterating with Feedback</h3>
                            <p>Continuously iterating on concepts and validating product decisions.</p>
                        </div>
                    </section>

                    <section className="problem-section">
                        <span className="section-label">PROBLEM</span>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Relish
