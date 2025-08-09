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

// order when ALL is selected
const ORDER: Discipline[] = ['Mechanical', 'Electrical', 'Software', 'Business'];

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
    <div className="animate-fade-in">
      {/* Hero */}
      <Hero
        backgroundImage="https://i.ibb.co/n8sd4xZp/solar-web.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center">
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-white leading-none">
                MEET
              </span>
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-[#ffc82e] leading-none whitespace-nowrap">
                THE TEAM
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/40"
      />

      {/* Green bubble */}
      <section className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-[#015e37] text-white rounded-[32px] shadow-xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">DRIVEN BY CURIOSITY, </span>
              <span className="text-[#ffc82e]">POWERED BY THE SUN.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-5xl">
              Ogopogo Solar is a student-led team at UBC Okanagan. We design, build, and race
              solar-powered vehicles to advance clean mobility, prove what renewable energy can do,
              and develop the next generation of engineers and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Filter (matches News style) */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map(({ value, label }) => (
              <button
                key={label}
                onClick={() => setSelected(value)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selected === value
                    ? 'bg-[#ffc82e] text-white shadow-lg'
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(selected === ALL ? ORDER : [selected as Discipline]).map((disciplineName) => {
            const teamMembers = (grouped as Record<string, Member[]>)[disciplineName] || [];
            if (!teamMembers.length) return null;

            return (
              <div key={disciplineName} className="mb-16">
                <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-10 border-b-4 border-[#ffc82e] inline-block pb-2">
                  {disciplineName.toUpperCase()}
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {teamMembers.map((m) => (
                    <article
                      key={m.name}
                      className="rounded-[32px] bg-white shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="p-6 pb-0">
                        <div className="relative rounded-[28px] overflow-hidden">
                          <img src={m.image} alt={m.name} className="h-[340px] w-full object-cover" />
                          <div className="absolute top-3 right-3 flex gap-2">
                            {m.linkedin && (
                              <a
                                href={m.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="grid h-9 w-9 place-items-center rounded-md bg-black/50 text-white hover:bg-black/60 backdrop-blur-sm"
                                aria-label={`${m.name} on LinkedIn`}
                              >
                                <Linkedin className="h-4 w-4" />
                              </a>
                            )}
                            {m.email && (
                              <a
                                href={`mailto:${m.email}`}
                                className="grid h-9 w-9 place-items-center rounded-md bg-black/50 text-white hover:bg-black/60 backdrop-blur-sm"
                                aria-label={`Email ${m.name}`}
                              >
                                <Mail className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="px-8 pt-6 pb-10 text-center">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1F2A44]">{m.name}</h3>
                        <p className="mt-2 text-lg text-[#4A5974]">{m.role}</p>
                        <p className="mt-1 text-base text-[#7B8AA1]">{m.discipline}</p>
                      </div>
                    </article>
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
