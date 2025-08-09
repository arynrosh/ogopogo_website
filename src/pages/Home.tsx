import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users } from 'lucide-react';
import { blogPosts } from './News'; // adjust if News is in a different folder
import Hero from '../components/Hero'; // adjust path to where you place Hero.tsx

const Home: React.FC = () => {
  const posts = blogPosts.slice(0, 3); // latest 3 (or sort by date if needed)

  return (
    <div className="animate-fade-in">
      {/* Full-screen Hero via shared component */}
      <Hero
        backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg"
        // No title/subtitle on Home per your preference
      />

      {/* Split-view: Mission + Pillars */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Mission */}
            <div className="flex">
              <div className="w-full rounded-2xl sm:rounded-3xl bg-[#015e37] text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 lg:py-12 flex flex-col justify-center shadow-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  OUR <span className="text-[#ffc82e]">MISSION</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 mb-6 sm:mb-8">
                  Ogopogo Solar is a student-led team at UBC Okanagan. We design, build,
                  and race solar-powered vehicles to advance clean mobility, prove what
                  renewable energy can do, and develop the next generation of engineers
                  and innovators.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] text-sm sm:text-base"
                  style={{ backgroundColor: '#ffc82e', color: '#fff' }}
                >
                  LEARN MORE
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Pillars */}
            <div className="flex flex-col justify-center gap-4 sm:gap-6">
              {[
                { icon: Target, title: 'INNOVATION', description: 'Pushing new aero, battery, and chassis designs every season.' },
                { icon: Zap, title: 'SUSTAINABILITY', description: 'Turning sunlight into reliable, race-proven performance.' },
                { icon: Users, title: 'EDUCATION', description: 'Real projects, real deadlines — industry-ready skills.' },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 sm:gap-4 lg:gap-5 p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full grid place-items-center bg-[#015e37]">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#ffc82e]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-dark-900 mb-1 sm:mb-1.5 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-dark-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview hooked to News */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900">
              FROM THE <span className="text-[#015e37]">BLOG</span>
            </h2>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-md text-sm lg:text-base"
              style={{ backgroundColor: '#ffc82e', color: '#fff' }}
            >
              VIEW ALL POSTS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <Link to={`/news#post-${post.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 sm:h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-2 rounded-full bg-black/60 text-white backdrop-blur px-2 sm:px-3 py-1 text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#ffc82e' }} />
                      {post.category?.toUpperCase() || 'UPDATE'}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 lg:p-6">
                    <time className="text-xs sm:text-sm text-dark-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <h3 className="mt-1 sm:mt-2 text-base sm:text-lg lg:text-xl font-bold text-dark-900 group-hover:text-[#015e37] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-dark-600 line-clamp-2 sm:line-clamp-3">{post.excerpt}</p>

                    <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 font-semibold text-[#015e37] group-hover:text-[#0a7f50] transition-colors text-sm sm:text-base">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Mobile View All */}
          <div className="sm:hidden mt-6 sm:mt-8 lg:mt-10">
            <Link
              to="/news"
              className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md text-sm"
              style={{ backgroundColor: '#ffc82e', color: '#000' }}
            >
              VIEW ALL POSTS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#015e37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-wide">
            READY TO SHAPE THE <span className="text-[#ffc82e]">FUTURE?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our team of passionate engineers, designers, and innovators as we race toward
            a sustainable tomorrow. Every skill has a place in our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              to="/join"
              className="uppercase tracking-widest font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              Join Our Team
            </Link>

            <Link
              to="/sponsors"
              className="
                uppercase tracking-widest font-bold
                px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full
                border border-white/30 text-white
                bg-white/10 backdrop-blur
                hover:bg-white/15 hover:border-white/50
                transition-all duration-300
                text-sm sm:text-base
              "
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
