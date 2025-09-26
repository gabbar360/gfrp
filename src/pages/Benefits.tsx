import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheckIcon, 
  BeakerIcon, 
  BoltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartBarIcon,
  FireIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Corrosion Resistance',
    icon: ShieldCheckIcon,
    description: 'Complete immunity to rust and corrosion, ensuring long-lasting structural integrity',
    advantage: '100% corrosion-free'
  },
  {
    title: 'Lightweight Design',
    icon: BeakerIcon,
    description: '75% lighter than steel, reducing transportation costs and installation complexity',
    advantage: '75% weight reduction'
  },
  {
    title: 'Non-Conductive',
    icon: BoltIcon,
    description: 'Electrical and thermal insulation properties for enhanced safety in sensitive applications',
    advantage: 'Zero conductivity'
  },
  {
    title: 'Extended Lifespan',
    icon: ClockIcon,
    description: 'Service life exceeding 100 years with minimal maintenance requirements',
    advantage: '100+ year lifespan'
  },
  {
    title: 'Cost Effective',
    icon: CurrencyDollarIcon,
    description: 'Lower total cost of ownership through reduced maintenance and replacement needs',
    advantage: '40% cost savings'
  },
  {
    title: 'High Strength',
    icon: ChartBarIcon,
    description: 'Superior tensile strength comparable to or exceeding traditional steel reinforcement',
    advantage: 'Higher tensile strength'
  }
];

const comparisonData = [
  {
    property: 'Corrosion Resistance',
    gfrp: { value: 'Excellent', status: 'positive', description: 'Complete immunity to rust and chemicals' },
    tmt: { value: 'Poor', status: 'negative', description: 'Susceptible to rust and corrosion' }
  },
  {
    property: 'Weight',
    gfrp: { value: '75% Lighter', status: 'positive', description: 'Easier handling and transportation' },
    tmt: { value: 'Heavy', status: 'negative', description: 'Requires heavy machinery for handling' }
  },
  {
    property: 'Electrical Conductivity',
    gfrp: { value: 'Non-Conductive', status: 'positive', description: 'Safe for electrical applications' },
    tmt: { value: 'Conductive', status: 'negative', description: 'Risk of electrical hazards' }
  },
  {
    property: 'Thermal Conductivity',
    gfrp: { value: 'Low', status: 'positive', description: 'Better thermal insulation' },
    tmt: { value: 'High', status: 'negative', description: 'Poor thermal performance' }
  },
  {
    property: 'Maintenance',
    gfrp: { value: 'Minimal', status: 'positive', description: 'No painting or coating required' },
    tmt: { value: 'High', status: 'negative', description: 'Regular maintenance needed' }
  },
  {
    property: 'Lifespan',
    gfrp: { value: '100+ Years', status: 'positive', description: 'Extended service life' },
    tmt: { value: '50-75 Years', status: 'negative', description: 'Limited by corrosion' }
  },
  {
    property: 'Installation',
    gfrp: { value: 'Easy', status: 'positive', description: 'Lightweight and flexible' },
    tmt: { value: 'Complex', status: 'negative', description: 'Heavy equipment required' }
  },
  {
    property: 'Environmental Impact',
    gfrp: { value: 'Low', status: 'positive', description: 'Sustainable and recyclable' },
    tmt: { value: 'High', status: 'negative', description: 'Energy-intensive production' }
  }
];

export default function Benefits() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* <div className="flex justify-center mb-6">
              <Badge variant="outline" className="mb-4 border-secondary-foreground/30 bg-secondary-foreground/10 backdrop-blur-sm">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                Technical Advantages
              </Badge>
            </div> */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-white to-secondary-foreground/80 bg-clip-text text-transparent">
              Benefits of GFRP
            </h1>
            <p className="mt-8 text-xl leading-8 text-secondary-foreground/90 max-w-3xl mx-auto">
              Discover why GFRP rebars are revolutionizing the construction industry with superior 
              performance, durability, and cost-effectiveness compared to traditional steel reinforcement.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Advantages of GFRP Rebars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced composite technology delivering superior performance in every aspect
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      {benefit.advantage}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">GFRP vs TMT Steel Comparison</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive comparison showing why GFRP outperforms traditional TMT steel in critical parameters
            </p>
          </div>

          <Card className="bg-card shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <CardTitle className="text-2xl text-center">Technical Comparison Matrix</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Property</th>
                      <th className="px-6 py-4 text-center font-semibold text-foreground">GFRP Rebars</th>
                      <th className="px-6 py-4 text-center font-semibold text-foreground">TMT Steel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-6">
                          <div className="font-semibold text-foreground">{item.property}</div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-600" />
                              <span className="font-semibold text-green-700">{item.gfrp.value}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.gfrp.description}</p>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <XCircleIcon className="h-5 w-5 text-red-600" />
                              <span className="font-semibold text-red-700">{item.tmt.value}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.tmt.description}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Performance Metrics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quantified advantages that make GFRP the superior choice for modern construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">0%</div>
                <div className="text-sm font-medium text-green-600 mb-1">Corrosion Rate</div>
                <div className="text-xs text-green-600">vs 2-5% annual for steel</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">75%</div>
                <div className="text-sm font-medium text-blue-600 mb-1">Weight Reduction</div>
                <div className="text-xs text-blue-600">Easier handling & transport</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">100+</div>
                <div className="text-sm font-medium text-purple-600 mb-1">Years Lifespan</div>
                <div className="text-xs text-purple-600">vs 50-75 years for steel</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">40%</div>
                <div className="text-sm font-medium text-orange-600 mb-1">Cost Savings</div>
                <div className="text-xs text-orange-600">Total cost of ownership</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 sm:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Experience GFRP Advantages?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of engineers and contractors who have made the switch to superior GFRP reinforcement technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Technical Specifications
            </Button>
            <Button variant="outline" size="lg">
              Request Sample & Quote
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}