import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
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

const sliderData = [
  {
    title: 'VEGNAR GFRP - Leading Composite Solutions',
    description:
      'Revolutionary Glass Fiber Reinforced Polymer technology transforming construction industry with superior strength and durability',
    image: '/banner/banner1.jpeg',
    badge: 'Innovation',
  },
  {
    title: 'Advanced GFRP Reinforcement Systems',
    description:
      'Cutting-edge composite rebars offering exceptional corrosion resistance and structural integrity for critical infrastructure',
    image: '/banner/banner2.jpeg',
    badge: 'Technology',
  },
  {
    title: 'VEGNAR Excellence in Engineering',
    description:
      'Decades of expertise in composite material science delivering world-class GFRP solutions for global construction projects',
    image: '/banner/banner3.jpeg',
    badge: 'Excellence',
  },
  {
    title: 'Premium GFRP Product Portfolio',
    description:
      'Comprehensive range of high-performance glass fiber reinforced polymer products engineered for demanding applications',
    image: '/banner/banner4.jpeg',
    badge: 'Products',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
                Revolutionary Glass Fiber Reinforced Polymer technology
                transforming construction industry with superior strength and
                durability
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
      <HeroSlider />

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

      {/* Applications & Industries - Pro Level
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


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/crash-barrier.jpg" alt="Crash Barrier" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Crash Barrier</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for crash barriers providing superior impact resistance and safety on highways.</p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <span>Impact Resistant</span>
                  <div className="w-1 h-1 bg-blue-600 rounded-full" />
                  <span>Safety First</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/grade-slabs.jpg" alt="Grade Slabs" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Grade Slabs</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP mesh and rebar for grade slabs ensuring uniform load distribution and structural integrity.</p>
                <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                  <span>Load Bearing</span>
                  <div className="w-1 h-1 bg-orange-600 rounded-full" />
                  <span>Uniform</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/warehouse-flooring.jpg" alt="Warehouse Flooring" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Warehouse Flooring</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP mesh for industrial warehouse flooring providing excellent load distribution and durability.</p>
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm">
                  <span>Heavy Load</span>
                  <div className="w-1 h-1 bg-purple-600 rounded-full" />
                  <span>Industrial Grade</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/bridge-decks.jpg" alt="Bridge Decks" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Bridge Decks</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for bridge deck construction offering superior corrosion resistance in marine environments.</p>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm">
                  <span>Marine Grade</span>
                  <div className="w-1 h-1 bg-green-600 rounded-full" />
                  <span>Corrosion Free</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/drains.jpg" alt="Drains" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Drains</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for drainage channels and water management infrastructure.</p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <span>Corrosion Resistant</span>
                  <div className="w-1 h-1 bg-blue-600 rounded-full" />
                  <span>Long Life</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/water-tanks.jpg" alt="Water Tanks (UG, Pools)" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Water Tanks (UG, Pools)</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for underground water tanks and swimming pools, ensuring leak-proof durability.</p>
                <div className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                  <span>Leak Proof</span>
                  <div className="w-1 h-1 bg-orange-600 rounded-full" />
                  <span>Durable</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/soft-eye-tbm.jpg" alt="Soft Eye (TBM)" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Soft Eye (TBM)</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for tunnel boring machine (TBM) soft eye applications, providing non-magnetic and easy-to-cut reinforcement.</p>
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm">
                  <span>Non-Magnetic</span>
                  <div className="w-1 h-1 bg-purple-600 rounded-full" />
                  <span>Easy Cut</span>
                </div>
              </Card>
            </div>
            <div className="group relative">
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 text-center group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3">
                <img src="/images/applications/roads.jpg" alt="Roads" className="rounded-2xl mb-4 w-full h-40 object-cover" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Roads</CardTitle>
                <p className="text-gray-600 leading-relaxed mb-6">GFRP rebar for road construction, offering high strength and long-term durability for heavy traffic areas.</p>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm">
                  <span>High Strength</span>
                  <div className="w-1 h-1 bg-green-600 rounded-full" />
                  <span>Heavy Duty</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Spectrum of Applications */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full mb-8 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Spectrum of Applications
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              VEGNAR GFRP delivers comprehensive solutions across diverse
              industries, from infrastructure to specialized applications
            </motion.p>
          </div>

          <div className="space-y-24">
            {/* Roads and Highways */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-3xl border-l-8 border-orange-600 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mr-4">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-orange-600 text-white px-6 py-2 rounded-full">
                      <h3 className="text-lg font-bold">ROADS AND HIGHWAYS</h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-800">
                    <motion.p
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Approach Slabs
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Walkways of Foot Over Bridge
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Slab Culverts
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Bridge cum Bandhara, including Deck Slabs and Barriers
                      between Piers
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Concrete Roads including Jointed Plain Concrete Pavement
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 9, 0] }}
                      transition={{
                        duration: 3.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Continuously-Reinforced Concrete Pavements (CRCP)
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 11, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Short-Panel Concrete Pavements (both cast-in-situ and
                      precast)
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 7, 0] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Retaining Walls
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 13, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Noise barriers
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Box Culverts
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 15, 0] }}
                      transition={{
                        duration: 4.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Crash Barriers & Bridge Parapets
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 3.9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Pedestrian Parapets and Railings
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Bulkheads and Bulkhead Copings
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 9, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Drains
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      Plain Concrete Components
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ x: [0, -20, 0], rotateY: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🛣️</div>
                      <h4 className="text-2xl font-bold">ROADS AND</h4>
                      <h4 className="text-2xl font-bold">HIGHWAYS</h4>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏇</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Industrial & Chemicals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex justify-center order-2 lg:order-1"
              >
                <motion.div
                  animate={{ x: [0, -15, 0], rotateY: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏭</div>
                      <h4 className="text-2xl font-bold">INDUSTRIAL</h4>
                      <h4 className="text-2xl font-bold">CHEMICALS</h4>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⚙️</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl border-l-8 border-blue-600 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full">
                      <h3 className="text-lg font-bold">
                        INDUSTRIAL CHEMICALS
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-800">
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Deck slabs
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 13, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.3,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Underground Water Tanks
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 9, 0] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Sewerage Treatment Plants
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 16, 0] }}
                      transition={{
                        duration: 4.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.9,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Flooring
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Septic Tanks
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 3.9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.5,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Chemical & wastewater treatment plants
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 11, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Boundary Walls
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Real Estate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-3xl border-l-8 border-green-600 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-green-600 text-white px-6 py-2 rounded-full">
                      <h3 className="text-lg font-bold">REAL ESTATE</h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-800">
                    <motion.p
                      animate={{ x: [0, 11, 0] }}
                      transition={{
                        duration: 3.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Parking Garages
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Drainage
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 15, 0] }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Pavements/Internal Road
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Swimming Pools
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 9, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Sewage Treatment Plants
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 13, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Flooring
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Under Water Tanks
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 3.9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Grade Slabs
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ x: [0, -18, 0], rotateY: [0, 5, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏢</div>
                      <h4 className="text-2xl font-bold">REAL</h4>
                      <h4 className="text-2xl font-bold">ESTATE</h4>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏠</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bridges and Tunnels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex justify-center order-2 lg:order-1"
              >
                <motion.div
                  animate={{ x: [0, -22, 0], rotateY: [0, -5, 0] }}
                  transition={{
                    duration: 4.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🌉</div>
                      <h4 className="text-2xl font-bold">BRIDGES AND</h4>
                      <h4 className="text-2xl font-bold">TUNNELS</h4>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🔧</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl border-l-8 border-purple-600 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-purple-600 text-white px-6 py-2 rounded-full">
                      <h3 className="text-lg font-bold">BRIDGES AND TUNNELS</h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-800">
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Tunnel Eyes
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 3.9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.3,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Mechanically Stabilised Earth Wall
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 11, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Panels and Copings
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 16, 0] }}
                      transition={{
                        duration: 4.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.9,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Retaining Walls
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 13, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Bridge Decks and Bridge Deck overlays
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 9, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.5,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Noise barriers
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Crash Barriers and Bridge Parapets
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Airports, Ports & Stations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-red-100 to-red-50 p-8 rounded-3xl border-l-8 border-red-600 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-red-600 text-white px-6 py-2 rounded-full">
                      <h3 className="text-lg font-bold">
                        AIRPORTS, PORTS & STATIONS
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-800">
                    <motion.p
                      animate={{ x: [0, 12, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Runways
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 15, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Drains
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 3.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Sewage Treatment Plants
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 18, 0] }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Underground Water Tanks
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 11, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Noise barriers
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 14, 0] }}
                      transition={{
                        duration: 3.9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Deck slabs
                    </motion.p>
                    <motion.p
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Non-Structural Walls
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ x: [0, -25, 0], rotateY: [0, 5, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">✈️</div>
                      <h4 className="text-xl font-bold">AIRPORTS, PORTS</h4>
                      <h4 className="text-xl font-bold">& STATIONS</h4>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚂</span>
                  </div>
                </motion.div>
              </motion.div>
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

      {/* Our Valuable Clients Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,154,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-secondary">Our Valuable</span>
              <br />
              <span className="text-5xl md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CLIENTS
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to be trusted by a diverse range of clients across
              industries, including importers, distributors, consultants and
              leading companies in construction, ceramics, and chemicals.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
              Featured Clients & Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {/* iXsell - Europe Importer & Distributor */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-2xl font-bold text-blue-600">
                      iXsell
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Europe
                  </div>
                  <div className="text-xs text-gray-600">
                    Importer & Distributor
                  </div>
                </div>
              </div>

              {/* Simpolo - Manufacturing Industry */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-xl font-bold text-gray-800">
                      Simpolo
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Manufacturing Industry
                  </div>
                </div>
              </div>

              {/* Suntech - Casting Foundry */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-xl font-bold text-orange-600">
                      Suntech
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">Casting Foundry</div>
                </div>
              </div>

              {/* Ananta Inc. - USA Consultant */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-xl font-bold text-blue-600">
                      ananta
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Ananta Inc.</div>
                  <div className="text-xs text-gray-600">USA Consultant</div>
                </div>
              </div>

              {/* ANHIT - Chemical Plant */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-xl font-bold text-red-600">ANHIT</div>
                  </div>
                  <div className="text-xs text-gray-600">Chemical Plant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Global Clients
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Countries
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Years Trust
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Satisfaction
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
