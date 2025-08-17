// src/pages/News.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, Tag, User, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import BlogReaderModal from '../components/BlogReaderModal';
import { blogPosts, blogCategories, type BlogPost } from '../data/blogs';

const categories = ['All', ...blogCategories];

const News: React.FC = () => {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const postsSorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return postsSorted.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [postsSorted, selectedCategory, searchTerm]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, BlogPost[]> = {};
    for (const p of filteredPosts) {
      const y = new Date(p.date).getFullYear().toString();
      (groups[y] ??= []).push(p);
    }
    return Object.fromEntries(Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a)));
  }, [filteredPosts]);

  // Hash scroll to card
  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(location.hash) as HTMLElement | null;
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);
    return () => clearTimeout(t);
  }, [location, filteredPosts.length]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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

  // open modal from card (click or keyboard)
  const openFromCard = (post: BlogPost) => setActivePost(post);
  const onCardKeyDown = (e: React.KeyboardEvent, post: BlogPost) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFromCard(post);
    }
  };

  return (
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://i.ibb.co/B5CGFzsV/Get-Paid-Stock-com-6898dccd36be1.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-[100svh] px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">BLOG</span>
              <span className="block font-extrabold break-words fluid-hero-2" style={{ color: '#ffc82e' }}>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors fluid-body"
              />
            </div>

            <div className="w-full md:w-auto -mx-4 md:mx-0 px-4">
              <div className="flex md:flex-wrap gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`snap-start px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap fluid-btn ${
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

      {/* POSTS */}
      <section className="pt-20 sm:pt-20 md:pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {Object.keys(groupedByYear).length === 0 ? (
            <p className="text-center text-gray-600 fluid-body">No posts match your filters.</p>
          ) : (
            Object.entries(groupedByYear).map(([year, posts]) => (
              <div key={year} className="mb-12 md:mb-16">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="flex-1 h-px bg-gray-200" />
                  <h2 className="font-extrabold text-dark-900 fluid-h1">{year}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {posts.map((post, idx) => (
                    <article
                      key={post.id}
                      id={`post-${post.id}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => openFromCard(post)}
                      onKeyDown={(e) => onCardKeyDown(e, post)}
                      className="
                        blog-card cursor-none
                        group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40
                      "
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
                          <span
                            className={`px-3 py-1 rounded-full font-medium fluid-small ${getCategoryColor(
                              post.category
                            )}`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-dark-500 mb-3 gap-4 fluid-small">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors fluid-h2">
                          {post.title}
                        </h3>

                        <p className="text-dark-600 mb-4 leading-relaxed line-clamp-3 fluid-body">
                          {post.excerpt}
                        </p>

                        {/* author row only (no Read More button) */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-dark-400" />
                            <span className="text-dark-600 fluid-small">{post.author}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded fluid-small"
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
      <section className="bg-white pb-20 sm:pb-20 md:pb-20">
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

      {/* Reader Modal */}
      {activePost && (
        <BlogReaderModal
          post={activePost}
          onClose={() => setActivePost(null)}
          getCategoryColor={getCategoryColor}
          formatDate={formatDate}
        />
      )}
    </div>
  );
};

export default News;
