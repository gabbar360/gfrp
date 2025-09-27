import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDownIcon,
  DocumentIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import companyFacility from '@/assets/company-facility.jpg';

const corporateDocuments = [
  {
    id: 1,
    title: 'VEGNAR GFRP Company Profile',
    description:
      'Complete corporate identity document featuring company profile, GFRP products, manufacturing processes, and technical specifications',
    image: companyFacility,
    pdfUrl: '/VEGNAR GFRP.pdf',
    category: 'Corporate Identity',
  },
];

export default function CorporateIdentity() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,154,0,0.2),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                VEGNAR GFRP
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">
                Corporate Identity
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-orange-100 leading-relaxed max-w-3xl mx-auto"
            >
              Discover our corporate identity, company profile, and
              comprehensive documentation showcasing VEGNAR GFRP's vision,
              mission, and industry leadership.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Corporate Documents Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-orange-50 to-orange-100"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Corporate Documentation
            </h2>
            <p className="text-xl text-gray-700">
              Access our comprehensive corporate identity and company profile
              documentation
            </p>
          </motion.div>

          <div className="flex justify-center">
            {corporateDocuments.map(document => (
              <motion.div
                key={document.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-200 overflow-hidden w-full max-w-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={document.image}
                      alt={document.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {document.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                      {document.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {document.description}
                    </p>

                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                        onClick={() => window.open(document.pdfUrl, '_blank')}
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Document
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = document.pdfUrl;
                          link.download = `${document.title.replace(/\s+/g, '-')}.pdf`;
                          link.click();
                        }}
                      >
                        <ArrowDownIcon className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Corporate Identity Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Our Corporate Identity
            </h2>
            <p className="text-xl text-gray-700">
              Learn about VEGNAR GFRP's corporate values, mission, and industry
              expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Company Vision',
                desc: 'Our vision to be a global leader in composite reinforcement solutions',
              },
              {
                title: 'Core Values',
                desc: 'Innovation, quality, sustainability, and customer partnership',
              },
              {
                title: 'Industry Leadership',
                desc: '25+ years of expertise in GFRP manufacturing and innovation',
              },
              {
                title: 'Global Presence',
                desc: 'Serving clients worldwide with advanced GFRP solutions',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DocumentIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-orange-600 to-orange-700"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Partner with VEGNAR GFRP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-orange-100 mb-8 leading-relaxed"
          >
            Join us in building a sustainable future with innovative GFRP
            solutions. Contact our team to learn more about partnership
            opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
              >
                Contact Our Team
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              Partnership Inquiry
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
