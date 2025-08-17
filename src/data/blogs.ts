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
      'We’re proud to announce the launch of our new website — a central hub for our projects, people, and mission.',
    image: 'https://i.ibb.co/600rv4Cn/we-are-hiring-6.png',
    date: '2024-11-02',
    readTime: '5 min read',
    author: 'Ryan Li & Aryan Roshan',
    category: 'Community',
    tags: ['Website', 'Team', 'Announcement'],
    contentBlocks: [
      { type: 'p', text: 'November 2nd, 2024 marked a milestone for Ogopogo Solar.' },
      { type: 'p', text: 'Just over a year since our founding, we’ve launched our very own website — a vision long in the making that is now reality.' },
      { type: 'p', text: 'The journey wasn’t without challenges. Our software leads, Ryan Li and Aryan Roshan, navigated debugging headaches and scheduling delays to bring this platform online.' },
      { type: 'h3', text: 'What You’ll Find on the Website' },
      { type: 'ul', items: [
        'Project Showcase: updates on engineering approaches, designs, and goals.',
        'Team Spotlights: profiles of the people who make Ogopogo Solar possible.',
        'Event Updates: races, workshops, and community outreach.',
        'Blog & News: stories, milestones, and competition insights.',
        'Join Us: ways to get involved and contribute.',
      ]},
      { type: 'p', text: 'With this launch, we’re building a stronger community around solar technology.' },
      { type: 'p', text: 'Explore our projects, connect with our team, and join us as we drive toward a cleaner tomorrow.' },
      { type: 'quote', text: 'Welcome to Ogopogo Solar — where every visit supports a brighter, cleaner future!' },
    ],
  },
];

export const blogCategories = ['Engineering', 'Competition', 'Team', 'Community', 'Partnerships'] as const;
