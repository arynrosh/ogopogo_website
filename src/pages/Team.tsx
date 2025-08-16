// src/pages/Team.tsx
import React, { useMemo, useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Hero from '../components/Hero';

type Discipline = 'Mechanical' | 'Electrical' | 'Software' | 'Business';

type Member = {
  name: string;
  role: string;
  discipline: Discipline;
  image: string;
  email?: string;
  linkedin?: string;
};

const members: Member[] = [
  // Business
  { name: 'Clement Halim', role: 'Founder', discipline: 'Business', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'clement@ogopogosolar.ca' },
  { name: 'Alex Morrison', role: 'Business & Outreach Manager', discipline: 'Business', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'alex@ogopogosolar.ca' },
  { name: 'Sofia Li', role: 'Marketing Lead', discipline: 'Business', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'sofia@ogopogosolar.ca' },
  { name: 'Ryan Brooks', role: 'Sponsorship Coordinator', discipline: 'Business', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'ryan@ogopogosolar.ca' },

  // Mechanical
  { name: 'Aryan Choudhary', role: 'Team Captain', discipline: 'Mechanical', image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'aryan@ogopogosolar.ca' },
  { name: 'Emma Thompson', role: 'Aerodynamics Engineer', discipline: 'Mechanical', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'emma@ogopogosolar.ca' },
  { name: 'Liam Patel', role: 'Chassis Designer', discipline: 'Mechanical', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'liam@ogopogosolar.ca' },
  { name: 'Hannah Reed', role: 'Suspension Engineer', discipline: 'Mechanical', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'hannah@ogopogosolar.ca' },

  // Electrical
  { name: 'Marcus Rodriguez', role: 'Electrical Systems Lead', discipline: 'Electrical', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'marcus@ogopogosolar.ca' },
  { name: 'Isabella Green', role: 'Battery Systems Engineer', discipline: 'Electrical', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'isabella@ogopogosolar.ca' },
  { name: 'Noah White', role: 'Power Electronics Specialist', discipline: 'Electrical', image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'noah@ogopogosolar.ca' },
  { name: 'Mia Scott', role: 'Solar Array Engineer', discipline: 'Electrical', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'mia@ogopogosolar.ca' },

  // Software
  { name: 'Alan Zhu', role: 'Co-Founder', discipline: 'Software', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'alan@ogopogosolar.ca' },
  { name: 'Priya Patel', role: 'Software & Controls Engineer', discipline: 'Software', image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'priya@ogopogosolar.ca' },
  { name: 'Ethan James', role: 'Telemetry Developer', discipline: 'Software', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', linkedin: '#', email: 'ethan@ogopogosolar.ca' },
];

const ALL = 'All';
const FILTERS: { value: Discipline | typeof ALL; label: string }[] = [
  { value: ALL, label: 'ALL' },
  { value: 'Mechanical', label: 'MECHANICAL' },
  { value: 'Electrical', label: 'ELECTRICAL' },
  { value: 'Software', label: 'SOFTWARE' },
  { value: 'Business', label: 'BUSINESS' },
];

const ORDER: Discipline[] = ['Mechanical', 'Electrical', 'Software', 'Business'];
const EXEC_ORDER: string[] = ['Founder', 'Co-Founder', 'Team Captain'];
const execs: Member[] = members
  .filter((m) => EXEC_ORDER.includes(m.role))
  .sort((a, b) => EXEC_ORDER.indexOf(a.role) - EXEC_ORDER.indexOf(b.role));

const Card: React.FC<{ member: Member }> = ({ member: m }) => (
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
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md bg-black/50 text-white hover:bg-black/60 backdrop-blur-sm"
              aria-label={`${m.name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {m.email && (
            <a
              href={`mailto:${m.email}`}
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md bg-black/50 text-white hover:bg-black/60 backdrop-blur-sm"
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
      <p className="mt-0.5 sm:mt-1 text-[#7B8AA1] fluid-small">{m.discipline}</p>
    </div>
  </article>
);

const Team: React.FC = () => {
  const [selected, setSelected] = useState<Discipline | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (selected === ALL ? members : members.filter((m) => m.discipline === selected)),
    [selected]
  );

  const grouped = useMemo(() => {
    if (selected !== ALL) return { [selected]: filtered } as Record<string, Member[]>;
    const groups: Record<Discipline, Member[]> = { Mechanical: [], Electrical: [], Software: [], Business: [] };
    filtered.forEach((m) => { groups[m.discipline].push(m); });
    return groups;
  }, [filtered, selected]);

  return (
    <div className="animate-fade-in font-sans">
      {/* Hero */}
      <Hero
        backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">MEET</span>
              <span className="block font-extrabold break-words fluid-hero-2" style={{ color: '#ffc82e' }}>
                OUR TEAM
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* Green bubble */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
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
      <section className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-10 sm:py-12">
          <h2 className="text-center mb-6 md:mb-10">
            <span className="font-extrabold text-[#1F2A44] border-b-4 border-[#ffc82e] pb-2 inline-block fluid-h1">
              EXECUTIVE COMMITTEE
            </span>
          </h2>

          {/* Mobile: 2/row, last centered; sm: 3/row; md+: 4/row */}
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
      <section className="bg-white border-b">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-8">
          <div className="-mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
              {FILTERS.map(({ value, label }) => (
                <button
                  key={label}
                  onClick={() => setSelected(value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap fluid-btn ${
                    selected === value ? 'bg-[#ffc82e] text-white shadow-lg' : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          {(selected === ALL ? ORDER : [selected as Discipline]).map((disciplineName) => {
            const teamMembers = (grouped as Record<string, Member[]>)[disciplineName] || [];
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
