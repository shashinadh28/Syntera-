import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import ScrollText from './ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];

const STORIES = [
  {
    name: 'Ruchika Pattjoshi',
    role: 'Data Analyst',
    company: 'State Of MA',
    image: '/success_stories/Ruchika.jpg',
    quote:
      'I am proud to be a part of the team. I am grateful for the opportunity to work for such a supportive and dynamic organization, and I am proud to be a part of a team that values hard work, collaboration, and commitment to excellence.',
  },
  {
    name: 'Rajendra Prasad Thummati',
    role: 'Power BI Developer',
    company: 'Volvo',
    image: '/success_stories/rajendra.jpg',
    quote:
      "Turning data into insights, one visualization at a time! Excited to share my success story after being placed as a Power BI Developer at Volvo. Here's to achieving new heights and illuminating the path to success!",
  },
  {
    name: 'Priyanka Ramireddy',
    role: 'Business Intelligence (BI) Analyst',
    company: 'Brillio',
    image: '/success_stories/Priyanka.jpg',
    quote:
      "Priyanka's dedication, analytical prowess, and relentless pursuit of excellence have made a significant impact. Her expertise in BI has helped uncover valuable insights and make data-driven decisions, driving success to new heights.",
  },
  {
    name: 'Sriharsha Barisetty',
    role: 'Assistant BSA Officer, QA Team Lead',
    company: 'Woori Bank',
    image: '/success_stories/Sriharsha.jpg',
    quote:
      'Your dedication and hard work have paid off, and this new chapter is just the beginning of your incredible journey. Wishing you endless success and growth as you continue to excel in this role!',
  },
  {
    name: 'Sreekanth Upputuri',
    role: 'Power BI Developer / Admin',
    company: 'Adobe Systems',
    image: '/success_stories/Sreekanth.jpg',
    quote:
      "Powering up the future! Congratulations on securing the role of Power BI Developer/Admin at Adobe Systems. Your skills and expertise have landed you in the heart of innovation. Here's to a successful and fulfilling journey ahead!",
  },
  {
    name: 'RamaKrishna Chereddy',
    role: 'Infinidat Storage',
    company: 'HCL',
    image: '/success_stories/RamaKrishna.jpg',
    quote:
      "From India to the world! Congratulations on landing the amazing opportunity as Infinidat Storage at HCL. Your journey is an inspiration, and we're grateful to Syntera Tech for making this leap possible.",
  },
  {
    name: '[Confirm with Syntera Tech Team]',
    role: 'Senior AI/ML Engineer',
    company: 'Financial Services Client',
    image: '/success_stories/Sreekanth.jpg',
    quote:
      'Syntera Tech placed me in 9 days. The role matched exactly what they described — the team, the stack, the level of ownership. I have been working on LLM-powered risk models and the impact is real.',
  },
  {
    name: '[Confirm with Syntera Tech Team]',
    role: 'VP of IT Security',
    company: 'Regional Health System',
    image: '/success_stories/RamaKrishna.jpg',
    quote:
      'Syntera Tech staffed our entire IAM migration team — SailPoint architects, Okta engineers, and a delivery lead — and had the full team in place within two weeks. Our HIPAA compliance timeline would not have been possible without them.',
  },
];

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px]"
        style={{ background: 'rgba(47,128,237,0.05)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Success Stories
          </motion.span>

          <ScrollText
            text="Inspiring Success Stories From Our Clients"
            as="h2"
            delay={0.05}
            stagger={0.055}
            className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#475569' }}
          >
            From AI engineering roles at Fortune 500s to enterprise IAM migrations at health systems — these are the outcomes Syntera Tech delivers.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {STORIES.map((s, i) => (
            <StoryCard key={s.name} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease, delay: index * 0.08 }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
      style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
    >
      {/* Top brand blue accent */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(90deg, transparent, #2F80ED, transparent)' }}
      />

      {/* Profile area */}
      <div
        className="flex items-center gap-4 px-6 pt-6 pb-5"
        style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}
      >
        <div
          className="shrink-0 h-16 w-16 rounded-2xl overflow-hidden"
          style={{ border: '2px solid rgba(47,128,237,0.2)' }}
        >
          <img
            src={story.image}
            alt={story.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'rgba(47,128,237,0.1)';
            }}
          />
        </div>
        <div>
          <h3 className="font-display font-bold text-ink-900 text-base leading-tight">{story.name}</h3>
          <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">{story.role}</p>
          <span
            className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full"
            style={{ background: 'rgba(47,128,237,0.1)', color: '#1E5DB8' }}
          >
            {story.company}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 py-5 flex-1 flex flex-col">
        {/* Quote mark */}
        <svg
          className="mb-3 shrink-0"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L6 0l1.8 1.8C6.6 3 5.7 4.5 5.1 6H9V18H0zm15 0V10.8c0-3.6 1.2-6.6 3.6-9L21 0l1.8 1.8C21.6 3 20.7 4.5 20.1 6H24V18H15z"
            fill="#2F80ED"
            fillOpacity="0.25"
          />
        </svg>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569' }}>
          {story.quote}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mt-5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2F80ED" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span className="text-[11px] font-semibold ml-1.5" style={{ color: '#2F80ED' }}>5.0</span>
        </div>
      </div>

      {/* Bottom hover line */}
      <span
        className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: '#2F80ED' }}
      />
    </motion.div>
  );
}
