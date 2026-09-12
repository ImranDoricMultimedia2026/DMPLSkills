import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  FolderKanban,
  Users,
  Images,
  PhoneCall,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Search,
  GraduationCap,
  TreePine,
  Landmark,
  Target,
  HeartHandshake,
  Award,
  Sparkles,
  Clapperboard,
  Wrench,
  Lightbulb,
  Scale,
  Handshake,
  Factory,
} from 'lucide-react';


interface NavbarProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

/* =========================================================
   TYPES
   ========================================================= */

interface Project {
  id: string;
  name: string;
  session: string;
  duration?: string;
  traineesTrained?: string;
  traineesPlaced?: string;
}

interface ProjectDepartment {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  projects: Project[];
}

/* =========================================================
   PROJECT DATA — Full hierarchy (16 Departments)
   ========================================================= */

const projectDepartments: ProjectDepartment[] = [
  /* 01. NATIONAL SKILL DEVELOPMENT MISSION */
  {
    id: 'national-skill-development-mission',
    name: 'National Skill Development Mission',
    shortName: 'National Skill Development Mission',
    icon: GraduationCap,
    projects: [
      {
        id: 'pmkvy-2-0-2016-17',
        name: 'PMKVY 2.0',
        session: '2016–17 & 2017–18',
        traineesTrained: '5990',
        traineesPlaced: '2930',
      },
      {
        id: 'pmkvy-rpl-2018-19',
        name: 'PMKVY – RPL',
        session: '2018–19',
        traineesTrained: '1080',
        traineesPlaced: '720',
      },
    ],
  },

  /* 02. ASSAM STATE RURAL LIVELIHOOD MISSION */
  {
    id: 'assam-state-rural-livelihood-mission',
    name: 'Assam State Rural Livelihood Mission',
    shortName: 'ASRLM',
    icon: TreePine,
    projects: [
      {
        id: 'ddu-gky-assam-2017-18',
        name: 'DDU-GKY (Assam)',
        session: '2017–18',
        traineesTrained: '—',
        traineesPlaced: '—',
      },
    ],
  },

  /* 03. UTTAR PRADESH SKILL DEVELOPMENT MISSION */
  {
    id: 'uttar-pradesh-skill-development-mission',
    name: 'Uttar Pradesh Skill Development Mission',
    shortName: 'UPSDM',
    icon: Landmark,
    projects: [
      {
        id: 'ddu-gky-up-2017-18',
        name: 'DDU-GKY (Uttar Pradesh)',
        session: '2017–18',
        traineesTrained: '—',
        traineesPlaced: '—',
      },
    ],
  },

  /* 04. HIMAYAT MISSION MANAGEMENT UNIT */
  {
    id: 'himayat-mission-management-unit',
    name: 'Himayat Mission Management Unit',
    shortName: 'Himayat',
    icon: Target,
    projects: [
      {
        id: 'ddu-gky-himayat-2018-19',
        name: 'DDU-GKY (Himayat)',
        session: '2018–19',
        traineesTrained: '—',
        traineesPlaced: '—',
      },
    ],
  },

  /* 05. MINISTRY OF MINORITY AFFAIRS */
  {
    id: 'ministry-of-minority-affairs',
    name: 'Ministry of Minority Affairs',
    shortName: 'Ministry of Minority Affairs',
    icon: HeartHandshake,
    projects: [
      {
        id: 'seekho-aur-kamao-2018-19',
        name: 'Seekho Aur Kamao',
        session: '2018–19',
        traineesTrained: '1000',
        traineesPlaced: '758',
      },
      {
        id: 'nai-manzil-2018-19',
        name: 'Nai Manzil',
        session: '2018–19',
        traineesTrained: '413',
        traineesPlaced: '310',
      },
      {
        id: 'gharib-nawaz-2018-19',
        name: 'Gharib Nawaz Skill Development Training for Minorities',
        session: '2018–19',
        traineesTrained: '850',
        traineesPlaced: '638',
      },
      {
        id: 'seekho-aur-kamao-2-0-2019-20',
        name: 'Seekho Aur Kamao 2.0',
        session: '2019–20',
        traineesTrained: '650',
        traineesPlaced: '497',
      },
      {
        id: 'seekho-aur-kamao-3-0-2020-21',
        name: 'Seekho Aur Kamao 3.0',
        session: '2020–21',
        traineesTrained: '950',
        traineesPlaced: '723',
      },
      {
        id: 'maef-sak-2020-21',
        name: 'MAEF (SAK)',
        session: '2020–21',
        traineesTrained: '407',
        traineesPlaced: 'Assessment Pending',
      },
    ],
  },

  /* 06. PUNJAB SKILL DEVELOPMENT MISSION */
  {
    id: 'punjab-skill-development-mission',
    name: 'Punjab Skill Development Mission',
    shortName: 'Punjab Skill Development Mission',
    icon: Award,
    projects: [
      {
        id: 'pmkvy-2-0-punjab-2018-19',
        name: 'PMKVY 2.0',
        session: '2018–19',
        traineesTrained: '547',
        traineesPlaced: '212',
      },
      {
        id: 'day-nulm-punjab-2018-19',
        name: 'DAY-NULM',
        session: '2018–19',
        traineesTrained: '420',
        traineesPlaced: '207',
      },
      {
        id: 'pmkvy-2-0-punjab-2019-20',
        name: 'PMKVY 2.0',
        session: '2019–20',
        traineesTrained: '400',
        traineesPlaced: '260',
      },
      {
        id: 'day-nulm-punjab-2020-21',
        name: 'DAY-NULM',
        session: '2020–21',
        traineesTrained: '720',
        traineesPlaced: '390',
      },
      {
        id: 'rpl-3-0-punjab-2020-21',
        name: 'RPL 3.0',
        session: '2020–21',
        traineesTrained: '600',
        traineesPlaced: '499',
      },
      {
        id: 'day-nulm-punjab-2021-22',
        name: 'DAY-NULM',
        session: '2021–22',
        traineesTrained: '600',
        traineesPlaced: '415',
      },
      {
        id: 'rpl-3-0-punjab-2022-23',
        name: 'RPL 3.0',
        session: '2022–23',
        traineesTrained: '100',
        traineesPlaced: 'NA',
      },
    ],
  },

  /* 07. BEAUTY AND WELLNESS SSC */
  {
    id: 'beauty-and-wellness',
    name: 'Beauty and Wellness Sector Skill Council',
    shortName: 'Beauty & Wellness SSC',
    icon: Sparkles,
    projects: [
      {
        id: 'nsfdc-2018-19',
        name: 'NSFDC',
        session: '2018–19',
        traineesTrained: '80',
        traineesPlaced: '55',
      },
    ],
  },

  /* 08. MEDIA AND ENTERTAINMENT SSC */
  {
    id: 'media-and-entertainment-ssc',
    name: 'Media and Entertainment Sector Skill Council',
    shortName: 'Media & Entertainment SSC',
    icon: Clapperboard,
    projects: [
      {
        id: 'nbcfdc-media-2018-19',
        name: 'NBCFDC',
        session: '2018–19',
        traineesTrained: '50',
        traineesPlaced: '36',
      },
      {
        id: 'nskfdc-media-2019-20',
        name: 'NSKFDC',
        session: '2019–20',
        traineesTrained: '160',
        traineesPlaced: '110',
      },
    ],
  },

  /* 09. INDIAN PLUMBING SSC */
  {
    id: 'indian-plumbing-sector-skill-council',
    name: 'Indian Plumbing Sector Skill Council',
    shortName: 'Indian Plumbing SSC',
    icon: Wrench,
    projects: [
      {
        id: 'nbcfdc-ipsc-2018-19',
        name: 'NBCFDC',
        session: '2018–19',
        traineesTrained: '80',
        traineesPlaced: '57',
      },
      {
        id: 'day-nulm-ipsc-2019-20',
        name: 'DAY-NULM',
        session: '2019–20',
        traineesTrained: '360',
        traineesPlaced: '272',
      },
    ],
  },

  /* 10. PMAY CHHATTISGARH */
  {
    id: 'pmay-chhattisgarh',
    name: 'PMAY Chhattisgarh',
    shortName: 'PMAY – Chhattisgarh',
    icon: Home,
    projects: [
      {
        id: 'chhattisgarh-rpl-2018-19',
        name: 'Chhattisgarh RPL / PMAY Project',
        session: '2018–19',
        traineesTrained: '1550',
        traineesPlaced: '1121',
      },
    ],
  },

  /* 11. NIESBUD */
  {
    id: 'niesbud',
    name: 'NIESBUD',
    shortName: 'NIESBUD',
    icon: Lightbulb,
    projects: [
      {
        id: 'niesbud-edp',
        name: 'Entrepreneurship Development Programme',
        session: 'Ongoing',
        traineesTrained: '—',
        traineesPlaced: '—',
      },
    ],
  },

  /* 12. HARYANA SKILL DEVELOPMENT MISSION */
  {
    id: 'haryana-skill-development-mission',
    name: 'Haryana Skill Development Mission',
    shortName: 'Haryana Skill Development Mission',
    icon: Award,
    projects: [
      {
        id: 'hsdm-2022-23',
        name: 'HSDM',
        session: '2022–23',
        traineesTrained: '120',
        traineesPlaced: '84',
      },
    ],
  },

  /* 13. MINISTRY OF SOCIAL JUSTICE & EMPOWERMENT */
  {
    id: 'ministry-of-social-justice-and-empowerment',
    name: 'Ministry of Social Justice & Empowerment',
    shortName: 'Social Justice & Empowerment',
    icon: Scale,
    projects: [
      {
        id: 'pm-ajay-2022-23',
        name: 'PM-AJAY',
        session: '2022–23',
        traineesTrained: '600',
        traineesPlaced: '435',
      },
    ],
  },

  /* 14. PMKVY 4.0 */
  {
    id: 'pmkvy-4-0',
    name: 'PMKVY 4.0',
    shortName: 'PMKVY 4.0',
    icon: GraduationCap,
    projects: [
      {
        id: 'pmkvy-4-0-2023-24',
        name: 'PMKVY 4.0 (STT & RPL)',
        session: '2023–24',
        traineesTrained: '2576',
        traineesPlaced: 'NA',
      },
    ],
  },

  /* 15. PUNJAB HUNAR VIKAS YOJNA */
  {
    id: 'punjab-hunar-vikas-yojna',
    name: 'Punjab Hunar Vikas Yojna',
    shortName: 'Punjab Hunar Vikas Yojna',
    icon: Handshake,
    projects: [
      {
        id: 'phvy-2024-25',
        name: 'PHVY (Punjab Hunar Vikas Yojna)',
        session: '2024–25',
        traineesTrained: '60',
        traineesPlaced: '42',
      },
    ],
  },

  /* 16. DISTRICT INDUSTRIES CENTRE */
  {
    id: 'district-industries-centre',
    name: 'District Industries Centre',
    shortName: 'District Industries Centre',
    icon: Factory,
    projects: [
      {
        id: 'edp-2025-26',
        name: 'Entrepreneurship Development Programme (EDP)',
        session: '2025–26',
        traineesTrained: '150',
        traineesPlaced: 'NA',
      },
    ],
  },
];

/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

const navigationItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Projects', href: '/projects', icon: FolderKanban, isDropdown: true },
  { label: 'Our Team', href: '/team', icon: Users },
  { label: 'Gallery', href: '/gallery', icon: Images },
  { label: 'Contact', href: '/contact', icon: PhoneCall },
];

/* =========================================================
   NAVBAR
   ========================================================= */

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);
  const [mobileActiveDepartment, setMobileActiveDepartment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    setMobileProjectsOpen(false);
    setActiveDepartment(null);
    setMobileActiveDepartment(null);
    setSearchQuery('');
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const getProjectPath = (departmentId: string, projectId: string) =>
    `/projects/${departmentId}/${projectId}`;

  const closeDesktopDropdown = () => {
    setProjectsDropdownOpen(false);
    setActiveDepartment(null);
    setSearchQuery('');
  };

  const closeMobileProjects = () => {
    setMobileProjectsOpen(false);
    setMobileActiveDepartment(null);
  };

  /* =========================================================
     FILTERED DEPARTMENTS (search support)
     ========================================================= */

  const filteredDepartments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return projectDepartments;

    return projectDepartments.filter(
      (department) =>
        department.name.toLowerCase().includes(query) ||
        department.shortName.toLowerCase().includes(query) ||
        department.projects.some(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.session.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  return (
    <>
      {/* ========== TOP BAR ========== */}
      <div className="bg-[#12335f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[38px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="hidden sm:flex items-center gap-[2px]" aria-hidden="true">
                <span className="w-1 h-4 bg-[#ff9933]" />
                <span className="w-1 h-4 bg-white" />
                <span className="w-1 h-4 bg-[#138808]" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium tracking-wide text-white/90 truncate">
                Skill Development & Training Projects
              </span>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-[#ff9933] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Helpdesk
            </Link>
          </div>
        </div>
      </div>

      {/* ========== MAIN HEADER ========== */}
      <header
        id="main-sticky-header"
        className={`
          sticky top-0 z-50 w-full transition-all duration-300
          ${
            isScrolled
              ? 'bg-white/97 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.10)]'
              : 'bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)]'
          }
        `}
      >
        {/* Tricolor strip */}
        <div className="h-[3px] w-full flex">
          <div className="w-1/3 bg-[#ff9933]" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-[#138808]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between transition-all duration-300
              ${isScrolled ? 'h-[70px]' : 'h-[82px]'}
            `}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 group"
              aria-label="Doric Skills Home"
            >
              <img
                src="public/images/dmpl skills logo.png"
                alt="DORIC SKILLS"
                className="
                  block
                  w-[220px]
                  sm:w-[260px]
                  lg:w-[220px]
                  h-auto
                  object-contain
                  transition-all duration-300
                  group-hover:opacity-90
                "
              />
            </Link>

            {/* ========== DESKTOP NAV ========== */}
            <nav
              id="desktop-nav-links"
              className="hidden lg:flex items-center ml-auto mr-6 gap-1"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setProjectsDropdownOpen(true)}
                      onMouseLeave={() => {
                        setProjectsDropdownOpen(false);
                        setActiveDepartment(null);
                        setSearchQuery('');
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                        className={`
                          relative flex items-center gap-1.5 px-3.5 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-200
                          ${
                            isActive('/projects')
                              ? 'text-[#ff9933] bg-[#ff9933]/[0.08]'
                              : 'text-slate-700 hover:text-[#ff9933] hover:bg-[#ff9933]/[0.05]'
                          }
                        `}
                        aria-expanded={projectsDropdownOpen}
                        aria-haspopup="true"
                      >
                        <FolderKanban className="w-4 h-4" />
                        <span>Projects</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            projectsDropdownOpen ? 'rotate-180 text-[#ff9933]' : 'text-slate-400'
                          }`}
                        />
                        {isActive('/projects') && (
                          <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] rounded-full bg-[#ff9933]" />
                        )}
                      </button>

                      {/* ========== MEGA MENU ========== */}
                      {projectsDropdownOpen && (
                        <div className="absolute right-0 top-full pt-3 w-[760px] xl:w-[820px] 2xl:w-[860px] max-w-[calc(100vw-2rem)] z-50">
                          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.18)] overflow-hidden">
                            {/* Header */}
                            <div className="px-5 py-3.5 bg-gradient-to-r from-slate-50 to-orange-50/40 border-b border-slate-200">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#ff9933]/15 flex items-center justify-center shadow-sm">
                                  <BriefcaseBusiness className="w-4.5 h-4.5 text-[#ff9933]" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-slate-900">Project Portfolio</h3>
                                  <p className="text-[11px] text-slate-500 mt-0.5">
                                    {projectDepartments.length} Departments • Select to explore projects
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Search */}
                            <div className="px-4 pt-3 pb-2.5 border-b border-slate-100">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                  type="text"
                                  placeholder="Search departments or projects..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="
                                    w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl
                                    focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20
                                    transition-all placeholder:text-slate-400
                                  "
                                />
                              </div>
                            </div>

                            {/* Two Column Layout */}
                            <div className="flex h-[420px] xl:h-[460px] 2xl:h-[500px]">
                              {/* LEFT — Departments (scrollable) */}
                              <div className="w-[44%] border-r border-slate-200 overflow-y-auto p-2 custom-scrollbar">
                                {filteredDepartments.map((department, index) => {
                                  const isOpen = activeDepartment === department.id;
                                  const DeptIcon = department.icon;

                                  return (
                                    <button
                                      key={department.id}
                                      type="button"
                                      onClick={() =>
                                        setActiveDepartment(isOpen ? null : department.id)
                                      }
                                      onMouseEnter={() => setActiveDepartment(department.id)}
                                      className={`
                                        w-full group flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-200
                                        ${
                                          isOpen
                                            ? 'bg-[#ff9933]/[0.10] text-[#ff9933] shadow-sm'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#ff9933]'
                                        }
                                      `}
                                    >
                                      <div
                                        className={`
                                          w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-[9px] font-bold
                                          ${
                                            isOpen
                                              ? 'bg-[#ff9933] text-white'
                                              : 'bg-slate-100 text-slate-500'
                                          }
                                        `}
                                      >
                                        {String(index + 1).padStart(2, '0')}
                                      </div>

                                      <div
                                        className={`
                                          w-7 h-7 rounded-lg flex items-center justify-center shrink-0
                                          ${
                                            isOpen
                                              ? 'bg-[#ff9933]/15 text-[#ff9933]'
                                              : 'bg-slate-100 text-slate-400 group-hover:bg-[#ff9933]/10 group-hover:text-[#ff9933]'
                                          }
                                        `}
                                      >
                                        <DeptIcon className="w-3.5 h-3.5" />
                                      </div>

                                      <div className="min-w-0 flex-1">
                                        <p className="text-[11px] font-bold leading-4 line-clamp-2">
                                          {department.name}
                                        </p>
                                      </div>

                                      <span
                                        className={`
                                          text-[9px] font-semibold px-1.5 py-0.5 rounded-full shrink-0
                                          ${
                                            isOpen
                                              ? 'bg-[#ff9933]/20 text-[#ff9933]'
                                              : 'bg-slate-100 text-slate-500'
                                          }
                                        `}
                                      >
                                        {department.projects.length}
                                      </span>

                                      <ChevronRight
                                        className={`
                                          w-3.5 h-3.5 shrink-0 transition-all
                                          ${
                                            isOpen
                                              ? 'text-[#ff9933] translate-x-0.5'
                                              : 'text-slate-300'
                                          }
                                        `}
                                      />
                                    </button>
                                  );
                                })}

                                {filteredDepartments.length === 0 && (
                                  <div className="text-center py-12 px-4">
                                    <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                                    <p className="text-sm text-slate-500">
                                      No departments or projects found
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* RIGHT — Projects */}
                              <div className="w-[56%] overflow-y-auto p-3 custom-scrollbar">
                                {activeDepartment ? (
                                  (() => {
                                    const department = projectDepartments.find(
                                      (d) => d.id === activeDepartment
                                    );
                                    if (!department) return null;

                                    const DeptIcon = department.icon;

                                    return (
                                      <div className="space-y-1">
                                        {/* Selected Header */}
                                        <div className="px-3 py-3 mb-2 rounded-xl bg-gradient-to-r from-[#ff9933]/8 to-orange-50/50 border border-[#ff9933]/15">
                                          <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-[#ff9933]/15 flex items-center justify-center">
                                              <DeptIcon className="w-4 h-4 text-[#ff9933]" />
                                            </div>
                                            <div>
                                              <p className="text-[9px] font-bold uppercase tracking-wider text-[#ff9933]">
                                                Selected Department
                                              </p>
                                              <p className="text-xs font-bold text-slate-900 mt-0.5 leading-4">
                                                {department.shortName}
                                              </p>
                                              <p className="text-[10px] text-slate-500 mt-0.5">
                                                {department.projects.length} project
                                                {department.projects.length !== 1 ? 's' : ''} available
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        {department.projects.map((project, projectIndex) => (
                                          <Link
                                            key={project.id}
                                            to={getProjectPath(department.id, project.id)}
                                            onClick={closeDesktopDropdown}
                                            className="
                                              group flex items-start gap-2.5 px-3 py-3 rounded-xl
                                              hover:bg-[#ff9933]/[0.07] transition-all
                                              border border-transparent hover:border-[#ff9933]/15
                                            "
                                          >
                                            <div className="w-7 h-7 rounded-lg bg-[#ff9933]/10 text-[#ff9933] flex items-center justify-center shrink-0 text-[9px] font-bold">
                                              {String(projectIndex + 1).padStart(2, '0')}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                              <p className="text-xs font-bold text-slate-800 group-hover:text-[#ff9933] leading-4">
                                                {project.name}
                                              </p>
                                              <div className="flex items-center gap-1.5 mt-1">
                                                <CalendarDays className="w-3 h-3 text-[#ff9933] shrink-0" />
                                                <span className="text-[10px] font-semibold text-slate-500">
                                                  {project.session}
                                                </span>
                                              </div>
                                              {project.duration && (
                                                <p className="text-[9px] text-slate-400 mt-0.5">
                                                  {project.duration}
                                                </p>
                                              )}
                                            </div>

                                            <ArrowRight className="w-3.5 h-3.5 mt-1 shrink-0 text-slate-300 group-hover:text-[#ff9933] group-hover:translate-x-1 transition-all" />
                                          </Link>
                                        ))}
                                      </div>
                                    );
                                  })()
                                ) : (
                                  <div className="h-full flex flex-col items-center justify-center text-center px-6">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                                      <Building2 className="w-7 h-7 text-slate-400" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600">
                                      Select a department
                                    </p>
                                    <p className="text-[11px] text-slate-400 mt-1.5 max-w-[240px] leading-relaxed">
                                      Hover or click any department on the left to view its
                                      projects here.
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="p-3 border-t border-slate-200 bg-slate-50">
                              <Link
                                to="/projects"
                                onClick={closeDesktopDropdown}
                                className="
                                  flex items-center justify-between px-4 py-3 rounded-xl
                                  bg-white border border-slate-200
                                  hover:border-[#ff9933]/40 hover:bg-[#ff9933]/[0.04]
                                  transition-all group
                                "
                              >
                                <div>
                                  <p className="text-xs font-bold text-slate-800 group-hover:text-[#ff9933]">
                                    View All Projects
                                  </p>
                                  <p className="text-[10px] text-slate-500 mt-0.5">
                                    Explore complete project portfolio
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#ff9933] group-hover:translate-x-1 transition-all" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`
                      relative flex items-center gap-1.5 px-3.5 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-200
                      ${
                        isActive(item.href)
                          ? 'text-[#ff9933] bg-[#ff9933]/[0.08]'
                          : 'text-slate-700 hover:text-[#ff9933] hover:bg-[#ff9933]/[0.05]'
                      }
                    `}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] rounded-full bg-[#ff9933]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                id="navbar-enquire-button"
                type="button"
                onClick={() => onOpenEnquiry()}
                className="
                  group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-bold text-white
                  bg-[#ff9933] hover:bg-[#e88a22] active:bg-[#d97917]
                  shadow-[0_6px_18px_rgba(255,153,51,0.25)] hover:shadow-[0_9px_25px_rgba(255,153,51,0.32)]
                  transition-all duration-200
                "
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#ff9933] hover:bg-[#e88a22] transition-colors"
              >
                Enquire
              </button>
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-[#ff9933] hover:bg-[#ff9933]/[0.07] transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ========== MOBILE MENU ========== */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="
              lg:hidden border-t border-slate-200 bg-white
              shadow-[0_15px_35px_rgba(15,23,42,0.10)]
              max-h-[calc(100vh-110px)] overflow-y-auto
            "
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {/* Mobile Intro */}
              <div className="flex items-center gap-3 pb-4 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-[2px]">
                  <span className="w-1.5 h-7 bg-[#ff9933] rounded-full" />
                  <span className="w-1.5 h-7 bg-slate-200 rounded-full" />
                  <span className="w-1.5 h-7 bg-[#138808] rounded-full" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Doric Skills</p>
                  <p className="text-[10px] text-slate-500">Skill Development & Training</p>
                </div>
              </div>

              <div className="space-y-1">
                {navigationItems.map((item) => {
                  if (item.isDropdown) {
                    return (
                      <div key={item.label} className="border-b border-slate-100 pb-1">
                        <button
                          type="button"
                          onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                          className={`
                            w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold transition-colors
                            ${
                              isActive('/projects')
                                ? 'text-[#ff9933] bg-[#ff9933]/[0.05]'
                                : 'text-slate-700 hover:text-[#ff9933] hover:bg-[#ff9933]/[0.04]'
                            }
                          `}
                        >
                          <span className="flex items-center gap-3">
                            <FolderKanban className="w-5 h-5" />
                            Projects
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileProjectsOpen ? 'rotate-180 text-[#ff9933]' : 'text-slate-400'
                            }`}
                          />
                        </button>

                        {mobileProjectsOpen && (
                          <div className="pl-2 pr-1 pb-2 space-y-1">
                            {projectDepartments.map((department, index) => {
                              const isOpen = mobileActiveDepartment === department.id;
                              const DeptIcon = department.icon;

                              return (
                                <div key={department.id}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileActiveDepartment(isOpen ? null : department.id)
                                    }
                                    className={`
                                      w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors
                                      ${
                                        isOpen
                                          ? 'bg-[#ff9933]/[0.08] text-[#ff9933]'
                                          : 'text-slate-600 hover:text-[#ff9933] hover:bg-slate-50'
                                      }
                                    `}
                                  >
                                    <span
                                      className={`
                                        w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-[9px] font-bold
                                        ${
                                          isOpen
                                            ? 'bg-[#ff9933] text-white'
                                            : 'bg-slate-100 text-slate-500'
                                        }
                                      `}
                                    >
                                      {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <DeptIcon className="w-4 h-4 shrink-0" />

                                    <span className="flex-1 text-xs font-bold leading-4">
                                      {department.name}
                                    </span>

                                    <span className="text-[9px] text-slate-400 px-1.5 py-0.5 bg-slate-100 rounded-full">
                                      {department.projects.length}
                                    </span>

                                    <ChevronDown
                                      className={`w-3.5 h-3.5 transition-transform ${
                                        isOpen ? 'rotate-180 text-[#ff9933]' : 'text-slate-400'
                                      }`}
                                    />
                                  </button>

                                  {isOpen && (
                                    <div className="ml-5 pl-3 border-l border-slate-200 space-y-1 mt-1 mb-2">
                                      {department.projects.map((project, projectIndex) => (
                                        <Link
                                          key={project.id}
                                          to={getProjectPath(department.id, project.id)}
                                          onClick={() => {
                                            setMobileMenuOpen(false);
                                            closeMobileProjects();
                                          }}
                                          className="
                                            group flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-left
                                            hover:bg-[#ff9933]/[0.06] transition-colors
                                          "
                                        >
                                          <span className="w-6 h-6 rounded-md bg-[#ff9933]/10 text-[#ff9933] flex items-center justify-center shrink-0 text-[9px] font-bold">
                                            {String(projectIndex + 1).padStart(2, '0')}
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs font-semibold text-slate-700 group-hover:text-[#ff9933] leading-4">
                                              {project.name}
                                            </p>
                                            <div className="flex items-center gap-1 mt-1">
                                              <CalendarDays className="w-3 h-3 text-[#ff9933] shrink-0" />
                                              <span className="text-[9px] text-slate-400">
                                                {project.session}
                                              </span>
                                            </div>
                                            {project.duration && (
                                              <p className="text-[9px] text-slate-400 mt-0.5">
                                                {project.duration}
                                              </p>
                                            )}
                                          </div>
                                          <ArrowRight className="w-3.5 h-3.5 mt-1 text-slate-300 group-hover:text-[#ff9933]" />
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}

                            <Link
                              to="/projects"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                closeMobileProjects();
                              }}
                              className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-[#ff9933]"
                            >
                              View All Projects
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`
                        flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition-colors
                        ${
                          isActive(item.href)
                            ? 'text-[#ff9933] bg-[#ff9933]/[0.07]'
                            : 'text-slate-700 hover:text-[#ff9933] hover:bg-slate-50'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="
                    w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white
                    bg-[#ff9933] hover:bg-[#e88a22] transition-colors
                  "
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;