import { Coffee, Activity, ShoppingBag, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: 'Healthy Dining',
      description: 'Discover local health-forward restaurants and juice bars'
    },
    {
      icon: Activity,
      title: 'Fitness & Yoga',
      description: 'Find nearby fitness and yoga studios'
    },
    {
      icon: ShoppingBag,
      title: 'Wellness Shops',
      description: 'Explore wellness shops and services'
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Earn HealthyRewards with each visit and redeem for healthy rewards'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title title-2">
            Your Local Wellness Companion
          </h2>
          <p className="section-header__body body body--black">
            HealthyHand connects you with nearby wellness spots from cafes and smoothie bars to gyms, yoga studios, and holistic shops in your community. Whether you're looking for a quick post workout smoothie or a new place to unwind, HealthyHand helps you find it fast.
          </p>
        </div>

        {/* Feature Cards - Large clickable areas with visual appeal */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              {/* Icon */}
              <div className="feature-card__iconWrap">
                <feature.icon width={32} height={32} color="#72C975" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="feature-card__title title-3">
                {feature.title}
              </h3>
              <p className="feature-card__text body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}