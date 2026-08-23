import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  FileText,
  Globe,
  Search,
  MessageSquare,
  Code2,
  Cpu,
  ShieldCheck,
  Brain,
  Activity,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const EASE = [0.22, 1, 0.36, 1];

/* ══════════════════════════════════════════════════════════════════════════
   INTERACTIVE DIAGRAM 1: DataFlowDiagram
   Three source nodes (SQL / Docs / API) converge into a central "Strategy" node.
   ══════════════════════════════════════════════════════════════════════════ */
const NODES_DATAFLOW = [
  { key: 'sql', label: 'SQL', Icon: Database, color: '#3B82F6', y: 70 },
  { key: 'docs', label: 'Docs', Icon: FileText, color: '#8B5CF6', y: 170 },
  { key: 'api', label: 'API', Icon: Globe, color: '#22C55E', y: 270 },
];

const CENTER_DATAFLOW = { x: 430, y: 170 };
const NODE_SIZE_DATAFLOW = 56;
const NODE_X_DATAFLOW = 40;

const pathForDataflow = (node) => {
  const startX = NODE_X_DATAFLOW + NODE_SIZE_DATAFLOW;
  const startY = node.y + NODE_SIZE_DATAFLOW / 2;
  const endX = CENTER_DATAFLOW.x - 34;
  const endY = CENTER_DATAFLOW.y;
  const midX = (startX + endX) / 2;
  return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
};

const DataFlowDiagram = () => {
  const prefersReducedMotion = useReducedMotion();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), prefersReducedMotion ? 0 : 350);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg mx-auto"
      style={{ width: 504, maxWidth: '100%', height: 384 }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <svg
        viewBox="0 0 504 384"
        width="100%"
        height="100%"
        className="relative"
        role="img"
        aria-label="SQL, Docs, and API sources feeding into a central Strategy node"
      >
        {NODES_DATAFLOW.map((node, i) => (
          <g key={node.key}>
            <motion.path
              d={pathForDataflow(node)}
              fill="none"
              stroke={node.color}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0.9}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReducedMotion ? 0 : i * 0.18,
              }}
            />

            {drawn && !prefersReducedMotion && (
              <circle r={3.5} fill={node.color}>
                <animateMotion
                  dur="2.4s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                  path={pathForDataflow(node)}
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.85;1"
                  dur="2.4s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}

        <g>
          {!prefersReducedMotion && (
            <motion.circle
              cx={CENTER_DATAFLOW.x}
              cy={CENTER_DATAFLOW.y}
              r={34}
              fill="none"
              stroke="#2563EB"
              strokeWidth={2}
              initial={{ opacity: 0, scale: 1 }}
              animate={drawn ? { opacity: [0.5, 0], scale: [1, 1.5] } : { opacity: 0 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeOut',
                repeatDelay: 0.3,
              }}
              style={{ transformOrigin: `${CENTER_DATAFLOW.x}px ${CENTER_DATAFLOW.y}px` }}
            />
          )}
          <motion.circle
            cx={CENTER_DATAFLOW.x}
            cy={CENTER_DATAFLOW.y}
            r={34}
            fill="white"
            stroke="#2563EB"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${CENTER_DATAFLOW.x}px ${CENTER_DATAFLOW.y}px` }}
          />
          <motion.circle
            cx={CENTER_DATAFLOW.x}
            cy={CENTER_DATAFLOW.y}
            r={8}
            fill="#2563EB"
            initial={{ scale: 0 }}
            animate={
              drawn && !prefersReducedMotion ? { scale: [1, 1.25, 1] } : { scale: 1 }
            }
            transition={
              drawn && !prefersReducedMotion
                ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                : { delay: 0.3, duration: 0.3 }
            }
            style={{ transformOrigin: `${CENTER_DATAFLOW.x}px ${CENTER_DATAFLOW.y}px` }}
          />
        </g>
      </svg>

      {NODES_DATAFLOW.map((node, i) => (
        <motion.div
          key={node.key}
          className="absolute flex flex-col items-center"
          style={{ left: NODE_X_DATAFLOW, top: node.y, width: NODE_SIZE_DATAFLOW }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm"
            style={{ width: NODE_SIZE_DATAFLOW, height: NODE_SIZE_DATAFLOW }}
          >
            <node.Icon size={22} color={node.color} strokeWidth={2} />
          </div>
          <span className="mt-2 text-xs font-semibold text-gray-600">{node.label}</span>
        </motion.div>
      ))}

      <motion.span
        className="absolute text-sm font-bold text-gray-900"
        style={{ left: CENTER_DATAFLOW.x - 30, top: CENTER_DATAFLOW.y + 42, width: 60, textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: 0.4 }}
      >
        Strategy
      </motion.span>
    </div>
  );
};


/* ══════════════════════════════════════════════════════════════════════════
   INTERACTIVE DIAGRAM 2: OrchestratorDiagram
   A "Master Orchestrator" hub dispatching work out to five agent nodes.
   ══════════════════════════════════════════════════════════════════════════ */
const NODES_ORCHESTRATOR = [
  { key: 'researcher', label: 'Researcher', Icon: Search, color: '#2563EB', bg: '#EFF6FF', x: 571, y: 80 },
  { key: 'critic', label: 'Critic', Icon: MessageSquare, color: '#0891B2', bg: '#ECFEFF', x: 247, y: 224 },
  { key: 'coder', label: 'Coder', Icon: Code2, color: '#9333EA', bg: '#F5F3FF', x: 881, y: 220 },
  { key: 'router', label: 'Router', Icon: Cpu, color: '#E11D48', bg: '#FEF2F2', x: 246, y: 448 },
  { key: 'guardian', label: 'Guardian', Icon: ShieldCheck, color: '#16A34A', bg: '#F0FDF4', x: 885, y: 455 },
];

const CENTER_ORCHESTRATOR = { x: 566, y: 319 };
const NODE_SIZE_ORCHESTRATOR = 56;
const CORE_R_ORCHESTRATOR = 40;

const OrchestratorDiagram = () => {
  const prefersReducedMotion = useReducedMotion();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), prefersReducedMotion ? 0 : 900);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <div
      className="relative rounded-[28px] border border-gray-100 bg-white shadow-xl overflow-hidden mx-auto"
      style={{ width: 1146, maxWidth: '100%', height: 611 }}
    >
      <svg
        viewBox="0 0 1146 611"
        width="100%"
        height="100%"
        className="absolute inset-0"
        role="img"
        aria-label="Master Orchestrator dispatching work to Researcher, Critic, Coder, Router, and Guardian agents"
      >
        {NODES_ORCHESTRATOR.map((node, i) => {
          const angle = Math.atan2(node.y - CENTER_ORCHESTRATOR.y, node.x - CENTER_ORCHESTRATOR.x);
          const startX = CENTER_ORCHESTRATOR.x + Math.cos(angle) * (CORE_R_ORCHESTRATOR + 4);
          const startY = CENTER_ORCHESTRATOR.y + Math.sin(angle) * (CORE_R_ORCHESTRATOR + 4);
          return (
            <g key={node.key}>
              <motion.line
                x1={startX}
                y1={startY}
                x2={node.x}
                y2={node.y}
                stroke="#D1D5DB"
                strokeWidth={1.5}
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReducedMotion ? 0 : 0.3 + i * 0.12,
                }}
              />

              {drawn && !prefersReducedMotion && (
                <circle r={3.5} fill={node.color}>
                  <animateMotion
                    dur="2.2s"
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                    path={`M ${startX} ${startY} L ${node.x} ${node.y}`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.8;1"
                    dur="2.2s"
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {!prefersReducedMotion && (
          <motion.circle
            cx={CENTER_ORCHESTRATOR.x}
            cy={CENTER_ORCHESTRATOR.y}
            r={CORE_R_ORCHESTRATOR + 20}
            fill="url(#coreGlow)"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: `${CENTER_ORCHESTRATOR.x}px ${CENTER_ORCHESTRATOR.y}px` }}
          />
        )}
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle
          cx={CENTER_ORCHESTRATOR.x}
          cy={CENTER_ORCHESTRATOR.y}
          r={CORE_R_ORCHESTRATOR}
          fill="white"
          stroke="#F59E0B"
          strokeWidth={1.5}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CENTER_ORCHESTRATOR.x}px ${CENTER_ORCHESTRATOR.y}px` }}
        />
      </svg>

      {NODES_ORCHESTRATOR.map((node, i) => (
        <motion.div
          key={node.key}
          className="absolute flex flex-col items-center"
          style={{ left: node.x - NODE_SIZE_ORCHESTRATOR / 2, top: node.y - NODE_SIZE_ORCHESTRATOR / 2, width: NODE_SIZE_ORCHESTRATOR }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex items-center justify-center rounded-2xl border border-gray-100 shadow-sm"
            style={{ width: NODE_SIZE_ORCHESTRATOR, height: NODE_SIZE_ORCHESTRATOR, background: node.bg }}
            animate={
              drawn && !prefersReducedMotion
                ? {
                    boxShadow: [
                      '0 0 0 0 rgba(0,0,0,0)',
                      `0 0 0 6px ${node.color}22`,
                      '0 0 0 0 rgba(0,0,0,0)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.35,
              ease: 'easeOut',
            }}
          >
            <node.Icon size={22} color={node.color} strokeWidth={2} />
          </motion.div>
          <span
            className="mt-2 text-xs font-semibold text-gray-700 whitespace-nowrap"
            style={{ transform: 'translateX(0)' }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="absolute flex items-center justify-center"
        style={{ left: CENTER_ORCHESTRATOR.x - CORE_R_ORCHESTRATOR, top: CENTER_ORCHESTRATOR.y - CORE_R_ORCHESTRATOR, width: CORE_R_ORCHESTRATOR * 2, height: CORE_R_ORCHESTRATOR * 2 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={!prefersReducedMotion ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Brain size={30} color="#F59E0B" strokeWidth={2} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute text-center"
        style={{ left: CENTER_ORCHESTRATOR.x - 140, top: CENTER_ORCHESTRATOR.y + CORE_R_ORCHESTRATOR + 12, width: 280 }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: 0.4 }}
      >
        <div className="text-sm font-bold tracking-wide text-gray-900">MASTER ORCHESTRATOR</div>
        <div className="text-xs font-mono text-amber-500 mt-0.5">Workflow Synthesis</div>
      </motion.div>

      <div className="absolute left-8 bottom-6 flex flex-col gap-1 font-mono text-[11px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={!prefersReducedMotion ? { opacity: [1, 0.35, 1] } : {}}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          SYSTEM_STATUS: <span className="text-emerald-500">ONLINE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rotate-45 bg-gray-300" />
          ACTIVE_NODES: 6
        </div>
      </div>
    </div>
  );
};


/* ══════════════════════════════════════════════════════════════════════════
   INTERACTIVE CARD 3: SystemHealthCard
   Ripple rings, live updating latency and tasks counter.
   ══════════════════════════════════════════════════════════════════════════ */
const LATENCY_VALUES = [42, 44, 45, 48];

const SystemHealthCard = () => {
  const prefersReducedMotion = useReducedMotion();

  const [latency, setLatency] = useState(45);
  const [latencyKey, setLatencyKey] = useState(0);

  const [tasksDisplay, setTasksDisplay] = useState(2700);
  const tasksTarget = useRef(2700);
  const tasksAnimFrame = useRef(null);

  useEffect(() => {
    const tick = () => {
      setLatency((prev) => {
        const options = LATENCY_VALUES.filter((v) => v !== prev);
        return options[Math.floor(Math.random() * options.length)];
      });
      setLatencyKey((k) => k + 1);
    };
    const interval = setInterval(tick, 1800 + Math.random() * 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bump = () => {
      tasksTarget.current += Math.floor(Math.random() * 7) + 1;
    };
    const interval = setInterval(bump, 2200 + Math.random() * 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTasksDisplay((current) => {
        const target = tasksTarget.current;
        if (current === target) return current;
        const diff = target - current;
        const step = diff > 0 ? Math.max(1, Math.ceil(diff * 0.08)) : Math.min(-1, Math.floor(diff * 0.08));
        return current + step;
      });
      tasksAnimFrame.current = requestAnimationFrame(animate);
    };
    tasksAnimFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(tasksAnimFrame.current);
  }, []);

  return (
    <div
      className="relative rounded-[28px] border border-gray-100 bg-white shadow-xl overflow-hidden flex flex-col items-center mx-auto"
      style={{ width: 384, maxWidth: '100%', padding: '40px 32px 32px' }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
        {!prefersReducedMotion &&
          [0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{ border: '1px solid rgba(239,68,68,0.35)' }}
              initial={{ width: 64, height: 64, opacity: 0 }}
              animate={{ width: [64, 160], height: [64, 160], opacity: [0.5, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.87,
              }}
            />
          ))}

        <div
          className="absolute rounded-full"
          style={{ width: 96, height: 96, background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)' }}
        />

        <motion.div
          className="relative flex items-center justify-center rounded-full"
          style={{ width: 64, height: 64, background: '#FEF2F2' }}
          animate={!prefersReducedMotion ? { scale: [1, 1.06, 1] } : {}}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Activity size={26} color="#EF4444" strokeWidth={2.5} />
        </motion.div>
      </div>

      <div className="flex gap-3 mt-2">
        <div className="rounded-xl border border-gray-200 px-6 py-3 text-center min-w-[120px]">
          <div className="text-2xl font-semibold text-gray-900 tabular-nums">
            {tasksDisplay.toLocaleString()}
          </div>
          <div className="text-[11px] tracking-wide text-gray-400 mt-1">TASKS</div>
        </div>

        <div className="rounded-xl border border-gray-200 px-6 py-3 text-center min-w-[120px] overflow-hidden">
          <div className="relative h-8 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={latencyKey}
                className="absolute text-2xl font-semibold text-emerald-500 tabular-nums"
                initial={prefersReducedMotion ? false : { opacity: 0, y: -6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.92 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {latency}ms
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="text-[11px] tracking-wide text-gray-400 mt-1">LATENCY</div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5">
        <motion.span
          className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"
          animate={!prefersReducedMotion ? { opacity: [1, 0.35, 1] } : {}}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-xs font-medium text-emerald-600">SYSTEM HEALTHY</span>
      </div>
    </div>
  );
};


/* ══════════════════════════════════════════════════════════════════════════
   MAIN PAGE: OurProcessPage
   ══════════════════════════════════════════════════════════════════════════ */
export default function OurProcessPage() {
  useEffect(() => {
    document.title = 'The Digital Brain Framework | Our Process | Syntera Tech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: '#0B1120' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]"
          style={{ background: 'rgba(37,99,235,0.22)', zIndex: 1 }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            style={{ border: '1px solid rgba(37,99,235,0.35)', background: 'rgba(37,99,235,0.12)', color: '#60A5FA' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Our Process
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6 max-w-4xl mx-auto"
          >
            The Digital Brain Framework
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 max-w-3xl mx-auto"
            style={{ background: 'linear-gradient(135deg, #93C5FD 0%, #BFDBFE 60%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            From Static Logic to Autonomous Action.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="text-base sm:text-lg leading-[1.8] text-slate-300 max-w-2xl mx-auto mb-10"
          >
            We don’t just build software; we engineer the neural pathways of your enterprise. A security-first, agentic approach to solving complex business problems.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto backdrop-blur-md italic text-sm sm:text-base leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.88)' }}
          >
            “Whether it&apos;s a precision tool or an autonomous swarm, we deploy the AI infrastructure that fits your goals.”
          </motion.blockquote>
        </div>
      </section>


      {/* ── STEP 01: Discover & Map ── */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                  Step 01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  The Neural Blueprint
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Discover &amp; Map
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                We start by identifying your data gravity centers—proprietary docs, ERP logs, and market signals. We define the Business Imperative and map it to specific Domain Agents.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Data Mapping</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Ingesting raw streams (SQL, PDF, API) into a cohesive strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Imperative Definition</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Mapping business goals to functional Domain Agents.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="lg:col-span-6 flex justify-center"
            >
              <DataFlowDiagram />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── STEP 02: Architecture (Center Aligned Content) ── */}
      <section className="py-24 sm:py-32 border-b border-slate-100" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          {/* Header Content — Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                Step 02
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                The Neural Nexus
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Architecture
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              A specialized multi-agent system where a Master Planner orchestrates autonomous experts. Data flows dynamically between nodes, reducing hallucination and increasing precision.
            </p>
          </motion.div>

          {/* Center Card below text — OrchestratorDiagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="flex justify-center"
          >
            <OrchestratorDiagram />
          </motion.div>
        </div>
      </section>


      {/* ── STEP 03: Engineering & Training ── */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-100 max-w-full">
                <img
                  src="/process/Step-03.webp"
                  alt="Engineering & Training"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                  Step 03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  The Synaptic Connection
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Engineering &amp; Training
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                We don&apos;t guess; we test. We implement Grounded RAG to ensure AI answers are citation-backed. Our TruSynth methodology integrates automated testing pipelines.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Golden Sets &amp; Eval</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Scoring agents for accuracy and safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">CodeGuard Audit</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Strict quality checks before deployment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── STEP 04: Deploy & Swarm ── */}
      <section className="py-24 sm:py-32 border-b border-slate-100" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                  Step 04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  The Autonomous Pulse
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Deploy &amp; Swarm
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                We deploy agents with &ldquo;Supervised&rdquo; or &ldquo;Autonomous&rdquo; modes. For complex tasks, we deploy agent swarms—collaborating dynamically to solve problems.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Swarm Coordination</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Prompt Designer, Executor, and Critic agents working in unison.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Self-Healing Ops</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Auto-remediating infrastructure issues for Zero-Alert stability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card — SystemHealthCard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="lg:col-span-6 flex justify-center"
            >
              <SystemHealthCard />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── FINAL CTA ── */}
      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #0F1F45 50%, #1E3A6E 100%)' }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: EASE }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(37,99,235,0.15)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.35)' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
              Get Started
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6 text-white">
              Ready to build your Digital Brain?
            </h2>
            <p className="text-base sm:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto text-slate-300">
              Let&apos;s map your business imperatives to autonomous AI agents and intelligent infrastructure.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all duration-300"
                style={{ background: '#2563EB', boxShadow: '0 8px 32px rgba(37,99,235,0.45)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563EB'; }}
              >
                Talk to our AI Engineers <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
