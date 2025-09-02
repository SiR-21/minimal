import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logoMorning from '../assets/logo-morning.png';
import logoAfternoon from '../assets/logo-afternoon.png';
import logoEvening from '../assets/logo-evening.png';

const Header = ({ time, theme }) => {
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Pick logo based on theme
  let logoSrc;
  switch (theme) {
    case 'morning':
      logoSrc = logoMorning;
      break;
    case 'afternoon':
      logoSrc = logoAfternoon;
      break;
    case 'evening':
    case 'midnight':
      logoSrc = logoEvening;
      break;
    default:
      logoSrc = logoMorning;
  }

  // Navigation links
  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CV', path: '/CV.pdf', isPdf: true }, // mark PDF
    { name: 'CONTACTS', path: '/contacts' },
  ];

  return (
    <header className="header">
      <div className="left-group">
        <img src={logoSrc} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.name}>
                {link.isPdf ? (
                  <a
                    href={link.path} // PDFs in public folder
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
        <div className="theme-holder">
          <span className="theme-text">MODE</span>
          <span className="theme">{theme}</span>
        </div>
        <div className="time-holder">
          <span className="time-text">CURRENT TIME</span>
          <span className="time">{formattedTime}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
