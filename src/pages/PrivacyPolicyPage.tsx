import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  Lock,
  FileText,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div
      id="privacy-policy-page"
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b2445] text-white">
        {/* Tricolour accent */}
        <div className="absolute top-0 left-0 right-0 h-1">
          <div className="h-full flex">
            <div className="w-1/3 bg-orange-500" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-green-600" />
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />
        </div>

        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#ff9933]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5">
              <ShieldCheck className="w-4 h-4 text-[#ff9933]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                Legal & Compliance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrab800 tracking-tight leading-tight">
              Privacy
              <span className="text-[#ff9933]"> Policy</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Information about how Doric Skills handles candidate,
              applicant, and stakeholder information submitted through its
              training and enquiry channels.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/10">
                <FileText className="w-4 h-4 text-[#ff9933]" />
                Privacy Notice
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/10">
                Effective Date: January 1, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro card */}
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_15px_45px_rgba(15,35,65,0.07)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff9933]" />

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#12335f]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#12335f]" />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                    Commitment to Data Privacy
                  </h2>

                  <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-7">
                    Doric Skills respects candidate and stakeholder
                    confidentiality. This privacy notice outlines how
                    candidate records, admission applications, and
                    communication enquiries are gathered, processed, and
                    safeguarded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy sections */}
          <div className="mt-8 grid gap-5">
            {/* Section 1 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  01
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Information We Collect
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6 text-sm sm:text-[15px] text-slate-600 leading-7">
                <p>
                  We collect personal information that candidates voluntarily
                  provide when submitting course enquiries, registering for
                  vocational entrance counseling, or visiting our training
                  centers. This may include:
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    'Candidate full name, contact telephone number, and email address.',
                    'Educational background, matriculation details, and chosen training disciplines.',
                    'Feedback, survey responses, and correspondence records with our training counselors.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff9933] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Section 2 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  02
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Purpose of Data Processing
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6 text-sm sm:text-[15px] text-slate-600 leading-7">
                <p>
                  Collected information is utilized strictly for lawful
                  vocational education purposes, including:
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    'Evaluating course eligibility and batch scheduling.',
                    'Issuing admission confirmations and timetable alerts.',
                    'Compliance with institutional batch audit protocols and national qualification recording requirements.',
                    'Responding directly to candidate support inquiries.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff9933] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Section 3 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  03
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Third-Party Disclosures & Security
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6 text-sm sm:text-[15px] text-slate-600 leading-7">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#ff9933]" />
                  </div>

                  <p>
                    Doric Skills does not sell, lease, or monetize candidate
                    data to commercial third parties. Data is only disclosed
                    when necessary to comply with legal processes or
                    authorized government skilling assessment bodies for
                    certification audits.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  04
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Candidate Rights & Inquiries
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6 text-sm sm:text-[15px] text-slate-600 leading-7">
                <p>
                  Candidates maintain the right to inspect, update, or
                  request the deletion of their personal records stored in
                  our preliminary inquiry databases. For privacy requests,
                  please contact our data desk at the official communication
                  address listed on our Contact page.
                </p>
              </div>
            </article>
          </div>

          {/* Privacy assistance card */}
          <div className="mt-8 rounded-2xl bg-[#12335f] text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-[#ff9933]/10 blur-3xl" />

            <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-[#ff9933]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg">
                    Privacy-related assistance
                  </h3>
                  <p className="mt-1 text-sm text-slate-300 leading-6">
                    For privacy requests or questions, please use the official
                    communication details provided on the Contact page.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff9933] text-[#0b2445] font-bold text-sm hover:bg-orange-400 transition-colors whitespace-nowrap"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500">
              Please review this notice alongside the Terms & Conditions
              applicable to your use of the Doric Skills website and services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};