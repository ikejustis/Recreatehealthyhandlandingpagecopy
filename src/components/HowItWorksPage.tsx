import { Search, MapPin, Award, Check } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Explore',
      description: 'Find health-focused restaurants, cafes, farmers markets, and wellness spots nearby.'
    },
    {
      number: '2',
      icon: MapPin,
      title: 'Visit & Support',
      description: 'Choose local businesses over big chains and make every visit meaningful.'
    },
    {
      number: '3',
      icon: Award,
      title: 'Earn Points',
      description: 'Redeem HealthyRewards when you check in and support participating businesses.'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="page-narrow center stack">
            <h1 className="page-hero__title center">
              Discover How HealthyHand Connects People to Healthier Living
            </h1>
            <p className="body">
              Empowering your community by bringing together local food, wellness, and rewards all in one app.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section">
        <div className="container">
          <div className="page-narrow center stack">
            <h2 className="title-2 text-green">Our Mission</h2>
            <h3 className="title-3 text-green font-medium">
              Making Healthy Living Local, Accessible, and Rewarding
            </h3>
            <p className="body">
              HealthyHand was created to help health-conscious people easily discover nutritious food spots, wellness studios, and markets in their area—while giving community-focused businesses the visibility they deserve. We believe in creating meaningful connections that benefit both consumers and local establishments.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="page-title title-2">How It Works</h2>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step">
                {/* Icon */}
                <div className="step__iconWrap" aria-hidden="true">
                  <step.icon width={40} height={40} color="#ffffff" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="step__title title-3">{step.number}. {step.title}</h3>

                {/* Description */}
                <p className="body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Local Businesses Section */}
      <section className="section">
        <div className="container">
          <div className="page-narrow center stack">
            <h2 className="title-2 text-green">For Businesses</h2>
            <h3 className="title-3 body--black font-medium">
              Shine a Light on Your Business
            </h3>
            <p className="body">
              HealthyHand isn't just for users, it's for the community. We help local establishments reach new audiences, increase foot traffic, and grow their visibility through our curated platform and promotional features.
            </p>

            <div className="checklist">
              <div className="checklist__item">
                <div className="checklist__badge" aria-hidden="true">
                  <Check width={16} height={16} color="#72C975" strokeWidth={3} />
                </div>
                <p className="body body--black">Spotlight your menu, products, or services</p>
              </div>
              <div className="checklist__item">
                <div className="checklist__badge" aria-hidden="true">
                  <Check width={16} height={16} color="#72C975" strokeWidth={3} />
                </div>
                <p className="body body--black">Get featured on curated guides and seasonal lists</p>
              </div>
              <div className="checklist__item">
                <div className="checklist__badge" aria-hidden="true">
                  <Check width={16} height={16} color="#72C975" strokeWidth={3} />
                </div>
                <p className="body body--black">Join for free with no upfront costs</p>
              </div>
            </div>

            <div>
              <button className="btn btn--primary">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title title-2">Why It Matters</h2>
            <h3 className="title-3 body--black font-medium">
              Healthy Communities Start Local
            </h3>
            <p className="section-header__body body">
              When people choose local health-conscious businesses, it creates a ripple effect: supporting small businesses, promoting better eating habits, and building a vibrant, connected city.
            </p>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card__value">40%</div>
              <p className="body">
                of visitors say they want healthier local food options but struggle to find them
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">25%</div>
              <p className="body">
                increase in visits for local restaurants when featured in discovery apps
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}