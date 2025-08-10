// src/pages/Join.tsx
import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import Hero from '../components/Hero';

const Join: React.FC = () => {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf6t7dIonuQrMJzpCJQUvvRn1OjqS5PglvScyKDP2Cb3sr9wg/viewform';

  const subteams: {
    team: 'Mechanical' | 'Electrical' | 'Software' | 'Business';
    blurb: string;
    focus: string[];
    color: string;
  }[] = [
    {
      team: 'Mechanical',
      blurb: 'Vehicle structure, dynamics, and aero surfaces.',
      focus: ['Chassis/Monocoque', 'Suspension & Steering', 'Manufacturing (CNC/CF)', 'Aerodynamics & CFD'],
      color: 'bg-[#015e37]/10 text-[#015e37]',
    },
    {
      team: 'Electrical',
      blurb: 'Power, energy storage, array, and safety systems.',
      focus: ['Battery & BMS', 'MPPT & Solar Array', 'LV/HV Harness', 'Motor Controller'],
      color: 'bg-amber-100 text-amber-800',
    },
    {
      team: 'Software',
      blurb: 'Telemetry, controls, and race strategy tools.',
      focus: ['Embedded (C/C++)', 'Vehicle Controls', 'Data/Cloud Telemetry', 'Strategy & Dash UI'],
      color: 'bg-blue-100 text-blue-800',
    },
    {
      team: 'Business',
      blurb: 'Partnerships, fundraising, and operations.',
      focus: ['Sponsorship & Grants', 'Events & Outreach', 'Finance & Ops', 'Content & PR'],
      color: 'bg-purple-100 text-purple-800',
    },
  ];

  return (
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center leading-none">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white">
                BECOME
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#ffc82e] whitespace-nowrap">
                A MEMBER
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/45"
      />

      {/* Green bubble intro (centered content, consistent spacing) */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              BUILD. <span className="text-[#ffc82e]">RACE.</span> LEARN.
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-5xl">
              Join UBC Okanagan’s student-led solar racing team and get real experience in
              design, manufacturing, and clean tech—while competing on an international stage.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions — 4 subteam cards (mobile-first, unified spacing) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2A44]">OPEN POSITIONS</h2>
            <p className="text-[#4A5974] mt-1">Explore subteams and what they’re focused on.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subteams.map((st, idx) => (
              <div
                key={idx}
                className="h-full flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="p-6 flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${st.color}`}>
                    {st.team}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#1F2A44]">{st.blurb}</h3>
                  <ul className="mt-4 space-y-2">
                    {st.focus.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#4A5974]">
                        <span className="mt-[7px] inline-block w-2 h-2 rounded-full bg-[#015e37]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Don’t see your exact role? Apply anyway—there’s always room for motivated builders.
          </p>
        </div>
      </section>

      {/* Split view — consistent with other pages (Montserrat, spacing, colors) */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            {/* 40% — Ready to Apply? */}
            <div className="md:col-span-2 rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A44] mb-2 sm:mb-3">
                READY TO <span className="text-[#015e37]">APPLY?</span>
              </h2>
              <p className="text-[#4A5974] mb-6 sm:mb-8">
                Submit your application through our Google Form. It only takes a few minutes.
              </p>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#015e37] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40"
              >
                OPEN APPLICATION FORM <ExternalLink className="h-5 w-5" />
              </a>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['All disciplines welcome', 'Flexible commitment', 'Real hardware & code', 'Compete internationally'].map(
                  (b, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#1F2A44]">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#015e37]" />
                      <span>{b}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* 60% — What Happens Next? */}
            <div className="md:col-span-3 rounded-3xl bg-[#015e37] p-8 sm:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6">
                WHAT HAPPENS <span className="text-[#ffc82e]">NEXT?</span>
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Application Review',
                    description:
                      "We'll review your application and assess how your skills align with our current needs.",
                  },
                  {
                    step: '2',
                    title: 'Interview',
                    description: "If selected, we'll invite you for a casual interview to get to know you better.",
                  },
                  {
                    step: '3',
                    title: 'Welcome Aboard',
                    description: 'Join our team and start working on exciting projects that will shape the future!',
                  },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/95 grid place-items-center shadow-sm">
                        <span className="text-lg font-bold text-[#015e37]">{s.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{s.title}</h3>
                      <p className="text-white/90">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm text-white/90">
                <Award className="h-4 w-4 text-[#ffc82e]" />
                <span>We aim to respond within 5–7 days.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
