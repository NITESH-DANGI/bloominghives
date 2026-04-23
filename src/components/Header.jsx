import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

export default function Header({ onToggleMenu, menuOpen = false }) {
  return (
    <header className={`site-header${menuOpen ? ' menu-active' : ''}`} id="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" id="logo" aria-label="Blooming Hives Home">
          <img src="/assets/images/Logo.png" alt="Blooming Hives" className="logo-svg" style={{width: "70px", height: "70px", borderRadius: "50%"}}/>
        </Link>
        <div className="header-actions">
          <Link to="/contact" className="btn-pill btn-pill--header" id="header-cta">
            <span>Get Started</span>
            <ArrowIcon />
          </Link>
          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            id="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            {menuOpen ? (
              /* X / Close icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="menu-toggle__icon">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              /* Hamburger lines */
              <>
                <span className="menu-toggle__line"></span>
                <span className="menu-toggle__line"></span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
