import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { viewportOnce } from '../utils/motion.js';

const ease = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    title: 'B2B Pricing',
    image: '/Pricing-and-Revenue-Management/B2B.webp',
    icon: '🏢',
  },
  {
    title: 'B2C Pricing',
    image: '/Pricing-and-Revenue-Management/B2C.webp',
    icon: '🛍️',
  },
  {
    title: 'Revenue Growth Management',
    image: '/Pricing-and-Revenue-Management/Revenue-Growth-Management.webp',
    icon: '📈',
  },
];

const HOW_WE_HELP = [
  {
    title: 'B2B Pricing',
    content:
      'B2B pricing is all about communicating—and monetizing—the value of your offerings. Our pricing and revenue management consulting experts help companies use the right data to set the best price. Just as importantly, we help prepare the sales force.',
  },
  {
    title: 'B2C Pricing',
    content:
      "It's crucial to know the end consumer: what matters to them, and what influences them to trade up or come back. We help B2C companies understand purchasing behavior and preferences—and use that insight to inform pricing.",
  },
  {
    title: 'Dynamic Pricing',
    content:
      'By combining data, AI, and automation, dynamic pricing lets companies adjust prices rapidly and manage volatility. It also enables them to set prices in a hyper-personalized way, adjusting by segment or even by individual customer.',
  },
  {
    title: 'Net Revenue Management',
    content:
      'A proven way to spark growth from pricing and mix rather than volume, net revenue management requires a cross-functional, analytics-heavy approach. We help companies prototype, incubate, and industrialize solutions—fast.',
  },
  {
    title: 'Subscription & Pricing Models',
    content:
      'Across industries, pricing strategies and models are evolving. Our pricing and revenue management consulting experts help companies assess new models and identify how to adapt and compete.',
  },
  {
    title: 'Digital Pricing Innovation',
    content:
      'Our pricing consultants help companies apply new lenses—and frameworks—to monetize digital pricing innovation. We help companies align incentives for sales teams, leverage ecosystems, and optimize packaging.',
  },
];

const CLIENT_WORK = [
  {
    stat: '10%',
    sub: '+20%',
    sublabel: 'deal velocity',
    label: 'increase in annual contract value',
    tag: 'SaaS / Enterprise',
    content:
      'A leading SaaS provider for enterprises wanted to better monetize its solutions, manage discounting more rigorously, and streamline its pricing processes. Our B2B experts reduced pricing meters by 70%, replaced an outdated user-based model with a two-tier transaction-based strategy, and integrated AI-driven discount guidance. Result: 10% increase in annual contract value and 20% improvement in deal velocity.',
  },
  {
    stat: '5%',
    sub: '+300bp',
    sublabel: 'margin improvement',
    label: 'uptick in category retail sales',
    tag: 'Food & Beverage',
    content:
      'A global food and beverage enterprise wanted to unlock new value through next-generation revenue growth management. We activated an AI-driven analytical engine with automated promotion recommendations tailored to each business constraint. Result: 3%–5% uptick in retail sales and 300 basis point improvement in margins.',
  },
];

const TOOLS = [
  {
    type: null,
    label: 'Syntera Consulting AI',
    desc: 'Our proprietary AI-powered platform for real-time pricing intelligence, revenue analytics, and automated decision support.',
    dark: true,
  },
  {
    type: 'TOOL',
    label: 'Pricing Tools',
    desc: 'Advanced analytics and scenario modeling tools for pricing strategy development and execution.',
    dark: false,
  },
  {
    type: 'SOLUTION',
    label: 'Center for Customer Insights',
    desc: 'Deep-dive analytics on consumer behavior, willingness-to-pay, and purchasing preference drivers.',
    dark: false,
  },
  {
    type: 'SOLUTION',
    label: 'Pricing Enablement Centers',
    desc: 'Build lasting internal pricing capability, governance, and organizational readiness for sustained impact.',
    dark: false,
  },
];

/* ─────────────────────────────────────────────────────── PAGE ─── */
export default function PricingRevenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowWeHelpSection />
      <ClientWorkSection />
      <ToolsSection />
      <ExploreMoreSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────── HERO ─── */
function HeroSection() {
  const words = ['Pricing', 'and', 'Revenue', 'Management'];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* ── Animated background grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── RIGHT PANEL: Diagonal clipped image ── */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 hidden lg:block"
        style={{ width: '52%' }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
      >
        {/* Diagonal clip mask — left edge is a slanted cut */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          {/* Actual image */}
          <img
            src="/Pricing-and-Revenue-Management/homepage.jpg"
            alt="Pricing and Revenue Management"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.75 }}
          />
          {/* Dark gradient overlay blending into page bg on left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.4) 35%, rgba(11,17,32,0.1) 100%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: 'linear-gradient(to top, rgba(11,17,32,0.8), transparent)',
            }}
          />
        </div>

        {/* Floating stat chips — sit on top of the image */}
        <div className="absolute inset-0" style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
          {[
            { label: 'Revenue ↑', val: '+18%', top: '18%', right: '10%' },
            { label: 'Margin', val: '+300bp', top: '52%', right: '6%' },
            { label: 'Deal Velocity', val: '+20%', top: '72%', right: '18%' },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              className="absolute rounded-2xl px-5 py-3"
              style={{
                top: chip.top,
                right: chip.right,
                background: 'rgba(11,17,32,0.72)',
                border: '1px solid rgba(47,128,237,0.35)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.1 + i * 0.18 }}
            >
              <div className="text-xl font-extrabold text-white leading-none">{chip.val}</div>
              <div className="text-[10px] mt-1 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.8)' }}>
                {chip.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Glow orb behind content ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[500px] blur-[140px]"
        style={{ background: 'rgba(47,128,237,0.09)' }}
      />

      {/* ── LEFT: Content ── */}
      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 py-32 lg:py-0">
        <div className="max-w-[600px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-8 pt-48 lg:pt-24"
          >
            <span style={{ width: '28px', height: '2px', background: '#2F80ED', borderRadius: '2px', display: 'inline-block' }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#2F80ED' }}>
              Services
            </span>
          </motion.div>

          {/* Heading — word-by-word, tighter font size */}
          <h1
            className="font-display font-extrabold leading-[1.08] tracking-tight mb-7"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            {/* "Pricing and" — first line */}
            {['Pricing', 'and'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.22 + i * 0.13 }}
                style={{
                  display: 'inline-block',
                  color: '#FFFFFF',
                  marginRight: '0.28em',
                }}
              >
                {word}
              </motion.span>
            ))}
            {/* Force line break then "Revenue Management" locked on one row */}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.48 }}
              style={{ display: 'inline-block', whiteSpace: 'nowrap', color: '#60A5FA' }}
            >
              Revenue Management
            </motion.span>
          </h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.78 }}
            style={{
              height: '1px',
              background: 'rgba(47,128,237,0.4)',
              maxWidth: '420px',
              marginBottom: '1.75rem',
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.92 }}
            className="text-base leading-[1.85] mb-5"
            style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}
          >
            By transforming pricing, companies can drive significant value to the bottom line.
            Syntera Consulting' pricing and revenue management teams help build the capabilities, processes, and
            mindset that unlock the power of pricing—in good times and bad.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.05 }}
            className="text-sm leading-[1.85] mb-10"
            style={{ color: 'rgba(255,255,255,0.48)', maxWidth: '500px' }}
          >
            To unleash the power of pricing, companies need a strong internal capability fueled by
            technology—like advanced analytics—but rooted in people and processes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.2 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#pricing-contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#2F80ED',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                padding: '13px 26px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(47,128,237,0.42)',
              }}
            >
              Talk to an Expert
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#services"
              style={{
                color: 'rgba(255,255,255,0.62)',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              View Services
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-16 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{
                width: '1px',
                height: '44px',
                background: 'linear-gradient(to bottom, rgba(47,128,237,0.9), transparent)',
              }}
            />
            <span className="text-xs uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── SERVICES ─── */
function ServicesSection() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 mb-8 max-w-xl leading-[1.05] tracking-tight"
        >
          Our Pricing and Revenue Management Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-400"
              style={{
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
              }}
            >
              {/* Real local image */}
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(11,17,32,0.55) 0%, rgba(11,17,32,0.15) 50%, transparent 100%)',
                  }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-4 left-4 text-3xl rounded-xl px-2.5 py-1.5"
                  style={{
                    background: 'rgba(11,17,32,0.55)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {s.icon}
                </div>
                {/* Decorative corner ring */}
                <div
                  className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full border-2 opacity-20"
                  style={{ borderColor: 'white' }}
                />
              </div>

              {/* Label area */}
              <div style={{ background: '#EAF3FF', padding: '22px 24px' }}>
                <h3 className="font-display text-xl font-bold text-ink-900 leading-snug">
                  {s.title}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-bold" style={{ color: '#2F80ED' }}>Learn More</span>
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="#2F80ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────── HOW WE HELP ─── */
function HowWeHelpSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: '#9ca3af' }}>
              Related Services
            </p>
            {[
              { cap: 'Capability', name: 'Customer Insights' },
              { cap: 'Capability', name: 'Marketing and Sales' },
            ].map((rs) => (
              <div key={rs.name} className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(15,23,42,0.08)' }}>
                <p className="text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: '#9ca3af' }}>{rs.cap}</p>
                <p className="font-bold text-sm text-ink-900">{rs.name}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-xs font-bold" style={{ color: '#2F80ED' }}>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
            <div className="mt-4 p-5 rounded-2xl" style={{ background: 'rgba(47,128,237,0.06)', border: '1px solid rgba(47,128,237,0.18)' }}>
              <div className="text-4xl font-extrabold mb-1 font-display" style={{ color: '#2F80ED' }}>6</div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Core Pricing Disciplines</div>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-9"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-ink-900 leading-[1.05] tracking-tight mb-3">
              How Syntera Consulting Helps Companies Master Pricing and Revenue Management
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#475569' }}>
              Pricing has no textbook solution. Different companies require different pricing
              methods, strategies, and operating models. We bring functional expertise and
              cutting-edge data science to the key topics in pricing and revenue management.
            </p>
            <div>
              {HOW_WE_HELP.map((item, i) => (
                <div key={item.title} style={{ borderTop: '1px solid rgba(15,23,42,0.08)' }}>
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-bold font-mono shrink-0" style={{ color: open === i ? '#2F80ED' : 'rgba(15,23,42,0.25)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-bold text-lg" style={{ color: open === i ? '#2F80ED' : '#0B1120' }}>
                        {item.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.25, ease }}
                      className="shrink-0 ml-4 text-2xl font-light leading-none"
                      style={{ color: open === i ? '#2F80ED' : '#9ca3af' }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="pl-10 pb-6 text-sm leading-relaxed" style={{ color: '#475569' }}>
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,23,42,0.08)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── CLIENT WORK ─── */
function ClientWorkSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px]"
        style={{ background: 'rgba(47,128,237,0.08)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.25)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Client Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight max-w-2xl">
            Our Client Work in Pricing and Revenue Management
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CLIENT_WORK.map((c, i) => (
            <motion.div
              key={c.stat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.14 }}
              className="rounded-2xl p-8 relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: '#2F80ED' }} />
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-display font-extrabold leading-none mb-2" style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', color: '#60A5FA' }}>
                    {c.stat}
                  </div>
                  <p className="font-bold text-white text-lg leading-snug">{c.label}</p>
                </div>
                <div className="text-right rounded-xl px-4 py-3 shrink-0 ml-4" style={{ background: 'rgba(47,128,237,0.1)' }}>
                  <div className="font-extrabold text-xl" style={{ color: '#60A5FA' }}>{c.sub}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.sublabel}</div>
                </div>
              </div>
              <span className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                style={{ background: 'rgba(47,128,237,0.15)', color: '#2F80ED' }}>
                {c.tag}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── TOOLS ─── */
function ToolCard({ t, i }) {
  const [hovered, setHovered] = useState(false);

  // All cards adopt the dark style on hover (matching Syntera Consulting AI card baseline)
  const isActive = t.dark || hovered;

  return (
    <motion.div
      key={t.label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.65, ease, delay: i * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl flex flex-col cursor-pointer transition-all duration-400"
      style={{
        background: isActive ? '#0B1120' : '#FFFFFF',
        border: isActive ? '1px solid rgba(47,128,237,0.2)' : '1px solid rgba(15,23,42,0.08)',
        boxShadow: isActive
          ? '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(47,128,237,0.1)'
          : '0 2px 16px rgba(15,23,42,0.06)',
        minHeight: '240px',
        transform: hovered && !t.dark ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      <div className="p-7 flex flex-col flex-1">
        {t.type && (
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4"
            style={{ color: isActive ? '#60A5FA' : '#9ca3af' }}>
            {t.type}
          </p>
        )}

        {/* Syntera Consulting AI logo (always shown for Syntera Consulting AI card, shown on hover for others) */}
        {t.dark && (
          <div className="flex items-center gap-2.5 mb-8">
            <div className="h-9 w-9 rounded-xl grid place-items-center shrink-0" style={{ background: '#2F80ED' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="text-white font-bold text-sm tracking-wide">SYNTERA TECH</span>
          </div>
        )}

        {/* For non-Syntera Consulting cards on hover, show a small glow accent */}
        {!t.dark && hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-5 h-8 w-8 rounded-xl grid place-items-center"
            style={{ background: 'rgba(47,128,237,0.2)', border: '1px solid rgba(47,128,237,0.3)' }}
          >
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#2F80ED' }} />
          </motion.div>
        )}

        <h3 className="font-display font-bold text-xl leading-snug mt-auto transition-colors duration-300"
          style={{ color: isActive ? '#FFFFFF' : '#0B1120' }}>
          {t.label}
        </h3>
        <p className="text-sm leading-relaxed mt-2 transition-colors duration-300"
          style={{ color: isActive ? 'rgba(255,255,255,0.52)' : '#64748b' }}>
          {t.desc}
        </p>
        <div className="flex items-center gap-1.5 mt-5">
          <span className="text-xs font-bold" style={{ color: '#2F80ED' }}>Learn More</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:translate-x-0.5 transition-transform duration-200">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ToolsSection() {
  return (
    <section
      className="py-12 sm:py-16"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-8"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight mb-4">
              Our Pricing and Revenue Management Tools and Solutions
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
              Our pricing consulting services combine functional and industry expertise with
              technology, proprietary resources, new ways of working, and a relentless focus on
              enablement to help clients master pricing and revenue management.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((t, i) => (
            <ToolCard key={t.label} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── EXPLORE MORE ─── */
function ExploreMoreSection() {
  return (
    <section
      className="pb-20 sm:pb-28 pt-8 sm:pt-12"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl sm:text-5xl font-extrabold mb-10 leading-[1.05] tracking-tight"
          style={{ color: '#1E293B' }}
        >
          Explore More
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(11,26,46, 0.4)' }}
            className="lg:col-span-7 group relative rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-300"
            style={{ backgroundColor: '#0B1A2E', minHeight: '400px', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.25em] mb-4 text-[#60A5FA]">Next Section</span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-[1.2] max-w-lg mt-2">
                Pricing and Revenue Management Latest Thinking
              </h3>
            </div>
            <div className="self-end mt-8">
              <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#2F80ED' }}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {[
              { cap: 'Capability', title: 'Marketing and Sales', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
              { cap: 'Capability', title: 'Customer Insights', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.75, ease, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(47,128,237,0.15)' }}
                className="group flex rounded-[24px] overflow-hidden cursor-pointer bg-[#EAF3FF] border border-[#2F80ED]/10 transition-all duration-300 h-[188px]"
              >
                <div className="w-[58%] p-6 sm:p-8 flex flex-col justify-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2 text-[#1E5DB8]/70">{card.cap}</span>
                  <h4 className="font-display text-lg sm:text-2xl font-extrabold leading-tight" style={{ color: '#1E293B' }}>{card.title}</h4>
                </div>
                <div className="w-[42%] relative overflow-hidden h-full">
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────── CTA ─── */
function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="pricing-contact" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[860px] px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.06] tracking-tight">
            Ready to unlock the power of pricing?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475569' }}>
            Talk to our pricing and revenue management experts. We'll tailor an approach for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          {submitted ? (
            <div className="text-center py-16 rounded-2xl" style={{ background: '#FAFAF8', border: '1px solid rgba(15,23,42,0.08)' }}>
              <div className="h-16 w-16 rounded-full grid place-items-center mx-auto mb-5" style={{ background: 'rgba(47,128,237,0.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Message Sent!</h3>
              <p className="text-sm" style={{ color: '#475569' }}>Our pricing experts will follow up with you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>
                Send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 sm:p-10 rounded-2xl"
              style={{ background: '#FAFAF8', border: '1px solid rgba(15,23,42,0.08)' }}
            >
              {[
                { label: 'Full Name *', name: 'name', type: 'text', required: true },
                { label: 'Work Email *', name: 'email', type: 'email', required: true },
                { label: 'Company *', name: 'company', type: 'text', required: true },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>{f.label}</label>
                  <input name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} required={f.required}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none" style={{ border: '1.5px solid #e5e7eb' }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Topic</label>
                <div className="relative">
                  <select name="topic" value={form.topic} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none appearance-none pr-9" style={{ border: '1.5px solid #e5e7eb' }}>
                    <option value="">Select...</option>
                    <option>B2B Pricing</option><option>B2C Pricing</option>
                    <option>Dynamic Pricing</option><option>Net Revenue Management</option><option>Pricing Enablement</option>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your pricing challenge..."
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
              </div>
              <div className="sm:col-span-2">
                <motion.button type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 14px 36px rgba(47,128,237,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '15px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.35)' }}>
                  Talk to a Pricing Expert
                </motion.button>
                <p className="text-center text-xs mt-3" style={{ color: '#9ca3af' }}>Your data is 100% secure & never shared</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}