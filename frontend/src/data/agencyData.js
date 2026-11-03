/**
 * Twin Stack Digital - Central Content & Configuration Layer
 * Single source of truth for branding, services, skills, navigation, and contact info.
 */

export const agencyInfo = {
  name: "Twin Stack Digital",
  tagline: "We Don't Just Build Websites. We Create Digital Experiences.",
  description:
    "Twin Stack Digital is a Karachi-based digital agency serving forward-thinking businesses worldwide. We specialize in bespoke website development, robust full-stack web applications with scalable databases, and high-conversion e-commerce solutions engineered with modern luxury-tech aesthetics.",
  foundingYear: "2024",
  location: "Karachi, Pakistan",
  consultationNote:
    "Worldwide online consultations via Google Meet. Optional on-site meetings available across Karachi by mutual agreement.",
  email: "twinstackdigital.pk@gmail.com",
  phoneNumbers: [
    { label: "Primary", display: "+92 310 3701543", value: "+923103701543" },
    { label: "Secondary", display: "+92 312 5215289", value: "+923125215289" },
  ],
  founders: [
    {
      id: "syeda-hira",
      name: "Syeda Hira",
      role: "Co-Founder & Technical Lead",
      focus: "Software Architecture, Full-Stack Engineering & Database Systems",
    },
    {
      id: "hamna-shahid",
      name: "Hamna Shahid",
      role: "Co-Founder & Creative Lead",
      focus: "Creative Direction, Modern UI/UX Design & Frontend Innovation",
    },
  ],
  socials: [
    {
      name: "Instagram",
      handle: "@twinstackdigital",
      url: "https://instagram.com",
      status: "Official Profile Coming Soon",
    },
    {
      name: "Facebook",
      handle: "Twin Stack Digital",
      url: "https://facebook.com",
      status: "Official Page Coming Soon",
    },
  ],
  availabilityBadge: {
    status: "Available for New Projects",
    note: "Accepting select client partnerships & consultations",
  },
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const coreServices = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Bespoke, high-performance corporate websites and landing pages engineered to captivate audiences and communicate your brand value.",
    detailedDescription:
      "We design and build bespoke digital experiences from scratch with clean, semantic markup, responsive layouts, and modern visual elegance. Every site is optimized for lightning-fast load times, SEO visibility, and fluid cross-device adaptability without bloated page builders.",
    features: [
      "Custom responsive design tailored to your exact brand identity",
      "Semantic HTML5, modern CSS3 styling, and mobile-first architecture",
      "Core Web Vitals performance tuning and SEO-friendly structure",
      "Cross-browser testing across modern desktop and mobile viewports",
      "Interactive component states, subtle animations, and accessible navigation",
      "Comprehensive deployment setup and post-launch technical handoff",
    ],
    idealFor:
      "Emerging brands, corporate organizations, and professional service firms demanding a distinctive digital footprint.",
    deliverables: "Design mockups, responsive frontend codebase, domain/DNS launch, documentation.",
  },
  {
    id: "full-stack-web-applications",
    title: "Full-Stack Web Application Development",
    shortDescription:
      "Dynamic, scalable web applications with relational MySQL databases, secure APIs, and responsive custom portals.",
    detailedDescription:
      "Transform business processes into powerful, automated software solutions. We build end-to-end web applications combining intuitive, reactive frontends with robust backend frameworks, structured relational database schemas, secure authentication mechanisms, and clean RESTful API architectures.",
    features: [
      "Relational database design, normalization, and optimization with MySQL",
      "Secure backend architecture with Laravel RESTful API endpoints",
      "Dynamic single-page application interfaces built with modern React",
      "Role-based access control, session security, and data validation",
      "Custom business dashboards, administrative panels, and workflow tools",
      "Scalable infrastructure design ready for growing transaction volumes",
    ],
    idealFor:
      "Businesses requiring bespoke administrative portals, customer dashboards, data management systems, or SaaS MVPs.",
    deliverables: "Database schema, REST API backend, reactive frontend client, administrative panels, deployment runbook.",
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Website Development",
    shortDescription:
      "Secure, high-converting digital storefronts designed for intuitive product discovery, effortless checkout, and reliable sales growth.",
    detailedDescription:
      "Drive sustainable online revenue with e-commerce experiences engineered for conversion. We craft custom storefronts featuring seamless product catalog management, intuitive filtering, frictionless cart and checkout flows, and secure transaction workflows tailored to your retail business model.",
    features: [
      "Intuitive product discovery with dynamic category filters and search",
      "Streamlined shopping cart and friction-free multi-step checkout flows",
      "Secure payment processing integration and automated order handling",
      "Mobile-optimized shopping experience built for quick tap interactions",
      "Inventory management, customer account portals, and order histories",
      "Conversion rate optimization (CRO) principles embedded in every view",
    ],
    idealFor:
      "Retailers, direct-to-consumer (D2C) brands, and expanding boutiques establishing an independent online sales channel.",
    deliverables: "Complete e-commerce platform, checkout flow, product catalog, payment setup, order workflow.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover & Align",
    description:
      "We begin with a deep exploration of your business objectives, target audience, brand aesthetic, and technical constraints to establish a clear architectural roadmap.",
  },
  {
    step: "02",
    title: "Plan & Design",
    description:
      "We design bespoke UI/UX wireframes, establish color harmony and typography, architect database schemas, and align on interactive requirements before code is written.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "Our team implements clean, modular frontend code and secure backend endpoints. We rigorously test for responsiveness, performance, security, and cross-browser consistency.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We orchestrate production deployment, verify live analytics and database connectivity, deliver full source ownership, and provide initial launch support.",
  },
];

export const whyChooseUs = [
  {
    title: "Founder-Led Craftsmanship",
    description:
      "Your project is directly designed and engineered by our founders, Syeda Hira and Hamna Shahid, ensuring uncompromising standards and personal accountability.",
  },
  {
    title: "Bespoke Engineering, No Cookie-Cutters",
    description:
      "We reject generic templates and bloated site-builders in favor of clean, purpose-built codebases that load fast, scale cleanly, and reflect your unique brand.",
  },
  {
    title: "End-to-End Capabilities",
    description:
      "From high-impact marketing websites to complex full-stack web applications with relational databases, we handle every layer under one cohesive team.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "Clear communication, regular milestone updates, honest technical counsel, and dedicated worldwide consultations via Google Meet with zero guesswork.",
  },
];

export const agencySkills = {
  frontend: {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "jQuery"],
  },
  backend: {
    category: "Backend & Database",
    skills: ["PHP", "Laravel", "MySQL"],
  },
  interactive: {
    category: "3D & Web Animations",
    skills: ["3D Website Design", "Interactive Animations", "Modern UI Effects"],
  },
  marketing: {
    category: "Digital Marketing & Strategy",
    skills: ["Social Media Marketing", "SEO", "Content Strategy", "Digital Branding"],
  },
  tools: {
    category: "Tools & Deployment",
    skills: ["Git & GitHub", "VS Code", "Website Deployment"],
  },
};

export const demoProjects = [
  {
    id: "nexus-corporate-platform",
    title: "Nexus Global Advisory",
    category: "Web Development",
    badge: "Concept Demonstration",
    description:
      "A luxury financial consultancy web platform featuring modern editorial typography, responsive layouts, interactive service calculators, and swift Core Web Vitals.",
    technologies: ["React.js", "Modern CSS", "HTML5", "Interactive UI"],
    previewType: "corporate",
    accentColor: "#0860F8",
    note: "Demonstration concept prepared for Phase 2 UI portfolio preview.",
  },
  {
    id: "strata-cloud-portal",
    title: "Strata Operational ERP",
    category: "Full-Stack Apps",
    badge: "Concept Demonstration",
    description:
      "Full-stack internal management portal with custom role-based authentication, real-time inventory tracking, and normalized relational MySQL database integration.",
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "REST API"],
    previewType: "portal",
    accentColor: "#071B49",
    note: "Demonstration concept showcasing full-stack application capabilities.",
  },
  {
    id: "aether-lifestyle-atelier",
    title: "Aether Luxury Goods",
    category: "E-Commerce",
    badge: "Concept Demonstration",
    description:
      "Direct-to-consumer premium lifestyle storefront built with dynamic category filtering, rapid checkout drawer, and tailored product presentation.",
    technologies: ["React.js", "PHP / Laravel", "MySQL", "Modern CSS"],
    previewType: "ecommerce",
    accentColor: "#0860F8",
    note: "Demonstration concept illustrating e-commerce architecture.",
  },
  {
    id: "pulse-health-analytics",
    title: "Pulse Digital Clinic",
    category: "Full-Stack Apps",
    badge: "Concept Demonstration",
    description:
      "Patient scheduling and tele-consultation platform with automated calendar booking, secure records handling, and responsive staff dashboard.",
    technologies: ["Laravel", "MySQL", "React.js", "RESTful API"],
    previewType: "portal",
    accentColor: "#071B49",
    note: "Demonstration concept prepared for agency portfolio preview.",
  },
  {
    id: "horizon-architectural-studio",
    title: "Horizon Architecture Lab",
    category: "Web Development",
    badge: "Concept Demonstration",
    description:
      "Minimalist architectural portfolio site with interactive project showcases, full-bleed imagery grids, and smooth editorial transitions.",
    technologies: ["React.js", "Modern UI Effects", "CSS Grid", "HTML5"],
    previewType: "corporate",
    accentColor: "#0860F8",
    note: "Demonstration concept showcasing agency design aesthetics.",
  },
  {
    id: "artisan-roasters-direct",
    title: "Origin Artisan Roasters",
    category: "E-Commerce",
    badge: "Concept Demonstration",
    description:
      "Subscription-based specialty coffee store with recurring delivery configuration, cart flow optimization, and responsive mobile storefront.",
    technologies: ["React.js", "PHP", "MySQL", "E-commerce UI"],
    previewType: "ecommerce",
    accentColor: "#071B49",
    note: "Demonstration concept illustrating subscription commerce.",
  },
];

export const projectCategories = [
  "All Projects",
  "Web Development",
  "Full-Stack Apps",
  "E-Commerce",
];

export const faqs = [
  {
    question: "What is your development process for new client projects?",
    answer:
      "We follow a disciplined four-stage lifecycle: Discovery & Alignment, Planning & Design, Build & Integration, and Launch & Post-Launch Support. Every project is personally overseen by our co-founders to guarantee architectural integrity, clean code, and design excellence.",
  },
  {
    question: "Do you offer fixed pricing or guaranteed 14-day delivery?",
    answer:
      "No. We do not provide one-size-fits-all fixed packages or arbitrary 14-day turnaround promises. Because every business has unique functional requirements, technical scope, and integration needs, we provide tailored proposals following an initial consultation.",
  },
  {
    question: "Can you build both the frontend design and the backend database?",
    answer:
      "Yes, absolutely. Twin Stack Digital operates as a full-stack digital agency. We design and build reactive frontend interfaces in modern React alongside scalable, secure backend systems powered by PHP, Laravel, and MySQL relational databases.",
  },
  {
    question: "How do consultations work if we are located outside Pakistan?",
    answer:
      "We collaborate seamlessly with international clients worldwide via Google Meet, email, and scheduled virtual review sessions. For clients in Karachi, Pakistan, optional in-person meetings can also be coordinated upon mutual arrangement.",
  },
  {
    question: "Will I own the code and intellectual property once launched?",
    answer:
      "Yes. Upon completion and final project settlement, you retain 100% full ownership of your source code, assets, database structures, and deployment credentials with zero vendor lock-in.",
  },
  {
    question: "How do I get started with Twin Stack Digital?",
    answer:
      "Submit an inquiry through our Contact page or send an email directly to twinstackdigital.pk@gmail.com with an overview of your requirements. We will review your project needs and schedule an initial discovery consultation via Google Meet.",
  },
];
