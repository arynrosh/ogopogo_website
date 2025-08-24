// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag, User, Target, Zap, Users } from 'lucide-react';
import { blogPosts, type BlogPost } from '../data/blogs';
import Hero from '../components/Hero';
import BlogReaderModal from '../components/BlogReaderModal';
import { sponsorTiers } from '../data/sponsors';

const logoHeights: Record<string, string> = {
  'Platinum Sponsor': 'h-52 sm:h-60 md:h-64',
  'Gold Sponsor': 'h-48 sm:h-56 md:h-60',
  'Silver Sponsor': 'h-44 sm:h-52 md:h-56',
  'Bronze Sponsor': 'h-40 sm:h-48 md:h-52',
};

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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Smooth scroll to top, then navigate (used for CTA buttons/links only)
  const smoothNavigate =
    (to: string) =>
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = prefersReduced ? 0 : 450;
      setTimeout(() => navigate(to), delay);
    };

  // Sponsors marquee
  const sponsorsWithTier = sponsorTiers.flatMap((tier) =>
    tier.sponsors.map((s) => ({ ...s, tierName: tier.name }))
  );
  const loopRow = [...sponsorsWithTier, ...sponsorsWithTier];

  // Keyboard support for opening modal from a card
  const onCardKeyDown = (e: React.KeyboardEvent, post: BlogPost) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActivePost(post);
    }
  };

  return (
    <div className="animate-fade-in font-sans">
      {/* Full-screen Hero (priority for LCP) */}
      <Hero
        backgroundImage="https://i.ibb.co/nsCR7z0V/Get-Paid-Stock-com-6898bce4f0b8f.jpg"
        sizes="100vw"
        priority
        title={
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">
                RIDE THE LEGEND
              </span>
              <span className="block font-extrabold break-words fluid-hero-2" style={{ color: '#ffc82e' }}>
                RACE THE SUN
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* OUR MISSION & OUR VISION */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 800px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 flex flex-col gap-6 sm:gap-8">
          {/* OUR MISSION */}
          <div className="bg-[#015e37] rounded-3xl shadow-lg px-6 sm:px-8 md:px-12 py-10 sm:py-12 text-center">
            <h2 className="font-bold mb-4 text-white fluid-h1">
              OUR <span className="text-[#ffc82e]">MISSION</span>
            </h2>
            <p className="leading-relaxed text-white/90 max-w-prose mx-auto fluid-body">
              We design, build, and race solar-powered vehicles that push clean mobility forward
              while giving students real, hands-on engineering experience.
            </p>
          </div>

          {/* OUR VISION */}
          <div className="bg-white rounded-3xl shadow-lg px-6 sm:px-8 md:px-12 py-10 sm:py-12">
            <h2 className="font-bold text-gray-900 text-center mb-8 fluid-h1">
              OUR <span style={{ color: '#015e37' }}>VISION</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
              {[
                { icon: Target, title: 'INNOVATION', description: 'Pushing new aero, battery, and chassis designs every season.' },
                { icon: Zap, title: 'SUSTAINABILITY', description: 'Turning sunlight into reliable, race-proven performance.' },
                { icon: Users, title: 'EDUCATION', description: 'Real projects, real deadlines — industry-ready skills.' },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center rounded-2xl border border-gray-100 p-6 h-full"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center mb-3"
                    style={{ backgroundColor: '#015e37' }}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#ffc82e' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 fluid-h2">{feature.title}</h3>
                  <p className="text-gray-600 fluid-body">{feature.description}</p>
                  <div className="mt-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 600px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {/* Title + subtitle + CTA */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 fluid-h1">
                OUR <span style={{ color: '#015e37' }}>SPONSORS</span>
              </h2>
              {/* DESKTOP button */}
              <Link
                to="/sponsors"
                onClick={smoothNavigate('/sponsors')}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black/10 fluid-btn"
                style={{ backgroundColor: '#ffc82e', color: '#fff' }}
              >
                VIEW ALL SPONSORS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-2 text-gray-600 fluid-body">
              These partners power our mission to design, build, and race for a sustainable future.
            </p>
          </div>

          {/* Marquee */}
          <div
            className="relative overflow-hidden select-none"
            onMouseEnter={(e) => {
              const t = (e.currentTarget.querySelector('.marquee-track') as HTMLElement) || null;
              if (t) t.classList.add('marquee-paused');
            }}
            onMouseLeave={(e) => {
              const t = (e.currentTarget.querySelector('.marquee-track') as HTMLElement) || null;
              if (t) t.classList.remove('marquee-paused');
            }}
            onFocus={(e) => {
              const t = (e.currentTarget.querySelector('.marquee-track') as HTMLElement) || null;
              if (t) t.classList.add('marquee-paused');
            }}
            onBlur={(e) => {
              const t = (e.currentTarget.querySelector('.marquee-track') as HTMLElement) || null;
              if (t) t.classList.remove('marquee-paused');
            }}
          >
            <div className="whitespace-nowrap">
              <div className="marquee-track">
                {[...loopRow].map((s, i) => (
                  <a
                    key={`${s.name}-${i}`}
                    href={s.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block align-middle"
                    aria-label={`${s.name} website`}
                  >
                    <div className="w-[260px] sm:w-[300px] md:w-[340px]">
                      <div className="relative w-full aspect-[16/9] grid place-items-center">
                        <img
                          src={s.logo}
                          alt={s.name}
                          loading="lazy"
                          decoding="async"
                          className={`absolute inset-0 mx-auto ${logoHeights[s.tierName] || 'h-36'} w-auto object-contain transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg`}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-gray-500 md:hidden">
              Tap and hold to pause →
            </div>
          </div>

          {/* MOBILE/TABLET button */}
          <div className="md:hidden mt-6">
            <Link
              to="/sponsors"
              onClick={smoothNavigate('/sponsors')}
              className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 fluid-btn"
              style={{ backgroundColor: '#ffc82e', color: '#fff' }}
            >
              View All Sponsors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview — opens modal directly on Home */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 800px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 fluid-h1">
                FROM THE <span style={{ color: '#015e37' }}>BLOG</span>
              </h2>
              <Link
                to="/blog"
                onClick={smoothNavigate('/blog')}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black/10 fluid-btn"
                style={{ backgroundColor: '#ffc82e', color: '#fff' }}
              >
                VIEW ALL BLOGS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-2 text-gray-600 fluid-body">
              Stories, updates, and milestones from our journey in building Okanagan’s first solar race vehicle.
            </p>
          </div>

          {/* Cards mirror News page; click opens modal (no navigation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                role="button"
                tabIndex={0}
                onClick={() => setActivePost(post)}
                onKeyDown={(e) => onCardKeyDown(e, post)}
                className="
                  blog-card cursor-none
                  group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40
                "
                aria-label={`Open post: ${post.title}`}
              >
                <div className="relative w-full overflow-hidden">
                  <div className="w-full aspect-[16/9]">
                    <img
                      src={post.image || ''}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full font-medium fluid-small ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Date + read time row */}
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

                  {/* Author row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-dark-400" />
                      <span className="text-dark-600 fluid-small">{post.author}</span>
                    </div>
                  </div>

                  {/* Tags (cap at 3) */}
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

          {/* Mobile "View all" */}
          <div className="md:hidden mt-8">
            <Link
              to="/blog"
              onClick={smoothNavigate('/blog')}
              className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 fluid-btn"
              style={{ backgroundColor: '#ffc82e', color: '#fff' }}
            >
              View All Blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BUBBLE (newsletter-style) */}
      <section
        className="bg-white py-12 sm:py-16 md:py-20 content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 500px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16">
            <h2 className="font-extrabold leading-tight mb-4 md:mb-6 fluid-h1">
              READY TO SHAPE THE <span className="text-[#ffc82e]">FUTURE?</span>
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 fluid-body">
              Join our team of passionate engineers, designers, and innovators as we race
              toward a sustainable tomorrow. Every skill has a place in our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/join"
                onClick={smoothNavigate('/join')}
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition fluid-btn"
              >
                JOIN OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Reader on Home */}
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

export default Home;
