export interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  children?: {
    title: string;
    description: string;
    href: string;
    iconName?: string;
  }[];
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  description: string;
  isPlaceholder: boolean;
}

export interface EcosystemCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  contextNote: string;
  linkText: string;
  badge: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  focusAreas: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CurriculumModule {
  weekOrModule: string;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category:
    | 'IT & Digital'
    | 'Management & Retail'
    | 'Services & Wellness'
    | 'Vocational Skills';
  shortDescription: string;
  overview: string;
  heroImage: string;
  duration: string;
  eligibility: string;
  mode:
    | 'Classroom / In-Person'
    | 'Blended'
    | 'Practical Workshop';
  level:
    | 'Foundational'
    | 'Intermediate'
    | 'Advance Vocational';
  location: string;
  certification: string;
  whoShouldApply: string[];
  learningOutcomes: string[];
  curriculum: CurriculumModule[];
  skillsGained: string[];
  careerOpportunities: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  isSampleCourse: boolean;
}

/* =========================================================
   PROJECT
========================================================= */

export interface Project {
  /**
   * Unique project identifier.
   */
  id: string;

  /**
   * URL-friendly project identifier.
   */
  slug: string;

  /**
   * Department / Ministry identifier used in
   * Projects → Department → Project navigation.
   */
  departmentId: string;

  /**
   * Scheme / Project name exactly as recorded
   * in the source project records.
   */
  name: string;

  /**
   * Ministry / department / organisation exactly as
   * recorded in the source project records.
   */
  organization: string;

  /**
   * Location only when supported by the source data.
   */
  location: string;

  /**
   * Financial year / session.
   */
  year: string;

  /**
   * Verified number of trainees trained.
   */
  traineesTrained?: number;

  /**
   * Verified number of trainees placed.
   *
   * null means the source does not provide a
   * numeric placement figure.
   */
  traineesPlaced?: number | null;

  /**
   * Job roles / trades exactly as recorded
   * in the source project records.
   */
  jobRoles?: string[];

  /**
   * Textual placement status used when the source
   * contains values such as N.A. or Assessment Pending.
   */
  placementStatus?: string;

  /**
   * Current project status.
   */
  status:
    | 'Project'
    | 'In Planning'
    | 'Active Pipeline'
    | 'Placeholder Notice';

  /**
   * Project objective / description.
   */
  objective: string;

  /**
   * Existing project role / training description.
   *
   * Kept for compatibility with the current
   * Project Detail Page.
   */
  role: string;

  /**
   * Existing impact summary.
   *
   * Kept for compatibility with the current
   * Project Detail Page.
   */
  impactMetrics: string;

  /**
   * Only verified / provided project images
   * should be added here.
   */
  galleryImages: string[];

  /**
   * True only when the record is intentionally
   * marked as sample / placeholder content.
   */
  isPlaceholder: boolean;

  /**
   * Optional explanation for placeholder records.
   */
  placeholderNotice?: string;
}

/* =========================================================
   GALLERY
========================================================= */

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Training'
    | 'Workshops'
    | 'Events'
    | 'Certificates'
    | 'Infrastructure';
  imageUrl: string;
  caption: string;
  datePlaceholder: string;
  locationPlaceholder: string;
}

/* =========================================================
   COMPANY INFORMATION
========================================================= */

export interface CompanyInfo {
  name: string;
  tagline: string;
  registeredName: string;
  headquarters: string;
  addressPlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  workingHours: string;
  aboutSnippet: string;
  mission: string;
  vision: string;
  approach: string[];
  expertise: string[];
  timeline: {
    year: string;
    title: string;
    detail: string;
  }[];
  leadershipNote: string;
}