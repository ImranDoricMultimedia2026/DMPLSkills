import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  MapPin,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { projectsData } from '../data/projects';

interface ProjectsPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

const PROJECTS_PER_PAGE = 9;

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'az', label: 'A–Z' },
  { value: 'za', label: 'Z–A' },
] as const;

type SortOrder = (typeof sortOptions)[number]['value'];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  /* ------------------------------------------------------------------
     Dynamic filter options derived from project data
  ------------------------------------------------------------------ */
  const departments = useMemo(() => {
    const unique = Array.from(
      new Set(projectsData.map((p) => p.organization))
    ).sort((a, b) => a.localeCompare(b));
    return unique;
  }, []);

  const years = useMemo(() => {
    const unique = Array.from(
      new Set(projectsData.map((p) => p.year))
    ).sort((a, b) => Number(b) - Number(a));
    return unique;
  }, []);

  /* ------------------------------------------------------------------
     Filtering + Sorting
  ------------------------------------------------------------------ */
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = projectsData.filter((project) => {
      const matchesSearch =
        query.length === 0 ||
        project.name.toLowerCase().includes(query) ||
        project.organization.toLowerCase().includes(query);

      const matchesDepartment =
        selectedDepartment === 'all' ||
        project.organization === selectedDepartment;

      const matchesYear =
        selectedYear === 'all' || project.year === selectedYear;

      return matchesSearch && matchesDepartment && matchesYear;
    });

    result.sort((a, b) => {
      switch (sortOrder) {
        case 'newest':
          return Number(b.year) - Number(a.year);
        case 'oldest':
          return Number(a.year) - Number(b.year);
        case 'az':
          return a.name.localeCompare(b.name);
        case 'za':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedDepartment, selectedYear, sortOrder]);

  /* ------------------------------------------------------------------
     Pagination
  ------------------------------------------------------------------ */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const rangeStart = filteredProjects.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(endIndex, filteredProjects.length);

  /* ------------------------------------------------------------------
     Helpers
  ------------------------------------------------------------------ */
  const isFilterActive =
    searchQuery.trim() !== '' ||
    selectedDepartment !== 'all' ||
    selectedYear !== 'all' ||
    sortOrder !== 'newest';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('all');
    setSelectedYear('all');
    setSortOrder('newest');
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    setCurrentPage(1);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortOrder) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  /* ------------------------------------------------------------------
     Render
  ------------------------------------------------------------------ */
  return (
    <div id="projects-page" className="min-h-screen bg-[#f6f8fb]">
      {/* =====================================================
          BREADCRUMBS
      ====================================================== */}
      <Breadcrumbs
        items={[
          {
            label: 'Projects',
          },
        ]}
      />

      {/* =====================================================
          PREMIUM HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#12335f] text-white">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ff9933]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm">
              <Sparkles size={14} className="text-[#ff9933]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                DMPL Skills · Project Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Government &amp;
              <span className="block text-[#ff9933]">
                Institutional Projects
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Explore recorded skill development and training initiatives
              undertaken across government departments, ministries,
              schemes and institutional programmes.
            </p>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5">
                <ShieldCheck size={16} className="text-[#ff9933]" />
                <span className="text-sm text-white/80">
                  Recorded Project Portfolio
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5">
                <FolderOpen size={16} className="text-[#ff9933]" />
                <span className="text-sm text-white/80">
                  {projectsData.length} Project Records
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PORTFOLIO
      ====================================================== */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* =================================================
              TOOLBAR
          ================================================== */}
          <div className="mb-8 rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(18,51,95,0.06)] sm:p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <SlidersHorizontal size={16} className="text-[#12335f]" />
              <span className="text-sm font-bold text-[#12335f]">
                Search &amp; Filter Projects
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Search */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="project-search"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Search
                </label>

                <div className="relative">
                  <Search
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="project-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects or departments..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:border-[#12335f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#12335f]/10"
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor="project-department"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Department
                </label>

                <select
                  id="project-department"
                  value={selectedDepartment}
                  onChange={(e) => handleDepartmentChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 transition-colors focus:border-[#12335f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#12335f]/10"
                >
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div>
                <label
                  htmlFor="project-year"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Year / Session
                </label>

                <select
                  id="project-year"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 transition-colors focus:border-[#12335f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#12335f]/10"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label
                  htmlFor="project-sort"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Sort By
                </label>

                <select
                  id="project-sort"
                  value={sortOrder}
                  onChange={(e) =>
                    handleSortChange(e.target.value as SortOrder)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 transition-colors focus:border-[#12335f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#12335f]/10"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear filters */}
            {isFilterActive && (
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-slate-500">
                  Filters applied
                </span>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-[#12335f]/30 hover:text-[#12335f] focus:outline-none focus:ring-2 focus:ring-[#12335f]/10"
                >
                  <X size={13} />
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* =================================================
              RESULTS SUMMARY
          ================================================== */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-600">
              Showing{' '}
              <span className="font-bold text-[#12335f]">
                {rangeStart}–{rangeEnd}
              </span>{' '}
              of{' '}
              <span className="font-bold text-[#12335f]">
                {filteredProjects.length}
              </span>{' '}
              projects
            </p>

            {isFilterActive && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff9933]/10 px-3 py-1 text-xs font-semibold text-[#c26f1a]">
                <SlidersHorizontal size={12} />
                Filters Active
              </span>
            )}
          </div>

          {/* =================================================
              PROJECT GRID
          ================================================== */}
          {paginatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginatedProjects.map((project, index) => {
                const serial = startIndex + index + 1;

                return (
                  <article
                    key={project.id}
                    className="group relative flex flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(18,51,95,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#12335f]/20 hover:shadow-[0_22px_55px_rgba(18,51,95,0.13)]"
                  >
                    {/* =========================================
                        IMAGE / VISUAL
                    ========================================== */}
                    <div className="relative h-52 overflow-hidden bg-[#12335f]">
                      {project.galleryImages &&
                      project.galleryImages.length > 0 ? (
                        <img
                          src={project.galleryImages[0]}
                          alt={project.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="relative flex h-full items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#12335f] via-[#163d70] to-[#071b36]" />
                          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                          <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-white/10" />
                          <Building2
                            size={52}
                            strokeWidth={1.2}
                            className="relative text-white/20"
                          />
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071b36]/80 via-transparent to-transparent" />

                      {/* Serial */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#12335f]/75 text-xs font-bold text-white backdrop-blur-md">
                        {String(serial).padStart(2, '0')}
                      </div>

                      {/* Year badge */}
                      <div className="absolute right-4 top-4">
                        <div className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/95 px-3 py-1.5 text-xs font-bold text-[#12335f] shadow-lg backdrop-blur-md">
                          <CalendarDays size={13} />
                          {project.year}
                        </div>
                      </div>
                    </div>

                    {/* =========================================
                        CARD CONTENT
                    ========================================== */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      {/* Department */}
                      <div className="mb-3 flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#ff9933]/10">
                          <Building2
                            size={14}
                            className="text-[#ff9933]"
                          />
                        </div>
                        <span className="text-xs font-semibold leading-5 text-slate-500">
                          {project.organization}
                        </span>
                      </div>

                      {/* Project title */}
                      <h3 className="text-lg font-bold leading-snug text-[#12335f] transition-colors duration-300 group-hover:text-[#163d70]">
                        {project.name}
                      </h3>

                      {/* Objective */}
                      <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-slate-600">
                        {project.objective}
                      </p>

                      {/* Meta */}
                      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <MapPin
                            size={14}
                            className="shrink-0 text-[#ff9933]"
                          />
                          <span className="truncate">
                            {project.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <CalendarDays
                            size={14}
                            className="shrink-0 text-[#ff9933]"
                          />
                          <span>Session: {project.year}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/projects/${project.departmentId}/${project.id}`}
                        className="group/btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#12335f] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0d294d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#12335f]/30 focus:ring-offset-2"
                      >
                        View Project
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* =================================================
                EMPTY STATE
            ================================================== */
            <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12335f]/5">
                <FolderOpen size={30} className="text-[#12335f]/40" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#12335f]">
                No projects found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try adjusting your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#12335f] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0d294d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#12335f]/30 focus:ring-offset-2"
              >
                <X size={15} />
                Clear Filters
              </button>
            </div>
          )}

          {/* =================================================
              PAGINATION
          ================================================== */}
          {filteredProjects.length > PROJECTS_PER_PAGE && (
            <nav
              aria-label="Project pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {/* Previous */}
              <button
                type="button"
                onClick={() => goToPage(safePage - 1)}
                disabled={safePage === 1}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:border-[#12335f]/30 hover:text-[#12335f] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page numbers */}
              <div className="flex flex-wrap items-center gap-1.5">
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-current={page === safePage ? 'page' : undefined}
                    className={
                      page === safePage
                        ? 'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#12335f] text-sm font-bold text-white shadow-sm transition-all duration-300'
                        : 'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:border-[#12335f]/30 hover:text-[#12335f]'
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={() => goToPage(safePage + 1)}
                disabled={safePage === totalPages}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:border-[#12335f]/30 hover:text-[#12335f] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} />
              </button>
            </nav>
          )}

          {/* =================================================
              ENQUIRY CTA
          ================================================== */}
          <div className="relative mt-16 overflow-hidden rounded-[24px] bg-[#12335f]">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col gap-8 px-7 py-9 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-11">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#ff9933]" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff9933]">
                    Connect With DMPL Skills
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Interested in our skill development initiatives?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Contact our team for project information, training
                  programmes and institutional enquiries.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry(
                    'Institutional / Government Skill Partnership'
                  )
                }
                className="shrink-0 rounded-xl bg-[#ff9933] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#e88a22] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff9933]/50 focus:ring-offset-2 focus:ring-offset-[#12335f]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;