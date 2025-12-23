import { MapPin, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from "react-router-dom";

export function ForBusinesses() {
  const benefits = [
    {
      icon: MapPin,
      title: 'Exposure & High-Intent Customer Acquisition',
      description: 'Priority placement on the HealthyHand map, spotlight features in curated guides, and in-app visibility during major events',
      highlighted: false
    },
    {
      icon: TrendingUp,
      title: 'Increase Visits',
      description: 'Full business profile with photography, social media spotlights, seasonal campaigns, and promotion through run clubs and community activations',
      highlighted: true
    },
    {
      icon: BarChart3,
      title: 'Customer Insights + Loyalty Growth',
      description: 'Monthly insights report, incentive-driven loyalty through HealthyRewards, and analytics that track customer behavior and preferences',
      highlighted: false
    }
  ];

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title title-2">
            For Businesses
          </h2>
          <p className="section-header__body body body--black">
            Join your local wellness network and connect with health-conscious customers
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="biz-benefits">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`biz-card ${benefit.highlighted ? 'biz-card--featured' : ''}`}
            >
              <div className="biz-card__row">
                {/* Icon */}
                <div className="biz-card__iconWrap" aria-hidden="true">
                  <benefit.icon width={32} height={32} color="#ffffff" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="biz-card__content">
                  <h3 className="biz-card__title title-3">
                    {benefit.title}
                  </h3>
                  <p className="biz-card__text body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="biz-cta">
          <Link to="/for-businesses#partner-form" className="btn btn--primary">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}