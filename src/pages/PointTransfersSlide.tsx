
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import AnimatedDiagram from '@/components/AnimatedDiagram';
import ValueChart from '@/components/ValueChart';
import { 
  ArrowRightCircle, 
  Sparkles,
  Check,
  X,
  Percent
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const PointTransfersSlide = () => {
  return (
    <SlideLayout 
      id="point-transfers" 
      title="Strategic Point Transfers"
      subtitle="MAXIMIZING VALUE WITH SKYTEAM"
      variant="default"
    >
      <div className="stagger-item mb-12">
        <h3 className="text-2xl font-semibold mb-6">Transfer Paths for Delta Flights</h3>
        
        <div className="h-[400px] bg-white/60 rounded-xl shadow-subtle p-4 backdrop-blur border border-white/20">
          <AnimatedDiagram
            nodes={[
              { id: "amex", label: "Amex MR", color: "#006FCF", position: { x: 0.15, y: 0.35 } },
              { id: "delta", label: "Delta", color: "#E31837", position: { x: 0.85, y: 0.35 } },
              { id: "virgin", label: "Virgin", color: "#DC143C", position: { x: 0.5, y: 0.1 } },
              { id: "flying-blue", label: "Flying Blue", color: "#0570DB", position: { x: 0.5, y: 0.85 } }
            ]}
            connections={[
              { from: "amex", to: "delta", label: "1:1", thickness: 3 },
              { from: "amex", to: "virgin", label: "1:1", thickness: 3 },
              { from: "amex", to: "flying-blue", label: "1:1", thickness: 3 },
              { from: "virgin", to: "delta", label: "Partner Award", thickness: 3 },
              { from: "flying-blue", to: "delta", label: "Partner Award", thickness: 3 }
            ]}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="stagger-item">
          <h3 className="text-xl font-semibold mb-4">Virgin Atlantic Sweet Spots</h3>
          <p className="text-muted-foreground mb-6">
            Transfer Amex MR points to Virgin Atlantic Flying Club for these Delta flight deals:
          </p>
          
          <div className="glass-panel rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">US Domestic (≤1,000 miles)</span>
                  <p className="text-sm text-muted-foreground">One-way economy</p>
                </div>
                <span className="text-lg font-semibold">7,500 miles</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">US Domestic (≤2,000 miles)</span>
                  <p className="text-sm text-muted-foreground">One-way economy</p>
                </div>
                <span className="text-lg font-semibold">12,500 miles</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">US to Europe</span>
                  <p className="text-sm text-muted-foreground">One-way business</p>
                </div>
                <span className="text-lg font-semibold text-delta-blue">50,000 miles</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stagger-item">
          <h3 className="text-xl font-semibold mb-4">Flying Blue Value</h3>
          <p className="text-muted-foreground mb-6">
            Transfer Amex MR to Air France/KLM Flying Blue for these starting rates:
          </p>
          
          <div className="glass-panel rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">US to Europe</span>
                  <p className="text-sm text-muted-foreground">One-way economy</p>
                </div>
                <span className="text-lg font-semibold">20,000 miles</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">US to Europe</span>
                  <p className="text-sm text-muted-foreground">One-way business</p>
                </div>
                <span className="text-lg font-semibold">50,000 miles</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Monthly Promo Rewards</span>
                  <p className="text-sm text-muted-foreground">Discounted awards</p>
                </div>
                <span className="text-lg font-semibold text-green-600">25% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">Award Pricing Comparison</h3>
        <p className="text-muted-foreground mb-6">
          Examples of how much you can save by booking Delta flights through partners:
        </p>
        
        <ValueChart
          data={[
            { label: "NYC-LHR Business (Virgin)", value: 50000, color: "#DC143C" },
            { label: "NYC-LHR Business (Delta)", value: 120000, color: "#E31837" },
            { label: "ATL-LAX Economy (Virgin)", value: 12500, color: "#DC143C" },
            { label: "ATL-LAX Economy (Delta)", value: 20000, color: "#E31837" },
            { label: "JFK-CDG Economy (Flying Blue)", value: 20000, color: "#0570DB" },
            { label: "JFK-CDG Economy (Delta)", value: 35000, color: "#E31837" }
          ]}
          unit=""
          variant="circle"
        />
      </div>

      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">Amex Transfer Bonuses</h3>
        <p className="text-muted-foreground mb-6">
          American Express frequently offers transfer bonuses to Virgin Atlantic and Flying Blue, but rarely to Delta SkyMiles. These bonuses typically range from 25% to 40% and can significantly enhance your points' value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4 text-amex-blue">Transfer Bonus Value</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Example: For a 15,000-point Virgin Atlantic award for a domestic Delta flight, here's how many Amex MR points you'd need during various bonus periods:
            </p>
            
            <Table className="bg-white/80 rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left font-medium">Transfer Bonus</TableHead>
                  <TableHead className="text-right font-medium">Amex MR Points Needed</TableHead>
                  <TableHead className="text-right font-medium">Points Saved</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="font-medium">No Bonus (1:1)</TableCell>
                  <TableCell className="text-right">15,000</TableCell>
                  <TableCell className="text-right">-</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="font-medium">25% Bonus</TableCell>
                  <TableCell className="text-right">12,000</TableCell>
                  <TableCell className="text-right text-green-600">3,000</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="font-medium">30% Bonus</TableCell>
                  <TableCell className="text-right">11,539</TableCell>
                  <TableCell className="text-right text-green-600">3,461</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">40% Bonus</TableCell>
                  <TableCell className="text-right">10,715</TableCell>
                  <TableCell className="text-right text-green-600">4,285</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="glass-panel rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4 flex items-center text-amex-blue">
              <Sparkles className="mr-2 h-5 w-5" />
              Bonus Strategy Tips
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  <span className="font-medium">Monitor Amex Offers:</span> Transfer bonuses typically appear 3-4 times per year and last 1-2 months
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  <span className="font-medium">Timing Matters:</span> Wait for a transfer bonus before moving points if your travel isn't immediate
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRightCircle size={16} className="text-amex-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  <span className="font-medium">Confirm Availability:</span> Always verify award space before transferring points, as transfers are irreversible
                </span>
              </li>
              <li className="flex items-start">
                <X size={16} className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  <span className="font-medium">Avoid Speculative Transfers:</span> Don't transfer points solely for a bonus without specific travel plans, as programs can devalue without notice
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-amex-blue/10 to-amex-gold/10 rounded-lg p-6 border border-blue-100">
          <h4 className="text-xl font-semibold flex items-center mb-4">
            <Percent size={20} className="text-amex-blue mr-2" />
            Maximize Your Points with Stacked Savings
          </h4>
          <p className="text-muted-foreground mb-4">
            The most powerful strategy combines multiple savings opportunities:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>Partner rates (Virgin/Flying Blue) often 50-70% cheaper than booking directly with Delta</span>
            </li>
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>Transfer during a 30% bonus period to get even more value from your Amex points</span>
            </li>
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>Example: A business class flight to Europe could require 120,000 Delta miles, but only 38,500 Amex points during a 30% bonus to Virgin (50,000 ÷ 1.3)</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};

export default PointTransfersSlide;
