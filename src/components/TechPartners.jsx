import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

/* ── Brand logo icon components (matching Distinctive Innovators style) ── */

function OktaIcon() {
  return (
    <div className="flex items-center gap-2">
      <img width="40" height="40" src="https://img.icons8.com/color/40/okta.png" alt="Okta" />
      <span className="font-display text-base font-extrabold text-slate-800 tracking-tight">Okta</span>
    </div>
  );
}

function SailPointIcon() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-8 w-8 text-blue-900" fill="none" stroke="currentColor" strokeWidth="10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
      </svg>
      <span className="font-display text-base font-black text-blue-950 tracking-tighter">SailPoint</span>
    </div>
  );
}

function CyberArkIcon() {
  return (
    <div className="flex items-center gap-2">
      <img width="40" height="40" src="https://img.icons8.com/color/40/cyber-security.png" alt="CyberArk" />
      <span className="font-display text-sm font-extrabold text-slate-800 tracking-tight">CyberArk</span>
    </div>
  );
}

function MicrosoftEntraIcon() {
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
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-normal">Entra ID</div>
      </div>
    </div>
  );
}

function PingIdentityIcon() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ background: '#E1000F' }}>
        <span className="text-white font-black text-xs tracking-tighter leading-none">Ping</span>
      </div>
      <span className="font-display text-sm font-extrabold text-slate-800 tracking-tight">Ping Identity</span>
    </div>
  );
}

function AWSIcon() {
  return (
    <img width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services" />
  );
}

function AzureIcon() {
  return (
    <img width="48" height="48" src="/agentic-ai/Ecosystem/azure-icon-svgrepo-com.svg" alt="Microsoft Azure" />
  );
}

function GoogleCloudIcon() {
  return (
    <img width="48" height="48" src="https://img.icons8.com/color/48/google-cloud.png" alt="google-cloud" />
  );
}

function DatabricksIcon() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3L15 23l35 20 35-20L50 3z" fill="#FF3621"/>
        <path d="M15 43v24l35 20V63L15 43z" fill="#FF3621" opacity="0.8"/>
        <path d="M85 43v24L50 87V63l35-20z" fill="#FF3621" opacity="0.6"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tight">databricks</span>
    </div>
  );
}

function SnowflakeIcon() {
  return (
    <img width="48" height="48" src="/agentic-ai/Ecosystem/snowflake-svgrepo-com.svg" alt="Snowflake" />
  );
}

function OpenAIIcon() {
  return (
    <img width="48" height="48" src="https://img.icons8.com/ios/48/chatgpt.png" alt="OpenAI" />
  );
}

/* ── Partner data with icon components ── */
const IAM_PARTNERS = [
  {
    name: 'Okta',
    icon: OktaIcon,
    desc: 'Workforce & Customer Identity',
    level: 'Certified Delivery Partner',
  },
  {
    name: 'SailPoint',
    icon: SailPointIcon,
    desc: 'Identity Governance (IGA)',
    level: 'Certified Solutions Architect',
  },
  {
    name: 'CyberArk',
    icon: CyberArkIcon,
    desc: 'Privileged Access Management',
    level: 'Authorized Implementation Partner',
  },
  {
    name: 'Microsoft Entra',
    icon: MicrosoftEntraIcon,
    desc: 'Cloud IAM & Entra ID',
    level: 'Enterprise Integration Partner',
  },
  {
    name: 'Ping Identity',
    icon: PingIdentityIcon,
    desc: 'Federated Identity & SSO',
    level: 'Certified Professional Services',
  },
];

const AI_DATA_PARTNERS = [
  {
    name: 'Amazon AWS',
    icon: AWSIcon,
    desc: 'Bedrock & SageMaker AI',
    level: 'AWS Partner Network',
  },
  {
    name: 'Microsoft Azure',
    icon: AzureIcon,
    desc: 'Azure OpenAI & AI Services',
    level: 'Gold Cloud Partner',
  },
  {
    name: 'Google Cloud',
    icon: GoogleCloudIcon,
    desc: 'Vertex AI & Kubernetes',
    level: 'GCP Service Partner',
  },
  {
    name: 'Databricks',
    icon: DatabricksIcon,
    desc: 'Unified Data & AI Platform',
    level: 'System Integration Specialist',
  },
  {
    name: 'Snowflake',
    icon: SnowflakeIcon,
    desc: 'Enterprise Data Lakehouse',
    level: 'Data & Analytics Partner',
  },
  {
    name: 'OpenAI',
    icon: OpenAIIcon,
    desc: 'Enterprise LLM Implementations',
    level: 'API Solutions Developer',
  },
];

export default function TechPartners() {
  return (
    <section
      id="tech-partners"
      className="relative py-12 sm:py-16 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      {/* Glow shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.25]"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.25]"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ border: '1px solid rgba(21,101,216,0.15)', background: 'rgba(21,101,216,0.06)', color: '#1565D8' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#1565D8' }} />
            Tech Partnerships
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Certified expertise across the platforms you depend on.
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-xl">
            We hold direct professional certifications and architecture credentials with major identity providers and AI cloud ecosystems.
          </p>
        </motion.div>

        {/* ROW 1: IAM Platforms */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 text-center lg:text-left">
            Identity &amp; Access Management (IAM) Platforms
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {IAM_PARTNERS.map((partner, i) => (
              <PartnerPlate key={partner.name} partner={partner} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* ROW 2: AI & Data Platforms */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 text-center lg:text-left">
            AI &amp; Data Platforms
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {AI_DATA_PARTNERS.map((partner, i) => (
              <PartnerPlate key={partner.name} partner={partner} delay={(i + 5) * 0.05} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function PartnerPlate({ partner, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white transition-all duration-300 hover:shadow-md cursor-default"
      style={{ border: '1px solid rgba(148,163,184,0.15)', minHeight: '120px' }}
    >
      {/* Brand Logo Icon */}
      <div className="flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
        <partner.icon />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-medium leading-tight text-center">
          {partner.desc}
        </div>
      </div>
      <div className="mt-3 text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-500 transition-colors border-t border-slate-50 pt-2 text-center">
        {partner.level}
      </div>
    </motion.div>
  );
}
