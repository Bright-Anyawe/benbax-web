import {
  Users,
  Code2,
  UtensilsCrossed,
  Target,
  Heart,
  Shield,
  Zap,
  MapPin,
  Handshake,
  TrendingUp,
  Award,
  Truck,
  HardHat,
  Megaphone,
  Ship,
} from 'lucide-react';

export const COMPANY_INFO = {
  name: 'BENBAX LIMITED COMPANY',
  shortName: 'BENBAX',
  tagline: 'Software Development, Recruitment & HR, and Restaurant Services',
  description:
    'Delivering software development as our core focus, followed by recruitment and HR services, and quality restaurant services across Ghana.',
  email: 'info@benbaxco.com',
  phone: '+233 546 013 031',
  phoneAlt: '+233 598 204 414',
  restaurantPhone: '+233 533 525 034',
  location: 'Katamanso Apolonia',
  mapQuery: 'Katamanso Apolonia, Tema, Ghana',
  mapEmbedUrl: 'https://www.google.com/maps?q=Katamanso+Apolonia,+Tema,+Ghana&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Katamanso+Apolonia,+Tema,+Ghana',
  poBox: 'P.O. Box C02968, TM Tema',
  businessHours: 'Monday - Friday: 8:00 AM - 5:00 PM',
  vision:
    'To be a trusted multi-sector company known for software innovation, people excellence, and quality hospitality experiences.',
  mission:
    'To build practical software, connect organizations with the right talent, and serve communities through reliable restaurant services.',
} as const;

export const GEOATTEND_INFO = {
  name: 'GeoAttend',
  apkUrl: 'https://expo.dev/accounts/benbax-expo/projects/geoattend/builds/78a37342-d687-4f01-b3d1-c19c240e2575',
} as const;

export const BENBAX_REQUEST_INFO = {
  name: 'Benbax-request',
  description:
    'The customer-facing mobile app for the Benbax Go delivery and logistics platform. Customers use it to place delivery orders, track them live, pay, top up a wallet, and manage their account.',
  apkUrl:
    'https://expo.dev/accounts/benbax-expo/projects/benbax-request/builds/30ab37b5-39f9-4c2d-9c87-d30bf21fa770',
} as const;

export const BENBAX_DRIVER_INFO = {
  name: 'Benbax-driver',
  description:
    'Unified Expo React Native partner app for ride drivers and delivery riders with onboarding, KYC, online/offline mode, ride offers, delivery offers, active job tracking, earnings, wallet, and safety foundations.',
  apkUrl:
    'https://expo.dev/accounts/benbax-expos-team/projects/benbax-driver/builds/32bc65e5-0b3b-4b4f-b3bc-477e9266e5a2',
} as const;

export const SERVICES = [
  {
    id: 'software-development',
    title: 'Software Development',
    shortTitle: 'Software Development',
    description:
      'Custom software engineering for websites, web apps, and digital business systems that improve efficiency, visibility, and growth.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    details:
      'Software development is our primary service focus. We design, build, and support custom digital solutions including websites, web applications, workflow automation tools, and integrated platforms. Our team handles the complete lifecycle from product discovery and UI/UX through development, testing, deployment, optimization, and long-term support.',
    benefits: [
      'Custom web and business application development',
      'System integration and process automation',
      'Scalable architecture, testing, and deployment',
      'Ongoing maintenance and technical support',
    ],
  },
  {
    id: 'recruitment-hr-services',
    title: 'Recruitment and HR Services',
    shortTitle: 'Recruitment & HR',
    description:
      'End-to-end hiring and HR support services for employers and professionals across multiple industries.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    details:
      'We deliver recruitment and HR services that help organizations hire faster and retain better-fit talent. Our support covers permanent recruitment, contract staffing, executive hiring support, and practical HR advisory to strengthen workforce performance.',
    benefits: [
      'Permanent, contract, and project-based hiring support',
      'Structured candidate screening and shortlisting',
      'HR advisory and workforce planning guidance',
      'Improved hiring speed and role fit quality',
    ],
  },
  {
    id: 'restaurant-services',
    title: 'Restaurant Services',
    shortTitle: 'Restaurant Services',
    description:
      'Quality food and hospitality services delivered through dependable restaurant operations and customer care.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    details:
      'Our restaurant services are built around quality meals, hygiene standards, and consistent customer satisfaction. We support dine-in and takeaway experiences while also providing catering for events and corporate engagements.',
    benefits: [
      'Quality meal preparation and menu planning',
      'Clean, safe, and compliant food operations',
      'Reliable dine-in and takeaway service delivery',
      'Event and corporate catering support',
    ],
  },
  {
    id: 'transportation-delivery',
    title: 'Transportation and Delivery Services',
    shortTitle: 'Transportation & Delivery',
    description:
      'Reliable transportation and delivery solutions for businesses and individuals across Ghana.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    details:
      'BENBAX provides dependable transportation and delivery services designed to move goods safely and on time. We support local and regional logistics needs including scheduled deliveries, bulk transport, and last-mile distribution for businesses of all sizes.',
    benefits: [
      'Local and regional goods transportation',
      'Scheduled and on-demand delivery options',
      'Last-mile distribution for businesses',
      'Safe handling and tracking of shipments',
    ],
  },
  {
    id: 'building-construction',
    title: 'Building and Construction Services',
    shortTitle: 'Building & Construction',
    description:
      'Professional building and construction services from planning through project completion.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    details:
      'Our building and construction division delivers quality structures from residential builds to commercial projects. We manage the full construction lifecycle including site assessment, structural design coordination, project management, and finishing works.',
    benefits: [
      'Residential and commercial building projects',
      'Site assessment and project planning',
      'Quality materials sourcing and management',
      'On-time project delivery and finishing works',
    ],
  },
  {
    id: 'marketing-services',
    title: 'Marketing Services',
    shortTitle: 'Marketing Services',
    description:
      'Strategic marketing solutions to grow your brand visibility and reach your target audience effectively.',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    details:
      'BENBAX marketing services help businesses build brand awareness and connect with their target markets. We offer digital marketing strategy, social media management, content creation, and promotional campaign execution tailored to the Ghanaian market.',
    benefits: [
      'Digital marketing strategy and execution',
      'Social media management and content creation',
      'Brand development and positioning',
      'Campaign planning and performance tracking',
    ],
  },
  {
    id: 'import-export',
    title: 'Import and Export Services',
    shortTitle: 'Import & Export',
    description:
      'Facilitating international trade with reliable import and export logistics and documentation support.',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    details:
      'We support businesses engaged in international trade by managing import and export logistics, customs documentation, and supply chain coordination. Our services reduce friction in cross-border commerce and help clients move goods between Ghana and international markets.',
    benefits: [
      'Import and export logistics management',
      'Customs documentation and compliance support',
      'Supply chain coordination and tracking',
      'Trade advisory for cross-border commerce',
    ],
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
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/faq', label: 'FAQ' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;

export const COMPANY_REPRESENTATIVES = [
  {
    id: 'software-engineer',
    name: 'BENBAX Software Engineer',
    title: 'Software Engineer',
    image: '/images/Software Engineer.jpeg',
    alt: 'Portrait of BENBAX Software Engineer',
    description:
      'Leads BENBAX digital operations and technology systems to keep projects reliable, secure, and scalable.',
  },
  {
    id: 'general-manager',
    name: 'BENBAX General Manager',
    title: 'General Manager',
    image: '/images/Gen. manager 2.png',
    alt: 'Portrait of BENBAX General Manager',
    description:
      'Oversees company operations and service delivery to ensure professional standards across every BENBAX division.',
  },

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
  facebook: 'https://web.facebook.com/profile.php?id=61588660152569',
  twitter: '',
  instagram: '',
  tiktok: 'https://www.tiktok.com/@benbaxcompany',
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
  {
    id: 'software-process',
    question: 'How does your software development process work?',
    answer:
      'We follow a structured lifecycle: discovery and requirements gathering, UI/UX design, development and testing, deployment, and ongoing support. We keep clients involved at every stage with regular updates and demos.',
  },
  {
    id: 'restaurant-hours',
    question: 'What are your restaurant service hours?',
    answer:
      'Our restaurant services operate during standard business hours. For specific hours and reservations, please contact us directly at ' + '+233 533 525 034.',
  },
  {
    id: 'employer-cost',
    question: 'How much do your recruitment services cost for employers?',
    answer:
      'Our fees vary based on the engagement type, role level, and scope of work. We offer competitive pricing and will provide a clear fee structure during our initial consultation.',
  },
  {
    id: 'candidate-process',
    question: 'What happens after I submit my CV as a job seeker?',
    answer:
      'After submitting your CV, we schedule an initial consultation to understand your skills and career goals. We then match you with suitable opportunities, provide interview preparation support, and guide you through the placement process.',
  },
  {
    id: 'software-tech',
    question: 'What technologies do you use for software development?',
    answer:
      'We work with modern technologies including React, Next.js, Node.js, TypeScript, Python, and various databases. We choose the best technology stack based on each project\'s specific requirements and goals.',
  },
  {
    id: 'restaurant-catering',
    question: 'Do you offer catering services for events?',
    answer:
      'Yes, we provide catering services for events and corporate engagements. Contact our restaurant team at ' + '+233 533 525 034 for menu options and booking details.',
  },
  {
    id: 'transport-areas',
    question: 'What areas do you serve for transportation and delivery?',
    answer:
      'We provide transportation and delivery services within Ghana, covering local and regional routes. Contact us for specific route availability and scheduling.',
  },
  {
    id: 'construction-projects',
    question: 'What types of construction projects do you handle?',
    answer:
      'We handle both residential and commercial construction projects, from new builds to renovations. Our team manages the full lifecycle including planning, design coordination, project management, and finishing works.',
  },
  {
    id: 'marketing-services-detail',
    question: 'What marketing services do you offer?',
    answer:
      'We offer digital marketing strategy, social media management, content creation, brand development, and promotional campaign execution tailored to the Ghanaian market.',
  },
  {
    id: 'import-export-countries',
    question: 'Which countries do you support for import and export?',
    answer:
      'We facilitate trade between Ghana and international markets. Contact us to discuss your specific import or export requirements and we will provide guidance on logistics and documentation.',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'Emmanuel K.',
    role: 'HR Manager, Accra',
    content:
      'BENBAX helped us fill three senior positions in under four weeks. Their screening process is thorough and the candidates they presented were well-matched to our requirements. Highly recommended for recruitment services.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Abigail M.',
    role: 'Job Seeker, Tema',
    content:
      'I submitted my CV through BENBAX and within two weeks I had an interview lined up. The team guided me through the process and I landed a great role. Grateful for their support.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Samuel A.',
    role: 'Business Owner, Accra',
    content:
      'BENBAX built our company website and handled our recruitment needs. Professional team, timely delivery, and clear communication throughout. Will definitely work with them again.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Grace D.',
    role: 'Restaurant Customer, Tema',
    content:
      'The restaurant service is excellent. Great food quality, friendly staff, and a clean environment. I regularly visit with my family and we always have a good experience.',
    rating: 4,
  },
  {
    id: 'testimonial-5',
    name: 'Michael A.',
    role: 'Operations Manager, Accra',
    content:
      'BENBAX handled our recruitment process outsourcing and the results were impressive. Time-to-hire reduced significantly and the quality of candidates was consistently high.',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    name: 'Sarah T.',
    role: 'Job Seeker, Accra',
    content:
      'The team at BENBAX was professional and supportive throughout my job search. They helped me prepare for interviews and found a role that matched my skills perfectly.',
    rating: 5,
  },
  {
    id: 'testimonial-7',
    name: 'James O.',
    role: 'Small Business Owner, Tema',
    content:
      'We engaged BENBAX for both software development and marketing services. The website they built for us is excellent and their marketing support has helped us reach more customers.',
    rating: 4,
  },
  {
    id: 'testimonial-8',
    name: 'Patience N.',
    role: 'Restaurant Customer, Katamanso',
    content:
      'I love the food at BENBAX restaurant. The portions are generous, prices are fair, and the staff are always welcoming. My go-to place for lunch.',
    rating: 5,
  },
] as const;
export type Service = typeof SERVICES[number];
export type ValueProposition = typeof VALUE_PROPOSITIONS[number];
export type NavLink = typeof NAV_LINKS[number];
export type CompanyRepresentative = typeof COMPANY_REPRESENTATIVES[number];
export type CoreValue = typeof CORE_VALUES[number];
export type TrustMetric = typeof TRUST_METRICS[number];
export type CaseStudy = typeof CASE_STUDIES[number];
export type FaqItem = typeof FAQ_ITEMS[number];
