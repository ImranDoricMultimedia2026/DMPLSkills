import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Scale,
} from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div
      id="terms-page"
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b2445] text-white">
        {/* Indian tricolour accent */}
        <div className="absolute top-0 left-0 right-0 h-1">
          <div className="h-full flex">
            <div className="w-1/3 bg-orange-500" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-green-600" />
          </div>
        </div>

        {/* Grid background */}
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

        {/* Decorative glow */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#ff9933]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5">
              <Scale className="w-4 h-4 text-[#ff9933]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                Institutional Agreement
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Terms &
              <span className="text-[#ff9933]"> Conditions</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Please review the terms and conditions governing access to the
              Doric Skills website and participation in its vocational
              training programmes.
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/10">
                <FileText className="w-4 h-4 text-[#ff9933]" />
                Terms & Conditions
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/10">
                Last Updated: January 1, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Acceptance card */}
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_15px_45px_rgba(15,35,65,0.07)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff9933]" />

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#12335f]/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#ff9933]" />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                    Acceptance of Terms
                  </h2>

                  <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-7">
                    By accessing the Doric Skills web portal or enrolling in
                    our vocational training courses, you acknowledge and
                    agree to comply with the institutional rules and terms
                    stated below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms sections */}
          <div className="mt-8 grid gap-5">

            {/* Section 1 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  01
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Academic & Lab Discipline
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#ff9933]" />
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-7">
                    Enrolled candidates must maintain minimum 75% attendance
                    during practical lab sessions and classroom instruction
                    to qualify for final course evaluations and competency
                    certificate issuance. Respectful behavior towards
                    trainers, fellow trainees, and facility hardware is
                    strictly enforced.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  02
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Evaluation & Certification Norms
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#ff9933]" />
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-7">
                    Course completion certificates are awarded strictly based
                    on demonstrated competence, submission of required
                    practical capstone portfolios, and passing objective
                    assessments. Doric Skills does not issue unearned
                    honorary credentials.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  03
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Placement & Employability Disclaimer
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6">
                <p className="text-sm sm:text-[15px] text-slate-600 leading-7">
                  Doric Skills provides market-aligned vocational
                  instruction, CV preparation, and employer linkage
                  opportunities. We do not guarantee unconditional job
                  placement, government employment, or specific salary
                  brackets, as hiring determinations rest solely with
                  employer entities.
                </p>
              </div>
            </article>

            {/* Section 4 */}
            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#12335f] text-white flex items-center justify-center text-sm font-bold">
                  04
                </div>

                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#12335f]">
                  Intellectual Property & Course Materials
                </h2>
              </div>

              <div className="px-6 sm:px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#ff9933]" />
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-7">
                    All syllabi, training guides, presentations, and software
                    tutorials authored by Doric Skills remain proprietary
                    intellectual property. Trainees may not reproduce,
                    distribute, or commercially exploit curriculum assets
                    without written authorization.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Important notice */}
          <div className="mt-8 rounded-2xl bg-[#12335f] text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-56 h-56 rounded-full bg-[#ff9933]/10 blur-3xl" />

            <div className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#ff9933]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg">
                    Important Notice
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-6 max-w-3xl">
                    These terms should be read together with the Privacy
                    Policy and other applicable institutional policies
                    published on the Doric Skills website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div>
              <h3 className="font-heading font-bold text-[#12335f]">
                Have a question about these terms?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Contact Doric Skills for further clarification.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff9933] text-[#0b2445] font-bold text-sm hover:bg-orange-400 transition-colors whitespace-nowrap"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500">
              By continuing to use the website or participating in training
              programmes, users acknowledge the applicable terms and
              conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};