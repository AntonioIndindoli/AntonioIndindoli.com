import React from 'react';
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
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
];

const projectItems = [
    {
        title: 'JobHazel',
        category: 'Full Stack Web App',
        logo: jobHazelLogo,
        description:
            'A full-stack job application tracker with job importing, resume management, interactive analytics, and a visual pipeline for organizing applications and interviews.',
        technologies: ['Next.js', 'Express', 'PostgreSQL', 'Prisma'],
        image: jobHazelImage,
        imageAlt:
            'JobHazel dashboard showing the application pipeline, job search statistics, and application tracker',
        href: 'https://github.com/AntonioIndindoli/JobHazel',
        linkLabel: 'View code',
        liveHref: 'https://jobhazel.com/',
    },
    {
        title: 'Destructible Structure Builder',
        category: 'Published Developer Toolkit',
        logo: toolkitLogo,
        description:
            'A published Unity toolkit that uses graph-based modeling to simulate structural damage and collapse, with custom 3D tools, a damage API, automated tests, and documentation.',
        technologies: ['Unity', 'C#'],
        image: unityToolkitImage,
        imageAlt: 'A house breaking apart in the Unity destruction toolkit',
        href: 'https://mayuns.com/#/destructible-structure-builder',
        linkLabel: 'Explore toolkit',
    },
    {
        title: 'Online Poker',
        category: 'Multiplayer Web Game',
        logo: pokerLogo,
        description:
            'A real-time multiplayer poker platform with server-side betting and game logic, synchronized table state and chat, and persistent game data in PostgreSQL.',
        technologies: ['Node.js', 'WebSockets', 'PostgreSQL'],
        image: pokerImage,
        imageAlt: 'Poker project preview',
        href: 'https://github.com/AntonioIndindoli/Texas-Holdem-Poker',
        linkLabel: 'View code',
    },
    {
        title: 'Backrooms: Unseen Tapes',
        category: 'Published Steam Game',
        logo: backroomsLogo,
        description:
            'A published Unity horror game featuring stealth mechanics, procedural level generation, and optimized scenes with large numbers of dynamic lights and objects.',
        technologies: ['Unity', 'C#'],
        image: steamGameImage,
        imageAlt: 'A dimly lit corridor in Backrooms: Unseen Tapes',
        href: 'https://mayuns.com/#/backrooms-unseen-tapes',
        linkLabel: 'Explore game',
    },
    {
        title: 'Aspiro',
        category: 'Athlete–University Matching Platform',
        logo: aspiroLogo,
        description:
            'A full-stack athlete–university matching platform with a custom ranking algorithm, backend APIs, SQL data models, Google Cloud deployment, and location-based university discovery.',
        technologies: ['React', 'Next.js', 'SQL', 'Google Cloud'],
        image: aspiroImage,
        imageAlt: 'Aspiro athlete matching platform preview',
        href: 'https://github.com/AntonioIndindoli/Aspiro',
        linkLabel: 'View code',
    },
    {
        title: 'Mayuns',
        category: 'Game Studio Website',
        logo: mayunsLogo,
        description:
            'A responsive website for my game studio, designed to showcase published games and Unity tools with dedicated product pages and support resources.',
        technologies: ['React', 'JavaScript', 'CSS', 'React Router'],
        image: mayunsImage,
        imageAlt: 'Mayuns game development studio website preview',
        href: 'https://github.com/AntonioIndindoli/Mayuns-Company-Site',
        linkLabel: 'View code',
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
                            <div className="hero-heading">
                                <h1 id="about-title">Antonio Indindoli</h1>
                            </div>
                            <p className="hero-subtitle">
                                Software developer with experience bringing full-stack apps, developer tools, and games from concept to launch.
                            </p>
                            <div className="hero-socials" aria-label="Social profiles">
                                <a href="https://github.com/AntonioIndindoli" target="_blank" rel="noopener noreferrer">
                                    <GitHub aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com/in/indindoli" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        <div className="contact-panel">
                            <section className="contact-location section" id="location" aria-labelledby="location-title">
                                <LocationOnOutlined className="contact-location-icon" aria-hidden="true" />
                                <div>
                                    <h2 id="location-title">Based in</h2>
                                    <p>San Francisco Bay Area, CA</p>
                                </div>
                            </section>
                            <section className="contact-education section" id="education" aria-labelledby="education-title">
                                <SchoolRounded className="contact-education-icon" aria-hidden="true" />
                                <div>
                                    <h2 id="education-title">Education</h2>
                                    <p>B.S. in Computer Science</p>
                                </div>
                            </section>
                            <section className="connect-card" aria-label="Contact information">
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
                                            <span className="contact-value">{item.value}</span>
                                        </a>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <section className="section section-projects" id="projects" aria-labelledby="projects-title">
                    <div className="section-intro projects-intro">
                        <h2 id="projects-title">Selected Projects</h2>
                    </div>
                    <div className="projects-grid">
                        {projectItems.map((project) => (
                            <article key={project.title} className="project-card">
                                <div className="project-body">
                                    <div className="project-heading">
                                        <h3>{project.title}</h3>
                                    </div>
                                    <p className="project-category">{project.category}</p>
                                    <p>{project.description}</p>
                                    <div className="project-footer">
                                        <ul className="project-tech-list" aria-label={project.title + ' technologies'}>
                                            {project.technologies.map((technology) => (
                                                <li key={technology}>{technology}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-preview">
                                    <div className="project-media">
                                        <img src={project.image} alt={project.imageAlt} className="project-image" loading="lazy" />
                                    </div>
                                    <div className="project-actions">
                                        {project.liveHref && (
                                            <a href={project.liveHref} className="project-link" aria-label={'Visit ' + project.title + ' site'}>
                                                Visit site <span aria-hidden="true">↗</span>
                                            </a>
                                        )}
                                        <a href={project.href} className="project-link" aria-label={project.linkLabel + ': ' + project.title}>
                                            {project.linkLabel} <span aria-hidden="true">↗</span>
                                        </a>
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
