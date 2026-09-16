import { Course } from '../types';

/**
 * DMPL SKILLS COURSE REPOSITORY
 * All courses are stored in this centralized data file.
 * To add, modify, or remove courses, edit the array below.
 * Notice: All entries are marked as sample/curriculum templates until verified by DMPL Skills.
 */
export const coursesData: Course[] = [
  {
    id: 'course-graphic-design',
    slug: 'graphic-design-visual-communication',
    title: 'Graphic Design & Visual Communication',
    category: 'IT & Digital',
    shortDescription: 'Master visual layout principles, corporate branding, digital publishing, and creative software workflows.',
    overview: 'This practical skill development program prepares participants for modern creative studios, marketing agencies, and media houses. Students learn visual composition, typography, color theory, image manipulation, vector illustration, and print preparation through hands-on project assignments.',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months (360 Hours)',
    eligibility: '10th / 12th Pass or Equivalent (Basic Computer Literacy Recommended)',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Training Labs / Partner Centres',
    certification: 'DMPL Skills Certificate of Vocational Competency in Graphic Design',
    whoShouldApply: [
      'Creative individuals seeking employment in advertising, publishing, or social media design',
      'Fresh high school or college graduates looking to build high-demand visual design skills',
      'Small business owners or freelancers aiming to create their own marketing assets',
      'Candidates transitioning from non-technical disciplines into digital creative careers'
    ],
    learningOutcomes: [
      'Design professional commercial logos, brand identities, flyers, brochures, and banners',
      'Perform precision photo retouching, color correction, and image compositing',
      'Produce production-ready print artwork adhering to pre-press offset & digital standards',
      'Create engaging social media graphics, infographics, and digital presentation decks',
      'Assemble an industry-ready personal design portfolio with 5+ complete client case studies'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Design Foundations & Visual Hierarchy',
        topics: [
          'Elements of design: Line, Shape, Color, Texture, Space, and Form',
          'Color psychology and color harmony for print and screen',
          'Typography fundamentals, pairing rules, and readability',
          'Understanding aspect ratios, grid systems, and visual balance'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Raster Graphics & Digital Imaging',
        topics: [
          'Workspace configuration, canvas setup, and resolution guidelines (DPI vs PPI)',
          'Non-destructive photo editing, masks, adjustment layers, and pen tool precision',
          'Commercial product retouching, background removal, and cosmetic corrections',
          'Filters, blending modes, and creative visual effects'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Vector Illustration & Brand Identity',
        topics: [
          'Vector vs Raster graphics: Scalability and path mathematics',
          'Logo design principles, conceptual sketching, and vectorization',
          'Creating icon sets, infographics, and corporate stationery packages',
          'Packaging design layouts, die-lines, and typography on curves'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Publication Layouts & Pre-Press Production',
        topics: [
          'Multi-page publication design: Magazines, annual reports, and brochures',
          'Master pages, character/paragraph styles, and bleed/slug margins',
          'Pre-press flight checks, CMYK spot colors, PDF/X export standards',
          'Portfolio compilation, client presentation techniques, and freelance basics'
        ]
      }
    ],
    skillsGained: [
      'Visual Layout & Composition',
      'Vector Graphics Creation',
      'Digital Image Retouching',
      'Brand Identity Development',
      'Print Production & Pre-Press',
      'Client Presentation'
    ],
    careerOpportunities: [
      'Junior Graphic Designer',
      'Digital Media Executive',
      'Creative Production Assistant',
      'Social Media Visual Creator',
      'Print & Pre-Press Technician'
    ],
    faqs: [
      {
        question: 'Do I need prior drawing or artistic skills to join this course?',
        answer: 'No prior artistic background is mandatory. The program begins with fundamental design principles and software tools, making it accessible to beginners with basic computer knowledge.'
      },
      {
        question: 'Are computers and software provided at the training center?',
        answer: 'Yes, all DMPL Skills training classrooms are equipped with dedicated workstation computers and necessary design tools for hands-on classroom lab sessions.'
      },
      {
        question: 'Will I receive a certificate upon course completion?',
        answer: 'Students who successfully complete the required classroom hours, submit all portfolio projects, and clear the practical evaluation will receive the official Certificate of Vocational Competency.'
      }
    ],
    isSampleCourse: true
  },
  {
    id: 'course-web-design',
    slug: 'web-design-frontend-development',
    title: 'Web Design & Frontend Development',
    category: 'IT & Digital',
    shortDescription: 'Build responsive, modern websites using semantic HTML5, modern CSS3 styling, and foundational JavaScript.',
    overview: 'A career-oriented vocational course designed to empower learners with practical web authoring capabilities. Students learn to translate visual designs into responsive, cross-browser web pages with clean code, search engine awareness, and accessible web standards.',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months (360 Hours)',
    eligibility: '12th Pass or Equivalent with Basic English & Computer Familiarity',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Computer Lab Facilities',
    certification: 'DMPL Skills Certificate in Web Design & UI Implementation',
    whoShouldApply: [
      'Aspirants wanting to build an entry-level career in web development and design',
      'Graphic designers seeking to expand their technical capabilities into web interfaces',
      'Job seekers preparing for IT/ITES and digital service sector roles',
      'Students looking for practical vocational coding skills'
    ],
    learningOutcomes: [
      'Write semantic, SEO-friendly HTML5 markup adhering to W3C standards',
      'Style complex layouts with modern CSS Flexbox and CSS Grid frameworks',
      'Implement mobile-first responsive design that adapts smoothly to smartphones, tablets, and desktops',
      'Add client-side interactivity using modern JavaScript event handling and DOM manipulation',
      'Publish live websites using domain configuration, FTP, and cloud hosting platforms'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Web Architecture & Semantic HTML5',
        topics: [
          'How the web works: DNS, HTTP/HTTPS, Web Servers, and Browsers',
          'Document structure, head elements, meta tags, and accessibility attributes',
          'Semantic tags: header, nav, main, article, section, aside, footer',
          'Forms, input validations, media embedding (audio, video, SVG)'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Modern CSS3 & Responsive Design',
        topics: [
          'CSS Box Model, specificity, cascade, and modern units (rem, vh, clamp)',
          'CSS Flexbox for 1D navigation and component alignment',
          'CSS Grid for 2D editorial and dashboard layout structures',
          'Media queries, fluid typography, and mobile-first responsive patterns'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Interactive Web with JavaScript',
        topics: [
          'JavaScript fundamentals: Variables, data types, functions, and control flow',
          'Document Object Model (DOM) selection, class toggling, and event listeners',
          'Building UI components: Mobile navigation drawer, modals, accordions, and sliders',
          'Basic form validation and user feedback states'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Deployment & Portfolio Development',
        topics: [
          'Version control basics with Git and collaborative project management',
          'Website performance optimization (image compression, minification, caching)',
          'Web hosting, DNS pointing, and SSL certificate deployment',
          'Building a personal developer portfolio showcasing 3 complete client websites'
        ]
      }
    ],
    skillsGained: [
      'HTML5 Semantic Markup',
      'CSS3 Flexbox & Grid',
      'Responsive Web Design',
      'JavaScript DOM Manipulation',
      'Web Accessibility (WCAG)',
      'Site Deployment & Hosting'
    ],
    careerOpportunities: [
      'Junior Web Designer',
      'Frontend Assistant Developer',
      'Website Maintenance Executive',
      'UI Layout Specialist',
      'Content Management Specialist'
    ],
    faqs: [
      {
        question: 'Do I need prior programming experience?',
        answer: 'No prior programming experience is necessary. The curriculum starts with foundational HTML before progressing to stylesheets and JavaScript logic.'
      },
      {
        question: 'Will we build real websites during the training?',
        answer: 'Yes, every participant builds at least 3 distinct multi-page responsive websites, culminating in a live hosted portfolio.'
      }
    ],
    isSampleCourse: true
  },
  {
    id: 'course-digital-marketing',
    slug: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    category: 'IT & Digital',
    shortDescription: 'Acquire practical expertise in search optimization, social media promotion, content planning, and analytics.',
    overview: 'This comprehensive course equips participants with practical digital marketing skills essential for modern enterprises. Learners master search engine optimization (SEO), performance marketing fundamentals, social media channel management, email communication, and data-driven marketing analysis.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months (300 Hours)',
    eligibility: '12th Pass or Any Degree in Arts/Commerce/Science',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Training Labs',
    certification: 'DMPL Skills Certificate in Digital Marketing Fundamentals',
    whoShouldApply: [
      'Graduates wanting to start careers in digital agency or in-house marketing teams',
      'Entrepreneurs wanting to generate organic and paid leads for local businesses',
      'Sales and marketing staff aiming to upgrade to digital channels',
      'Content writers and creative professionals wanting analytical marketing acumen'
    ],
    learningOutcomes: [
      'Conduct keyword research and implement on-page and technical SEO improvements',
      'Plan and execute organic social media campaigns across major commercial platforms',
      'Understand digital advertising fundamentals (CPC, CPM, CTR, ROAS)',
      'Create content calendars, promotional email newsletters, and campaign briefs',
      'Interpret Google Analytics reports to identify user conversion paths'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Search Engine Optimization (SEO)',
        topics: [
          'Search engine mechanics: Crawling, indexing, and ranking algorithms',
          'Keyword research tools, search intent analysis, and competitor discovery',
          'On-page optimization: Title tags, meta descriptions, headings, image alt text',
          'Local SEO: Google Business Profile optimization and local directory citations'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Social Media Strategy & Content Creation',
        topics: [
          'Platform-specific strategies for LinkedIn, Instagram, Facebook, and YouTube',
          'Editorial calendar planning, copywriting for engagement, and hashtag strategy',
          'Basic design of promotional graphics and short-form video storyboards',
          'Community management, comment moderation, and audience engagement'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Paid Media & Performance Fundamentals',
        topics: [
          'Introduction to Search Engine Marketing (SEM) and paid social advertising',
          'Campaign structures: Ad groups, audience targeting, and budget allocation',
          'Ad copywriting, headline variations, and compelling calls-to-action',
          'Tracking conversions, pixel setup, and landing page optimization'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Email Marketing & Marketing Analytics',
        topics: [
          'Email subscriber list building, segmentation, and anti-spam regulations',
          'Designing responsive email newsletters and automated welcome sequences',
          'Key metrics: Open rates, CTR, bounce rates, and unsubscribe tracking',
          'Google Analytics 4 setup, dashboard reporting, and presenting campaign ROI'
        ]
      }
    ],
    skillsGained: [
      'Search Engine Optimization (SEO)',
      'Social Media Management',
      'Content Strategy & Copywriting',
      'Campaign Analytics & Reporting',
      'Email Marketing Automation',
      'Digital Lead Generation'
    ],
    careerOpportunities: [
      'Digital Marketing Executive',
      'SEO Junior Specialist',
      'Social Media Coordinator',
      'Content Marketing Associate',
      'Email Marketing Assistant'
    ],
    faqs: [
      {
        question: 'Are paid advertising budgets required during class?',
        answer: 'No, students work with simulated campaigns, sandbox environments, and real organic brand case studies without incurring ad spend.'
      }
    ],
    isSampleCourse: true
  },
  {
    id: 'course-data-entry',
    slug: 'data-entry-office-automation',
    title: 'Data Entry & Office Automation',
    category: 'Management & Retail',
    shortDescription: 'Master fast touch-typing, spreadsheet calculations, database record entry, and executive office documentation.',
    overview: 'A structured foundational course preparing candidates for administrative, back-office, and data handling roles across government departments, IT/ITES firms, banking sectors, and commercial offices. Emphasis is placed on speed, accuracy, spreadsheet manipulation, and confidential file handling.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    duration: '2 Months (240 Hours)',
    eligibility: '10th Pass or Equivalent',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Center Computer Centers',
    certification: 'DMPL Skills Certificate of Proficiency in Data Entry & Office Tools',
    whoShouldApply: [
      'Matriculation and higher secondary certificate holders seeking formal employment',
      'Candidates preparing for clerical or computer operator examinations',
      'Job seekers targeting administrative assistant and back-office executive positions'
    ],
    learningOutcomes: [
      'Achieve typing speeds of 30-40 words per minute with 95%+ accuracy in English',
      'Format professional office letters, reports, agendas, and circulars',
      'Build spreadsheets using VLOOKUP/XLOOKUP, pivot tables, and conditional formatting',
      'Manage electronic archives, cloud filing systems, and secure document retrieval',
      'Operate office hardware including scanners, barcode readers, and multi-function printers'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Keyboarding Proficiency & Touch-Typing',
        topics: [
          'Ergonomics, finger placement, and ten-key numeric keypad speed drills',
          'Daily progressive speed and accuracy monitoring',
          'Proofreading marks, error identification, and correction guidelines'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Word Processing & Official Correspondence',
        topics: [
          'Document formatting, indentation, tables, headers, footers, and page numbers',
          'Mail merge for bulk official communications and certificate generation',
          'Creating templates for purchase orders, invoices, and meeting minutes'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Spreadsheets & Data Management',
        topics: [
          'Data entry validation, duplicate removal, sorting, and advanced filtering',
          'Essential mathematical and logical formulas (SUM, AVERAGE, IF, COUNTIF)',
          'Lookup formulas (VLOOKUP, HLOOKUP, XLOOKUP) and cell referencing',
          'Summarizing datasets with Pivot Tables, charts, and slicers'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Office Administration & Cyber Safety',
        topics: [
          'Electronic filing systems, folder hierarchies, and cloud drive backup',
          'Handling official email, calendar scheduling, and meeting room coordination',
          'Data confidentiality, password hygiene, and protection against phishing'
        ]
      }
    ],
    skillsGained: [
      'Touch-Typing Speed & Accuracy',
      'Advanced Spreadsheet Formulations',
      'Office Document Formatting',
      'Database Record Maintenance',
      'Digital Record Archiving',
      'Workplace Data Confidentiality'
    ],
    careerOpportunities: [
      'Data Entry Operator (DEO)',
      'Office Administrative Assistant',
      'Computer Operator',
      'Front Desk / Back Office Associate',
      'Records Clerk'
    ],
    faqs: [
      {
        question: 'Will there be regular typing speed tests?',
        answer: 'Yes, students undergo daily speed tracking sessions to steadily build muscle memory and reach industry benchmark accuracy.'
      }
    ],
    isSampleCourse: true
  },
  {
    id: 'course-retail',
    slug: 'retail-customer-service-operations',
    title: 'Retail & Customer Service Operations',
    category: 'Management & Retail',
    shortDescription: 'Develop retail store floor operations, point-of-sale management, inventory control, and customer relationship skills.',
    overview: 'This comprehensive vocational training program prepares candidates for fast-growing organized retail, supermarkets, apparel showrooms, and customer relationship centers. The program blends customer psychology, merchandise display, billing point-of-sale systems, and service etiquette.',
    heroImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months (320 Hours)',
    eligibility: '10th / 12th Pass or Equivalent',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Practical Labs',
    certification: 'DMPL Skills Certificate in Retail Operations & Customer Relations',
    whoShouldApply: [
      'Young job aspirants seeking customer-facing careers in retail stores and malls',
      'Individuals aiming for frontline sales and store inventory positions',
      'Candidates looking to improve communication, billing, and retail merchandising skills'
    ],
    learningOutcomes: [
      'Manage end-to-end customer interactions with professional courtesy and active listening',
      'Operate retail Point of Sale (POS) software, barcode scanners, and payment gateways',
      'Execute visual merchandising, shelf stocking, and Planogram guidelines',
      'Perform inventory stock audits, expiry inspections, and shrinkage prevention',
      'Handle customer grievances, product returns, and post-purchase follow-ups effectively'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Introduction to Organized Retail Ecosystem',
        topics: [
          'Overview of retail sectors: Hypermarkets, specialty stores, fashion, and electronics',
          'Retail store organizational hierarchy and departmental roles',
          'Understanding consumer purchasing journeys and touchpoints'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Customer Service & Professional Communication',
        topics: [
          'Greeting etiquette, body language, and voice modulation',
          'Needs assessment questioning techniques and consultative selling',
          'Cross-selling, up-selling, and closing customer transactions',
          'Handling dissatisfied customers and conflict de-escalation protocols'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Store Operations & POS Systems',
        topics: [
          'Cash register operations, debit/credit cards, UPI, and gift vouchers',
          'Invoicing, discounts, loyalty program enrolment, and day-end cash reconciliation',
          'Stock inwarding, barcode labeling, shelf replenishment, and stock rotation (FIFO)'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Visual Merchandising, Safety & Compliance',
        topics: [
          'Creating compelling window displays, promotional end-caps, and signage',
          'Loss prevention: Identifying shoplifting risks, internal shrinkage, and security protocols',
          'Fire safety, workplace emergency readiness, and hygiene standards'
        ]
      }
    ],
    skillsGained: [
      'Customer Relationship Etiquette',
      'POS & Cash Management Systems',
      'Visual Merchandising',
      'Inventory Stock Control',
      'Sales Negotiation & Upselling',
      'Conflict Resolution'
    ],
    careerOpportunities: [
      'Retail Sales Associate (RSA)',
      'Customer Relationship Executive',
      'Cashier & Billing Associate',
      'Store Inventory Clerk',
      'Floor Supervisor Assistant'
    ],
    faqs: [
      {
        question: 'Are there practical role-playing exercises?',
        answer: 'Yes, students participate in simulated retail counter scenarios, billing practice drills, and customer handling role-plays.'
      }
    ],
    isSampleCourse: true
  },
  {
    id: 'course-beauty-wellness',
    slug: 'beauty-wellness-consultant',
    title: 'Beauty & Wellness Assistant',
    category: 'Services & Wellness',
    shortDescription: 'Learn foundational skincare, professional salon hygiene, hair styling basics, and beauty therapy techniques.',
    overview: 'A structured skill development course imparting hygienic salon practices, client consultation etiquette, skincare therapies, basic hair design, and wellness service routines. The program emphasizes safety standards, professional cosmetic equipment handling, and entrepreneurship readiness.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months (360 Hours)',
    eligibility: '8th / 10th Pass or Equivalent',
    mode: 'Classroom / In-Person',
    level: 'Foundational',
    location: 'Designated DMPL Skills Practical Salon Training Labs',
    certification: 'DMPL Skills Certificate of Vocational Competency in Beauty & Wellness',
    whoShouldApply: [
      'Aspirants desiring to launch a career in professional salons, spas, or wellness clinics',
      'Women seeking self-employment and home salon entrepreneurship opportunities',
      'Candidates passionate about personal grooming, aesthetic arts, and wellness therapy'
    ],
    learningOutcomes: [
      'Maintain rigorous salon sanitization, sterilization, and equipment hygiene',
      'Perform professional skin analysis and recommend suitable cleansing therapies',
      'Execute foundational hair washing, conditioning, blow-drying, and basic styling',
      'Provide manicure, pedicure, facial, and eyebrow shaping services safely',
      'Understand client consultation records, pricing structures, and retail product advisory'
    ],
    curriculum: [
      {
        weekOrModule: 'Module 1',
        title: 'Salon Hygiene, Safety & Client Consultation',
        topics: [
          'Sterilization of tools, chemical safety protocols, and personal protective wear',
          'Skin physiology basics, anatomy, and identifying skin conditions',
          'Client intake forms, consultation etiquette, and allergy patch test procedures'
        ]
      },
      {
        weekOrModule: 'Module 2',
        title: 'Skincare & Facial Therapies',
        topics: [
          'Techniques of deep cleansing, gentle exfoliation, and steam treatments',
          'Facial massage movements (effleurage, petrissage, tapotement)',
          'Face pack applications for oily, dry, sensitive, and combination skin types',
          'Threading, waxing, and hair removal techniques with post-care cooling'
        ]
      },
      {
        weekOrModule: 'Module 3',
        title: 'Nail Care & Grooming Services',
        topics: [
          'Nail structure, cuticle care, shaping, and buffing techniques',
          'Standard manicure and pedicure step-by-step service workflows',
          'Hand and foot massage reflex points for relaxation'
        ]
      },
      {
        weekOrModule: 'Module 4',
        title: 'Hair Services & Entrepreneurial Basics',
        topics: [
          'Hair and scalp analysis, therapeutic shampooing, and deep conditioning',
          'Basic hair drying, sectioning, curling, and contemporary party hairstyles',
          'Basic makeup application: Primer, foundation matching, eye enhancement, and lip styling',
          'Setting up a micro-salon setup, vendor sourcing, and customer appointment booking'
        ]
      }
    ],
    skillsGained: [
      'Salon Sanitization & Sterilization',
      'Professional Skincare Therapies',
      'Hair Cleansing & Basic Styling',
      'Manicure & Pedicure Services',
      'Aesthetic Grooming Techniques',
      'Salon Client Management'
    ],
    careerOpportunities: [
      'Beauty & Wellness Assistant',
      'Salon Therapist',
      'Skin Care Consultant',
      'Nail & Grooming Technician',
      'Self-Employed Beauty Entrepreneur'
    ],
    faqs: [
      {
        question: 'Are beauty tools provided during practical sessions?',
        answer: 'Yes, training centers provide standard sanitized equipment, salon chairs, and practice kits during supervised lab hours.'
      }
    ],
    isSampleCourse: true
  }
];
