
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { 
  CreditCard, 
  PieChart, 
  Sparkles, 
  Gift
} from 'lucide-react';

const ConclusionSlide = () => {
  return (
    <SlideLayout 
      id="conclusion" 
      title="Strategic Recommendations"
      subtitle="PUTTING IT ALL TOGETHER"
      variant="center"
      background="blue"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-xl backdrop-blur border border-white/30 p-8 mt-8 text-left stagger-item">
          <h3 className="text-2xl font-semibold mb-6 text-white">Optimal Card Strategy</h3>
          
          <ul className="space-y-6">
            <li className="flex items-start stagger-item">
              <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                <CreditCard size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white">Keep One Delta Card</h4>
                <p className="text-white/80 mt-1">
                  Maintain at least one Delta co-branded card (Gold, Platinum, or Reserve) for perks like free checked bags, priority boarding, and most importantly, the TakeOff 15 discount on award redemptions.
                </p>
              </div>
            </li>
            
            <li className="flex items-start stagger-item">
              <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                <PieChart size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white">Earn with MR Cards</h4>
                <p className="text-white/80 mt-1">
                  Focus your spending on Membership Rewards-earning cards like the Amex Gold for restaurants and supermarkets (4x), and the Blue Business Plus for non-bonused spend (2x).
                </p>
              </div>
            </li>
            
            <li className="flex items-start stagger-item">
              <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white">Strategic Redemptions</h4>
                <p className="text-white/80 mt-1">
                  Transfer MR points to Virgin Atlantic or Flying Blue for better value on Delta flights. Be on the lookout for Amex transfer bonuses to get even more value from your points.
                </p>
              </div>
            </li>
            
            <li className="flex items-start stagger-item">
              <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                <Gift size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white">Maximize Card Benefits</h4>
                <p className="text-white/80 mt-1">
                  Fully utilize statement credits and benefits like companion certificates, which can easily offset annual fees and provide hundreds of dollars in additional value each year.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 text-center stagger-item">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Travel Smarter?</h2>
          <p className="text-white/80 text-lg">
            Implement these strategies to maximize your points, enhance your travel experience, and save money on your next adventure.
          </p>
          
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-white text-delta-blue rounded-full font-medium transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default ConclusionSlide;
