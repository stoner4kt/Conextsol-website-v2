import port1 from '@assets/portfolio-1.jpg';
import port2 from '@assets/portfolio-2.jpg';
import port3 from '@assets/portfolio-3.jpg';
import port4 from '@assets/portfolio-4.jpg';
import port5 from '@assets/portfolio-5.jpg';
import port6 from '@assets/portfolio-6.jpg';

export const portfolio = [
  {
    id: 'nexus-logistics',
    clientType: 'Logistics & Supply Chain',
    industry: 'Logistics',
    services: ['Custom Software Development', 'UI/UX Design'],
    keyMetric: 'Reduced dispatch time by 45%',
    description: 'A bespoke fleet management and dispatch web application built for a national logistics company. Integrated real-time tracking, automated waybills, and driver mobile interfaces to streamline their entire operation.',
    imageUrl: port5,
    challenge: 'Dispatch teams were coordinating routes, driver updates, and waybills across disconnected spreadsheets and messaging apps. The manual process created delays, duplicated admin, and limited real-time visibility for managers.',
    solution: 'We designed and built a custom fleet management portal with dispatcher dashboards, driver-friendly mobile screens, automated waybill generation, and live status updates for each delivery run.',
    outcomes: ['Reduced average dispatch preparation time by 45%', 'Centralized trip, vehicle, and driver data in one secure portal', 'Improved management visibility with real-time delivery status reporting']
  },
  {
    id: 'apex-legal',
    clientType: 'Corporate Law Firm',
    industry: 'Legal',
    services: ['Website Design', 'Web Development', 'SEO'],
    keyMetric: '+210% organic local traffic',
    description: 'A highly professional, accessible, and fast-loading corporate website for a top-tier Johannesburg law firm. Focused on establishing authority, clear partner profiles, and generating high-value corporate leads.',
    imageUrl: port4,
    challenge: 'The firm needed a premium online presence that reflected its expertise, ranked for competitive local searches, and made it easier for corporate prospects to understand practice areas and contact the right team.',
    solution: 'We delivered a polished, accessible website with structured practice-area content, partner profiles, technical SEO foundations, and clear conversion paths for consultation requests.',
    outcomes: ['Increased organic local traffic by 210%', 'Improved lead quality through clearer practice-area journeys', 'Strengthened authority with faster pages and accessible content structure']
  },
  {
    id: 'urban-nest',
    clientType: 'Property Real Estate Agency',
    industry: 'Real Estate',
    services: ['Web Development', 'API Integration'],
    keyMetric: 'R45M in property inquiries',
    description: 'A modern property listing platform integrating directly with their internal CRM. Features advanced filtering, map-based searches, and a beautifully optimized mobile experience for house hunters.',
    imageUrl: port3,
    challenge: 'Agents were manually updating listings in multiple places, while buyers struggled to filter properties quickly on mobile devices. The agency needed CRM-synced listings that could turn searches into inquiries.',
    solution: 'We built a responsive property platform with CRM integration, advanced search filters, map-led browsing, and inquiry forms connected to each listing and agent.',
    outcomes: ['Generated R45M in tracked property inquiries', 'Removed duplicate listing updates through CRM synchronization', 'Improved mobile property discovery with fast filtering and map search']
  },
  {
    id: 'lumiere-boutique',
    clientType: 'Luxury E-commerce Retailer',
    industry: 'E-commerce',
    services: ['E-commerce Development', 'UI/UX Design'],
    keyMetric: '32% increase in checkout rate',
    description: 'A headless e-commerce build for a high-end fashion brand. By separating the frontend from the Shopify backend, we achieved sub-second load times and created a bespoke, immersive shopping experience.',
    imageUrl: port2,
    challenge: 'The existing storefront felt generic, loaded slowly on mobile, and created friction between product discovery and checkout for premium shoppers.',
    solution: 'We created a headless storefront with a refined visual system, fast product pages, curated collection journeys, and a streamlined checkout handoff to the commerce backend.',
    outcomes: ['Increased checkout rate by 32%', 'Delivered sub-second perceived loading for key shopping pages', 'Elevated the brand experience with bespoke luxury-focused UI']
  },
  {
    id: 'finvest-capital',
    clientType: 'Financial Services',
    industry: 'Finance',
    services: ['Custom Software', 'Web Development'],
    keyMetric: 'Zero downtime across 10k users',
    description: 'A secure client portal for wealth management. Clients can log in to view real-time portfolio performance, securely upload KYC documents, and communicate with advisors via an encrypted channel.',
    imageUrl: port1,
    challenge: 'Clients needed secure self-service access to portfolio updates and documents, while advisors needed fewer email-based requests and a more auditable communication workflow.',
    solution: 'We developed a secure client portal with authenticated dashboards, encrypted advisor messaging, document upload flows, and a resilient deployment approach.',
    outcomes: ['Maintained zero downtime across 10k users', 'Reduced manual document collection for KYC workflows', 'Gave clients secure access to portfolio information and advisor communication']
  },
  {
    id: 'bistro-booking',
    clientType: 'Restaurant Group',
    industry: 'Hospitality',
    services: ['Web App Development', 'Website Design'],
    keyMetric: 'Fully automated booking system',
    description: 'A combined brand website and custom table reservation system for a premium restaurant group. Eliminated third-party booking fees and provided management with deep insights into customer dining habits.',
    imageUrl: port6,
    challenge: 'The restaurant group depended on third-party booking tools that added fees, limited brand control, and kept customer behavior data outside the business.',
    solution: 'We launched a branded website with an integrated reservation web app, availability controls, automated confirmations, and reporting dashboards for management.',
    outcomes: ['Replaced third-party booking fees with an owned reservation system', 'Automated table requests and customer confirmations', 'Provided actionable dining-pattern insights to management']
  }
];

export type PortfolioProject = (typeof portfolio)[number];
