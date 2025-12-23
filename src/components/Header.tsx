import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/e86b313527b29bbb0c11b3330c228e5fa22a2610.png';

interface HeaderProps {
  currentPage: 'home' | 'how-it-works' | 'rewards' | 'for-businesses';
  onNavigate: (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses', scrollTo?: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="site-header__logo"
          >
            <img src={logo} alt="HealthyHand" className="site-header__logoImg" />
          </button>

          {/* Desktop Navigation - Large clickable areas per Fitts's Law */}
          <nav className="site-header__nav" aria-label="Primary">
            <button 
              onClick={() => handleNavigation('home')}
              className={`nav-link ${currentPage === 'home' ? 'nav-link--active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('how-it-works')}
              className={`nav-link ${currentPage === 'how-it-works' ? 'nav-link--active' : ''}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigation('rewards')}
              className={`nav-link ${currentPage === 'rewards' ? 'nav-link--active' : ''}`}
            >
              HealthyRewards
            </button>
            <button 
              onClick={() => handleNavigation('for-businesses')}
              className={`nav-link ${currentPage === 'for-businesses' ? 'nav-link--active' : ''}`}
            >
              For Businesses
            </button>
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
              <button 
                onClick={() => handleNavigation('home')}
                className={`mobile-nav__link ${currentPage === 'home' ? 'mobile-nav__link--active' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('how-it-works')}
                className={`mobile-nav__link ${currentPage === 'how-it-works' ? 'mobile-nav__link--active' : ''}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavigation('rewards')}
                className={`mobile-nav__link ${currentPage === 'rewards' ? 'mobile-nav__link--active' : ''}`}
              >
                HealthyRewards
              </button>
              <button 
                onClick={() => handleNavigation('for-businesses')}
                className={`mobile-nav__link ${currentPage === 'for-businesses' ? 'mobile-nav__link--active' : ''}`}
              >
                For Businesses
              </button>
              
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