import React from 'react';
import {
  Users,
  Target,
  Code,
  ShieldCheck,
  Compass,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { whyDMPLData } from '../data/siteData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (id: string) => {
    const iconClass =
      'w-5 h-5 sm:w-6 sm:h-6';

    switch (id) {
      case 'why-trainers':
        return <Users className={iconClass} />;

      case 'why-relevant':
        return <Target className={iconClass} />;

      case 'why-practical':
        return <Code className={iconClass} />;

      case 'why-govt-aligned':
        return <ShieldCheck className={iconClass} />;

      case 'why-career':
        return <Compass className={iconClass} />;

      case 'why-infra':
        return <Building2 className={iconClass} />;

      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section
      id="why-DMPL-skills"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND ELEMENTS
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18,51,95,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,51,95,0.045) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Orange glow */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#ff9933]/[0.07] blur-3xl" />

        {/* Navy glow */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#12335f]/[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16 items-end mb-14 lg:mb-16">

          {/* Eyebrow */}
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#ff9933]" />

              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#12335f]">
                Institutional Values
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#12335f] text-white flex items-center justify-center shadow-lg shadow-[#12335f]/15">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                DMPL Skills Framework
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="lg:max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.08] text-[#0b2445]">
              Built around
              <span className="text-[#ff9933]"> meaningful skills.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-7 max-w-2xl">
              Our educational framework pairs disciplined academic rigor
              with practical laboratory work, enabling aspirants to build
              genuine vocational mastery without unrealistic promises.
            </p>
          </div>
        </div>

        {/* =========================================================
            TOP ACCENT
        ========================================================= */}

        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        {/* =========================================================
            6 PILLARS
        ========================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyDMPLData.map((item, index) => (
            <article
              key={item.id}
              className="group relative min-h-[290px] bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_8px_30px_rgba(15,35,65,0.045)] hover:shadow-[0_20px_50px_rgba(15,35,65,0.10)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Orange hover line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff9933] via-[#ff9933]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background number */}
              <span className="absolute -right-3 -top-7 text-[110px] leading-none font-heading font-black text-[#12335f]/[0.035] select-none pointer-events-none group-hover:text-[#ff9933]/[0.07] transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative h-full p-6 sm:p-7 flex flex-col">

                {/* Card top */}
                <div className="flex items-start justify-between gap-4">

                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-[#ff9933]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#12335f]/[0.07] border border-[#12335f]/10 text-[#12335f] flex items-center justify-center group-hover:bg-[#12335f] group-hover:text-white group-hover:border-[#12335f] transition-all duration-500">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 group-hover:text-[#ff9933] transition-colors">
                    PILLAR {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7 flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#12335f] group-hover:text-[#0b2445] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    DMPL Skills
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#12335f] group-hover:text-[#ff9933] transition-colors">
                    Core Pillar
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM INSTITUTIONAL STRIP
        ========================================================= */}

        <div className="mt-10 lg:mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#0b2445] border border-[#12335f] shadow-[0_18px_50px_rgba(11,36,69,0.14)]">

            {/* Decorative glow */}
            <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#ff9933]/10 blur-3xl" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />

            <div className="relative px-6 sm:px-8 lg:px-10 py-7 sm:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#ff9933]" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                    A structured approach to vocational development
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-6 max-w-2xl">
                    Our focus remains on practical learning, relevant
                    training and responsible skill development.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#ff9933]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.14em] font-bold text-white/70">
                  Institutional Framework
                </span>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-[#ff9933] via-[#ff9933]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};