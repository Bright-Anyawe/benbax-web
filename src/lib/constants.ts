import {
  Users,
  Clock,
  Briefcase,
  Settings,
  GraduationCap,
  Target,
  Heart,
  Shield,
  Zap,
  MapPin,
  Handshake,
  TrendingUp,
  Award
} from 'lucide-react';

export const COMPANY_INFO = {
  name: 'BENBAX VENTURES LIMITED COMPANY',
  shortName: 'BENBAX VENTURES',
  tagline: 'Your Partner in Strategic Talent Acquisition',
  description: 'Connecting exceptional talent with leading organizations across Ghana',
  email: 'benbaxventures@gmail.com',
  location: 'Katamanso Apolonia',
  poBox: 'P.O. Box C02968, TM Tema',
  businessHours: 'Monday - Friday: 8:00 AM - 5:00 PM',
  vision: 'To be a leading recruitment agency recognized for excellence, integrity, and innovation in talent acquisition.',
  mission: 'To connect businesses with the right people and empower individuals with meaningful employment opportunities.',
} as const;

export const SERVICES = [
  {
    id: 'permanent-staffing',
    title: 'Permanent Staffing Solutions',
    shortTitle: 'Permanent Staffing',
    description: 'Full-time placement services connecting businesses with qualified professionals for long-term organizational success.',
    icon: Users,
    details: 'We specialize in sourcing and placing permanent employees across various industries and job levels. Our comprehensive screening process ensures candidates not only have the required skills but also align with your company culture and values.',
    benefits: [
      'Thorough candidate screening and vetting',
      'Cultural fit assessment',
      'Guaranteed replacement periods',
      'Post-placement support'
    ]
  },
  {
    id: 'temporary-staffing',
    title: 'Temporary and Contract Staffing',
    shortTitle: 'Temporary Staffing',
    description: 'Flexible staffing solutions for project-based needs, seasonal demands, and interim coverage.',
    icon: Clock,
    details: 'Our temporary staffing services provide businesses with the flexibility to scale their workforce up or down based on demand. Perfect for seasonal peaks, special projects, or covering employee absences.',
    benefits: [
      'Quick turnaround time',
      'Pre-screened talent pool',
      'Flexible engagement terms',
      'Payroll management included'
    ]
  },
  {
    id: 'executive-search',
    title: 'Executive Search & Headhunting',
    shortTitle: 'Executive Search',
    description: 'Confidential recruitment for senior-level and executive positions requiring specialized expertise.',
    icon: Briefcase,
    details: 'Our executive search service targets high-caliber professionals for leadership roles. We employ discreet, targeted approaches to identify and attract top-tier talent who can drive your organization forward.',
    benefits: [
      'Confidential search process',
      'Access to passive candidates',
      'Comprehensive leadership assessment',
      'Market intelligence and insights'
    ]
  },
  {
    id: 'rpo',
    title: 'Recruitment Process Outsourcing (RPO)',
    shortTitle: 'RPO Services',
    description: 'Comprehensive recruitment management tailored to your organization\'s needs and growth objectives.',
    icon: Settings,
    details: 'Our RPO services allow you to outsource all or part of your recruitment function. We become an extension of your team, managing the entire hiring process with our expertise and technology.',
    benefits: [
      'Scalable recruitment solutions',
      'Cost-effective hiring',
      'Advanced recruitment technology',
      'Dedicated recruitment team'
    ]
  },
  {
    id: 'career-advisory',
    title: 'Career Advisory, Training, and Workshops',
    shortTitle: 'Career Development',
    description: 'Professional development services empowering job seekers and enhancing organizational capabilities.',
    icon: GraduationCap,
    details: 'We offer comprehensive career development services including CV writing, interview preparation, career coaching, and corporate training programs designed to enhance professional skills and employability.',
    benefits: [
      'CV writing and optimization',
      'Interview preparation coaching',
      'Career planning guidance',
      'Corporate training programs'
    ]
  },
] as const;

export const VALUE_PROPOSITIONS = [
  {
    id: 'expertise',
    title: 'Industry Expertise',
    description: 'Deep understanding of the Ghanaian recruitment landscape and industry-specific hiring needs.',
    icon: Award,
  },
  {
    id: 'personalized',
    title: 'Personalized Approach',
    description: 'Tailored solutions designed specifically for your unique organizational requirements.',
    icon: Heart,
  },
  {
    id: 'quality',
    title: 'Quality Over Quantity',
    description: 'Focus on finding the right fit, not just filling positions quickly.',
    icon: Target,
  },
  {
    id: 'speed',
    title: 'Speed & Efficiency',
    description: 'Streamlined processes ensuring quick turnaround without compromising quality.',
    icon: Zap,
  },
  {
    id: 'local-knowledge',
    title: 'Local Market Knowledge',
    description: 'In-depth understanding of the Ghanaian market, culture, and employment landscape.',
    icon: MapPin,
  },
  {
    id: 'partnerships',
    title: 'Long-term Partnerships',
    description: 'Building lasting relationships that extend beyond single placements.',
    icon: Handshake,
  },
  {
    id: 'integrity',
    title: 'Integrity & Transparency',
    description: 'Honest communication and ethical practices in all our interactions.',
    icon: Shield,
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Support',
    description: 'End-to-end service from initial search through successful onboarding.',
    icon: TrendingUp,
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/careers', label: 'Job Seekers' },
  { href: '/employers', label: 'Employers' },
  { href: '/contact', label: 'Contact' },
] as const;

export const CORE_VALUES = [
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from candidate screening to client service delivery.',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Honesty, transparency, and ethical practices guide all our business relationships and decisions.',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We embrace modern recruitment technologies and continuously improve our processes to serve you better.',
  },
  {
    id: 'people-first',
    title: 'People-First',
    description: 'We believe in treating candidates and clients with respect, empathy, and genuine care.',
  },
] as const;

export const RECRUITMENT_PROCESS_EMPLOYER = [
  {
    step: 1,
    title: 'Understanding Your Needs',
    description: 'We begin with an in-depth consultation to understand your organization, culture, and specific hiring requirements.',
  },
  {
    step: 2,
    title: 'Sourcing and Screening',
    description: 'Our team actively sources candidates through multiple channels and conducts comprehensive screening to identify top talent.',
  },
  {
    step: 3,
    title: 'Candidate Presentation',
    description: 'We present you with carefully selected candidates who meet your criteria, complete with detailed profiles and assessments.',
  },
  {
    step: 4,
    title: 'Interview Coordination',
    description: 'We manage the interview process, coordinating schedules and providing support to both you and the candidates.',
  },
  {
    step: 5,
    title: 'Offer and Onboarding Support',
    description: 'We assist with offer negotiations and provide onboarding support to ensure a smooth transition for your new hire.',
  },
] as const;

export const RECRUITMENT_PROCESS_CANDIDATE = [
  {
    step: 1,
    title: 'Submit Your CV',
    description: 'Send your updated CV to our email or through our contact form, specifying your career interests and goals.',
  },
  {
    step: 2,
    title: 'Initial Consultation',
    description: 'We schedule a conversation to understand your skills, experience, career aspirations, and preferences.',
  },
  {
    step: 3,
    title: 'Matching with Opportunities',
    description: 'Our team matches your profile with suitable job openings and presents relevant opportunities to you.',
  },
  {
    step: 4,
    title: 'Interview Preparation and Support',
    description: 'We provide guidance on interview preparation, helping you present your best self to potential employers.',
  },
  {
    step: 5,
    title: 'Job Placement and Onboarding',
    description: 'Once placed, we continue to support you during your transition into your new role.',
  },
] as const;

export const SOCIAL_LINKS = {
  linkedin: '',
  facebook: '',
  twitter: '',
  instagram: '',
} as const;

// Type exports for better TypeScript support
export type Service = typeof SERVICES[number];
export type ValueProposition = typeof VALUE_PROPOSITIONS[number];
export type NavLink = typeof NAV_LINKS[number];
export type CoreValue = typeof CORE_VALUES[number];
