// src/pages/Home.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import Hero from '../components/Hero';
import { sponsorTiers } from '../data/sponsors';

const logoHeights: Record<string, string> = {
  'Platinum Sponsor': 'h-52 sm:h-60 md:h-64',
  'Gold Sponsor': 'h-48 sm:h-56 md:h-60',
  'Silver Sponsor': 'h-44 sm:h-52 md:h-56',
  'Bronze Sponsor': 'h-40 sm:h-48 md:h-52',
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const posts = blogPosts.slice(0, 3);

  // Smooth scroll to top, then navigate
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

  // Flatten sponsors with their tier so we can size logos exactly
  const sponsorsWithTier = sponsorTiers.flatMap((tier) =>
    tier.sponsors.map((s) => ({ ...s, tierName: tier.name }))
  );
  // Duplicate list once for seamless looping
  const loopRow = [...sponsorsWithTier, ...sponsorsWithTier];

  return (
    <div className="animate-fade-in font-sans">
      {/* Full-screen Hero */}
      <Hero
        backgroundImage="https://i.ibb.co/nsCR7z0V/Get-Paid-Stock-com-6898bce4f0b8f.jpg"
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
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

          {/* OUR VISION (responsive grid, aligned heights) */}
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
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

          {/* Marquee wrapper (styles are now global in index.css) */}
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
                          className={`absolute inset-0 mx-auto ${logoHeights[s.tierName] || 'h-36'} w-auto object-contain transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg`}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile hint (optional) */}
            <div className="mt-3 text-center text-xs text-gray-500 md:hidden">
              Tap and hold to pause →
            </div>
          </div>

          {/* MOBILE/TABLET button BELOW carousel */}
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

      {/* Blog Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {/* Title + subtitle + DESKTOP CTA */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 fluid-h1">
                FROM THE <span style={{ color: '#015e37' }}>BLOG</span>
              </h2>
              <Link
                to="/news"
                onClick={smoothNavigate('/news')}
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <Link
                  to={`/news#post-${post.id}`}
                  onClick={smoothNavigate(`/news#post-${post.id}`)}
                  className="block focus:outline-none focus:ring-2 focus:ring-black/10"
                >
                  <div className="relative w-full overflow-hidden">
                    <div className="w-full aspect-[16/9]">
                      <img
                        src={post.image || ''}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 text-white backdrop-blur px-3 py-1 font-semibold fluid-small">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#ffc82e' }} />
                      {(post.category?.toUpperCase() || 'UPDATE')}
                    </div>
                  </div>

                  <div className="p-6">
                    <time className="text-gray-500 block fluid-small">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#015e37] transition-colors fluid-h2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-3 fluid-body">{post.excerpt}</p>

                    <div className="mt-4 inline-flex items-center gap-2 font-semibold text-[#015e37] group-hover:text-[#0a7f50] transition-colors fluid-small">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Mobile "View all" */}
          <div className="md:hidden mt-8">
            <Link
              to="/news"
              onClick={smoothNavigate('/news')}
              className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 fluid-btn"
              style={{ backgroundColor: '#ffc82e', color: '#fff' }}
            >
              View All Blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 text-white" style={{ backgroundColor: '#015e37' }}>
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-bold mb-4 sm:mb-6 tracking-wide fluid-cta">
            READY TO SHAPE THE <span className="text-[#ffc82e]">FUTURE?</span>
          </h2>

          <p className="text-white/85 mb-8 sm:mb-10 max-w-3xl mx-auto fluid-body">
            Join our team of passionate engineers, designers, and innovators as we race toward
            a sustainable tomorrow. Every skill has a place in our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/join"
              onClick={smoothNavigate('/join')}
              className="uppercase tracking-widest font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/60 fluid-btn"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
