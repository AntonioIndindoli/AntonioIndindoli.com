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
    items: ['Full-stack web development', 'Game development', 'System design'],
  },
];



const LandingPage = () => {
  return (
    <div className="landing-page" id="home">
      <Header />
      <main>

        {/* Hero */}

        <section className="hero section" id="about" aria-labelledby="about-title">
          <div className="hero-content">
            <div className="about-hero-intro">
              <p className="intro-eyebrow">About Me</p>
              <h1 id="about-title">Antonio Indindoli</h1>
              <p className="hero-subtitle">
                Recent Computer Science graduate from San Francisco State University with extensive experience developing and shipping games and web experiences.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" >
                <span className="contact-value">indindoliantonio@gmail.com</span>
              </a>
              <a className="contact-card" >
                <span className="contact-value">707-372-3995</span>
              </a>
              <a className="contact-card" href="https://linkedin.com/in/indindoli" target="_blank" rel="noopener noreferrer">
                <span className="contact-value">linkedin.com/in/indindoli</span>
              </a>
              <a className="contact-card" href="https://github.com/AntonioIndindoli" target="_blank" rel="noopener noreferrer">
                <span className="contact-value">github.com/AntonioIndindoli</span>
              </a>
            </div>

          </div>
        </section>

        {/* Contact */}



        {/* Education */}

        <section className="section education" id="education" aria-labelledby="education-title">
          <div className="section-intro">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-card">
            <h3>San Francisco State University</h3>
            <p>B.S. in Computer Science — May 2025</p>
          </div>
        </section>

        {/* Skills */}

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

        {/* Contributions */}

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
