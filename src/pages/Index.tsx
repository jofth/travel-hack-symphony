import React from 'react';
import Layout from '@/components/Layout';
import Slide from '@/components/Slide';
import Navigation from '@/components/Navigation';
import AnimatedDiagram from '@/components/AnimatedDiagram';
import CodeBlock from '@/components/CodeBlock';
import ValueChart from '@/components/ValueChart';
import CardBenefit from '@/components/CardBenefit';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  CreditCard, 
  Plane, 
  User, 
  PieChart, 
  Gift, 
  DollarSign, 
  Percent, 
  ArrowRightCircle, 
  Sparkles,
  Luggage,
  BadgePercent,
  Wallet,
  TicketCheck,
  Building,
  ShoppingBag,
  Tag,
  Check,
  X,
  Award,
  Trophy
} from 'lucide-react';

const navItems = [
  { id: 'intro', label: 'Introduction' },
  { id: 'amex-delta-cards', label: 'Delta Cards' },
  { id: 'amex-mr-cards', label: 'MR Cards' },
  { id: 'point-transfers', label: 'Point Transfers' },
  { id: 'strategies', label: 'Strategies' },
  { id: 'conclusion', label: 'Conclusion' }
];

const Index = () => {
  return (
    <Layout>
      <Navigation items={navItems} />
      
      {/* Introduction Slide */}
      <Slide 
        id="intro" 
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
      </Slide>
      
      {/* Delta Cards Slide */}
      <Slide 
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
      </Slide>
      
      {/* Amex MR Cards Slide */}
      <Slide 
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
      </Slide>
      
      {/* Point Transfers Slide */}
      <Slide 
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
                { id: "amex", label: "Amex MR", color: "#006FCF", position: { x: 0.15, y: 0.5 } },
                { id: "delta", label: "Delta", color: "#E31837", position: { x: 0.85, y: 0.5 } },
                { id: "virgin", label: "Virgin", color: "#DC143C", position: { x: 0.5, y: 0.3 } },
                { id: "flying-blue", label: "Flying Blue", color: "#0570DB", position: { x: 0.5, y: 0.7 } }
              ]}
              connections={[
                { from: "amex", to: "delta", label: "1:1", thickness: 1 },
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
      </Slide>
      
      {/* Strategies Slide */}
      <Slide 
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
      </Slide>
      
      {/* Conclusion Slide */}
      <Slide 
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
      </Slide>
    </Layout>
  );
};

export default Index;
