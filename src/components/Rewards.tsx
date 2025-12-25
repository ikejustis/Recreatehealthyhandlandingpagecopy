import { DollarSign, Gift, Heart } from 'lucide-react';
import { Link } from "react-router-dom";

export function Rewards() {
  const rewards = [
    {
      icon: DollarSign,
      title: 'Discounts',
      description: 'Redeem Points for discounts at your favorite local spots',
      highlighted: false
    },
    {
      icon: Gift,
      title: 'Free Items',
      description: 'Earn enough Points to get free menu items or wellness services',
      highlighted: true
    },
    {
      icon: Heart,
      title: 'Exclusive Experiences',
      description: 'Access special wellness events and unique local experiences',
      highlighted: false
    }
  ];

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title title-2">
            HealthyRewards
          </h2>
          <p className="section-header__body body body--black">
            Earn Points every time you visit, check in, or make a purchase at participating businesses
          </p>
        </div>

        {/* Rewards Cards */}
        <div className="rewards-grid">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`rewards-card ${reward.highlighted ? 'rewards-card--featured' : ''}`}
            >
              {/* Icon */}
              <div className="rewards-card__iconWrap" aria-hidden="true">
                <reward.icon width={32} height={32} color="#ffffff" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="rewards-card__title title-3">
                {reward.title}
              </h3>
              <p className="rewards-card__text body">
                {reward.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="rewards-cta">
          <Link to="/rewards" className="btn btn--primary">
            Learn More About Rewards
          </Link>
        </div>
      </div>
    </section>
  );
}