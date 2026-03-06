import { useEffect, useState } from 'react'
import '../App.css'
import useScrollReveal from '../hooks/useScrollReveal'
import relishMain from '../assets/relish-main.png'
import relishForm from '../assets/relish-form.png'
import relishCalendar from '../assets/relish-calendar.png'
import relishFeed from '../assets/relish-feed.jpg'
import relishLockscreen from '../assets/relish-lockscreen.jpg'

const sectionsData = [
    { id: 'overview', title: 'Overview' },
    { id: 'planning', title: 'Planning' },
    { id: 'solutions', title: 'Solutions' },
];

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="persona-icon">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

function Relish() {
    const [activeSection, setActiveSection] = useState('overview');

    // Reveal refs for different sections
    const metadataRef = useScrollReveal(0);
    const overviewRef = useScrollReveal(100);
    const planningRef = useScrollReveal(100);
    const solutionsRef = useScrollReveal(100);

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
            { rootMargin: '-20% 0px -60% 0px' }
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
            const y = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="project-detail-page relish-page-container page-fade-in">
            <div className="relish-hero-container">
                <div className="relish-hero-content">
                    <h1 className="relish-title load-reveal stagger-1">relish</h1>
                    <p className="relish-subtitle load-reveal stagger-2">make mealtime mindful with cute hand-drawn icons</p>
                    <div className="relish-hero-images-wrapper load-reveal stagger-3">
                        <div className="relish-background-gradient"></div>
                        <div className="project-side-by-side-container">
                            <img src={relishMain} alt="Relish Main" className="project-side-img" />
                            <img src={relishForm} alt="Relish Form" className="project-side-img" />
                            <img src={relishCalendar} alt="Relish Calendar" className="project-side-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="case-study-metadata-wrapper reveal-item" ref={metadataRef}>
                <section className="metadata-row">
                    <div className="metadata-col">
                        <span className="metadata-label">TIMELINE</span>
                        <span className="metadata-value">November 2025 (48h)</span>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">TEAM</span>
                        <ul className="metadata-list">
                            <li>1 designer, 1 developer</li>
                        </ul>
                    </div>
                    <div className="metadata-col">
                        <span className="metadata-label">ROLE</span>
                        <ul className="metadata-list">
                            <li>Product Designer</li>
                            <li>UX Researcher</li>
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
                                    onClick={() => scrollToSection(section.id)}
                                >
                                    {section.title}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="case-study-content">
                    <div id="overview" className="problem-section reveal-item" ref={overviewRef}>
                        <span className="section-label">OUR PROMPT</span>
                        <h2 className="overview-title">How might we make mundane, everyday tasks more enjoyable?</h2>
                        <p className="section-body">
                            Relish is a food tracking app I designed at my first ever Designathon: the Figma Make-a-thon at Waterloo.
                        </p>
                    </div>

                    <div id="planning" className="problem-section reveal-item" ref={planningRef}>
                        <span className="section-label">PLANNING</span>

                        <div className="planning-timeline-wrapper">
                            <h3 className="section-subtitle">a) Deciding on a route</h3>
                            <p className="section-body">
                                Relish was targetted towards issues that I had noticed in myself and the people around me, no matter their age:
                            </p>
                            <p className="section-body">
                                The struggle to eat properly, healthily, and on time.
                            </p>

                            <h3 className="section-subtitle">b) Research & Users</h3>
                            <p className="section-body">
                                As we were under time pressure, we narrowed down our research by asking the 5 W's:
                            </p>
                            <ol className="section-list">
                                <li><strong>Who</strong> - Who is our main demographic?</li>
                                <li><strong>What</strong> - What are we trying to help them with?</li>
                                <li><strong>When</strong> - When will they use this app? <strong>Where? Why?</strong></li>
                            </ol>

                            <p className="section-body">
                                Thus, we were able to characterize our app-users as:
                            </p>

                            <div className="persona-grid">
                                <div className="persona-card">
                                    <div className="persona-icon-wrapper">
                                        <UserIcon />
                                    </div>
                                    <h4 className="persona-name">Alex</h4>
                                    <p className="persona-role">Busy Uni Student</p>
                                    <p className="persona-quote">"I struggle to eat accountably and can never follow my diet."</p>
                                </div>
                                <div className="persona-card">
                                    <div className="persona-icon-wrapper">
                                        <UserIcon />
                                    </div>
                                    <h4 className="persona-name">Ben</h4>
                                    <p className="persona-role">Absent Minded worker</p>
                                    <p className="persona-quote">"I keep forgetting to eat at work."</p>
                                </div>
                                <div className="persona-card">
                                    <div className="persona-icon-wrapper">
                                        <UserIcon />
                                    </div>
                                    <h4 className="persona-name">Cam</h4>
                                    <p className="persona-role">Eats Alone Often</p>
                                    <p className="persona-quote">"I feel lonely when I eat and it isn't fun."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="solutions" className="problem-section reveal-item" ref={solutionsRef}>
                        <span className="section-label">SOLUTIONS</span>
                        <h2 className="overview-title">How does Relish address their problems?</h2>

                        <div className="solution-grid">
                            <div className="solution-cards">
                                <div className="solution-card">
                                    <div className="solution-avatar-wrapper">
                                        <UserIcon />
                                    </div>
                                    <div className="solution-content">
                                        <h4>Alex:</h4>
                                        <ul className="solution-list">
                                            <li>Now can track everything she eats in a calendar view.</li>
                                            <li>Helps hold her accountable when she can see all her meals laid out in front of her.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="solution-card">
                                    <div className="solution-avatar-wrapper">
                                        <UserIcon />
                                    </div>
                                    <div className="solution-content">
                                        <h4>Ben:</h4>
                                        <ul className="solution-list">
                                            <li>Receives a <strong>notification</strong> to remind him to eat.</li>
                                            <li>Is motivated to eat so he can fill out his calendar.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="solution-card">
                                    <div className="solution-avatar-wrapper">
                                        <UserIcon />
                                    </div>
                                    <div className="solution-content">
                                        <h4>Cam:</h4>
                                        <ul className="solution-list">
                                            <li>Can keep up with his friends and what they eat on the "Friends" tab, making him feel less lonely!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-images">
                                <img src={relishLockscreen} alt="Relish Lockscreen" className="solution-phone-img" />
                                <img src={relishFeed} alt="Relish Feed" className="solution-phone-img" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Relish
