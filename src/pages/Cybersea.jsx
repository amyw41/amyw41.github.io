import { useEffect, useState } from 'react'
import '../App.css'
import useScrollReveal from '../hooks/useScrollReveal'
import relishMain from '../assets/relish-main.png'
import relishForm from '../assets/relish-form.png'
import relishCalendar from '../assets/relish-calendar.png'
import relishLockscreen from '../assets/relish-lockscreen.png'
import relishFeed from '../assets/relish-feed.png'
import bereal1 from '../assets/bereal-1.jpg'
import bereal2 from '../assets/bereal-2.jpg'
import beli1 from '../assets/beli-1.jpg'
import beli2 from '../assets/beli-2.jpg'
import roughSketch from '../assets/rough-sketch.png'
import relishListSketch from '../assets/relish-list-sketch.jpg'
import relishCalendarSketch from '../assets/relish-calendar-sketch.jpg'
import cyberseaDemo from '../assets/cybersea-demo.gif'
import cyberseaGlobe from '../assets/cybersea-globe-new.png'
import cyberseaModel from '../assets/cybersea-model.png'
import cyberseaHero from '../assets/cybersea-hero-new.png'
import personaBen from '../assets/persona-ben.png'
import personaAlex from '../assets/persona-alex.png'
import personaCam from '../assets/persona-cam.png'

const sectionsData = [
    { id: 'overview', title: 'Overview' },
    { id: 'users', title: 'Users' },
    { id: 'solution', title: 'Solution' },
    { id: 'competitive-analysis', title: 'Competitive Analysis' },
    { id: 'rough-draft', title: 'Rough Draft' },
    { id: 'reflection', title: 'Reflection' },
];

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="persona-icon">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" className="list-icon">
        <rect width="24" height="24" rx="4" fill="#1a1a1a" />
        <path d="M7 12.5l3 3 7-7" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CrossIcon = () => (
    <svg viewBox="0 0 24 24" className="list-icon">
        <rect width="24" height="24" rx="4" fill="#1a1a1a" />
        <path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function Cybersea() {
    const [activeSection, setActiveSection] = useState('overview');

    // Reveal refs for different sections
    const metadataRef = useScrollReveal(0);

    useEffect(() => {
        const activeItem = document.querySelector('.sidebar-nav li.active');
        if (activeItem) {
            activeItem.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [activeSection]);

    useEffect(() => {
        document.body.classList.add('relish-page');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -45% 0px' }
        );

        sectionsData.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => {
            document.body.classList.remove('relish-page');
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="project-detail-page relish-page-container page-fade-in">
            <div className="cybersea-background-gradient"></div>
            <div className="relish-hero-container">
                <div className="relish-hero-content">
                    <h1 className="relish-title load-reveal stagger-1">CyberSea</h1>
                    <p className="relish-subtitle load-reveal stagger-2">A real-time Arctic strategy simulator designed <br className="mobile-break" />to simplify military data.</p>
                    <div className="cybersea-hero-video-container load-reveal stagger-3">
                        <img src={cyberseaDemo} alt="Cybersea Demo" className="cybersea-hero-video" />
                    </div>
                </div>
            </div>

            <div className="case-study-metadata-wrapper reveal-item" ref={metadataRef}>
                <section className="metadata-row">
                    <div className="metadata-col">
                        <span className="metadata-label">TIMELINE</span>
                        <span className="metadata-value">January 2026 (72h)</span>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">TEAM</span>
                        <ul className="metadata-list">
                            <li>1 designer (me!)</li>
                            <li>2 developers</li>
                            <li>1 PM</li>
                        </ul>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">ROLE</span>
                        <ul className="metadata-list">
                            <li>Product Designer</li>
                            <li>Visual Design</li>
                        </ul>
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
                    <nav className="sidebar-nav">
                        <ul>
                            {sectionsData.map((section) => (
                                <li
                                    key={section.id}
                                    className={activeSection === section.id ? 'active' : ''}
                                >
                                    <button
                                        className="sidebar-button"
                                        onClick={() => scrollToSection(section.id)}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="case-study-content">
                    <div id="overview" className="problem-section">
                        <span className="section-label">OUR PROMPT</span>
                        <h2 className="overview-title">The Thales Challenge:</h2>

                        <div className="timeline-container">
                            <div className="timeline-point">
                                <p className="section-body">
                                    Design and build a Real-Time Strategy (RTS) simulator that models trade route patrol and natural resource protection operations in the Canadian Arctic. This should enable leadership teams to identify the most sustainable strategies for resource utilization.
                                </p>
                            </div>
                            <div className="timeline-point" style={{ marginTop: '3rem' }}>
                                <h3 className="section-subtitle" style={{ fontStyle: 'italic', fontWeight: '700', fontSize: '1.3rem', color: '#1a1a1a', marginBottom: '0.8rem' }}>TLDR:</h3>
                                <p className="section-body" style={{ color: '#1a1a1a', fontWeight: '400', fontStyle: 'italic', fontSize: '1.3rem', marginTop: '0' }}>
                                    Design a Real-Time Strategy simulator where trade routes are modelled to combat the <b>constantly changing conditions</b> of the Arctic sea.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="users" className="problem-section">
                        <span className="section-label">USERS</span>

                        <div className="persona-column" style={{ paddingLeft: '0' }}>
                            <div className="user-list-card">
                                <div className="user-list-header">
                                    <div className="user-list-icon">
                                        <UserIcon />
                                    </div>
                                    <h4 className="user-list-title">Professionals <span style={{ color: '#888', fontStyle: 'italic', fontSize: '1.2rem', fontFamily: 'Raleway', fontWeight: '500', marginLeft: '0.5rem' }}>(The military, government, etc.)</span></h4>
                                </div>
                                <div className="user-timeline-wrapper">
                                    <div className="user-timeline-item">
                                        <h5 className="user-timeline-title">a) Needs</h5>
                                        <ul className="section-list" style={{ marginBottom: 0, marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                            <li>Easy-to-use interface for quick, high-stakes decisions.</li>
                                            <li>Accurate data that can easily be seen and implemented.</li>
                                        </ul>
                                    </div>
                                    <div className="user-timeline-item">
                                        <h5 className="user-timeline-title">b) Constraint</h5>
                                        <div className="callout-wrapper">
                                            <div className="callout-block">
                                                <span className="callout-label">The Problem</span>
                                                <p className="callout-text">
                                                    How do we allow for the features to be as <b>informational</b> as possible?
                                                </p>
                                            </div>
                                            <div className="callout-block">
                                                <span className="callout-label">The Solution</span>
                                                <ul className="section-list callout-text" style={{ marginBottom: 0, paddingLeft: '1.2rem', marginTop: 0 }}>
                                                    <li>Included many features involving data (i.e. mesh split, 2 types of views, nano banana AI image generator)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-solution-container">
                                        <img src={cyberseaGlobe} alt="Globe visual" className="user-solution-img" />
                                        <div className="user-solution-text-container">
                                            <span className="user-solution-label">Our Approach</span>
                                            <span className="user-solution-desc">An interactive globe visual + data dashboard to keep info organized.</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="user-list-card">
                                <div className="user-list-header">
                                    <div className="user-list-icon">
                                        <UserIcon />
                                    </div>
                                    <h4 className="user-list-title">The Every Day User</h4>
                                </div>
                                <div className="user-timeline-wrapper">
                                    <div className="user-timeline-item">
                                        <h5 className="user-timeline-title">a) Needs</h5>
                                        <ul className="section-list" style={{ marginBottom: 0, marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                            <li>An intuitive interface that isn't overly technical.</li>
                                            <li>Real-time weather, ice thickness, and seasonal pattern monitoring.</li>
                                        </ul>
                                    </div>
                                    <div className="user-timeline-item">
                                        <h5 className="user-timeline-title">b) Constraint</h5>
                                        <div className="callout-wrapper">
                                            <div className="callout-block">
                                                <span className="callout-label">The Problem</span>
                                                <p className="callout-text">
                                                    How do we balance the <b>simplicity</b> for the user with the <b>complexity</b> necessary for the app to be useful?
                                                </p>
                                            </div>
                                            <div className="callout-block">
                                                <span className="callout-label">The Solution</span>
                                                <ul className="section-list callout-text" style={{ marginBottom: 0, paddingLeft: '1.2rem', marginTop: 0 }}>
                                                    <li>Ensuring the product is <b>visually engaging</b> and includes <b>moments of delight.</b></li>
                                                    <li>Balance accessibility and depth by combining <b>foundational information</b> (model components) with <b>real data</b> relevant to professionals (ice thickness, visibility, etc).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-solution-container">
                                        <img src={cyberseaHero} alt="Hero dashboard" className="user-solution-img" />
                                        <div className="user-solution-text-container">
                                            <span className="user-solution-label">Our Approach</span>
                                            <span className="user-solution-desc">A visually engaging interface with animated waves for delight!</span>
                                        </div>
                                    </div>
                                    <div className="user-solution-container">
                                        <img src={cyberseaModel} alt="Model visual" className="user-solution-img" />
                                        <div className="user-solution-text-container">
                                            <span className="user-solution-label">Our Approach</span>
                                            <span className="user-solution-desc">AI generated descriptions for each model component.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="solution" className="problem-section">
                        <span className="section-label">SOLUTION</span>
                        <p className="overview-title solution-main-heading">How does Relish address their problems?</p>

                        <div className="solution-layout">
                            {/* Images stacked vertically on the left */}
                            <div className="solution-images">
                                <img src={relishLockscreen} alt="Relish Lockscreen" className="project-side-img solution-img" />
                                <img src={relishFeed} alt="Relish Feed" className="project-side-img solution-img" />
                            </div>

                            {/* Personas stacked vertically on the right */}
                            <div className="solution-text">
                                <div className="solution-persona">
                                    <div className="solution-persona-header">
                                        <div className="persona-icon-wrapper solution-persona-icon">
                                            <img src={personaAlex} alt="Alex" className="persona-img-circle" />
                                        </div>
                                        <h4 className="persona-name">Alex:</h4>
                                    </div>
                                    <ul className="solution-list">
                                        <li>Now can track everything she eats in a calendar view.</li>
                                        <li>Helps hold her accountable when she can see all her meals laid out in front of her.</li>
                                    </ul>
                                </div>

                                <div className="solution-persona">
                                    <div className="solution-persona-header">
                                        <div className="persona-icon-wrapper solution-persona-icon">
                                            <img src={personaBen} alt="Ben" className="persona-img-circle" />
                                        </div>
                                        <h4 className="persona-name">Ben:</h4>
                                    </div>
                                    <ul className="solution-list">
                                        <li>Receives a <strong>notification</strong> to remind him to eat.</li>
                                        <li>Is motivated to eat so he can fill out his calendar.</li>
                                    </ul>
                                </div>

                                <div className="solution-persona">
                                    <div className="solution-persona-header">
                                        <div className="persona-icon-wrapper solution-persona-icon">
                                            <img src={personaCam} alt="Cam" className="persona-img-circle" />
                                        </div>
                                        <h4 className="persona-name">Cam:</h4>
                                    </div>
                                    <ul className="solution-list">
                                        <li>Can keep up with his friends and what they eat on the "Friends" tab, making him feel less lonely!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="competitive-analysis" className="problem-section">
                        <span className="section-label">COMPETITIVE ANALYSIS</span>
                        <p className="overview-title">
                            Researching similar apps & understanding why they work
                        </p>

                        <p className="comp-sub-title">01 BeReal</p>
                        <div className="comp-section-row">
                            <div className="comp-analysis-grid">
                                <div className="comp-card">
                                    <div className="comp-img-wrapper">
                                        <img src={bereal1} alt="BeReal Profile" className="comp-img" />
                                    </div>
                                    <span className="comp-card-label">BEREAL: USER PROFILE & HISTORY</span>
                                </div>
                                <div className="comp-card">
                                    <div className="comp-img-wrapper">
                                        <img src={bereal2} alt="BeReal Calendar" className="comp-img" />
                                    </div>
                                    <span className="comp-card-label">BEREAL: MONTHLY CALENDAR VIEW</span>
                                </div>
                            </div>
                            <div className="comp-text-content">
                                <ul className="comp-bullets">
                                    <li>Sends a <strong>notification</strong> to users every day, reminding them to take a pic.</li>
                                    <li>Assembles pics into a <strong>calendar view</strong>.</li>
                                </ul>
                                <div className="comp-pros-cons">
                                    <div className="comp-pros">
                                        <p className="comp-pros-cons-label">Pros:</p>
                                        <ul className="comp-pros-cons-list">
                                            <li>The calendar view is very clean and easy to navigate.</li>
                                        </ul>
                                    </div>
                                    <div className="comp-cons">
                                        <p className="comp-pros-cons-label">Cons:</p>
                                        <ul className="comp-pros-cons-list">
                                            <li>Not enough motivation to take a pic every day.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="comp-sub-title">02 Beli</p>
                        <div className="comp-section-row">
                            <div className="comp-analysis-grid">
                                <div className="comp-card">
                                    <div className="comp-img-wrapper">
                                        <img src={beli1} alt="Beli Rating" className="comp-img" />
                                    </div>
                                    <span className="comp-card-label">BELI: INTERACTIVE RATING SYSTEM</span>
                                </div>
                                <div className="comp-card">
                                    <div className="comp-img-wrapper">
                                        <img src={beli2} alt="Beli Lists" className="comp-img" />
                                    </div>
                                    <span className="comp-card-label">BELI: SEARCH & PERSONALIZED LISTS</span>
                                </div>
                            </div>
                            <div className="comp-text-content">
                                <ul className="comp-bullets">
                                    <li>Tracks restaurants by allowing users to fill out and <strong>rate</strong> every restaurant they try.</li>
                                </ul>
                                <div className="comp-pros-cons">
                                    <div className="comp-pros">
                                        <p className="comp-pros-cons-label">Pros:</p>
                                        <ul className="comp-pros-cons-list">
                                            <li>Organized way for users to keep track of restaurants.</li>
                                        </ul>
                                    </div>
                                    <div className="comp-cons">
                                        <p className="comp-pros-cons-label">Cons:</p>
                                        <ul className="comp-pros-cons-list">
                                            <li>Users may not be able to constantly try new restaurants.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rough-draft" className="problem-section">
                        <span className="section-label">ROUGH DRAFT</span>
                        <p className="overview-title">Designing & iterating quickly</p>
                        <p className="comp-sub-title">a) Rough sketches</p>
                        <img src={roughSketch} alt="Rough Sketch of Relish app screens" className="rough-sketch-img" />
                        <span className="section-label" style={{ marginTop: '5rem' }}>DESIGN CHOICES</span>
                        <p className="comp-sub-title" style={{ marginTop: '1rem' }}>a) Calendar vs. List View</p>

                        <div className="comparison-container">
                            <div className="comparison-col">
                                <img src={relishCalendarSketch} alt="Relish Calendar Sketch" className="comparison-img" />
                                <div className="comparison-card" style={{ backgroundColor: '#f7f7f7' }}>
                                    <ul className="comparison-list">
                                        <li><CheckIcon /> Easy to visualize</li>
                                        <li><CheckIcon /> Encourages streak mentality</li>
                                        <li><CheckIcon /> Good for habit formation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comparison-col">
                                <img src={relishListSketch} alt="Relish List Sketch" className="comparison-img" />
                                <div className="comparison-card" style={{ backgroundColor: '#f7f7f7' }}>
                                    <ul className="comparison-list">
                                        <li><CheckIcon /> Better for detailed browsing</li>
                                        <li><CrossIcon /> Too dense and difficult to navigate</li>
                                        <li><CrossIcon /> Unable to easily see patterns and habits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="reflection" className="problem-section">
                        <span className="section-label">REFLECTION</span>
                        <p className="overview-title">What would I have done different?</p>
                        <div className="reflection-grid">
                            <div className="reflection-col">
                                <h3 className="reflection-heading reflection-heading--cursive">shift my priorities.</h3>
                                <p className="section-body">I would focus less on the unrealistic ties to the prompt and focus more on the <strong>impact</strong> it has on the users.</p>
                            </div>
                            <div className="reflection-col">
                                <h3 className="reflection-heading reflection-heading--cursive">More low-fidelity prototypes.</h3>
                                <p className="section-body">I would create different <strong>solutions</strong> to the problem, taking advantage of others' <strong>feedback.</strong></p>
                            </div>
                            <div className="reflection-col">
                                <h3 className="reflection-heading reflection-heading--cursive">Accessibility.</h3>
                                <p className="section-body">An essential factor that is often overlooked to implement aesthetics. I would recreate certain parts of Relish to allow for <strong>more accessible usage</strong>, such as increasing the size of each meal on the calendars.</p>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    )
}

export default Cybersea
