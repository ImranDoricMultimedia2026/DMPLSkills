import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  Target,
  BarChart3,
  ShieldCheck,
  Users,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
} from 'lucide-react';

import { projectsData } from '../data/projects';

interface ProjectDetailPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onOpenEnquiry,
}) => {
  const { departmentId, projectId } = useParams<{
    departmentId: string;
    projectId: string;
  }>();

  /* =========================================================
     FIND PROJECT FROM VERIFIED PROJECT DATA
  ========================================================= */

  const project = projectsData.find(
    (item) =>
      item.id === projectId &&
      item.departmentId === departmentId
  );

  /* =========================================================
     PROJECT NOT FOUND
  ========================================================= */

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f6f8fb] flex items-center justify-center px-6">
        <div className="text-center max-w-lg rounded-[28px] border border-slate-200 bg-white px-8 py-14 shadow-[0_20px_60px_rgba(18,51,95,0.1)]">

          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#12335f] to-[#163d70] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(18,51,95,0.25)]">
            <BriefcaseBusiness size={28} />
          </div>

          <h1 className="text-3xl font-bold text-[#12335f]">
            Project Not Found
          </h1>

          <p className="mt-3 text-slate-600 leading-7">
            The requested project is not available in the current
            project portfolio.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-[#12335f] text-white font-semibold shadow-[0_10px_25px_rgba(18,51,95,0.25)] hover:bg-[#0d294d] hover:shadow-[0_15px_35px_rgba(18,51,95,0.35)] transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

        </div>
      </div>
    );
  }

  /* =========================================================
     DERIVED VALUES
  ========================================================= */

  const trained =
    typeof project.traineesTrained === 'number'
      ? project.traineesTrained.toLocaleString('en-IN')
      : 'Not available';

  const placed =
    typeof project.traineesPlaced === 'number'
      ? project.traineesPlaced.toLocaleString('en-IN')
      : project.placementStatus || 'Not available';

  const placementIsNumeric =
    typeof project.traineesPlaced === 'number';

  const jobRoles =
    project.jobRoles && project.jobRoles.length > 0
      ? project.jobRoles
      : [project.role];

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#12335f] text-white">

        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#ff9933]/12 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-white/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#163d70]/30 blur-[120px]" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              maskImage:
                'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link to="/projects" className="hover:text-white transition-colors duration-200">
              Projects
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#ff9933] font-medium truncate max-w-[220px]">
              {project.organization}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-white font-medium truncate max-w-[220px]">
              {project.name}
            </span>
          </nav>

          <div className="max-w-5xl">

            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff9933] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff9933]" />
              </span>
              <Sparkles size={13} className="text-[#ff9933]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                Project Record
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              {project.name}
            </h1>

            {/* Department */}
            <div className="mt-5 flex items-start gap-2.5 text-lg text-white/75">
              <Building2
                size={20}
                className="mt-0.5 shrink-0 text-[#ff9933]"
              />
              <span>{project.organization}</span>
            </div>

            {/* Meta badges */}
            <div className="mt-9 flex flex-wrap gap-3">

              <MetaBadge
                icon={<CalendarDays size={17} />}
                text={project.year}
              />

              <MetaBadge
                icon={<MapPin size={17} />}
                text={project.location}
              />

              <MetaBadge
                icon={<ShieldCheck size={17} />}
                text={project.status}
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-2 space-y-8">

            {/* Project Overview */}

            <ContentCard
              icon={<Target size={20} />}
              title="Project Overview"
              eyebrow="Objective"
            >
              <p className="text-slate-600 leading-8 text-[15px]">
                {project.objective}
              </p>
            </ContentCard>


            {/* Job Roles */}

            <section className="relative overflow-hidden bg-white rounded-[24px] border border-slate-200 p-7 lg:p-9 shadow-[0_8px_30px_rgba(18,51,95,0.06)]">

              <div className="flex items-start gap-4 mb-7">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9933]/15 to-[#ff9933]/5 border border-[#ff9933]/20 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness
                    className="text-[#ff9933]"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933] mb-1.5">
                    Training Areas
                  </p>
                  <h2 className="text-2xl font-bold text-[#12335f] leading-tight">
                    Job Roles / Trades
                  </h2>
                  <p className="text-sm text-slate-500 mt-1.5">
                    Roles recorded for this project
                  </p>
                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {jobRoles.map((role, index) => (
                  <div
                    key={`${role}-${index}`}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4 transition-all duration-300 hover:border-[#ff9933]/30 hover:bg-[#ff9933]/[0.04]"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#ff9933]/10 transition-colors duration-300 group-hover:bg-[#ff9933]">
                      <CheckCircle2
                        size={15}
                        className="text-[#ff9933] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-700 leading-6">
                      {role}
                    </span>
                  </div>
                ))}

              </div>

            </section>


            {/* Project Impact */}

            <section className="relative overflow-hidden bg-white rounded-[24px] border border-slate-200 p-7 lg:p-9 shadow-[0_8px_30px_rgba(18,51,95,0.06)]">

              <div className="flex items-start gap-4 mb-7">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12335f]/10 to-[#12335f]/[0.03] border border-[#12335f]/10 flex items-center justify-center shrink-0">
                  <Users
                    className="text-[#12335f]"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933] mb-1.5">
                    Measured Outcomes
                  </p>
                  <h2 className="text-2xl font-bold text-[#12335f] leading-tight">
                    Project Impact
                  </h2>
                  <p className="text-sm text-slate-500 mt-1.5">
                    Figures available in the project records
                  </p>
                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <ImpactBox
                  icon={<Users size={18} />}
                  label="Trainees Trained"
                  value={trained}
                />

                <ImpactBox
                  icon={<TrendingUp size={18} />}
                  label={
                    placementIsNumeric
                      ? 'Trainees Placed'
                      : 'Placement Status'
                  }
                  value={placed}
                />

              </div>

            </section>


            {/* Project Outcomes */}

            <ContentCard
              icon={<BarChart3 size={20} />}
              title="Project Outcomes"
              eyebrow="Impact Metrics"
            >
              <p className="text-slate-600 leading-8 text-[15px]">
                {project.impactMetrics}
              </p>
            </ContentCard>

          </div>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">

            {/* Project Information */}

            <div className="bg-white rounded-[24px] border border-slate-200 shadow-[0_8px_30px_rgba(18,51,95,0.06)] overflow-hidden">

              <div className="relative bg-gradient-to-br from-[#12335f] via-[#163d70] to-[#0d294d] px-6 py-5 overflow-hidden">

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/10" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <Building2 size={17} className="text-[#ff9933]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9933]">
                      At a Glance
                    </p>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      Project Information
                    </h3>
                  </div>
                </div>

              </div>

              <div className="p-6 space-y-5">

                <InfoRow
                  icon={<Building2 size={17} />}
                  label="Department / Ministry"
                  value={project.organization}
                />

                <InfoRow
                  icon={<BriefcaseBusiness size={17} />}
                  label="Project / Scheme"
                  value={project.name}
                />

                <InfoRow
                  icon={<CalendarDays size={17} />}
                  label="Session / Year"
                  value={project.year}
                />

                <InfoRow
                  icon={<MapPin size={17} />}
                  label="Location"
                  value={project.location}
                />

                <InfoRow
                  icon={<ShieldCheck size={17} />}
                  label="Status"
                  value={project.status}
                />

              </div>

            </div>


            {/* Quick Statistics */}

            <div className="bg-white rounded-[24px] border border-slate-200 shadow-[0_8px_30px_rgba(18,51,95,0.06)] p-6">

              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff9933]/10">
                  <Award size={17} className="text-[#ff9933]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9933]">
                    Quick Facts
                  </p>
                  <h3 className="text-base font-bold text-[#12335f] mt-0.5">
                    At a Glance
                  </h3>
                </div>
              </div>

              <div className="space-y-3">

                <MiniStat
                  icon={<Users size={16} />}
                  label="Trainees Trained"
                  value={trained}
                />

                <MiniStat
                  icon={<BriefcaseBusiness size={16} />}
                  label={
                    placementIsNumeric
                      ? 'Trainees Placed'
                      : 'Placement Status'
                  }
                  value={placed}
                />

                <MiniStat
                  icon={<CalendarDays size={16} />}
                  label="Session"
                  value={project.year}
                />

              </div>

            </div>


            {/* Enquiry CTA */}

            <div className="relative overflow-hidden rounded-[24px] bg-[#12335f] p-7 text-white shadow-[0_20px_50px_rgba(18,51,95,0.2)]">

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-6 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#ff9933]/15 blur-2xl" />

              <div className="relative">

                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center mb-5">
                  <BriefcaseBusiness size={20} className="text-[#ff9933]" />
                </div>

                <h3 className="text-xl font-bold leading-tight">
                  Want to know more?
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-6">
                  Contact DMPL Skills for further information about
                  this project and its training programmes.
                </p>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry(project.name)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff9933] text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,153,51,0.25)] hover:bg-[#e88a22] hover:shadow-[0_15px_35px_rgba(255,153,51,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff9933]/50 focus:ring-offset-2 focus:ring-offset-[#12335f]"
                >
                  Enquire Now
                </button>

              </div>

            </div>

          </aside>

        </div>


        {/* =====================================================
            BACK TO PROJECTS
        ===================================================== */}

        <div className="mt-14 pt-8 border-t border-slate-200">

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#12335f] hover:text-[#ff9933] transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#ff9933] group-hover:bg-[#ff9933] group-hover:text-white">
              <ArrowLeft size={16} />
            </span>
            Back to All Projects
          </Link>

        </div>

      </main>
    </div>
  );
};


/* =========================================================
   META BADGE
========================================================= */

interface MetaBadgeProps {
  icon: React.ReactNode;
  text: string;
}

const MetaBadge: React.FC<MetaBadgeProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.08] border border-white/10 backdrop-blur-sm">
      <span className="text-[#ff9933]">
        {icon}
      </span>
      <span className="text-sm font-medium text-white/90">
        {text}
      </span>
    </div>
  );
};


/* =========================================================
   CONTENT CARD
========================================================= */

interface ContentCardProps {
  icon: React.ReactNode;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({
  icon,
  title,
  eyebrow,
  children,
}) => {
  return (
    <section className="relative overflow-hidden bg-white rounded-[24px] border border-slate-200 p-7 lg:p-9 shadow-[0_8px_30px_rgba(18,51,95,0.06)]">

      <div className="flex items-start gap-4 mb-6">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9933]/15 to-[#ff9933]/5 border border-[#ff9933]/20 flex items-center justify-center text-[#ff9933] shrink-0">
          {icon}
        </div>

        <div>
          {eyebrow && (
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933] mb-1.5">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold text-[#12335f] leading-tight">
            {title}
          </h2>
        </div>

      </div>

      {children}

    </section>
  );
};


/* =========================================================
   IMPACT BOX
========================================================= */

interface ImpactBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ImpactBox: React.FC<ImpactBoxProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#f8fafc] to-white p-5 transition-all duration-300 hover:border-[#12335f]/20 hover:shadow-[0_10px_30px_rgba(18,51,95,0.08)]">

      <div className="flex items-center gap-2.5 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#12335f]/[0.06] text-[#12335f]">
          {icon}
        </div>
        <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-400">
          {label}
        </p>
      </div>

      <p className="text-3xl font-extrabold text-[#12335f] break-words leading-tight">
        {value}
      </p>

      <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#ff9933] to-[#e88a22] transition-transform duration-500 group-hover:scale-x-100" />

    </div>
  );
};


/* =========================================================
   INFO ROW
========================================================= */

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex gap-3.5">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff9933]/10 text-[#ff9933] mt-0.5">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
          {label}
        </p>

        <p className="mt-1.5 text-sm font-semibold text-[#12335f] leading-6 break-words">
          {value}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   MINI STAT
========================================================= */

interface MiniStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const MiniStat: React.FC<MiniStatProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5 transition-all duration-300 hover:border-[#ff9933]/30 hover:bg-[#ff9933]/[0.03]">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff9933]/10 text-[#ff9933] shrink-0">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-bold text-[#12335f] break-words">
          {value}
        </p>

      </div>

    </div>
  );
};

export default ProjectDetailPage;