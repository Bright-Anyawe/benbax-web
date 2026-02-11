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
  mapQuery: 'Katamanso Apolonia, Tema, Ghana',
  mapEmbedUrl: 'https://www.google.com/maps?q=Katamanso+Apolonia,+Tema,+Ghana&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Katamanso+Apolonia,+Tema,+Ghana',
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

export const TRUST_METRICS = [
  {
    id: 'placements',
    value: '1,200+',
    label: 'Successful placements',
    detail: 'Placed across permanent, contract, and executive roles over the last 5 years.',
  },
  {
    id: 'retention',
    value: '91%',
    label: '12-month retention',
    detail: 'Candidate placements that remain active after one year.',
  },
  {
    id: 'time-to-shortlist',
    value: '8 days',
    label: 'Average shortlist time',
    detail: 'From approved brief to first shortlist presentation.',
  },
  {
    id: 'client-satisfaction',
    value: '4.8/5',
    label: 'Client satisfaction score',
    detail: 'Measured through quarterly post-engagement reviews.',
  },
] as const;

export const CASE_STUDIES = [
  {
    id: 'operations-scale-up',
    title: 'Logistics Firm Scaled Operations Team',
    service: 'Temporary and Contract Staffing',
    challenge:
      'A growing logistics company needed to fill 35 operational roles within six weeks during peak season.',
    approach:
      'We deployed a rapid sourcing pipeline, daily screening blocks, and a shared hiring dashboard with the client team.',
    outcome:
      '34 out of 35 roles filled in 28 days, with 86% of temporary hires retained for longer-term engagements.',
  },
  {
    id: 'executive-finance-hire',
    title: 'Confidential Finance Leadership Search',
    service: 'Executive Search & Headhunting',
    challenge:
      'A mid-sized enterprise required a finance leader with turnaround and fundraising experience under strict confidentiality.',
    approach:
      'We ran a targeted passive-candidate search and competency-led interview process aligned to board expectations.',
    outcome:
      'Role filled in 7 weeks with a candidate who delivered improved reporting controls within the first quarter.',
  },
  {
    id: 'rpo-hiring-efficiency',
    title: 'RPO Program Reduced Hiring Bottlenecks',
    service: 'Recruitment Process Outsourcing (RPO)',
    challenge:
      'A client with inconsistent hiring cycles faced long vacancy periods and fragmented interview coordination.',
    approach:
      'We implemented a structured requisition workflow, weekly hiring cadence meetings, and SLA-based recruiter support.',
    outcome:
      'Time-to-hire reduced by 37% and offer acceptance increased by 22% within two quarters.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: 'how-fast',
    question: 'How quickly can you provide candidates?',
    answer:
      'For most roles, we provide an initial shortlist within 5 to 10 business days after intake and role alignment.',
  },
  {
    id: 'industries',
    question: 'Which industries do you support?',
    answer:
      'We support administrative, operations, logistics, finance, professional services, and specialized technical functions.',
  },
  {
    id: 'candidate-cost',
    question: 'Is there a fee for job seekers?',
    answer:
      'No. Candidates are not charged for being considered for roles. We also provide guidance on CV and interview readiness.',
  },
  {
    id: 'replacement',
    question: 'Do you offer replacement guarantees?',
    answer:
      'Yes. Guarantee terms depend on the engagement type and are defined in the service agreement before project start.',
  },
] as const;

// Type exports for better TypeScript support
export type Service = typeof SERVICES[number];
export type ValueProposition = typeof VALUE_PROPOSITIONS[number];
export type NavLink = typeof NAV_LINKS[number];
export type CoreValue = typeof CORE_VALUES[number];
export type TrustMetric = typeof TRUST_METRICS[number];
export type CaseStudy = typeof CASE_STUDIES[number];
export type FaqItem = typeof FAQ_ITEMS[number];
