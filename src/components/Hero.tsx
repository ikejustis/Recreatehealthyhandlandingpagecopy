import heroImage from 'figma:asset/fbd473b170e07cd5460de2278a78827fdc78cc83.png';

export function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl leading-tight" 
              style={{ fontWeight: 600, letterSpacing: '-2px' }}
            >
              <span className="text-[#1F5721] whitespace-nowrap">Find Healthy Choices</span>
              <br />
              <span className="text-[#72C975]">Near You</span>
            </h1>
            
            <p 
              className="text-[#000000]/70 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base" 
              style={{ fontWeight: 400 }}
            >
              Discover the best local spots for eating well, moving often, and living balanced in your community, all in one app designed to make healthy living simple and rewarding.
            </p>

            {/* CTA Buttons - Large and well-spaced per Fitts's Law */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <button 
                className="px-6 sm:px-7 py-3 bg-[#1F5721] text-white rounded-full border-2 border-[#1F5721] hover:bg-white hover:text-[#1F5721] transition-all min-w-[180px]" 
                style={{ fontWeight: 500 }}
                onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
              >
                Join the Waitlist
              </button>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="HealthyHand App Screens" 
              className="relative z-10 w-full max-w-md sm:max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}