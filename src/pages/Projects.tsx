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
    slug: 'checkpoint',
    title: "PROJECT 'CHECKPOINT'",
    shortLabel: 'CHECKPOINT',
    status: 'Planned',
    window: '2025–2027',
    category: 'Prototype / Learning Platform',
    blurb:
      'Checkpoint is our minimum-viable, low-cost solar test vehicle. Goal: learn fast, validate core systems, and build credibility for a full race program.',
    longDescription:
      'Checkpoint is the stepping stone to a competitive solar race car. By focusing on a lean, functional prototype, we can validate aerodynamics, power management, battery safety, controls, and integration on real hardware—while creating the media, data, and momentum we need to win grants and sponsorship.',
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
      'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    ],
    timeline: [
      { name: 'Phase 1 — Feasibility & Research', window: 'Sept 1 – Sept 14', bullets: [
        'Study prior prototypes; explore reuse options',
        'Outline technical goals, early BOM, constraints',
        'Assign leads for Mech, Elec, Software, Documentation',
      ]},
      { name: 'Phase 2 — Design & Scoping', window: 'Sept 15 – Sept 30', bullets: [
        'Draft system schematics and initial 3D CAD',
        'Define MVP to demonstrate motion, charging, controls',
        'Budget range + donation/salvage candidates',
      ]},
      { name: 'Phase 3 — Proposal & Outreach', window: 'Oct 1 – Oct 5', bullets: [
        'Finalize proposal for UBC Professional Aid Fund',
        'Begin external sponsor outreach',
        'Prep pitch deck, one-pager, simple landing page',
      ]},
      { name: 'Phase 4 — Workspace & Logistics', window: 'Oct 6 – Oct 20', bullets: [
        'Apply for UBC garage or secure shared workspace',
        'Draft safety plan and team operations agreement',
      ]},
      { name: 'Phase 5 — Procurement, Build & Integration', window: 'Oct 21 – Feb 29', bullets: [
        'Purchase/collect parts as funding arrives',
        'Build frame, steering, drivetrain, solar array',
        'Integrate wiring, BMS, MPPT, controls; early low-speed tests',
      ]},
      { name: 'Phase 6 — Testing, Debugging & Validation', window: 'Mar 1 – Mar 31', bullets: [
        'Full-system tests: drive, charge, brake, telemetry',
        'Debug + tune hardware/software; complete safety checklist',
      ]},
      { name: 'Phase 7 — Demo, Documentation & Handoff', window: 'Apr 1 – Apr 30', bullets: [
        'Internal/public demo for faculty & sponsors',
        'Finalize build report, design files, test data, media',
        'Archive + onboard next cohort',
      ]},
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
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://i.ibb.co/6kCyq9G/Get-Paid-Stock-com-6898dc43db62c.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">
                PROJECT
              </span>
              <span className="block font-extrabold break-words fluid-hero-2" style={{ color: '#ffc82e' }}>
                PORTFOLIO
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* OVERVIEW BUBBLE + PROJECT SELECTOR */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="font-extrabold leading-tight mb-4 fluid-h1">
              BUILDING MOMENTUM, <span className="text-[#ffc82e]">ONE PROJECT AT A TIME</span>
            </h2>
            <p className="text-white/90 max-w-5xl mx-auto fluid-body">
              This page tracks the concepts we’re exploring and prototypes we’re building. Select a project below to see details, specs, and the plan.
            </p>

            {/* Selector (mobile horizontal scroll) */}
            <div className="-mx-2 sm:mx-0 mt-8">
              <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar px-2">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveIndex(i)}
                    className={`px-6 sm:px-7 py-3 rounded-full font-semibold uppercase transition-all whitespace-nowrap fluid-btn ${
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
        </div>
      </section>

      {/* ACTIVE PROJECT DETAIL */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#015e37] text-white p-8 sm:p-10">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full font-medium bg-white/15 fluid-small">
                      {active.status}
                    </span>
                    <span className="text-[#ffc82e] fluid-body">{active.window}</span>
                  </div>
                  <h2 className="font-bold mb-1 fluid-h1">{active.title}</h2>
                  <p className="text-gray-200 fluid-body">{active.category}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Overview + Specs */}
                <div>
                  <h3 className="font-bold text-dark-900 mb-4 fluid-h2">OVERVIEW</h3>
                  <p className="text-dark-600 leading-relaxed mb-8 fluid-body">{active.longDescription}</p>

                  <h4 className="font-bold text-dark-900 mb-4 fluid-h2">OBJECTIVES</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {active.objectives.map((o) => (
                      <li key={o} className="bg-gray-50 rounded-lg px-4 py-3 text-dark-700 fluid-body">
                        {o}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-dark-900 mb-4 fluid-h2">PROJECTED SPECS (TARGETS)</h4>
                  <div className="space-y-4">
                    {Object.entries(active.specs).map(([k, v]) => {
                      const Icon = specIcon(k);
                      return (
                        <div key={k} className="flex items-start justify-between gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="bg-[#015e37]/10 p-2 rounded-lg">
                              <Icon className="h-5 w-5 text-[#015e37]" />
                            </div>
                            <span className="font-medium text-dark-700 fluid-body">{k}</span>
                          </div>
                          <span className="font-semibold text-dark-900 text-right min-w-0 break-words fluid-body">
                            {v}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="font-bold text-dark-900 mb-6 fluid-h2">INSPIRATION / GALLERY</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {active.images.map((src, i) => (
                      <div key={`${src}-${i}`} className="overflow-hidden rounded-xl group">
                        <div className="relative w-full aspect-[16/9]">
                          <img
                            src={src}
                            alt={`${active.title} inspiration ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-dark-500 mt-4 fluid-small">
                    Images are illustrative and represent the type of systems and build quality we aim to achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-bold text-dark-900 mb-3 sm:mb-4 fluid-h1">
              {active.shortLabel} <span className="text-[#ffc82e]">TIMELINE</span>
            </h2>
            <p className="text-dark-600 max-w-3xl mx-auto fluid-body">
              From feasibility to demo day—our path to a functional solar-electric test vehicle.
            </p>
          </div>

          {/* Mobile: single-rail */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#015e37]/30 to-[#ffc82e]/30" />
            <div className="space-y-6">
              {active.timeline.map((ph) => (
                <div key={ph.name} className="pl-10 relative">
                  <div className="absolute left-3 top-3 w-3 h-3 rounded-full bg-[#015e37] border-2 border-white shadow" />
                  <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2 text-dark-500 mb-1 fluid-small">
                      <Calendar className="h-4 w-4" />
                      <span>{ph.window}</span>
                    </div>
                    <h3 className="font-bold text-dark-900 mb-2 fluid-h2">{ph.name}</h3>
                    <ul className="text-dark-600 space-y-1 fluid-small">
                      {ph.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet/Desktop: centered alternating */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#015e37]/20 to-[#ffc82e]/30" />
            <div className="space-y-10">
              {active.timeline.map((ph, idx) => (
                <div key={ph.name} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-center gap-2 text-dark-500 mb-1 fluid-small ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {ph.window}
                        </span>
                      </div>
                      <h3 className="font-bold text-dark-900 mb-2 fluid-h2">{ph.name}</h3>
                      <ul className="text-dark-600 space-y-1 fluid-small">
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

      {/* FINAL CTA BUBBLE */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16">
            <h2 className="font-extrabold leading-tight mb-4 sm:mb-6 fluid-h1">
              LIKE <span className="text-[#ffc82e]">WHAT YOU SEE?</span>
            </h2>

            <p className="text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto fluid-body">
              Join our team of passionate engineers, designers, and innovators—or power our vision 
              through sponsorship.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to="/join"
                className="inline-flex items-center justify-center rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition fluid-btn"
              >
                JOIN OUR TEAM
              </Link>

              <Link
                to="/sponsors"
                className="inline-flex items-center justify-center rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-semibold border border-white/30 text-white bg-white/10 backdrop-blur hover:bg-white/15 hover:border-white/50 transition fluid-btn"
              >
                SPONSORSHIP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
