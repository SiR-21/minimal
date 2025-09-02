import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logoMorning from '../assets/logo-morning.png';
import logoAfternoon from '../assets/logo-afternoon.png';
import logoEvening from '../assets/logo-evening.png';

const Header = ({ time, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Pick logo based on theme
  let logoSrc;
  switch (theme) {
    case 'morning': logoSrc = logoMorning; break;
    case 'afternoon': logoSrc = logoAfternoon; break;
    case 'evening':
    case 'midnight': logoSrc = logoEvening; break;
    default: logoSrc = logoMorning;
  }

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CV', path: '/CV.pdf', isPdf: true },
    { name: 'CONTACTS', path: '/contacts' },
  ];

  // Add/remove body class for menu state
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="left-group">
          <img src={logoSrc} alt="Logo" className="logo" />
          
          {/* Desktop navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.name}>
                  {link.isPdf ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="right-group">
          {/* Desktop theme and time display */}
          <div className="desktop-info">
            <div className="theme-holder">
              <span className="theme-text">MODE</span>
              <span className="theme">{theme}</span>
            </div>
            <div className="time-holder">
              <span className="time-text">CURRENT TIME</span>
              <span className="time">{formattedTime}</span>
            </div>
          </div>

          {/* Hamburger button */}
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            {links.map((link) => (
              <li key={link.name}>
                {link.isPdf ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile theme and time display */}
          <div className="mobile-info">
            <div className="theme-holder">
              <span className="theme-text">MODE</span>
              <span className="theme">{theme}</span>
            </div>
            <div className="time-holder">
              <span className="time-text">CURRENT TIME</span>
              <span className="time">{formattedTime}</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;