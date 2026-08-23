import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };

const CAPABILITIES = [
  {
    num: '01',
    title: 'Application Modernization & Digital Delivery',
    desc: 'Migrate legacy systems, re-platform monoliths to microservices, and accelerate digital product delivery with experienced engineering teams.',
    icon: AppIcon,
    image: '/Technology-Services/Capabilities/Application-Modernization.jpg',
    accent: '#2F80ED',
  },
  {
    num: '02',
    title: 'Data Engineering & Data Platforms',
    desc: 'Design and build modern data pipelines, lakehouse architectures, and data platform foundations that are reliable, scalable, and governed.',
    icon: DataIcon,
    image: '/Technology-Services/Capabilities/Data-Engineering-Data-Platforms.jpg',
    accent: '#6366F1',
  },
  {
    num: '03',
    title: 'Analytics, AI/ML Enablement',
    desc: 'Operationalize analytics and bring AI/ML models from experimentation to production with the right tooling, architecture, and talent.',
    icon: AiIcon,
    image: '/Technology-Services/Capabilities/Analytics-AIML-Enablement.webp',
    accent: '#0D9488',
  },
  {
    num: '04',
    title: 'Cloud & Data Modernization',
    desc: 'Migrate, optimize, and modernize cloud and data environments—reducing cost, improving reliability, and increasing deployment velocity.',
    icon: CloudIcon,
    image: '/Technology-Services/Capabilities/Cloud-Data-Modernization.jpg',
    accent: '#F59E0B',
  },
];

const DELIVERY = [
  { step: '01', title: 'Discovery & Scoping', desc: 'We align on outcomes, constraints, and success metrics before any work begins—no surprises.' },
  { step: '02', title: 'Team Assembly', desc: 'A curated delivery team is assembled from our specialist network, matched to your stack and timeline.' },
  { step: '03', title: 'Governed Delivery', desc: 'Structured sprint cadences, status reporting, and clear escalation paths keep delivery on track.' },
  { step: '04', title: 'Outcomes & Handoff', desc: 'We deliver documented, production-ready outcomes with knowledge transfer built into every engagement.' },
];

const OUTCOMES = [
  { client: 'Financial Services Organization', tag: 'App Modernization', result: 'Improved system stability and 3× deployment velocity with zero downtime during cloud migration.', color: '#0ea5e9' },
  { client: 'Retail / eCommerce Brand', tag: 'Data Platform', result: '5× improvement in reporting speed and a reliable data foundation enabling AI/ML initiatives.', color: '#2F80ED' },
  { client: 'National Healthcare Provider', tag: 'QA & Delivery', result: 'Faster release cycles and measurable quality improvement through blended delivery support.', color: '#2F80ED' },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your initiative scope, constraints, and success metrics before any work begins.' },
  { num: '02', title: 'Team Assembly', desc: 'A curated delivery team matched to your stack and timeline is assembled from our specialist network.' },
  { num: '03', title: 'Governed Sprints', desc: 'Structured sprint cadences, status reporting, and clear escalation paths keep delivery on track.' },
  { num: '04', title: 'Handoff & Documentation', desc: 'We deliver production-ready outcomes with full knowledge transfer built into every engagement.' },
];

export default function TechnologyServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#0B1120' }}
      >
        {/* Animated background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
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
          {/* Diagonal clip mask — left edge is a slanted cut */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Actual image */}
            <img
              src="/Technology-Services/Home-Page.png"
              alt="Technology Services"
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
              { label: 'Sprints', val: '2 Weeks', top: '18%', right: '10%' },
              { label: 'Cloud Experts', val: 'AWS/GCP/Azure', top: '52%', right: '6%' },
              { label: 'Delivery', val: 'SLA-Backed', top: '72%', right: '18%' },
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

        {/* Glow orb behind content */}
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
                Technology Services
              </span>
            </motion.div>

            {/* Heading — word-by-word, tighter font size */}
            <h1
              className="font-display font-extrabold leading-[1.08] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              {/* "Technology Services" — first line */}
              {['Technology', 'Services'].map((word, i) => (
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
              <br />
              {/* "Program Forward" - second line */}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.48 }}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', color: '#60A5FA' }}
              >
                Program Acceleration
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
              Technology services that move programs forward—faster. Modernize applications, build data platforms, operationalize analytics & AI/ML, and modernize cloud environments—with enterprise-grade delivery governance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.05 }}
              className="text-sm leading-[1.85] mb-10"
              style={{ color: 'rgba(255,255,255,0.48)', maxWidth: '500px' }}
            >
              Partner with experienced delivery teams to execute high-impact engineering, data modernization, and analytics initiatives.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.2 }}
              className="flex flex-wrap items-center gap-5"
            >
              <CTABtn href="#start-project" primary>Start a Project</CTABtn>
              <CTABtn href="#outcomes" primary={false}>View Success Stories</CTABtn>
            </motion.div>

          </div>
        </div>
      </section>
      {/* CAPABILITIES */}
      <section id="capabilities" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr
            badge="Capabilities"
            title="What we deliver"
            sub="Four core capability areas built around the technology initiatives that matter most to enterprise delivery teams."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.6) 100%)' }} />
                  {/* Accent line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: c.accent }} />
                </div>

                {/* Content */}
                <div className="bg-white p-7">
                  <div className="h-[2px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-16" style={{ background: c.accent }} />
                  <h3 className="font-display font-extrabold text-slate-800 text-xl leading-snug mb-3">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                  <div className="flex items-center gap-1.5 mt-5">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c.accent }}>Learn More</span>
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section
        id="delivery"
        className="py-20 sm:py-28 border-b border-slate-100"
        style={{
          backgroundColor: '#FAFAF8',
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Delivery Approach" title="How we work"
            sub="Every engagement runs on a structured delivery model designed to minimize risk and maximize velocity." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {DELIVERY.map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="mb-4 text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{d.step}</div>
                <h4 className="font-display text-lg font-bold text-ink-900 mb-2">{d.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{d.desc}</p>
                {i < DELIVERY.length - 1 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-xl" style={{ color: '#cbd5e1' }}>→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Case Studies" title="Outcomes we've delivered" sub="Real results from real engagements." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {OUTCOMES.map((o, i) => (
              <motion.div key={o.client} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${o.color}` }}>
                <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ background: `${o.color}18`, color: o.color }}>{o.tag}</span>
                <h4 className="font-display text-base font-bold text-ink-900 mb-3">{o.client}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{o.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* START A PROJECT — two-column orange CTA */}
      <OrangeCTASection
        id="start-project"
        badge="Start a Project"
        headline="Tell us what you're building"
        sub="Share your initiative and our delivery team will respond with a tailored approach—quickly."
        steps={FORM_STEPS}
        ctaLabel="Get Started"
        formHeadline="Start a Project"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Service area"
        selectOptions={['Application Modernization', 'Data Engineering & Platforms', 'Analytics / AI/ML Enablement', 'Cloud & Data Modernization', 'Multiple / Other']}
        submitLabel="Send Request"
      />

      <Footer />
    </div>
  );
}

/* ── Reusable blue two-column CTA section ── */
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
        <div className="page-cta-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="page-cta-left">
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
            <motion.a href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}>
              {ctaLabel} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>
          </div>

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our delivery team will follow up within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setAgreed(false); }} className="mt-8 text-sm font-semibold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-ink-900 mb-1">{formHeadline}</h3>
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
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe the initiative..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)}
                        className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Syntera Solutions' <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.55)' }} whileTap={{ scale: 0.98 }}>
                      {submitLabel}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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
      <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />{badge}
      </span>
      <ScrollText text={title} as="h2" delay={0.05} stagger={0.07}
        className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900" />
      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#475569' }}>{sub}</p>
    </motion.div>
  );
}

function CTABtn({ href, children, primary }) {
  return (
    <motion.a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: primary ? '#2F80ED' : 'transparent', color: primary ? '#fff' : 'rgba(255,255,255,0.8)', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', border: primary ? 'none' : '1.5px solid rgba(255,255,255,0.25)', boxShadow: primary ? '0 8px 32px rgba(47,128,237,0.4)' : 'none' }}
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
      {children}
    </motion.a>
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

function AppIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>; }
function DataIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>; }
function AiIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>; }
function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>; }
