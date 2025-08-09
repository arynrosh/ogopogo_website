import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users } from 'lucide-react';
import { blogPosts } from './News';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const posts = blogPosts.slice(0, 3);

  return (
    <div className="animate-fade-in font-sans">
      {/* Full-screen Hero */}
      <Hero backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg" />

      {/* Mission + Pillars */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
            {/* Mission */}
            <div className="flex">
              <div
                className="w-full rounded-3xl text-white px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-14 flex flex-col justify-center shadow-lg"
                style={{ backgroundColor: '#015e37' }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  OUR <span className="text-[#ffc82e]">MISSION</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 mb-6 sm:mb-8">
                  Ogopogo Solar is a student-led team at UBC Okanagan. We design, build,
                  and race solar-powered vehicles to advance clean mobility, prove what
                  renewable energy can do, and develop the next generation of engineers
                  and innovators.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/60"
                  style={{ backgroundColor: '#ffc82e', color: '#fff' }}
                >
                  LEARN MORE
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Pillars */}
            <div className="flex flex-col justify-center gap-4 sm:gap-5">
              {[
                { icon: Target, title: 'INNOVATION', description: 'Pushing new aero, battery, and chassis designs every season.' },
                { icon: Zap, title: 'SUSTAINABILITY', description: 'Turning sunlight into reliable, race-proven performance.' },
                { icon: Users, title: 'EDUCATION', description: 'Real projects, real deadlines — industry-ready skills.' },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center"
                    style={{ backgroundColor: '#015e37' }}
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: '#ffc82e' }} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              FROM THE <span style={{ color: '#015e37' }}>BLOG</span>
            </h2>
            <Link
              to="/news"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10"
              style={{ backgroundColor: '#ffc82e', color: '#fff' }}
            >
              VIEW ALL POSTS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <Link to={`/news#post-${post.id}`} className="block focus:outline-none focus:ring-2 focus:ring-black/10">
                  <div className="relative w-full overflow-hidden">
                    <div className="w-full aspect-[16/9]">
                      <img
                        src={post.image || ''}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 text-white backdrop-blur px-3 py-1 text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#ffc82e' }} />
                      {(post.category?.toUpperCase() || 'UPDATE')}
                    </div>
                  </div>

                  <div className="p-6">
                    <time className="text-sm text-gray-500 block">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-[#015e37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>

                    <div className="mt-4 inline-flex items-center gap-2 font-semibold text-[#015e37] group-hover:text-[#0a7f50] transition-colors">
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
              className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10"
              style={{ backgroundColor: '#ffc82e', color: '#000' }}
            >
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 text-white" style={{ backgroundColor: '#015e37' }}>
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-wide">
            READY TO SHAPE THE <span className="text-[#ffc82e]">FUTURE?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Join our team of passionate engineers, designers, and innovators as we race toward
            a sustainable tomorrow. Every skill has a place in our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/join"
              className="uppercase tracking-widest font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/60"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              Join Our Team
            </Link>

            <Link
              to="/sponsors"
              className="uppercase tracking-widest font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur hover:bg-white/15 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
