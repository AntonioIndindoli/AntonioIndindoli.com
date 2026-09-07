import React from 'react';
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import Header from './components/Header';
import useScrollReveal from './useScrollReveal';
import './LandingPage.css';
import unityToolkitImage from './images/unitytoolkit.png';
import steamGameImage from './images/steamgame.jpg';
import aspiroImage from './images/aspiro.png';
import pokerImage from './images/poker.png';
import jobHazelImage from './images/jobhazel.png';
import mayunsImage from './images/mayuns.png';
import jobHazelLogo from './images/logos/jobhazel-logo.png';
import toolkitLogo from './images/logos/dsb-logo.png';
import backroomsLogo from './images/logos/backrooms-logo.png';
import aspiroLogo from './images/logos/aspiro-logo.png';
import pokerLogo from './images/logos/poker-logo.png';
import mayunsLogo from './images/logos/mayuns-logo.png';

const skills = [
    {
        title: 'Languages',
        items: ['TypeScript', 'JavaScript', 'C#', 'Java', 'SQL'],
    },
    {
        title: 'Frontend',
        items: ['React', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Responsive design'],
    },
    {
        title: 'Backend & APIs',
        items: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'System design'],
    },
    {
        title: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Data modeling'],
    },
    {
        title: 'Game Development',
        items: ['Unity', 'Custom editor tools', 'AI behavior trees', 'Procedural generation'],
    },
    {
        title: 'Tools & Cloud',
        items: ['Git', 'Google Cloud', 'AWS', 'Render', 'Neon'],
    },
];

const contactItems = [
    {
        label: 'Email',
        icon: MailOutlineRounded,
        value: 'indindoliantonio@gmail.com',
        href: 'mailto:indindoliantonio@gmail.com',
    },
    {
        label: 'Phone',
        icon: LocalPhoneOutlined,
        value: '707-372-3995',
        href: 'tel:+17073723995',
    },
    {
        label: 'LinkedIn',
        icon: LinkedIn,
        value: 'linkedin.com/in/indindoli',
        href: 'https://linkedin.com/in/indindoli',
    },
    {
        label: 'GitHub',
        icon: GitHub,
        value: 'github.com/AntonioIndindoli',
        href: 'https://github.com/AntonioIndindoli',
    },
];

const projectItems = [
    {
        title: 'JobHazel',
        logo: jobHazelLogo,
        result: 'Application tracking, follow-ups, and source analytics',
        description: 'A job search dashboard that brings applications, interviews, contacts, and follow-up tasks into one place.',
        contribution: 'Built the full-stack app, pipeline APIs, and source analytics.',
        technologies: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
        image: jobHazelImage,
        imageAlt: 'JobHazel dashboard showing the application pipeline, job search statistics, and application tracker',
        href: 'https://github.com/AntonioIndindoli/JobHazel',
        linkLabel: 'View Code',
        liveHref: 'https://jobhazel.com/',
    },
    {
        title: 'Destructible Structure Builder',
        logo: toolkitLogo,
        result: 'Self-published developer tool',
        description: 'A graph-based destruction toolkit that simulates structural collapse and stress propagation.',
        contribution: 'Built the destruction system, custom editor tools, and documentation.',
        technologies: ['Unity', 'C#'],
        image: unityToolkitImage,
        imageAlt: 'A house breaking apart in the Unity destruction toolkit',
        href: 'https://mayuns.com/#/destructible-structure-builder',
        linkLabel: 'Explore Toolkit',
    },
    {
        title: 'Backrooms: Unseen Tapes',
        logo: backroomsLogo,
        result: '200+ paid downloads in the first month',
        description: 'A self-published Steam horror game with procedural levels and stealth mechanics.',
        contribution: 'Built AI, lighting, and procedural levels; led the Steam release.',
        technologies: ['Unity', 'C#'],
        image: steamGameImage,
        imageAlt: 'A dimly lit corridor in Backrooms: Unseen Tapes',
        href: 'https://mayuns.com/#/backrooms-unseen-tapes',
        linkLabel: 'Explore Game',
    },
    {
        title: 'Aspiro',
        logo: aspiroLogo,
        result: 'Ranking built from 5,000+ Olympian data points',
        description: 'A platform matching athletes with universities, built in a four-person Agile team.',
        contribution: 'Owned APIs, data models, athlete ranking, and cloud deployment.',
        technologies: ['React', 'Next.js', 'SQL', 'Google Cloud'],
        image: aspiroImage,
        imageAlt: 'Aspiro athlete matching platform preview',
        href: 'https://github.com/AntonioIndindoli/Aspiro',
        linkLabel: 'View Code',
    },
    {
        title: 'Online Poker',
        logo: pokerLogo,
        result: 'Real-time gameplay and synchronized state',
        description: 'Multiplayer poker with live chat, built in a three-person Agile team.',
        contribution: 'Led gameplay and chat WebSockets; contributed to session design.',
        technologies: ['Node.js', 'WebSockets', 'PostgreSQL'],
        image: pokerImage,
        imageAlt: 'Poker project preview',
        href: 'https://github.com/AntonioIndindoli/Texas-Holdem-Poker',
        linkLabel: 'View Code',
    },
    {
        title: 'Mayuns',
        logo: mayunsLogo,
        result: 'A dedicated home for my studio’s games and tools',
        description: 'My game studio’s website for published games, Unity tools, and product support.',
        contribution: 'Designed and built the React site and product pages.',
        technologies: ['React', 'JavaScript', 'CSS', 'React Router'],
        image: mayunsImage,
        imageAlt: 'Mayuns game development studio website preview',
        href: 'https://github.com/AntonioIndindoli/Mayuns-Company-Site',
        linkLabel: 'View Code',
        liveHref: 'https://mayuns.com/',
    },
];

const LandingPage = () => {
    const revealRoot = useScrollReveal();
    return (
        <div className="landing-page" id="home" ref={revealRoot}>
            <div className="ambient-glow" aria-hidden="true" />
            <Header />
            <main>
                <section className="hero section" id="about" aria-labelledby="about-title">
                    <div className="hero-content">
                    <div className="about-hero-intro">
                        <h1 id="about-title">Antonio Indindoli</h1>
                        <p className="hero-subtitle">
                            I am a recent computer science graduate and software developer with experience building and shipping full-stack web applications, developer tools, and games. My work includes a job search platform, a graph-based structural destruction toolkit for Unity, and a published Steam game. I’ve built backend APIs, designed databases, and developed real-time multiplayer systems, both independently and on collaborative teams. I enjoy solving challenging technical problems and taking products from an initial idea through development, deployment, and release.
                        </p>
                    </div>
                        <div className="contact-panel">
                        <section className="connect-card" aria-labelledby="connect-title">
                            <div className="contact-links" aria-label="Contact links">
                            {contactItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={`${item.label}: ${item.value}`}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <item.icon className="contact-icon" aria-hidden="true" />
                                    <span className="contact-label">{item.label}</span>
                                    <span className="contact-value">{item.value}</span>
                                </a>
                            ))}
                            </div>
                        </section>
                        <section className="contact-education section" id="education" aria-labelledby="education-title">
                            <SchoolRounded className="contact-education-icon" aria-hidden="true" />
                            <div>
                                <h2 id="education-title">Education</h2>
                                <p>Bachelor of Science in Computer Science</p>
                            </div>
                        </section>
                        <section className="contact-location section" id="location" aria-labelledby="location-title">
                            <LocationOnRounded className="contact-location-icon" aria-hidden="true" />
                            <div>
                                <h2 id="location-title">Location</h2>
                                <p>San Francisco Bay Area, California</p>
                            </div>
                        </section>
                        </div>
                    </div>
                </section>

                <section className="section section-projects" id="projects" aria-labelledby="projects-title">
                    <div className="section-intro projects-intro">
                        <h2 id="projects-title">Selected Projects</h2>
                        <p>Published products and collaborative builds.</p>
                    </div>
                    <div className="projects-grid">
                        {projectItems.map((project) => (
                            <article key={project.title} className="project-card">
                                <div className="project-media">
                                    <img src={project.image} alt={project.imageAlt} className="project-image" loading="lazy" />
                                </div>
                                <div className="project-body">
                                    <div className="project-topline">
                                    <div className="project-heading">
                                        <img src={project.logo} alt="" className="project-logo" loading="lazy" />
                                        <div>
                                            <h3>{project.title}</h3>
                                        </div>
                                    </div>
                                    <div className="project-actions">
                                        {project.liveHref && (
                                            <a href={project.liveHref} className="project-link" aria-label={`Visit ${project.title} site`}>
                                                Visit Site <span aria-hidden="true">↗︎</span>
                                            </a>
                                        )}
                                        <a href={project.href} className="project-link" aria-label={`${project.linkLabel}: ${project.title}`}>
                                            {project.linkLabel} <span aria-hidden="true">↗︎</span>
                                        </a>
                                    </div>
                                    </div>
                                    <p className="project-result">{project.result}</p>
                                    <p>{project.description}</p>
                                    <p className="project-contribution"><strong>My role:</strong> {project.contribution}</p>
                                    <div className="project-footer">
                                        <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                                            {project.technologies.map((technology) => (
                                                <li key={technology}>{technology}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
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
