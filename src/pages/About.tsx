import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CogIcon,
  BeakerIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import companyFacility from '@/assets/company-facility.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import gfrpIntroduction from '@/assets/gfrp-introduction.jpg';
import materialSamples from '@/assets/material-samples.jpg';
import aboutBackground from '@/assets/About.jpeg';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden h-[500px]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(${aboutBackground})`,
            backgroundSize: '100% 100%'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                VEGNAR GFRP
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">
                COMPANY PROFILE
              </span>
            </h1>
          </div>
        </div> */}
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-800 mb-6">
                  About Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vegnar GFRP is a leading manufacturer of high-quality Glass
                  Fiber Reinforced Polymer (GFRP) composite reinforcement
                  products. We supply GFRP rebar (straight and bent),
                  mesh/grids, and custom composite profiles for civil
                  infrastructure, marine, industrial, and specialty construction
                  applications. Our priority is to combine advanced materials,
                  precise manufacturing, and rigorous quality control to deliver
                  durable, corrosion-resistant reinforcement solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">
                  Vision & Mission
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-orange-600 mb-2">
                    Vision
                  </h4>
                  <p className="text-gray-700">
                    To be a global leader in composite reinforcement,
                    championing durable, sustainable, high performance
                    infrastructure.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-2">
                    Mission
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Produce GFRP products that resist corrosion, reduce
                      maintenance, and enhance life span of concrete structures.
                    </li>
                    <li>
                      • Maintain strict quality control (multi-stage QC) to
                      ensure consistency and reliability.
                    </li>
                    <li>
                      • Serve clients across infrastructure, marine, industrial,
                      and building sectors with technical support, custom
                      design, and timely delivery.
                    </li>
                    <li>
                      • Advance sustainable construction by replacing
                      conventional materials where GFRP offers clear long-term
                      benefits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className=" p-8 rounded-xl shadow-sm ">
                <img
                  src="/images/Aboutimg1.jpeg"
                  alt="VEGNAR GFRP Company Profile"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tackling Corrosion Section */}
      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-orange-300/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={gfrpIntroduction}
                  alt="Tackling Corrosion in India's Infrastructure"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-800 mb-4">
                  Tackling Corrosion
                </h2>
                <h3 className="text-2xl text-gray-700 mb-6">
                  in India's Infrastructure
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Corrosion is a silent threat to India's infrastructure,
                  damaging bridges, highways and industrial structures exposed
                  to humidity, saline air and pollutants. It leads to costly
                  repairs, structural failures and environmental strain,
                  compromising safety and longevity.
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-orange-700 mb-3">
                    The Cost of Corrosion
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Economic Impact:</strong> Corrosion leads to
                      frequent repairs, increased maintenance costs, and reduced
                      service life of structures. It is estimated that India
                      loses significant GDP annually due to corrosion-related
                      damages.
                    </li>
                    <li>
                      <strong>Safety Concerns:</strong> Structural degradation
                      caused by corroding steel poses significant risks to
                      public safety, with incidents of collapses and failures
                      increasingly common.
                    </li>
                    <li>
                      <strong>Environmental Fallout:</strong> Repeated repairs
                      and replacements consume additional resources, adding to
                      the environmental burden.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-orange-700 mb-3">
                    The Urgent Need for a Corrosion-Resistant Solution
                  </h4>
                  <p className="text-gray-700">
                    Traditional steel reinforcement, though strong and
                    versatile, is vulnerable to corrosion, especially in
                    coastal, marine and chemically aggressive environments. To
                    safeguard India's infrastructure and ensure its longevity,
                    the industry needs a material that combines strength,
                    durability and corrosion resistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GFRP Rebars Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gray-800">What are</span>
                  <br />
                  <span className="text-orange-700">GFRP Rebars?</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Glass Fibre Reinforced Polymer Rebars, also known as GFRP
                  Rebars, are a cutting-edge alternative to traditional steel
                  reinforcement in modern construction in India. These are made
                  up of Glass fibre & Resin.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  GFRP Rebars have been developed as a non-corrosive solution
                  for reinforcement. They offer superior resistance to chemical
                  degradation in harsh environments like coastal areas, chemical
                  industries and water infrastructure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br p-8 rounded-xl">
                <img
                  src="/images/Aboutimg2.png"
                  alt="GFRP Rebars with glass fibre and resin components"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Manufacturing Process
            </h2>
            <p className="text-xl text-gray-700">
              Manufactured through a highly controlled pultrusion process
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Continuous glass fibres are drawn from spools and passed
                  through a resin bath, where they are coated with a polymer
                  matrix, typically made of vinyl ester or epoxy.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The resin-coated fibre bundle is then pulled through a heated
                  die, which shapes it into the required profile and initiates
                  the curing process of the resin around the fibres.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The die also initiates the curing process, where heat
                  solidifies the resin to form a rigid, solid composite
                  material.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Once the curing is complete, the GFRP rebar is cut to the
                  desired lengths and surface-treated to enhance bonding with
                  concrete.
                </p>
              </div>

              <div className="relative">
                <div className=" p-6 rounded-xl ">
                  <img
                    src="/images/About3.jpeg"
                    alt="GFRP Manufacturing Process Diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className=" p-6 rounded-xl">
                <img
                  src="/banner/banner3.jpeg"
                  alt="GFRP Manufacturing Facility"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <strong>
                      Bend | Pre-degree bend | Hook bend | 45 degree bend |
                      S-Bend | U-Bend | Offset Bend
                    </strong>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    * Note: Actual weight may vary as per tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Our Technical Excellence
            </h2>
            <p className="text-xl text-gray-700">
              Advanced capabilities ensuring superior GFRP products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CogIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Advanced Pultrusion
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Continuous fiber reinforcement process ensuring consistent
                  quality and superior mechanical properties
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BeakerIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Quality Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  In-house testing facility for tensile strength, durability,
                  and performance validation
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Quality Control
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Comprehensive quality assurance protocols meeting
                  international standards
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Custom Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Tailored GFRP products designed for specific application
                  requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with VEGNAR GFRP
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Experience the future of construction with our advanced GFRP
            solutions. Contact our technical experts for customized
            reinforcement solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
              >
                Contact Our Experts
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
