import React from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Target,
  Compass,
  CheckCircle,
  Users,
  Shield,
  ArrowRight,
  GraduationCap,
  Calendar,
  Briefcase,
  Building2,
  Award,
  Sparkles,
  Landmark,
} from 'lucide-react';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhyUsSection } from '../components/WhyUsSection';
import { companyData } from '../data/company';

interface AboutPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <div
      id="about-page"
      className="min-h-screen bg-white text-slate-900"
    >

      {/* ========================================================= */}
      {/* BREADCRUMB */}
      {/* ========================================================= */}
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#12335f] text-white">

        {/* Background Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.07]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:3rem_3rem]
          "
        />

        {/* Decorative Glow */}
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff9933]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-3xl" />

        {/* Tricolor Line */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-[#ff9933]" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#138808]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Content */}
            <div className="lg:col-span-8">

              <div
                className="
                  inline-flex items-center gap-2
                  px-3.5 py-1.5
                  rounded-full
                  bg-white/10
                  border border-white/15
                  backdrop-blur-sm
                  text-[#ffb45c]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  mb-6
                "
              >
                <Building2 className="w-3.5 h-3.5" />
                Institutional Profile
              </div>

              <h1
                className="
                  text-4xl sm:text-5xl lg:text-6xl
                  font-heading
                  font-extrabold
                  tracking-tight
                  leading-[1.05]
                  text-white
                "
              >
                About
                <span className="block text-[#ff9933] mt-2">
                  DMPL Skills
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base sm:text-lg
                  text-blue-100/80
                  leading-relaxed
                "
              >
                Dedicated to delivering structured vocational skilling,
                technical competencies, and institutional training projects
                that transform individual potential into sustainable
                livelihoods.
              </p>

              {/* Hero Actions */}
              <div className="flex flex-wrap gap-3 mt-8">

                <Link
                  to="/projects"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-[#ff9933]
                    text-[#12335f]
                    text-sm
                    font-bold
                    shadow-[0_10px_30px_rgba(255,153,51,0.20)]
                    hover:bg-[#ffad52]
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    text-white
                    text-sm
                    font-bold
                    hover:bg-white/15
                    transition-all duration-300
                  "
                >
                  Connect With Us
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

            {/* Hero Institutional Panel */}
            <div className="lg:col-span-4">

              <div
                className="
                  relative
                  rounded-3xl
                  border border-white/15
                  bg-white/[0.07]
                  backdrop-blur-md
                  p-6
                  shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                "
              >

                <div className="flex items-center gap-4 mb-6">

                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      bg-[#ff9933]/15
                      border border-[#ff9933]/20
                      flex items-center justify-center
                    "
                  >
                    <GraduationCap className="w-6 h-6 text-[#ff9933]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100/50 font-bold">
                      Our Focus
                    </p>

                    <p className="text-base font-bold text-white mt-1">
                      Skill Development
                    </p>
                  </div>

                </div>

                <div className="space-y-3">

                  {[
                    'Vocational Training',
                    'Technical Competencies',
                    'Institutional Projects',
                    'Employment-Focused Learning',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#ff9933] shrink-0" />

                      <span className="text-sm text-blue-100/75">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="mt-6 pt-5 border-t border-white/10">

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-1 bg-[#ff9933] rounded-full" />
                    <span className="w-6 h-1 bg-white rounded-full" />
                    <span className="w-6 h-1 bg-[#138808] rounded-full" />
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHO WE ARE */}
      {/* ========================================================= */}
      <section className="relative py-20 lg:py-24 bg-white overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff9933]/[0.025] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div className="lg:col-span-6">

              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[#ff9933] rounded-full" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                  Who We Are
                </span>
              </div>

              <h2
                className="
                  text-3xl sm:text-4xl
                  font-heading
                  font-extrabold
                  text-[#12335f]
                  tracking-tight
                  leading-tight
                "
              >
                A Committed Skill
                <span className="block">
                  Development Organization
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                {companyData.aboutSnippet}
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating across diverse Indian economic clusters, DMPL
                Skills coordinates with public qualification benchmarks and
                local employment corridors. Our goal is to ensure every
                trainee acquires verifiable, demonstrable capabilities that
                meet actual employer expectations.
              </p>

              {/* Governance Notice */}
              <div
                className="
                  mt-7
                  rounded-2xl
                  border border-[#12335f]/10
                  bg-[#12335f]/[0.025]
                  p-5
                "
              >

                <div className="flex items-start gap-3">

                  <Shield className="w-5 h-5 text-[#ff9933] shrink-0 mt-0.5" />

                  <div>

                    <strong className="block text-sm font-bold text-[#12335f] mb-1">
                      Institutional Governance
                    </strong>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      DMPL Skills operates as a private vocational skilling
                      entity. Official corporate registration numbers and
                      regional accreditation details are maintained in
                      structured records and updated upon verification.
                    </p>

                  </div>
                </div>
              </div>

            </div>

            {/* Image */}
            <div className="lg:col-span-6">

              <div className="relative">

                <div
                  className="
                    absolute
                    -inset-3
                    rounded-[2rem]
                    border border-[#ff9933]/10
                  "
                />

                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-[1.5rem]
                    border border-slate-200
                    bg-slate-100
                    shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                  "
                >

                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="DMPL Skills Team and Training Facility"
                    className="
                      w-full h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#12335f]/50 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">

                    <div
                      className="
                        inline-flex items-center gap-2
                        px-3 py-2
                        rounded-lg
                        bg-white/90
                        backdrop-blur-sm
                        text-[#12335f]
                        text-xs
                        font-bold
                      "
                    >
                      <GraduationCap className="w-4 h-4 text-[#ff9933]" />
                      Skill Development &amp; Training
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VISION & MISSION */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/70">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#ff9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Purpose &amp; Direction
              </span>

              <span className="w-8 h-[2px] bg-[#ff9933]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f]">
              Our Vision &amp; Mission
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* Vision */}
            <div
              className="
                group
                relative
                bg-white
                rounded-3xl
                border border-slate-200
                p-7 sm:p-9
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]
                hover:border-[#ff9933]/30
                transition-all duration-300
              "
            >

              <div className="flex items-start justify-between">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#12335f]/[0.06]
                    flex items-center justify-center
                    group-hover:bg-[#ff9933]/10
                    transition-colors
                  "
                >
                  <Eye className="w-7 h-7 text-[#12335f] group-hover:text-[#ff9933] transition-colors" />
                </div>

                <span className="text-5xl font-black text-[#12335f]/[0.05]">
                  01
                </span>

              </div>

              <h3 className="mt-7 text-2xl font-heading font-bold text-[#12335f]">
                Our Vision
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {companyData.vision}
              </p>

              <div className="mt-7 pt-5 border-t border-slate-100 flex items-center gap-2">

                <Compass className="w-4 h-4 text-[#ff9933]" />

                <span className="text-xs font-bold text-[#12335f]">
                  National Aspirations &amp; Human Capital Empowerment
                </span>

              </div>
            </div>

            {/* Mission */}
            <div
              className="
                group
                relative
                bg-[#12335f]
                rounded-3xl
                border border-[#12335f]
                p-7 sm:p-9
                text-white
                shadow-[0_15px_50px_rgba(18,51,95,0.15)]
                hover:shadow-[0_25px_65px_rgba(18,51,95,0.22)]
                transition-all duration-300
                overflow-hidden
              "
            >

              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#ff9933]/10 blur-2xl" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#ff9933]/15
                      border border-[#ff9933]/20
                      flex items-center justify-center
                    "
                  >
                    <Target className="w-7 h-7 text-[#ff9933]" />
                  </div>

                  <span className="text-5xl font-black text-white/[0.06]">
                    02
                  </span>

                </div>

                <h3 className="mt-7 text-2xl font-heading font-bold text-white">
                  Our Mission
                </h3>

                <p className="mt-4 text-sm sm:text-base text-blue-100/75 leading-relaxed">
                  {companyData.mission}
                </p>

                <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-2">

                  <Target className="w-4 h-4 text-[#ff9933]" />

                  <span className="text-xs font-bold text-white">
                    Actionable, Ground-Level Vocational Delivery
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRAINING APPROACH */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#ff9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Pedagogical Framework
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f] tracking-tight">
              Our Training Approach
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              We employ a structured pedagogical cycle that helps learners
              transition from baseline concept comprehension to real-world
              task execution.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {companyData.approach.map((item, index) => {

              const [title, description] = item.split(': ');

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    p-6
                    rounded-2xl
                    border border-slate-200
                    bg-slate-50/60
                    hover:bg-white
                    hover:border-[#ff9933]/30
                    hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]
                    transition-all duration-300
                  "
                >

                  <div className="flex items-center justify-between mb-5">

                    <span
                      className="
                        text-3xl
                        font-heading
                        font-black
                        text-[#12335f]/10
                        group-hover:text-[#ff9933]/20
                        transition-colors
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div
                      className="
                        w-9 h-9
                        rounded-lg
                        bg-white
                        border border-slate-200
                        flex items-center justify-center
                        group-hover:border-[#ff9933]/30
                        transition-colors
                      "
                    >
                      <CheckCircle className="w-4 h-4 text-[#ff9933]" />
                    </div>

                  </div>

                  <h4 className="font-heading font-bold text-base text-[#12335f]">
                    {title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXPERTISE */}
      {/* ========================================================= */}
      <section className="relative py-20 lg:py-24 bg-[#12335f] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff9933]/[0.06] blur-3xl" />

          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-white/[0.025] blur-3xl" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">

            <div className="inline-flex items-center gap-2 mb-4">

              <span className="w-8 h-[2px] bg-[#ff9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Core Competencies
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Areas of Institutional Expertise
            </h2>

            <p className="text-sm sm:text-base text-blue-100/70 mt-4 leading-relaxed">
              Our organizational capacity spans end-to-end vocational
              program design, mobilization, lab setup, trainer enablement,
              and batch assessment.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {companyData.expertise.map((exp, idx) => (

              <div
                key={idx}
                className="
                  group
                  bg-white/[0.055]
                  border border-white/10
                  p-6
                  rounded-2xl
                  hover:bg-white/[0.08]
                  hover:border-[#ff9933]/35
                  transition-all duration-300
                "
              >

                <div className="flex items-center justify-between mb-5">

                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-[#ff9933]/10
                      border border-[#ff9933]/15
                      flex items-center justify-center
                      group-hover:bg-[#ff9933]/15
                      transition-colors
                    "
                  >
                    <Briefcase className="w-5 h-5 text-[#ff9933]" />
                  </div>

                  <span className="text-xs font-bold text-white/20">
                    0{idx + 1}
                  </span>

                </div>

                <h4 className="font-bold text-white text-base">
                  {exp}
                </h4>

                <p className="text-xs text-blue-100/55 mt-3 leading-relaxed">
                  Execution structured around quality compliance,
                  continuous trainee tracking, and objective performance
                  rubrics.
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* JOURNEY */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">

            <div className="inline-flex items-center gap-2 mb-4">

              <span className="w-8 h-[2px] bg-[#ff9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Institutional Evolution
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f] tracking-tight">
              Our Journey &amp; Growth Milestones
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4">
              Structured developmental phases supporting the growth of a
              robust vocational skilling network.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {companyData.timeline.map((item, idx) => (

              <div
                key={idx}
                className="
                  group
                  relative
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  p-6
                  shadow-[0_8px_30px_rgba(15,23,42,0.03)]
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]
                  hover:border-[#ff9933]/30
                  transition-all duration-300
                "
              >

                <div className="flex items-center justify-between">

                  <span
                    className="
                      inline-flex items-center gap-1.5
                      px-2.5 py-1
                      rounded-lg
                      bg-[#12335f]
                      text-white
                      text-[10px]
                      font-bold
                    "
                  >
                    <Calendar className="w-3 h-3 text-[#ff9933]" />
                    {item.year}
                  </span>

                  <span className="text-3xl font-black text-[#12335f]/[0.06]">
                    0{idx + 1}
                  </span>

                </div>

                <h4 className="mt-6 font-heading font-bold text-base text-[#12335f]">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">

                  <span className="w-5 h-[2px] bg-[#ff9933]" />

                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                    Milestone Phase 0{idx + 1}
                  </span>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LEADERSHIP */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">

            <div className="inline-flex items-center gap-2 mb-4">

              <span className="w-8 h-[2px] bg-[#ff9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Governance &amp; Management
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f] tracking-tight">
              Leadership &amp; Advisory Panel
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4">
              Governed by vocational experts, project managers, and
              community skills advocates.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {[
              {
                role: 'Managing Director & Founder',
                designation: 'Executive Leadership',
                description:
                  'Oversees organizational strategy, institutional engagements, and skill delivery governance.',
              },
              {
                role: 'Director of Training & Academics',
                designation: 'Pedagogical Leadership',
                description:
                  'Directs curriculum standardization, trainer development, and training quality processes.',
              },
              {
                role: 'Head of Institutional Partnerships',
                designation: 'Partnerships & Outreach',
                description:
                  'Leads institutional outreach, project coordination, and employment-oriented engagement.',
              },
            ].map((leader, i) => (

              <div
                key={i}
                className="
                  group
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  p-7
                  shadow-[0_8px_30px_rgba(15,23,42,0.03)]
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]
                  hover:border-[#ff9933]/30
                  transition-all duration-300
                "
              >

                <div className="flex items-center justify-between mb-6">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#12335f]/[0.05]
                      border border-[#12335f]/10
                      flex items-center justify-center
                      group-hover:bg-[#ff9933]/10
                      group-hover:border-[#ff9933]/20
                      transition-all
                    "
                  >
                    <Users className="w-7 h-7 text-[#12335f] group-hover:text-[#ff9933] transition-colors" />
                  </div>

                  <Award className="w-5 h-5 text-[#ff9933]/60" />

                </div>

                <h4 className="font-heading font-bold text-base text-[#12335f]">
                  {leader.role}
                </h4>

                <p className="text-xs text-[#ff9933] font-bold mt-2">
                  {leader.designation}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mt-4">
                  {leader.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">

                  <span
                    className="
                      inline-flex items-center gap-2
                      text-[10px]
                      font-semibold
                      text-amber-700
                      bg-amber-50
                      px-2.5 py-1
                      rounded-lg
                      border border-amber-200
                    "
                  >
                    <Shield className="w-3 h-3" />
                    Profile details subject to verification
                  </span>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-8 text-center">

            <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Individual biographies and advisory credentials will be
              populated from officially verified organizational records.
            </p>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY DMPL SKILLS */}
      {/* ========================================================= */}
      <WhyUsSection />

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#12335f] py-20 lg:py-24 text-white">

        {/* Decorative Elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#ff9933]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 mb-5">

            <span className="w-8 h-[2px] bg-[#ff9933]" />

            <Sparkles className="w-4 h-4 text-[#ff9933]" />

            <span className="w-8 h-[2px] bg-[#ff9933]" />

          </div>

          <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Interested in Collaborating
            <span className="block text-[#ff9933] mt-1">
              with DMPL Skills?
            </span>
          </h3>

          <p className="mt-5 text-blue-100/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our institutional coordinators to discuss batch
            deployments, vocational coursework, or training partnerships.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3.5
                rounded-xl
                font-bold
                text-sm
                text-[#12335f]
                bg-[#ff9933]
                hover:bg-[#ffad52]
                shadow-[0_12px_30px_rgba(255,153,51,0.20)]
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Submit an Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3.5
                rounded-xl
                font-bold
                text-sm
                text-white
                bg-white/10
                border border-white/20
                hover:bg-white/15
                transition-all duration-300
              "
            >
              Visit Contact Page
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Tricolor */}
          <div className="flex justify-center items-center gap-1.5 mt-10">

            <span className="w-8 h-1 bg-[#ff9933] rounded-full" />
            <span className="w-8 h-1 bg-white rounded-full" />
            <span className="w-8 h-1 bg-[#138808] rounded-full" />

          </div>

        </div>
      </section>

    </div>
  );
};