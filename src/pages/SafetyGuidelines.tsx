import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaHandsWash, FaTools, FaBoxOpen, FaCut, FaClipboardCheck, FaExclamationTriangle, FaTruckLoading, FaLock, FaFireExtinguisher } from 'react-icons/fa';

const safetyGuidelines = [
  {
    icon: <FaHandsWash className="text-3xl text-primary" />, 
    title: 'Wear Safety Gear',
    desc: 'Always wear gloves, safety glasses, and dust masks to protect against splinters and dust.',
    details: 'Wearing proper safety gear is essential to prevent injuries from splinters, dust, and sharp fibers. Use certified equipment and replace damaged gear regularly.'
  },
  {
    icon: <FaExclamationTriangle className="text-3xl text-primary" />, 
    title: 'Avoid Bending',
    desc: 'Avoid bending, GFRP rebars are strong but not ductile like steel.',
    details: 'GFRP rebars can break if bent excessively. Always use straight bars and avoid forcing them into curves.'
  },
  {
    icon: <FaTools className="text-3xl text-primary" />, 
    title: 'Use Non-Metallic Tools',
    desc: 'Use non-metallic tools (e.g., plastic or rubber mallets) to prevent damage to the surface.',
    details: 'Metal tools can chip or damage the GFRP surface. Use plastic or rubber mallets for adjustments.'
  },
  {
    icon: <FaBoxOpen className="text-3xl text-primary" />, 
    title: 'Proper Storage',
    desc: 'Store on flat or on padded supports to prevent deformation.',
    details: 'Keep rebars off the ground and on padded supports to maintain their shape and prevent contamination.'
  },
  {
    icon: <FaCut className="text-3xl text-primary" />, 
    title: 'Safe Cutting',
    desc: 'Cut with diamond or carbide blades and avoid inhaling dust; use water or dust collection systems when cutting.',
    details: 'Always wear a mask and use dust extraction or water to minimize airborne particles when cutting.'
  },
  {
    icon: <FaClipboardCheck className="text-3xl text-primary" />, 
    title: 'Follow Manufacturer Guidelines',
    desc: 'Follow manufacturer guidelines for safe handling and installation.',
    details: 'Refer to the official documentation for best practices and installation procedures.'
  },
  {
    icon: <FaHardHat className="text-3xl text-primary" />, 
    title: 'Handle with Care',
    desc: 'Handle with care to avoid sharp edges from exposed fibers.',
    details: 'Use gloves and avoid dragging rebars to prevent fiber exposure and injury.'
  },
  {
    icon: <FaTruckLoading className="text-3xl text-primary" />, 
    title: 'Safe Lifting',
    desc: 'When lifting heavy bundles, use appropriate lifting equipment and techniques to prevent injury.',
    details: 'Use cranes or forklifts for heavy loads and ensure all lifting is supervised by trained personnel.'
  },
  {
    icon: <FaLock className="text-3xl text-primary" />, 
    title: 'Secure Installation',
    desc: 'Ensure rebar is properly secured during installation to avoid accidental shifting or falls.',
    details: 'Double-check all placements and use ties or supports to keep rebars in place during concrete pouring.'
  },
];

const fireSafety = {
  icon: <FaFireExtinguisher className="text-4xl text-red-600" />,
  title: 'Fire Safety Guidelines',
  desc: 'GFRP rebar has limited fire resistance; ensure adequate concrete cover to protect it from high temperatures. Avoid direct flame exposure during installation and handling, and follow local fire safety regulations.'
};

export default function SafetyGuidelines() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="relative min-h-screen py-12 px-4 md:px-0 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-40 z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-100 rounded-full filter blur-2xl opacity-30 z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <div className="relative max-w-5xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-primary mb-2 text-center drop-shadow-xl tracking-tight"
        >
          <span className="inline-block animate-pulse">Safety</span> <span className="text-orange-700 animate-bounce">Guidelines</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl text-gray-700 mb-12 text-center font-medium"
        >
          Please follow these safety and fire safety guidelines when handling and installing GFRP rebar products.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {safetyGuidelines.map((item, idx) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="backdrop-blur-xl bg-white/70 border border-orange-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-orange-200 transition-transform duration-300 group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-orange-200"
              onClick={() => setOpenIdx(idx)}
              tabIndex={0}
            >
              <motion.div
                className="mb-4 group-hover:rotate-12 transition-transform duration-300"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: idx * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-orange-700 transition-colors duration-300 tracking-wide drop-shadow-sm">{item.title}</h3>
              <p className="text-gray-700 text-base font-medium leading-relaxed">{item.desc}</p>
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-orange-200 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
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
              className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center text-center relative border-4 border-orange-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="mb-4 animate-bounce text-5xl text-primary">{safetyGuidelines[openIdx].icon}</div>
              <h3 className="font-extrabold text-2xl mb-2 text-orange-700 drop-shadow">{safetyGuidelines[openIdx].title}</h3>
              <p className="text-gray-700 text-lg mb-4">{safetyGuidelines[openIdx].details}</p>
              <button
                onClick={() => setOpenIdx(null)}
                className="mt-2 px-6 py-2 rounded-full bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
        {/* Floating fire safety card with bounce */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="mx-auto -mt-10 bg-gradient-to-br from-orange-200 to-orange-50 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border-l-8 border-orange-500 max-w-2xl relative z-20"
          style={{ boxShadow: '0 8px 32px 0 rgba(255,140,0,0.15)' }}
        >
          <div className="mb-3 animate-pulse">{fireSafety.icon}</div>
          <h2 className="font-extrabold text-2xl mb-2 text-orange-700 drop-shadow">{fireSafety.title}</h2>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">{fireSafety.desc}</p>
        </motion.div>
      </div>
    </div>
  );
}
