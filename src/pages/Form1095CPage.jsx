import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Form1095CPage() {
  useEffect(() => { document.title = '1095-C Request | Syntera Consulting'; }, []);
  return (
    <main className="min-h-screen bg-[#F7F8FB] pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b3f] mb-6 leading-tight">
          Important Health Coverage Tax Documents
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 space-y-6 text-[#475569] text-base leading-relaxed">
          <p>
            In the past, Allegis Group has mailed IRS Form 1095-C to all employees who were deemed eligible for health insurance based on the regulations of the Affordable Care Act (ACA). Beginning with calendar year 2025, Allegis Group is no longer required to mail these forms. However, if you would like a copy of your form, please see below for information on the form and instructions on how to request.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#0b1b3f] mb-3">What is Form 1095-C?</h2>
            <p>
              Form 1095-C is a tax form used to report certain information to the IRS and to taxpayers about individuals who are covered by minimum essential health insurance coverage. Employers providing minimum essential health insurance coverage during a calendar year must file the information, reporting the coverage to the IRS and making it available to the covered person within 30 days of the request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1b3f] mb-3">How can you request your Form 1095-C?</h2>
            <p className="font-semibold text-[#0b1b3f]">If you would like a hard copy of your form mailed to the current address on file:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Mail:</strong> Submit a request to: 7312 Parkway Drive, Hanover, Maryland 21076, Attn: Benefits Department</li>
              <li><strong>Phone:</strong> 866-886-9798</li>
              <li><strong>Email:</strong> <a href="mailto:AskBenefits@allegisgroup.com" className="text-blue-600 hover:underline">AskBenefits@allegisgroup.com</a></li>
            </ul>

            <p className="font-semibold text-[#0b1b3f] mt-5">If you would like your form electronically:</p>
            <ol className="mt-3 space-y-2 list-decimal list-inside">
              <li>Go to: <a href="https://www.eyacaforms.com/allegisgroup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.eyacaforms.com/allegisgroup</a></li>
              <li>Click on "Register as New User"</li>
              <li>Complete the form and click "Create New Account"</li>
              <li>You will immediately receive a confirmation email from EY ACA Form requiring you to verify your account. Click the link in the email and opt in to e-forms. The confirmation link will expire in 24 hours.</li>
              <li>If you elect electronic delivery, you will receive an email from EY ACA Form when your Form 1095-C is available to download from the 1095-C Portal.</li>
            </ol>

            <p className="mt-4 text-sm bg-blue-50 border border-blue-100 rounded-xl p-4">
              If you have difficulty requesting your form, please contact <strong>855-314-4222</strong>.
            </p>
            <p className="mt-4">
              Unless you chose to retrieve your form through the electronic option, your Form 1095-C will be mailed within 30 days of your request, to the address your employer has on file.
            </p>
            <p className="mt-3 font-medium text-[#0b1b3f]">
              Note: You can complete your taxes without the Form 1095-C, as the form is no longer required for tax filing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0b1b3f] mb-3">States with Individual Insurance Mandates (CA, NJ, RI & DC)</h2>
            <p>
              Employees living in states with laws that require reporting of health coverage will continue to receive a paper copy of the Form 1095-C for state filing tax purposes. Employees filing taxes in one of these states are encouraged to retain a copy of the form for their state tax records.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
