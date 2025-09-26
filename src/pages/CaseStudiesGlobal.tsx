import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Kochi Metro Rail, India',
    desc: 'GFRP rebars were incorporated to improve durability and corrosion resistance in the harsh, saline coastal environment of Kochi. This ensured longer service life with reduced maintenance costs.',
    img: '/src/assets/hero-bridge.jpg', // Bridge/Metro
  },
  {
    title: 'Indian Institute of Technology (IIT) Hyderabad, India',
    desc: 'The new IIT Hyderabad campus made extensive use of GFRP rebars, which helped reduce the overall carbon footprint of the structure and guaranteed long-term sustainability.',
    img: '/src/assets/core-values.jpg', // Campus/Values
  },
  {
    title: 'Jizan Flood Mitigation Channel, Saudi Arabia',
    desc: 'Recognized as the world’s largest GFRP project, this massive flood mitigation channel in Jizan Economic City utilized GFRP rebars to combat corrosion risks while ensuring structural reliability under extreme conditions.',
    img: '/src/assets/gfrp-reinforcement.jpg', // Rebar/Flood
  },
  {
    title: 'Zurich Airport, Switzerland',
    desc: 'Specialized GFRP reinforcement was used in critical zones to enhance safety and performance for areas subjected to heavy aircraft ground maneuvering loads.',
    img: '/src/assets/materials-showcase.jpg', // Engineering/Samples
  },
  {
    title: 'Wehrhahn Line (Düsseldorf Subway), Germany',
    desc: 'The new urban transport route leveraged GFRP rebars to provide durability and safety in underground environments, free from the corrosion issues typically associated with steel reinforcement.',
    img: '/src/assets/applications-showcase.jpg', // Underground/Urban
  },
  {
    title: 'Mina Zayed Tunnel (Zayed Road Network), Abu Dhabi, UAE',
    desc: 'For the tunnel’s secant pile construction, GFRP rebars were applied to increase resistance against corrosion in a high-salinity coastal environment.',
    img: '/src/assets/manufacturing.jpg', // Tunnel/Production
  },
  {
    title: 'Tunnels (Europe & Japan)',
    desc: 'Across multiple tunnel projects, GFRP rock bolts and rebars have been used for structural support and lining reinforcement, effectively eliminating corrosion risks while extending service life.',
    img: '/src/assets/vegnar-milestones.jpg', // Journey/Milestones
  },
];

export default function CaseStudiesGlobal() {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 py-12 px-4 md:px-0 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-2 text-center drop-shadow-lg"
        >
          Case Studies: <span className="text-orange-700">Global Applications of GFRP Rebars</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg text-gray-700 mb-10 text-center"
        >
          Glass Fiber Reinforced Polymer (GFRP) rebars are gaining worldwide acceptance as a sustainable and high-performance alternative to steel reinforcement. Below are some prominent case studies demonstrating their successful applications across diverse infrastructure projects:
        </motion.p>
        {/* Zig-zag Timeline Journey Layout */}
        <div className="relative flex flex-col items-center mx-auto max-w-3xl before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-gradient-to-b before:from-orange-200 before:to-orange-400 before:rounded-full">
          {caseStudies.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className={`w-full flex flex-col md:flex-row items-center mb-12 last:mb-0 relative z-10 ${isLeft ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Connector space */}
                <div className="hidden md:block w-1/2 h-0 md:h-32 flex-shrink-0"></div>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring', stiffness: 60 }}
                  className={`flex flex-col items-center md:items-${isLeft ? 'start' : 'end'} md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <button
                    type="button"
                    className="bg-white/90 rounded-2xl shadow-xl p-4 flex flex-col items-center min-h-[120px] hover:scale-[1.04] hover:shadow-orange-200 transition-transform duration-300 group focus:outline-none focus:ring-4 focus:ring-orange-200 relative overflow-hidden w-full"
                    onClick={() => setOpenIdx(idx)}
                    tabIndex={0}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 md:h-64 object-cover rounded-xl border-2 border-orange-200 shadow-lg mb-4"
                      onError={e => (e.currentTarget.src = '/placeholder.svg')}
                    />
                    <h3 className="font-bold text-lg md:text-2xl text-primary group-hover:text-orange-700 transition-colors duration-300 text-center w-full mb-2">{item.title}</h3>
                    {/* Animated border effect */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 border-dashed border-orange-200 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </button>
                </motion.div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-400 border-4 border-white rounded-full shadow-lg z-20"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Modal for details */}
      {openIdx !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenIdx(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-lg w-full flex flex-col items-center text-center relative border-4 border-orange-200"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={caseStudies[openIdx].img}
              alt={caseStudies[openIdx].title}
              className="w-full h-40 md:h-56 object-cover rounded-xl border-2 border-orange-100 shadow mb-6"
              onError={e => (e.currentTarget.src = '/placeholder.svg')}
            />
            <h3 className="font-extrabold text-2xl mb-2 text-orange-700 drop-shadow">{caseStudies[openIdx].title}</h3>
            <p className="text-gray-700 text-lg mb-4">{caseStudies[openIdx].desc}</p>
            <button
              onClick={() => setOpenIdx(null)}
              className="mt-2 px-6 py-2 rounded-full bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
