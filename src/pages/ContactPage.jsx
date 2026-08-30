import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollText from '../components/ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('talent');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1120' }}>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'rgba(47,128,237,0.09)' }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />LET’S CONNECT
          </motion.span>

          <ScrollText
            text="Let’s Build What’s Next."
            as="h1"
            delay={0.2}
            stagger={0.12}
            blurAmount={14}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.03] tracking-tight text-white"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-5 text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Whether you’re looking for specialized technology talent, exploring a staffing
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: '#FAFAF8',
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
          borderRadius: '40px 40px 0 0',
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* ── LEFT: Form ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease }}
              className="lg:col-span-3"
            >
              <div
                className="bg-white rounded-3xl p-8 sm:p-10"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 32px rgba(15,23,42,0.08)' }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                    className="flex flex-col items-center text-center py-14"
                  >
                    <div
                      className="h-20 w-20 rounded-full grid place-items-center mb-6"
                      style={{ background: 'rgba(47,128,237,0.1)' }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">Message Sent!</h3>
                    <p className="text-ink-500 text-sm leading-relaxed max-w-sm">Thanks—our team will follow up shortly. We typically respond within one business day.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold"
                      style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-ink-900 mb-1.5">Send us a message</h2>
                      <p className="text-sm text-ink-400">Fill in the form and we'll get back to you quickly.</p>
                      <div style={{ width: '48px', height: '3px', background: '#2F80ED', borderRadius: '999px', marginTop: '14px' }} />
                    </div>

                    {/* Toggle */}
                    <div
                      className="inline-flex rounded-xl p-1 mb-7 w-full"
                      style={{ background: 'rgba(15,23,42,0.05)', border: '1px solid rgba(15,23,42,0.08)' }}
                    >
                      {[{ id: 'talent', label: 'I need talent' }, { id: 'project', label: 'I want to start a project' }].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                          style={{
                            color: activeTab === tab.id ? '#fff' : '#64748b',
                            background: activeTab === tab.id ? '#2F80ED' : 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FF label="First Name" name="first" value={form.first} onChange={handleChange} required />
                        <FF label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                      </div>
                      <FF label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                      <FF label="Company" name="company" value={form.company} onChange={handleChange} required />
                      <FF label="Title / Role" name="title" value={form.title} onChange={handleChange} />

                      {activeTab === 'talent' && (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">What roles do you need?</label>
                          <select name="need" value={form.need} onChange={handleChange} className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none" style={{ border: '1.5px solid #e5e7eb', appearance: 'none' }}>
                            <option value="">Select a role category...</option>
                            <option>Software Engineering</option><option>Data Engineering</option>
                            <option>Cloud / DevOps</option><option>QA / Automation</option>
                            <option>Cybersecurity</option><option>Product / PMO / BA</option><option>Multiple / Other</option>
                          </select>
                        </div>
                      )}

                      {activeTab === 'project' && (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">Service area</label>
                          <select name="need" value={form.need} onChange={handleChange} className="w-full px-4 py-3 rounded-xl text-sm text-ink-700 bg-white focus:outline-none" style={{ border: '1.5px solid #e5e7eb', appearance: 'none' }}>
                            <option value="">Select a service area...</option>
                            <option>Application Modernization</option><option>Data Engineering & Platforms</option>
                            <option>Analytics / AI/ML Enablement</option><option>Cloud & Data Modernization</option><option>Multiple / Other</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us more about what you're looking for..."
                          className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none resize-none"
                          style={{ border: '1.5px solid #e5e7eb' }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        style={{
                          width: '100%',
                          background: '#2F80ED',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '15px',
                          padding: '15px',
                          borderRadius: '50px',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 8px 24px rgba(47,128,237,0.35)',
                        }}
                        whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.5)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                      <p className="text-center text-xs text-ink-400">Your data is secure & never shared.</p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* ── RIGHT: Direct Contact & Main Address ────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-1.5">Direct Contact</h3>
                <p className="text-sm text-slate-500">Reach our leadership and talent teams directly.</p>
              </div>

              {/* Email Contacts Card */}
              <div
                className="bg-white rounded-2xl p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}
              >
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2F80ED] mb-4">Email Inquiries</h4>
                <div className="space-y-3.5">
                  <a
                    href="mailto:Info@synterainc.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#2F80ED] transition-colors"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#2F80ED]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18v12H3z" strokeLinejoin="round" />
                        <path d="M3 7l9 6 9-6" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">General &amp; Business</div>
                      <div className="text-sm font-bold text-slate-800">Info@synterainc.com</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hr@synterainc.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#2F80ED] transition-colors"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#2F80ED]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="3.2" />
                        <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">Human Resources &amp; Careers</div>
                      <div className="text-sm font-bold text-slate-800">HR: hr@synterainc.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Main Address Card */}
              <div
                className="bg-white rounded-2xl p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(15,23,42,0.08)' }}
              >
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2F80ED] mb-3">Headquarters</h4>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#2F80ED]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z" strokeLinejoin="round" />
                      <circle cx="12" cy="9.5" r="2.3" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Main Address:</div>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">3415 Custer Road, Suite 153</p>
                    <p className="text-sm text-slate-600">Plano, Texas 75023</p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee Card */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(47,128,237,0.06)', border: '1px solid rgba(47,128,237,0.18)' }}
              >
                <div className="flex items-center gap-2 text-[#2F80ED] font-bold text-sm mb-1.5">
                  <span>⚡</span>
                  <span>Fast Response Commitment</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our engagement leads and specialist recruiters typically respond within 24 hours to all qualified inquiries.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FF({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
        {label}{required && <span style={{ color: '#2F80ED' }}> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-sm text-ink-900 bg-white focus:outline-none transition-shadow"
        style={{ border: '1.5px solid #e5e7eb' }}
      />
    </div>
  );
}
