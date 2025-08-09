// src/pages/News.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, User, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';

export const blogPosts = [
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
    if (!location.hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(location.hash) as HTMLElement | null;
      if (!el) return;
      const headerOffset = 90;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);
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
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center leading-none">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white">
                BLOG
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#ffc82e] whitespace-nowrap">
                ARCHIVE
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/45"
      />

      {/* SEARCH + FILTER */}
      <section className="py-12 bg-white border-b">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-none md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div className="w-full md:w-auto -mx-4 md:mx-0 px-4">
              <div className="flex md:flex-wrap gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`snap-start px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
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
        </div>
      </section>

      {/* POSTS ARCHIVE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {Object.keys(groupedByYear).length === 0 ? (
            <p className="text-center text-gray-600">No posts match your filters.</p>
          ) : (
            Object.entries(groupedByYear).map(([year, posts]) => (
              <div key={year} className="mb-12 md:mb-16">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="flex-1 h-px bg-gray-200" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900">{year}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {posts.map((post, idx) => (
                    <article
                      key={post.id}
                      id={`post-${post.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="relative w-full overflow-hidden">
                        <div className="w-full aspect-[16/9]">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-dark-500 mb-3 gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
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
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-dark-400" />
                            <span className="text-sm text-dark-600">{post.author}</span>
                          </div>
                          <a
                            href={`#post-${post.id}`}
                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                          >
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
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

      {/* NEWSLETTER */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
              STAY <span className="text-[#ffc82e]">UPDATED</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-6 md:mb-8">
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
