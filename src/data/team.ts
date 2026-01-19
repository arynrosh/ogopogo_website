// src/data/team.ts

export type Discipline = 'Mechanical' | 'Electrical' | 'Software' | 'Business';

export type Member = {
  name: string;
  role: string;
  discipline?: Discipline; // optional now
  image: string;
  email?: string;
  linkedin?: string;
};

// Primary team roster
export const members: Member[] = [
//   // Execs
//   {
//     name: 'Clement Halim',
//     role: 'Founder',
//     image: 'https://i.ibb.co/6b8JfB7/clem.jpg',
//     linkedin: 'https://www.linkedin.com/in/clement-halim',
//     email: '#',
//   },
//   {
//     name: 'Alan Zhu',
//     role: 'Co-Founder',
//     image: 'https://i.ibb.co/TH7RZ4Q/alan.jpgp',
//     linkedin: 'https://www.linkedin.com/in/alanzhu55b972174/',
//     email: 'Alanzhu1122@gmail.com',
//   },
  {
    name: 'Aryan Roshan',
    role: 'Team Captain',
    image: 'https://i.ibb.co/fzVtgkGH/Aryan-Edited-1.png',
    linkedin: 'https://www.linkedin.com/in/arynrosh',
    email: 'arynrosh@gmail.com',
  },

  // Business
  {
    name: 'Noah Zhang',
    role: 'Op & Finance Lead',
    discipline: 'Business',
    image: 'https://i.ibb.co/Xx3mYgLD/Noah-Edited-1.png',
    linkedin: 'https://www.linkedin.com/in/aryankchoudhary',
    email: 'Aryan1712@hotmail.com',
  },
  {
    name: 'Jiayi Chen',
    role: 'Marketing Lead',
    discipline: 'Business',
    image: 'https://i.ibb.co/21HXCwQY/Jiayi-Edited-1.png',
    linkedin: 'https://www.linkedin.com/in/jiayi-chen-8800711ba/',
    email: 'jiayicheen0810@gmail.com',
  },

  // Mechanical
  {
    name: 'Alan Zhu',
    role: 'Mechanical Lead',
    discipline: 'Mechanical',
    image: 'https://i.ibb.co/TH7RZ4Q/alan.jpg',
    linkedin: 'https://www.linkedin.com/in/alanzhu55b972174/',
    email: 'Alanzhu1122@gmail.com',
  },

  // Electrical
  {
    name: 'Ran Tao',
    role: 'Electrical Lead',
    discipline: 'Electrical',
    image: 'https://i.ibb.co/jvCRFsfX/Aryan-Edited-Ran-Edited-2.png',
    linkedin: 'https://www.linkedin.com/in/ran-tao-755bb91a2/',
    email: 'tao.ran@student.ubc.ca',
  },
  {
    name: 'Ryan Li',
    role: 'Electrical Co-Lead',
    discipline: 'Electrical',
    image: 'https://i.ibb.co/0hTVjkB/ryan.webp',
    linkedin: 'https://www.linkedin.com/in/ryanduduli',
    email: 'ryanduduli@gmail.com',
  },

  // Software
  {
    name: 'Aryan Roshan',
    role: 'Software Lead',
    discipline: 'Software',
    image: 'https://i.ibb.co/fzVtgkGH/Aryan-Edited-1.png',
    linkedin: 'https://www.linkedin.com/in/arynrosh',
    email: 'arynrosh@gmail.com',
  },
];

// UI helpers
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
