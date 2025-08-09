// src/pages/Projects.tsx
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Zap, Gauge, Battery, Wind } from 'lucide-react';
import Hero from '../components/Hero';

type Project = {
  id: number;
  slug: string;
  title: string;
  shortLabel: string;
  status: 'Planned' | 'In Development' | 'Completed';
  window: string;
  category: string;
  blurb: string;
  longDescription: string;
  objectives: string[];
  specs: Record<string, string>;
  images: string[];
  timeline: { name: string; window: string; bullets: string[] }[];
};

const projects: Project[] = [
  {
    id: 1,
    slug: 'solkin',
    title: 'PROJECT SOLKIN',
    shortLabel: 'SOLKIN',
    status: 'Planned',
    window: '2025–2027',
    category: 'Prototype / Learning Platform',
    blurb:
      'Solkin is our minimum-viable, low-cost solar test vehicle. Goal: learn fast, validate core systems, and build credibility for a full race program.',
    longDescription:
      'Solkin is the stepping stone to a competitive solar race car. By focusing on a lean, functional prototype, we can validate aerodynamics, power management, battery safety, controls, and integration on real hardware—while creating the media, data, and momentum we need to win grants and sponsorship.',
    objectives: [
      'Build a functional solar-electric test platform',
      'Hands-on learning across mechanical, electrical, and software',
      'Proof-of-concept for sponsors and grants',
      'Foundation for a future competition vehicle',
    ],
    specs: {
      'Solar Array (target)': '1–2 kW peak',
      'Battery (target)': 'Li-ion pack with BMS',
      'Mass (target)': 'TBD (lightweight focus)',
      'Top Speed (target)': 'Safe test-track speeds (TBD)',
      'Range (sunny, target)': 'TBD',
      'Aero Focus': 'Low-drag body; validation via CFD/wind testing',
    },
    images: [
      'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    ],
    timeline: [
      {
        name: 'Phase 1 — Feasibility & Research',
        window: 'Sept 1 – Sept 14',
        bullets: [
          'Study prior prototypes; explore reuse options',
          'Outline technical goals, early BOM, constraints',
          'Assign leads for Mech, Elec, Software, Documentation',
        ],
      },
      {
        name: 'Phase 2 — Design & Scoping',
        window: 'Sept 15 – Sept 30',
        bullets: [
          'Draft system schematics and initial 3D CAD',
          'Define MVP to demonstrate motion, charging, controls',
          'Budget range + donation/salvage candidates',
        ],
      },
      {
        name: 'Phase 3 — Proposal & Outreach',
        window: 'Oct 1 – Oct 5',
        bullets: [
          'Finalize proposal for UBC Professional Aid Fund',
          'Begin external sponsor outreach',
          'Prep pitch deck, one-pager, simple landing page',
        ],
      },
      {
        name: 'Phase 4 — Workspace & Logistics',
        window: 'Oct 6 – Oct 20',
        bullets: [
          'Apply for UBC garage or secure shared workspace',
          'Draft safety plan and team operations agreement',
        ],
      },
      {
        name: 'Phase 5 — Procurement, Build & Integration',
        window: 'Oct 21 – Feb 29',
        bullets: [
          'Purchase/collect parts as funding arrives',
          'Build frame, steering, drivetrain, solar array',
          'Integrate wiring, BMS, MPPT, controls; early low-speed tests',
        ],
      },
      {
        name: 'Phase 6 — Testing, Debugging & Validation',
        window: 'Mar 1 – Mar 31',
        bullets: [
          'Full-system tests: drive, charge, brake, telemetry',
          'Debug + tune hardware/software; complete safety checklist',
        ],
      },
      {
        name: 'Phase 7 — Demo, Documentation & Handoff',
        window: 'Apr 1 – Apr 30',
        bullets: [
          'Internal/public demo for faculty & sponsors',
          'Finalize build report, design files, test data, media',
          'Archive + onboard next cohort',
        ],
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => projects[activeIndex], [activeIndex]);

  const specIcon = (k: string) => {
    const key = k.toLowerCase();
    if (key.includes('solar')) return Zap;
    if (key.includes('battery')) return Battery;
    if (key.includes('speed')) return Gauge;
    if (key.includes('aero') || key.includes('drag')) return Wind;
    return Zap;
  };

  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <Hero
        backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center">
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-white leading-none">
                IN THE
              </span>
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-[#ffc82e] leading-none whitespace-nowrap">
                WORKS
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* OVERVIEW BUBBLE + PROJECT SELECTOR */}
      <section className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              BUILDING MOMENTUM, <span className="text-[#ffc82e]">ONE PROJECT AT A TIME</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-5xl mx-auto">
              This page tracks the concepts we’re exploring and prototypes we’re building. Select a project below to see details, specs, and the plan.
            </p>

            {/* Selector */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-7 py-3 rounded-full font-semibold text-lg uppercase transition-all ${
                    i === activeIndex
                      ? 'bg-[#ffc82e] text-white shadow-lg'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                  }`}
                >
                  {p.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE PROJECT DETAIL */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#015e37] text-white p-8">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/15">
                      {active.status}
                    </span>
                    <span className="text-[#ffc82e]">{active.window}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-1">{active.title}</h2>
                  <p className="text-gray-200">{active.category}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Overview + Specs */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">OVERVIEW</h3>
                  <p className="text-dark-600 leading-relaxed mb-8">{active.longDescription}</p>

                  <h4 className="text-xl font-bold text-dark-900 mb-4">OBJECTIVES</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {active.objectives.map((o) => (
                      <li key={o} className="bg-gray-50 rounded-lg px-4 py-3 text-dark-700">
                        {o}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-dark-900 mb-4">PROJECTED SPECS (TARGETS)</h4>
                  <div className="space-y-4">
                    {Object.entries(active.specs).map(([k, v]) => {
                      const Icon = specIcon(k);
                      return (
                        <div key={k} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="bg-[#015e37]/10 p-2 rounded-lg">
                              <Icon className="h-5 w-5 text-[#015e37]" />
                            </div>
                            <span className="font-medium text-dark-700">{k}</span>
                          </div>
                          <span className="font-semibold text-dark-900">{v}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-6">INSPIRATION / GALLERY</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {active.images.map((src, i) => (
                      <div key={i} className="overflow-hidden rounded-xl group">
                        <img
                          src={src}
                          alt={`${active.title} inspiration ${i + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-dark-500 mt-4">
                    Images are illustrative and represent the type of systems and build quality we aim to achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">
              {active.shortLabel} <span className="text-[#ffc82e]">TIMELINE</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              From feasibility to demo day—our path to a functional solar-electric test vehicle.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#015e37]/20 to-[#ffc82e]/30" />
            <div className="space-y-10">
              {active.timeline.map((ph, idx) => (
                <div key={ph.name} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-2 text-sm text-dark-500 mb-1 justify-between">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {ph.window}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 mb-2">{ph.name}</h3>
                      <ul className="text-sm text-dark-600 space-y-1">
                        {ph.bullets.map((b) => (
                          <li key={b}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#015e37] rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (matches your Home CTA formatting) */}
      <section className="py-16 lg:py-20 bg-[#015e37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            LIKE <span className="text-[#ffc82e]">WHAT YOU SEE?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/85 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Join our team of passionate engineers, designers, and innovators—or power our vision through sponsorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/join"
              className="uppercase tracking-widest font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              Join Our Team
            </Link>

            <Link
              to="/sponsors"
              className="
                uppercase tracking-widest font-bold
                px-8 sm:px-10 py-3.5 sm:py-4 rounded-full
                border border-white/30 text-white
                bg-white/10 backdrop-blur
                hover:bg-white/15 hover:border-white/50
                transition-all duration-300
              "
            >
              Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
