
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import ValueChart from '@/components/ValueChart';
import { 
  CreditCard, 
  Plane, 
  DollarSign, 
  Percent, 
  Sparkles,
  Wallet,
  ShoppingBag,
  Building
} from 'lucide-react';

const AmexMrCardsSlide = () => {
  return (
    <SlideLayout 
      id="amex-mr-cards" 
      title="Amex Membership Rewards Cards"
      subtitle="FLEXIBLE POINT EARNING"
      variant="default"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Gold Card */}
        <div className="col-span-1 rounded-xl overflow-hidden shadow-card bg-gradient-to-br from-amex-gold/20 to-amex-gold/5 border border-amex-gold/20 stagger-item animate-fade-in">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-1">Amex Gold Card</h3>
            <p className="text-muted-foreground mb-4">Everyday spending powerhouse</p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <DollarSign size={20} className="text-amex-gold mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">4x at Restaurants</h4>
                  <p className="text-sm text-muted-foreground">Worldwide dining, up to $50,000 per year</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ShoppingBag size={20} className="text-amex-gold mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">4x at U.S. Supermarkets</h4>
                  <p className="text-sm text-muted-foreground">Up to $25,000 per year</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Plane size={20} className="text-amex-gold mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">3x on Flights</h4>
                  <p className="text-sm text-muted-foreground">Booked directly with airlines or Amex Travel</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="font-medium mb-2">Annual Statement Credits</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Dining Credit</span>
                  <span className="text-sm font-medium">$120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Resy Credit</span>
                  <span className="text-sm font-medium">$100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Dunkin' Credit</span>
                  <span className="text-sm font-medium">$84</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blue Business Plus */}
        <div className="col-span-1 rounded-xl overflow-hidden shadow-card bg-gradient-to-br from-blue-50 to-blue-100/20 border border-blue-200/30 stagger-item">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-1">Blue Business Plus</h3>
            <p className="text-muted-foreground mb-4">No-annual-fee option</p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <CreditCard size={20} className="text-blue-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">2x on All Purchases</h4>
                  <p className="text-sm text-muted-foreground">Up to $50,000 per year</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Wallet size={20} className="text-blue-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">Keep MR Points Active</h4>
                  <p className="text-sm text-muted-foreground">No annual fee</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Sparkles size={20} className="text-blue-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">Flexible Redemption</h4>
                  <p className="text-sm text-muted-foreground">Transfer to travel partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Platinum */}
        <div className="col-span-1 rounded-xl overflow-hidden shadow-card bg-gradient-to-br from-amex-platinum/20 to-amex-platinum/5 border border-amex-platinum/20 stagger-item">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-1">Business Platinum</h3>
            <p className="text-muted-foreground mb-4">Premium travel benefits</p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <Plane size={20} className="text-amex-platinum mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">5x on Flights & Hotels</h4>
                  <p className="text-sm text-muted-foreground">Booked through Amex Travel</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Percent size={20} className="text-amex-platinum mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">35% Airline Bonus</h4>
                  <p className="text-sm text-muted-foreground">When using Pay with Points for flights</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Building size={20} className="text-amex-platinum mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">Lounge Access</h4>
                  <p className="text-sm text-muted-foreground">Centurion, Priority Pass, Delta (when flying Delta)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="font-medium mb-2">Annual Statement Credits</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Dell</span>
                  <span className="text-sm font-medium">$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Indeed</span>
                  <span className="text-sm font-medium">$360</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Wireless</span>
                  <span className="text-sm font-medium">$120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">+ More</span>
                  <span className="text-sm font-medium">$350+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-6">Value Comparison: Annual Statement Credits</h3>
        
        <ValueChart
          data={[
            { label: "Amex Gold", value: 304, color: "#B2A06E" },
            { label: "Amex Business Platinum", value: 1230, color: "#B0B2B5" },
            { label: "Blue Business Plus", value: 0, color: "#006FCF" }
          ]}
          unit="$"
          variant="horizontal"
        />
      </div>
    </SlideLayout>
  );
};

export default AmexMrCardsSlide;
