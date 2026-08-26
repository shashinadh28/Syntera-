import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    num: '01',
    title: 'Define Your Need',
    desc: 'Share your technical requirements, stack preferences, timeline, and budget range. The more detail, the faster we can match.',
    icon: DefineIcon,
  },
  {
    num: '02',
    title: 'We Source & Vet',
    desc: 'Our domain specialists surface and screen candidates and delivery partners against precise technical and cultural criteria — not just keyword matching.',
    icon: SearchIcon,
  },
  {
    num: '03',
    title: 'You Receive a Shortlist',
    desc: 'A concise, high-quality shortlist — typically within 3–5 business days for talent, 5–7 days for project delivery.',
    icon: ListIcon,
  },
  {
    num: '04',
    title: 'Governed Delivery',
    desc: 'We stay engaged. Clear SLAs, open reporting, named points of contact, and proactive communication throughout the engagement.',
    icon: ShieldIcon,
  },
];

const TOGGLE_OPTIONS = [
  { id: 'ai-iam-talent', label: 'I need AI or IAM talent' },
  { id: 'project', label: 'I want to start a project' },
  { id: 'general-talent', label: 'I need general tech talent' },
];

const DROPDOWN_OPTIONS = {
  'ai-iam-talent': {
    label: 'What type of role?',
    options: [
      'AI / ML Engineer',
      'IAM / Identity Architect',
      'LLM / GenAI Engineer',
      'MLOps Engineer',
      'Security / IAM Analyst',
      'AI Product Manager',
      'Okta / SailPoint / CyberArk Specialist',
      'Other AI or IAM role',
    ],
  },
  project: {
    label: 'What type of project?',
    options: [
      'AI Implementation / LLM Integration',
      'IAM Platform Implementation',
      'Zero Trust Architecture',
      'Data Platform Build',
      'MLOps / AI Operations',
      'Application Modernization',
      'Other',
    ],
  },
  'general-talent': {
    label: 'What technology area?',
    options: [
      'Software Engineering',
      'Data Engineering',
      'Cloud / DevOps',
      'QA / Automation',
      'Cybersecurity',
      'Product / PMO / BA',
      'Other',
    ],
  },
};

export default function FinalCTA() {
  const [activeTab, setActiveTab] = useState('ai-iam-talent');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const currentDropdown = DROPDOWN_OPTIONS[activeTab];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(21,101,216,0.10)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full blur-[90px]" style={{ background: 'rgba(60,52,137,0.07)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="finalcta-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Steps ───────────────────────────────────── */}
          <div className="finalcta-left">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(21,101,216,0.1)', border: '1px solid rgba(21,101,216,0.25)', color: '#1565D8' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Let's Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-5"
            >
              Tell us what you are building.{' '}
              <span style={{ color: '#1565D8' }}>We will respond within 24 hours.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.16 }}
              className="text-base leading-[1.8] max-w-md mb-10"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Whether you need an IAM architect, an AI engineering team, or a technology delivery partner — share the details and we will come back with a tailored plan.
            </motion.p>

            {/* Steps */}
            <div className="space-y-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="shrink-0 grid h-11 w-11 place-items-center rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#1565D8',
                      }}
                    >
                      <Icon />
                    </span>
                    <div className="pt-1">
                      <h4 className="text-white font-bold text-sm mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mr-2" style={{ color: '#1565D8' }}>{s.num}</span>
                        {s.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Get started link */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: 0.65 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginTop: '2.5rem',
                padding: '12px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '14px',
                color: 'white', textDecoration: 'none',
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </div>

          {/* ── RIGHT: Form card ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: '36px 32px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.12)',
              }}
            >
              {submitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div
                    className="h-20 w-20 rounded-full grid place-items-center mb-6"
                    style={{ background: 'rgba(21,101,216,0.1)' }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Message Sent!</h3>
                  <p className="text-ink-500 text-sm leading-relaxed max-w-xs">Thanks — our team will follow up within 24 hours. We look forward to learning more about what you're building.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-semibold" style={{ color: '#1565D8' }}>Send another →</button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-xl font-bold text-ink-900 mb-1">Send us a message</h3>
                    <p className="text-sm text-ink-400">Fill in the form and we'll get back to you within 24 hours.</p>
                    <div style={{ width: '48px', height: '3px', background: '#1565D8', borderRadius: '999px', marginTop: '14px' }} />
                  </div>

                  {/* 3-option Tab toggle */}
                  <div
                    className="flex flex-col sm:flex-row rounded-xl p-1 mb-7 w-full gap-1"
                    style={{ background: 'rgba(15,23,42,0.05)', border: '1px solid rgba(15,23,42,0.08)' }}
                  >
                    {TOGGLE_OPTIONS.map((tab) => (
                      <button
                        key={tab.id}
                        id={`contact-toggle-${tab.id}`}
                        onClick={() => { setActiveTab(tab.id); setForm(f => ({ ...f, need: '' })); }}
                        className="flex-1 px-2 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 text-center"
                        style={{
                          color: activeTab === tab.id ? '#fff' : '#64748b',
                          background: activeTab === tab.id ? '#1565D8' : 'transparent',
                          border: 'none', cursor: 'pointer',
                          lineHeight: 1.3,
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <FormField label="First Name" name="first" value={form.first} onChange={handleChange} required />
                      <FormField label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                    </div>
                    <FormField label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <FormField label="Company" name="company" value={form.company} onChange={handleChange} required />
                    <FormField label="Title / Role" name="title" value={form.title} onChange={handleChange} />

                    {/* Conditional dropdown */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
                        {currentDropdown.label}
                      </label>
                      <select
                        name="need"
                        value={form.need}
                        onChange={handleChange}
                        id="contact-role-dropdown"
                        className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      >
                        <option value="">Select an option...</option>
                        {currentDropdown.options.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">Message</label>
                      <textarea
                        name="message" rows={3} value={form.message} onChange={handleChange}
                        placeholder="Tell us more — what are you building, what are your constraints, what does success look like?"
                        className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none resize-none"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      id="contact-submit-btn"
                      style={{ width: '100%', background: '#1565D8', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(21,101,216,0.35)' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(21,101,216,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message →
                    </motion.button>
                    <p className="text-center text-xs text-ink-400">Your data is secure and never shared with third parties.</p>
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

/* Form field helper */
function FormField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1.5">
        {label}{required && <span style={{ color: '#1565D8' }}> *</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none"
        style={{ border: '1.5px solid #e5e7eb' }}
      />
    </div>
  );
}

/* Icons */
function DefineIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
}
function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
}
function ListIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
}
function ShieldIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
