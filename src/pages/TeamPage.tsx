import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Shield,
  Award,
  Target,
} from 'lucide-react';

import { Breadcrumbs } from '../components/Breadcrumbs';

/* =========================================================
   TEAM DATA
   ========================================================= */

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'director',
    name: 'Director',
    designation: 'Director',
    department: 'Leadership',
    initials: 'D',
  },
  {
    id: 'training-head',
    name: 'Training Head',
    designation: 'Head of Training',
    department: 'Training & Academics',
    initials: 'T',
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    designation: 'Project Manager',
    department: 'Operations',
    initials: 'P',
  },
  {
    id: 'placement-officer',
    name: 'Placement Officer',
    designation: 'Placement Officer',
    department: 'Placement & Employability',
    initials: 'P',
  },
  {
    id: 'accounts-head',
    name: 'Accounts Head',
    designation: 'Head of Finance & Accounts',
    department: 'Finance',
    initials: 'A',
  },
  {
    id: 'admin-coordinator',
    name: 'Admin Coordinator',
    designation: 'Administrative Coordinator',
    department: 'Administration',
    initials: 'A',
  },
];

const departments = [
  {
    icon: Shield,
    title: 'Leadership',
    description:
      'Strategic direction, institutional governance and stakeholder engagement.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Academics',
    description:
      'Curriculum design, trainer enablement and batch quality assurance.',
  },
  {
    icon: Target,
    title: 'Operations',
    description:
      'End-to-end project execution, scheduling and compliance monitoring.',
  },
  {
    icon: Briefcase,
    title: 'Placement & Employability',
    description:
      'Employer linkages, placement drives and post-training support.',
  },
  {
    icon: Award,
    title: 'Finance & Administration',
    description:
      'Financial management, accounts, procurement and administrative support.',
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export const TeamPage: React.FC = () => {
  return (
    <div id="team-page" className="min-h-screen bg-white text-slate-900">

      {/* ===================================================
          BREADCRUMB
      =================================================== */}
      <Breadcrumbs items={[{ label: 'Our Team' }]} />

      {/* ===================================================
          HERO
      =================================================== */}
      <section className="relative overflow-hidden bg-[#12335f] text-white">

        {/* Background Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.07]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:3rem_3rem]
          "
        />

        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#ff9933]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

        {/* Tricolor Line */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-[#ff9933]" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#138808]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Content */}
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
                <Users className="w-3.5 h-3.5" />
                The People Behind DMPL Skills
              </div>

              <h1
                className="
                  text-4xl sm:text-5xl lg:text-6xl
                  font-heading font-extrabold
                  tracking-tight leading-[1.05]
                  text-white
                "
              >
                Our
                <span className="block text-[#ff9933] mt-2">
                  Team
                </span>
              </h1>

              <p
                className="
                  mt-6 max-w-3xl
                  text-base sm:text-lg
                  text-blue-100/80
                  leading-relaxed
                "
              >
                A dedicated group of training professionals, project coordinators,
                placement officers and administrative staff committed to delivering
                quality skill development across India.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/about"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    bg-[#ff9933] text-[#12335f]
                    text-sm font-bold
                    shadow-[0_10px_30px_rgba(255,153,51,0.20)]
                    hover:bg-[#ffad52] hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  About DMPL Skills
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    bg-white/10 border border-white/20
                    text-white text-sm font-bold
                    hover:bg-white/15
                    transition-all duration-300
                  "
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Stats panel */}
            <div className="lg:col-span-4">
              <div
                className="
                  relative rounded-3xl
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
                      w-12 h-12 rounded-2xl
                      bg-[#ff9933]/15 border border-[#ff9933]/20
                      flex items-center justify-center
                    "
                  >
                    <Users className="w-6 h-6 text-[#ff9933]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100/50 font-bold">
                      Our Team
                    </p>
                    <p className="text-base font-bold text-white mt-1">
                      Skilled Professionals
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Training Delivery Experts',
                    'Project Coordinators',
                    'Placement Specialists',
                    'Administrative Support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff9933] shrink-0" />
                      <span className="text-sm text-blue-100/75">{item}</span>
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


      {/* ===================================================
          DEPARTMENTS
      =================================================== */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#ff9933]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Functional Areas
              </span>
              <span className="w-8 h-[2px] bg-[#ff9933]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f]">
              Our Departments
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              DMPL Skills operates across specialized functional units, each
              focused on a core pillar of successful skill development project
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, idx) => {
              const DeptIcon = dept.icon;
              return (
                <div
                  key={idx}
                  className="
                    group relative
                    bg-white rounded-2xl
                    border border-slate-200
                    p-6
                    hover:border-[#ff9933]/30
                    hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="
                        w-11 h-11 rounded-xl
                        bg-[#12335f]/[0.06]
                        flex items-center justify-center
                        group-hover:bg-[#ff9933]/10
                        transition-colors
                      "
                    >
                      <DeptIcon className="w-5 h-5 text-[#12335f] group-hover:text-[#ff9933] transition-colors" />
                    </div>
                    <span className="text-4xl font-black text-[#12335f]/[0.05] group-hover:text-[#ff9933]/15 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#12335f]">
                    {dept.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ===================================================
          TEAM MEMBERS
      =================================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#ff9933]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                Key Roles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#12335f] tracking-tight">
              Leadership &amp; Core Team
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our core team brings together experienced professionals in
              vocational training, project management, and institutional
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="
                  group
                  bg-slate-50 rounded-2xl
                  border border-slate-200
                  p-6
                  hover:border-[#ff9933]/30
                  hover:bg-white
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]
                  transition-all duration-300
                "
              >
                {/* Avatar */}
                <div
                  className="
                    w-16 h-16 rounded-2xl
                    bg-[#12335f]
                    group-hover:bg-[#ff9933]
                    flex items-center justify-center
                    text-white text-xl font-extrabold
                    transition-colors duration-300
                    mb-4
                  "
                >
                  {member.initials}
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#12335f] transition-colors">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#ff9933]">
                  {member.designation}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {member.department}
                  </span>
                  <div
                    className="
                      w-7 h-7 rounded-lg
                      bg-slate-100
                      group-hover:bg-[#ff9933]
                      flex items-center justify-center
                      transition-all duration-300
                    "
                  >
                    <Users className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================
          BOTTOM CTA
      =================================================== */}
      <section className="relative py-16 lg:py-20 bg-[#12335f] text-white overflow-hidden">

        <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-[#ff9933]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-0 w-[360px] h-[360px] rounded-full bg-white/[0.025] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-[2px] bg-[#ff9933]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
              Work With Us
            </span>
            <span className="w-8 h-[2px] bg-[#ff9933]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Partner with DMPL Skills
          </h2>

          <p className="mt-5 text-base text-blue-100/75 max-w-2xl mx-auto leading-relaxed">
            Whether you are a government body, sector skill council, or an
            institution looking for a reliable training partner, connect with
            our team today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                px-7 py-3.5 rounded-xl
                bg-[#ff9933] text-[#12335f]
                text-sm font-bold
                shadow-[0_10px_30px_rgba(255,153,51,0.25)]
                hover:bg-[#ffad52] hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="
                inline-flex items-center gap-2
                px-7 py-3.5 rounded-xl
                bg-white/10 border border-white/20
                text-white text-sm font-bold
                hover:bg-white/15
                transition-all duration-300
              "
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

