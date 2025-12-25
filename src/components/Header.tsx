import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/e86b313527b29bbb0c11b3330c228e5fa22a2610.png.png';
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          {/* Logo */}
          <Link to="/" className="site-header__logo" aria-label="HealthyHand home">
            <img src={logo} alt="HealthyHand" className="site-header__logoImg" />
          </Link>

          {/* Desktop Navigation - Large clickable areas per Fitts's Law */}
          <nav className="site-header__nav" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/how-it-works" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              How It Works
            </NavLink>
            <NavLink to="/rewards" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              HealthyRewards
            </NavLink>
            <NavLink to="/for-businesses" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              For Businesses
            </NavLink>
          </nav>

          {/* Desktop CTA Button - Prominent per Fitts's Law */}
          <button 
            onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
            className="site-header__cta btn btn--primary"
          >
            Join Waitlist
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="site-header__menuBtn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X width={24} height={24} color="#1F5721" />
            ) : (
              <Menu width={24} height={24} color="#1F5721" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav__stack" aria-label="Mobile">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </NavLink>
              <NavLink
                to="/rewards"
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HealthyRewards
              </NavLink>
              <NavLink
                to="/for-businesses"
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Businesses
              </NavLink>
              
              {/* Mobile CTA Button - Centered and prominent */}
              <button 
                onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
                className="mobile-nav__cta btn btn--primary"
              >
                Join Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
