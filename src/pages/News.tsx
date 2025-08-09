// src/pages/News.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, User, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';

export const blogPosts = [
  {
    id: 1,
    title: 'Breaking Ground: Our First Solar Panel Installation',
    excerpt:
      'The team successfully installed our first high-efficiency solar array on the demo vehicle, marking a major milestone in our journey toward the Solar Car Challenge 2026.',
    content:
      "After months of planning and preparation, we've successfully completed the installation of our first solar array on Genesis, our demo vehicle. This milestone represents countless hours of research, design, and careful implementation by our electrical systems team.",
    image:
      'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Engineering',
    author: 'Marcus Rodriguez',
    tags: ['Solar Technology', 'Engineering', 'Milestone'],
  },
  {
    id: 2,
    title: 'Aerodynamics Testing: Wind Tunnel Results Exceed Expectations',
    excerpt:
      'Our latest wind tunnel tests show significant improvements in drag coefficient, bringing us closer to our performance goals for the competition vehicle.',
    content:
      'The results from our recent wind tunnel testing session at UBC Vancouver have exceeded our expectations. Our aerodynamics team, led by Emma Thompson, achieved a drag coefficient of 0.18 for our demo vehicle - a remarkable achievement that validates our design approach.',
    image:
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-03-08',
    readTime: '8 min read',
    category: 'Engineering',
    author: 'Emma Thompson',
    tags: ['Aerodynamics', 'Testing', 'Performance'],
  },
  {
    id: 3,
    title: 'Community Outreach: Inspiring Young Engineers',
    excerpt:
      'We visited local high schools to share our passion for sustainable engineering and renewable energy with the next generation of innovators.',
    content:
      'Our community outreach program reached over 200 high school students this month. Team members presented at three local schools, demonstrating solar technology and sharing their experiences in engineering and sustainable transportation.',
    image:
      'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-02-28',
    readTime: '4 min read',
    category: 'Community',
    author: 'Alex Morrison',
    tags: ['Outreach', 'Education', 'Community'],
  },
  {
    id: 4,
    title: 'New Partnership: Tesla Energy Solutions Joins Our Mission',
    excerpt:
      "We're excited to announce our partnership with Tesla Energy Solutions, who will provide battery technology and charging infrastructure support.",
    content:
      'Tesla Energy Solutions has joined Ogopogo Solar as our newest Platinum Partner. This partnership will provide us with cutting-edge battery technology and access to their charging infrastructure expertise, significantly advancing our competition vehicle development.',
    image:
      'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-02-20',
    readTime: '3 min read',
    category: 'Partnerships',
    author: 'Alex Morrison',
    tags: ['Partnership', 'Tesla', 'Battery Technology'],
  },
  {
    id: 5,
    title: 'Team Spotlight: Meet Our New Software Engineer',
    excerpt:
      'Priya Patel joins our team as Software & Controls Engineer, bringing expertise in embedded systems and data analysis.',
    content:
      "We're thrilled to welcome Priya Patel to the Ogopogo Solar team. As our new Software & Controls Engineer, Priya brings extensive experience in embedded systems, having previously developed mobile applications with over 100,000 downloads.",
    image:
      'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-02-15',
    readTime: '6 min read',
    category: 'Team',
    author: 'Sarah Chen',
    tags: ['Team', 'Software', 'New Member'],
  },
  {
    id: 6,
    title: 'Solar Car Challenge 2026: Registration Complete',
    excerpt:
      "We've officially registered for the Solar Car Challenge 2026, marking the beginning of our intensive preparation phase.",
    content:
      "After months of preparation and planning, we've successfully completed our registration for the Solar Car Challenge 2026. This prestigious competition will test every aspect of our vehicle design and team preparation over a multi-day endurance race.",
    image:
      'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-02-10',
    readTime: '7 min read',
    category: 'Competition',
    author: 'Sarah Chen',
    tags: ['Competition', 'Solar Car Challenge', 'Registration'],
  },
];

const categories = ['All', 'Engineering', 'Competition', 'Team', 'Community', 'Partnerships'];

const News: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const postsSorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  const filteredPosts = useMemo(() => {
    return postsSorted.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [postsSorted, selectedCategory, searchTerm]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, typeof filteredPosts> = {};
    for (const p of filteredPosts) {
      const y = new Date(p.date).getFullYear().toString();
      if (!groups[y]) groups[y] = [];
      groups[y].push(p);
    }
    return Object.fromEntries(Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a)));
  }, [filteredPosts]);

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => clearTimeout(t);
  }, [location, filteredPosts.length]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  const getCategoryColor = (category: string) => {
    const colors = {
      Engineering: 'bg-primary-100 text-primary-800',
      Competition: 'bg-gold-100 text-gold-800',
      Team: 'bg-blue-100 text-blue-800',
      Community: 'bg-green-100 text-green-800',
      Partnerships: 'bg-purple-100 text-purple-800',
    } as const;
    return (colors as any)[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="animate-fade-in">
      <Hero
        backgroundImage="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center">
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-white leading-none">
                BLOG
              </span>
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-[#ffc82e] leading-none whitespace-nowrap">
                ARCHIVE
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/45"
      />

      {/* Search + Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#ffc82e] text-white shadow-lg'
                      : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(groupedByYear).length === 0 ? (
            <p className="text-center text-gray-600">No posts match your filters.</p>
          ) : (
            Object.entries(groupedByYear).map(([year, posts]) => (
              <div key={year} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gray-200" />
                  <h2 className="text-3xl font-extrabold text-dark-900">{year}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, idx) => (
                    <article
                      key={post.id}
                      id={`post-${post.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                              post.category
                            )}`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-dark-500 mb-3 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-dark-600 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-dark-400" />
                            <span className="text-sm text-dark-600">{post.author}</span>
                          </div>
                          <a
                            href={`#post-${post.id}`}
                            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                          >
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              <Tag className="h-3 w-3" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              STAY <span className="text-[#ffc82e]">UPDATED</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter to get the latest updates on our solar racing journey.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ffc82e] focus:border-[#ffc82e] transition-colors text-white placeholder-gray-300"
                />
                <button className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-lg font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
