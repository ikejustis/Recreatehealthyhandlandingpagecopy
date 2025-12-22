import { DollarSign, Gift, Heart } from 'lucide-react';

interface RewardsProps {
  onNavigate?: (page: 'rewards') => void;
}

export function Rewards({ onNavigate }: RewardsProps) {
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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            HealthyRewards
          </h2>
          <p className="text-[#000000] max-w-3xl mx-auto text-sm sm:text-base" style={{ fontWeight: 400 }}>
            Earn Points every time you visit, check in, or make a purchase at participating businesses
          </p>
        </div>

        {/* Rewards Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl transition-all cursor-pointer h-full ${
                reward.highlighted
                  ? 'bg-white shadow-lg hover:shadow-xl'
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#72C975] rounded-full flex items-center justify-center mb-4 sm:mb-5 mx-auto">
                <reward.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3 text-center" style={{ fontWeight: 600 }}>
                {reward.title}
              </h3>
              <p className="text-[#000000]/70 leading-relaxed text-center text-sm sm:text-base" style={{ fontWeight: 400 }}>
                {reward.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => onNavigate?.('rewards')}
            className="px-6 sm:px-8 py-3 bg-[#1F5721] text-white rounded-full border-2 border-[#1F5721] hover:bg-white hover:text-[#1F5721] transition-all" 
            style={{ fontWeight: 500 }}
          >
            Learn More About Rewards
          </button>
        </div>
      </div>
    </section>
  );
}