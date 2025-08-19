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
        title: 'Ogopogo Solar Relaunches Its Website: A Fresh Start',
        excerpt: 'We’re excited to unveil our new and improved website — a clean, reliable hub for everything Ogopogo Solar.',
        image: 'https://i.ibb.co/v4TrBdW2/we-are-hiring-9.png',
        date: '2025-08-23',
        readTime: '5 min read',
        author: 'Aryan Roshan',
        category: 'Community',
        tags: ['Website', 'Update', 'Announcement'],
        contentBlocks: [
          {
            type: 'p',
            text:
              'On August 23rd, 2025, Ogopogo Solar is proud to relaunch its official website. After our first attempt last year — a rough but important step forward — we’ve rebuilt from the ground up to create a polished, reliable, and engaging online home for our team and community.'
          },
          {
            type: 'p',
            text:
              'This new site is more than a facelift. It’s a platform that reflects who we are, what we’re building, and how you can follow or join our journey. From improved navigation to updated content, our goal was simple: make it easier than ever to connect with Ogopogo Solar.'
          },
          { type: 'h3', text: 'What’s New' },
          {
            type: 'ul',
            items: [
              'Streamlined design that\'s faster, cleaner, and mobile-friendly.',
              'Updated project pages with clearer progress updates.',
              'Team section highlighting our growing group of students.',
              'Events & news with simpler ways to stay updated.',
              'Better “Join Us” page for new members and supporters.'
            ]
          },
          {
            type: 'p',
            text:
              'The website is now ready to grow with us. As we continue developing our solar car and expanding our presence in the community, this platform will serve as the foundation for sharing our work and mission.'
          },
          {
            type: 'quote',
            text:
              'This is just the beginning — welcome to the new Ogopogo Solar website!'
          }
        ]
    },
    // {
    //   id: 2,
    //   title: 'Welcoming Altair as Our New Sponsor',
    //   excerpt: 'We’re proud to welcome Altair as a sponsor, equipping our team with world-class simulation tools to design and optimize our solar vehicle.',
    //   image: 'https://i.ibb.co/MkBFrvF3/altairblog.png',
    //   date: '2025-08-26',
    //   readTime: '3 min read',
    //   author: 'Aryan Roshan',
    //   category: 'Partnerships',
    //   tags: ['Altair', 'Partnership', 'Innovation'],
    //   contentBlocks: [
    //     {
    //       type: 'p',
    //       text:
    //         'Ogopogo Solar is thrilled to announce Altair as a new sponsor of our team. Altair is a global leader in simulation-driven product development, trusted by top industries to push the boundaries of design and engineering. Their support marks a significant step forward in our mission to build a cutting-edge solar race car here at UBC Okanagan.'
    //     },
    //     {
    //       type: 'p',
    //       text:
    //         'As part of this partnership, Altair has generously provided our team with access to the Altair HyperWorks Simulation Suite through five concurrent commercial licenses. These industry-standard tools will allow our engineering team to explore new designs, test structural integrity, and optimize performance in ways that were previously out of reach.'
    //     },
    //     {
    //       type: 'p',
    //       text:
    //         'This collaboration is more than just software — it represents a shared commitment to sustainability, innovation, and empowering students to take on real-world engineering challenges. With Altair’s support, we’re better equipped to design a vehicle that embodies both efficiency and performance.'
    //     },
    //     {
    //       type: 'quote',
    //       text:
    //         '“Altair’s sponsorship empowers our students to design like professionals and innovate with confidence. We’re excited to bring these tools into our workflow as we continue building the future of sustainable transportation.”'
    //     },
    //     {
    //       type: 'p',
    //       text:
    //         'We’re grateful to Altair for believing in our vision and investing in the next generation of engineers. This partnership accelerates our journey, and we can’t wait to showcase what’s possible with their technology driving our design process.'
    //     }
    //   ]
    // }
];

export const blogCategories = ['Engineering', 'Competition', 'Team', 'Community', 'Partnerships'] as const;
