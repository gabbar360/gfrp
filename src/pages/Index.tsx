import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bridge.jpg';
import materialsShowcase from '@/assets/materials-showcase.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import productLineup from '@/assets/product-lineup.jpg';
import companyFacility from '@/assets/company-facility.jpg';
import companyTeam from '@/assets/company-team.jpg';
import materialSamples from '@/assets/material-samples.jpg';
import vegnarMilestones from '@/assets/vegnar-milestones.jpg';
import gfrpReinforcement from '@/assets/gfrp-reinforcement.jpg';
import gfrpIntroduction from '@/assets/gfrp-introduction.jpg';
import coreValues from '@/assets/core-values.jpg';
import applicationsShowcase from '@/assets/applications-showcase.jpg';
import {
  BeakerIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Non-Corrosive',
    description: 'Complete resistance to rust and corrosion - ideal for harsh environments',
    icon: ShieldCheckIcon,
  },
  {
    name: '75% Lighter',
    description: 'Significantly lighter than steel rebars, reducing transportation costs',
    icon: BeakerIcon,
  },
  {
    name: 'Non-Conductive',
    description: 'Electrical and thermal insulation properties for enhanced safety',
    icon: CogIcon,
  },
  {
    name: '100+ Year Life',
    description: 'Extended service life reduces maintenance and replacement costs',
    icon: ChartBarIcon,
  },
];

const stats = [
  { name: 'Years of Excellence', value: '15+' },
  { name: 'Projects Delivered', value: '1000+' },
  { name: 'Countries Served', value: '25+' },
  { name: 'Tons Produced', value: '50,000+' },
];

const companyHighlights = [
  {
    name: 'Advanced Manufacturing',
    description: 'State-of-the-art production facilities with automated quality control systems',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Expert Team',
    description: '50+ engineers and material scientists dedicated to innovation',
    icon: UsersIcon,
  },
  {
    name: 'Research & Development',
    description: 'Continuous R&D investment in next-generation composite materials',
    icon: AcademicCapIcon,
  },
  {
    name: 'Industry Leadership',
    description: 'Recognized leader in GFRP technology and sustainable solutions',
    icon: TrophyIcon,
  },
];

const productCategories = [
  {
    name: 'GFRP Rebar Bars',
    description: 'High-strength, corrosion-resistant reinforcement bars for concrete structures',
    applications: ['Bridge construction', 'Marine structures', 'Chemical plants', 'Highway construction'],
    image: gfrpReinforcement,
  },
  {
    name: 'GFRP Rebar Bends',
    description: 'Pre-fabricated rebar bends and hooks for structural connections',
    applications: ['Foundation corners', 'Beam-column connections', 'Retaining walls', 'Structural joints'],
    image: applicationsShowcase,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="text-primary">Vegnar GFRP Rebars</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
                The next generation reinforcement for concrete structures. Advanced, high-strength, 
                non-corrosive GFRP rebars designed to replace traditional steel reinforcement.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link to="/materials">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    View Products
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={vegnarMilestones} 
                alt="Vegnar GFRP - Advanced Reinforcement Solutions" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-primary-foreground/80">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Badge variant="outline" className="mb-4">
              Why Choose GFRP
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Vegnar GFRP Rebars
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Advanced composite rebars offering superior performance characteristics for demanding 
              structural applications in construction and infrastructure projects.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Product Portfolio
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our GFRP Rebar Products
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive range of GFRP reinforcement solutions including straight bars and 
              pre-fabricated bends engineered for every structural requirement.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {productCategories.map((category, index) => (
              <Card key={index} className="bg-card shadow-card overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-muted to-muted/50" 
                     style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Key Applications:</h4>
                    <ul className="space-y-2">
                      {category.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/materials">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Products
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Experience & About Us */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <Badge variant="outline" className="mb-4">
                  About Vegnar GFRP
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  15+ Years of GFRP Rebar Excellence
                </h2>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  Founded in 2010, Vegnar GFRP has established itself as a leading manufacturer of 
                  GFRP rebars and reinforcement solutions. Our journey began with a vision to 
                  revolutionize concrete reinforcement through advanced composite rebar technology.
                </p>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  Today, we serve clients across construction, infrastructure, and marine industries with 
                  innovative GFRP rebar solutions that offer superior corrosion resistance, lightweight 
                  properties, and exceptional durability compared to traditional steel reinforcement.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <ClockIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                      Established Excellence.
                    </dt>
                    <dd className="inline"> Operating since 2010 with consistent growth and innovation in GFRP technology.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <GlobeAltIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                      Global Reach.
                    </dt>
                    <dd className="inline"> Serving clients across India and expanding international presence in Southeast Asia.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <AcademicCapIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                      GFRP Expertise.
                    </dt>
                    <dd className="inline"> Specialized in GFRP rebar manufacturing with advanced pultrusion technology and quality control.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                className="aspect-[4/3] w-[48rem] max-w-none rounded-xl bg-gray-900 object-cover shadow-xl"
                src={companyFacility}
                alt="Vegnar GFRP manufacturing facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Vegnar GFRP Rebars
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our commitment to quality, innovation, and customer satisfaction sets us apart 
              in the GFRP reinforcement industry.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {companyHighlights.map((highlight) => (
                <div key={highlight.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <highlight.icon className="h-5 w-5 flex-none text-primary" />
                    {highlight.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{highlight.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-xl"
                src={companyTeam}
                alt="Vegnar GFRP engineering team"
              />
            </div>
            <div className="flex items-center lg:pl-8">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  Expert Team & GFRP Excellence
                </h2>
                <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
                  Our specialized team combines decades of experience in GFRP rebar technology, 
                  structural engineering, and manufacturing to deliver world-class reinforcement solutions.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">50+</div>
                    <div className="text-secondary-foreground/80">Engineers & Scientists</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">1000+</div>
                    <div className="text-secondary-foreground/80">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">25+</div>
                    <div className="text-secondary-foreground/80">Patents & Research</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">ISO</div>
                    <div className="text-secondary-foreground/80">Quality Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              GFRP Rebar Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Complete range of GFRP rebars for construction, marine, and infrastructure applications
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4" 
                     style={{ backgroundImage: `url(${materialsShowcase})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <CardTitle>Standard GFRP</CardTitle>
                <CardDescription>
                  Cost-effective solutions for general construction and infrastructure applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Excellent strength-to-weight ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Corrosion resistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Easy installation</span>
                  </li>
                </ul>
                <Link to="/materials" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View All Materials
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4" 
                     style={{ backgroundImage: `url(${manufacturing})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <CardTitle>High Performance</CardTitle>
                <CardDescription>
                  Advanced composites for demanding structural and marine applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Superior tensile strength</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Marine grade durability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Fire retardant options</span>
                  </li>
                </ul>
                <Link to="/case-studies" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View Case Studies
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <ChartBarIcon className="h-16 w-16 text-primary" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>
                  Comprehensive documentation, testing data, and engineering support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Material datasheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Performance testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Engineering consultation</span>
                  </li>
                </ul>
                <Link to="/contact" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-foreground/80">
              Contact our technical team to discuss your project requirements and find the perfect GFRP solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/materials" className="text-sm font-semibold leading-6 text-secondary-foreground hover:text-primary transition-colors">
                Browse Materials <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
