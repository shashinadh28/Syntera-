import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MandatoryNoticesPage() {
  useEffect(() => { document.title = 'Mandatory Notices | Syntera Consulting'; }, []);
  return (
    <main className="min-h-screen bg-[#F7F8FB] pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b3f] mb-6 leading-tight">
          Mandatory Notices
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 space-y-8 text-[#475569] text-base leading-relaxed">
          <p>
            In addition to upholding Allegis Group's{' '}
            <a href="https://www.allegisgroup.com/en/about/code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Global Code of Conduct
            </a>
            , our network of operating companies comply with the laws and regulations in the regions in which we conduct business. Below you will find mandatory consumer report posting and other important notices:
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#0b1b3f] mb-4">Mandatory Consumer Report Posting</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <a
                  href="https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/files/allegisgroup/policy-pdfs/mandatory-notices/btb-poster-final_3-9-16-pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Fair Chance Hiring Law (Philadelphia, PA)
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1b3f] mb-4">Other Important Notices</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <a
                  href="https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/files/allegisgroup/policy-pdfs/mandatory-notices/casl-notice-eff-07-01-2020-en-pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  CASL (Canada's Anti-Spam Legislation) Notice (Canada)
                </a>
              </li>
              <li>
                <a
                  href="https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/files/allegisgroup/policy-pdfs/mandatory-notices/fraud-alert-docx.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Fraud Alert
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
