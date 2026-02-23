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
