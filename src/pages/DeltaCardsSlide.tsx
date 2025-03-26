
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import CardBenefit from '@/components/CardBenefit';
import { 
  User, 
  BadgePercent, 
  Luggage, 
  TicketCheck, 
  Building, 
  Gift, 
  ArrowRightCircle, 
  Award,
  Trophy,
  Check,
  X
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const DeltaCardsSlide = () => {
  return (
    <SlideLayout 
      id="amex-delta-cards" 
      title="Amex Delta Co-branded Cards"
      subtitle="CARD BENEFITS & PERKS"
      variant="default"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 stagger-item">
        <CardBenefit
          title="Priority Boarding"
          description="Board earlier and secure overhead bin space on all Delta flights"
          icon={<User size={24} />}
          animationDelay={0.1}
        />
        <CardBenefit
          title="TakeOff 15"
          description="15% discount when using miles to book award travel on Delta flights"
          icon={<BadgePercent size={24} />}
          isRecommended={true}
          animationDelay={0.2}
        />
        <CardBenefit
          title="Free Checked Bags"
          description="First checked bag free for cardholder and companions on the same reservation"
          icon={<Luggage size={24} />}
          value="Save $60+ per roundtrip"
          animationDelay={0.3}
        />
        <CardBenefit
          title="Companion Certificates"
          description="Annual companion certificate upon renewal for Delta Platinum and Reserve cards"
          icon={<TicketCheck size={24} />}
          value="Up to $700+ value"
          isRecommended={true}
          animationDelay={0.4}
        />
        <CardBenefit
          title="Lounge Access"
          description="Delta Sky Club access when flying Delta with the Reserve card"
          icon={<Building size={24} />}
          animationDelay={0.5}
        />
        <CardBenefit
          title="Sign-up Bonuses"
          description="Substantial welcome offers after meeting minimum spend requirements"
          icon={<Gift size={24} />}
          value="50,000-90,000+ SkyMiles"
          animationDelay={0.6}
        />
      </div>
      
      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">Companion Certificate Expanded Coverage</h3>
        <p className="text-muted-foreground mb-6">
          As of February 1, 2024, eligible destinations for companion certificates have expanded beyond the continental US to include:
        </p>
        
        <div className="glass-panel rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Alaska and Hawaii</span>
            </div>
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Caribbean Islands</span>
            </div>
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Mexico</span>
            </div>
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Central America</span>
            </div>
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Bermuda</span>
            </div>
            <div className="flex items-center">
              <ArrowRightCircle size={16} className="text-delta-blue mr-2" />
              <span>Select other destinations</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">MQD Headstart & MQD Boost</h3>
        <p className="text-muted-foreground mb-6">
          Qualifying Delta Amex cards provide MQD (Medallion Qualification Dollars) benefits that can help you earn elite status without flying:
        </p>
        
        <div className="glass-panel rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold flex items-center text-delta-blue mb-3">
                <Award className="mr-2 h-5 w-5" />
                MQD Headstart
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                New for 2024, an automatic MQD credit toward status, issued at the beginning of the qualification year:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm"><span className="font-medium">Delta Gold Card:</span> $2,500 MQD Headstart</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm"><span className="font-medium">Delta Platinum Card:</span> $5,000 MQD Headstart</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm"><span className="font-medium">Delta Reserve Card:</span> $7,500 MQD Headstart</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm">Get multiple headstarts by having both personal and business versions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold flex items-center text-delta-blue mb-3">
                <Trophy className="mr-2 h-5 w-5" />
                MQD Boost
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Earn additional MQDs based on your spending throughout the year:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm"><span className="font-medium">Earn Rate:</span> $30 MQDs for every $1,000 in eligible purchases</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={16} className="text-delta-blue mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm"><span className="font-medium">Example:</span> $50,000 annual spend = $1,500 MQDs</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm">Spend across multiple Delta cards for increased MQD earnings</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h4 className="font-medium mb-2 text-delta-blue">Status by Spending Strategy</h4>
            <p className="text-sm text-muted-foreground mb-3">
              With the right combination of Delta cards and spending, you can achieve Medallion status with little to no flying:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="font-medium">Silver Medallion (normally $3,000 MQDs):</span> Gold Card ($2,500) + ~$17,000 spend ($510 MQDs)</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="font-medium">Gold Medallion (normally $8,000 MQDs):</span> Personal Reserve ($7,500) + ~$17,000 spend ($510 MQDs)</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="font-medium">Platinum Medallion (normally $12,000 MQDs):</span> Personal Reserve ($7,500) + Business Platinum ($5,000) + minimal spend</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 stagger-item">
        <h3 className="text-2xl font-semibold mb-4">Delta Card Comparison</h3>
        <p className="text-muted-foreground mb-6">
          Compare the benefits and annual fees of the different Delta co-branded American Express cards:
        </p>
        
        <div className="overflow-x-auto">
          <Table className="w-full bg-white/80 rounded-lg shadow-md overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>Benefit</TableHead>
                <TableHead>Delta Blue</TableHead>
                <TableHead>Delta Gold</TableHead>
                <TableHead>Delta Platinum</TableHead>
                <TableHead>Delta Reserve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Annual Fee</TableCell>
                <TableCell>$0</TableCell>
                <TableCell>$150</TableCell>
                <TableCell>$350</TableCell>
                <TableCell>$650</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Free Checked Bag</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Priority Boarding</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TakeOff 15 Discount</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Companion Certificate</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell>Main Cabin</TableCell>
                <TableCell>First/Comfort+/Main</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lounge Access</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell>$50 per visit</TableCell>
                <TableCell>$50 per visit</TableCell>
                <TableCell>Included</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Status Boost</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell>10k MQMs/$25k spend</TableCell>
                <TableCell>15k MQMs/$30k spend</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MQD Headstart</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell>$2,500</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>$7,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MQD Boost</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Global Entry/TSA Credit</TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><X size={16} className="text-red-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
                <TableCell><Check size={16} className="text-green-500" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </SlideLayout>
  );
};

export default DeltaCardsSlide;
