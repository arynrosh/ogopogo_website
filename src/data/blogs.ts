// src/data/blog.ts

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;        // ISO date string e.g., "2025-08-01"
  readTime: string;    // e.g., "4 min read"
  author: string;
  category: 'Engineering' | 'Competition' | 'Team' | 'Community' | 'Partnerships';
  tags: string[];
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
  },
];

// Core categories (without "All" convenience option)
export const blogCategories = ['Engineering', 'Competition', 'Team', 'Community', 'Partnerships'] as const;
