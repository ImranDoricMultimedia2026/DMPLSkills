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
  AtSign
  
} from 'lucide-react';
import { projectsData } from '../data/projects';


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

const departmentMeta: Record<
  string,
  {
    name: string;
    shortName: string;
    icon: React.ElementType;
  }
> = {
  'national-skill-development-mission': {
    name: 'National Skill Development Mission',
    shortName: 'National Skill Development Mission',
    icon: GraduationCap,
  },

  'assam-state-rural-livelihood-mission': {
    name: 'Assam State Rural Livelihood Mission',
    shortName: 'ASRLM',
    icon: TreePine,
  },

  'uttar-pradesh-skill-development-mission': {
    name: 'Uttar Pradesh Skill Development Mission',
    shortName: 'UPSDM',
    icon: Landmark,
  },

  'himayat-mission-management-unit': {
    name: 'Himayat Mission Management Unit',
    shortName: 'Himayat',
    icon: Target,
  },

  'ministry-of-minority-affairs': {
    name: 'Ministry of Minority Affairs',
    shortName: 'Ministry of Minority Affairs',
    icon: HeartHandshake,
  },

  'punjab-skill-development-mission': {
    name: 'Punjab Skill Development Mission',
    shortName: 'Punjab Skill Development Mission',
    icon: Award,
  },

  'beauty-and-wellness-sector-skill-council': {
    name: 'Beauty and Wellness Sector Skill Council',
    shortName: 'Beauty & Wellness',
    icon: Sparkles,
  },

  'media-and-entertainment-sector-skill-council': {
    name: 'Media and Entertainment Sector Skill Council',
    shortName: 'Media & Entertainment',
    icon: Clapperboard,
  },

  'indian-plumbing-sector-skill-council': {
    name: 'Indian Plumbing Sector Skill Council (PSDM)',
    shortName: 'Indian Plumbing',
    icon: Wrench,
  },

  'pmay-chhattisgarh': {
    name: 'Pradhan Mantri Awas Yojna-Chhattisgarh',
    shortName: 'PMAY Chhattisgarh',
    icon: Building2,
  },

  niesbud: {
    name: 'National Institute for Entrepreneurship and Small Business Development',
    shortName: 'NIESBUD',
    icon: Lightbulb,
  },

  'haryana-skill-development-mission': {
    name: 'Haryana Skill Development Mission',
    shortName: 'HSDM',
    icon: GraduationCap,
  },

  'ministry-of-social-justice-empowerment': {
    name: 'Ministry of Social Justice and Empowerment',
    shortName: 'Social Justice & Empowerment',
    icon: Scale,
  },

  'pmkvy-4-0': {
    name: 'PMKVY 4.0',
    shortName: 'PMKVY 4.0',
    icon: GraduationCap,
  },

  'punjab-hunar-vikas-yojna': {
    name: 'Punjab Hunar Vikas Yojna',
    shortName: 'PHVY',
    icon: Handshake,
  },

  'district-industries-centre': {
    name: 'District Industries Centre',
    shortName: 'DIC',
    icon: Factory,
  },
};

const projectDepartments: ProjectDepartment[] = Object.values(
  projectsData.reduce<Record<string, ProjectDepartment>>((acc, project) => {
    const meta = departmentMeta[project.departmentId];

    if (!meta) return acc;

    if (!acc[project.departmentId]) {
      acc[project.departmentId] = {
        id: project.departmentId,
        name: meta.name,
        shortName: meta.shortName,
        icon: meta.icon,
        projects: [],
      };
    }

    acc[project.departmentId].projects.push({
      id: project.id,
      name: project.name,
      session: project.year,
      traineesTrained:
        project.traineesTrained !== undefined
          ? project.traineesTrained.toLocaleString()
          : '—',
      traineesPlaced:
        project.traineesPlaced !== undefined && project.traineesPlaced !== null
          ? project.traineesPlaced.toLocaleString()
          : project.placementStatus ?? '—',
    });

    return acc;
  }, {})
);

/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

const navigationItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: AtSign },
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
              aria-label="DMPL Skills Home"
            >
            <img
  src="/Images/dmpl-skills.png"
  alt="DMPL SKILLS"
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
                  <p className="text-xs font-bold text-slate-900">DMPL Skills</p>
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