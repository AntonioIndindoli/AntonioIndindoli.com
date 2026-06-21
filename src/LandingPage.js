import React from 'react';
import Header from './components/Header';
import './LandingPage.css';
import unityToolkitImage from './images/unitytoolkit.png';
import steamGameImage from './images/steamgame.jpg';
import aspiroImage from './images/aspiro.png';
import pokerImage from './images/poker.jpg';

const skills = [
    {
        title: 'Frontend & Product',
        items: ['React', 'Next.js', 'Responsive UI', 'Accessibility', 'Design systems'],
    },
    {
        title: 'Backend & Data',
        items: ['Node.js', 'Express.js', 'REST APIs', 'SQL', 'MongoDB', 'WebSockets'],
    },
    {
        title: 'Game Development',
        items: ['Unity', 'C#', 'Editor tooling', 'AI behavior trees', 'Procedural systems'],
    },
    {
        title: 'Cloud & Workflow',
        items: ['Git', 'Google Cloud', 'AWS', 'Agile delivery', 'Technical documentation'],
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
        period: 'Jan 2024 – Oct 2025',
        description:
            'Built and self-published a Unity toolkit with a graph-based destruction system for realistic collapse behavior, stress propagation, custom editor tooling, and documentation for faster developer adoption.',
        impact: 'Commercial asset with production-ready documentation',
        technologies: ['Unity', 'C#', 'Editor Tools'],
        image: unityToolkitImage,
        imageAlt: 'Game development tooling and editor workflow on screen',
        href: 'https://mayuns.com/#/destructible-structure-builder',
    },
    {
        title: 'Self-Published Horror Game',
        period: 'Jan 2022 – Jun 2024',
        description:
            'Released a commercial Steam horror game, owning the pipeline from prototype to post-launch iteration while designing AI behavior trees, dynamic lighting, procedural levels, and player feedback loops.',
        impact: '200+ paid downloads in the first month',
        technologies: ['Unity', 'C#', 'Steam'],
        image: steamGameImage,
        imageAlt: 'Published indie game experience with immersive environment',
        href: 'https://mayuns.com/#/backrooms-unseen-tapes',
    },
    {
        title: 'University-Athlete Matching Platform',
        period: 'Aug 2024 – Dec 2024',
        description:
            'Collaborated in a 4-person Agile team to build an athlete-university matching platform, owning backend REST APIs, data modeling, GCP deployment, Google Maps integration, and ranking logic.',
        impact: 'Ranking model informed by 5,000+ Olympian data points',
        technologies: ['React', 'Next.js', 'SQL', 'GCP'],
        image: aspiroImage,
        imageAlt: 'Team collaborating on a web platform with map-based planning',
        href: 'https://github.com/AntonioIndindoli/Aspiro',
    },
    {
        title: 'Online Poker Platform',
        period: 'Feb 2023 – May 2023',
        description:
            'Developed a full-stack multiplayer poker platform in a 3-person Agile team, leading the real-time WebSocket architecture for gameplay, chat, synchronized state, and session handling.',
        impact: 'Realtime multiplayer experience with persistent game state',
        technologies: ['Node.js', 'WebSockets', 'PostgreSQL'],
        image: pokerImage,
        imageAlt: 'Multiplayer card game interface displayed on monitor',
        href: 'https://github.com/csc-667-spring-2023-roberts/team-zed-repo',
    },
];

const highlights = [
    { value: '4+', label: 'shipped product-scale projects' },
    { value: '200+', label: 'first-month Steam downloads' },
    { value: '5k+', label: 'data points used for ranking logic' },
];

const experienceHighlights = [
    'Create polished web and game experiences with a focus on usability, performance-minded architecture, and clear product outcomes.',
    'Comfortable moving across the stack: React interfaces, backend APIs, databases, cloud deployment, multiplayer systems, and Unity tooling.',
    'Bring an owner mindset from self-publishing commercial projects, writing documentation, and iterating from user feedback.',
];

const LandingPage = () => (
    <div className="landing-page" id="home">
        <Header />
        <main>
            <section className="hero section" id="about" aria-labelledby="about-title">
                <div className="hero-glow" aria-hidden="true" />
                <div className="hero-content">
                    <div className="about-hero-intro">
                        <p className="intro-eyebrow">Software engineer · Full-stack developer · Unity creator</p>
                        <h1 id="about-title">Building thoughtful software with polished, product-ready execution.</h1>
                        <p className="hero-subtitle">
                            I’m Antonio Indindoli, a computer science graduate who designs and ships full-stack web apps, real-time systems, and Unity-based tools. I care about clean interfaces, reliable architecture, and turning technical ideas into experiences people can actually use.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-action" href="#projects">Explore Projects</a>
                            <a className="secondary-action" href="mailto:indindoliantonio@gmail.com">Get in Touch</a>
                        </div>
                    </div>
                    <aside className="hero-panel" aria-label="Professional snapshot">
                        <p className="panel-kicker">Profile</p>
                        <h2>Engineer with a builder’s mindset.</h2>
                        <p>
                            From publishing commercial Unity products to building deployed web platforms, I enjoy the full path from system design to visual polish.
                        </p>
                        <div className="stats-grid">
                            {highlights.map((highlight) => (
                                <div className="stat-card" key={highlight.label}>
                                    <strong>{highlight.value}</strong>
                                    <span>{highlight.label}</span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>

            <section className="section story-section" aria-labelledby="story-title">
                <div className="section-intro split-intro">
                    <p className="section-kicker">What I bring</p>
                    <h2 id="story-title">A practical mix of engineering depth, product instincts, and creative execution.</h2>
                </div>
                <div className="experience-grid">
                    {experienceHighlights.map((item, index) => (
                        <article className="experience-card" key={item}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <p>{item}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section section-projects" id="projects" aria-labelledby="projects-title">
                <div className="section-intro split-intro">
                    <p className="section-kicker">Selected Work</p>
                    <h2 id="projects-title">Projects with clear ownership and measurable outcomes.</h2>
                    <p>
                        A cross-section of commercial game work, creator tools, realtime systems, and collaborative full-stack platforms.
                    </p>
                </div>
                <div className="projects-grid" role="list" aria-label="Featured project cards">
                    {projectItems.map((project) => (
                        <article key={project.title} className="project-card" role="listitem">
                            <div className="project-image-wrap">
                                <img src={project.image} alt={project.imageAlt} className="project-image" loading="lazy" />
                                <span className="project-period">{project.period}</span>
                            </div>
                            <div className="project-body">
                                <div>
                                    <p className="project-impact">{project.impact}</p>
                                    <h3>{project.title}</h3>
                                </div>
                                <p>{project.description}</p>
                                <div className="project-footer">
                                    <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                                        {project.technologies.map((technology) => (
                                            <li key={technology}>{technology}</li>
                                        ))}
                                    </ul>
                                    <a href={project.href} className="project-link" aria-label={`View ${project.title}`} target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section credentials-grid" id="skills" aria-labelledby="skills-title">
                <div className="section-intro">
                    <p className="section-kicker">Capabilities</p>
                    <h2 id="skills-title">Technical toolkit</h2>
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

            <section className="section education-contact-grid" id="education" aria-labelledby="education-title">
                <div className="education-card">
                    <p className="section-kicker">Education</p>
                    <div className="education-card-top">
                        <div>
                            <h2 id="education-title">San Francisco State University</h2>
                            <p className="education-degree">B.S. in Computer Science</p>
                        </div>
                        <span className="education-status">Graduated May 2025</span>
                    </div>
                    <p className="education-copy">
                        Coursework and project work emphasized software engineering, data structures, databases, networking, cloud deployment, and collaborative product development.
                    </p>
                </div>

                <div className="contact-panel" id="contact" aria-label="Contact links">
                    <p className="section-kicker">Contact</p>
                    <h2>Let’s build something polished.</h2>
                    <div className="contact-grid">
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

            <section className="section contributions" id="contributions" aria-labelledby="contributions-title">
                <div className="section-intro split-intro">
                    <p className="section-kicker">Open Source Activity</p>
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

export default LandingPage;
