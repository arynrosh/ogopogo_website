// src/data/blogs.ts

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2' | 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'hr' }
  | { type: 'img'; src: string; alt?: string }
  | { type: 'quote'; text: string };

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;        // ISO string
  readTime: string;
  author: string;
  category: 'Engineering' | 'Competition' | 'Team' | 'Community' | 'Partnerships';
  tags: string[];
  // NEW: structured content
  contentBlocks?: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Ogopogo Solar Unveils New Test Vehicle',
    excerpt:
      'Our team proudly introduces the first stage of our solar-electric test vehicle — a crucial step toward competing on the global stage.',
    image:
      'https://images.pexels.com/photos/9818553/pexels-photo-9818553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    date: '2025-08-01',
    readTime: '4 min read',
    author: 'Aryan Roshan',
    category: 'Engineering',
    tags: ['Solar Car', 'Engineering', 'Prototype'],
    contentBlocks: [
      { type: 'p', text: 'We’re thrilled to share early rolling-chassis test results along with the design decisions that shaped our battery pack, drivetrain, and telemetry.' },
      { type: 'p', text: 'This milestone is only the beginning. Expect more deep dives as we bring subsystems online, test in real-world conditions, and iterate toward a competition-ready car.' },
    ],
  },
  {
    id: 2,
    title: 'Preparing for the 2026 Solar Car Challenge',
    excerpt:
      'We’re shifting our timeline to meet the 2026 Solar Car Challenge — here’s what that means for our build phases and testing schedule.',
    image:
      'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    date: '2025-07-15',
    readTime: '3 min read',
    author: 'Team Ogopogo',
    category: 'Competition',
    tags: ['Competition', 'Timeline', 'Planning'],
    contentBlocks: [
      { type: 'p', text: 'Our roadmap emphasizes subsystem maturity across four fronts:' },
      { type: 'ul', items: ['Battery safety', 'Drive reliability', 'Telemetry visibility', 'Serviceability'] },
      { type: 'p', text: 'Key milestones include shakedown tests, endurance runs, and aero prototyping — all aligned with the 2026 Solar Car Challenge window.' },
    ],
  },
  {
    id: 3,
    title: 'Community Outreach: Inspiring the Next Generation',
    excerpt:
      'Our outreach program aims to spark interest in renewable energy and engineering among local students through interactive workshops.',
    image:
      'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    date: '2025-06-20',
    readTime: '2 min read',
    author: 'Samantha Lee',
    category: 'Community',
    tags: ['Community', 'STEM', 'Education'],
    contentBlocks: [
      { type: 'p', text: 'Our outreach program is built to spark curiosity about renewable energy.' },
      { type: 'ul', items: ['Hands-on workshops', 'Interactive demonstrations', 'Mentorship sessions'] },
      { type: 'p', text: 'By making solar tech approachable, we’re inspiring the next generation of engineers and innovators.' },
    ],
  },
  {
    id: 4,
    title: 'Ogopogo Solar Launches Its Website: A New Digital Chapter',
    excerpt:
      'November 2nd, 2024 marks a major milestone: the launch of our official website — a central hub for our projects, people, and mission.',
    image: 'https://i.ibb.co/ccNqCCM6/we-are-hiring-7.png',
    date: '2025-08-18',
    readTime: '5 min read',
    author: 'Ryan Li & Aryan Roshan',
    category: 'Community',
    tags: ['Website', 'Team', 'Announcement'],
    contentBlocks: [
      {
        type: 'p',
        text:
          'November 2nd, 2024, marks an exciting milestone for Ogopogo Solar. Just over a year since its inauguration, Ogopogo Solar proudly launched its very own website — a vision that was long in the making but is now a reality.'
      },
      {
        type: 'p',
        text:
          'The journey to bring this project online wasn’t without its challenges. Our software leads, Ryan Li and Aryan Roshan, overcame numerous hurdles — from debugging complex syntax errors to navigating scheduling delays — to make this online presence possible.'
      },
      {
        type: 'p',
        text:
          'The launch of our website represents more than just a digital home; it’s a powerful platform that allows us to share our work, goals, and mission with a wider audience. Our website is designed as a central hub for anyone interested in solar car technology, sustainability, and the mission of Ogopogo Solar. Here’s a glimpse of what you can explore:'
      },
      { type: 'h3', text: 'What You Can Explore' },
      {
        type: 'ul',
        items: [
          'Project Showcase — Discover the latest on our solar car projects, with insights into our engineering approaches, designs, and ambitious goals.',
          'Team Spotlights — Meet the talented individuals behind Ogopogo Solar and learn about the roles they play in bringing our projects to life.',
          'Event Updates — Stay informed about upcoming races, workshops, and community outreach initiatives that promote renewable energy.',
          'Blog & News — Read about our milestones, explore solar technology topics, and catch up on competition updates.',
          'Join Us — Passionate about renewable energy and innovation? Find out how you can get involved and be part of our journey.'
        ]
      },
      {
        type: 'p',
        text:
          'With our website launch, we’re excited to build a stronger community around sustainable energy and solar technology. Dive into our projects, connect with our team, and be part of our drive toward a greener tomorrow.'
      },
      {
        type: 'quote',
        text:
          'Welcome to Ogopogo Solar — where every visit supports a brighter, cleaner future!'
      }
    ]
  },
  {
    id: 5,
    title: 'Shakedown Test: Rolling Chassis #1 Results',
    excerpt:
      'We completed our first 10 km shakedown to validate drivetrain efficiency, thermal headroom, and telemetry reliability.',
    image:
      'https://images.pexels.com/photos/2449455/pexels-photo-2449455.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    date: '2025-08-18',
    readTime: '4 min read',
    author: 'Team Ogopogo',
    category: 'Engineering',
    tags: ['Testing', 'Telemetry', 'Battery'],
    contentBlocks: [
      { type: 'p', text: 'Today we took Rolling Chassis #1 out for a controlled 10 km shakedown. The goal: verify that power electronics, battery thermal limits, and live telemetry behave under light load.' },
      { type: 'h3', text: 'Test Goals' },
      { type: 'ul', items: ['Confirm drivetrain efficiency at low-to-mid speeds', 'Validate pack temps under continuous 2–4 kW draw', 'Exercise telemetry pipeline end-to-end'] },
      { type: 'hr' },
      { type: 'h3', text: 'Early Results' },
      { type: 'p', text: 'Average electrical power draw was ~2.8 kW at 32–36 km/h with no aero installed. Peak cell temps remained 12°C below our warning threshold. No packet loss in the telemetry stream after enabling message batching.' },
      { type: 'img', src: 'https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', alt: 'Laptop showing live telemetry charts' },
      { type: 'h3', text: 'What’s Next' },
      { type: 'ul', items: ['Add provisional aero and repeat run', 'Longer endurance loop with hill section', 'Thermal mapping at higher ambient temps'] },
      { type: 'quote', text: 'A quiet first pass is exactly what we wanted—no surprises, just data.' }
    ]
  }
];

export const blogCategories = ['Engineering', 'Competition', 'Team', 'Community', 'Partnerships'] as const;
