import { MapPin, TrendingUp, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export function ForBusinessesPage() {
  const [formData, setFormData] = useState({
    yourName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    description: ''
  });

  const benefits = [
    {
      icon: MapPin,
      title: 'Exposure & High-Intent Customer Acquisition',
      description: 'Priority placement on the HealthyHand map (top results in their category), spotlight features in curated guides and weekly recommendations, placement in Premium+ personalized recommendation journeys, and in-app visibility during major events (conferences, festivals, pop-ups). You\'re delivering high-intent customers who are actively looking for healthy food, wellness services, or local experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Increase Visits',
      description: 'The listing fee covers ongoing promotion, including a full business profile page with photography, menu/services, and CTAs, social media spotlights on HealthyHand\'s channels, inclusion in seasonal campaigns (e.g., "Healthy Summer Picks," "Top Local Gyms"), promotion through run clubs, fitness groups, and community activations, and optional partnership in cross brand events and reward based campaigns. You\'re getting a consistent marketing engine working for you, not just a one time ad.'
    },
    {
      icon: BarChart3,
      title: 'Customer Insights + Loyalty Growth',
      description: 'Gain access to monthly insights report (traffic, views, clicks, user preferences), incentive driven loyalty through HealthyRewards, ability to run exclusive reward campaigns (e.g., 20% off smoothies = more repeat visits), and analytics that track who is visiting, what users search for, and what items/services attract attention. You get actionable data that most small businesses never receive, plus a built in loyalty and retention system.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="page-narrow center stack">
            <h1 className="page-hero__title center">Grow Your Business with HealthyHand</h1>
            <p className="body">
              Connect with health-conscious customers and increase foot traffic to your business
            </p>
            <div>
              <button
                onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn--primary"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title title-2">Why Partner With Us</h2>
            <p className="section-header__body body">
              Gain access to thousands of health-conscious customers in your area
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="biz-benefits">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="biz-card"
              >
                <div className="biz-card__row">
                  {/* Icon */}
                  <div className="biz-card__iconWrap" aria-hidden="true">
                    <benefit.icon width={40} height={40} color="#ffffff" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="biz-card__content">
                    {/* Title */}
                    <h3 className="biz-card__title title-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="biz-card__text body">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section id="partner-form" className="section">
        <div className="container">
          <div className="page-narrow">
            <div className="section-header">
              <h2 className="section-header__title title-2">Partner With Us</h2>
              <p className="section-header__body body">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form">
            {/* Name and Business Name Row */}
            <div className="form__grid2">
              <div>
                <label htmlFor="yourName" className="field__label">Your Name</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="field__control"
                  required
                />
              </div>
              <div>
                <label htmlFor="businessName" className="field__label">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="field__control"
                  required
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="form__grid2">
              <div>
                <label htmlFor="email" className="field__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="field__control"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="field__label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="field__control"
                  required
                />
              </div>
            </div>

            {/* Business Type Dropdown */}
            <div>
              <label htmlFor="businessType" className="field__label">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="field__control"
                required
              >
                <option value="">Select your business type</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="juice-bar">Juice Bar</option>
                <option value="farmers-market">Farmers Market</option>
                <option value="wellness-studio">Wellness Studio</option>
                <option value="gym">Gym/Fitness Center</option>
                <option value="health-food-store">Health Food Store</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Tell us about your business */}
            <div>
              <label htmlFor="description" className="field__label">Tell us about your business</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="field__control field__textarea"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form__actions">
              <button
                type="submit"
                className="btn btn--primary"
              >
                Submit Application
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
}