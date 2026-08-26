import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };

const STATS = [
  { value: '95%', label: 'of legacy data successfully migrated' },
  { value: '12', label: 'data table refresh cycles performed daily' },
  { value: '1000+', label: 'hours saved on query refreshes' },
];

const MORE_STORIES = [
  {
    tag: 'Success Story',
    title: 'Leading the Way',
    desc: 'Read how TEKsystems partnered with an organization to transform their Microsoft Azure DevOps pipeline for improved user experiences and increased velocity.',
    image: '/jb-hunt-the-road-to-better-data-gcp-bigquery/More-Stories/Leading-theWay.webp',
    icon: '☁️',
  },
  {
    tag: 'Success Story',
    title: 'Transformation in Transit',
    desc: 'Learn how TEKsystems helped our client gain cloud capabilities through Amazon Web Services.',
    image: '/jb-hunt-the-road-to-better-data-gcp-bigquery/More-Stories/cloud-migration-illustration.webp',
    icon: '🚌',
  },
  {
    tag: 'Success Story',
    title: 'Building a Roundabout for Data',
    desc: 'Learn how a large-scale logistics company navigated a complex Databricks migration with support from TEKsystems.',
    image: '/jb-hunt-the-road-to-better-data-gcp-bigquery/More-Stories/modern-data-platform.webp',
    icon: '🚛',
  },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your data modernization goals, current state, and success metrics.' },
  { num: '02', title: 'Migration Planning', desc: 'A curated team maps your data landscape and designs the migration roadmap.' },
  { num: '03', title: 'Governed Delivery', desc: 'Structured sprint cadences and clear milestones keep migration on track.' },
  { num: '04', title: 'Outcomes & Handoff', desc: 'We deliver a production-ready platform with full knowledge transfer.' },
];

export default function JBHuntPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(47,128,237,0.08)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-12 flex flex-col items-center text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />Success Story
          </motion.span>

          <ScrollText
            text="J.B. Hunt Masters the Momentum of Technology"
            as="h1"
            delay={0.15}
            stagger={0.045}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-5xl mx-auto"
          />

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            J.B. Hunt, a Fortune 500 transportation and logistics company, modernized their legacy data platform to Google Cloud's BigQuery—transforming data availability across the enterprise.
          </motion.p>

          {/* Meta Badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { icon: '⚙️', label: 'What We Did', value: 'Data Analytics' },
              { icon: '🚛', label: 'Industry', value: 'Transportation & Travel' },
              { icon: '☁️', label: 'Key Integration', value: 'Google Cloud / BigQuery' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="text-xl">{b.icon}</span>
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{b.label}</div>
                  <div className="text-xs font-semibold text-white">{b.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS STATS BAR ── */}
      <section className="bg-blue-600 py-12">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div key={s.value} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.12 }}>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s.value}</div>
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW (BigQuery Data Modernization) with real image ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />BigQuery Data Modernization
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Data Availability You Can Drive Home
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                To provide the best-in-class service that J.B. Hunt is known for, they need to capture and maintain mountains of data. This means everything from order details to tracking updates to supply chain information must be stored, secured, and easily accessible from anywhere.
              </p>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                J.B. Hunt identified several areas of opportunity where improvements could be made to their existing enterprise data warehouse (EDW). By migrating from an on-premises DB2 solution to a cloud data warehouse, they could quickly process greater volumes of data, eliminate data siloes and arm stakeholders with near-real-time reports.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                Google Cloud was J.B. Hunt's platform-of-choice for this undertaking, largely due to the benefits of their infrastructure and the reporting capabilities offered through BigQuery. As a Google Cloud Premier Partner, Syntera Consulting was more than up to the task.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              {/* Real BigQuery Modernization image */}
              <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg mb-6 relative group">
                <img
                  src="/jb-hunt-the-road-to-better-data-gcp-bigquery/BigQuery-Data-Modernization/BigQuery-Data-Modernization.webp"
                  alt="BigQuery Data Modernization"
                  className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(11,17,32,0.5) 100%)' }} />
                <div className="absolute bottom-4 right-4 rounded-xl px-3 py-2 text-xs font-bold" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                  <span className="text-white">Google Cloud Premier Partner</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <div className="text-2xl font-extrabold text-blue-600 mb-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s.value}</div>
                    <div className="text-[11px] text-slate-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MIGRATION PLAN — Delivery Approach clone design ── */}
      <section
        className="py-12 sm:py-16 border-b border-slate-100"
        style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Data Modernization Plan" title="Revving the engine to race forward"
            sub="The first step to a successful data migration of this scale was prioritization. We worked with J.B. Hunt's internal experts to identify the highest priority data tables." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { step: '01', title: 'Prioritization', desc: 'We identified the highest priority data tables and broke down the entire migration plan into key milestones supported by stakeholders.' },
              { step: '02', title: 'Pilot Migration', desc: 'We prepared a project backlog and performed a migration pilot test to ensure a successful strategy before full deployment.' },
              { step: '03', title: 'Data Optimization', desc: 'We cleaned up their data, fixed broken integration processes and eliminated variances in logic across reporting silos using BigQuery.' },
              { step: '04', title: 'Analytics Integration', desc: 'Seamless integration with internal analytics and reporting tools gave J.B. Hunt on-demand access to shipping reports and pricing changes.' },
            ].map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="mb-4 text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{d.step}</div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{d.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{d.desc}</p>
                {i < 3 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-xl" style={{ color: '#cbd5e1' }}>→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEEPING CUSTOMER IN DRIVER SEAT with real image ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />Communication & Collaboration
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Keeping Our Customer in the Driver's Seat
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                Our key focus: usage and adoption. We wanted J.B. Hunt's users to immediately see the concrete benefits of this data modernization effort. To do this, we targeted a combination of the highest priority data tables alongside smaller, quicker projects.
              </p>
              <p className="text-base leading-relaxed text-slate-500 mb-6">
                Our direct involvement with the integration effort of this migration allowed us to gain critical insight into the reporting and processing challenges that J.B. Hunt faced as well as their business goals. This put us in a perfect position to offer strategic guidance for the future.
              </p>
              {/* Quote */}
              <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-base italic font-medium text-slate-700 mb-4">
                  "Similar attempts have been made to modernize our legacy environment through various vendors in the past but failed. This is our first success, and it's a big one."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">JS</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Joe Spinelli</div>
                    <div className="text-xs text-slate-500">Director, Engineering & Technology</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              {/* Real Communication & Collaboration image */}
              <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg mb-6 relative group">
                <img
                  src="/jb-hunt-the-road-to-better-data-gcp-bigquery/Communication-Collaboration/Communication-Collaboration.webp"
                  alt="Communication and Collaboration"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(11,17,32,0.45) 100%)' }} />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {STATS.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                    transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                    className="text-center rounded-2xl p-5 border border-blue-100 bg-blue-50">
                    <div className="text-2xl font-extrabold text-blue-600 mb-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s.value}</div>
                    <div className="text-[11px] text-slate-500 leading-tight">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REAL WORLD RESULTS ── */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Real-World Results" title="The road to better data" sub="The serverless infrastructure of J.B. Hunt's new BigQuery solution delivers near-real-time data, empowering smarter business decisions and improving customer experience." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { icon: '⚡', title: 'Faster Refresh Cycles', desc: 'Table refresh processes previously done nightly are now completed in just two hours, delivering near-real-time data access.' },
              { icon: '🕐', title: '1000+ Hours Saved', desc: 'Query refresh windows reduced by up to two and a half minutes each—saving thousands of hours across the organization over time.' },
              { icon: '📊', title: 'Self-Service Reporting', desc: 'Superior insight into final mile services, enablement of self-service reporting, and predictive analysis to inform dynamic pricing capabilities.' },
            ].map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: '3px solid #2F80ED' }}>
                <div className="text-4xl mb-4">{r.icon}</div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{r.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE STORIES with real images ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="More Stories" title="More stories of owning change" sub="Explore more transformation journeys across industries and technologies." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {MORE_STORIES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.55) 100%)' }} />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>{s.tag}</span>
                  <h4 className="font-display text-base font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 mb-4">{s.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500 inline-flex items-center gap-1.5">
                    Read <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <OrangeCTASection
        id="contact-jbhunt"
        badge="Interested in a similar solution?"
        headline="Tell us what you're building"
        sub="Share your data modernization initiative and our delivery team will respond with a tailored approach—quickly."
        steps={FORM_STEPS}
        ctaLabel="Get Started"
        formHeadline="Start a Project"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Service area"
        selectOptions={['Data Platform Migration', 'Cloud Data Warehouse', 'BigQuery / GCP', 'Analytics & Reporting', 'Multiple / Other']}
        submitLabel="Send Request"
      />

      <Footer />
    </div>
  );
}

function OrangeCTASection({ id, badge, headline, sub, steps, ctaLabel, formHeadline, formSub, selectLabel, selectOptions, submitLabel }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  return (
    <section id={id} className="relative py-12 sm:py-16 overflow-hidden"
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
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your data modernization initiative..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)} className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Syntera Consulting' <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
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
