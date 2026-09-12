import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  TreePine,
  Landmark,
  Target,
  HeartHandshake,
  Award,
  Sparkles,
  Clapperboard,
  Wrench,
  Home,
  Lightbulb,
  Scale,
  Handshake,
  Factory,
  Building2,
  ShieldCheck,
} from 'lucide-react';

interface EcosystemItem {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  category: string;
  projects: number;
  firstProjectId: string;
}

const ecosystemItems: EcosystemItem[] = [
  {
    id: 'national-skill-development-mission',
    name: 'National Skill Development Mission',
    shortName: 'NSDM',
    icon: GraduationCap,
    category: 'National Mission',
    projects: 2,
    firstProjectId: 'pmkvy-2-0-2016-17',
  },
  {
    id: 'ministry-of-minority-affairs',
    name: 'Ministry of Minority Affairs',
    shortName: 'Minority Affairs',
    icon: HeartHandshake,
    category: 'Central Ministry',
    projects: 6,
    firstProjectId: 'seekho-aur-kamao-2018-19',
  },
  {
    id: 'punjab-skill-development-mission',
    name: 'Punjab Skill Development Mission',
    shortName: 'PSDM',
    icon: Award,
    category: 'State Mission',
    projects: 7,
    firstProjectId: 'pmkvy-2-0-punjab-2018-19',
  },
  {
    id: 'haryana-skill-development-mission',
    name: 'Haryana Skill Development Mission',
    shortName: 'HSDM',
    icon: Award,
    category: 'State Mission',
    projects: 1,
    firstProjectId: 'hsdm-2022-23',
  },
  {
    id: 'assam-state-rural-livelihood-mission',
    name: 'Assam State Rural Livelihood Mission',
    shortName: 'ASRLM',
    icon: TreePine,
    category: 'State Mission',
    projects: 1,
    firstProjectId: 'ddu-gky-assam-2017-18',
  },
  {
    id: 'uttar-pradesh-skill-development-mission',
    name: 'Uttar Pradesh Skill Development Mission',
    shortName: 'UPSDM',
    icon: Landmark,
    category: 'State Mission',
    projects: 1,
    firstProjectId: 'ddu-gky-up-2017-18',
  },
  {
    id: 'himayat-mission-management-unit',
    name: 'Himayat Mission Management Unit',
    shortName: 'Himayat',
    icon: Target,
    category: 'State Mission',
    projects: 1,
    firstProjectId: 'ddu-gky-himayat-2018-19',
  },
  {
    id: 'ministry-of-social-justice-and-empowerment',
    name: 'Ministry of Social Justice & Empowerment',
    shortName: 'MSJE',
    icon: Scale,
    category: 'Central Ministry',
    projects: 1,
    firstProjectId: 'pm-ajay-2022-23',
  },
  {
    id: 'pmkvy-4-0',
    name: 'PMKVY 4.0',
    shortName: 'PMKVY 4.0',
    icon: GraduationCap,
    category: 'Flagship Scheme',
    projects: 1,
    firstProjectId: 'pmkvy-4-0-2023-24',
  },
  {
    id: 'beauty-and-wellness',
    name: 'Beauty & Wellness SSC',
    shortName: 'Beauty & Wellness',
    icon: Sparkles,
    category: 'Sector Skill Council',
    projects: 1,
    firstProjectId: 'nsfdc-2018-19',
  },
  {
    id: 'media-and-entertainment-ssc',
    name: 'Media & Entertainment SSC',
    shortName: 'Media & Entertainment',
    icon: Clapperboard,
    category: 'Sector Skill Council',
    projects: 2,
    firstProjectId: 'nbcfdc-media-2018-19',
  },
  {
    id: 'indian-plumbing-sector-skill-council',
    name: 'Indian Plumbing SSC',
    shortName: 'Plumbing SSC',
    icon: Wrench,
    category: 'Sector Skill Council',
    projects: 2,
    firstProjectId: 'nbcfdc-ipsc-2018-19',
  },
  {
    id: 'pmay-chhattisgarh',
    name: 'PMAY Chhattisgarh',
    shortName: 'PMAY',
    icon: Home,
    category: 'Housing Mission',
    projects: 1,
    firstProjectId: 'chhattisgarh-rpl-2018-19',
  },
  {
    id: 'niesbud',
    name: 'NIESBUD',
    shortName: 'NIESBUD',
    icon: Lightbulb,
    category: 'Entrepreneurship',
    projects: 1,
    firstProjectId: 'niesbud-edp',
  },
  {
    id: 'punjab-hunar-vikas-yojna',
    name: 'Punjab Hunar Vikas Yojna',
    shortName: 'PHVY',
    icon: Handshake,
    category: 'State Scheme',
    projects: 1,
    firstProjectId: 'phvy-2024-25',
  },
  {
    id: 'district-industries-centre',
    name: 'District Industries Centre',
    shortName: 'DIC',
    icon: Factory,
    category: 'Entrepreneurship',
    projects: 1,
    firstProjectId: 'edp-2025-26',
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] flex">
          <span className="flex-1 bg-[#ff9933]/70" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#138808]/70" />
        </div>

        <div className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full bg-[#ff9933]/[0.04] blur-3xl" />

        <div className="absolute -bottom-40 left-0 w-[380px] h-[380px] rounded-full bg-[#12335f]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-[2px] bg-[#ff9933] rounded-full" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9933]">
              Our Ecosystem
            </span>

            <span className="w-8 h-[2px] bg-[#ff9933] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-slate-900 leading-tight tracking-tight">
            Building Skills with
            <span className="block text-[#ff9933] mt-1">
              National & State Partners
            </span>
          </h2>

          <p className="mt-5 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We work closely with Central Ministries, State Skill Development
            Missions, Sector Skill Councils and specialised schemes to deliver
            high-quality training at scale.
          </p>
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 lg:mb-14">

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <ShieldCheck className="w-[18px] h-[18px] text-[#ff9933]" />
            <span className="font-medium">
              Government Aligned
            </span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Building2 className="w-[18px] h-[18px] text-[#ff9933]" />
            <span className="font-medium">
              16 Departments
            </span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Award className="w-[18px] h-[18px] text-[#ff9933]" />
            <span className="font-medium">
              Skill Development Programs
            </span>
          </div>
        </div>

        {/* ================= ECOSYSTEM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

          {ecosystemItems.map((item) => {
            const Icon = item.icon;

            /*
             * Correct project detail route:
             * /projects/:departmentId/:projectId
             */
            const projectPath = `/projects/${item.id}/${item.firstProjectId}`;

            return (
              <Link
                key={item.id}
                to={projectPath}
                className="
                  group relative
                  bg-white rounded-2xl
                  border border-slate-200/80
                  p-5 sm:p-6
                  hover:border-[#ff9933]/40
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  overflow-hidden
                "
              >

                {/* Hover gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-[#ff9933]/[0.04]
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                <div className="relative">

                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4">

                    <div
                      className="
                        w-11 h-11 rounded-xl
                        bg-slate-100
                        group-hover:bg-[#ff9933]/10
                        flex items-center justify-center
                        transition-colors duration-300
                      "
                    >
                      <Icon
                        className="
                          w-5 h-5
                          text-[#12335f]/70
                          group-hover:text-[#ff9933]
                          transition-colors duration-300
                        "
                      />
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-400
                        bg-slate-50
                        px-2 py-1
                        rounded-md
                      "
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className="
                      text-[13px] sm:text-sm
                      font-bold
                      text-slate-900
                      leading-snug
                      group-hover:text-[#12335f]
                      transition-colors duration-300
                      line-clamp-2
                      min-h-[2.6rem]
                    "
                  >
                    {item.name}
                  </h3>

                  {/* Short Name */}
                  <p className="mt-1 text-[11px] font-medium text-[#ff9933]">
                    {item.shortName}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">

                    <span className="text-[11px] font-medium text-slate-500">
                      {item.projects} Project
                      {item.projects > 1 ? 's' : ''}
                    </span>

                    <span
                      className="
                        w-7 h-7 rounded-lg
                        bg-slate-50
                        group-hover:bg-[#ff9933]
                        flex items-center justify-center
                        transition-all duration-300
                      "
                    >
                      <ArrowRight
                        className="
                          w-3.5 h-3.5
                          text-slate-400
                          group-hover:text-white
                          transition-colors duration-300
                        "
                      />
                    </span>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 lg:mt-16 text-center">

          <div
            className="
              inline-flex
              flex-col sm:flex-row
              items-center
              gap-4 sm:gap-6
              bg-white
              rounded-2xl
              border border-slate-200
              px-6 sm:px-8 py-5
              shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            "
          >

            <div className="text-center sm:text-left">

              <p className="text-sm font-bold text-slate-900">
                Explore the complete project portfolio
              </p>

              <p className="text-[12px] text-slate-500 mt-0.5">
                View detailed schemes, sessions and outcomes across all departments
              </p>

            </div>

            <Link
              to="/projects"
              className="
                group shrink-0
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                text-sm font-bold
                text-white
                bg-[#12335f]
                hover:bg-[#0e294d]
                shadow-[0_8px_22px_rgba(18,51,95,0.20)]
                hover:shadow-[0_12px_28px_rgba(18,51,95,0.28)]
                transition-all duration-300
                hover:-translate-y-0.5
              "
            >
              View All Projects

              <ArrowRight
                className="
                  w-4 h-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;