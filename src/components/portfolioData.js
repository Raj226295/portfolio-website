import {
  BriefcaseBusiness,
  Cpu,
  Database,
  Layers3,
  Mail,
  Palette,
  Rocket,
  Server,
  Sparkles,
} from 'lucide-react'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutLines = [
  'I build immersive digital products that feel sharp, fast, and memorable from the very first interaction.',
  'My focus sits at the intersection of clean frontend systems, resilient backend APIs, and the kind of motion that makes interfaces feel alive.',
  'From React experiences to Node-powered platforms, I like turning ambitious product ideas into launch-ready software with a premium finish.',
]

export const skills = [
  {
    name: 'React Experiences',
    icon: Layers3,
    description: 'App architecture, reusable systems, and polished UI motion.',
  },
  {
    name: 'Node APIs',
    icon: Server,
    description: 'Express services, auth flows, and scalable backend patterns.',
  },
  {
    name: 'Mongo Data',
    icon: Database,
    description: 'Schema design, performance tuning, and content-rich products.',
  },
  {
    name: '3D Interfaces',
    icon: Cpu,
    description: 'React Three Fiber scenes with optimized lighting and depth.',
  },
  {
    name: 'Product Design',
    icon: Palette,
    description: 'Minimal layouts, premium visual systems, and interface clarity.',
  },
  {
    name: 'Launch Ready',
    icon: Rocket,
    description: 'Deployments, testing, and production-minded execution.',
  },
]

export const projects = [
  {
    title: 'Neural Commerce',
    summary:
      'An immersive storefront with real-time stock sync, cinematic product reveals, and frictionless checkout journeys.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    outcome: 'Premium shopping flow',
    theme: 'from-cyan-400/25 via-sky-400/10 to-transparent',
  },
  {
    title: 'Signal Stack',
    summary:
      'A live analytics workspace that turns product events into readable dashboards, alerts, and collaboration-ready reports.',
    stack: ['MERN', 'Socket.IO', 'Charts', 'Role-based Access'],
    outcome: 'Realtime team visibility',
    theme: 'from-emerald-400/25 via-teal-400/10 to-transparent',
  },
  {
    title: 'Atlas Studio',
    summary:
      'A portfolio CMS built for creators who want fast publishing, rich media storytelling, and a futuristic visual layer.',
    stack: ['React', 'Express', 'MongoDB', 'Cloud Storage'],
    outcome: 'Editorial publishing engine',
    theme: 'from-amber-300/25 via-orange-300/10 to-transparent',
  },
]

export const contactCards = [
  {
    title: 'Best Fit',
    icon: BriefcaseBusiness,
    copy: 'Product builds, immersive marketing sites, dashboards, and full-stack launches.',
  },
  {
    title: 'Workflow',
    icon: Sparkles,
    copy: 'Clear communication, fast iteration, and detail-driven frontends with solid APIs behind them.',
  },
  {
    title: 'Reach Out',
    icon: Mail,
    copy: 'Use the form to start a conversation for freelance work, collaborations, or a new role.',
  },
]

export const sectionMotion = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}
