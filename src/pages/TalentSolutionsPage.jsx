import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';
import { CardHoverEffect } from '../components/ui/CardHoverEffect.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' };

const ENGAGEMENT_MODELS = [
  { num: '01', title: 'Staff Augmentation', desc: 'Extend your team with vetted specialists on demand. Scale up or down as project needs shift—without the overhead of full-time hiring.', icon: AugIcon, image: '/Engagement-Models/Staff-Augmentation.webp' },
  { num: '02', title: 'Direct Hire', desc: 'We identify, vet, and present top permanent candidates aligned to your culture, requirements, and growth trajectory.', icon: HireIcon, image: '/Engagement-Models/Direct-Hire.webp' },
  { num: '03', title: 'Project-Based Teams', desc: 'Deploy a curated team purpose-built for a specific initiative—from kickoff to delivery with built-in accountability.', icon: TeamIcon, image: '/Engagement-Models/Project-Based-Teams.webp' },
  { num: '04', title: 'Delivery & PMO Support', desc: 'Strengthen program delivery with experienced PMs, delivery leads, and BAs who bring governance and velocity.', icon: PmoIcon, image: '/Engagement-Models/Delivery-PMO-Support.webp' },
];

const ROLES = [
  { role: 'Software Engineers', spec: 'Full-Stack / Backend / Frontend' },
  { role: 'Data Engineers', spec: 'Pipelines, Platforms, Lakehouse/Warehouse' },
  { role: 'Cloud Engineers', spec: 'AWS / Azure / GCP' },
  { role: 'DevOps / Platform Engineers', spec: 'CI/CD, Observability, SRE' },
  { role: 'QA / Test Automation Engineers', spec: 'Quality Engineering' },
  { role: 'Data Scientists / ML Engineers', spec: 'Applied AI/ML' },
];

const FORM_STEPS = [
  { num: '01', title: 'Define Your Need', desc: 'Share your talent requirements or project goals—we align fast on scope, stack, and timeline.' },
  { num: '02', title: 'We Source & Vet', desc: 'Our domain specialists surface and screen candidates against precise technical and cultural criteria.' },
  { num: '03', title: 'Receive a Shortlist', desc: 'You get a concise, high-quality shortlist—typically within days, not weeks.' },
  { num: '04', title: 'Governed Delivery', desc: 'We stay engaged with clear SLAs, open reporting, and proactive communication throughout.' },
];

export default function TalentSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
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
              src="/talent-solutions/Home-Page.webp"
              alt="Talent Solutions"
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
              { label: 'Match Time', val: '48 Hrs', top: '18%', right: '10%' },
              { label: 'Vetted Talent', val: '5,000+', top: '52%', right: '6%' },
              { label: 'Success Rate', val: '98%', top: '72%', right: '18%' },
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
                Talent Solutions
              </span>
            </motion.div>

            {/* Heading — word-by-word, tighter font size */}
            <h1
              className="font-display font-extrabold leading-[1.08] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              {/* "Talent Solutions" — first line */}
              {['Talent', 'Solutions'].map((word, i) => (
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
              {/* "Built for Speed" - second line */}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.48 }}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', color: '#60A5FA' }}
              >
                Built for Speed & Fit
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
              Talent solutions built for speed, fit, and accountability. Specialized talent across engineering, data, cloud, QA automation, and AI—matched quickly and supported with clear governance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.05 }}
              className="text-sm leading-[1.85] mb-10"
              style={{ color: 'rgba(255,255,255,0.48)', maxWidth: '500px' }}
            >
              Extend your team with vetted specialists on demand. Scale up or down as project needs shift—without the overhead of full-time hiring.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.2 }}
              className="flex flex-wrap items-center gap-5"
            >
              <CTABtn href="#request-talent" primary>Request Talent</CTABtn>
              <CTABtn href="#engagement-models" primary={false}>See Engagement Models</CTABtn>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section id="engagement-models" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Engagement Models" title="Choose the model that fits your needs"
            sub="From rapid staff augmentation to full program delivery—structured for outcomes, not just headcount." />
          <div className="mt-14"><CardHoverEffect items={ENGAGEMENT_MODELS} showIcon={false} showNumber={false} /></div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <SectionHdr badge="Roles & Specialties" title="The talent we place"
            sub="High-demand engineering and technology disciplines that drive modern delivery." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {ROLES.map((r, i) => (
              <motion.div key={r.role} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white hover:shadow-md transition-shadow" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                <span className="mt-1 h-5 w-5 shrink-0 rounded-full grid place-items-center" style={{ background: 'rgba(47,128,237,0.12)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-ink-900 text-sm">{r.role}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{r.spec}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST TALENT — two-column orange CTA */}
      <OrangeCTASection
        id="request-talent"
        badge="Request Talent"
        headline="Tell us what you need"
        sub="Share your requirements and our team will respond with qualified candidates—typically within 48 hours."
        steps={FORM_STEPS}
        ctaLabel="Get Started"
        formHeadline="Request Talent"
        formSub="Fill in the form and we'll follow up quickly."
        selectLabel="What roles do you need?"
        selectOptions={['Software Engineering', 'Data Engineering', 'Cloud / DevOps', 'QA / Automation', 'Cybersecurity', 'Product / PMO / BA', 'Multiple / Other']}
        submitLabel="Submit Request"
      />

      <Footer />
    </div>
  );
}

/* ── Reusable blue two-column CTA section ── */
function OrangeCTASection({ id, badge, headline, sub, steps, ctaLabel, formHeadline, formSub, selectLabel, selectOptions, submitLabel }) {
  const stepsRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  return (
    <section id={id} className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
      {/* Grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      {/* Glow orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="page-cta-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: headline + steps */}
          <div className="page-cta-left">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#EAF3FF' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />{badge}
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              {headline}
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-base leading-[1.9] max-w-sm mb-10" style={{ color: 'rgba(234,243,255,0.85)' }}>
              {sub}
            </motion.p>

            {/* Steps */}
            <div ref={stepsRef} className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4">
                  <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl font-bold text-sm"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#EAF3FF' }}>
                    {s.num}
                  </span>
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
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}>
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </motion.a>
          </div>

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our team will follow up within one business day.</p>
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
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us more about what you're looking for..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    {/* Checkbox */}
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div className="relative mt-0.5 shrink-0">
                        <div onClick={() => setAgreed(!agreed)}
                          className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                          style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                          {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </div>
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Syntera Solutions' <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justify_content: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.55)' }} whileTap={{ scale: 0.98 }}>
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

function AugIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>; }
function HireIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function TeamIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>; }
function PmoIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>; }
