import { useRef } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/* Per-item stagger variant */
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay: i * 0.1 },
  }),
};

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-[#F7F8FB] px-6 pb-32 pt-16 sm:pb-36 sm:pt-20 md:px-12 lg:px-16 lg:pb-40 lg:pt-24"
    >
      {/* ── 1. FAINT WORLD-MAP / DOT PATTERN BACKGROUND ───────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7cee6 1.2px, transparent 1.2px)',
          backgroundSize: '14px 14px',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 45% 20%, black 40%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 65% 65% at 45% 20%, black 40%, transparent 75%)',
        }}
      />

      {/* ── 2. TOP RIGHT BLUE BACKDROP SWOOSH / CURVE ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] z-0 opacity-90 hidden sm:block"
        style={{
          background: 'radial-gradient(circle at top right, #0d288a 0%, #1742c4 40%, transparent 70%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Solid right organic backdrop path matching reference */}
      <svg
        className="pointer-events-none absolute top-0 right-0 h-full w-[45vw] max-w-[650px] z-0 hidden lg:block"
        viewBox="0 0 500 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M150,0 C30,180 20,400 120,700 L500,700 L500,0 Z"
          fill="#0c2377"
          opacity="0.95"
        />
        <path
          d="M200,0 C100,160 90,380 180,700 L500,700 L500,0 Z"
          fill="#1744cf"
          opacity="0.45"
        />
      </svg>

      {/* ── 3. MAIN HERO CONTENT CONTAINER ───────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        
        {/* ── LEFT COLUMN: Text, Buttons, Ratings & Stats ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            custom={0}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d7ddf0] bg-white py-1.5 pl-2 pr-4 text-xs sm:text-sm font-semibold text-[#0b1b3f] shadow-[0_2px_8px_-2px_rgba(11,27,63,0.08)] mx-auto lg:mx-0"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f5fe0] text-xs text-white">
              👥
            </span>
            <span>Welcome to Syntera · Staffing &amp; Technology</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={1}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mb-4 font-display text-4xl sm:text-5xl lg:text-[50px] font-extrabold leading-[1.1] tracking-tight text-[#0b1b3f] text-center lg:text-left"
          >
            Where Talent Meets <br />
            <span className="text-[#2f5fe0]">Technology.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mb-4 max-w-[500px] text-base leading-relaxed text-[#5b6478] sm:text-lg text-center lg:text-left mx-auto lg:mx-0"
          >
            Connecting exceptional talent, innovative technology, and ambitious businesses to build what’s next.
          </motion.p>

          {/* Trust callout line */}
          <motion.p
            custom={3}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mb-6 text-xs sm:text-sm font-medium text-[#5b6478]/90 border-l-2 lg:border-l-2 border-t-2 lg:border-t-0 border-[#2f5fe0] pl-3 lg:pl-3 pt-3 lg:pt-0 leading-relaxed max-w-[480px] text-center lg:text-left mx-auto lg:mx-0"
          >
            Let’s build what’s next, together. Trusted by enterprise organizations across the U.S. and globally.
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            custom={4}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mb-7 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#2f5fe0] px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_-8px_rgba(47,95,224,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1c3fae] hover:shadow-[0_14px_24px_-8px_rgba(47,95,224,0.7)]"
            >
              <span>Talk to an Expert</span>
              <span className="text-base font-normal">↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-[#2f5fe0] bg-white px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm font-bold text-[#2f5fe0] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eef2ff]"
            >
              <span>Explore Services &amp; Talent</span>
              <span className="text-base font-normal">↗</span>
            </a>
          </motion.div>

          {/* Rating & Trust */}
          <motion.div
            custom={5}
            variants={item}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="mb-6">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5b6478] text-center lg:text-left">
                Trusted By Our Clients
              </span>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex gap-1 text-lg leading-none text-[#2f5fe0]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="opacity-60">★</span>
                </div>
                <span className="text-[#c7cee6]">|</span>
                <span className="text-xs sm:text-sm font-bold text-[#0b1b3f]">
                  500+ Happy Enterprise Engagements
                </span>
              </div>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 border-t border-slate-200/90 w-full text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1b3f]">500+</div>
                <div className="text-xs text-[#5b6478] font-semibold mt-0.5">Talent Engagements</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1b3f]">20+</div>
                <div className="text-xs text-[#5b6478] font-semibold mt-0.5">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1b3f]">98%</div>
                <div className="text-xs text-[#5b6478] font-semibold mt-0.5">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1b3f]">18k+</div>
                <div className="text-xs text-[#5b6478] font-semibold mt-0.5">Enterprise Connections</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Image Collage Matching Reference Design ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="grid h-[380px] sm:h-[460px] md:h-[520px] grid-cols-[1.35fr_1fr] grid-rows-2 gap-4 sm:gap-5"
        >
          {/* Main Large Photo (Left spanning 2 rows) */}
          <div className="row-span-2 overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_20px_40px_-18px_rgba(11,27,63,0.35)] relative group bg-slate-100">
            <img
              src="/hero/hero_main_photo.jpg"
              alt="Syntera Executive & Tech Leadership"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 2 (Top Right) */}
          <div className="overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_20px_40px_-18px_rgba(11,27,63,0.35)] relative group bg-slate-100">
            <img
              src="/hero/hero_photo_2.jpg"
              alt="Engineers Collaborating"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 3 (Bottom Right) */}
          <div className="overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_20px_40px_-18px_rgba(11,27,63,0.35)] relative group bg-slate-100">
            <img
              src="/hero/hero_photo_3.jpg"
              alt="Specialized Software & Cloud Talent"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* ── 4. BOTTOM DUAL-LAYERED WAVE GRAPHIC MATCHING REFERENCE ──────────── */}
      <svg
        className="absolute inset-x-0 -bottom-0.5 z-0 h-[140px] w-full sm:h-[180px] md:h-[220px]"
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,120 C300,220 500,20 850,80 C1150,130 1350,20 1600,90 L1600,220 L0,220 Z"
          fill="#ffffff"
        />
        <path
          d="M0,150 C300,250 500,50 850,110 C1150,160 1350,50 1600,120 L1600,220 L0,220 Z"
          fill="#0c2069"
        />
      </svg>
    </section>
  );
}
