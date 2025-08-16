// src/pages/About.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  const smoothNavigate = (to: string) => (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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
    setTimeout(() => navigate(to), prefersReduced ? 0 : 450);
  };

  return (
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center leading-none">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white">
                OUR STORY
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#ffc82e] whitespace-nowrap">
                OGOPOGO SOLAR
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* MISSION & VISION — Split Card */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto shadow-xl rounded-2xl overflow-hidden">
          {/* Mission (Top - Green) */}
          <div className="bg-[#015e37] text-white text-center p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              OUR <span className="text-[#ffc82e]">MISSION</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/95">
              We design, build, and race solar-powered vehicles to advance clean mobility,
              prove what renewable energy can do, and develop the next generation of
              engineers and innovators.
            </p>
          </div>

          {/* Vision (Bottom - White) */}
          <div className="bg-white text-center p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#015e37' }}>
              OUR <span style={{ color: '#ffc82e' }}>VISION</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              A future where sustainable transportation is the norm — solar vehicles on our
              roads, inspiring innovation and proving that clean energy can drive high
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY — Short Narrative */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              HOW WE <span style={{ color: '#015e37' }}>GOT HERE</span>
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              Ogopogo Solar started with a simple belief: sunlight can move us forward.
              From first sketches and scrappy prototypes to a focused plan for competition,
              we’ve grown by building, testing, and learning fast — together. Our approach
              is pragmatic and hands-on: prove it on the bench, validate it on the road,
              and share what we learn along the way.
            </p>
          </div>
        </div>
      </section>

      {/* COMPETITIONS — Text + Image Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              WHERE WE <span style={{ color: '#015e37' }}>RACE</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              World-class events that push engineering, endurance, and efficiency to the limit.
            </p>
          </div>

          {/* Bridgestone World Solar Challenge */}
          <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-100 mb-8">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Bridgestone World Solar Challenge
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The pinnacle of solar racing: ~3,000 km across the Australian Outback from
                Darwin to Adelaide. It’s the global benchmark for aerodynamics, energy
                efficiency, and reliability under extreme conditions.
              </p>
              <ul className="mt-4 space-y-2 text-gray-800">
                {[
                  'Elite international field and standards',
                  'Multi-day endurance, harsh climate, strict regs',
                  'Innovation under real race pressure',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#015e37' }} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop"
                alt="Bridgestone World Solar Challenge"
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          {/* American Solar Challenge */}
          <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-100 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop"
                alt="American Solar Challenge"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                American Solar Challenge
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A cross-country road rally on public highways in the United States. Teams
                manage energy, weather, traffic, and logistics over long daily stages —
                a true systems and operations test.
              </p>
              <ul className="mt-4 space-y-2 text-gray-800">
                {[
                  'Open-road conditions: traffic, terrain, weather',
                  'Charging strategy + reliability are critical',
                  'Ops, planning, and teamwork decide outcomes',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#015e37' }} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Solar Car Challenge */}
          <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-100">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Solar Car Challenge
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                An educational series with scrutineering, track events, and road stages.
                It’s the ideal proving ground for emerging teams — validate fundamentals,
                build confidence, and bring new members up to race-ready speed.
              </p>
              <ul className="mt-4 space-y-2 text-gray-800">
                {[
                  'Excellent on-ramp for prototypes',
                  'Strong focus on safety and fundamentals',
                  'Teaches race operations the right way',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#015e37' }} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/9818553/pexels-photo-9818553.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop"
                alt="Solar Car Challenge"
                className="w-full h-full object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 text-white" style={{ backgroundColor: '#015e37' }}>
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-wide">
            READY TO SHAPE THE <span className="text-[#ffc82e]">FUTURE?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Join a team that builds, tests, and races — and learns fast doing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/join"
              onClick={smoothNavigate('/join')}
              className="uppercase tracking-widest font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/60"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
