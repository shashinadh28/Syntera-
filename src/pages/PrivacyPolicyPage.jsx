import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Syntera Consulting';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-8">
            Last Updated: June 2025
          </p>

          <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-slate-600 space-y-6">
            <p className="font-semibold leading-relaxed text-slate-700">
              Syntera Consulting ("we," "our," or "us") is dedicated to protecting the privacy of our website visitors, clients, partners, and candidate network. This Privacy Policy details how we handle information collected through our web platforms and recruitment databases.
            </p>

            <h2 className="text-lg font-black text-slate-800 pt-4 border-t border-slate-100">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              We collect information that you explicitly choose to share when submitting contact queries, requesting technical talent, scheduling strategy assessments, or applying to career positions. This includes personal contact details (first/last name, work email address, phone numbers), business parameters (company name, technical stacks, job titles, budget ranges), and candidate documents (resumes, work history transcripts).
            </p>

            <h2 className="text-lg font-black text-slate-800 pt-4 border-t border-slate-100">
              2. How We Use Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To align, match, and deliver specialized AI engineering and IAM architecture services.</li>
              <li>To coordinate candidate placement shortlists and schedule technical interviews.</li>
              <li>To compile scores and personalized recommendations for AI Readiness and IAM Maturity audits.</li>
              <li>To reply to inquiries within 24 hours of form submission.</li>
            </ul>

            <h2 className="text-lg font-black text-slate-800 pt-4 border-t border-slate-100">
              3. Data Security & No-Sale-Of-Data Statement
            </h2>
            <p className="leading-relaxed">
              We employ comprehensive technical access controls, encrypted databases, and Zero Trust identity frameworks to safeguard all submitted information. <strong>We do not sell, rent, or lease your personal or business data to third parties.</strong> All data is strictly utilized for client delivery, talent placements, and recruitment operations.
            </p>

            <h2 className="text-lg font-black text-slate-800 pt-4 border-t border-slate-100">
              4. Contact Us
            </h2>
            <p className="leading-relaxed">
              For any questions, compliance queries, or access requests regarding this policy, please reach out to our identity team at:
            </p>
            <p className="font-extrabold text-blue-600">
              📧 info@synterasolutions.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
