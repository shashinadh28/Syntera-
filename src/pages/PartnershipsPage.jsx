import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' };

// --- Brand Logo Components (Rendered via clean SVGs to match original brand logos) ---

function AWSLogo() {
  return (
    <svg viewBox="0 0 100 45" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 12.8h3.3v13.6c0 2.2 1.4 3.3 3.5 3.3s3.5-1.1 3.5-3.3V12.8H26v13.8c0 4-2.6 6-6.5 6s-6.5-2-6.5-6V12.8zm17.6 19.8c-2.3 0-4.2-.9-4.8-2.6h3c.4.8 1.1 1.2 2 1.2 1 0 1.6-.4 1.6-1.1v-.2c-.5-.6-1.5-1-2.9-1.3-2.6-.6-4.5-1.5-4.5-3.8 0-2.3 2-3.7 4.5-3.7 2.1 0 3.7.8 4.3 2.3h-2.9c-.3-.7-.9-1-1.6-1-.9 0-1.4.3-1.4.9 0 .6.7.9 2 1.2 2.6.5 4.5 1.5 4.5 3.7 0 2.7-2.1 3.9-4.8 3.9zm13-8.8V12.8h3v20H43v-2.3c-.6 1.8-2 2.7-4.2 2.7-3.7 0-6.1-2.7-6.1-6.7s2.4-6.7 6.1-6.7c2.2 0 3.6.9 4.2 2.8V23.8zm-3.6 6.8c2 0 3.2-1.3 3.2-3.8s-1.2-3.8-3.2-3.8-3.2 1.3-3.2 3.8 1.2 3.8 3.2 3.8z" fill="#232F3E"/>
      <path d="M11 36.5c16.5 6 36.5 6.5 52 1.5.8-.3 1.4.5.8 1-3.2 2.7-9.5 5.5-17.5 6.5-10.5 1.2-22.5.2-34.5-5.5-.6-.3-.3-1.1.4-1.1l.8-.4z" fill="#FF9900"/>
      <path d="M8 35.8c-.8.5-.7 1.3.1 1.7l3 1.5c.8.4 1.4 0 1.1-.9l-1.3-3.2c-.3-.8-1.2-1-1.6-.3l-1.3 1.2z" fill="#FF9900"/>
    </svg>
  );
}

function GoogleCloudLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.002 2l8.225 4.75v9.5l-8.225 4.75-8.225-4.75v-9.5L12.002 2z" fill="#4285F4"/>
        <path d="M12.002 2L3.777 6.75v9.5l8.225 4.75V2z" fill="#34A853"/>
        <path d="M12.002 2v9.5l8.225 4.75V6.75L12.002 2z" fill="#EA4335"/>
        <path d="M12.002 11.5l-8.225 4.75 8.225 4.75v-9.5z" fill="#FBBC05"/>
      </svg>
      <span className="font-display text-lg font-bold text-slate-800 tracking-tight">Google Cloud</span>
    </div>
  );
}

function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 23 23" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
      </svg>
      <div className="text-left">
        <div className="font-display text-xs font-black text-slate-900 tracking-wide leading-none">Microsoft</div>
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-normal">Solutions Partner</div>
      </div>
    </div>
  );
}

function RedHatLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.5 19c-1.8-3.4-6.4-5.3-11.8-5.3-4.2 0-7.8 1.1-9.5 2.8.8-.9 2.5-1.8 5.5-1.8 4.8 0 9.8 1.9 11.2 4.9.4.9.4 1.8.1 2.6 1.8-1 3.5-2 4.5-3.2z" fill="#CC0000"/>
        <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm0 3c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4z" fill="#000000" opacity="0.05"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tighter">Red Hat</span>
    </div>
  );
}

function SnowflakeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-sky-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a1 1 0 0 1 1 1v2.586l1.293-1.293a1 1 0 1 1 1.414 1.414L14 7.414V9a1 1 0 0 1-2 0V7.414L10.293 5.707a1 1 0 0 1 1.414-1.414L13 5.586V3a1 1 0 0 1-1-1zM5.05 6.464a1 1 0 0 1 1.414 0l1.827 1.827L9.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H11l-1.209 1.209 1.209 1.209H11a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1l-1.209-.291-1.827 1.827a1 1 0 1 1-1.414-1.414L6.086 12 4.636 10.55a1 1 0 0 1 .414-1.672V7.878a1 1 0 0 1 0-1.414z"/>
      </svg>
      <span className="font-display text-base font-extrabold text-[#29B6F6] tracking-wide">snowflake</span>
    </div>
  );
}

function ServiceNowLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 100 24" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.8 9.5l2.4-2.4 1.1 1.1-3.5 3.5L5.7 11.2l1.1-1.1 1.4 1.4z" fill="#81B924"/>
        <text x="22" y="17" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="16px" letterSpacing="-0.02em">servicenow.</text>
      </svg>
    </div>
  );
}

function SalesforceLogo() {
  return (
    <svg viewBox="0 0 100 68" className="h-10 w-auto" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.5 28.5c-.2 0-.4 0-.6.1-1.5-6.5-7.3-11.4-14.2-11.4-5.3 0-9.9 2.9-12.4 7.2-2.1-1.7-4.8-2.7-7.8-2.7-6.2 0-11.3 4.6-12.3 10.7-3.9 1.1-6.7 4.7-6.7 8.9 0 5.2 4.3 9.5 9.5 9.5h44.5c5.2 0 9.5-4.3 9.5-9.5.1-5.1-4.1-9.3-9.5-9.3z" />
      <text x="50%" y="46" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="9px" letterSpacing="0.05em">salesforce</text>
    </svg>
  );
}

function AdobeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.6 15h34.3v70H60.6z" fill="#FF0000"/>
        <path d="M5.1 15h34.3v70H5.1z" fill="#FF0000"/>
        <path d="M50 36.9L73.1 85H58.4l-8.4-18.7H36.9L50 36.9z" fill="#FF0000"/>
      </svg>
      <span className="font-display text-base font-extrabold text-[#FF0000] tracking-tighter">Adobe</span>
    </div>
  );
}

function CiscoLogo() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 50 20" className="h-6 w-auto text-sky-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="2" height="6" rx="1" />
        <rect x="7" y="6" width="2" height="10" rx="1" />
        <rect x="12" y="10" width="2" height="6" rx="1" />
        <rect x="17" y="2" width="2" height="14" rx="1" />
        <rect x="22" y="6" width="2" height="10" rx="1" />
        <rect x="27" y="2" width="2" height="14" rx="1" />
        <rect x="32" y="10" width="2" height="6" rx="1" />
        <rect x="37" y="6" width="2" height="10" rx="1" />
        <rect x="42" y="10" width="2" height="6" rx="1" />
      </svg>
      <span className="font-display text-xs font-black text-slate-800 tracking-widest leading-none mt-1">CISCO</span>
    </div>
  );
}

function DatabricksLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3L15 23l35 20 35-20L50 3z" fill="#FF3621"/>
        <path d="M15 43v24l35 20V63L15 43z" fill="#FF3621" opacity="0.8"/>
        <path d="M85 43v24L50 87V63l35-20z" fill="#FF3621" opacity="0.6"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tight">databricks</span>
    </div>
  );
}

function EsriLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-emerald-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M50 10a40 40 0 0 1 34.6 20h-13c-2.3-4-6.3-6.7-11-7.5l-5.6 12-7-15A40 40 0 0 1 50 10zm-30 40a30 30 0 1 1 60 0 30 30 0 0 1-60 0z" />
      </svg>
      <div className="text-left">
        <span className="font-display text-base font-black text-slate-900 tracking-tighter">esri</span>
        <div className="text-[7px] font-bold text-amber-500 uppercase tracking-widest leading-none">Partner Network</div>
      </div>
    </div>
  );
}

function FigmaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 50 75" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 75C19.4 75 25 69.4 25 62.5V50H12.5C5.6 50 0 55.6 0 62.5C0 69.4 5.6 75 12.5 75Z" fill="#0ACF83"/>
        <path d="M0 37.5C0 30.6 5.6 25 12.5 25H25V50H12.5C5.6 50 0 44.4 0 37.5Z" fill="#A259FF"/>
        <path d="M0 12.5C0 5.6 5.6 0 12.5 0H25V25H12.5C5.6 25 0 19.4 0 12.5Z" fill="#F24E1E"/>
        <path d="M25 0H37.5C44.4 0 50 5.6 50 12.5C50 19.4 44.4 25 37.5 25H25V0Z" fill="#FF7262"/>
        <path d="M50 37.5C50 44.4 44.4 50 37.5 50C30.6 50 25 44.4 25 37.5C25 30.6 30.6 25 37.5 25C44.4 25 50 30.6 50 37.5Z" fill="#1ABC9C"/>
      </svg>
      <span className="font-display text-lg font-black text-slate-900 tracking-tight">Figma</span>
    </div>
  );
}

function HashiCorpLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 4.2h-3v3h3v-3zM8.2 4.2h-3v3h3v-3zM13.5 9.5h-3v5h3v-5zM18.8 14.8h-3v5h3v-5zM8.2 14.8h-3v5h3v-5z" />
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tighter">HashiCorp</span>
    </div>
  );
}

function OracleLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-serif text-lg font-extrabold text-[#F80000] tracking-wider uppercase">oracle</span>
      <div className="h-5 w-[1px] bg-slate-300" />
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Partner</span>
    </div>
  );
}

function SailPointLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
      </svg>
      <span className="font-display text-base font-black text-blue-950 tracking-tighter">SailPoint</span>
    </div>
  );
}

function SigmaLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16L12 12l8 8H4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-base font-black text-slate-900 tracking-tight">sigma</span>
    </div>
  );
}

function SitecoreLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
        <path d="M50 10A40 40 0 0 1 90 50h-20A20 20 0 0 0 50 30V10z" />
        <path d="M50 70A20 20 0 0 0 30 50H10a40 40 0 0 1 40 40V70z" />
      </svg>
      <span className="font-display text-base font-black text-slate-900 tracking-wide">SITECORE</span>
    </div>
  );
}

export default function PartnershipsPage() {
  const bigThinkers = [
    { component: AWSLogo, key: 'aws' },
    { component: GoogleCloudLogo, key: 'gcp' },
    { component: MicrosoftLogo, key: 'microsoft' },
    { component: RedHatLogo, key: 'redhat' },
    { component: SnowflakeLogo, key: 'snowflake' },
    { component: ServiceNowLogo, key: 'servicenow' },
    { component: SalesforceLogo, key: 'salesforce' },
  ];

  const distinctiveInnovators = [
    { component: AdobeLogo, key: 'adobe' },
    { component: CiscoLogo, key: 'cisco' },
    { component: DatabricksLogo, key: 'databricks' },
    { component: EsriLogo, key: 'esri' },
    { component: FigmaLogo, key: 'figma' },
    { component: HashiCorpLogo, key: 'hashicorp' },
    { component: OracleLogo, key: 'oracle' },
    { component: SailPointLogo, key: 'sailpoint' },
    { component: SigmaLogo, key: 'sigma' },
    { component: SitecoreLogo, key: 'sitecore' },
  ];

  const depthBreadth = [
    {
      title: 'Full-stack capabilities',
      desc: 'Rapid scalability across a wide range of technologies and services',
      href: '/technology-services',
      image: '/Technology-Partnerships/We-Offer-Depth-and-Breadth/Full-stack-capabilities.webp',
      accent: '#2F80ED',
      tag: 'Technology',
    },
    {
      title: 'Largest talent network in the world',
      desc: 'Unparalleled access to the best talent; part of the largest talent management firm in the world',
      href: '/talent-solutions',
      image: '/Technology-Partnerships/We-Offer-Depth-and-Breadth/Largest-talent-network-world.webp',
      accent: '#6366F1',
      tag: 'Talent',
    },
    {
      title: 'Global geographic footprint',
      desc: 'Outcomes delivered on complex, distributed projects for customers across the globe',
      href: '/contact',
      image: '/Technology-Partnerships/We-Offer-Depth-and-Breadth/Global-geographic-footprint.webp',
      accent: '#0D9488',
      tag: 'Global',
    },
  ];

  const thinkingForward = [
    {
      tag: 'Success Story',
      title: 'Amazon Q Business for Sales Enablement in Banking',
      desc: 'A leading commercial bank partnered with Syntera Consulting to implement Amazon Q Business, delivering fast, AI-powered answers for sales teams while maintaining compliance and security.',
      bgGradient: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      accentColor: '#3B82F6',
      iconText: '🏦',
    },
    {
      tag: 'Article',
      title: 'Best Practices for Implementing Hybrid Agents',
      desc: 'Follow these tips to make the most of your hybrid conversational agent implementation.',
      bgGradient: 'linear-gradient(135deg, #0D9488 0%, #115E59 100%)',
      accentColor: '#14B8A6',
      iconText: '🔒',
    },
    {
      tag: 'Success Story',
      title: 'Creating a Unified, Improved User Experience',
      desc: 'An energy company wanted to streamline internal and external experiences with business automation and digital workplace solutions.',
      bgGradient: 'linear-gradient(135deg, #B45309 0%, #78350F 100%)',
      accentColor: '#F59E0B',
      iconText: '⚡',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
        {/* Animated background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
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
          <div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          >
            <img
              src="/Technology-Partnerships/Technology-Partnerships-homepage.webp"
              alt="Technology Partnerships"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: 0.8 }}
            />
            {/* Dark gradient overlay blending into page bg on left */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(11,17,32,0.95) 0%, rgba(11,17,32,0.45) 35%, rgba(11,17,32,0.1) 100%)' }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.8), transparent)' }}
            />
          </div>

          {/* Floating stat chips */}
          <div className="absolute inset-0" style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
            {[
              { label: 'Tech Partners', val: '20+', top: '20%', right: '10%' },
              { label: 'Certifications', val: '500+', top: '50%', right: '6%' },
              { label: 'Global Reach', val: '40+ Countries', top: '74%', right: '14%' },
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
              className="flex items-center gap-3 mb-8 pt-48 lg:pt-24"
            >
              <span style={{ width: '28px', height: '2px', background: '#2F80ED', borderRadius: '2px', display: 'inline-block' }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#2F80ED' }}>
                Our Ecosystem
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="font-display font-extrabold leading-[1.08] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.22 }}
                style={{ display: 'inline-block', color: '#FFFFFF', marginRight: '0.28em' }}
              >
                Technology
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.38 }}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', color: '#60A5FA' }}
              >
                Partnerships
              </motion.span>
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              style={{ height: '1px', background: 'rgba(47,128,237,0.4)', maxWidth: '420px', marginBottom: '1.75rem' }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.75 }}
              className="text-base leading-[1.85] mb-5"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}
            >
              Transformational technologies demand equally transformative technology partnerships. Full-stack capabilities coupled with depth and diversity of experience in leading platforms that help organizations grow, innovate and thrive.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.9 }}
              className="text-sm leading-[1.85] mb-10"
              style={{ color: 'rgba(255,255,255,0.48)', maxWidth: '500px' }}
            >
              With a progressive yet pragmatic approach, we work hand-in-hand with you to fully leverage these platforms to optimize productivity, adoption, and business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.05 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#integrations"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#2F80ED',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '13px 26px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(47,128,237,0.42)',
                }}
              >
                Meet Our Partners
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <Link
                to="/contact"
                style={{
                  color: 'rgba(255,255,255,0.62)',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Start a Project
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, rgba(47,128,237,0.9), transparent)' }}
              />
              <span className="text-xs uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS SECTION (BIG THINKERS & DISTINCTIVE INNOVATORS) ── */}
      <section id="integrations" className="py-14 bg-white" style={DOT_BG}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          {/* Big Thinkers */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl mb-12"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Best-in-Class Integrations</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Big Thinkers</h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500">
                We're better, together. The world's leading technology brands work with us because of our scale, speed and quality—building upon their foundation to foster and share ideas that help our clients grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {bigThinkers.map((brand, i) => (
                <motion.div
                  key={brand.key}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                  className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 min-h-[96px] transition-all duration-300 shadow-sm"
                >
                  <brand.component />
                </motion.div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 mb-20" />

          {/* Distinctive Innovators */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl mb-12"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Targeted Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Distinctive innovators</h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500">
                Strategic opportunities often require targeted solutions. Embedded in the technology landscape for over 35 years, we continually study the market for strategic technology partnerships to ensure our clients have access to the most innovative platforms and big-thinking companies.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {distinctiveInnovators.map((brand, i) => (
                <motion.div
                  key={brand.key}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                  className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 min-h-[90px] transition-all duration-300 shadow-sm"
                >
                  <brand.component />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPTH AND BREADTH SECTION — ENHANCED with images ── */}
      <section
        className="py-14 sm:py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0B1120' }}
      >
        {/* Background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow orbs */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px]" style={{ background: 'rgba(47,128,237,0.07)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="max-w-3xl mb-4"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.25)', color: '#2F80ED' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Our Advantage
            </span>
            <h2
              className="font-display font-extrabold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              We Offer Depth and{' '}
              <span style={{ color: '#60A5FA' }}>Breadth</span>
            </h2>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            style={{ height: '1px', background: 'rgba(47,128,237,0.3)', maxWidth: '320px', marginBottom: '3.5rem' }}
          />

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depthBreadth.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.75, ease, delay: i * 0.12 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-400"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
                }}
                whileHover={{ y: -8, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ opacity: 0.85 }}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, rgba(11,17,32,0.2) 0%, rgba(11,17,32,0.65) 100%)` }}
                  />
                  {/* Tag badge */}
                  <span
                    className="absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                    style={{ background: item.accent, boxShadow: `0 4px 12px ${item.accent}40` }}
                  >
                    {item.tag}
                  </span>
                  {/* Accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-400 group-hover:h-[4px]"
                    style={{ background: item.accent }}
                  />
                </div>

                {/* Content area */}
                <div
                  className="p-7 relative"
                  style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
                >
                  {/* Grid bg on card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                  />
                  <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item.desc}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider relative z-10 transition-all duration-200"
                    style={{ color: item.accent, textDecoration: 'none' }}
                  >
                    Learn More
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              { stat: '500+', label: 'Certified Professionals' },
              { stat: '35+', label: 'Years in the Industry' },
              { stat: '40+', label: 'Countries Served' },
            ].map((item, i) => (
              <div
                key={item.stat}
                className="flex flex-col items-center text-center py-8 px-6"
                style={{ background: 'rgba(11,17,32,0.6)', backdropFilter: 'blur(12px)' }}
              >
                <div
                  className="font-display font-extrabold leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#60A5FA' }}
                >
                  {item.stat}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── THINKING FORWARD (SUCCESS STORIES / ARTICLES) ── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl mb-10"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Insights & Case Studies</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Thinking Forward</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thinkingForward.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.75, ease, delay: i * 0.12 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
                style={{ background: card.bgGradient }}
              >
                <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div aria-hidden className="absolute right-4 top-4 h-24 w-24 rounded-full opacity-10 flex items-center justify-center text-7xl select-none">
                  {card.iconText}
                </div>

                <div className="p-8 relative z-10">
                  <span
                    className="inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider mb-6 text-white"
                    style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}
                  >
                    {card.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>

                <div className="p-8 pt-0 relative z-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase text-white group"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="relative pb-0.5">
                      Read
                      <span className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: card.accentColor }} />
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TECHNOLOGY PARTNERSHIPS CTA ── */}
      <section className="relative py-12 sm:py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Accelerate Your Platform Transformation?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 opacity-90">
              Leverage our deep experience and direct certifications across the industry's leading cloud, data, and identity ecosystems to drive real outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: '#ffffff', color: '#0F172A', textDecoration: 'none', fontSize: '15px' }}
            >
              Start a Conversation with Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
