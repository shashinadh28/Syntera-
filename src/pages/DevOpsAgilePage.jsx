import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const Pill = ({ children, color = '#2F80ED' }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
    style={{ background: `${color}14`, border: `1px solid ${color}30`, color }}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

export default function DevOpsAgilePage() {
  useEffect(() => {
    document.title = 'DevOps & Agile — Accelerate Delivery at Scale | Syntera Tech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AirlineStorySection />
      <BuiltForSpeedSection />
      <InItWithYouSection />
      <AtAGlanceSection />
      <CapabilitiesSection />
      <OurApproachSection />
      <PartnershipsSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/devops-agile/devops-agile_homepage.webp"
          alt="DevOps &amp; Agile — Accelerate Delivery at Scale"
          className="w-full h-full object-cover object-center"
        />
        {/* Heavy dark gradient left → transparent right — matches screenshot */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(4,10,30,0.97) 0%, rgba(4,10,30,0.92) 38%, rgba(4,10,30,0.5) 60%, rgba(4,10,30,0.05) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40" style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(4,10,30,0.9) 100%)'
        }} />
      </div>

      {/* Animated blue glow — left accent */}
      <motion.div aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-80px] left-[-60px] w-[600px] h-[500px] rounded-full z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.45) 0%, transparent 70%)', filter: 'blur(72px)' }}
      />

      {/* Content — left side */}
      <div
        className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div style={{ maxWidth: '580px' }}>

          {/* Pill label — dark navy with blue border */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(8,16,48,0.88)', border: '1px solid rgba(47,128,237,0.55)',
              color: '#93C5FD', fontWeight: 700, fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '8px 16px', borderRadius: '50px',
              backdropFilter: 'blur(8px)', marginBottom: '2rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#60A5FA', display: 'inline-block' }} />
            DevOps &amp; Agile
          </motion.span>

          {/* Giant headline — weight 900, white + blue gradient accent */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.25rem)',
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            DevOps &amp; Agile{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 55%, #BFDBFE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              at Scale
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.25 }}
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
              color: 'rgba(255,255,255,0.76)',
              lineHeight: 1.78,
              maxWidth: '460px',
              marginBottom: '2.5rem',
            }}
          >
            Partner with Syntera Tech to release faster, test smarter, and transform your engineering culture — spanning architecture, automation, and continuous delivery across your entire technology life cycle.
          </motion.p>

          {/* CTA buttons — matching screenshot style exactly */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}
          >
            <a
              href="#capabilities"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#2F80ED', color: '#fff',
                fontWeight: 700, fontSize: '0.925rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(47,128,237,0.55)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}
            >
              Explore Capabilities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '2px solid rgba(255,255,255,0.38)',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 700, fontSize: '0.925rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none', backgroundColor: 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ height: '32px', width: '20px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6px' }}
        >
          <div style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.35)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════ AIRLINE SUCCESS — white ═══ */
function AirlineStorySection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 60%,#2F80ED 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div aria-hidden className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                Success Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Flying to New Heights through Automation
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.75)' }}>
                Major airline seamlessly integrates legacy systems with cutting-edge platforms to increase efficiency and delight customers.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '50–75', label: 'Days of manual effort saved per year' },
                { val: '6mo', label: 'Release cycle down to weekly' },
                { val: '400+', label: 'Monthly man-hours saved' },
                { val: '50%', label: 'Increase in platform performance' },
              ].map(s => (
                <div key={s.val} className="rounded-2xl p-5 flex flex-col gap-1"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="font-display text-2xl font-extrabold text-white">{s.val}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(191,219,254,0.6)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ BUILT FOR SPEED — #F8FAFC dot ═══ */
function BuiltForSpeedSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
            <Pill>Our Philosophy</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Built for Speed
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-5">
              The digital economy is reinventing itself every hour, demanding next-gen strategy and operations. When your business counts on you to ensure software works, you need to deliver and delight at optimum velocity.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              We partner with you to accelerate your release frequency spanning architecture, testing and cloud services — all while finding and testing insights quickly to capitalize on market opportunities.
            </p>
            <a href="#capabilities"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              Our Capabilities <ArrowRight size={12} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="grid grid-cols-1 gap-4">
            {[
              { icon: '⚡', label: 'Release Frequency', desc: 'Ship faster with automated pipelines and CI/CD best practices' },
              { icon: '🏗️', label: 'Architecture Modernization', desc: 'Evolve from monoliths to scalable cloud-native microservices' },
              { icon: '🧪', label: 'Testing at Scale', desc: 'Shift-left quality with automated testing strategies across all stages' },
              { icon: '☁️', label: 'Cloud Services', desc: 'Harness AWS, Azure, and GCP for elastic infrastructure on demand' },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(47,128,237,0.12)' }}
                className="flex items-start gap-4 rounded-2xl p-5 bg-white transition-all duration-300"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
                <div className="h-11 w-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.15)' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-slate-800 text-sm mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ IN IT WITH YOU — white grid ═══ */
function InItWithYouSection() {
  const benefits = [
    'Sense and respond quickly to customers, as well as market and environmental changes',
    'Increase business value through enterprise alignment and iterative delivery',
    'Improve your speed to market for new, superior products while lowering costs',
    'Accelerate predictable and secure software delivery on demand',
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100" style={GRID_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
            <Pill>In It With You</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Your Transformation, Our Commitment
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-5">
              Powered by our full-stack expertise, we apply DevOps and Agile principles to every solution, across the technology life cycle. We combine Agile practices with strategic partnerships to drive proven value with continuous delivery.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              From envisioning workshops and value stream mapping to continuous testing strategy, we're all in on your transformation.
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">With our approach, you'll:</p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#2F80ED' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — capability tags card */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
            <div className="bg-white rounded-3xl p-8 sm:p-10"
              style={{ border: '1.5px solid rgba(47,128,237,0.2)', boxShadow: '0 8px 40px rgba(47,128,237,0.08)' }}>
              <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#2F80ED' }} />
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4">Full-Stack Partnership</h3>
              <p className="text-slate-500 leading-relaxed text-base mb-6">
                We bring deep expertise across every layer of the DevOps and Agile lifecycle — from strategy and architecture to toolchain implementation and continuous improvement.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Envisioning Workshops', 'Value Stream Mapping', 'Continuous Testing', 'Agile Coaching', 'Change Management', 'Release Automation', 'Cloud Migration'].map(tag => (
                  <span key={tag}
                    className="rounded-full px-4 py-2 text-xs font-bold"
                    style={{ background: 'rgba(47,128,237,0.07)', border: '1px solid rgba(47,128,237,0.15)', color: '#2F80ED' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ AT A GLANCE — #F8FAFC dot ═══ */
function AtAGlanceSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>At a Glance</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Proven Results</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { val: '6', suf: ' mo', label: 'Release cycle down to weekly for critical applications', color: '#2F80ED' },
            { val: '400', suf: '+', label: 'Monthly man-hours saved through automation', color: '#1E5DB8' },
            { val: '50', suf: '%', label: 'Increase in platform performance', color: '#0EA5E9' },
          ].map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-8 flex flex-col gap-2"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              <span className="font-display text-5xl font-extrabold" style={{ color: s.color }}>
                {s.val}<span className="text-3xl">{s.suf}</span>
              </span>
              <span className="text-sm font-semibold text-slate-500">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CAPABILITIES — white grid ═══ */
function CapabilitiesSection() {
  const [active, setActive] = useState(null);

  const caps = [
    {
      color: '#2F80ED',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/git.png" alt="DevOps CI/CD" />,
      title: 'DevOps and CI/CD',
      desc: 'True DevOps is nothing less than full-scale culture transformation, uniting and empowering your development and infrastructure teams to deliver business value at high speed and manage IT operations with efficiency. We\'re here to help transform your organization by aligning the right people, processes and technologies to allow your business to move more quickly.',
    },
    {
      color: '#1E5DB8',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/test-tube.png" alt="Testing" />,
      title: 'Continuous Testing',
      desc: 'If you\'re faced with rapid product design and multiplying platforms, you need a powerhouse testing capability to support your delivery. We partner with you to build or strengthen your automated testing strategy and capabilities so you can shift left and run faster. Or, if you need pure capacity help during a spike, we do that, too.',
    },
    {
      color: '#6366F1',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/agile.png" alt="Agile" />,
      title: 'Agile Transformation',
      desc: 'Your development team is the heart of your product organization. But true agility is more than product delivery. It\'s about embracing innovation, empowering employees and reducing unnecessary processes. We\'ll accelerate your Agile transformation with coaching, organizational design and change management.',
    },
    {
      color: '#D97706',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/checked--v1.png" alt="Core Testing" />,
      title: 'Core Testing',
      desc: 'We can help reduce the cycle time for executing regression testing while increasing coverage. Our manual regression testing service accelerates results so you can focus on quality outcomes — reducing defect leakage and building confidence in every release.',
    },
    {
      color: '#DC2626',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/combo-chart--v1.png" alt="Performance" />,
      title: 'Performance Engineering',
      desc: 'We evaluate performance over the entire life cycle and help you embrace advanced technology strategies so your business can meet peak demand periods. From prepping for Black Friday to recon after an outage, we look at the whole process to prepare you for whatever demand comes your way.',
    },
    {
      color: '#0EA5E9',
      icon: <img width="36" height="36" src="https://img.icons8.com/color/36/database.png" alt="Data Management" />,
      title: 'Test Data Management',
      desc: 'Mitigate risk, comply with regulations and avoid project delays by using real data to test your software — without exposing your users to breaches. We can help with all aspects of managing data for testing to ensure you\'re testing the right data, right-sized for your environment.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100" style={GRID_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Our Capabilities</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">From Harder to Smarter</h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-3xl">
            DevOps and Agile methodologies can help your organization make the leap from one that works harder to one that works smarter. Whether you're building your toolchain or evolving your team, we'll fine-tune your organization for elasticity.
          </p>
        </motion.div>

        {/* Tab buttons with icons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {caps.map((c, i) => (
            <motion.button key={c.title} onClick={() => setActive(active === i ? null : i)}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300"
              style={active === i
                ? { background: c.color, color: '#fff', boxShadow: `0 6px 24px ${c.color}44` }
                : { background: '#F1F5F9', color: '#64748B', border: '1px solid #E2E8F0' }}>
              <span className="flex-shrink-0">{c.icon}</span>
              {c.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div key={active}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="bg-white rounded-3xl p-8 sm:p-12"
              style={{ border: `1.5px solid ${caps[active].color}30`, boxShadow: `0 8px 40px ${caps[active].color}12` }}>
              <div className="h-1 w-14 rounded-full mb-6" style={{ background: caps[active].color }} />
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4">{caps[active].title}</h3>
              <p className="text-slate-500 leading-relaxed text-base">{caps[active].desc}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mini cards grid with icon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {caps.map((c, i) => (
            <motion.button key={c.title} onClick={() => setActive(active === i ? null : i)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="text-left p-5 rounded-2xl transition-all duration-300 flex flex-col gap-3"
              style={active === i
                ? { background: `${c.color}12`, border: `1.5px solid ${c.color}`, boxShadow: `0 8px 24px ${c.color}20` }
                : { background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="flex-shrink-0">{c.icon}</div>
              <span className="font-bold text-xs text-slate-700 leading-tight">{c.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR APPROACH — #F8FAFC dot ═══ */
function OurApproachSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Our Approach</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">How We Do It</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { color: '#2F80ED', icon: '🔒', title: 'Risk & Security', desc: 'Implement security-first strategies to safeguard your enterprise with integrated DevSecOps throughout every pipeline stage.' },
            { color: '#1E5DB8', icon: '🎓', title: 'Workforce Development', desc: 'Our innovative workforce solutions help unlock your team\'s highest performance through specialized training and Agile coaching.' },
          ].map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${item.color}12` }}
              className="bg-white rounded-3xl p-8 sm:p-10 transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                {item.icon}
              </div>
              <div className="h-[2px] w-10 rounded-full mb-5" style={{ background: item.color }} />
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base mb-6">{item.desc}</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
                style={{ color: item.color, borderBottom: `2px solid ${item.color}`, textDecoration: 'none' }}>
                Learn More <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ PARTNERSHIPS — white ═══ */
const DEVOPS_PARTNERS = [
  { name: 'AWS', icon: <img width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services" /> },
  { name: 'Google Cloud', icon: <img width="48" height="48" src="https://img.icons8.com/color/48/google-cloud.png" alt="google-cloud" /> },
  { name: 'Microsoft Azure', icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/azure-icon-svgrepo-com.svg" alt="Microsoft Azure" /> },
  { name: 'Red Hat', icon: <img width="48" height="48" src="https://img.icons8.com/color/48/red-hat.png" alt="Red Hat" /> },
  { name: 'Snowflake', icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/snowflake-svgrepo-com.svg" alt="Snowflake" /> },
  { name: 'ServiceNow', icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/ServiceNow-Logo.svg" alt="ServiceNow" /> },
  { name: 'Salesforce', icon: <img width="48" height="48" src="https://img.icons8.com/color/48/salesforce.png" alt="salesforce" /> },
  { name: 'OpenAI', icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/chatgpt.png" alt="chatgpt" /> },
  { name: 'Anthropic', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/claude-ai.png" alt="claude-ai" /> },
  { name: 'Palantir', icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/Palantir.svg" alt="Palantir" /> },
];

function PartnershipsSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }}>
            <Pill>Our Partnerships</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Best-in-Class Integrations
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              The world's leading technology and software providers partner with Syntera Tech because of our scale, full-stack capabilities and speed. Together, we can deliver new, sustainable growth across your business.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-10">
              Working together, we deliver unprecedented value across four critical transformation pillars: optimizing existing technology, reshaping business functions, inventing new opportunities, and reimagining entire organizations.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              Learn More <ArrowRight size={12} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {DEVOPS_PARTNERS.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(47,128,237,0.18)', borderColor: 'rgba(47,128,237,0.35)' }}
                className="group bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 cursor-default"
                style={{ border: '1px solid #E2E8F0', minHeight: '110px' }}>
                <div className="transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <span className="font-bold text-xs text-slate-700 leading-tight tracking-tight">{p.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FEATURED INSIGHTS (OUR LATEST NEWS HEADLINES) ═══ */
function InsightsSection() {
  const insights = [
    {
      color: '#2F80ED',
      tag: 'Success Story',
      source: 'DevOps Weekly',
      date: 'March 2026',
      title: 'Communications Network Accelerates DevOps on Demand',
      desc: 'We brought our client leading-edge delivery models and created a foundation for success for DevOps, Agile and ITSM. The results transformed how the team ships software at scale.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    },
    {
      color: '#1E5DB8',
      tag: 'Success Story',
      source: 'Cloud Insider',
      date: 'January 2026',
      title: 'Migrating to Modern',
      desc: 'How Syntera Tech and a global asset management firm embarked on a multiyear technology modernization initiative to migrate their full application portfolio to the cloud.',
      img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=700&q=80',
    },
    {
      color: '#6366F1',
      tag: 'Success Story',
      source: 'Tech Report',
      date: 'November 2025',
      title: 'Leading the Way with Azure DevOps',
      desc: 'How Syntera Tech partnered with an organization to transform their Microsoft Azure DevOps pipeline for improved user experiences and increased velocity.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Pill>Our Latest News Headlines</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Thinking Forward</h2>
          </div>
          <Link to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
            See More <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <motion.div key={ins.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 16px rgba(15,23,42,0.05)', background: '#fff' }}>
              {/* Image banner */}
              <div className="relative h-52 overflow-hidden">
                <img src={ins.img} alt={ins.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${ins.color}BB 100%)` }} />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: ins.color }}>
                  {ins.tag}
                </span>
              </div>
              <div className="p-7 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: ins.color }}>{ins.source}</span>
                  <span className="text-[10px] text-slate-400">•</span>
                  <span className="text-[10px] text-slate-400">{ins.date}</span>
                </div>
                <div className="h-[2px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: ins.color }} />
                <h3 className="font-display font-extrabold text-lg text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {ins.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-5">{ins.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: ins.color }}>
                  Read Now <ArrowRight size={11} color={ins.color} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CTA ═══ */
function CTASection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease }}
          whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(11,26,46,0.4)' }}
          className="group relative rounded-[28px] overflow-hidden flex flex-col lg:flex-row justify-between items-center p-10 sm:p-14 cursor-default transition-all duration-300"
          style={{
            backgroundColor: '#0B1A2E',
            minHeight: '280px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
          {/* Grid overlay */}
          <div aria-hidden className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Geometric stripes */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-15 flex flex-col justify-center items-end pr-6">
            <svg width="100%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
              <path d="M70 10L110 50L70 90" stroke="#60A5FA" strokeWidth="6" />
            </svg>
          </div>
          {/* Glow */}
          <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute top-[-40px] right-[10%] w-[400px] h-[300px] rounded-full"
            style={{ background: 'rgba(47,128,237,0.2)', filter: 'blur(60px)' }} />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" /> Get Started
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Interested in Speaking with Syntera Tech?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.72)' }}>
              Let's explore how our DevOps and Agile expertise can accelerate your software delivery and transform your engineering organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                style={{ background: '#2F80ED', color: '#fff', textDecoration: 'none', boxShadow: '0 6px 24px rgba(47,128,237,0.5)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}>
                Get in Touch <ArrowRight />
              </Link>
              <a href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: animated rings */}
          <div className="hidden lg:flex items-center justify-center relative z-10 ml-10 flex-shrink-0">
            <div className="relative">
              {[80, 140, 200, 260].map((r, i) => (
                <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute rounded-full border border-white/10"
                  style={{ width: r, height: r, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              ))}
              <div className="relative z-10 h-32 w-32 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(47,128,237,0.2)', border: '2px solid rgba(96,165,250,0.4)', backdropFilter: 'blur(12px)' }}>
                <svg className="h-12 w-12 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
