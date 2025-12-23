import { MapPin, Gift, Award } from 'lucide-react';
import rewardsImage from '../assets/Image (HealthyRewards App Screen).png';

export function RewardsPage() {
  const steps = [
    {
      icon: MapPin,
      title: 'Check In',
      description: 'Visit participating locations and check in through the HealthyHand app'
    },
    {
      icon: Award,
      title: 'Earn Points',
      description: 'Get 1 HealthyReward per visit for healthy rewards'
    },
    {
      icon: Gift,
      title: 'Redeem',
      description: 'Exchange your HealthyRewards for perks at local businesses'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="page-hero__grid">
            {/* Left Content */}
            <div className="page-hero__content">
              <h1 className="page-hero__title">
                HealthyRewards -
                <br />
                Your Reward Program
              </h1>
              <p className="page-hero__lead body">
                Earn points for making healthy choices at local businesses
              </p>
            </div>

            {/* Right Content - App Preview */}
            <div className="page-hero__media">
              <img 
                src={rewardsImage} 
                alt="HealthyRewards App Screen" 
                className="page-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="page-title title-2">
            HealthyRewards - How It Works
          </h2>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step">
                {/* Icon */}
                <div className="step__iconWrap" aria-hidden="true">
                  <step.icon width={40} height={40} color="#ffffff" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="step__title title-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
