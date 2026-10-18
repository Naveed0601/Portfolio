export const profile = {
  name: 'Mohd Abdul Naveed',
  role: 'Java Backend / Full Stack Developer',
  email: 'abdulnaveedmohammed81@gmail.com',
  phone: '+91 90523 37675',
  phoneHref: 'tel:+919052337675',
  github: 'https://github.com/Naveed0601',
  linkedin: 'https://www.linkedin.com/in/naveed06/',
  leetcode: 'https://leetcode.com/u/naveed_6/',
  resume: '/resume.pdf',
}

export const navLinks = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['Résumé', '#resume'],
  ['Contact', '#contact'],
]

export const stats = [
  { to: 1.8, decimals: 1, suffix: '+ yrs', label: 'professional experience' },
  { to: 3, decimals: 0, suffix: '', label: 'companies, incl. current role' },
  { to: 12, decimals: 0, suffix: '+', label: 'languages & technologies' },
]

export const marquee = ['Java','Spring Boot','Spring Security','JWT','Hibernate','PostgreSQL','Flyway','React.js','Redux','Node.js','Express.js','MongoDB','REST APIs','Tailwind CSS']

export const pillars = [
  ['Backend architecture', 'Layered Spring Boot services, DTOs, validation and transactional boundaries.'],
  ['Auth & security', 'JWT access/refresh tokens, role-based access control, user-level data isolation.'],
  ['Data & performance', 'PostgreSQL schemas, Flyway migrations, database-side aggregation, fewer redundant API calls.'],
  ['Full stack delivery', 'React front ends wired to the APIs I build, from workflow to UI.'],
]

export const jobs = [
  {
    when: 'Feb 2025 – Present',
    role: 'Full Stack Developer',
    org: 'Innovacx · Hyderabad, India',
    groups: [
      { name: 'Marketplace', items: [
        'Built Excel export for order history in React and Node.js, handling 1,000+ records per request and cutting manual reporting effort by 40%.',
        'Built a conditional order-routing workflow for internal and external users, automating factory and internal email triggers and improving operational efficiency by 35%.',
        'Implemented rollback logic for rejected internal orders to restore excess quantities and preserve PO integrity, cutting manual correction time by 50%.',
      ]},
      { name: 'Embelex', items: [
        'Designed an item-visibility framework giving admins control over customer- and group-based product visibility rules.',
        'Built a Server-Sent Events service to dynamically fetch allowed/blocked categories by customer and organization, reducing invalid product exposure by 30%.',
        'Engineered a product-selector workflow using dynamic question-to-category mapping, lifting successful selection completion by 30%.',
        'Implemented deep linking between product selection and customization via shared container context, cutting user interaction steps by 40%.',
      ]},
    ],
  },
  {
    when: 'Apr 2024 – Aug 2024',
    role: 'Full Stack Developer Intern',
    org: 'Marvix · Hyderabad, India',
    groups: [{ name: null, items: [
      'Built secure authentication and user-management modules with React.js, Node.js, JWT, bcrypt and Zod.',
      'Built and integrated a Shopify plugin with a React front end and REST APIs for dynamic page management and product updates.',
      'Optimized frontend routing and cut redundant API calls by 20% through better API integration.',
    ]}],
  },
]

export const finsight = {
  title: 'FinSight — Personal Finance & Analytics Platform',
  tagline: 'A production-oriented platform for tracking expenses, income and budgets, with database-side analytics for planned-vs-actual spending trends.',
  tags: ['Java 21','Spring Boot','Spring Security','JWT','Spring Data JPA','Hibernate','PostgreSQL','Flyway','React.js'],
  flow: ['React client','JWT auth filter','Spring REST controllers','Service layer','Spring Data JPA','PostgreSQL'],
  blocks: [
    ['Architecture & API design', 'Modular REST APIs built around DTO-based request/response models, Bean Validation and custom exception handling, with transactional service boundaries keeping business logic out of controllers. Listing endpoints support pagination, sorting and dynamic JPA Specifications for filtered queries.'],
    ['Security', "Spring Security with JWT access and refresh tokens, encoded passwords and role-based access control. Data access is scoped per user, so one account can never read another's records even through a manipulated request."],
    ['Database design', 'PostgreSQL schema managed through Spring Data JPA and Hibernate, using lazy loading and explicit entity relationships. Schema changes ship as version-controlled Flyway migrations rather than manual edits, so the schema history stays reproducible.'],
    ['Analytics', 'Spending trends and category breakdowns are computed with JPQL projections and GROUP BY queries at the database level, rather than pulling full entities into memory — the aggregation happens where the data lives.'],
  ],
}

export const reservation = {
  title: 'Restaurant Reservation Platform',
  tagline: 'Full-stack reservation system covering restaurant discovery, table availability and booking confirmation.',
  tags: ['React.js','Redux','Redux Saga','Node.js','Express.js','MongoDB'],
  items: [
    'RESTful APIs in Express.js and MongoDB for restaurants, tables, availability and reservations.',
    'Centralized state management with Redux and Redux Saga for async API workflows, reservation state and error handling.',
    'Reduced redundant requests and improved state reuse through restructured, reusable React components.',
  ],
}

export const skills = [
  ['languages', ['Java','JavaScript','SQL','C++']],
  ['frontend', ['React.js','Redux','HTML5','CSS3','Tailwind CSS']],
  ['backend', ['Spring Boot','Spring MVC','Spring Data JPA','Hibernate','Node.js','Express.js','REST APIs']],
  ['security', ['Spring Security','JWT','RBAC','bcrypt']],
  ['databases', ['PostgreSQL','MongoDB']],
  ['tooling', ['Flyway','Git / GitHub','Postman','IntelliJ IDEA','VS Code']],
]
