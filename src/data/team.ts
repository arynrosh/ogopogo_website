// src/data/team.ts

export type Discipline = 'Mechanical' | 'Electrical' | 'Software' | 'Business';

export type Member = {
  name: string;
  role: string;
  discipline: Discipline;
  image: string;
  email?: string;
  linkedin?: string;
};

// Primary team roster
export const members: Member[] = [
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

// UI helpers (export if you want to keep this logic centralized)
export const ALL = 'All' as const;
export const ORDER: Discipline[] = ['Mechanical', 'Electrical', 'Software', 'Business'];
export const EXEC_ORDER: string[] = ['Founder', 'Co-Founder', 'Team Captain'];

export const FILTERS: { value: Discipline | typeof ALL; label: string }[] = [
  { value: ALL, label: 'ALL' },
  { value: 'Mechanical', label: 'MECHANICAL' },
  { value: 'Electrical', label: 'ELECTRICAL' },
  { value: 'Software', label: 'SOFTWARE' },
  { value: 'Business', label: 'BUSINESS' },
];
