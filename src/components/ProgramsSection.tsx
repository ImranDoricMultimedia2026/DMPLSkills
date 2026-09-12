import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Wrench, Landmark, Briefcase, ArrowRight, Check } from 'lucide-react';
import { programsData } from '../data/siteData';

export const ProgramsSection: React.FC = () => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'skill-development':
        return <Sparkles className="w-7 h-7 text-[#9d3626]" />;
      case 'vocational-training':
        return <Wrench className="w-7 h-7 text-[#9d3626]" />;
      case 'government-projects':
        return <Landmark className="w-7 h-7 text-[#9d3626]" />;
      case 'industry-oriented-training':
        return <Briefcase className="w-7 h-7 text-[#9d3626]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#9d3626]" />;
    }
  };

  const getTargetLink = (slug: string) => {
    switch (slug) {
      case 'skill-development':
        return '/courses?category=IT+%26+Digital';
      case 'vocational-training':
        return '/courses?category=Vocational+Skills';
      case 'government-projects':
        return '/projects';
      case 'industry-oriented-training':
        return '/courses?category=Management+%26+Retail';
      default:
        return '/courses';
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9d3626] bg-[#fdf2f0] px-2.5 py-1 rounded">
              Core Training Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mt-2">
              Our Skill & Vocational Programs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Outcome-oriented vocational tracks mapped to modern commercial requirements, state skill missions, and community livelihoods.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9d3626] hover:text-[#82291b] transition-colors self-start md:self-auto"
          >
            <span>View All Courses & Curricula</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((prog) => (
            <div
              key={prog.id}
              className="group bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/90 hover:border-[#f8c9c3] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#fdf2f0] group-hover:bg-[#9d3626] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(prog.slug)}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-[#9d3626] transition-colors mb-2">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {prog.description}
                </p>

                {/* Focus Areas Bullet list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/60 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights:
                  </p>
                  {prog.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#9d3626] shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={getTargetLink(prog.slug)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#9d3626] group-hover:text-[#82291b] transition-colors pt-3 border-t border-slate-200/60"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
