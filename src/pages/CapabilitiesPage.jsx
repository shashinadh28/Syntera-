import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];

const CAPABILITIES = [
  {
    id: 'ai-implementation',
    badge: 'AI IMPLEMENTATION',
    badgeColor: '#0B6E56',
    badgeBg: 'rgba(11,110,86,0.12)',
    accent: '#0B6E56',
    headline: 'Design, build, and scale AI systems that work in production.',
    sub: 'From custom LLM integrations and RAG pipelines to full agentic workflow systems — our AI engineers bring the technical depth to move your AI initiatives from proof-of-concept to production-grade delivery.',
    body: [
      "Modern enterprises need more than AI prototypes. They need systems that run reliably, scale seamlessly, and integrate deeply with existing infrastructure. Syntera Tech' AI implementation practice covers the complete engineering lifecycle — from model selection and data pipeline design to evaluation frameworks, MLOps orchestration, and governance controls.",
      "We work across the full AI stack with expertise spanning large language model (LLM) integration, retrieval-augmented generation (RAG), multi-agent architectures, and AI-native application development. Every system we build is designed for production: monitored, governed, and designed to deliver measurable business outcomes.",
    ],
    bullets: [
      'GenAI & LLM Integration (OpenAI, Anthropic, Gemini, open-source)',
      'Retrieval-Augmented Generation (RAG) Pipelines',
      'AI Agents & Agentic Workflow Systems',
      'MLOps & Model Operations at Scale',
      'AI Strategy, Roadmap & Governance',
      'Prompt Engineering & Evaluation Frameworks',
    ],
    stats: [
      { val: '20%', label: 'of Syntera Tech revenue from AI initiatives' },
      { val: '50+', label: 'AI engineers and ML architects' },
      { val: '3x', label: 'faster time-to-production vs. typical' },
    ],
    ctaLabel: 'Request AI Engineering Talent',
    image: '/capabilities/AI-IMPLEMENTATION.webp',
    icon: BrainIcon,
  },
  {
    id: 'iam',
    badge: 'IDENTITY & ACCESS MANAGEMENT',
    badgeColor: '#3C3489',
    badgeBg: 'rgba(60,52,137,0.12)',
    accent: '#3C3489',
    headline: 'Secure every identity. Control every access point. At scale.',
    sub: 'Identity is the most critical control plane in the modern enterprise. Our IAM architects implement, migrate, and optimize the identity platforms that protect your organization.',
    body: [
      "In an era of cloud complexity, remote work, and AI-driven systems, identity security is the frontline of enterprise protection. A misconfigured permission, an orphaned service account, or a poorly governed privileged role can cascade into catastrophic breaches. Syntera Tech IAM architects bring deep platform expertise and a security-first mindset to every engagement.",
      "We are platform-certified across Okta, SailPoint, CyberArk, and Microsoft Entra ID — enabling us to work within your existing technology ecosystem while rapidly closing gaps in governance, access controls, and compliance posture. From Zero Trust architecture design to AI-native identity security, we secure what matters most.",
    ],
    bullets: [
      'IAM Platform Implementation (Okta, SailPoint, CyberArk, Entra ID)',
      'Zero Trust Architecture Design & Implementation',
      'Identity Governance & Administration (IGA)',
      'Privileged Access Management (PAM)',
      'AI-Native Identity Security & Model Access Controls',
      'Joiner-Mover-Leaver (JML) Lifecycle Automation',
    ],
    stats: [
      { val: '6', label: 'major IAM platform certifications' },
      { val: '200+', label: 'enterprise IAM deployments delivered' },
      { val: '99%', label: 'compliance audit pass rate' },
    ],
    ctaLabel: 'Start an IAM Engagement',
    image: '/capabilities/IDENTITY-ACCESS-MANAGEMENT.webp',
    icon: ShieldIcon,
  },
  {
    id: 'data-cloud',
    badge: 'DATA & CLOUD',
    badgeColor: '#1565D8',
    badgeBg: 'rgba(21,101,216,0.1)',
    accent: '#1565D8',
    headline: 'Data platforms and cloud infrastructure for AI-ready enterprises.',
    sub: 'Modern AI systems require modern data architecture. We design and build data lakehouses, real-time pipelines, and cloud-native platforms that feed your AI workloads and analytics layers.',
    body: [
      "AI is only as good as the data it runs on. Before your organization can unlock the full potential of machine learning and generative AI, you need a data foundation that is clean, governed, real-time, and architecturally sound. Syntera Tech' data and cloud practice builds exactly that — from raw pipeline engineering to end-to-end lakehouse architectures on AWS, Azure, and GCP.",
      "We partner with leading cloud and data platform providers including Databricks, Snowflake, BigQuery, and dbt to deliver systems that are not only performant but built to scale. Whether you are migrating a legacy enterprise data warehouse, building new analytics capabilities, or architecting the data layer for an agentic AI system, our engineers bring the technical rigor to do it right.",
    ],
    bullets: [
      'Data Engineering & Real-Time Pipeline Design',
      'Cloud Architecture (AWS, Azure, GCP)',
      'Analytics & Business Intelligence Platforms',
      'Data Lakehouse Architecture (Databricks, Snowflake, BigQuery)',
      'Data Governance & Quality Engineering',
      'Cloud Migration & Optimization',
    ],
    stats: [
      { val: '95%', label: 'of migrations completed on schedule' },
      { val: '5x', label: 'avg reporting speed improvement' },
      { val: '3', label: 'major cloud provider partnerships' },
    ],
    ctaLabel: 'Explore Data Services',
    image: '/capabilities/DATA-CLOUD.webp',
    icon: DatabaseIcon,
  },
  {
    id: 'talent',
    badge: 'TALENT SOLUTIONS',
    badgeColor: '#6B4EFF',
    badgeBg: 'rgba(107,78,255,0.1)',
    accent: '#6B4EFF',
    headline: 'Specialized engineering talent when you need to move fast.',
    sub: 'When projects need reinforcement fast, Syntera Tech provides pre-vetted engineers, analysts, and architects across AI, IAM, data, cloud, and QA.',
    body: [
      "In high-stakes technology initiatives, the difference between success and delay often comes down to access to the right talent at the right time. Syntera Tech' talent practice is built around precisely this — giving enterprise organizations rapid access to deeply specialized engineers who can contribute from day one.",
      "Every candidate in our network is rigorously screened across technical skills, platform certifications, and domain knowledge. We don't send generalists — we match AI engineers, IAM architects, data platform specialists, and cloud engineers who fit your stack, your culture, and your delivery timeline. Whether you need a single key hire or a project-based team, we move with speed and precision.",
    ],
    bullets: [
      'Staff Augmentation (short-term & long-term)',
      'Direct Hire & Permanent Placement',
      'Project-Based Delivery Teams',
      'AI & ML Engineer Placement',
      'IAM & Security Specialist Staffing',
      'Data Engineering & Cloud Architect Talent',
    ],
    stats: [
      { val: '48h', label: 'average time to first candidate profiles' },
      { val: '92%', label: 'client retention rate across engagements' },
      { val: '500+', label: 'specialists placed in enterprise roles' },
    ],
    ctaLabel: 'Request Talent',
    image: '/capabilities/TALENT-SOLUTIONS.webp',
    icon: UsersIcon,
  },
];

const META_BADGES = [
  { icon: '🤖', label: 'Focus Areas', value: 'AI · IAM · Data · Talent' },
  { icon: '🏢', label: 'Client Size', value: 'Mid-Market & Enterprise' },
  { icon: '🚀', label: 'Delivery', value: 'Agile & Delivery-First' },
];

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO — JBHunt style ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        {/* Grid bg */}
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Glow blobs */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(47,128,237,0.09)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(11,110,86,0.07)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center text-center">
          {/* Eye label */}
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            What We Do
          </motion.span>

          <ScrollText
            text="Built for the technology challenges that define the next decade."
            as="h1"
            delay={0.15}
            stagger={0.04}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-5xl mx-auto"
          />

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Syntera Tech combines deep technical expertise in AI and identity security with a delivery-first mindset. We build, implement, and staff the systems that enterprise organizations depend on.
          </motion.p>

          {/* Meta badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="mt-10 flex flex-wrap justify-center gap-4">
            {META_BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="text-xl">{b.icon}</span>
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{b.label}</div>
                  <div className="text-xs font-semibold text-white">{b.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#ai-implementation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ background: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.4)', textDecoration: 'none' }}>
              Explore Capabilities
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}>
              Start an Engagement
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#2F80ED' }} className="py-12">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { val: '200+', label: 'Enterprise deployments delivered' },
              { val: '50+', label: 'AI & data engineers on staff' },
              { val: '6', label: 'IAM platform certifications' },
              { val: '92%', label: 'Client retention rate' },
            ].map((s, i) => (
              <motion.div key={s.val} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{s.val}</div>
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className="bg-white border-b border-slate-100 sticky top-[64px] z-30">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="flex gap-8 overflow-x-auto py-4" style={{ scrollbarWidth: 'none' }}>
            {CAPABILITIES.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="shrink-0 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-blue-600 whitespace-nowrap"
                style={{ color: '#64748b', textDecoration: 'none' }}>
                {c.badge.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── CAPABILITY SECTIONS ── */}
      {CAPABILITIES.map((cap, idx) => (
        <CapabilitySection key={cap.id} cap={cap} flip={idx % 2 !== 0} />
      ))}

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-24 sm:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A6E 55%, #2F80ED 100%)' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#EAF3FF' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Ready to Start?
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            Let's build something exceptional together.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(234,243,255,0.8)' }}>
            Whether you need AI engineers, IAM architects, data platform specialists, or cloud expertise — our team is ready to move fast and deliver results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-5">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)', textDecoration: 'none' }}>
              Start a Conversation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link to="/technology-services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm"
              style={{ background: '#2F80ED', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 28px rgba(47,128,237,0.45)' }}>
              View Technology Services
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CapabilitySection({ cap, flip }) {
  const Icon = cap.icon;
  return (
    <section id={cap.id} className="py-20 sm:py-28 border-b border-slate-100"
      style={{ backgroundColor: flip ? '#FAFAF8' : '#ffffff' }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
          {/* Content col */}
          <motion.div initial={{ opacity: 0, x: flip ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.85, ease }}
            className={flip ? 'lg:order-2' : ''}>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: cap.badgeBg, color: cap.badgeColor, border: `1px solid ${cap.badgeColor}30` }}>
              <Icon size={11} color={cap.badgeColor} />
              {cap.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">
              {cap.headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6">{cap.sub}</p>

            <div className="space-y-4 mb-8">
              {cap.body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-500">{para}</p>
              ))}
            </div>

            {/* Bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {cap.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="shrink-0 h-5 w-5 rounded-full grid place-items-center mt-0.5"
                    style={{ background: `${cap.badgeColor}15`, color: cap.badgeColor }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA → always /contact */}
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: cap.accent, boxShadow: `0 8px 24px ${cap.accent}40`, textDecoration: 'none' }}>
              {cap.ctaLabel}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </motion.div>

          {/* Image + stats col */}
          <motion.div initial={{ opacity: 0, x: flip ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.85, ease, delay: 0.12 }}
            className={`flex flex-col gap-6 ${flip ? 'lg:order-1' : ''}`}>
            {/* Real image */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg relative group" style={{ minHeight: '280px' }}>
              <img
                src={cap.image}
                alt={cap.badge}
                className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(11,17,32,0.45) 100%)' }} />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 rounded-xl px-3 py-2 text-xs font-bold"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                {cap.badge}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {cap.stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-5 text-center border border-slate-100 bg-white shadow-sm">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: cap.accent }}>{s.val}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Icons */
function BrainIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}
function ShieldIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}
function DatabaseIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
function UsersIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
