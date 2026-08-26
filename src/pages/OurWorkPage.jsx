import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Briefcase, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { ourWorkItems, tagColors } from "./ourWorkData.js";

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

const filterTags = [
  "All",
  "AI Studio",
  "Design Studio",
  "Front-end",
  "Backend",
  "Mobile",
  "Data Studio",
  "Quality Studio",
];

// Viewport-aware stagger wrapper
function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HoverEffectGrid({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <HoverCard
          key={item.id || item.slug}
          item={item}
          index={idx}
          isHovered={hoveredIndex === idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}

function HoverCard({ item, index, isHovered, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group block p-3 h-full w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Shared hover background */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute inset-0 h-full w-full block rounded-3xl"
            style={{ backgroundColor: "rgba(47, 128, 237, 0.08)" }}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {/* Card inner content */}
      <Link to={`/our-work/${item.slug}`} className="block h-full">
        <div
          className="relative z-20 h-full flex flex-col rounded-2xl overflow-hidden bg-[#0c1521] border border-white/[0.08] transition-all duration-300"
          style={{
            boxShadow: isHovered
              ? "0 8px 30px rgba(47,128,237,0.18), 0 1px 3px rgba(0,0,0,0.2)"
              : "0 1px 3px rgba(0,0,0,0.15)",
            borderColor: isHovered ? "rgba(47, 128, 237, 0.35)" : "rgba(255,255,255,0.07)",
          }}
        >
          {/* Image area */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#060d18] shrink-0">
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#2F80ED] z-10 origin-left transition-transform duration-500"
              style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />

            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: isHovered ? "#2F80ED" : "rgba(255,255,255,0.2)" }}
                />
              </div>
            )}

            {/* Bottom bar on image */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black/50 backdrop-blur-sm z-10">
              <span className="text-[10px] font-mono text-white/40 truncate">{item.slug}</span>
              <span
                className="flex items-center gap-1 text-[10px] font-semibold transition-colors duration-200"
                style={{ color: isHovered ? "#60A5FA" : "rgba(255,255,255,0.4)" }}
              >
                View <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="p-5 flex flex-col flex-1 justify-between bg-white">
            <div>
              {/* Tag badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tags.map((tag) => {
                  const style = tagColors[tag] || {
                    bg: "bg-[#F3F4F6]",
                    text: "text-[#374151]",
                    border: "border-[#E5E7EB]",
                  };
                  return (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${style.bg} ${style.text} ${style.border}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Title */}
              <h2
                className="text-sm font-bold leading-snug line-clamp-2 mb-2 transition-colors duration-200"
                style={{
                  ...displayFont,
                  color: isHovered ? "#2F80ED" : "#0A1628",
                }}
              >
                {item.title}
              </h2>

              {/* Summary */}
              {item.summary && (
                <p className="text-[12px] text-[#6B7280] leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-[#F3F4F6] flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#9CA3AF]">{item.industry}</span>
              <div
                className="flex items-center gap-1 text-[11px] font-semibold text-[#2F80ED] transition-opacity duration-200"
                style={{ opacity: isHovered ? 1 : 0 }}
              >
                Explore <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function OurWorkPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredItems = useMemo(() => {
    return ourWorkItems.filter((item) =>
      selectedTag === "All" ? true : item.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F1117]">
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white text-[#0A1628] pt-24 pb-0 border-b border-[#E8EDF2]"
      >
        {/* Subtle dot grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(10,22,40,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft blue radial glow top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(47,128,237,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full border-2 border-[#2F80ED]/20"
            style={{ width: 140, height: 140, top: "8%", left: "4%" }}
            animate={{
              y: [0, -22, 0, 14, 0],
              scale: [1, 1.06, 1, 0.94, 1],
              opacity: [0.35, 0.55, 0.35, 0.55, 0.35],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute rounded-full bg-[#2F80ED]/10"
            style={{ width: 60, height: 60, bottom: "22%", left: "10%" }}
            animate={{
              y: [0, 18, 0, -12, 0],
              x: [0, 10, 0, -8, 0],
              scale: [1, 1.15, 1, 0.88, 1],
              opacity: [0.3, 0.5, 0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />

          <motion.div
            className="absolute rounded-full border border-[#6366F1]/25"
            style={{ width: 90, height: 90, top: "55%", right: "6%" }}
            animate={{
              y: [0, -16, 0, 20, 0],
              scale: [1, 0.92, 1, 1.10, 1],
              opacity: [0.25, 0.45, 0.25, 0.45, 0.25],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column: left text / right image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[420px]">
            {/* LEFT — text block */}
            <div className="flex flex-col justify-center pb-12 lg:pb-16">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2F80ED] text-[11px] font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3 h-3" />
                Featured Portfolio &amp; Case Studies
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-4"
                style={displayFont}
              >
                Our{" "}
                <span className="text-[#2F80ED]">Work</span>
              </motion.h1>

              {/* Blue underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="h-[3px] w-16 bg-[#2F80ED] rounded-full mb-6 origin-left"
              />

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[15px] text-[#4B5563] leading-relaxed max-w-md mb-8"
              >
                Explore how we partner with world-class startups, Fortune 500 leaders, and innovators to
                engineer scalable platforms, intuitive UX, and custom AI solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#our-work-grid"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2F80ED] text-white font-bold text-sm hover:bg-[#1E5DB8] transition-all duration-200 shadow-[0_4px_20px_rgba(47,128,237,0.30)] group"
                >
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D1D5DB] text-[#374151] font-semibold text-sm hover:border-[#9CA3AF] hover:bg-[#F9FAFB] transition-all duration-200"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-end justify-center lg:justify-end"
            >
              <img
                src="/our-work/our-work-homeimage.png"
                alt="Our Work — AI Powered Analytics Dashboard"
                className="object-contain w-full max-w-[600px] drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="border-t border-[#E8EDF2] py-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              {
                value: "37+",
                label: "Case Studies",
                sublabel: "Delivered successfully",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                iconBg: "bg-[#EFF6FF]",
                iconColor: "text-[#2F80ED]",
              },
              {
                value: "500+",
                label: "Engineers",
                sublabel: "Skilled professionals",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                ),
                iconBg: "bg-[#EEF2FF]",
                iconColor: "text-[#6366F1]",
              },
              {
                value: "15+",
                label: "Years Experience",
                sublabel: "In delivering excellence",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                iconBg: "bg-[#ECFDF5]",
                iconColor: "text-[#10B981]",
              },
              {
                value: "100%",
                label: "Client Satisfaction",
                sublabel: "Trusted by global brands",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                iconBg: "bg-[#FAF5FF]",
                iconColor: "text-[#A855F7]",
              },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-black text-[#0A1628]" style={displayFont}>{stat.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0A1628]">{stat.label}</div>
                  <div className="text-[11px] text-[#9CA3AF]">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Filter & Grid ────────────────────────────────────────────── */}
      <div id="our-work-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Pills */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {filterTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <motion.button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  whileTap={{ scale: 0.96 }}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0A1628] text-white shadow-[0_2px_12px_rgba(10,22,40,0.18)]"
                      : "bg-white text-[#4B5563] hover:bg-[#F3F4F6] border border-[#E5E7EB]"
                  }`}
                >
                  {tag}
                  {tag === "All" && (
                    <span className={`ml-1.5 text-[11px] font-bold ${isActive ? "text-white/60" : "text-[#9CA3AF]"}`}>
                      {ourWorkItems.length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Counter */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#E8EDF2]">
            <p className="text-sm font-medium text-[#6B7280] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2F80ED]" />
              Showing{" "}
              <motion.span
                key={filteredItems.length}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold text-[#0A1628]"
              >
                {filteredItems.length}
              </motion.span>{" "}
              projects
              {selectedTag !== "All" && (
                <span>
                  {" "}in{" "}
                  <span className="font-bold text-[#2F80ED]">{selectedTag}</span>
                </span>
              )}
            </p>
            {selectedTag !== "All" && (
              <button
                onClick={() => setSelectedTag("All")}
                className="text-xs font-semibold text-[#6B7280] hover:text-[#0A1628] transition-colors"
              >
                Clear filter ×
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* HoverEffect Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-14 bg-white rounded-2xl border border-[#E8EDF2]"
            >
              <p className="text-[#6B7280] text-lg font-medium">No projects found in this category.</p>
              <button
                onClick={() => setSelectedTag("All")}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#0A1628] text-white font-semibold text-sm hover:bg-[#162236] transition-colors"
              >
                Show All
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={selectedTag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HoverEffectGrid items={filteredItems} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA strip */}
        <AnimatedSection className="mt-24">
          <div className="bg-[#0A1628] rounded-3xl p-10 sm:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] bg-[#2F80ED]" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-3">
                Start a Project
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3" style={displayFont}>
                Ready to build something extraordinary?
              </h3>
              <p className="text-white/50 max-w-xl text-sm sm:text-base leading-relaxed mb-8">
                Partner with world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2F80ED] text-white font-bold text-sm hover:bg-[#1E5DB8] transition-colors group shadow-[0_4px_20px_rgba(47,128,237,0.35)]"
              >
                Book a free consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
