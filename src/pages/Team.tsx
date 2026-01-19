// src/pages/Team.tsx
import React, { useMemo, useState, memo } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import {
  members,
  type Member,
  type Discipline,
  ALL,
  FILTERS,
  ORDER,
  EXEC_ORDER,
} from '../data/team';

/** Exec roles shown in EXECUTIVE COMMITTEE */
const EXEC_TITLES = new Set(EXEC_ORDER);

/** Exec check */
const isExec = (m: Member) => EXEC_TITLES.has(m.role);

/** Leadership heuristic so execs can also appear in grids (if they have a discipline) */
const isLeadership = (m: Member) => {
  const r = m.role.toLowerCase();
  return r.includes('lead') || r.includes('captain');
};

/** Execs section */
const execs: Member[] = members
  .filter(isExec)
  .sort((a, b) => EXEC_ORDER.indexOf(a.role) - EXEC_ORDER.indexOf(b.role));

const Card: React.FC<{ member: Member }> = memo(({ member: m }) => (
  <article className="rounded-[32px] bg-white shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <div className="p-4 sm:p-6 pb-0">
      <div className="relative rounded-[28px] overflow-hidden">
        <img
          src={m.image}
          alt={m.name}
          className="w-full aspect-square object-cover rounded-2xl"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-2">
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md bg-black/60 text-white hover:bg-black/70"
              aria-label={`${m.name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {m.email && (
            <a
              href={`mailto:${m.email}`}
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md bg-black/60 text-white hover:bg-black/70"
              aria-label={`Email ${m.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="px-4 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-10 text-center">
      <h3 className="font-extrabold tracking-tight text-[#1F2A44] fluid-h2">{m.name}</h3>
      <p className="mt-1 sm:mt-2 text-[#4A5974] fluid-body">{m.role}</p>
    </div>
  </article>
));
Card.displayName = 'Card';

const Team: React.FC = () => {
  const [selected, setSelected] = useState<Discipline | typeof ALL>(ALL);

  /**
   * Filter for grid:
   * - If ALL: start with everyone.
   * - If a discipline selected: only that discipline.
   * Then: exclude execs unless they’re leaders (and they must still have a discipline to appear in a grid).
   */
  const filtered = useMemo(() => {
    const base =
      selected === ALL ? members : members.filter((m) => m.discipline === selected);

    return base.filter((m) => {
      if (!isExec(m)) return true;
      // Execs only appear in grids if they are also leaders AND have a discipline
      return isLeadership(m) && !!m.discipline;
    });
  }, [selected]);

  /**
   * Group by discipline for sections. Members without a discipline are skipped safely.
   */
  const grouped = useMemo(() => {
    const emptyGroups: Record<Discipline, Member[]> = {
      Mechanical: [],
      Electrical: [],
      Software: [],
      Business: [],
    };

    if (selected !== ALL) {
      // Single section view — filtered already constrained by discipline
      const single = filtered.filter((m) => m.discipline === selected);
      return { ...emptyGroups, [selected]: single } as Record<Discipline, Member[]>;
    }

    // ALL view — bucket by existing discipline only
    const groups = { ...emptyGroups };
    filtered.forEach((m) => {
      if (!m.discipline) return; // skip unassigned
      groups[m.discipline].push(m);
    });
    return groups;
  }, [filtered, selected]);

  /**
   * Which sections to render:
   * - ALL view: only show disciplines that actually have members (prevents empty blocks).
   * - Single view: just the selected one.
   */
  const keysToRender: Discipline[] =
    selected === ALL
      ? ORDER.filter((k) => grouped[k]?.length)
      : [selected as Discipline];

  return (
    <div className="animate-fade-in font-sans">
      {/* Hero (priority for LCP) */}
      <Hero
        backgroundImage="https://i.ibb.co/7NXr0BpG/upscalemedia-transformed-3-min.jpg"
        sizes="100vw"
        priority
        focus="50% 70%"
        title={
          <div className="flex flex-col items-center min-h-screen px-4 pt-24 sm:pt-36 lg:pt-32">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="font-extrabold text-white whitespace-nowrap fluid-hero-1">MEET</span>
              <span className="ml-3 font-extrabold text-[#ffc82e] whitespace-nowrap fluid-hero-2">OUR TEAM</span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* Green bubble */}
      <section
        className="bg-white py-12 sm:py-16 md:py-20 content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 420px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center">
            <h2 className="font-extrabold leading-tight mb-4 md:mb-6 fluid-h1">
              <span className="text-white">DRIVEN BY CURIOSITY, </span>
              <span className="text-[#ffc82e]">POWERED BY THE SUN.</span>
            </h2>
            <p className="leading-relaxed text-white/90 max-w-5xl fluid-body">
              We design, build, and race solar-powered vehicles
              to advance clean mobility, prove what renewable energy can do, and develop the next generation of engineers
              and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section
        className="bg-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 720px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-10 sm:py-12">
          <h2 className="text-center mb-6 md:mb-10">
            <span className="font-extrabold text-[#1F2A44] border-b-4 border-[#ffc82e] pb-2 inline-block fluid-h1">
              EXECUTIVE COMMITTEE
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {execs.map((m) => (
              <div
                key={m.name}
                className="
                  w-[calc(50%-0.5rem)]
                  sm:w-[calc(33.333%-1rem)]
                  md:w-[calc(25%-1.5rem)]
                  max-w-xs
                "
              >
                <Card member={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section
        className="bg-white border-b content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 180px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-8">
          <div className="-mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
              {FILTERS.map(({ value, label }) => (
                <button
                  key={label}
                  onClick={() => setSelected(value)}
                  className={`px-4 py-2 rounded-full font-medium transition-transform duration-150 whitespace-nowrap fluid-btn ${
                    selected === value ? 'bg-[#ffc82e] text-white shadow-lg' : 'bg-gray-100 text-dark-700 hover:scale-105'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-white content-auto"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 1200px' }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {keysToRender.map((disciplineName) => {
            const teamMembers = grouped[disciplineName] || [];
            if (!teamMembers.length) return null;

            return (
              <div key={disciplineName} className="mb-12 md:mb-16">
                <h2 className="text-center mb-6 md:mb-10">
                  <span className="font-extrabold text-[#1F2A44] border-b-4 border-[#ffc82e] pb-2 inline-block fluid-h1">
                    {disciplineName.toUpperCase()}
                  </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                  {teamMembers.map((m) => (
                    <div
                      key={m.name}
                      className="
                        w-[calc(50%-0.5rem)]
                        sm:w-[calc(33.333%-1rem)]
                        md:w-[calc(25%-1.5rem)]
                        max-w-xs
                      "
                    >
                      <Card member={m} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Team;
