import { Search, MapPin, Gift } from 'lucide-react';
import { Link } from "react-router-dom";

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discover',
      description: 'Find the best healthy restaurants, fitness studios, and farmers markets near you with our curated map.'
    },
    {
      number: '2',
      icon: MapPin,
      title: 'Visit',
      description: 'Check in at locations to unlock special offers and earn HealthyPoints for every visit.'
    },
    {
      number: '3',
      icon: Gift,
      title: 'Redeem',
      description: 'Exchange your HealthyRewards for discounts, freebies, and exclusive experiences at partner locations.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title title-2">
            How HealthyHand Works
          </h2>
          <p className="section-header__body body body--black">
            Connecting you to your local wellness community in just 3 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="hiw-step"
            >
              {/* Card */}
              <div className="hiw-card">
                {/* Step Number Badge */}
                <div className="hiw-card__badge">{step.number}</div>

                {/* Icon */}
                <div className="hiw-card__iconWrap" aria-hidden="true">
                  <step.icon width={40} height={40} color="#72C975" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="hiw-card__title title-3">
                  {step.title}
                </h3>
                <p className="hiw-card__text body">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hiw-connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="hiw-cta">
          <Link to="/how-it-works" className="btn btn--primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}