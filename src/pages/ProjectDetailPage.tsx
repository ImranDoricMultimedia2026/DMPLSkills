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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">

          <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-[#12335f] text-white flex items-center justify-center">
            <BriefcaseBusiness size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Project Not Found
          </h1>

          <p className="mt-3 text-slate-600 leading-7">
            The requested project is not available in the current
            project portfolio.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-[#ff9933] text-white font-semibold hover:bg-[#e88a22] transition"
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
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#12335f] via-[#163d70] to-slate-950 text-white">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#ff9933]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">

          {/* Breadcrumb */}

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-8">

            <Link
              to="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/projects"
              className="hover:text-white transition"
            >
              Projects
            </Link>

            <span>/</span>

            <span className="text-[#ff9933]">
              {project.organization}
            </span>

            <span>/</span>

            <span className="text-white">
              {project.name}
            </span>

          </div>

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium mb-6">

              <ShieldCheck
                size={17}
                className="text-[#ff9933]"
              />

              Project Record

            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {project.name}
            </h1>

            <p className="mt-5 text-xl text-slate-300">
              {project.organization}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <MetaBadge
                icon={<CalendarDays size={18} />}
                text={project.year}
              />

              <MetaBadge
                icon={<MapPin size={18} />}
                text={project.location}
              />

              <MetaBadge
                icon={<ShieldCheck size={18} />}
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
              icon={<Target size={22} />}
              title="Project Overview"
            >
              <p className="text-slate-600 leading-8">
                {project.objective}
              </p>
            </ContentCard>


            {/* Job Roles */}

            <section className="bg-white rounded-2xl border border-slate-200 p-7 lg:p-9 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <BriefcaseBusiness
                    className="text-[#ff9933]"
                    size={22}
                  />
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Job Roles / Trades
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Roles recorded for this project
                  </p>

                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {jobRoles.map((role, index) => (
                  <div
                    key={`${role}-${index}`}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >

                    <CheckCircle2
                      size={19}
                      className="text-[#ff9933] mt-0.5 shrink-0"
                    />

                    <span className="text-sm font-medium text-slate-700 leading-6">
                      {role}
                    </span>

                  </div>
                ))}

              </div>

            </section>


            {/* Project Impact */}

            <section className="bg-white rounded-2xl border border-slate-200 p-7 lg:p-9 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Users
                    className="text-[#ff9933]"
                    size={22}
                  />
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Project Impact
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Figures available in the project records
                  </p>

                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <ImpactBox
                  label="Trainees Trained"
                  value={trained}
                />

                <ImpactBox
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
              icon={<BarChart3 size={22} />}
              title="Project Outcomes"
            >

              <p className="text-slate-600 leading-8">
                {project.impactMetrics}
              </p>

            </ContentCard>

          </div>


          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="space-y-6">

            {/* Project Information */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

              <div className="bg-[#12335f] px-6 py-5">

                <h3 className="text-lg font-bold text-white">
                  Project Information
                </h3>

              </div>

              <div className="p-6 space-y-5">

                <InfoRow
                  icon={<Building2 size={18} />}
                  label="Department / Ministry"
                  value={project.organization}
                />

                <InfoRow
                  icon={<BriefcaseBusiness size={18} />}
                  label="Project / Scheme"
                  value={project.name}
                />

                <InfoRow
                  icon={<CalendarDays size={18} />}
                  label="Session / Year"
                  value={project.year}
                />

                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={project.location}
                />

                <InfoRow
                  icon={<ShieldCheck size={18} />}
                  label="Status"
                  value={project.status}
                />

              </div>

            </div>


            {/* Quick Statistics */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

              <h3 className="text-lg font-bold text-slate-900">
                At a Glance
              </h3>

              <div className="mt-5 space-y-4">

                <MiniStat
                  icon={<Users size={18} />}
                  label="Trainees Trained"
                  value={trained}
                />

                <MiniStat
                  icon={<BriefcaseBusiness size={18} />}
                  label={
                    placementIsNumeric
                      ? 'Trainees Placed'
                      : 'Placement Status'
                  }
                  value={placed}
                />

                <MiniStat
                  icon={<CalendarDays size={18} />}
                  label="Session"
                  value={project.year}
                />

              </div>

            </div>


            {/* Enquiry CTA */}

            <div className="rounded-2xl bg-[#12335f] p-7 text-white">

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <BriefcaseBusiness size={22} />
              </div>

              <h3 className="text-xl font-bold">
                Want to know more?
              </h3>

              <p className="mt-3 text-slate-300 text-sm leading-6">
                Contact Doric Skills for further information about
                this project and its training programmes.
              </p>

              <button
                type="button"
                onClick={() => onOpenEnquiry(project.name)}
                className="mt-6 w-full px-5 py-3 rounded-xl bg-[#ff9933] hover:bg-[#e88a22] transition font-semibold"
              >
                Enquire Now
              </button>

            </div>

          </aside>

        </div>


        {/* =====================================================
            BACK TO PROJECTS
        ===================================================== */}

        <div className="mt-10">

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#12335f] font-semibold hover:text-[#ff9933] transition"
          >
            <ArrowLeft size={18} />
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
    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10">

      <span className="text-[#ff9933]">
        {icon}
      </span>

      <span className="text-sm sm:text-base">
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
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-7 lg:p-9 shadow-sm">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff9933]">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

      </div>

      {children}

    </section>
  );
};


/* =========================================================
   IMPACT BOX
========================================================= */

interface ImpactBoxProps {
  label: string;
  value: string;
}

const ImpactBox: React.FC<ImpactBoxProps> = ({
  label,
  value,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

      <p className="text-xs uppercase tracking-wide font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-[#12335f] break-words">
        {value}
      </p>

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
    <div className="flex gap-3">

      <div className="mt-0.5 text-[#ff9933] shrink-0">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs uppercase tracking-wide font-semibold text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-800 leading-5 break-words">
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
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">

      <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-[#ff9933] shrink-0">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-bold text-slate-800 break-words">
          {value}
        </p>

      </div>

    </div>
  );
};

export default ProjectDetailPage;