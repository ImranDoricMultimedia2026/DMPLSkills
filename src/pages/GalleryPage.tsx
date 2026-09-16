import React, { useMemo, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { galleryData } from '../data/gallery';
import { GalleryProject } from '../types';

import {
  Images,
  Camera,
  Building2,
  FolderOpen,
  ArrowUpRight,
  Calendar,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All');

  const [activeProject, setActiveProject] =
    useState<GalleryProject | null>(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = [
    'All',
    'Training',
    'Workshops',
    'Events',
    'Certificates',
    'Infrastructure',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return galleryData;
    }

    return galleryData.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const totalPhotos = galleryData.reduce(
    (total, project) => total + project.photoCount,
    0
  );

  const openProject = (project: GalleryProject) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!activeProject || activeProject.images.length === 0) {
      return;
    }

    setActiveImageIndex((current) =>
      current === activeProject.images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    if (!activeProject || activeProject.images.length === 0) {
      return;
    }

    setActiveImageIndex((current) =>
      current === 0
        ? activeProject.images.length - 1
        : current - 1
    );
  };

  return (
    <div
      id="gallery-page"
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      <Breadcrumbs items={[{ label: 'Photo Gallery' }]} />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#12335f] text-white">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
          }}
        />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ff9933]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="absolute left-0 right-0 top-0 h-1">
          <div className="flex h-full">
            <div className="w-1/3 bg-[#ff9933]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#138808]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Images className="h-4 w-4 text-[#ff9933]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                Project Photo Archive
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Training &{' '}
              <span className="text-[#ff9933]">
                Project Gallery
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore project-wise photographs from DMPL Skills
              training programmes and skill development initiatives.
            </p>

            {/* Hero stats */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff9933]/15">
                  <FolderOpen className="h-4 w-4 text-[#ff9933]" />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    {galleryData.length}
                  </p>

                  <p className="text-[11px] uppercase tracking-wider text-slate-400">
                    Project Albums
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Camera className="h-4 w-4 text-white" />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    {totalPhotos}
                  </p>

                  <p className="text-[11px] uppercase tracking-wider text-slate-400">
                    Project Photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-8 bg-[#ff9933]" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#12335f]">
                  Visual Archive
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#12335f] sm:text-3xl">
                Project Photo Albums
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Select a project to view its available photographs.
              </p>
            </div>

            <div className="hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Showing
              </p>

              <p className="mt-0.5 text-sm font-bold text-[#12335f]">
                {filteredProjects.length} Project Albums
              </p>
            </div>
          </div>

          {/* =================================================
              CATEGORY FILTER
          ================================================== */}
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;

                const count =
                  cat === 'All'
                    ? galleryData.length
                    : galleryData.filter(
                        (project) => project.category === cat
                      ).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      group inline-flex items-center gap-2 rounded-xl
                      px-4 py-2.5 text-xs font-bold
                      transition-all duration-200 sm:text-sm
                      ${
                        isActive
                          ? 'bg-[#12335f] text-white shadow-md shadow-[#12335f]/20'
                          : 'border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-[#12335f]'
                      }
                    `}
                  >
                    {cat}

                    <span
                      className={`
                        rounded-md px-1.5 py-0.5 text-[10px]
                        ${
                          isActive
                            ? 'bg-[#ff9933] text-white'
                            : 'bg-slate-100 text-slate-500'
                        }
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PROJECT ALBUM GRID
          ================================================== */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => openProject(project)}
                  className="
                    group cursor-pointer overflow-hidden rounded-2xl
                    border border-slate-200 bg-white shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#12335f]/20
                    hover:shadow-2xl
                  "
                >
                  {/* Album cover */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#12335f] to-[#1d4d87]">
                    {project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        loading="lazy"
                        className="
                          h-full w-full object-cover
                          transition-transform duration-700
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                          <Images className="h-8 w-8 text-[#ff9933]" />
                        </div>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/70">
                          Project Photos
                        </p>
                      </div>
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12335f]/90 via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#12335f] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
                        {project.category}
                      </span>
                    </div>

                    {/* Photo count */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-sm">
                      <Images className="h-4 w-4 text-[#ff9933]" />

                      <span className="text-xs font-bold text-white">
                        {project.photoCount} Photos
                      </span>
                    </div>

                    {/* Open icon */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-[#12335f] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-extrabold leading-6 text-[#12335f] transition-colors group-hover:text-[#ff9933]">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#ff9933]" />

                        <span className="text-xs font-semibold text-slate-500">
                          Session {project.session}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#12335f]">
                        View Album
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* =================================================
               EMPTY CATEGORY
            ================================================== */
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12335f]/5">
                <Images className="h-6 w-6 text-[#12335f]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#12335f]">
                No project albums found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                There are currently no project albums available
                for this category.
              </p>
            </div>
          )}

          {/* Archive note */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#ff9933]" />

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#12335f]/5">
                  <ImageIcon className="h-5 w-5 text-[#12335f]" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#12335f]">
                    Project Visual Archive
                  </h4>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    The gallery is organised project-wise so that
                    photographs remain associated with their
                    respective training programme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PHOTO MODAL
      ====================================================== */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06172e]/90 p-4 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="min-w-0 pr-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff9933]">
                  {activeProject.category} • {activeProject.session}
                </p>

                <h3 className="mt-1 truncate text-base font-extrabold text-[#12335f] sm:text-lg">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeProject}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-[#12335f] hover:text-white"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Photos available */}
            {activeProject.images.length > 0 ? (
              <>
                <div className="relative flex min-h-[55vh] items-center justify-center bg-slate-950">
                  <img
                    src={activeProject.images[activeImageIndex]}
                    alt={`${activeProject.title} - Photo ${
                      activeImageIndex + 1
                    }`}
                    className="max-h-[70vh] max-w-full object-contain"
                  />

                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#12335f] shadow-lg transition hover:bg-white"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#12335f] shadow-lg transition hover:bg-white"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
                  <span className="text-xs font-semibold text-slate-500">
                    Photo {activeImageIndex + 1} of{' '}
                    {activeProject.images.length}
                  </span>

                  <span className="text-xs font-bold text-[#12335f]">
                    {activeProject.photoCount} photos in album
                  </span>
                </div>
              </>
            ) : (
              <div className="flex min-h-[45vh] flex-col items-center justify-center bg-slate-50 px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12335f]/5">
                  <Images className="h-8 w-8 text-[#12335f]" />
                </div>

                <h4 className="mt-5 text-lg font-bold text-[#12335f]">
                  {activeProject.photoCount} project photos
                </h4>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  The photographs for this project will appear here
                  once their final image paths are added to the
                  gallery data.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};