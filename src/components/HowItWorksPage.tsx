import missionImage from 'figma:asset/835641af96e591779c7559427451142220aba962.png';
import businessImage from 'figma:asset/dcd8f15aa8ce24552825edd87a9ca1d63ae45e84.png';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1F5721] mb-4 sm:mb-6" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            Discover How HealthyHand Connects People to Healthier Living
          </h1>
          <p className="text-[#000000]/70 text-base sm:text-lg max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Empowering your community by bringing together local food, wellness, and rewards all in one app.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              Our Mission
            </h2>
            <h3 className="text-lg sm:text-xl text-[#1F5721]" style={{ fontWeight: 500 }}>
              Making Healthy Living Local, Accessible, and Rewarding
            </h3>
            <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
              HealthyHand was created to help health-conscious people easily discover nutritious food spots, wellness studios, and markets in their area—while giving community-focused businesses the visibility they deserve. We believe in creating meaningful connections that benefit both consumers and local establishments.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] text-center mb-12 sm:mb-16" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#72C975] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3" style={{ fontWeight: 600 }}>
                  {step.number}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Local Businesses Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              For Businesses
            </h2>
            <h3 className="text-lg sm:text-xl text-[#000000]" style={{ fontWeight: 500 }}>
              Shine a Light on Your Business
            </h3>
            <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
              HealthyHand isn't just for users, it's for the community. We help local establishments reach new audiences, increase foot traffic, and grow their visibility through our curated platform and promotional features.
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 justify-center text-left">
                <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                </div>
                <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  Spotlight your menu, products, or services
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center text-left">
                <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                </div>
                <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  Get featured on curated guides and seasonal lists
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center text-left">
                <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                </div>
                <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  Join for free with no upfront costs
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-6 sm:px-8 py-3 bg-[#1F5721] text-white rounded-full border-2 border-[#1F5721] hover:bg-white hover:text-[#1F5721] transition-all" style={{ fontWeight: 500 }}>
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              Why It Matters
            </h2>
            <h3 className="text-lg sm:text-xl text-[#000000]" style={{ fontWeight: 500 }}>
              Healthy Communities Start Local
            </h3>
            <p className="text-[#000000]/70 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
              When people choose local health-conscious businesses, it creates a ripple effect: supporting small businesses, promoting better eating habits, and building a vibrant, connected city.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-2xl text-center shadow-md">
              <div className="text-4xl sm:text-5xl text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>
                40%
              </div>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                of visitors say they want healthier local food options but struggle to find them
              </p>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-2xl text-center shadow-md">
              <div className="text-4xl sm:text-5xl text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>
                25%
              </div>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                increase in visits for local restaurants when featured in discovery apps
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}