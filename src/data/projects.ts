export interface Project {
  id: number;
  name: string;
  eyebrow: string;
  githubUrl?: string;
  hashtags: string[];
  summary: string;
  description: string;
  highlights: string[];
  visibility: 'Public' | 'Private';
  status: string;
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'AgentsOrchNext',
    eyebrow: 'AI Engineering / R&D',
    hashtags: ['AI Agents', 'Context Engineering', 'Retrieval', 'Python'],
    summary:
      'A governed experimentation platform for coding agents, context engineering, retrieval and reusable software-development lifecycles.',
    description:
      'AgentsOrchNext is my research and engineering playground for answering a difficult question: how do we make coding agents useful on real repositories without turning them into an opaque prompt-and-pray workflow? The project explores deterministic context planning, bounded retrieval, execution policies, provenance, lifecycle orchestration and benchmark-driven evolution.',
    highlights: [
      'Benchmark-driven retrieval experiments instead of intuition-only architecture decisions.',
      'Governed context, provenance, budgets and execution boundaries.',
      'Backend-neutral retrieval experiments across lexical, structured and vector approaches.',
      'Lifecycle-oriented design focused on reusable technical handoffs and safe execution.',
    ],
    visibility: 'Private',
    status: 'Active research',
  },
  {
    id: 1,
    name: 'runnerctl',
    eyebrow: 'Developer Tooling / Open Source',
    githubUrl: 'https://github.com/oalangomes/actions-runners',
    hashtags: ['GitHub Actions', 'Linux', 'systemd', 'Automation'],
    summary:
      'A lightweight Linux control plane for operating multiple self-hosted GitHub Actions runners safely and on demand.',
    description:
      'runnerctl turns a collection of local self-hosted runners into a small operational platform. It provides a stable CLI, systemd-based lifecycle management, machine-local configuration, health checks, diagnostics, package verification and portable Agent Skills for coding assistants.',
    highlights: [
      'On-demand lifecycle by default instead of permanently running every runner.',
      'Linux + systemd architecture with machine-local state kept outside Git.',
      'Health, doctor, logs, safe removal and repository-aware runner operations.',
      'Portable Agent Skills for Codex, GitHub Copilot CLI, Claude Code and compatible clients.',
    ],
    visibility: 'Public',
    status: 'Maintained',
  },
  {
    id: 2,
    name: 'NeuroTrack',
    eyebrow: 'Product Engineering',
    hashtags: ['Node.js', 'React', 'Mobile', 'Architecture'],
    summary:
      'A multi-client product ecosystem used to exercise backend, web, mobile, integrations and long-lived architecture decisions.',
    description:
      'NeuroTrack is a long-running personal product ecosystem that I use to practice product engineering beyond isolated demos. It spans service APIs, web and mobile clients, integrations, authorization boundaries, automated tests and continuous architectural evolution.',
    highlights: [
      'Multiple clients and services evolving as one product ecosystem.',
      'Real authorization, integration and domain-boundary concerns.',
      'Used as a realistic corpus for repository-level coding-agent benchmarks.',
      'A place to validate architecture decisions under continuous change.',
    ],
    visibility: 'Private',
    status: 'Active product R&D',
  },
  {
    id: 3,
    name: 'Caverna BJJ',
    eyebrow: 'Personal Product / PWA',
    githubUrl: 'https://github.com/oalangomes/cavernaBJJ',
    hashtags: ['PWA', 'JavaScript', 'Offline', 'Product'],
    summary:
      'An offline-first workout generator born from Brazilian Jiu-Jitsu training and expanded into a broader functional-training companion.',
    description:
      'Caverna BJJ is a small browser-first product that generates functional workouts from profile, equipment, training history and recovery-oriented constraints. It intentionally stays lightweight: vanilla JavaScript, local persistence and PWA support.',
    highlights: [
      'Works offline and can be installed as a PWA.',
      'Workout generation considers history, intensity, equipment and repetition.',
      'Local-first persistence keeps the product usable without a backend.',
      'Built from a personal need and evolved through actual use.',
    ],
    visibility: 'Public',
    status: 'Experimental',
  },
];
