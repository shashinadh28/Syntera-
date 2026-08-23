import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };
const GRID_BG = { backgroundImage: 'linear-gradient(rgba(47,128,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,237,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' };

const INTEGRATION_DOMAINS = [
  {
    num: '01',
    title: 'Cloud Modernization',
    desc: 'Cloud platforms such as Microsoft Azure, AWS and Google Cloud are enabling utilities to modernize legacy applications, unify data estates and deploy scalable services supporting containerization, microservices and serverless architectures.',
    icon: CloudIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Cloud-Modernization.webp',
  },
  {
    num: '02',
    title: 'Advanced Analytics & Predictive Maintenance',
    desc: 'Unified data platforms like Databricks help utilities build AI/ML pipelines for predictive maintenance, outage forecasting and customer behavior analysis with real-time analytics and scalable governance frameworks.',
    icon: AnalyticsIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Advanced-Analytics-Predictive-Maintenance.webp',
  },
  {
    num: '03',
    title: 'Operational Efficiency',
    desc: 'Platforms such as ServiceNow and Red Hat streamline IT and field operations through automated workflows, unified service management and event-driven architectures—improving visibility and end-to-end service delivery.',
    icon: OpsIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Operational-Efficiency.webp',
  },
  {
    num: '04',
    title: 'Geospatial Intelligence',
    desc: 'GIS platforms like ESRI and 3-GIS are integrated into utility operations to enable real-time asset tracking, spatial analytics and network planning—enhancing field operations and infrastructure management.',
    icon: GeoIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Geospatial-Intelligence.webp',
  },
  {
    num: '05',
    title: 'Customer Experience in Utilities',
    desc: 'CRM platforms such as Salesforce unify customer data, automate service workflows and personalize engagement. Integration with billing and field service systems ensures consistent and responsive service delivery.',
    icon: CXIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Customer-Experience-Utilities.webp',
  },
  {
    num: '06',
    title: 'Enterprise Modernization',
    desc: 'ERP platforms like Oracle Fusion Cloud support financial automation, workforce transformation and supply chain visibility. Integration across enterprise systems enables transparency and alignment with strategic goals.',
    icon: ERPIcon,
    image: '/grid-modernization-integrated-ecosystems/Key-Integration-Domains/Enterprise-Modernization.webp',
  },
];

const CHALLENGES = [
  { label: 'Redundant data silos', desc: 'Slower incident response and inconsistent asset views' },
  { label: 'Manual workflows', desc: 'More truck rolls and higher O&M costs' },
  { label: 'Duplicated platforms', desc: 'Integration rework and licensing waste' },
  { label: 'Delayed analytics', desc: 'Slower innovation and weaker reliability' },
];

const THINKING_FORWARD = [
  {
    tag: 'Success Story',
    title: 'Moving Millions of Patient Records',
    icon: '🏥',
    desc: 'Healthcare provider works to migrate a substantial amount of patient records according to AWS best practices.',
    image: '/grid-modernization-integrated-ecosystems/Thinking-Forward/Moving-Millions-Patient-Records.webp',
  },
  {
    tag: 'Article',
    title: 'Enabling Fiber Infrastructure for the Data Center Era',
    icon: '📡',
    desc: 'Once the sole province of telecom providers, fiber connectivity is now a strategic asset for utilities.',
    image: '/grid-modernization-integrated-ecosystems/Thinking-Forward/Enabling-Fiber-Infrastructure-Data-Center-Era.webp',
  },
  {
    tag: 'Article',
    title: 'Workforce Readiness: A Human-Centered Approach to Utility Modernization',
    icon: '👥',
    desc: 'For a successful utility modernization, it\'s critical to focus on the human element of your organization.',
    image: '/grid-modernization-integrated-ecosystems/Thinking-Forward/Workforce Readiness.webp',
  },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your utility modernization goals, current state, and success metrics.' },
  { num: '02', title: 'Ecosystem Assessment', desc: 'A curated team assesses your existing platform landscape and integration gaps.' },
  { num: '03', title: 'Roadmap & Delivery', desc: 'Structured milestones and sprint cadences keep your modernization on track.' },
  { num: '04', title: 'Outcomes & Handoff', desc: 'We deliver documented, production-ready integrations with knowledge transfer built in.' },
];

// Tech partnership logos matching PartnershipsPage style
function AzureLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.5 8L33 78h47L57.5 8z" fill="#0078D4"/>
        <path d="M57.5 8L20 92h13L57.5 8z" fill="#0050A0"/>
      </svg>
      <div className="text-left">
        <div className="font-display text-xs font-black text-slate-900 tracking-wide leading-none">Microsoft</div>
        <div className="text-[9px] font-bold text-[#0078D4] uppercase tracking-widest leading-normal">Azure</div>
      </div>
    </div>
  );
}

function AWSLogo() {
  return (
    <svg viewBox="0 0 100 45" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 12.8h3.3v13.6c0 2.2 1.4 3.3 3.5 3.3s3.5-1.1 3.5-3.3V12.8H26v13.8c0 4-2.6 6-6.5 6s-6.5-2-6.5-6V12.8zm17.6 19.8c-2.3 0-4.2-.9-4.8-2.6h3c.4.8 1.1 1.2 2 1.2 1 0 1.6-.4 1.6-1.1v-.2c-.5-.6-1.5-1-2.9-1.3-2.6-.6-4.5-1.5-4.5-3.8 0-2.3 2-3.7 4.5-3.7 2.1 0 3.7.8 4.3 2.3h-2.9c-.3-.7-.9-1-1.6-1-.9 0-1.4.3-1.4.9 0 .6.7.9 2 1.2 2.6.5 4.5 1.5 4.5 3.7 0 2.7-2.1 3.9-4.8 3.9zm13-8.8V12.8h3v20H43v-2.3c-.6 1.8-2 2.7-4.2 2.7-3.7 0-6.1-2.7-6.1-6.7s2.4-6.7 6.1-6.7c2.2 0 3.6.9 4.2 2.8V23.8zm-3.6 6.8c2 0 3.2-1.3 3.2-3.8s-1.2-3.8-3.2-3.8-3.2 1.3-3.2 3.8 1.2 3.8 3.2 3.8z" fill="#232F3E"/>
      <path d="M11 36.5c16.5 6 36.5 6.5 52 1.5.8-.3 1.4.5.8 1-3.2 2.7-9.5 5.5-17.5 6.5-10.5 1.2-22.5.2-34.5-5.5-.6-.3-.3-1.1.4-1.1l.8-.4z" fill="#FF9900"/>
      <path d="M8 35.8c-.8.5-.7 1.3.1 1.7l3 1.5c.8.4 1.4 0 1.1-.9l-1.3-3.2c-.3-.8-1.2-1-1.6-.3l-1.3 1.2z" fill="#FF9900"/>
    </svg>
  );
}

function GoogleCloudLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.002 2l8.225 4.75v9.5l-8.225 4.75-8.225-4.75v-9.5L12.002 2z" fill="#4285F4"/>
        <path d="M12.002 2L3.777 6.75v9.5l8.225 4.75V2z" fill="#34A853"/>
        <path d="M12.002 2v9.5l8.225 4.75V6.75L12.002 2z" fill="#EA4335"/>
        <path d="M12.002 11.5l-8.225 4.75 8.225 4.75v-9.5z" fill="#FBBC05"/>
      </svg>
      <span className="font-display text-base font-bold text-slate-800 tracking-tight">Google Cloud</span>
    </div>
  );
}

function DatabricksLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3L15 23l35 20 35-20L50 3z" fill="#FF3621"/>
        <path d="M15 43v24l35 20V63L15 43z" fill="#FF3621" opacity="0.8"/>
        <path d="M85 43v24L50 87V63l35-20z" fill="#FF3621" opacity="0.6"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tight">databricks</span>
    </div>
  );
}

function ServiceNowLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 100 24" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.8 9.5l2.4-2.4 1.1 1.1-3.5 3.5L5.7 11.2l1.1-1.1 1.4 1.4z" fill="#81B924"/>
        <text x="22" y="17" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="16px" letterSpacing="-0.02em">servicenow.</text>
      </svg>
    </div>
  );
}

function RedHatLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.5 19c-1.8-3.4-6.4-5.3-11.8-5.3-4.2 0-7.8 1.1-9.5 2.8.8-.9 2.5-1.8 5.5-1.8 4.8 0 9.8 1.9 11.2 4.9.4.9.4 1.8.1 2.6 1.8-1 3.5-2 4.5-3.2z" fill="#CC0000"/>
        <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm0 3c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6z" fill="#000000" opacity="0.12"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tighter">Red Hat</span>
    </div>
  );
}

function EsriLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-emerald-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M50 10a40 40 0 0 1 34.6 20h-13c-2.3-4-6.3-6.7-11-7.5l-5.6 12-7-15A40 40 0 0 1 50 10zm-30 40a30 30 0 1 1 60 0 30 30 0 0 1-60 0z" />
      </svg>
      <div className="text-left">
        <span className="font-display text-base font-black text-slate-900 tracking-tighter">esri</span>
        <div className="text-[7px] font-bold text-amber-500 uppercase tracking-widest leading-none">Partner Network</div>
      </div>
    </div>
  );
}

function SalesforceLogo() {
  return (
    <svg viewBox="0 0 100 68" className="h-9 w-auto" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.5 28.5c-.2 0-.4 0-.6.1-1.5-6.5-7.3-11.4-14.2-11.4-5.3 0-9.9 2.9-12.4 7.2-2.1-1.7-4.8-2.7-7.8-2.7-6.2 0-11.3 4.6-12.3 10.7-3.9 1.1-6.7 4.7-6.7 8.9 0 5.2 4.3 9.5 9.5 9.5h44.5c5.2 0 9.5-4.3 9.5-9.5.1-5.1-4.1-9.3-9.5-9.3z" />
      <text x="50%" y="46" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="9px" letterSpacing="0.05em">salesforce</text>
    </svg>
  );
}

function OracleLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-serif text-lg font-extrabold text-[#F80000] tracking-wider uppercase">oracle</span>
      <div className="h-5 w-[1px] bg-slate-300" />
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Fusion</span>
    </div>
  );
}

export default function GridModernizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO (PricingRevenuePage style) ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#0B1120' }}
      >
        {/* Animated background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* RIGHT PANEL: Diagonal clipped image */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 hidden lg:block"
          style={{ width: '52%' }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          >
            <img
              src="/grid-modernization-integrated-ecosystems/Home-page.webp"
              alt="Grid Modernization"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: 0.78 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.4) 35%, rgba(11,17,32,0.1) 100%)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.8), transparent)' }}
            />
          </div>

          {/* Floating stat chips */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
            {[
              { label: 'Utility Domains', val: '6', top: '20%', right: '10%' },
              { label: 'Cloud Partners', val: 'AWS/GCP/Azure', top: '50%', right: '6%' },
              { label: 'Efficiency', val: 'Grid-Ready', top: '74%', right: '14%' },
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

        {/* Glow orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[500px] blur-[140px]"
          style={{ background: 'rgba(47,128,237,0.09)' }}
        />

        {/* LEFT: Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 py-32 lg:py-0">
          <div className="max-w-[600px]">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-8 pt-48 lg:pt-32"
            >
              <span style={{ width: '28px', height: '2px', background: '#2F80ED', borderRadius: '2px', display: 'inline-block' }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#2F80ED' }}>
                Grid Modernization
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="font-display font-extrabold leading-[1.08] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              {['Integrated', 'Partner'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease, delay: 0.22 + i * 0.13 }}
                  style={{ display: 'inline-block', color: '#FFFFFF', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.48 }}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', color: '#60A5FA' }}
              >
                Ecosystems
              </motion.span>
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.78 }}
              style={{ height: '1px', background: 'rgba(47,128,237,0.4)', maxWidth: '420px', marginBottom: '1.75rem' }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.92 }}
              className="text-base leading-[1.85] mb-5"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}
            >
              Modernization is reshaping the utility industry, and leaders should stay ahead of this transformation to deliver more reliable service and improve efficiency.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.05 }}
              className="text-sm leading-[1.85] mb-5"
              style={{ color: 'rgba(255,255,255,0.48)', maxWidth: '500px' }}
            >
              Nov. 7, 2025 &nbsp;|&nbsp; By Marc Smith
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.2 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#integration-domains"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '14px',
                  padding: '13px 26px', borderRadius: '50px', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(47,128,237,0.42)',
                }}
              >
                Explore Domains
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#contact-grid"
                style={{ color: 'rgba(255,255,255,0.62)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Start a Conversation
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
                style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, rgba(47,128,237,0.9), transparent)' }}
              />
              <span className="text-xs uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS GRID MODERNIZATION ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />What Is Grid Modernization?
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Upgrade. Integrate. Optimize.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-4">
                Grid modernization is the upgrade of utility systems—spanning cloud modernization, advanced analytics, geospatial intelligence, ERP/CRM and field operations—to improve reliability, safety, efficiency and customer experience.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                A vendor-agnostic, integrated ecosystem enables real-time insight and faster decision-making across the enterprise. As the utility sector undergoes rapid modernization, organizations are increasingly challenged to meet evolving regulatory standards, improve operational efficiency and deliver reliable service—all while managing legacy infrastructure and a complex technology landscape.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">The Industry Shift: Integration as a Foundation</h3>
                <div className="space-y-4">
                  {['Interoperability across legacy and modern platforms', 'Vendor-agnostic architecture', 'Alignment of digital tools with operational goals', 'Scalable infrastructure to support future innovation'].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                      className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE — Delivery Approach clone design ── */}
      <section
        id="challenge"
        className="py-20 sm:py-28 border-b border-slate-100"
        style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="The Challenge" title="Fragmented systems, disconnected solutions"
            sub="Many utilities operate within siloed technology environments, where platforms are deployed to solve isolated problems but lack cohesion." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {CHALLENGES.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="mb-4 text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{c.label}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{c.desc}</p>
                {i < CHALLENGES.length - 1 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-xl" style={{ color: '#cbd5e1' }}>→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INTEGRATION DOMAINS ── */}
      <section id="integration-domains" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Key Integration Domains" title="What we deliver across utility modernization"
            sub="Six core integration domains built around the technology initiatives that matter most to utility enterprises—from cloud to field operations." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INTEGRATION_DOMAINS.map((d, i) => (
              <motion.div key={d.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.09 }}
                className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}
                whileHover={{ y: -6 }}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(11,17,32,0.65) 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: '#2F80ED' }} />
                  {/* Domain number badge */}
                  <div className="absolute top-3 left-3 rounded-xl px-2.5 py-1 text-xs font-bold text-white"
                    style={{ background: 'rgba(47,128,237,0.85)', backdropFilter: 'blur(8px)' }}>
                    {d.num}
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white p-6">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-4">
                    <d.icon />
                  </div>
                  <div className="h-[2px] w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-16" style={{ background: '#2F80ED' }} />
                  <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{d.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING A FUTURE-READY ECOSYSTEM ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...GRID_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />Future-Ready Utility Ecosystem
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Building for What Comes Next
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                Integrated partner ecosystems transform the pace of grid modernization, improving reliability, accelerating innovation and aligning investments with regulatory priorities across cloud, analytics, GIS, ERP/CRM and operations.
              </p>
              <p className="text-base leading-relaxed text-slate-500 mb-8">
                By breaking down silos and enabling cross-platform collaboration, utilities can improve grid reliability and resilience, enhance customer experience through unified data, accelerate innovation cycles and align technology investments with regulatory and business priorities.
              </p>
              <p className="text-sm font-semibold text-slate-600 italic border-l-2 border-blue-500 pl-4">
                This approach supports broader industry goals such as decarbonization, electrification and digital transformation—ensuring utilities are equipped to meet the demands of a dynamic energy future.
              </p>
            </motion.div>

            <div className="space-y-4">
              {['Improve grid reliability and resilience', 'Enhance customer experience through unified data', 'Accelerate innovation cycles', 'Align technology investments with regulatory and business priorities', 'Support decarbonization and electrification goals', 'Enable digital transformation at enterprise scale'].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.55, ease, delay: i * 0.09 }}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            className="flex flex-col sm:flex-row items-start gap-6 bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="h-20 w-20 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0">MS</div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Author</div>
              <h3 className="font-display text-xl font-extrabold text-slate-900 mb-1">Marc Smith</h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">Transformation Client Executive, Energy</p>
              <p className="text-sm leading-relaxed text-slate-500">Marc is a recognized leader in digital analytics in the energy and resource sector. As a transformation client executive, Marc leads customers through journeys in their digital, cloud and data transformations. Marc has over 30 years of experience architecting and implementing data, analytics and artificial intelligence solutions in areas of risk, energy transition, operations, asset management and operational excellence.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THINKING FORWARD (with real images) ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Thinking Forward" title="Related insights" sub="Explore more perspectives on utility modernization, digital transformation and enterprise technology." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {THINKING_FORWARD.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.55) 100%)' }} />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>{r.tag}</span>
                  <h4 className="font-display text-base font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">{r.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 mb-4">{r.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500 inline-flex items-center gap-1.5">
                    Read Now <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TECHNOLOGY PARTNERSHIPS (with logo icons like PartnershipsPage) ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="mb-4">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Certified Expertise</span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Our Technology Partnerships</h3>
            <p className="text-slate-500 max-w-2xl text-base leading-relaxed">Transformational technologies demand equally transformative partnerships. The world's leading technology brands work with us because of our scale, speed and quality—making the most of your technology investments.</p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            style={{ height: '1px', background: 'rgba(47,128,237,0.25)', maxWidth: '320px', marginBottom: '2.5rem' }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { component: AzureLogo, key: 'azure' },
              { component: AWSLogo, key: 'aws' },
              { component: GoogleCloudLogo, key: 'gcp' },
              { component: DatabricksLogo, key: 'databricks' },
              { component: ServiceNowLogo, key: 'servicenow' },
              { component: RedHatLogo, key: 'redhat' },
              { component: EsriLogo, key: 'esri' },
              { component: SalesforceLogo, key: 'salesforce' },
              { component: OracleLogo, key: 'oracle' },
            ].map((brand, i) => (
              <motion.div
                key={brand.key}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 min-h-[96px] transition-all duration-300 shadow-sm"
              >
                <brand.component />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <OrangeCTASection
        id="contact-grid"
        badge="Start a Conversation"
        headline="Ready to modernize your grid ecosystem?"
        sub="Share your utility transformation initiative and our delivery team will respond with a tailored integration approach."
        steps={FORM_STEPS}
        ctaLabel="Start a Project"
        formHeadline="Connect With Our Team"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Integration domain"
        selectOptions={['Cloud Modernization', 'Advanced Analytics & Predictive Maintenance', 'Operational Efficiency', 'Geospatial Intelligence', 'Customer Experience', 'Enterprise Modernization', 'Multiple / Other']}
        submitLabel="Send Request"
      />

      <Footer />
    </div>
  );
}

/* ── Reusable CTA Section ── */
function OrangeCTASection({ id, badge, headline, sub, steps, ctaLabel, formHeadline, formSub, selectLabel, selectOptions, submitLabel }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  return (
    <section id={id} className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#EAF3FF' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />{badge}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">{headline}</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-base leading-[1.9] max-w-sm mb-10" style={{ color: 'rgba(234,243,255,0.85)' }}>{sub}</motion.p>
            <div className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }} className="flex items-start gap-4">
                  <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl font-bold text-sm"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#EAF3FF' }}>{s.num}</span>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(234,243,255,0.75)' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our team will follow up within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setAgreed(false); }} className="mt-8 text-sm font-semibold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{formHeadline}</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>{formSub}</p>
                    <div style={{ width: '48px', height: '3px', background: '#2F80ED', borderRadius: '999px', marginTop: '14px' }} />
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <FF label="First Name" name="first" value={form.first} onChange={handleChange} required />
                      <FF label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                    </div>
                    <FF label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <FF label="Company" name="company" value={form.company} onChange={handleChange} required />
                    <FF label="Title / Role" name="title" value={form.title} onChange={handleChange} />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>{selectLabel}</label>
                      <div className="relative">
                        <select name="need" value={form.need} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none appearance-none pr-9"
                          style={{ border: '1.5px solid #e5e7eb', color: form.need ? '#111827' : '#9ca3af' }}>
                          <option value="">Select...</option>
                          {selectOptions.map(o => <option key={o}>{o}</option>)}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your grid modernization initiative..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)} className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Syntera Solutions' <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      {submitLabel}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </motion.button>
                    <p className="text-center text-xs" style={{ color: '#9ca3af' }}>Your data is 100% secure & never shared</p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHdr({ badge, title, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
      className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{badge}
      </span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-slate-900">{title}</h2>
      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#475569' }}>{sub}</p>
    </motion.div>
  );
}

function FF({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>
        {label}{required && <span style={{ color: '#2F80ED' }}> *</span>}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none"
        style={{ border: '1.5px solid #e5e7eb', color: '#111827' }} />
    </div>
  );
}

function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>; }
function AnalyticsIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function OpsIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>; }
function GeoIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>; }
function CXIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>; }
function ERPIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>; }
