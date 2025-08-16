// src/data/positions.tsx

export type Position = {
  team: 'Mechanical Team' | 'Electrical Team' | 'Software Team' | 'Business Team';
  icon: 'wrench' | 'battery' | 'cpu' | 'briefcase';
  colorPill: string;  // tailwind classes for the pill
  colorRing: string;  // tailwind classes for the card ring accent
  goals: string[];
  future: string[];
  skills: string[];
};

export const positions: Position[] = [
  {
    team: 'Mechanical Team',
    icon: 'wrench',
    colorPill: 'bg-green-100 text-green-800',
    colorRing: 'ring-green-200',
    goals: [
      'Build welded frame with mounts for motor, battery, and seat. Install steering and front axle geometry. Fit brakes, pedals, and driver ergonomics. Achieve rolling chassis test.'
    ],
    future: [
      'Begin aeroshell concepting and mounting interface. Improve chassis stiffness and serviceability. Refine suspension with alignment jigs.'
    ],
    skills: [
      'Welding and jig setup, CAD/FEA basics, brake/steering troubleshooting, shop safety and assembly practices.',
    ],
  },
  {
    team: 'Electrical Team',
    icon: 'battery',
    colorPill: 'bg-amber-100 text-amber-800',
    colorRing: 'ring-amber-200',
    goals: [
      'Design battery pack layout and BMS. Set up motor controller integration. Wire low-voltage systems for sensors and controls.',
    ],
    future: [
      ': Expand solar array integration. Optimize power distribution and efficiency. Develop telemetry and data logging systems.',
    ],
    skills: [
      'PCB design, wiring harness fabrication, high/low voltage safety, power electronics troubleshooting, embedded systems basics.',
    ],
  },
  {
    team: 'Software Team',
    icon: 'cpu',
    colorPill: 'bg-blue-100 text-blue-800',
    colorRing: 'ring-blue-200',
    goals: [
      'Build vehicle telemetry system. Implement data dashboard for live monitoring. Develop firmware for sensors and control units.',
    ],
    future: [
      'Enable remote diagnostics and OTA updates. Integrate driver-assist features. Improve data storage and analysis tools.',
    ],
    skills: [
      'Embedded C/C++ and Python, networking protocols, database management, real-time data visualization, software testing and debugging',
    ],
  },
  {
    team: 'Business Team',
    icon: 'briefcase',
    colorPill: 'bg-purple-100 text-purple-800',
    colorRing: 'ring-purple-200',
    goals: [
      'Lead sponsor outreach. Manage finances and purchasing. Build club presence on campus and social media.',
    ],
    future: [
      'Develop long-term fundraising strategies. Expand partnerships with industry. Launch merchandise and branding initiatives.',
    ],
    skills: [
      'Project management, budgeting, marketing, sponsorship relations, public speaking, and leadership.',
    ],
  },
];
