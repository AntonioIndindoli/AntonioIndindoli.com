import React, { useRef, useState } from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../LandingPage.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contributions', label: 'Contributions' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButton.current?.focus();
  };

  return (
  <header className="site-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && menuOpen) closeMenu();
  }}>
    <div className="header-inner">
      <button
        ref={menuButton}
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseRoundedIcon aria-hidden="true" /> : <MenuRoundedIcon aria-hidden="true" />}
        {menuOpen ? 'Close' : ''}
      </button>
      <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" onClick={() => {
            if (menuOpen) closeMenu();
          }}>
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
};

export default Header;
