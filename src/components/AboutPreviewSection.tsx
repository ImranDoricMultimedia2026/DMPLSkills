import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  MapPin,
  Briefcase,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Quote,
  BookOpen,
} from 'lucide-react';

const AboutPreviewSection: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      value: '10+',
      label: 'Years of Excellence',
    },
    {
      icon: Users,
      value: '14,000+',
      label: 'Youth Trained',
    },
    {
      icon: MapPin,
      value: '8+',
      label: 'States Covered',
    },
    {
      icon: Briefcase,
      value: '70%+',
      label: 'Placement Focus',
    },
  ];

  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Tricolor top line */}
        <div className="absolute left-0 top-0 flex h-1 w-full">
          <span className="flex-1 bg-[#ff9933]" />
          <span className="flex-1 bg-slate-200" />
          <span className="flex-1 bg-[#138808]" />
        </div>

        {/* Soft glows */}
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#ff9933]/[0.045] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#12335f]/[0.035] blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#12335f 1px, transparent 1px), linear-gradient(90deg, #12335f 1px, transparent 1px)',
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#ff9933]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff9933]">
                About DMPL Skills
              </span>

              <span className="h-[2px] w-9 rounded-full bg-[#138808]/70" />
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.8rem]">
              Empowering Youth Through
              <span className="relative mt-1 block text-[#ff9933]">
                Skill Development
                <span className="absolute -bottom-2 left-0 h-[3px] w-16 rounded-full bg-[#ff9933]/20" />
              </span>
            </h2>

            {/* Description */}
            <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                DMPL Skills is a trusted training partner working with
                National and State Skill Development Missions, Ministries and
                Sector Skill Councils to deliver industry-relevant,
                job-oriented training programmes.
              </p>

              <p>
                From PMKVY and Minority Affairs schemes to State Missions and
                Entrepreneurship programmes, we focus on quality training,
                assessment readiness and sustainable livelihood outcomes.
              </p>
            </div>

            {/* Trust points */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {[
                'Industry-aligned training',
                'Assessment readiness',
                'Employment-focused approach',
                'Government & mission aligned',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#138808]" />
                  {item}
                </div>
              ))}
            </div>

            {/* Vision / Mission */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Vision */}
              <div className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9933]/30 hover:bg-white hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff9933]/10">
                    <Eye className="h-5 w-5 text-[#ff9933]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    01
                  </span>
                </div>

                <h3 className="mb-2 text-sm font-bold text-slate-900">
                  Our Vision
                </h3>

                <p className="text-[13px] leading-6 text-slate-500">
                  To become a leading catalyst in building a skilled and
                  employable workforce for India.
                </p>
              </div>

              {/* Mission */}
              <div className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#12335f]/20 hover:bg-white hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12335f]/10">
                    <Target className="h-5 w-5 text-[#12335f]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    02
                  </span>
                </div>

                <h3 className="mb-2 text-sm font-bold text-slate-900">
                  Our Mission
                </h3>

                <p className="text-[13px] leading-6 text-slate-500">
                  Deliver high-quality, industry-aligned training that creates
                  real employment opportunities.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#12335f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(18,51,95,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0e294d] hover:shadow-[0_15px_35px_rgba(18,51,95,0.25)]"
              >
                Know More About Us

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-[#ff9933]">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT PREMIUM IMAGE AREA
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">

            {/* Decorative orange ring */}
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#ff9933]/20 sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />

            {/* Main image card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.16)]">

              {/* Image */}
              <div className="relative aspect-[4/4.4] overflow-hidden sm:aspect-[4/3.7]">
<img
  src="/Images/About/dmpl-skills-training-programs-students.png"
  alt="DMPL Skills skill development and training"
  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
/>

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/90 via-[#12335f]/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#12335f]/15 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                  <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-[#07182d]/60 px-3.5 py-2 backdrop-blur-xl">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff9933]">
                      <ShieldCheck className="h-3.5 w-3.5 text-white" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                        Trusted Partner
                      </p>
                      <p className="text-[9px] text-white/60">
                        Government & Industry Aligned
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom image content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Building India's Skilled Workforce
                    </span>
                  </div>

                  <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Skills that create
                    <span className="text-[#ffb15c]"> opportunities.</span>
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[11px] text-white/65">
                    <MapPin className="h-3.5 w-3.5 text-[#ff9933]" />
                    Working across India
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING STATS CARD
              ================================================= */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <div className="rounded-2xl border border-white/20 bg-white/95 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-4">

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-0">

                    {highlights.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className={`
                            group flex items-center gap-2.5 px-2 py-2.5
                            sm:justify-center sm:px-3
                            ${
                              index > 1
                                ? 'border-t border-slate-100 sm:border-l sm:border-t-0'
                                : ''
                            }
                            ${
                              index === 1
                                ? 'border-l border-slate-100'
                                : ''
                            }
                          `}
                        >
                          <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff9933]/10 sm:flex">
                            <Icon className="h-4 w-4 text-[#ff9933]" />
                          </div>

                          <div>
                            <p className="text-base font-extrabold leading-none tracking-tight text-[#12335f] sm:text-lg">
                              {item.value}
                            </p>

                            <p className="mt-1 text-[9px] font-semibold leading-tight text-slate-500 sm:text-[10px]">
                              {item.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING QUALITY CARD
            ================================================= */}
            <div className="absolute -bottom-6 -left-3 hidden sm:block lg:-left-8">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.13)]">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff9933]/10">
                  <Award className="h-5 w-5 text-[#ff9933]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Quality Focused
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-[#138808]" />
                    <p className="text-[10px] text-slate-500">
                      Training • Assessment • Outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative green dot */}
            <div className="absolute -bottom-3 -right-3 hidden h-16 w-16 rounded-full bg-[#138808]/10 blur-xl sm:block" />
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}
        <div className="mt-16 border-t border-slate-100 pt-8 lg:mt-20">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12335f]/5">
                <Quote className="h-4 w-4 text-[#12335f]" />
              </div>

              <p className="text-xs font-medium text-slate-500 sm:text-sm">
                Committed to creating meaningful pathways from
                <span className="font-bold text-slate-700">
                  {' '}
                  skills to livelihoods.
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
             <BookOpen className="h-3.5 w-3.5 text-[#ff9933]" />
              Empowering India Through Skills
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;