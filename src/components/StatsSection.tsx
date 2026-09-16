import React from 'react';
import {
  Users,
  BriefcaseBusiness,
  Building2,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '25,408',
      label: 'Trainees Trained',
      description: 'Across recorded skill development projects',
    },
    {
      icon: BriefcaseBusiness,
      value: '12,738',
      label: 'Trainees Placed',
      description: 'Placement figures reported in project records',
    },
    {
      icon: Building2,
      value: '39',
      label: 'Project Records',
      description: 'Government & institutional programmes',
    },
    {
      icon: TrendingUp,
      value: '50.1%',
      label: 'Reported Placement Rate',
      description: 'Calculated from available placement data',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Premium background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#ff9933]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#12335f]/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#12335f 1px, transparent 1px), linear-gradient(90deg, #12335f 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff9933]/25 bg-[#ff9933]/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#12335f]">
              Our Impact
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#12335f] sm:text-4xl lg:text-5xl">
            Skills. Opportunities.{' '}
            <span className="text-[#ff9933]">Impact.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            A snapshot of DMPL Skills' recorded project portfolio,
            training outreach and reported placement outcomes across
            skill development programmes.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#ff9933]" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(18,51,95,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#12335f]/20 hover:shadow-[0_20px_45px_rgba(18,51,95,0.12)]"
              >
                {/* Orange top accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#12335f] via-[#ff9933] to-[#12335f] opacity-80" />

                {/* Decorative number */}
                <span className="absolute -right-3 -top-7 text-8xl font-black text-[#12335f]/[0.035]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12335f] text-white shadow-lg shadow-[#12335f]/15 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-[#ff9933]" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-black tracking-tight text-[#12335f] sm:text-4xl">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="mt-2 text-sm font-bold text-slate-800">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placement Highlight */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#12335f]/10 bg-[#12335f] shadow-[0_15px_40px_rgba(18,51,95,0.12)]">
          <div className="relative px-6 py-6 sm:px-8">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff9933] text-[#12335f]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff9933]">
                    Reported Project Outcome
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Placement outcomes recorded across completed/reported
                    project data.
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-3 md:text-right">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  50.1%
                </span>

                <span className="text-xs text-blue-100/70">
                  reported placement rate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Data note */}
        <div className="mt-5 text-center">
          <p className="text-[11px] leading-5 text-slate-400">
            Figures are based on available project records. Placement entries
            marked N.A. or Assessment Pending are excluded from the placement
            calculation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;