import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };

const OUTCOMES = [
  { icon: '↓', label: 'Reduced time-to-market', desc: 'Automated code delivery means faster time-to-market and lower risk of downtime.' },
  { icon: '↓', label: 'Decreased risk through automation', desc: 'Automated code delivery of new data platform reduces manual errors and labor costs.' },
  { icon: '↑', label: 'Enhanced operational delivery', desc: 'Enhanced operational delivery for the new data platform with full visibility into dependencies.' },
];

const FORM_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We align on your cloud migration goals, current state, and success metrics.' },
  { num: '02', title: 'Migration Mapping', desc: 'A curated team maps your workload landscape and designs the migration strategy.' },
  { num: '03', title: 'Governed Delivery', desc: 'DevOps methodologies and CI/CD automation keep migration on track with minimal downtime.' },
  { num: '04', title: 'Outcomes & Handoff', desc: 'We deliver a production-ready platform with full documentation and knowledge transfer.' },
];

export default function DatabricksGoogleCloudPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO — Blue version of image reference ── */}
      <section className="relative overflow-hidden pt-20" style={{ backgroundColor: '#1565D8' }}>
        {/* Animated particle-like dots */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
        }} />
        {/* Glowing vertical lines effect (like image) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div key={i}
              animate={{ opacity: [0.03, 0.12, 0.03], y: ['-10%', '110%'] }}
              transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.8 }}
              style={{
                position: 'absolute',
                left: `${10 + i * 11}%`,
                top: '-20%',
                width: '1px',
                height: '40%',
                background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)',
              }}
            />
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[100px]" style={{ background: 'rgba(0,0,80,0.2)' }} />

        {/* Top portion: Big title */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 pt-24 pb-16 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />Success Story
          </motion.span>

          <ScrollText
            text="Building a Roundabout for Data"
            as="h1"
            delay={0.15}
            stagger={0.05}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white max-w-4xl mx-auto"
          />

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-4 text-lg italic font-light" style={{ color: 'rgba(255,255,255,0.72)' }}>
            A Story of Owning Change
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="mt-5 text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.78)' }}>
            A leading transportation and logistics company leverages DevOps to automate their code delivery process.
          </motion.p>
        </div>

        {/* Bottom portion: Three metrics — same as image but blue */}
        <div className="relative z-10" style={{ backgroundColor: 'rgba(0,0,0,0.15)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {OUTCOMES.map((o, i) => (
                <motion.div key={o.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.9 + i * 0.15 }}>
                  <div className="text-4xl font-thin text-white mb-3" style={{ fontSize: '2.5rem', opacity: 0.9 }}>
                    {o.icon}
                  </div>
                  <p className="text-sm font-semibold text-white leading-tight">{o.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />Owning Change in Transportation
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                A Complex Cloud Migration Made Manageable
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                Our customer, one of the largest transportation and logistics companies in North America, was navigating a complex cloud migration project. They leveraged DevOps to augment their pipelines and automate the code deployment process for maximum efficiency.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                To make their internal data analytics more robust and reduce costs, our customer wanted to migrate several workloads to Google Cloud, including a Databricks workload that presented unique challenges. As one of the first-ever organizations to host their Databricks environment on Google Cloud, they faced uncharted territory.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10">
                  <div className="text-6xl mb-5">🚛</div>
                  <h3 className="font-display text-2xl font-extrabold mb-2">The Challenge: Changing Lanes</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Navigating a Complex Databricks Migration to Google Cloud—as one of the first organizations ever to do so.
                  </p>
                  <div className="space-y-3">
                    {['First-ever Databricks on Google Cloud deployment', 'Need to identify gaps in service during migration', 'Complex transition from previous cloud provider', 'Required partner with knowledge AND execution skill'].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTION ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Our Solution" title="Mapping a new route"
            sub="Leveraging DevOps to build efficient communication between old and new cloud environments, enabling seamless data migration and deployment." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { step: '01', title: 'DevOps Methodology', desc: 'Used DevOps methodologies to strategically facilitate the migration process, optimizing code to minimize manual execution.' },
              { step: '02', title: 'Artifactory Integration', desc: 'Integrated the library versioning tool Artifactory to provide full visibility into dependency libraries and version management.' },
              { step: '03', title: 'Repeatable Process Models', desc: 'Helped the customer use repeatable process models to eliminate redundancies and save time across the organization.' },
              { step: '04', title: 'Innovation in Uncharted Territory', desc: 'Close collaboration between Syntera Solutions, the customer and dedicated Databricks resources ensured innovative problem-solving.' },
            ].map((d, i) => (
              <motion.div key={d.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                className="group relative rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="mb-4 text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}
                >{d.step}</div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{d.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{d.desc}</p>
                {i < 3 && <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-xl" style={{ color: '#cbd5e1' }}>→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POWERFUL PARTNERSHIP ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />Powerful Partnership
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Sharing the Road
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                Uncharted territory is the perfect environment for finding innovative solutions. The novelty of this project required close collaboration between us, our customer and their dedicated Databricks resources.
              </p>
              <p className="text-base leading-relaxed text-slate-500 mb-4">
                We applied our knowledge as a Google Cloud Premier Partner throughout the engagement to make strategic recommendations informed by our previous successes with cloud transformation projects. As roadblocks came up, we worked in lockstep to keep our customer moving.
              </p>
              <p className="text-base leading-relaxed text-slate-500 font-semibold text-slate-600">
                Constantly communicating our progress, fueled by our experience, led to our success. No matter the twists and turns—we moved the project along side-by-side with our customer.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}>
              {/* Visual data stream triangle */}
              <div className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 flex items-center justify-center mb-6">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                {/* Triangle data stream */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 border-2 border-white/20 flex items-center justify-center mb-4"
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'rgba(255,255,255,0.05)' }}>
                  </motion.div>
                  <div className="text-center text-white">
                    <div className="text-lg font-extrabold">Data Stream</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Databricks · Google Cloud</div>
                  </div>
                </div>
                {/* Orbiting dots */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div key={i}
                    animate={{ rotate: [angle, angle + 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
                    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {OUTCOMES.map((o, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                    transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                    className="text-center rounded-2xl p-4 border border-blue-100 bg-blue-50">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{o.icon}</div>
                    <div className="text-[11px] text-slate-500 leading-tight">{o.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REAL WORLD RESULTS ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Real-World Results" title="Turning complexity into confidence"
            sub="We handled this migration process one step at a time, turning what could have been a minefield of downtime and lost data into just another cloud journey." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { color: '#2F80ED', icon: '⚡', title: 'Automated CI/CD Pipelines', desc: 'By augmenting their CI/CD pipelines and automating the code deployment process, the customer can put time and effort saved towards expanding data analytics capabilities.' },
              { color: '#1565D8', icon: '📉', title: 'Reduced Risk & Labor Costs', desc: 'Automated code delivery means a lower risk of downtime and reduced labor costs, empowering faster time-to-market.' },
              { color: '#6366F1', icon: '🚀', title: 'Innovator Status', desc: 'Our customer gets to be seen as an innovator for future Databricks migrations to Google Cloud, with detailed documentation to support continued growth.' },
            ].map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${r.color}` }}>
                <div className="text-4xl mb-4">{r.icon}</div>
                <h4 className="font-display text-lg font-bold text-slate-800 mb-2">{r.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Aerial view visual */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-10 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
            {/* Glowing lines simulating freeway interchange */}
            {[...Array(5)].map((_, i) => (
              <motion.div key={i}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                style={{
                  position: 'absolute',
                  width: `${40 + i * 15}%`,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(47,128,237,0.8), transparent)',
                  transform: `rotate(${-20 + i * 10}deg)`,
                  top: `${20 + i * 15}%`,
                }}
              />
            ))}
            <div className="relative z-10 text-center text-white">
              <div className="text-sm font-bold uppercase tracking-widest opacity-70 mb-1">Aerial View</div>
              <div className="text-lg font-extrabold">Complex Freeway Interchange</div>
              <div className="text-xs mt-1 opacity-50">Digital transformation—one lane at a time</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <OrangeCTASection
        id="contact-databricks"
        badge="Discover The Power of Real Partnership"
        headline="Let's talk about the world of possibilities"
        sub="Share your cloud migration initiative and our delivery team will respond with a tailored approach—quickly."
        steps={FORM_STEPS}
        ctaLabel="Get Started"
        formHeadline="Start a Conversation"
        formSub="Fill in the form and we'll follow up with a tailored plan."
        selectLabel="Service area"
        selectOptions={['Databricks Migration', 'Google Cloud Migration', 'DevOps & CI/CD', 'Cloud Data Modernization', 'Multiple / Other']}
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
    <section id={id} className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />

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
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your cloud migration challenge..."
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
