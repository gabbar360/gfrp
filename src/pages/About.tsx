import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import manufacturing from '@/assets/manufacturing.jpg';
import companyFacility from '@/assets/company-facility.jpg';
import companyTeam from '@/assets/company-team.jpg';
import coreValues from '@/assets/core-values.jpg';
import {
  BuildingOfficeIcon,
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CogIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const companyValues = [
  {
    name: 'Innovation Excellence',
    description:
      'Pioneering advanced GFRP technology through continuous research and development in composite materials',
    icon: AcademicCapIcon,
  },
  {
    name: 'Quality Assurance',
    description:
      'ISO 9001:2015 certified manufacturing processes with rigorous testing and quality control systems',
    icon: TrophyIcon,
  },
  {
    name: 'Customer Partnership',
    description:
      'Collaborative approach with engineers and contractors to deliver optimal GFRP solutions',
    icon: UsersIcon,
  },
  {
    name: 'Sustainable Manufacturing',
    description:
      'Environmentally responsible production methods and long-lasting composite material solutions',
    icon: BuildingOfficeIcon,
  },
];

const companyMilestones = [
  {
    year: '1998',
    title: 'VEGNAR Foundation',
    description:
      'Established as a pioneer in advanced composite materials and GFRP technology development',
  },
  {
    year: '2005',
    title: 'Manufacturing Excellence',
    description:
      'Launched state-of-the-art pultrusion facility with advanced quality control systems',
  },
  {
    year: '2012',
    title: 'Global Expansion',
    description:
      'Extended operations to international markets with enhanced production capacity',
  },
  {
    year: '2018',
    title: 'Technology Leadership',
    description:
      'Achieved industry recognition for innovative GFRP reinforcement solutions',
  },
  {
    year: '2023',
    title: 'Sustainable Future',
    description:
      'Leading the transition to next-generation sustainable composite reinforcement',
  },
];

const technicalCapabilities = [
  {
    name: 'Advanced Pultrusion Technology',
    description:
      'Continuous fiber reinforcement process ensuring consistent quality and superior mechanical properties',
    icon: CogIcon,
  },
  {
    name: 'Material Testing Laboratory',
    description:
      'In-house testing facility for tensile strength, durability, and performance validation',
    icon: BeakerIcon,
  },
  {
    name: 'Quality Control Systems',
    description:
      'Comprehensive quality assurance protocols meeting international standards and certifications',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Engineering Solutions',
    description:
      'Tailored GFRP products designed for specific application requirements and environments',
    icon: ChartBarIcon,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Pro Level */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,154,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 rounded-full border border-primary/30 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                About VEGNAR GFRP
              </span>
            </div> */}

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                VEGNAR GFRP
              </span>
              <br />
              <span className="text-5xl md:text-6xl">
                Engineering Excellence
              </span>
            </h1>

            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Pioneering the future of composite reinforcement with 25+ years of
              innovation, advanced manufacturing, and unwavering commitment to
              engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - Enhanced */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 mb-8">
                <ClockIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Our Legacy
                </span>
              </div>

              <h2 className="text-5xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
                  25+ Years of
                </span>
                <br />
                <span className="text-gray-700">GFRP Innovation</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-xl text-gray-600 leading-relaxed">
                  VEGNAR GFRP stands at the forefront of composite reinforcement
                  technology, pioneering advanced Glass Fiber Reinforced Polymer
                  solutions that transform construction standards. Our
                  state-of-the-art manufacturing processes deliver superior GFRP
                  products that exceed industry expectations for strength,
                  durability, and performance.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  From marine structures to high-rise buildings, our GFRP
                  reinforcement solutions provide unmatched corrosion
                  resistance, electromagnetic transparency, and thermal
                  insulation properties. We serve diverse industries including
                  construction, infrastructure, chemical processing, and marine
                  engineering with customized GFRP solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                >
                  Partner With Us
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={companyFacility}
                  alt="VEGNAR GFRP Manufacturing Excellence"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <div className="text-white font-bold text-xl mb-2">
                      State-of-the-Art Facility
                    </div>
                    <div className="text-gray-200">
                      Advanced pultrusion technology and quality control
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-8">
              <CogIcon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Technical Excellence
              </span>
            </div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Manufacturing
              </span>
              <br />
              <span className="text-4xl text-gray-700">Capabilities</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our comprehensive technical capabilities ensure consistent quality
              and superior performance in every GFRP product we manufacture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <div key={capability.name} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {capability.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 sm:py-24 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-emerald-500/20 mb-8">
              <TrophyIcon className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">
                Core Values
              </span>
            </div> */}

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                VEGNAR GFRP
              </span>
              <br />
              <span className="text-4xl text-gray-700">
                Values & Principles
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              The fundamental principles that guide our approach to innovation,
              quality, and customer partnership in the GFRP industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={value.name} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {value.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
              VEGNAR GFRP by the Numbers
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our track record of excellence in GFRP manufacturing and customer
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                5000+
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                Projects Completed
              </div>
              <div className="text-gray-400">
                Successful GFRP installations worldwide
              </div>
            </div>

            <div className="text-center group">
              <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                Product Variants
              </div>
              <div className="text-gray-400">
                Comprehensive GFRP product range
              </div>
            </div>

            <div className="text-center group">
              <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                Countries Served
              </div>
              <div className="text-gray-400">
                Global presence and distribution
              </div>
            </div>

            <div className="text-center group">
              <div className="text-6xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                Years Experience
              </div>
              <div className="text-gray-400">
                Industry leadership and innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
                Ready to Partner
              </span>
              <br />
              <span className="text-4xl text-gray-700">with VEGNAR GFRP?</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Experience the VEGNAR difference with superior GFRP solutions
              tailored to your specific project requirements. Our technical
              experts are ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-10 py-5 text-lg font-semibold"
              >
                Contact Our Experts
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-5 text-lg font-semibold"
              >
                Download Technical Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-16 bg-gradient-to-b from-transparent to-muted/20" />
    </div>
  );
}
