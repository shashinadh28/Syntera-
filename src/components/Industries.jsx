import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportOnce, easePremium } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const INDUSTRIES = [
  {
    name: 'Financial Services',
    img: '/Industries/financial_services.webp',
    desc: 'From AI fraud detection and LLM-powered compliance tooling to IAM governance across banking, fintech, and insurance — we understand what regulated modernization requires.',
  },
  {
    name: 'Healthcare',
    img: '/Industries/Healthcare.webp',
    desc: 'AI-assisted care coordination, EHR platform engineering, HIPAA-aligned IAM implementation, and identity lifecycle management for health-tech organizations.',
  },
  {
    name: 'Retail & eCommerce',
    img: '/Industries/Retail-eCommerce.webp',
    desc: 'Product recommendation engines, AI-powered search, Customer Identity and Access Management (CIAM) deployment, and real-time data platform builds for enterprise retail.',
  },
  {
    name: 'Manufacturing',
    img: '/Industries/Manufacturing.webp',
    desc: 'Operational technology IAM, AI-powered predictive maintenance, Industrial IoT integration, and ERP modernization for manufacturing organizations.',
  },
  {
    name: 'Telecommunications',
    img: '/Industries/Telecommunications.webp',
    desc: 'Network IAM, AI-driven operations (AIOps), OSS/BSS platform modernization, and Zero Trust architecture for telecom infrastructure at scale.',
  },
  {
    name: 'Technology / SaaS',
    img: '/Industries/Technology-SaaS.webp',
    desc: 'LLM product integration, MLOps platform builds, SaaS IAM implementation, and AI/ML specialist placement for high-growth technology companies.',
  },
];

export default function Industries() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="industries"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Industries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-ink-900"
          >
            Deep expertise in the industries being{' '}
            <span style={{ color: '#1565D8' }}>transformed by AI and identity security.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-ink-500 max-w-2xl"
          >
            We understand your compliance requirements, your threat landscape, and the talent market in your sector.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.08 }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                border: '1px solid rgba(15,23,42,0.09)',
                boxShadow: hoveredIdx === i
                  ? '0 20px 60px rgba(15,23,42,0.14), 0 4px 16px rgba(15,23,42,0.08)'
                  : '0 2px 12px rgba(15,23,42,0.05)',
                transition: 'box-shadow 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                transform: hoveredIdx === i ? 'translateY(-6px)' : 'translateY(0px)',
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredIdx === i ? 'scale(1.06)' : 'scale(1)',
                  }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.1) 60%, transparent 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">{ind.name}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{ind.desc}</p>
                <div
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
                  style={{ color: '#2F80ED' }}
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform duration-300"
                    style={{ transform: hoveredIdx === i ? 'translateX(4px)' : 'translateX(0)' }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                    <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Bottom blue border glow on hover */}
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-500"
                style={{
                  background: '#2F80ED',
                  opacity: hoveredIdx === i ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1.5px solid rgba(15,23,42,0.15)',
              color: '#0F172A', fontWeight: 600, fontSize: '15px',
              padding: '13px 30px', borderRadius: '50px',
              textDecoration: 'none', background: 'white',
              boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
            }}
            whileHover={{ borderColor: '#2F80ED', color: '#2F80ED', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Explore Industries
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
