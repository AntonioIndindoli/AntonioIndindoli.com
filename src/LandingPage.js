import React from 'react';
import Header from './components/Header';
import './LandingPage.css';

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
    title: 'Nebula Notes',
    description:
      'A focused note-taking workspace concept with frictionless tagging, markdown shortcuts, and a clean command palette flow.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Notebook interface concept shown on a laptop',
    href: '#',
  },
  {
    title: 'TrailMix Planner',
    description:
      'A trip planning dashboard mockup that combines map-first itineraries, drag-and-drop timelines, and shared travel lists.',
    technologies: ['JavaScript', 'Express', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Travel planning dashboard displayed on a large monitor',
    href: '#',
  },
  {
    title: 'Pulse Board',
    description:
      'A team pulse-check prototype with lightweight standup prompts, trend snapshots, and digest-style weekly recaps.',
    technologies: ['Next.js', 'Node.js', 'Prisma'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Analytics and activity widgets in a dark dashboard layout',
    href: '#',
  },
  {
    title: 'Echo Commerce',
    description:
      'A modern storefront concept centered on fast browsing, personalized recommendations, and an elegant checkout journey.',
    technologies: ['React', 'Stripe', 'Firebase'],
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Online shopping interface with products and cart summary',
    href: '#',
  },
  {
    title: 'Orbit Studio',
    description:
      'A creator workspace concept for managing content pipelines, scheduling releases, and tracking audience engagement.',
    technologies: ['Vue', 'GraphQL', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Creative team collaborating around a project planning table',
    href: '#',
  },
  {
    title: 'FrameFlow',
    description:
      'A cinematic portfolio builder idea with smooth reel navigation, curated galleries, and shareable project pages.',
    technologies: ['React', 'Framer Motion', 'Cloudinary'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Code editor and design references arranged on a desktop workspace',
    href: '#',
  },
];

const LandingPage = () => {
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
          <div className="section-intro">
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="projects-grid" role="list" aria-label="Featured project cards">
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
        </section>

        <section className="section education" id="education" aria-labelledby="education-title">
          <div className="section-intro">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-card">
            <h3>San Francisco State University</h3>
            <p>B.S. in Computer Science - May 2025</p>
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
