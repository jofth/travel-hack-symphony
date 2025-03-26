
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import CardBenefit from '@/components/CardBenefit';
import { CreditCard, Plane, Percent, Gift } from 'lucide-react';

const TitleSlide = () => {
  return (
    <SlideLayout 
      id="title" 
      variant="center"
      background="gradient"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-amex-blue font-medium mb-2 stagger-item">
          Travel Hacking Symphony
        </p>
        <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6 stagger-item">
          Maximizing <span className="text-gradient">American Express</span> & <span className="text-delta-blue">Delta</span> Rewards
        </h1>
        <p className="text-xl text-gray-600 stagger-item">
          A strategic guide to optimizing credit card benefits and maximizing travel value
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 stagger-item">
          <CardBenefit
            title="Earn Points Faster"
            description="Strategically use Amex credit cards to maximize bonus categories and earn more rewards"
            icon={<Percent size={24} />}
            variant="feature"
            color="#006FCF"
            animationDelay={0.1}
          />
          <CardBenefit
            title="Enjoy Premium Benefits"
            description="Unlock valuable perks like lounge access, free checked bags, and companion certificates"
            icon={<Gift size={24} />}
            variant="feature"
            color="#003A70"
            animationDelay={0.2}
          />
          <CardBenefit
            title="Save on Travel"
            description="Redeem points strategically for maximum value on flights and travel experiences"
            icon={<Plane size={24} />}
            variant="feature"
            color="#E31837"
            animationDelay={0.3}
          />
        </div>
      </div>
    </SlideLayout>
  );
};

export default TitleSlide;
