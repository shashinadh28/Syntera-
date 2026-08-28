import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

/* ── Arrow SVG ── */
const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowUpRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ── Animated counter ── */
function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const c = animate(count, to, { duration, ease: 'easeOut', onUpdate: v => setDisplay(Math.floor(v).toLocaleString()) });
    return c.stop;
  }, [inView, to, duration, count]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════════════
   CUSTOM SVG ILLUSTRATIONS (ORANGE THEME MATCHING IMAGE 3)
   ═══════════════════════════════════════════════════════════════════════ */

/* Services Card 1: Ongoing management */
const ManagementIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      {/* Node wireframe frame */}
      <rect x="20" y="10" width="160" height="96" rx="6" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      <circle x="18" y="8" r="3" fill="white" />
      <circle x="182" y="8" r="3" fill="white" />
      <circle x="18" y="108" r="3" fill="white" />
      <circle x="182" y="108" r="3" fill="white" />
      {/* Chat Bubbles */}
      <rect x="35" y="24" width="48" height="24" rx="4" fill="white" opacity="0.9" />
      <rect x="42" y="32" width="22" height="3" rx="1.5" fill="#FF5722" />
      <rect x="42" y="38" width="34" height="3" rx="1.5" fill="#FF5722" />
      <rect x="115" y="28" width="48" height="24" rx="4" fill="white" opacity="0.9" />
      <rect x="122" y="36" width="34" height="3" rx="1.5" fill="#FF5722" />
      {/* Human Agent Silhouette */}
      <circle cx="100" cy="56" r="14" fill="white" />
      <path d="M78 95 C78 78 122 78 122 95 Z" fill="white" />
      {/* Gear Icon */}
      <circle cx="120" cy="85" r="9" fill="white" opacity="0.95" />
      <path d="M120 78 L120 92 M113 85 L127 85 M115 80 L125 90 M115 90 L125 80" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

/* Services Card 2: Building & orchestration */
const BuildingIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      <rect x="25" y="15" width="150" height="90" rx="6" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      {/* Central Screen Monitor */}
      <rect x="45" y="22" width="110" height="66" rx="5" fill="white" />
      <rect x="52" y="30" width="42" height="48" rx="4" fill="#FF5722" />
      {/* Brain inside screen */}
      <circle cx="73" cy="54" r="12" fill="white" opacity="0.95" />
      <path d="M68 50 Q73 45 78 50 Q80 54 78 58 Q73 62 68 58 Z" stroke="#FF5722" strokeWidth="1.5" />
      {/* Bar Chart inside screen */}
      <rect x="105" y="58" width="8" height="20" fill="#FF5722" />
      <rect x="118" y="46" width="8" height="32" fill="#FF5722" />
      <rect x="131" y="34" width="8" height="44" fill="#FF5722" />
      {/* Monitor Stand */}
      <rect x="92" y="88" width="16" height="12" fill="white" />
      <rect x="75" y="98" width="50" height="4" rx="2" fill="white" />
      {/* Sparkling stars */}
      <path d="M148 20 L150 25 L155 27 L150 29 L148 34 L146 29 L141 27 L146 25 Z" fill="white" />
      <path d="M152 75 L154 80 L159 82 L154 84 L152 89 L150 84 L145 82 L150 80 Z" fill="white" />
    </svg>
  </div>
);

/* Services Card 3: Training & optimization */
const TrainingIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      {/* Laptop shape */}
      <rect x="40" y="24" width="120" height="70" rx="6" fill="white" />
      <rect x="48" y="32" width="104" height="54" rx="4" fill="#FF5722" />
      <polygon points="25,98 175,98 165,94 35,94" fill="white" />
      {/* User on screen with training badge */}
      <circle cx="76" cy="52" r="10" fill="white" />
      <path d="M62 76 C62 66 90 66 90 76 Z" fill="white" />
      {/* Training / Feedback gear & sparkle */}
      <circle cx="120" cy="56" r="14" fill="white" />
      <path d="M120 48 L120 64 M112 56 L128 56 M114 50 L126 62 M114 62 L126 50" stroke="#FF5722" strokeWidth="2.5" />
      <path d="M142 30 L144 34 L148 35 L144 37 L142 41 L140 37 L136 35 L140 34 Z" fill="white" />
    </svg>
  </div>
);

/* Services Card 4: Integration with existing systems */
const IntegrationIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      {/* Central agent node surrounded by connected system blocks */}
      <rect x="25" y="15" width="150" height="90" rx="6" stroke="white" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.45" />
      {/* Outer nodes */}
      <rect x="20" y="42" width="10" height="10" fill="white" />
      <rect x="170" y="42" width="10" height="10" fill="white" />
      <rect x="42" y="18" width="10" height="10" fill="white" />
      <rect x="148" y="18" width="10" height="10" fill="white" />
      <rect x="42" y="92" width="10" height="10" fill="white" />
      <rect x="148" y="92" width="10" height="10" fill="white" />
      {/* Central Agent */}
      <circle cx="100" cy="46" r="14" fill="white" />
      <path d="M72 88 C72 68 128 68 128 88 Z" fill="white" />
      {/* Embedded gear cluster in chest */}
      <circle cx="100" cy="78" r="8" fill="#FF5722" />
      <circle cx="88" cy="74" r="5" fill="#FF5722" />
      <circle cx="112" cy="74" r="5" fill="#FF5722" />
    </svg>
  </div>
);

/* Services Card 5: Monitoring and support */
const MonitoringIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      <rect x="25" y="16" width="150" height="88" rx="6" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      {/* Left Agent */}
      <circle cx="68" cy="48" r="12" fill="white" />
      <path d="M48 88 C48 72 88 72 88 88 Z" fill="white" />
      {/* Telemetry Window with Target/Eye & Bar Charts */}
      <rect x="94" y="28" width="76" height="58" rx="4" fill="white" />
      <circle cx="112" cy="46" r="8" fill="#FF5722" />
      <circle cx="132" cy="46" r="6" fill="#FF5722" />
      <circle cx="150" cy="46" r="10" fill="#FF5722" />
      {/* Eye shape inside monitor */}
      <path d="M120 70 Q138 56 156 70 Q138 84 120 70 Z" fill="#FF5722" />
      <circle cx="138" cy="70" r="4" fill="white" />
    </svg>
  </div>
);

/* Services Card 6: Custom AI Agent Development */
const CustomDevIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      <rect x="20" y="14" width="160" height="92" rx="6" stroke="white" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.4" />
      {/* Developer Profile Left */}
      <circle cx="62" cy="46" r="12" fill="white" />
      <path d="M44 88 C44 70 80 70 80 88 Z" fill="white" />
      {/* Code Editor Window Right */}
      <rect x="92" y="26" width="82" height="64" rx="5" fill="white" />
      <rect x="98" y="32" width="70" height="52" rx="3" fill="#FF5722" />
      {/* Code syntax tags: </> */}
      <text x="112" y="65" fill="white" fontSize="24" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
      {/* Sparkles */}
      <path d="M38 30 L40 34 L44 35 L40 37 L38 41 L36 37 L32 35 L36 34 Z" fill="white" />
      <path d="M168 20 L170 24 L174 25 L170 27 L168 31 L166 27 L162 25 L166 24 Z" fill="white" />
    </svg>
  </div>
);

/* Services Card 7: Responsible AI Governance */
const GovernanceIllustration = () => (
  <div className="w-full h-44 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-t-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
    <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-white filter drop-shadow-md" fill="none">
      {/* Guardrail network grid */}
      <rect x="25" y="15" width="150" height="90" rx="6" stroke="white" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.45" />
      <rect x="20" y="40" width="8" height="8" fill="white" />
      <rect x="172" y="40" width="8" height="8" fill="white" />
      <rect x="45" y="18" width="8" height="8" fill="white" />
      <rect x="147" y="18" width="8" height="8" fill="white" />
      <rect x="45" y="94" width="8" height="8" fill="white" />
      <rect x="147" y="94" width="8" height="8" fill="white" />
      {/* Scales of Justice */}
      <rect x="97" y="24" width="6" height="70" rx="2" fill="white" />
      <rect x="65" y="90" width="70" height="6" rx="3" fill="white" />
      <line x1="60" y1="36" x2="140" y2="36" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <polygon points="60,38 48,68 72,68" fill="white" />
      <polygon points="140,38 128,68 152,68" fill="white" />
      {/* Sparkle */}
      <path d="M112 55 L114 60 L119 62 L114 64 L112 69 L110 64 L105 62 L110 60 Z" fill="white" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════
   SERVICES & ACCELERATORS DATA
   ═══════════════════════════════════════════════════════════════════════ */

const SERVICES_CARDS = [
  {
    id: 'ongoing-mgmt',
    title: 'Ongoing management of AI agent applications',
    illustration: <ManagementIllustration />,
    desc: 'Lifecycle management, real-time latency optimization, and continuous uptime monitoring for deployed enterprise agents.',
  },
  {
    id: 'building-orchestration',
    title: 'AI agent building, design & orchestration',
    illustration: <BuildingIllustration />,
    desc: 'Multi-agent frameworks, hierarchical task planning, and reliable autonomous tool-calling pipelines built for enterprise scale.',
  },
  {
    id: 'training-optimization',
    title: 'AI agent training and optimization',
    illustration: <TrainingIllustration />,
    desc: 'Fine-tuning, RLHF, prompt optimization, and memory cache tuning to maximize accuracy and minimize operational token costs.',
  },
  {
    id: 'integration-systems',
    title: 'AI agent integration with existing systems',
    illustration: <IntegrationIllustration />,
    desc: 'Seamless API connectors, ERP/CRM integration, and real-time database hooks into existing legacy stacks and hyperscaler clouds.',
  },
  {
    id: 'monitoring-support',
    title: 'AI agent monitoring and support',
    illustration: <MonitoringIllustration />,
    desc: '24/7 telemetry monitoring, hallucination guardrails, drift alerts, and dedicated L2/L3 enterprise support desks.',
  },
  {
    id: 'custom-development',
    title: 'Custom AI agent development',
    illustration: <CustomDevIllustration />,
    desc: 'Tailored autonomous agents crafted for your unique domain data, proprietary workflows, and business KPIs.',
  },
  {
    id: 'responsible-governance',
    title: 'Responsible AI enablement and governance',
    illustration: <GovernanceIllustration />,
    desc: 'Deterministic safety guardrails, audit logging, ethical compliance, and EU AI Act alignment for enterprise trust.',
  },
];

const ACCELERATOR_CARDS = [
  {
    id: 'acc-1',
    title: 'Autonomous intelligence & insights engine',
    badge: 'Insights',
    desc: 'Real-time telemetry and data stream synthesizer that detects enterprise anomalies and formulates instant executive action plans.',
  },
  {
    id: 'acc-2',
    title: 'Document & content intelligence hub',
    badge: 'Multimodal',
    desc: 'Cognitive multi-modal parser and OCR agent that extracts, summarizes, and structures complex legal and financial records in milliseconds.',
  },
  {
    id: 'acc-3',
    title: 'Responsible AI & compliance control tower',
    badge: 'Governance',
    desc: 'Autonomous policy inspector enforcing deterministic safety guardrails, hallucination blocks, and strict regulatory audit trails.',
  },
  {
    id: 'acc-4',
    title: 'Category performance advisor',
    badge: 'Retail / CPG',
    desc: 'Autonomous merchandising advisor that monitors SKU velocities, calculates price elasticity, and rebalances assortment in real time.',
  },
  {
    id: 'acc-5',
    title: 'Customer engagement driver',
    badge: 'CX & CRM',
    desc: 'Hyper-personalized multi-channel agent resolving customer journeys, preventing churn, and orchestrating upsell opportunities.',
  },
  {
    id: 'acc-6',
    title: 'Store & product optimization agents',
    badge: 'Operations',
    desc: 'Visual shelf inspection, dynamic replenishment schedules, and localized demand sensing across physical and digital stores.',
  },
  {
    id: 'acc-7',
    title: 'Risk, compliance & campaign effectiveness engine',
    badge: 'Risk & Media',
    desc: 'Cross-channel fraud detection, SLA auditing, and autonomous media mix modeling maximizing return on campaign spend.',
  },
  {
    id: 'acc-8',
    title: 'Sales & operations execution mesh',
    badge: 'Supply Chain',
    desc: 'End-to-end S&OP orchestrator synchronizing supplier lead times, plant capacity, and warehouse logistics autonomously.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   CASE STUDIES DATA
   ═══════════════════════════════════════════════════════════════════════ */

const CASE_STUDIES = [
  {
    title: 'Operationalizing GenAI at scale for a global CPG leader',
    desc: "The CPG giant partnered with Tredence to scale GenAI across its global businesses by addressing fragmented AI efforts, compliance risks and complex integration. Tredence deployed a structured LLMOps-led transformation via the CPG leader's AI Engagement Framework, starting with a 3-month maturity assessment and followed by a 6-month execution phase.\n\nThis included a secure LLM Gateway, GenAI governance via GenAI Lens, AI accelerators, and the Client's GenAI platform for business users. The result was a scalable, compliant, and cross-cloud GenAI ecosystem that enabled the Client to industrialize GenAI and drive faster, governed enterprise adoption.",
    badges: [
      '3X faster GenAI adoption',
      '30% boost in productivity',
      '100% security compliance met',
      'Cross-cloud scalability achieved',
      'A GenAI Platform launched for business users',
    ],
    image: '/agentic-ai/cpg_shopper.jpg',
  },
  {
    title: 'Autonomous Demand Sensing & Supply Chain Optimization for Global Retailer',
    desc: 'A Fortune 100 retailer faced volatile inventory stockouts and millions in obsolete markdowns. Tredence deployed a multi-agent orchestration mesh combining real-time POS data, weather indices, and localized foot traffic.\n\nThe autonomous replenishment agent dynamically reallocated stock across 1,200 stores without human intervention, boosting on-shelf availability while cutting logistics overhead dramatically.',
    badges: [
      '45% reduction in stockouts',
      '$14M annual logistics cost savings',
      '99.2% forecast accuracy across top SKUs',
      'Instant supplier reorder triggers',
      'End-to-end autonomous S&OP mesh',
    ],
    image: '/capabilities/DATA-CLOUD.webp',
  },
  {
    title: 'Enterprise Multi-Agent Customer Intelligence for Financial Services Leader',
    desc: 'Handling over 50,000 complex daily mortgage and insurance inquiries, the client integrated Tredence agentic intelligence into their legacy contact center and core banking databases.\n\nOur agentic system resolved multi-layered policy inquiries with zero hallucinations, reduced escalation volume by 62%, and enabled real-time compliance audit logging across every interaction.',
    badges: [
      '62% reduction in escalations',
      '4.2X faster query resolution',
      '100% automated audit logging',
      'Zero regulatory compliance breaches',
      'Seamless core banking API integration',
    ],
    image: '/capabilities/IDENTITY-ACCESS-MANAGEMENT.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   FAQS DATA
   ═══════════════════════════════════════════════════════════════════════ */

const FAQS_DATA = [
  {
    q: 'What is Agentic AI and why is it important for enterprises?',
    a: 'Agentic AI represents a fundamental leap beyond passive text generation and basic chatbots. Unlike traditional models that merely respond to prompts, Agentic AI systems possess agency: they autonomously reason, break down multi-step goals into actionable sub-tasks, execute tools and APIs, evaluate outcomes against desired benchmarks, and iterate until the objective is achieved. For enterprises, this means transitioning from human-supervised prompts to autonomous systems capable of executing complex end-to-end business workflows at unmatched scale.',
  },
  {
    q: 'What challenges do enterprises face in deploying Agentic AI systems?',
    a: 'Deploying agentic systems in production introduces unique enterprise challenges, including multi-agent orchestration reliability, state and long-horizon memory management, preventing cascading hallucinations in autonomous loops, strict latency and cost controls, and legacy enterprise system integration. Furthermore, enterprise governance mandates deterministic guardrails so agents operate within strict regulatory and security boundaries.',
  },
  {
    q: 'How do Agentic AI enterprise solutions drive business impact?',
    a: 'Agentic AI enterprise solutions drive business impact by collapsing multi-day cross-functional workflows into minutes of continuous autonomous execution. They empower organizations to accelerate decision cycles by 5X, reduce operational overhead and human error rates by over 40%, ensure 24/7 real-time telemetry monitoring, and liberate high-value knowledge workers to focus on strategic growth rather than operational execution.',
  },
  {
    q: 'Which enterprise functions can benefit most from Agentic AI deployment?',
    a: 'High-impact functions include Supply Chain & Operations (demand sensing, autonomous inventory rebalancing), Customer Support & Experience (autonomous resolution, conversational advisors), IT & DevOps (automated incident triage, code refactoring, infrastructure healing), Finance & Procurement (invoice reconciliation, spend compliance), and Marketing & Merchandising (autonomous category management, real-time pricing elasticity).',
  },
  {
    q: 'How can organizations ensure governance, safety, and ethical compliance in Agentic AI systems?',
    a: 'Governance is achieved through multi-layered architecture: deterministic prompt-inspection guardrails, granular Role-Based Access Controls (RBAC), secure LLM gateways with rate limiting, human-in-the-loop (HITL) checkpoints for high-stakes decisions, tamper-proof audit trails, and continuous automated red-teaming to prevent model drift, data leakage, and compliance breaches.',
  },
  {
    q: 'Why partner with an Agentic AI Consulting Company like Tredence?',
    a: 'At Tredence, we help enterprises automate workflows by embedding intelligent AI agents that reason, act, and improve continuously. Our services are built for scale, speed, and business alignment so your agents don’t just run–they perform. Ultimately, our goal is to aid clients in navigating a future with a reduced dependency on consultants and an increased reliance on agentic systems that power the best enterprise decisions.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function AgenticAIPage() {
  useEffect(() => {
    document.title = 'Agentic AI — Autonomous Enterprise Intelligence | Syntera';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      {/* 1. HERO SECTION (Matches Image 1) */}
      <HeroSection />

      {/* 2. RECOGNITION & THOUGHT LEADERSHIP (Matches Image 2) */}
      <RecognitionSection />

      {/* 3. TRAIN MARQUEE SECTION (Matches Image 5 & Request #2) */}
      <TrainMarqueeSection />

      {/* 4. SERVICES & ACCELERATORS TABS (Matches Image 3) */}
      <ServicesAndAcceleratorsSection />

      {/* 5. METRICS & CASE STUDY SLIDER (Matches Image 4) */}
      <MetricsAndCaseStudySlider />

      {/* 6. FAQS SECTION (Matches Request #1) */}
      <FaqsSection />

      {/* 7. CTA & FOOTER */}
      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   1. HERO SECTION (Matches Image 1)
   ═══════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-start overflow-hidden bg-[#040A18]">
      {/* Background Image: Deep Cosmic Wave */}
      <div className="absolute inset-0 z-0">
        <img
          src="/agentic-ai/agentic_hero_wave.jpg"
          alt="Agentic AI Background"
          className="w-full h-full object-cover object-center opacity-75"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(4,10,24,0.94) 0%, rgba(4,10,24,0.75) 45%, rgba(4,10,24,0.3) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: 'linear-gradient(to top, #040A18 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70 mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Services</span>
            <span className="text-white/40">/</span>
            <span className="text-blue-400 font-bold">Agentic AI</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Agentifying Enterprises to <br className="hidden sm:inline" />
            Optimize Businesses
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed mb-10 max-w-2xl"
          >
            Unlock radical efficiency, smarter decisions and scalable impact
          </motion.p>

          {/* CTA Link Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center gap-3 text-base font-bold text-white transition-all duration-300 group"
            >
              <span className="relative">
                Empower Business with AI Agents
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-all duration-300 group-hover:scale-x-110" />
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRight size={15} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2. RECOGNITION & THOUGHT LEADERSHIP (Matches Image 2)
   ═══════════════════════════════════════════════════════════════════════ */
function RecognitionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* TOP ROW: While Others Talk AI + Forrester Analyst Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Crown Headline & Award Badges */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-8">
              While Others Talk AI. <br />
              We Got the Crown.
            </h2>

            {/* Badges Display */}
            <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
              {/* Google Cloud Badge */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-lg text-center flex-1 max-w-[210px]">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <img src="https://img.icons8.com/color/32/google-cloud.png" alt="Google Cloud" className="h-5 w-auto" />
                  <span className="text-[10px] font-bold text-slate-600 tracking-wider">Google Cloud</span>
                </div>
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1">Industry Solutions</div>
                <div className="text-sm font-extrabold text-slate-800 leading-tight">Partner of the Year</div>
                <div className="text-xs font-bold text-blue-600 mt-2">2025</div>
              </div>

              {/* Databricks Partner Badge */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-lg text-center flex-1 max-w-[210px]">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className="text-amber-500 font-bold text-xs">★★★★</span>
                  <span className="text-[10px] font-extrabold text-slate-800 tracking-tight">databricks</span>
                </div>
                <div className="text-[9px] uppercase font-bold text-red-500 tracking-widest mb-1">RCG PARTNER</div>
                <div className="text-sm font-extrabold text-slate-800 leading-tight">OF THE YEAR</div>
                <div className="text-[10px] font-bold text-slate-400 mt-1">6 Years in a Row</div>
              </div>
            </div>
          </div>

          {/* Right: Forrester Analyst Quote Box */}
          <div className="lg:col-span-6 bg-slate-50/70 border-l-4 border-slate-300 p-8 rounded-r-2xl">
            <div className="flex items-start gap-3 mb-6">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-300 text-white text-xs font-bold">
                ★
              </span>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal italic">
                &ldquo;Tredence seeks to aid its clients in navigating a future with a reduced dependency on consultants and an increased reliance on agentic systems by developing an automated stack featuring agents as a service.&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-4">
                <img
                  src="/agentic-ai/analyst_zeid.jpg"
                  alt="Zeid Khater"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-tight">Zeid Khater,</h4>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">ANALYST</p>
                </div>
              </div>

              {/* Forrester Logo */}
              <div className="text-right">
                <span className="font-serif text-xl sm:text-2xl font-black text-slate-900 tracking-wider">
                  FORRESTER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Big Card on Left + 3 Thought Leadership Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lower Left: Featured Woman Image Card */}
          <div className="lg:col-span-7 bg-[#FFF2EB] rounded-2xl overflow-hidden border border-orange-100 flex flex-col justify-between shadow-sm group">
            {/* Image Container with Orange Banner Badge */}
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#FF5722] text-white text-xs font-black tracking-widest px-4 py-2 uppercase z-10">
                BEYOND PROMPT
              </div>
              <img
                src="/agentic-ai/hero_woman.jpg"
                alt="Enabling always-on intelligence with purpose-built AI agent"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Area */}
            <div className="p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
                Enabling always-on intelligence with purpose-built AI agent
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Tredence is a pioneer in Agentic AI, powering autonomous decisions for the world’s leading data-driven enterprises.
              </p>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF5722] hover:text-[#D84315] transition-colors"
              >
                <span>READ MORE</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Lower Right: 3 Thought Leadership & News Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Card 1: NEWS */}
            <a
              href="#solutions"
              className="p-6 bg-slate-50/70 hover:bg-slate-100/90 rounded-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group flex-1"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  NEWS
                </span>
                <h4 className="font-display text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  Tredence Launches Retail &amp; CPG GenAI Suite of Accelerators at NRF &apos;25
                </h4>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>

            {/* Card 2: THOUGHT LEADERSHIP */}
            <a
              href="#solutions"
              className="p-6 bg-slate-50/70 hover:bg-slate-100/90 rounded-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group flex-1"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  THOUGHT LEADERSHIP
                </span>
                <h4 className="font-display text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  How Generative and Agentic AI are Democratizing Business Decisions
                </h4>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>

            {/* Card 3: THOUGHT LEADERSHIP */}
            <a
              href="#solutions"
              className="p-6 bg-slate-50/70 hover:bg-slate-100/90 rounded-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group flex-1"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  THOUGHT LEADERSHIP
                </span>
                <h4 className="font-display text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  Why Agentic AI is the Next Big Thing
                </h4>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>

            {/* Pagination Controls Matching Screenshot */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  type="button"
                  aria-label="Previous items"
                  className="px-3 py-1.5 hover:bg-slate-100 text-slate-600 text-xs border-r border-slate-200"
                >
                  ▲
                </button>
                <button
                  type="button"
                  aria-label="Next items"
                  className="px-3 py-1.5 hover:bg-slate-100 text-slate-600 text-xs"
                >
                  ▼
                </button>
              </div>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-emerald-600 text-white text-xs font-bold">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. TRAIN MARQUEE SECTION (Matches Image 5 & Request #2)
   ═══════════════════════════════════════════════════════════════════════ */
function TrainMarqueeSection() {
  const partners = [
    { name: 'Google Cloud', logo: 'https://img.icons8.com/color/48/google-cloud.png' },
    { name: 'Databricks', logo: 'https://img.icons8.com/color/48/databricks.png' },
    { name: 'Snowflake', logo: 'https://img.icons8.com/color/48/snowflake.png' },
    { name: 'Microsoft Azure', logo: '/agentic-ai/Ecosystem/azure-icon-svgrepo-com.svg' },
    { name: 'AWS', logo: 'https://img.icons8.com/color/48/amazon-web-services.png' },
    { name: 'Salesforce', logo: 'https://img.icons8.com/color/48/salesforce.png' },
    { name: 'Okta', logo: 'https://img.icons8.com/color/48/okta.png' },
    { name: 'CyberArk', logo: 'https://img.icons8.com/color/48/cyber-security.png' },
    { name: 'LiveRamp', logo: 'https://img.icons8.com/color/48/network.png' },
  ];

  const analystBadges = [
    {
      title: 'Partner of the Year 2025',
      org: 'Google Cloud',
      category: 'Data & AI Cloud',
      type: 'badge-blue',
    },
    {
      title: 'PEAK MATRIX LEADER',
      org: 'Everest Group',
      category: 'Data and AI Services Specialists',
      type: 'badge-dark',
    },
    {
      title: 'Leader in Generative AI',
      org: 'ISG Provider Lens',
      category: 'Generative AI Services',
      type: 'badge-navy',
    },
    {
      title: 'Leader in Specialty Analytics',
      org: 'ISG Provider Lens',
      category: 'Data Engineering & Science',
      type: 'badge-navy',
    },
    {
      title: 'Partner of the Year 2023',
      org: 'Google Cloud',
      category: 'Industry Solutions',
      type: 'badge-trophy',
    },
    {
      title: 'Analytics Partner of the Year',
      org: 'Microsoft Partner',
      category: 'Azure Data & Analytics',
      type: 'badge-ms',
    },
    {
      title: 'Advanced Tier Services',
      org: 'AWS Partner',
      category: 'Generative AI Competency',
      type: 'badge-aws',
    },
    {
      title: 'LEADER',
      org: 'Gartner',
      category: 'Custom Data Science & AI',
      type: 'badge-dark',
    },
    {
      title: '6X PARTNER OF THE YEAR',
      org: 'Databricks',
      category: 'Enterprise Lakehouse',
      type: 'badge-red',
    },
    {
      title: 'Data Cloud Services Partner',
      org: 'Snowflake',
      category: 'Analytics & Generative AI',
      type: 'badge-cyan',
    },
  ];

  return (
    <section className="py-16 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 mb-8">
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#FF5722] block mb-1">
            OUR PARTNERS
          </span>
        </div>
      </div>

      {/* ── TRAIN MARQUEE 1: PARTNER LOGOS (Scrolling Right to Left like a Train) ── */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-3 mb-16">
        <div className="animate-train-marquee flex items-center gap-12 sm:gap-16">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-default"
            >
              <img src={p.logo} alt={p.name} className="h-9 w-auto object-contain" />
              <span className="text-sm font-extrabold text-slate-800 tracking-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION TITLE: Endorsed by hyperscalers */}
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200/80 pt-10">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Endorsed by hyperscalers <br className="hidden sm:inline" />
              and validated by independent analysts
            </h3>
          </div>
          {/* Trophy Illustration matching screenshot */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5722]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRAIN MARQUEE 2: ANALYST BADGES (Scrolling Right to Left like a Train) ── */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-4">
        <div className="animate-train-marquee-slow flex items-center gap-6">
          {[...analystBadges, ...analystBadges].map((b, i) => (
            <div
              key={`${b.title}-${i}`}
              className="flex-shrink-0 w-60 sm:w-64 p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-36 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  {b.org}
                </span>
                <h5 className="font-display text-sm font-extrabold text-slate-900 leading-snug">
                  {b.title}
                </h5>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">{b.category}</span>
                <span className="h-2 w-2 rounded-full bg-orange-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   4. SERVICES & ACCELERATORS TABS (Matches Image 3)
   ═══════════════════════════════════════════════════════════════════════ */
function ServicesAndAcceleratorsSection() {
  const [currentTab, setCurrentTab] = useState('services'); // 'services' | 'accelerators'

  return (
    <section id="solutions" className="py-24 bg-[#FAF7F2] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Tab Toggle Header Matching Image 3 */}
        <div className="flex items-center gap-8 mb-10 pb-4 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setCurrentTab('services')}
            className={`inline-flex items-center gap-2.5 text-sm sm:text-base font-bold pb-2 transition-all relative ${
              currentTab === 'services'
                ? 'text-[#FF5722]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="text-base">⚙️</span>
            <span>Services</span>
            {currentTab === 'services' && (
              <motion.div
                layoutId="tab-active-indicator"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[#FF5722]"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('accelerators')}
            className={`inline-flex items-center gap-2.5 text-sm sm:text-base font-bold pb-2 transition-all relative ${
              currentTab === 'accelerators'
                ? 'text-[#FF5722]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="text-base">🌀</span>
            <span>Accelerators</span>
            {currentTab === 'accelerators' && (
              <motion.div
                layoutId="tab-active-indicator"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[#FF5722]"
              />
            )}
          </button>
        </div>

        {/* Tab Content 1: SERVICES */}
        {currentTab === 'services' && (
          <motion.div
            key="tab-services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
                  Building AI agent ecosystems to <br className="hidden sm:inline" />
                  optimize enterprise decisions
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Tredence helps enterprises agentify their operations by embedding intelligent AI agents that reason, act and improve autonomously. Our services are built for scale, speed and business alignment so your agents don’t just run, they perform.
                </p>
              </div>
            </div>

            {/* 7 Distinct Cards Grid (Matching Image 3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Distinct Vector Illustration Banner */}
                  {card.illustration}

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-3 group-hover:text-[#FF5722] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF5722] hover:text-[#D84315] transition-colors"
                      >
                        <span>READ MORE</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab Content 2: ACCELERATORS */}
        {currentTab === 'accelerators' && (
          <motion.div
            key="tab-accelerators"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
                  Solve faster with agentified, <br className="hidden sm:inline" />
                  domain-specific AI solutions
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Tredence has engineered a library of high-impact Agentic AI solutions designed to address your most critical operational challenges. These agents are business-aware, domain-trained and built to execute at scale, eliminate inefficiencies, accelerate decisions, and maximize operating impact.
                </p>
              </div>
            </div>

            {/* 8 Accelerator Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACCELERATOR_CARDS.map((acc, index) => (
                <div
                  key={acc.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FF5722]">
                        {acc.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-extrabold text-slate-900 leading-snug mb-3 group-hover:text-[#FF5722] transition-colors">
                      {acc.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                      {acc.desc}
                    </p>
                  </div>

                  <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF5722] hover:text-[#D84315] transition-colors"
                    >
                      <span>READ MORE</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   5. METRICS & CASE STUDY SLIDER (Matches Image 4)
   ═══════════════════════════════════════════════════════════════════════ */
function MetricsAndCaseStudySlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight">
            Activate enterprise intelligence with Tredence AI agents
          </h2>
        </div>

        {/* 5 Metric Cards (Matching Image 4) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-24">
          {/* Card 1: 1000+ */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
              </svg>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] leading-none mb-2">
                <CountUp to={1000} suffix="+" />
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                GenAI trained data and AI experts
              </p>
            </div>
          </div>

          {/* Card 2: 40% */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] leading-none mb-2">
                <CountUp to={40} suffix="%" />
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                productivity boost across 15 enterprise engagements
              </p>
            </div>
          </div>

          {/* Card 3: 5X */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] leading-none mb-2">
                5X
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                faster decision cycles across operations and planning
              </p>
            </div>
          </div>

          {/* Card 4: 50% */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M11 3 8 9l4 12 4-12-3-6" />
              </svg>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] leading-none mb-2">
                <CountUp to={50} suffix="%" />
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                quicker insights delivery across analytics and reporting
              </p>
            </div>
          </div>

          {/* Card 5: 94% */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] leading-none mb-2">
                <CountUp to={94} suffix="%" />
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                NPS with extensive customer recommendations across engagements
              </p>
            </div>
          </div>
        </div>

        {/* ── CASE STUDY SLIDER (Matching Image 4) ── */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-8">
            Here&apos;s how we&apos;ve helped our customers win at the last mile
          </h3>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease }}
                className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Left Narrative Text & Highlight Badges */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug mb-6">
                      {CASE_STUDIES[activeSlide].title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-8">
                      {CASE_STUDIES[activeSlide].desc}
                    </p>

                    {/* Tinted Highlight Bars */}
                    <div className="space-y-2.5">
                      {CASE_STUDIES[activeSlide].badges.map((b) => (
                        <div
                          key={b}
                          className="px-4 py-2.5 rounded-lg bg-[#FFF2EB] border-l-4 border-[#FF5722] text-xs font-bold text-slate-800"
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Photo Area */}
                <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[440px]">
                  <img
                    src={CASE_STUDIES[activeSlide].image}
                    alt={CASE_STUDIES[activeSlide].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls Matching Screenshot */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Previous Case Study"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Next Case Study"
              >
                ›
              </button>
            </div>

            {/* Page number indicators */}
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  type="button"
                  key={`slide-dot-${i}`}
                  onClick={() => setActiveSlide(i)}
                  className={`w-7 h-7 rounded text-xs font-bold transition-all ${
                    activeSlide === i
                      ? 'bg-emerald-600 text-white'
                      : 'border border-emerald-600/40 text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   6. FAQS SECTION (Matches Request #1)
   ═══════════════════════════════════════════════════════════════════════ */
function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faqs" className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#FF5722] block mb-2">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about Agentic AI adoption, enterprise architecture, and real business impact.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`faq-${index}`}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FF5722] text-white rotate-45'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100/80">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   7. FINAL CTA SECTION
   ═══════════════════════════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section id="contact" className="py-20 bg-[#0B1120] relative overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-400/30 text-blue-400 mb-6">
          Ready to Agentify Your Enterprise?
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          Transform Your Operations with Autonomous AI
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with our team of AI specialists to design, build, and deploy high-impact AI agents tailored to your business goals.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#D84315] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/30 transition-all duration-300"
          >
            Talk to an Agentic AI Expert
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/artificial-intelligence"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-sm tracking-wide transition-all duration-300"
          >
            View All AI Services
          </Link>
        </div>
      </div>
    </section>
  );
}
