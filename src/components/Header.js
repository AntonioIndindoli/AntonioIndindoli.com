import React from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import '../LandingPage.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contributions', label: 'Contributions' },
];

const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <nav className="main-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="resume-chip"
        href="/Antonio-Indindoli-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DescriptionOutlinedIcon sx={{ fontSize: '1.15em' }} aria-hidden="true" />
        View Resume
      </a>
    </div>
  </header>
);

export default Header;
