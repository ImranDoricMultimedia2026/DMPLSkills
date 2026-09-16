import React from 'react';
import { ArrowUpRight, Camera, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryData } from '../data/gallery';

const featuredProjects = galleryData.map((project) => ({
  ...project,
  // Home par har project ka sirf ek representative image.
  // Actual paths gallery.ts mein add karne hain.
  featuredImage: project.images?.[0] || '',
}));

const ProjectHighlightsSection: React.FC = () => {
  return (
    <section
      id="project-highlights"
      className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= PREMIUM BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft radial glows */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ff9933]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#12335f]/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#163d70]/[0.06] blur-[120px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(18,51,95,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,51,95,0.5) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* ================= CENTERED HEADER ================= */}
        <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-16">

          {/* Eyebrow pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#12335f]/10 bg-white/80 px-4 py-2 shadow-[0_4px_20px_rgba(18,51,95,0.06)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff9933] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff9933]" />
            </span>

            {/* <Sparkles size={13} className="text-[#ff9933]" /> */}

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#12335f]">
              Project Highlights
            </span>
          </div>

          {/* Heading with multi-color spans */}
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#12335f] sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
            Real Training.
            <span className="mt-2 block">
              <span className="bg-gradient-to-r from-[#12335f] via-[#163d70] to-[#12335f] bg-clip-text text-transparent">
                Real
              </span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ff9933] via-[#ff8a1f] to-[#e88a22] bg-clip-text text-transparent">
                  Project
                </span>
                {/* Saffron underline accent */}
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#ff9933] via-[#ffb366] to-transparent" />
              </span>{' '}
              <span className="bg-gradient-to-r from-[#12335f] via-[#163d70] to-[#12335f] bg-clip-text text-transparent">
                Stories.
              </span>
            </span>
          </h2>

          {/* Divider with dot */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#12335f]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#12335f]/30" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A glimpse into selected{' '}
            <span className="font-semibold text-[#12335f]">
              skill development
            </span>{' '}
            and{' '}
            <span className="font-semibold text-[#12335f]">
              training programmes
            </span>{' '}
            delivered across our project ecosystem.
          </p>

          {/* CTA */}
          <div className="mt-9 flex justify-center">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#12335f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(18,51,95,0.25)] transition-all duration-300 hover:bg-[#0d294d] hover:shadow-[0_15px_40px_rgba(18,51,95,0.32)] focus:outline-none focus:ring-2 focus:ring-[#12335f]/40 focus:ring-offset-2"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff9933]">
                <ArrowUpRight
                  size={14}
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              View Full Gallery
            </Link>
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(18,51,95,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#12335f]/15 hover:shadow-[0_28px_70px_rgba(18,51,95,0.16)]"
            >
              {/* ================= IMAGE AREA ================= */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#12335f]">

                {project.featuredImage ? (
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  />
                ) : (
                  /* Premium visual state — no fake image */
                  <div className="relative flex h-full items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#12335f] via-[#163d70] to-[#071b36]" />
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
                    <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-white/10" />

                    <div className="relative text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
                        <Camera
                          size={26}
                          strokeWidth={1.5}
                          className="text-[#ff9933]"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                        Project Photograph
                      </span>
                    </div>
                  </div>
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b36]/95 via-[#12335f]/20 to-transparent" />

                {/* Saffron accent line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#ff9933] via-[#ffb366] to-[#e88a22] transition-transform duration-500 group-hover:scale-x-100" />

                {/* Serial number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#12335f]/70 text-xs font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Category badge */}
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {project.category}
                </div>

                {/* Bottom info on image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
                    {project.session}
                  </div>

                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* ================= CARD FOOTER ================= */}
              <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Camera size={16} className="text-[#12335f]/60" />
                  <span className="font-medium">
                    {project.photoCount} Project Photos
                  </span>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12335f]/5 text-[#12335f] transition-all duration-300 group-hover:bg-[#ff9933] group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(255,153,51,0.35)]">
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div className="relative mt-12 overflow-hidden rounded-[22px] bg-[#12335f] shadow-[0_20px_50px_rgba(18,51,95,0.2)]">

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#ff9933]/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-7">

            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm sm:flex">
                <Camera size={20} className="text-[#ff9933]" />
              </div>

              <div>
                <p className="text-base font-bold text-white sm:text-lg">
                  Explore the complete project gallery
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Browse photographs from recorded training projects.
                </p>
              </div>
            </div>

            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 rounded-full border border-[#ff9933]/30 bg-[#ff9933]/10 px-5 py-2.5 text-sm font-bold text-[#ff9933] transition-all duration-300 hover:border-[#ff9933] hover:bg-[#ff9933] hover:text-white"
            >
              Explore Gallery
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectHighlightsSection;