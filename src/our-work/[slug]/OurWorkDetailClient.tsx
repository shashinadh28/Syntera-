"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Wrench,
  Lightbulb,
  Code,
  Cpu,
  Sparkles,
  ChevronRight,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Tag,
} from "lucide-react";
import { OurWorkItem, ourWorkItems } from "@/lib/our-work-data";

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

/* ── Shared fade-up reveal ─────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger children container ───────────────────────── */
function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface Props {
  item: OurWorkItem;
}

export default function OurWorkDetailClient({ item }: Props) {
  const currentIndex = ourWorkItems.findIndex((w) => w.slug === item.slug);
  const prevItem = currentIndex > 0 ? ourWorkItems[currentIndex - 1] : ourWorkItems[ourWorkItems.length - 1];
  const nextItem = currentIndex < ourWorkItems.length - 1 ? ourWorkItems[currentIndex + 1] : ourWorkItems[0];

  const defaultTab = item.solutionsSections && item.solutionsSections.length > 0 ? 0 : 0;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const outcomes = item.outcomesHighlights || item.results;

  /* hero inView */
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-24 pb-24 text-[#0D1117]">

      {/* ─── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4B5563] hover:text-[#E85D04] transition-colors bg-white px-4 py-2 rounded-full border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#E85D04]/40 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Our Work
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <Link href="/" className="hover:text-[#0D1117] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/our-work" className="hover:text-[#0D1117] transition-colors">Our Work</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#0D1117] font-semibold truncate max-w-[220px]">{item.title}</span>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Title & Intro */}
          <div className="lg:col-span-7">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              {item.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[11px] font-bold text-[#4B5563] uppercase tracking-wider shadow-sm"
                >
                  <Tag className="w-2.5 h-2.5 text-[#E85D04]" />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1117] leading-[1.12] tracking-tight mb-5"
              style={displayFont}
            >
              {item.title}
            </motion.h1>

            {/* Orange rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="h-[3px] w-20 bg-[#E85D04] rounded-full mb-5 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8"
            >
              {item.summary}
            </motion.p>

            {/* Industry chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1628] text-white text-xs font-semibold"
            >
              <Building2 className="w-3.5 h-3.5 text-[#E85D04]" />
              {item.industry}
            </motion.div>
          </div>

          {/* Right — Project image / visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-[0_24px_60px_rgba(0,0,0,0.10)] group bg-[#0A1628] min-h-[340px]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={540}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ minHeight: 340 }}
                  priority
                />
              ) : (
                <>
                  <div className="relative z-10 flex items-center justify-center gap-6 w-full h-full p-8 min-h-[340px]">
                    <div className="w-36 sm:w-44 aspect-[9/18] bg-gray-900 rounded-[28px] p-2 shadow-2xl border-4 border-gray-800 flex flex-col overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="w-16 h-3 bg-gray-800 rounded-full mx-auto mb-1" />
                      <div className="flex-1 bg-amber-50 rounded-xl p-2.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-2">
                            <Smartphone className="w-3 h-3 text-[#E85D04]" />
                            <span className="text-[9px] font-bold text-gray-900">FindMeBoard</span>
                          </div>
                          <div className="bg-white rounded-md p-1.5 shadow-sm text-[8px] text-gray-800 font-bold leading-tight mb-1">
                            Real jobs. One market. Yours.
                          </div>
                          <div className="text-[7px] text-gray-500 leading-tight">
                            We send jobs directly to local pros.
                          </div>
                        </div>
                        <div className="text-[7px] bg-[#E85D04] text-white rounded p-1 text-center font-bold">
                          Get Started →
                        </div>
                      </div>
                    </div>
                    <div className="w-36 sm:w-44 aspect-[9/18] bg-gray-900 rounded-[28px] p-2 shadow-2xl border-4 border-gray-800 flex flex-col overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="w-16 h-3 bg-gray-800 rounded-full mx-auto mb-1" />
                      <div className="flex-1 bg-white rounded-xl p-2.5 flex flex-col justify-between border border-gray-100">
                        <div>
                          <div className="text-[9px] font-bold text-gray-900 mb-1">Dashboard</div>
                          <div className="flex gap-1 mb-2">
                            <span className="px-1 py-0.5 bg-orange-100 text-[#E85D04] text-[7px] font-bold rounded">Active</span>
                            <span className="px-1 py-0.5 bg-gray-100 text-gray-600 text-[7px] rounded">Bidding</span>
                          </div>
                          <div className="text-[8px] font-bold text-gray-800 mb-0.5">Plumbing Job</div>
                          <div className="text-[7px] text-gray-500">Homeowner: John S.</div>
                        </div>
                        <div className="text-[7px] bg-gray-900 text-white rounded p-1 text-center font-medium">
                          Place Bid →
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E85D04]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — SPECIFICATION CARDS (4+1)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <StaggerContainer className="space-y-4" stagger={0.09}>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <Building2 className="w-5 h-5" />,
                label: "Industries",
                value: item.industriesList ? item.industriesList.join(", ") : item.industry,
                iconBg: "bg-[#FFF4EC]",
                iconColor: "text-[#E85D04]",
                accent: "#E85D04",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                label: "Services",
                value: item.servicesList ? item.servicesList.join(", ") : item.tags.join(", "),
                iconBg: "bg-[#EEF2FF]",
                iconColor: "text-[#6366F1]",
                accent: "#6366F1",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                label: "Solutions",
                value: item.solutionsList
                  ? item.solutionsList.join(", ")
                  : "Custom Marketplace, Cloud Infrastructure, AI Matching",
                iconBg: "bg-[#ECFDF5]",
                iconColor: "text-[#10B981]",
                accent: "#10B981",
              },
              {
                icon: <Code className="w-5 h-5" />,
                label: "Technologies",
                value: item.technologies.join(", "),
                iconBg: "bg-[#FFF4EC]",
                iconColor: "text-[#E85D04]",
                accent: "#E85D04",
              },
            ].map((card) => (
              <StaggerItem key={card.label}>
                <div
                  className="group bg-white rounded-2xl p-6 border border-[#E5E7EB] flex items-start gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 cursor-default relative overflow-hidden"
                >
                  {/* Left accent line on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                    style={{ backgroundColor: card.accent }}
                  />
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0D1117] mb-1.5 uppercase tracking-wider" style={displayFont}>
                      {card.label}
                    </h3>
                    <p className="text-sm text-[#4B5563] font-medium leading-relaxed">
                      {card.value}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* AI Tools full-width */}
          <StaggerItem>
            <div className="group bg-[#0A1628] rounded-2xl p-6 border border-[#1a2d4a] flex items-start gap-4 hover:shadow-[0_12px_40px_rgba(10,22,40,0.20)] transition-all duration-300 relative overflow-hidden cursor-default">
              <div className="absolute right-0 top-0 bottom-0 w-[3px] rounded-r-2xl bg-[#A855F7]" />
              <div className="w-11 h-11 rounded-xl bg-[#A855F7]/15 text-[#A855F7] flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white mb-1.5 uppercase tracking-wider" style={displayFont}>
                  AI Tools That Powered Our Workflow
                </h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  {item.aiTools ? item.aiTools.join(", ") : "Claude Code, Figma MCP"}
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — OUTCOMES & HIGHLIGHTS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0A1628] py-12 mb-20 relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E85D04]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left — section label + title */}
            <FadeUp className="lg:col-span-4" delay={0}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#E85D04] mb-4">
                Project Results
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black leading-[1.1] tracking-tight text-white"
                style={displayFont}
              >
                Outcomes
                <br />
                <span className="text-[#E85D04]">&amp; Highlights</span>
              </h2>

              {/* Decorative counter */}
              <div className="mt-8 inline-flex flex-col gap-1 bg-white/[0.06] border border-white/[0.10] rounded-2xl px-6 py-4">
                <span className="text-3xl font-black text-white" style={displayFont}>{outcomes.length}</span>
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Key Outcomes</span>
              </div>
            </FadeUp>

            {/* Right — outcomes list */}
            <StaggerContainer className="lg:col-span-8 space-y-3" stagger={0.07}>
              {outcomes.map((out, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] hover:border-[#E85D04]/40 rounded-xl px-5 py-4 transition-all duration-250 cursor-default">
                    <div className="w-6 h-6 rounded-full bg-[#E85D04]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#E85D04]/25 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D04]" />
                    </div>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed font-medium group-hover:text-white transition-colors">
                      {out}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — SOLUTIONS OVERVIEW (unchanged as per request)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,22,40,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,22,40,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            borderRadius: "1rem",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10" style={displayFont}>
            Solutions overview
          </h2>

          {item.solutionsSections && item.solutionsSections.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                {item.solutionsSections.map((sec, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`text-left px-5 py-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-white text-gray-900 border-gray-300 shadow-md translate-x-1"
                          : "bg-white/60 text-gray-500 border-gray-200/80 hover:bg-white hover:text-gray-800"
                      }`}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </div>
              <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-sm border-l-4 border-l-[#E85D04]">
                {(() => {
                  const currentSec = item.solutionsSections[activeTab] || item.solutionsSections[0];
                  return (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-bold text-gray-900" style={displayFont}>
                        {currentSec.title}
                      </h3>
                      <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                        {currentSec.description}
                      </div>
                      {currentSec.keyDeliverables && currentSec.keyDeliverables.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-4" style={displayFont}>
                            Key deliverables
                          </h4>
                          <div className="space-y-3">
                            {currentSec.keyDeliverables.map((deliv, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-3">
                                <span className="text-[#E85D04] font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                  {deliv}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {currentSec.technologies && currentSec.technologies.length > 0 && (
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Technologies
                          </h4>
                          <p className="text-xs sm:text-sm font-medium text-gray-700">
                            {currentSec.technologies.join(", ")}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.overview}</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — BOTTOM CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <FadeUp>
          <div className="relative bg-[#0A1628] text-white rounded-3xl overflow-hidden text-center">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E85D04]" />
            {/* Dot grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Side sparkle */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-[#E85D04]" />
            </div>

            <div className="relative z-10 px-8 sm:px-12 py-12 sm:py-16">
              <div className="max-w-2xl mx-auto flex flex-col items-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#E85D04] mb-4">
                  Start a Project
                </p>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-[1.1]"
                  style={displayFont}
                >
                  {item.ctaHeadline || "Build and scale on AWS with confidence"}
                </h2>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 max-w-xl">
                  {item.ctaText ||
                    "Engage AWS-certified engineers who deliver measurable positive outcomes. From new product development to modernization and migration initiatives, NexeraTech provides the software engineering, cloud, and AI expertise needed to create secure, innovative, and reliable solutions."}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E85D04] text-white font-bold text-sm hover:bg-[#d05202] transition-all duration-200 shadow-[0_4px_20px_rgba(232,93,4,0.35)] hover:shadow-[0_6px_28px_rgba(232,93,4,0.45)] hover:gap-4 group"
                >
                  {item.ctaButtonText || "Book a free consultation"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — PREV / NEXT NAVIGATION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-[#E5E7EB]">
        <FadeUp>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-6 text-center">
            More Projects
          </p>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.12}>
          {/* Previous */}
          <StaggerItem>
            <Link
              href={`/our-work/${prevItem.slug}`}
              className="group relative bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:border-[#E85D04]/30 transition-all duration-300 flex items-center justify-between overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E85D04] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#4B5563] group-hover:bg-[#E85D04] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#9CA3AF] font-bold block uppercase tracking-wider mb-0.5">
                    Previous Project
                  </span>
                  <span className="text-sm font-bold text-[#0D1117] group-hover:text-[#E85D04] transition-colors line-clamp-1">
                    {prevItem.title}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF]">{prevItem.industry}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#E85D04] transition-colors flex-shrink-0" />
            </Link>
          </StaggerItem>

          {/* Next */}
          <StaggerItem>
            <Link
              href={`/our-work/${nextItem.slug}`}
              className="group relative bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:border-[#E85D04]/30 transition-all duration-300 flex items-center justify-between overflow-hidden"
            >
              <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#E85D04] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-2xl" />
              <div>
                <span className="text-[10px] text-[#9CA3AF] font-bold block uppercase tracking-wider mb-0.5">
                  Next Project
                </span>
                <span className="text-sm font-bold text-[#0D1117] group-hover:text-[#E85D04] transition-colors line-clamp-1">
                  {nextItem.title}
                </span>
                <span className="text-[11px] text-[#9CA3AF]">{nextItem.industry}</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#E85D04] transition-colors flex-shrink-0" />
                <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#4B5563] group-hover:bg-[#E85D04] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </div>
  );
}
