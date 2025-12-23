import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is HealthyHand?',
      answer: 'HealthyHand is a platform that helps you discover and connect with local health-focused businesses like gyms, yoga studios, healthy restaurants, wellness centers, and more. Our mission is to make healthy living more accessible and rewarding for everyone.'
    },
    {
      question: 'Can I get points from any place on the app?',
      answer: 'No, you can only earn HealthyRewards points at establishments that display the HealthyRewards badge. Look for the green badge icon on business listings to know which locations participate in the rewards program.'
    },
    {
      question: 'What are the subscription options?',
      answer: 'HealthyHand offers both free and premium subscription tiers. The free version gives you full access to discover businesses and earn limited points. Premium members get to redeem their points for rewards, plus exclusive perks like bonus points and early access to special promotions.'
    },
    {
      question: 'How do I check my points balance?',
      answer: 'Your current points balance is displayed at the top of the app\'s home screen and in your profile section. You can also view your balance when checking in at locations.'
    },
    {
      question: 'Do points expire?',
      answer: 'Points remain active as long as you use the app at least once every 12 months. Inactive accounts may have points expire after 12 months of no activity.'
    },
    {
      question: 'Can I share or transfer points?',
      answer: 'Points are non-transferable between accounts. However, you can gift redeemed rewards to friends by selecting the "Gift" option when redeeming.'
    },
    {
      question: 'How do I redeem my HealthyRewards?',
      answer: 'Browse available rewards in the Rewards section of the app. Select the reward you want, confirm your redemption, and a unique code will be generated. Show this code to the participating business to claim your reward.'
    },
    {
      question: 'Is HealthyHand available in my area?',
      answer: 'HealthyHand is continuously expanding to new cities and regions. Enter your location in the app to see participating businesses near you. If we\'re not in your area yet, join our waitlist to be notified when we launch in your region.'
    }
  ];

  return (
    <section className="section">
      <div className="container faq__container">
        <h2 className="faq__title title-2 center">
          Frequently Asked Questions
        </h2>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="faq-item__button"
              >
                <span className="faq-item__question">
                  {faq.question}
                </span>
                <ChevronDown 
                  width={20}
                  height={20}
                  className={`faq-item__chevron ${openFaq === index ? 'faq-item__chevron--open' : ''}`}
                />
              </button>
              
              {openFaq === index && (
                <div className="faq-item__answerWrap">
                  <p className="body">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}