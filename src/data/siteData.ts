import {
  StatItem,
  EcosystemCard,
  ProgramItem,
  BenefitItem
} from '../types';

export * from './company';
export * from './navigation';
export * from './courses';
export * from './projects';
export * from './gallery';

/**
 * IMPACT STATISTICS
 * In strict compliance with guidelines: We use editable placeholder values (XX+)
 * so that verified company audit data can easily be inserted without code changes.
 */
export const impactStatsData: StatItem[] = [
  {
    id: 'stat-candidates',
    value: 'XX+',
    numericTarget: 2500,
    suffix: '+',
    label: 'Candidates Trained',
    description: 'Youth and workforce aspirants engaged in vocational & capacity modules (Verified count to be published).',
    isPlaceholder: true
  },
  {
    id: 'stat-programs',
    value: 'XX+',
    numericTarget: 18,
    suffix: '+',
    label: 'Training Programs',
    description: 'Outcome-oriented curricula developed across digital, service, and vocational job roles.',
    isPlaceholder: true
  },
  {
    id: 'stat-centres',
    value: 'XX+',
    numericTarget: 12,
    suffix: '+',
    label: 'Training Centres',
    description: 'Institutional training labs, practical workshop setups, and community learning nodes.',
    isPlaceholder: true
  },
  {
    id: 'stat-districts',
    value: 'XX+',
    numericTarget: 8,
    suffix: '+',
    label: 'Districts / Locations',
    description: 'Target outreach spanning priority regional districts and community clusters.',
    isPlaceholder: true
  }
];

/**
 * GOVERNMENT & SKILL DEVELOPMENT ECOSYSTEM
 * CRITICAL COMPLIANCE NOTE:
 * These entities represent the national skill development framework and public standards
 * across India. They are presented here to illustrate national ecosystem alignment,
 * curriculum benchmarks, and qualifications frameworks — NOT as confirmed direct bilateral
 * partnerships or government endorsements unless officially declared.
 */
export const ecosystemData: EcosystemCard[] = [
  {
    id: 'ecosystem-msme',
    name: 'Ministry of MSME',
    tagline: 'Micro, Small & Medium Enterprises Ecosystem',
    description: 'Fostering grassroots entrepreneurship, local enterprise development, and cluster-based vocational capabilities across Indian industrial sectors.',
    contextNote: 'Programs structured to build operational and management talent for micro and medium enterprises across India.',
    linkText: 'Explore MSME Frameworks',
    badge: 'Enterprise Ecosystem'
  },
  {
    id: 'ecosystem-skill-india',
    name: 'Skill India Mission',
    tagline: 'National Skill Development Ecosystem',
    description: 'The national flagship drive to empower Indian youth with industry-relevant skill training that enhances employment and self-reliance.',
    contextNote: 'Curriculum structures aligned with national vocational standards and market-responsive competency requirements.',
    linkText: 'Learn About Skill India',
    badge: 'National Mission'
  },
  {
    id: 'ecosystem-nsdc',
    name: 'NSDC Guidelines',
    tagline: 'National Skill Development Corporation Framework',
    description: 'Promoting skill development by catalyzing creation of large, quality, and for-profit vocational training institutions and sector skill councils.',
    contextNote: 'Training delivery benchmarks structured around sector skill council occupational standards (NOS/QP).',
    linkText: 'View Standards Alignment',
    badge: 'Industry Standards'
  },
  {
    id: 'ecosystem-ncvet',
    name: 'NCVET Alignment',
    tagline: 'National Council for Vocational Education & Training',
    description: 'The overarching vocational education regulator ensuring quality assurance, qualification pack approvals, and assessment integrity in India.',
    contextNote: 'Academic rigor and practical test models designed in accordance with national qualifications framework principles.',
    linkText: 'Review Quality Frameworks',
    badge: 'Regulatory Framework'
  }
];

/**
 * OUR FOUR CORE PROGRAM CATEGORIES
 */
export const programsData: ProgramItem[] = [
  {
    id: 'prog-skill-dev',
    title: 'Skill Development',
    slug: 'skill-development',
    icon: 'Sparkles',
    description: 'Broad-based, future-ready foundational skills in digital technologies, data management, and computer applications.',
    focusAreas: [
      'Digital Literacy & Computing',
      'Data Operations & Spreadsheets',
      'Workplace Communication'
    ]
  },
  {
    id: 'prog-vocational',
    title: 'Vocational Training',
    slug: 'vocational-training',
    icon: 'Wrench',
    description: 'High-utility, hands-on trades and service disciplines emphasizing 70% laboratory and workshop practice.',
    focusAreas: [
      'Service & Salon Operations',
      'Retail Counter Management',
      'Practical Field Applications'
    ]
  },
  {
    id: 'prog-govt-projects',
    title: 'Government Skill Projects',
    slug: 'government-projects',
    icon: 'Landmark',
    description: 'Specialized institutional program delivery aligned with state and central skill initiatives and CSR mandates.',
    focusAreas: [
      'District-Level Batch Deployments',
      'Standardized Qualification Frameworks',
      'Transparent Attendance & Auditing'
    ]
  },
  {
    id: 'prog-industry',
    title: 'Industry-Oriented Training',
    slug: 'industry-oriented-training',
    icon: 'Briefcase',
    description: 'Market-responsive short-term training designed to match real hiring requirements of corporate and commercial employers.',
    focusAreas: [
      'Visual & Graphic Production',
      'Modern Web Technologies',
      'Customer Relationship Etiquette'
    ]
  }
];

/**
 * WHY DMPL SKILLS - SIX CORE PILLARS
 * Transparent, realistic institutional values with no exaggerated guarantees.
 */
export const whyDMPLData: BenefitItem[] = [
  {
    id: 'why-trainers',
    title: 'Experienced Trainers',
    description: 'Instruction delivered by seasoned subject-matter practitioners with hands-on industrial and classroom training pedigrees.',
    icon: 'Users'
  },
  {
    id: 'why-relevant',
    title: 'Industry-Relevant Training',
    description: 'Coursework continuously mapped against actual job-role requirements, digital software tools, and practical operational standards.',
    icon: 'Target'
  },
  {
    id: 'why-practical',
    title: 'Practical Learning',
    description: 'Laboratory-first pedagogy with realistic case studies, simulated office/retail environments, and interactive capstone exercises.',
    icon: 'Code'
  },
  {
    id: 'why-govt-aligned',
    title: 'Government-Aligned Programs',
    description: 'Curricula structured in harmony with national skill qualification benchmarks, ensuring recognized competency outcomes.',
    icon: 'ShieldCheck'
  },
  {
    id: 'why-career',
    title: 'Career-Focused Approach',
    description: 'Dedicated focus on interview preparation, resume creation, professional ethics, workplace communication, and confidence building.',
    icon: 'Compass'
  },
  {
    id: 'why-infra',
    title: 'Modern Training Infrastructure',
    description: 'Clean, well-equipped computer laboratories, multimedia classrooms, and dedicated practical trade workshops designed for focused learning.',
    icon: 'Building2'
  }
];

/**
 * FREQUENTLY ASKED QUESTIONS (GLOBAL)
 */
export const generalFaqs = [
  {
    question: 'How do I apply for a training program at DMPL Skills?',
    answer: 'You can submit an enquiry through our online portal by clicking "Enquire Now" or by visiting our Contact page. Our program counselor will contact you to discuss eligibility, upcoming batch schedules, and center locations.'
  },
  {
    question: 'What are the minimum qualifications required to enroll?',
    answer: 'Eligibility varies by program. Most foundational digital and vocational courses require 8th, 10th, or 12th pass qualifications. Detailed prerequisites are listed on each individual course page.'
  },
  {
    question: 'Are study materials and lab access included?',
    answer: 'Yes, all enrolled candidates receive structured learner workbooks, digital study materials, and access to dedicated computer lab workstations during their training hours.'
  },
  {
    question: 'Does DMPL Skills guarantee employment?',
    answer: 'DMPL Skills focuses on high-quality skill building, portfolio creation, and interview readiness. While we provide career counseling, industry exposure, and placement guidance, we maintain a transparent, ethical policy and do not make false claims of guaranteed placement.'
  },
  {
    question: 'Can government or CSR bodies partner with DMPL Skills for institutional skilling?',
    answer: 'Yes. DMPL Skills collaborates with institutional stakeholders, CSR foundations, and government departments for skill project delivery. Please submit an institutional enquiry through our Contact page.'
  }
];
