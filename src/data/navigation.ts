import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Programs',
    href: '/#programs',
    isDropdown: true,
    children: [
      {
        title: 'Skill Development',
        description: 'Comprehensive capacity building programs tailored for entry-level professionals.',
        href: '/courses?category=IT+%26+Digital',
        iconName: 'GraduationCap'
      },
      {
        title: 'Vocational Training',
        description: 'Hands-on practical crafts, applied vocational trades, and job-ready curricula.',
        href: '/courses?category=Vocational+Skills',
        iconName: 'Wrench'
      },
      {
        title: 'Government Projects',
        description: 'Institutional programs aligned with state and central skill ecosystem goals.',
        href: '/projects',
        iconName: 'Landmark'
      },
      {
        title: 'Industry-Oriented Training',
        description: 'Market-aligned courses with corporate tools and modern workplace practices.',
        href: '/courses?category=Management+%26+Retail',
        iconName: 'Briefcase'
      },
      {
        title: 'Certification',
        description: 'Structured assessment frameworks validating practical and theoretical mastery.',
        href: '/courses',
        iconName: 'Award'
      }
    ]
  },
  { label: 'Courses', href: '/courses' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' }
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Courses', href: '/courses' },
  { label: 'Projects & Initiatives', href: '/projects' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Contact & Support', href: '/contact' }
];

export const footerProgramLinks = [
  { label: 'Skill Development Initiatives', href: '/courses?category=IT+%26+Digital' },
  { label: 'Vocational Education Tracks', href: '/courses?category=Vocational+Skills' },
  { label: 'Government & Institutional Projects', href: '/projects' },
  { label: 'Retail & Service Management', href: '/courses?category=Management+%26+Retail' },
  { label: 'Digital Literacy & Modern Tools', href: '/courses' }
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' }
];
