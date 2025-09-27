import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="w-full">
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-gradient-to-br from-secondary to-secondary/90">
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/banner/banner1.jpeg)' }}
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center max-w-5xl px-4 sm:px-6">
              <Badge
                variant="secondary"
                className="mb-4 sm:mb-6 bg-primary/30 text-white border-primary/50 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2"
              >
                Innovation
              </Badge>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight">
                VEGNAR GFRP - Leading Composite Solutions
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Revolutionary Glass Fiber Reinforced Polymer technology transforming construction industry with superior strength and durability
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Link to="/blog">
                  <Button className="w-full sm:w-auto bg-primary/90 backdrop-blur-sm border border-primary/50 text-white hover:bg-primary hover:border-primary/70 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Read Blog
                  </Button>
                </Link>
                <Link to="/get-quote">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400/50 text-white hover:from-green-600 hover:to-emerald-700 hover:border-green-300/70 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* VEGNAR GFRP Overview - Pro Level */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,0,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Industry Pioneer
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent mb-8 leading-tight">
              VEGNAR GFRP
              <br />
              <span className="text-4xl md:text-5xl">
                Engineering Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Pioneering the future of construction with revolutionary Glass
              Fiber Reinforced Polymer technology. Where innovation meets
              uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Corrosion Immunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete resistance to chemical attack, saltwater corrosion,
                    and environmental degradation. Perfect for marine structures
                    and harsh environments.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Corrosion Free
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BeakerIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Superior Strength
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    High tensile strength comparable to steel while being
                    significantly lighter. Reduces structural dead load and
                    transportation costs.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                      75%
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Lighter
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CogIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Smart Properties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Non-magnetic, non-conductive, and electromagnetic
                    transparent properties. Perfect for MRI facilities and
                    sensitive installations.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                      EMI
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Transparent
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Pro Level */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,154,0,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-2 rounded-full border border-primary/30 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  Technical Excellence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced GFRP
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Specifications
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Engineered to exceed industry standards with superior mechanical
                properties and long-term durability.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-primary mb-2">
                      1000+
                    </div>
                    <div className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      MPa Tensile Strength
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-secondary mb-2">
                      50+
                    </div>
                    <div className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      GPa Elastic Modulus
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-black text-emerald-400 mb-2">
                      100+
                    </div>
                    <div className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Years Service Life
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl font-black text-purple-400 mb-2">
                      -40°C
                    </div>
                    <div className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      to +80°C Range
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={gfrpReinforcement}
                  alt="VEGNAR GFRP Technical Specifications"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <div className="text-white font-semibold text-lg">
                      Advanced Composite Technology
                    </div>
                    <div className="text-gray-300 text-sm mt-1">
                      Precision-engineered for optimal performance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Industries - Pro Level */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600">
                Global Applications
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                VEGNAR GFRP
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-700">
                Applications
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Trusted by engineers worldwide for critical infrastructure and
              specialized construction projects across diverse industries and
              challenging environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <BuildingOfficeIcon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Marine Structures
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Ports, harbors, offshore platforms, and coastal
                    infrastructure requiring superior corrosion resistance.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Saltwater Resistant</span>
                    <div className="w-1 h-1 bg-blue-600 rounded-full" />
                    <span>100+ Years</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <AcademicCapIcon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Medical Facilities
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    MRI rooms, hospitals, and electromagnetic sensitive areas
                    requiring non-conductive materials.
                  </p>
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <span>EMI Transparent</span>
                    <div className="w-1 h-1 bg-emerald-600 rounded-full" />
                    <span>Non-Magnetic</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <CogIcon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Chemical Plants
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Processing facilities, storage tanks, and corrosive
                    environments demanding chemical resistance.
                  </p>
                  <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                    <span>Chemical Proof</span>
                    <div className="w-1 h-1 bg-orange-600 rounded-full" />
                    <span>High Temp</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <TrophyIcon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Infrastructure
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bridges, tunnels, highways, and critical infrastructure
                    projects requiring long-term durability.
                  </p>
                  <div className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    <span>Load Bearing</span>
                    <div className="w-1 h-1 bg-purple-600 rounded-full" />
                    <span>Lightweight</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Excellence */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={companyFacility}
                alt="VEGNAR GFRP Manufacturing Excellence"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">
                Manufacturing Excellence
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl mb-6">
                VEGNAR GFRP Excellence
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                State-of-the-art manufacturing facilities with advanced
                pultrusion technology, ensuring consistent quality and superior
                performance in every GFRP product.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    25+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    5000+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    50+
                  </div>
                  <div className="text-secondary-foreground/80">
                    Countries Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">
                    ISO
                  </div>
                  <div className="text-secondary-foreground/80">
                    Certified Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-2 bg-gradient-to-b from-transparent to-muted/20" />
    </div>
  );
};

export default Index;
