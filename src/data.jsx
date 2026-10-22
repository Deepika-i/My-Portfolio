export const EMAIL = 'deepikam200120@gmail.com'

export const ROLES = [
  'Web Developer',
  'Full Stack Developer',
  'FrontEnd Developer',
  'Backend Developer',
  'Python Developer',
]

export const NAV = [
  ['top', 'About'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['services', 'Services'],
  ['contact', 'Contact'],
]

export const SKILLS = [
  { n: 'HTML5', i: '5', x: 16, y: 40, g: '#ff6a3a', dl: 0, lv: 90 },
  { n: 'CSS3', i: '3', x: 34, y: 20, g: '#3a8aff', dl: 0.6, lv: 85 },
  { n: 'JavaScript', i: 'JS', x: 50, y: 50, g: '#ffd23a', dl: 1.2, lv: 80 },
  { n: 'React', i: '⚛', x: 66, y: 18, g: '#3ad0ff', dl: 1.8, lv: 75 },
  { n: 'Node.js', i: 'JS', x: 86, y: 36, g: '#7ac43a', dl: 2.4, lv: 70 },
  { n: 'MySQL', i: '🐬', x: 27, y: 70, g: '#3a9aff', dl: 0.9, lv: 0 },
  { n: 'Python', i: '◎', x: 50, y: 90, g: '#a855f7', dl: 1.5, lv: 15 },
  { n: 'Bootstrap', i: 'BS ', x: 75, y: 70, g: '#ff5a8a', dl: 2.1, lv: 80 },
]

export const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [2, 5],
  [2, 7],
  [2, 6],
  [1, 3],
]

export const PROJECTS = [
  {
    id: 'ecom',
    title: 'E-Commerce Website',
    desc: 'A modern e-commerce platform with smooth UI/UX, cart and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB'],
    role: 'Full Stack · Solo project',
    long: 'An online store where visitors browse products, filter by category, add items to a cart and check out securely. It has a React front end, a Node.js API and MongoDB for products and orders.',
    features: [
      'Product list with search and filters',
      'Cart with live total',
      'Secure checkout flow',
      'Admin can add and edit products',
    ],
     liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourname/ecommerce',
  },
  {
    id: 'dash',
    title: 'Admin Dashboard',
    desc: 'Responsive admin panel with analytics, user management and charts.',
    tags: ['React', 'Tailwind', 'Node.js'],
    role: 'Front-end · Solo project',
    long: 'A responsive admin panel with sales and user charts, a searchable user table and a sidebar that works on phones.',
    features: [
      'Analytics cards and bar charts',
      'User management table',
      'Responsive sidebar',
      'Loading states while data arrives',
    ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourname/ecommerce',
  },
  {
    id: 'port',
    title: 'Portfolio Website',
    desc: 'A personal portfolio with a clean responsive layout, smooth scroll animations and a contact section.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    role: 'Front-end · Solo project',
    long: 'A personal portfolio with a clean responsive layout, smooth scroll animations and a contact section.',
    features: [
      'Looks good on phone and desktop',
      'Scroll animations',
      'Working contact form',
      'Fast loading with no extra libraries',
    ],
         liveUrl: 'https://example.com',
         githubUrl: 'https://github.com/yourname/ecommerce',
  },
  {
    id: 'wx',
    title: 'Weather App',
    desc: 'A Real-time weather app with location search, forecasts, temperature, and weather updates.',
    tags: ['React', 'API', 'CSS'],
    role: 'Front-end · Solo project',
    long: 'Shows live weather and a three-day forecast for any city using a public weather API, with a search box.',
    features: [
      'City search',
      'Current weather and forecast',
      'Location detection',
      'Clear loading and error messages',
    ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourname/ecommerce',
  },
]

export const SERVICES = [
  {
    t: 'Custom website design',
    d: 'Modern, responsive websites built for your business needs.',
    l: [
      'Layout and branding',
      'Mobile-first pages',
      'Smooth animations',
    ],
    p: 'm8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  },
  {
    t: 'Front-end development',
    d: 'Pixel-perfect, fast and responsive web applications.',
    l: [
      'React interfaces',
      'API integration',
      'Fast load times',
    ],
    p: 'm12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
  },
  {
    t: 'E-commerce solutions',
    d: 'Secure and scalable online stores with seamless UX.',
    l: [
      'Product catalogues',
      'Cart and checkout',
      'Secure payments',
    ],
    p: 'M3 4h2l2.5 11h11L21 7H6M9 20a1 1 0 1 0 0 .01M17 20a1 1 0 1 0 0 .01',
  },
  {
    t: 'Website maintenance',
    d: 'Keep your site secure, updated and running smoothly.',
    l: [
      'Updates and backups',
      'Bug fixes',
      'Performance checks',
    ],
    p: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4',
  },
]

export const SOCIALS = [
  [
    'GitHub',
    'https://github.com/Deepika-i',
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.6 5 2 5 2a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3.5 9.5c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-1 2.6V22" />,
  ],
  [
    'LinkedIn',
    '#',
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  ],
  [
    'Instagram',
    '#',
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".5" />
    </>,
  ],
 
]