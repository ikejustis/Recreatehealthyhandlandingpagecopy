import { Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/Group 1000011543 4.png';
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      {/* Waitlist CTA Section */}
      <div className="section">
        <div className="container">
          <div className="footer-cta">
          <h2 className="footer-cta__title title-2">
            Be the First to Discover a Healthier Way to Live
          </h2>
          <p className="footer-cta__text body body--black">
            Get early access and be among the first to experience a healthier way to live.
          </p>

          <div className="footer-cta__actions">
            <button
              className="btn btn--primary"
              onClick={() => window.open("https://form.typeform.com/to/rvkGk9qc", "_blank")}
              type="button"
            >
              Join Waitlist
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-divider">
        <div className="container footer-links">
          <div className="footer-links__grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <img src={logo} alt="HealthyHand" className="footer-brand__logo" />
              <p className="body">
                Your guide to locally sourced healthy living.
              </p>
            </div>

            {/* Explore Column */}
            <div className="footer-brand">
              <h4 className="footer-colTitle">Explore</h4>
              <ul className="footer-navList">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="footer-link">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/rewards" className="footer-link">
                    HealthyRewards
                  </Link>
                </li>
                <li>
                  <Link to="/for-businesses" className="footer-link">
                    For Businesses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="footer-brand">
              <h4 className="footer-colTitle">Connect</h4>
              <div className="social">
                <a 
                  href="https://www.instagram.com/yourhealthyhand/"
                  target="_blank"
                  rel="noreferrer"
                  className="social__btn"
                >
                  <Instagram width={20} height={20} color="#72C975" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/healthyhandco/"
                  target="_blank"
                  rel="noreferrer"
                  className="social__btn"
                >
                  <Linkedin width={20} height={20} color="#72C975" />
                </a>
              </div>
              <a href="mailto:hello@healthyhand.com" className="footer-link">
                hello@healthyhand.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-divider">
        <div className="container footer-bottom">
          <div className="footer-bottom__row">
            <p>© 2025 HealthyHand. All rights reserved.</p>
            <div className="footer-bottom__links">
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
              <a href="#terms" className="footer-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
