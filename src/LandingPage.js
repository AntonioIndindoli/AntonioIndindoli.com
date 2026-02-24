import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import './LandingPage.css';
import unityToolkitImage from './images/unitytoolkit.png';
import steamGameImage from './images/steamgame.jpg';
import aspiroImage from './images/aspiro.png';
import pokerImage from './images/poker.jpg';

const skills = [
    {
        title: 'Languages',
        items: ['C#', 'Java', 'JavaScript', 'SQL'],
    },
    {
        title: 'Frameworks',
        items: ['React', 'Express.js', 'Node.js'],
    },
    {
        title: 'Tools & Platforms',
        items: ['Git', 'MongoDB', 'AWS', 'Google Cloud', 'Unity', 'Visual Studio Code'],
    },
    {
        title: 'Core Skills',
        items: ['Web development', 'Game development', 'System design'],
    },
];

const contactItems = [
    {
        label: 'Email',
        value: 'indindoliantonio@gmail.com',
        href: 'mailto:indindoliantonio@gmail.com',
    },
    {
        label: 'Phone',
        value: '707-372-3995',
        href: 'tel:+17073723995',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/indindoli',
        href: 'https://linkedin.com/in/indindoli',
    },
    {
        label: 'GitHub',
        value: 'github.com/AntonioIndindoli',
        href: 'https://github.com/AntonioIndindoli',
    },
];

const projectItems = [
    {
        title: 'Self-Published Unity Editor Toolkit',
        period: 'January 2024 – October 2025',
        description:
            'Built and self-published a Unity toolkit featuring a graph-based destruction system for realistic collapse and stress propagation, plus custom editor tooling and thorough documentation to improve developer workflows.',
        technologies: ['Unity', 'C#'],
        image: unityToolkitImage,
        imageAlt: 'Game development tooling and editor workflow on screen',
        href: 'https://mayuns.com/#/destructible-structure-builder',
    },
    {
        title: 'Self-Published Horror Game',
        period: 'January 2022 – June 2024',
        description:
            'Released a commercial Steam game that reached 200+ paid downloads in the first month, designing AI behavior trees, dynamic lighting, procedural level generation, and managing production from prototype to post-launch feedback.',
        technologies: ['Unity', 'C#'],
        image: steamGameImage,
        imageAlt: 'Published indie game experience with immersive environment',
        href: 'https://mayuns.com/#/backrooms-unseen-tapes',
    },
    {
        title: 'University-Athlete Matching Platform',
        period: 'August 2024 – December 2024',
        description:
            'Collaborated in a 4-person Agile team to build an athlete-university matching platform, owning backend REST APIs, data modeling, GCP deployment, Google Maps integration, and a custom ranking algorithm built from 5,000+ Olympian data points.',
        technologies: ['React.js', 'Next.js', 'SQL', 'Google Cloud'],
        image: aspiroImage,
        imageAlt: 'Team collaborating on a web platform with map-based planning',
        href: 'https://github.com/AntonioIndindoli/Aspiro',
    },
    {
        title: 'Online Poker Platform',
        period: 'February 2023 – May 2023',
        description:
            'Developed a full-stack multiplayer poker platform in a 3-person Agile team, leading WebSocket implementation for real-time gameplay, chat, and synchronized game state while supporting scalable PostgreSQL data and session design.',
        technologies: ['Node.js', 'WebSockets', 'PostgreSQL'],
        image: pokerImage,
        imageAlt: 'Multiplayer card game interface displayed on monitor',
        href: 'https://github.com/csc-667-spring-2023-roberts/team-zed-repo',
    },
];

const LandingPage = () => {
    const projectsGridRef = useRef(null);
    const lastInteractionRef = useRef(Date.now());
    const idleDelayMs = 10000;
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateArrowVisibility = useCallback(() => {
        const grid = projectsGridRef.current;

        if (!grid) {
            return;
        }

        const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
        const epsilon = 2;

        setCanScrollLeft(grid.scrollLeft > epsilon);
        setCanScrollRight(grid.scrollLeft < maxScrollLeft - epsilon);
    }, []);

    const markInteracted = useCallback(() => {
        lastInteractionRef.current = Date.now();
    }, []);

    const scrollProjects = useCallback((direction = 1) => {
        const grid = projectsGridRef.current;

        if (!grid) {
            return;
        }

        const card = grid.querySelector('.project-card');
        const cardWidth = card ? card.getBoundingClientRect().width : grid.clientWidth * 0.75;
        const style = window.getComputedStyle(grid);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
        const step = (cardWidth + gap) * direction;
        const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

        if (direction > 0 && grid.scrollLeft >= maxScrollLeft - 4) {
            return;
        }

        if (direction < 0 && grid.scrollLeft <= 4) {
            return;
        }

        grid.scrollBy({ left: step, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const interval = window.setInterval(() => {
            if (Date.now() - lastInteractionRef.current >= idleDelayMs) {
                scrollProjects(1);
            }
        }, 2200);

        return () => window.clearInterval(interval);
    }, [scrollProjects]);

    useEffect(() => {
        updateArrowVisibility();
        window.addEventListener('resize', updateArrowVisibility);

        return () => {
            window.removeEventListener('resize', updateArrowVisibility);
        };
    }, [updateArrowVisibility]);

    return (
        <div className="landing-page" id="home">
            <Header />
            <main>
                <section className="hero section" id="about" aria-labelledby="about-title">
                    <div className="hero-content">
                        <div className="about-hero-intro">
                            <p className="intro-eyebrow">About Me</p>
                            <h1 id="about-title">Antonio Indindoli</h1>
                            <p className="hero-subtitle">
                                I’m a software developer who builds games and web applications. I’ve shipped projects
                                using C#, JavaScript, React, Node.js, and Unity, and I’m comfortable working across
                                the stack from backend systems to front-end interfaces.
                            </p>
                        </div>
                        <div className="contact-grid" aria-label="Contact links">
                            {contactItems.map((item) => (
                                <a
                                    key={item.label}
                                    className="contact-card"
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="contact-label">{item.label}</span>
                                    <span className="contact-value">{item.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-projects" id="projects" aria-labelledby="projects-title">
                    <div className="section-intro projects-intro">
                        <h2 id="projects-title">Projects</h2>
                    </div>
                    <div className="projects-scroller" aria-label="Project carousel controls">
                        {canScrollLeft && (
                            <button
                                type="button"
                                className="projects-arrow-left"
                                aria-label="Scroll projects left"
                                onClick={() => {
                                    markInteracted();
                                    scrollProjects(-1);
                                }}
                            >
                                ‹
                            </button>
                        )}
                        <div
                            ref={projectsGridRef}
                            className="projects-grid"
                            role="list"
                            aria-label="Featured project cards"
                            onScroll={() => {
                                markInteracted();
                                updateArrowVisibility();
                            }}
                            onWheel={markInteracted}
                            onMouseDown={markInteracted}
                            onTouchStart={markInteracted}
                        >
                            {projectItems.map((project) => (
                                <article key={project.title} className="project-card" role="listitem">
                                    <img src={project.image} alt={project.imageAlt} className="project-image" loading="lazy" />
                                    <div className="project-body">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-footer">
                                            <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                                                {project.technologies.map((technology) => (
                                                    <li key={technology}>{technology}</li>
                                                ))}
                                            </ul>
                                            <a href={project.href} className="project-link" aria-label={`View ${project.title}`}>
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {canScrollRight && (
                            <button
                                type="button"
                                className="projects-arrow-right"
                                aria-label="Scroll projects right"
                                onClick={() => {
                                    markInteracted();
                                    scrollProjects(1);
                                }}
                            >
                                ›
                            </button>
                        )}
                    </div>
                </section>

                <section className="section education" id="education" aria-labelledby="education-title">
                    <div className="section-intro">
                        <h2 id="education-title">Education</h2>
                    </div>
                    <div className="education-card">
                        <div className="education-card-top">
                            <div>
                                <h3>San Francisco State University</h3>
                                <p className="education-degree">B.S. in Computer Science</p>
                            </div>
                            <span className="education-status">Graduated May 2025</span>
                        </div>
                    </div>
                </section>

                <section className="section skills" id="skills" aria-labelledby="skills-title">
                    <div className="section-intro">
                        <h2 id="skills-title">Skills</h2>
                    </div>
                    <div className="skills-grid">
                        {skills.map((category) => (
                            <article key={category.title} className="skill-card">
                                <h3>{category.title}</h3>
                                <ul>
                                    {category.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section contributions" id="contributions" aria-labelledby="contributions-title">
                    <div className="section-intro">
                        <h2 id="contributions-title">GitHub Contributions</h2>
                    </div>
                    <div className="contribution-chart">
                        <img
                            src="https://ghchart.rshah.org/39d353/AntonioIndindoli"
                            alt="Antonio Indindoli’s GitHub contribution chart"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
