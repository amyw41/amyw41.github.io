import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import cybersea_button_ex_1 from '../assets/cybersea-button-ex-1.png'
import cybersea_button_ex_2 from '../assets/cybersea-button-ex-2.png'
import cyberseaBeforeDropdown from '../assets/cybersea-before-dropdown.png'
import cyberseaAfterDropdown from '../assets/cybersea-after-dropdown.png'
import cyberseaBeforePanel from '../assets/cybersea-before-panel.png'
import cyberseaAfterPanel from '../assets/cybersea-after-panel.png'
import cyberseaBeforePanel2 from '../assets/cybersea-before-panel-2.png'
import cyberseaAfterPanel2 from '../assets/cybersea-after-panel-2.png'
import cyberseaRough1 from '../assets/cybersea-rough-1-new.png'
import cyberseaRough2 from '../assets/cybersea-rough-2.png'

const sectionsData = [
    { id: 'overview', title: 'Overview' },
    { id: 'users', title: 'Users' },
    { id: 'problem-1', title: 'Design Challenge' },
    { id: 'solution', title: 'Solution', nested: true, parentId: 'problem-1' },
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
            <div className="cybersea-hero-container">
                <div className="cybersea-hero-content">
                    <h1 className="cybersea-title load-reveal stagger-1">CyberSea</h1>
                    <p className="cybersea-subtitle load-reveal stagger-2">A real-time Arctic strategy simulator designed <br className="mobile-break" />to simplify military data.</p>
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
                    <Link to="/" className="sidebar-back">
                        <span className="back-arrow">←</span> HOME
                    </Link>
                    <nav className="sidebar-nav">
                        <ul>
                            {sectionsData.map((section) => {
                                const isExpanded = !section.nested || activeSection === section.id || activeSection === section.parentId;
                                return (
                                    <li
                                        key={section.id}
                                        className={`${activeSection === section.id ? 'active' : ''} ${section.nested ? 'nested-nav-item' : ''} ${isExpanded ? 'expanded' : ''}`}
                                    >
                                        <button
                                            className="sidebar-button"
                                            onClick={() => scrollToSection(section.id)}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                );
                            })}
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
                                    <div className="persona-icon-wrapper user-list-icon" style={{ backgroundColor: '#eeeeee' }}>
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
                                    <div className="persona-icon-wrapper user-list-icon" style={{ backgroundColor: '#eeeeee' }}>
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

                    <div id="problem-1" className="problem-section">
                        <span className="section-label">DESIGN CHALLENGE</span>
                        <div className="comp-section-row" style={{ alignItems: 'flex-start', marginTop: '1.5rem' }}>
                            <div style={{ flex: 1 }}>
                                <h3 className="problem-title">PROBLEM #1:</h3>
                                <p className="problem-description">How can we <b>maximize clarity</b> without compromising visual design?</p>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div className="timeline-container" style={{ marginTop: 0 }}>
                                    <div className="timeline-point">
                                        <p className="section-body">Hackathons require projects to look <b>as unique</b> and <b>aesthetically pleasing</b> as possible.</p>
                                    </div>
                                    <div className="timeline-point" style={{ marginTop: '2rem' }}>
                                        <p className="section-body">We need to find a balance between <b>data density</b> and <b>readability</b>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="solution" className="problem-section">
                        <span className="section-label">SOLUTION</span>
                        <p className="section-body">We introduced a distinctive visual style through subtle animations and thoughtful use of empty space, ensuring the interface felt engaging without compromising clarity.</p>

                        <div className="ui-example-container" style={{ marginTop: '3rem' }}>
                            <p className="comp-sub-title" style={{ marginTop: 0, marginBottom: '2rem' }}>a) Buttons</p>
                            <div className="ui-example-row" style={{ paddingTop: 0 }}>
                                <div className="ui-example-img-wrapper">
                                    <img src={cybersea_button_ex_1} alt="Military button hover" className="ui-example-img" />
                                </div>
                                <div className="ui-example-label">Military style button hover</div>
                            </div>
                            <div className="ui-example-row">
                                <div className="ui-example-img-wrapper">
                                    <img src={cybersea_button_ex_2} alt="Not on all buttons" className="ui-example-img" style={{ objectPosition: 'center bottom' }} />
                                </div>
                                <div className="ui-example-label">But not on all buttons!</div>
                            </div>

                            <div style={{ marginTop: '2.5rem' }}>
                                <p className="comp-sub-title" style={{ marginBottom: '1.5rem' }}>b) Color Scheme</p>
                                <p className="section-body">Using an intentional and consistent color scheme helps the product look more cohesive.</p>
                                <div className="color-palette-pill" style={{ marginTop: '1rem' }}>
                                    <div className="color-segment"><div className="color-dot" style={{ backgroundColor: '#186172' }}></div></div>
                                    <div className="color-segment"><div className="color-dot" style={{ backgroundColor: '#0f3f57' }}></div></div>
                                    <div className="color-segment"><div className="color-dot" style={{ backgroundColor: '#080808' }}></div></div>
                                    <div className="color-segment"><div className="color-dot" style={{ backgroundColor: '#3d80fd' }}></div></div>
                                    <div className="color-segment"><div className="color-dot" style={{ backgroundColor: '#fe3e46' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="design-process" className="problem-section">
                        <span className="section-label">DESIGN PROCESS</span>
                        <h2 className="overview-title">Iterating on Visual Hierarchy</h2>

                        <div className="ui-example-container">
                            <h3 className="comp-sub-title">01 Dropdown Menu</h3>
                            <div className="before-after-grid">
                                <div className="comparison-col">
                                    <span className="comparison-label before">BEFORE</span>
                                    <div className="comparison-img-box">
                                        <img src={cyberseaBeforeDropdown} alt="Before dropdown" className="comparison-img" />
                                    </div>
                                    <ul className="comparison-bullets">
                                        <li>Dropdown menu, making it difficult to see all options</li>
                                        <li>Too much empty space around the page</li>
                                        <li>Red selection box made navigation less clear</li>
                                    </ul>
                                </div>
                                <div className="comparison-col">
                                    <span className="comparison-label after">AFTER</span>
                                    <div className="comparison-img-box">
                                        <img src={cyberseaAfterDropdown} alt="After dropdown" className="comparison-img" />
                                    </div>
                                    <ul className="comparison-bullets">
                                        <li>Simpler and easier on the eyes</li>
                                        <li>Lists all options out, allowing user to scan the page faster</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="ui-example-container">
                            <h3 className="comp-sub-title">02 Action Panels</h3>
                            <div className="before-after-grid">
                                <div className="comparison-col">
                                    <span className="comparison-label before">BEFORE</span>
                                    <div className="comparison-img-box">
                                        <img src={cyberseaBeforePanel} alt="Before panel" className="comparison-img" />
                                    </div>
                                    <ul className="comparison-bullets">
                                        <li>Button hierarchy is unclear as both boxes are the same color</li>
                                    </ul>
                                </div>
                                <div className="comparison-col">
                                    <span className="comparison-label after">AFTER</span>
                                    <div className="comparison-img-box">
                                        <img src={cyberseaAfterPanel} alt="After panel" className="comparison-img" />
                                    </div>
                                    <ul className="comparison-bullets">
                                        <li>Highlights the primary section by differentiating the button colors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="rough-draft" className="problem-section">
                        <span className="section-label">ROUGH DRAFT</span>
                        <h2 className="overview-title">Early Concept Exploration</h2>

                        <div className="comp-section-row" style={{ alignItems: 'stretch', marginTop: '3rem', marginBottom: '3.5rem' }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <img src={cyberseaRough2} alt="Rough sketch of the interface panels" className="rough-sketch-img" style={{ borderRadius: '4px', height: '100%', objectFit: 'cover', marginTop: 0 }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="comp-sub-title" style={{ marginTop: 0, marginBottom: '0.5rem' }}>01 Globe</h3>
                                <p className="section-body" style={{ marginBottom: '1.2rem' }}>
                                    We explored the idea of using a globe to represent the impact of our project <b>on the world</b>.
                                </p>
                                <div className="rejection-box">
                                    <p className="rejection-box-title">
                                        Why we didn’t choose it:
                                    </p>
                                    <ul className="rejection-box-list">
                                        <li>Felt too abstract and less connected to user tasks</li>
                                        <li>Interaction was less clear beyond basic rotation</li>
                                        <li>Made it harder to focus on specific, actionable insights</li>
                                        <li>Ultimately felt more like a generic data visualization rather than a unique product experience</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="comp-section-row" style={{ alignItems: 'stretch', marginTop: 0, marginBottom: 0 }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <img src={cyberseaRough1} alt="Rough sketch of the title and central globe" className="rough-sketch-img" style={{ borderRadius: '4px', height: '100%', objectFit: 'cover', marginTop: 0 }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="comp-sub-title" style={{ marginTop: 0, marginBottom: '0.5rem' }}>02 Mesh boat</h3>
                                <p className="section-body" style={{ marginBottom: 0 }}>
                                    Using a boat as the key focus of our project allowed our project to have more focus, and the user to have a more delightful experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="results" className="problem-section">
                        <span className="section-label">RESULTS</span>
                        {/* Content removed */}
                    </div>
                    <div id="reflection" className="problem-section">
                        <span className="section-label">REFLECTION</span>
                        <p className="overview-title">What would I have done different?</p>
                        <div className="reflection-grid">
                            <div className="reflection-col">
                                <h3 className="reflection-heading reflection-heading--cursive">Shift my priorities.</h3>
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
