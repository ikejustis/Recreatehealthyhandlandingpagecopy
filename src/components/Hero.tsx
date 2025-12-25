import heroImage from '../assets/fbd473b170e07cd5460de2278a78827fdc78cc83.png.png';

export function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero__grid">
          {/* Left Content */}
          <div className="hero__content">
            <h1 className="title-1">
              <span className="hero__titlePrimary">Find Healthy Choices</span>
              <br />
              <span className="hero__titleAccent">Near You</span>
            </h1>
            
            <p className="hero__lead body">
              Discover the best local spots for eating well, moving often, and living balanced in your community, all in one app designed to make healthy living simple and rewarding.
            </p>

            {/* CTA Buttons - Large and well-spaced per Fitts's Law */}
            <div className="hero__actions">
              <button 
                className="hero__cta btn btn--primary"
                onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="hero__media">
            <img 
              src={heroImage} 
              alt="HealthyHand App Screens" 
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
