
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import CardBenefit from '@/components/CardBenefit';
import { 
  Tag, 
  ArrowRightCircle, 
  Plane, 
  Sparkles
} from 'lucide-react';

const StrategiesSlide = () => {
  return (
    <SlideLayout 
      id="strategies" 
      title="Optimal Earning Strategies"
      subtitle="GETTING THE MOST VALUE"
      variant="default"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="stagger-item">
          <h3 className="text-xl font-semibold mb-4">Earning SkyMiles & MR Points Beyond Flying</h3>
          
          <div className="glass-panel rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-delta-blue" />
                  Delta SkyMiles
                </h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">SkyMiles Dining at participating restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">SkyMiles Shopping portal for online purchases</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Linking Delta and Starbucks accounts</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Lyft rides (through spring 2025), then Uber</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-amex-blue" />
                  Amex MR Points
                </h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Rakuten shopping portal (set to earn MR)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Amex Offers bonus points with select merchants</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Credit card referral bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm">Pay Over Time enrollment bonuses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stagger-item">
          <h3 className="text-xl font-semibold mb-4">Business Platinum 35% Points Rebate</h3>
          
          <div className="glass-panel rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              Business Platinum cardholders get 35% of their points back when using Pay with Points for:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Plane size={20} className="text-amex-platinum mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">First/Business Class</h4>
                  <p className="text-sm text-muted-foreground">Any airline, any flight</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Sparkles size={20} className="text-amex-platinum mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium">Selected Airline</h4>
                  <p className="text-sm text-muted-foreground">Any class of service</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="font-medium mb-4">Example Value Calculation</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm">Flight Cost</span>
                  <span className="font-medium">$1,000</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm">Points Required (1¢/point)</span>
                  <span className="font-medium">100,000 points</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm">35% Points Rebate</span>
                  <span className="font-medium text-green-600">35,000 points</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm">Net Points Cost</span>
                  <span className="font-medium">65,000 points</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm">Effective Value</span>
                  <span className="font-medium text-amex-platinum">1.54¢ per point</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">Delta Flash Sales & Sweet Spots</h3>
        <p className="text-muted-foreground mb-6">
          Delta regularly offers flash sales with discounted award prices. Here are some examples:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardBenefit
            title="Domestic Flash Sales"
            description="Round-trip flights within the US"
            value="8,000+ SkyMiles"
            color="#E31837"
            variant="default"
            animationDelay={0.1}
          />
          <CardBenefit
            title="Caribbean Deals"
            description="Round-trip flights to Caribbean islands"
            value="15,000+ SkyMiles"
            color="#E31837"
            variant="default"
            animationDelay={0.2}
          />
          <CardBenefit
            title="Europe Specials"
            description="Round-trip flights to Europe"
            value="32,000+ SkyMiles"
            color="#E31837"
            variant="default"
            animationDelay={0.3}
          />
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium mb-4">SkyTeam Flights Outside the US</h4>
          <p className="text-muted-foreground mb-6">
            SkyMiles can offer better value for flights that don't originate in the US:
          </p>
          
          <div className="glass-panel rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Intra-Asia Flights</span>
                  <p className="text-sm text-muted-foreground">Short-haul flights on Korean Air and other partners</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Intra-Europe Flights</span>
                  <p className="text-sm text-muted-foreground">Flights between European cities on SkyTeam airlines</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Regional Africa/Middle East</span>
                  <p className="text-sm text-muted-foreground">Flights on Kenya Airways, MEA, and others</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Positioning Flights</span>
                  <p className="text-sm text-muted-foreground">Short connector flights for long-haul award tickets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default StrategiesSlide;
