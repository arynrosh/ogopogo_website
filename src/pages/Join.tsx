// src/pages/Join.tsx
import React, { useState } from 'react';
import {
  ExternalLink,
  Award,
  Plus,
  Minus,
  Wrench,
  Battery,
  Cpu,
  Briefcase,
} from 'lucide-react';
import Hero from '../components/Hero';
import { positions, type Position } from '../data/positions';

type IconKey = Position['icon'];
const ICONS: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  wrench: Wrench,
  battery: Battery,
  cpu: Cpu,
  briefcase: Briefcase,
};

/* --- Concise paragraph rows (no bullets) --- */
const normalizeSentence = (s: string) => {
  const trimmed = s.trim();
  if (!trimmed) return '';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
};

const joinItemsToParagraph = (items: string[]) =>
  normalizeSentence(items.map((i) => normalizeSentence(i)).join(' '));

const ParagraphRow: React.FC<{ label: string; items: string[] }> = ({ label, items }) => (
  <div className="mt-3 first:mt-0">
    <p className="fluid-body text-[#1F2A44]">
      <span className="font-semibold">{label}: </span>
      <span className="text-[#4A5974]">{joinItemsToParagraph(items)}</span>
    </p>
  </div>
);

type PositionCardProps = {
  pos: Position;
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const PositionCard: React.FC<PositionCardProps> = ({ pos, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const Icon = ICONS[pos.icon];
  const panelId = `position-panel-${index}`;

  const toggle = () => setOpenIndex((cur) => (cur === index ? null : index));

  return (
    <article
      className={`group flex flex-col rounded-[24px] bg-white border border-gray-300 shadow-sm
                  hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
    >
      {/* Header line with pill + +/- toggle */}
      <div className="p-6 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold ${pos.colorPill} fluid-body ring-1 ring-black/5`}
        >
          <Icon className="h-5 w-5 opacity-90" />
          {pos.team}
        </span>

        <button
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="shrink-0 grid place-items-center w-10 h-10 rounded-full border border-gray-300/80 text-gray-700 hover:bg-gray-50"
          title={isOpen ? 'Hide details' : 'Expand details'}
        >
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>

      {/* divider (tight; no extra white space below when closed) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Collapsible section */}
      <div
        id={panelId}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ willChange: 'opacity' }}
      >
        {/* only add vertical padding when open to avoid visual gap */}
        <div className={`px-6 ${isOpen ? 'pt-4 pb-6' : 'pb-0'}`}>
          <ParagraphRow label="This year's goals" items={pos.goals} />
          <ParagraphRow label="Future work" items={pos.future} />
          <ParagraphRow label="Skills you’ll build" items={pos.skills} />
        </div>
      </div>
    </article>
  );
};

const Join: React.FC = () => {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf6t7dIonuQrMJzpCJQUvvRn1OjqS5PglvScyKDP2Cb3sr9wg/viewform';

  // Single-open accordion behavior
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // If the count is odd, center the last on its own row (desktop)
  const isLastOdd = positions.length % 2 !== 0 ? positions.length - 1 : -1;

  return (
    <div className="animate-fade-in font-sans">
      {/* HERO (priority for LCP) */}
      <Hero
        backgroundImage="https://i.ibb.co/DD639Dqb/Get-Paid-Stock-com-6898bdff1e402.jpg"
        sizes="100vw"
        priority
        title={
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">BECOME</span>
              <span className="block font-extrabold break-words fluid-hero-2" style={{ color: '#ffc82e' }}>
                A MEMBER
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/45"
      />

      {/* Intro bubble */}
      <section
        className="bg-white py-12 sm:py-16 md:py-20 content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 360px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center">
            <h2 className="font-extrabold leading-tight mb-4 sm:mb-6 fluid-h1">
              BUILD. <span className="text-[#ffc82e]">RACE.</span> LEARN.
            </h2>
            <p className="text-white/90 max-w-5xl fluid-body">
              We’re keeping the structure simple to start—one focused team per discipline—so you can jump in and make real progress right away.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions (2×2; odd last centered) */}
      <section
        className="py-12 sm:py-16 bg-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 1000px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-extrabold text-[#1F2A44] fluid-h1">OPEN POSITIONS</h2>
            <p className="text-[#4A5974] mt-1 fluid-body">
              Pick a subteam to see goals, future work, and the skills you’ll build.
            </p>
          </div>

          {/* items-start prevents sibling stretch on row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {positions.map((pos, index) => {
              if (index === isLastOdd) {
                return (
                  <div key={index} className="md:col-span-2 flex justify-center">
                    <div className="w-full md:w-[48%]">
                      <PositionCard
                        pos={pos}
                        index={index}
                        openIndex={openIndex}
                        setOpenIndex={setOpenIndex}
                      />
                    </div>
                  </div>
                );
              }

              return (
                <PositionCard
                  key={index}
                  pos={pos}
                  index={index}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              );
            })}
          </div>

          <p className="mt-4 text-gray-500 fluid-small">
            Don’t see your exact role? Apply anyway—there’s always room for motivated builders.
          </p>
        </div>
      </section>

      {/* Split view */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 760px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-2 rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-lg">
              <h2 className="mb-2 sm:mb-3 text-[#1F2A44] font-extrabold fluid-h2">
                READY TO <span style={{ color: '#015e37' }}>APPLY?</span>
              </h2>
              <p className="text-[#4A5974] mb-6 sm:mb-8 fluid-body">
                Submit your application through our Google Form. It only takes a few minutes.
              </p>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffc82e] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015e37]/40 fluid-btn"
              >
                OPEN APPLICATION FORM <ExternalLink className="h-5 w-5" />
              </a>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['All disciplines welcome', 'Flexible commitment', 'Real hardware & code', 'Compete internationally'].map(
                  (b, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#1F2A44] fluid-small">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#015e37]" />
                      <span>{b}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="md:col-span-3 rounded-3xl bg-[#015e37] p-8 sm:p-10 shadow-lg">
              <h2 className="text-white mb-4 sm:mb-6 font-extrabold fluid-h2">
                WHAT HAPPENS <span className="text-[#ffc82e]">NEXT?</span>
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {[
                  { step: '1', title: 'APPLICATION REVIEW', description: "We'll review your application and assess how your skills align with our current needs." },
                  { step: '2', title: 'INTERVIEW', description: "If selected, we'll invite you for a casual interview to get to know you better." },
                  { step: '3', title: 'WELCOME ABOARD', description: 'Join our team and start working on exciting projects that will shape the future!' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/95 grid place-items-center shadow-sm">
                        <span className="font-bold text-[#015e37] fluid-body">{s.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white fluid-body">{s.title}</h3>
                      <p className="text-white/90 fluid-body">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-white/90 fluid-small">
                <Award className="h-4 w-4" style={{ color: '#ffc82e' }} />
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
