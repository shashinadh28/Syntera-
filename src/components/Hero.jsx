import { useRef } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/* Per-item stagger variant */
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease, delay: i * 0.12 },
  }),
};

const LOGOS = ['Google', 'GM', 'Oracle', 'FedEx', 'HP', 'Verizon'];

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: '#0A1628', minHeight: '100vh' }}
    >
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blue glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21,101,216,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Background blue circle decoration */}
      <motion.img
        src="/SVG/Orange_Circle.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.1 }}
        style={{
          top: '2%',
          right: '-3%',
          transform: 'translateY(-50%)',
          width: '30vw',
          maxWidth: '700px',
          minWidth: '400px',
          zIndex: 0,
          filter: 'hue-rotate(190deg) saturate(1.2)',
        }}
      />

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            minHeight: '90vh',
            paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            paddingBottom: '3rem',
          }}
        >
          {/* ── LEFT: Text ─────────────────────────────────────── */}
          <div className="hero-text-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Eyebrow Badge */}
            <motion.div
              custom={0} variants={item} initial="hidden" animate="visible"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}
            >
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#1565D8', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1565D8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Welcome to Syntera Tech
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              custom={1} variants={item} initial="hidden" animate="visible"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                marginBottom: '1.75rem',
              }}
            >
              AI Implementation +{' '}
              <span style={{ display: 'inline' }}>Identity Security</span>
              <br />
              <span style={{ color: '#1565D8' }}>for the Enterprise.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} variants={item} initial="hidden" animate="visible"
              style={{
                fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '460px',
                marginBottom: '1.25rem',
                fontWeight: 400,
              }}
            >
              We build and secure AI-powered enterprises. From LLM integration and agentic
              workflows to Zero Trust IAM and identity governance — Syntera Tech delivers the
              technology expertise and engineering talent you need to move fast and stay protected.
            </motion.p>

            {/* Trust line */}
            <motion.p
              custom={3} variants={item} initial="hidden" animate="visible"
              style={{
                fontSize: '11.5px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.05em',
                marginBottom: '2.5rem',
                borderLeft: '2px solid rgba(21,101,216,0.5)',
                paddingLeft: '10px',
                lineHeight: 1.6,
              }}
            >
              Trusted by technology, financial services, and healthcare organizations across the U.S. and globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4} variants={item} initial="hidden" animate="visible"
              className="hero-cta-row"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
            >
              <motion.a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#1565D8', color: '#fff', fontWeight: 700,
                  fontSize: '15px', padding: '14px 28px', borderRadius: '50px',
                  textDecoration: 'none', boxShadow: '0 8px 32px rgba(21,101,216,0.4)',
                  letterSpacing: '0.01em',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(21,101,216,0.55)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Talk to an Expert
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#services"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
                whileHover={{ color: '#fff' }}
              >
                See AI + IAM Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats Row — 4 stats */}
            <motion.div
              custom={5} variants={item} initial="hidden" animate="visible"
              className="hero-stats-row"
              style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}
            >
              <Stat value="500+" label="Talent Engagements" />
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <Stat value="20+" label="Industries Served" />
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <Stat value="98%" label="Client Retention" />
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <Stat value="18k+" label="Enterprise Connections" />
            </motion.div>
          </div>

          {/* ── RIGHT: Hero Image (desktop only) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease }}
            className="hidden lg:flex"
            style={{ position: 'relative', justifyContent: 'center', alignItems: 'flex-end' }}
          >
            {/* White Circle — slides up */}
            <motion.img
              src="/SVG/white_circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-70px', left: '156px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* Tall rectangle behind white circle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-50px', left: '156px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Blue Circle mid-left */}
            <motion.img
              src="/SVG/Orange_Circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-34px', left: '105px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none', filter: 'hue-rotate(190deg) saturate(1.2)' }}
            />

            {/* White Circle bottom-left */}
            <motion.img
              src="/SVG/white_circle.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-8px', left: '54px', zIndex: 2, width: '35px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* Rectangle behind blue circle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '-10px', left: '105px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Rectangle far left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '15px', left: '54px', zIndex: 1, width: '35px', height: '150px', background: '#ffffff', borderRadius: '4px', pointerEvents: 'none' }}
            />

            {/* Stars */}
            <motion.img
              src="/SVG/stars.png" alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease }}
              style={{ position: 'absolute', top: '80%', left: '-80px', zIndex: 1, width: '80px', objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* 18k+ Enterprise Connections badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8, ease }}
              style={{ position: 'absolute', left: '-20px', top: '42%', zIndex: 10, background: 'white', borderRadius: '50px', padding: '8px 16px 8px 8px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            >
              <div style={{ display: 'flex' }}>
                {['#6366f1', '#1565D8', '#0EA5E9'].map((color, i) => (
                  <div key={i} style={{ width: '30px', height: '30px', borderRadius: '50%', background: color, border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                ))}
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#1E5DB8', border: '2px solid white', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0A1628', lineHeight: 1 }}>18k+</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Enterprise Connections</div>
              </div>
            </motion.div>

            {/* Main hero image */}
            <img
              src="/ancile_Landing_Page.webp"
              alt="Professional team collaborating"
              style={{
                width: '100%',
                maxWidth: '560px',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 2,
                marginTop: '-80px',
                marginLeft: '200px',
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6))'
              }}
            />
          </motion.div>
        </div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem', paddingBottom: '3rem' }}
        >
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: '1.5rem' }}>
            Trusted by delivery-focused teams at
          </div>
          <div className="mask-fade-edges" style={{ overflow: 'hidden' }}>
            <div className="flex w-max animate-marquee items-center gap-14">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span key={i} style={{ fontSize: '16px', fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif', fontWeight: 600, color: 'rgba(255,255,255,0.18)', whiteSpace: 'nowrap' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 800, color: '#FFFFFF', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{label}</div>
    </div>
  );
}
