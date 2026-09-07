import { Language } from '../i18n/LanguageContext';

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

interface LocalizedText {
  en: string;
  'pt-BR': string;
}

interface ProjectDefinition {
  id: number;
  name: string;
  eyebrow: LocalizedText;
  githubUrl?: string;
  hashtags: string[];
  summary: LocalizedText;
  description: LocalizedText;
  highlights: Record<Language, string[]>;
  visibility: 'Public' | 'Private';
  status: LocalizedText;
}

const projectDefinitions: ProjectDefinition[] = [
  {
    id: 0,
    name: 'AgentsOrchNext',
    eyebrow: {
      en: 'AI Engineering / R&D',
      'pt-BR': 'Engenharia de IA / P&D',
    },
    hashtags: ['AI Agents', 'Context Engineering', 'Retrieval', 'Python'],
    summary: {
      en: 'A governed experimentation platform for coding agents, context engineering, retrieval and reusable software-development lifecycles.',
      'pt-BR':
        'Uma plataforma governada de experimentação para agentes de código, engenharia de contexto, retrieval e ciclos reutilizáveis de desenvolvimento de software.',
    },
    description: {
      en: 'AgentsOrchNext is my research and engineering playground for answering a difficult question: how do we make coding agents useful on real repositories without turning them into an opaque prompt-and-pray workflow? The project explores deterministic context planning, bounded retrieval, execution policies, provenance, lifecycle orchestration and benchmark-driven evolution.',
      'pt-BR':
        'AgentsOrchNext é meu laboratório de pesquisa e engenharia para responder a uma pergunta difícil: como tornar agentes de código úteis em repositórios reais sem transformá-los em um fluxo opaco de prompt e torcida? O projeto explora planejamento determinístico de contexto, retrieval limitado, políticas de execução, proveniência, orquestração de lifecycle e evolução orientada por benchmarks.',
    },
    highlights: {
      en: [
        'Benchmark-driven retrieval experiments instead of intuition-only architecture decisions.',
        'Governed context, provenance, budgets and execution boundaries.',
        'Backend-neutral retrieval experiments across lexical, structured and vector approaches.',
        'Lifecycle-oriented design focused on reusable technical handoffs and safe execution.',
      ],
      'pt-BR': [
        'Experimentos de retrieval orientados por benchmarks, em vez de decisões arquiteturais baseadas apenas em intuição.',
        'Contexto, proveniência, budgets e limites de execução governados.',
        'Experimentos de retrieval independentes de backend entre abordagens lexicais, estruturadas e vetoriais.',
        'Design orientado a lifecycle, com foco em handoffs técnicos reutilizáveis e execução segura.',
      ],
    },
    visibility: 'Private',
    status: {
      en: 'Active research',
      'pt-BR': 'Pesquisa ativa',
    },
  },
  {
    id: 1,
    name: 'runnerctl',
    eyebrow: {
      en: 'Developer Tooling / Open Source',
      'pt-BR': 'Ferramentas para Desenvolvedores / Open Source',
    },
    githubUrl: 'https://github.com/oalangomes/actions-runners',
    hashtags: ['GitHub Actions', 'Linux', 'systemd', 'Automation'],
    summary: {
      en: 'A lightweight Linux control plane for operating multiple self-hosted GitHub Actions runners safely and on demand.',
      'pt-BR':
        'Um control plane leve em Linux para operar múltiplos runners self-hosted do GitHub Actions com segurança e sob demanda.',
    },
    description: {
      en: 'runnerctl turns a collection of local self-hosted runners into a small operational platform. It provides a stable CLI, systemd-based lifecycle management, machine-local configuration, health checks, diagnostics, package verification and portable Agent Skills for coding assistants.',
      'pt-BR':
        'runnerctl transforma uma coleção de runners self-hosted locais em uma pequena plataforma operacional. Ele oferece uma CLI estável, gerenciamento de lifecycle com systemd, configuração local da máquina, health checks, diagnósticos, verificação de pacotes e Agent Skills portáveis para assistentes de código.',
    },
    highlights: {
      en: [
        'On-demand lifecycle by default instead of permanently running every runner.',
        'Linux + systemd architecture with machine-local state kept outside Git.',
        'Health, doctor, logs, safe removal and repository-aware runner operations.',
        'Portable Agent Skills for Codex, GitHub Copilot CLI, Claude Code and compatible clients.',
      ],
      'pt-BR': [
        'Lifecycle sob demanda por padrão, em vez de manter todos os runners permanentemente ativos.',
        'Arquitetura Linux + systemd com estado local da máquina mantido fora do Git.',
        'Health, doctor, logs, remoção segura e operações de runner conscientes do repositório.',
        'Agent Skills portáveis para Codex, GitHub Copilot CLI, Claude Code e clientes compatíveis.',
      ],
    },
    visibility: 'Public',
    status: {
      en: 'Maintained',
      'pt-BR': 'Mantido',
    },
  },
  {
    id: 2,
    name: 'NeuroTrack',
    eyebrow: {
      en: 'Product Engineering',
      'pt-BR': 'Engenharia de Produto',
    },
    hashtags: ['Node.js', 'React', 'Mobile', 'Architecture'],
    summary: {
      en: 'A multi-client product ecosystem used to exercise backend, web, mobile, integrations and long-lived architecture decisions.',
      'pt-BR':
        'Um ecossistema de produto multi-cliente usado para exercitar backend, web, mobile, integrações e decisões arquiteturais de longo prazo.',
    },
    description: {
      en: 'NeuroTrack is a long-running personal product ecosystem that I use to practice product engineering beyond isolated demos. It spans service APIs, web and mobile clients, integrations, authorization boundaries, automated tests and continuous architectural evolution.',
      'pt-BR':
        'NeuroTrack é um ecossistema pessoal de produto de longa duração que uso para praticar engenharia de produto além de demos isoladas. Ele abrange APIs de serviço, clientes web e mobile, integrações, limites de autorização, testes automatizados e evolução arquitetural contínua.',
    },
    highlights: {
      en: [
        'Multiple clients and services evolving as one product ecosystem.',
        'Real authorization, integration and domain-boundary concerns.',
        'Used as a realistic corpus for repository-level coding-agent benchmarks.',
        'A place to validate architecture decisions under continuous change.',
      ],
      'pt-BR': [
        'Múltiplos clientes e serviços evoluindo como um único ecossistema de produto.',
        'Problemas reais de autorização, integração e limites de domínio.',
        'Usado como corpus realista para benchmarks de agentes de código em nível de repositório.',
        'Um espaço para validar decisões de arquitetura sob mudança contínua.',
      ],
    },
    visibility: 'Private',
    status: {
      en: 'Active product R&D',
      'pt-BR': 'P&D ativo de produto',
    },
  },
  {
    id: 3,
    name: 'Caverna BJJ',
    eyebrow: {
      en: 'Personal Product / PWA',
      'pt-BR': 'Produto Pessoal / PWA',
    },
    githubUrl: 'https://github.com/oalangomes/cavernaBJJ',
    hashtags: ['PWA', 'JavaScript', 'Offline', 'Product'],
    summary: {
      en: 'An offline-first workout generator born from Brazilian Jiu-Jitsu training and expanded into a broader functional-training companion.',
      'pt-BR':
        'Um gerador de treinos offline-first nascido do Jiu-Jitsu Brasileiro e expandido para um companheiro mais amplo de treino funcional.',
    },
    description: {
      en: 'Caverna BJJ is a small browser-first product that generates functional workouts from profile, equipment, training history and recovery-oriented constraints. It intentionally stays lightweight: vanilla JavaScript, local persistence and PWA support.',
      'pt-BR':
        'Caverna BJJ é um pequeno produto browser-first que gera treinos funcionais a partir de perfil, equipamentos, histórico de treino e restrições orientadas à recuperação. Ele permanece intencionalmente leve: JavaScript puro, persistência local e suporte a PWA.',
    },
    highlights: {
      en: [
        'Works offline and can be installed as a PWA.',
        'Workout generation considers history, intensity, equipment and repetition.',
        'Local-first persistence keeps the product usable without a backend.',
        'Built from a personal need and evolved through actual use.',
      ],
      'pt-BR': [
        'Funciona offline e pode ser instalado como PWA.',
        'A geração de treinos considera histórico, intensidade, equipamentos e repetição.',
        'A persistência local-first mantém o produto utilizável sem backend.',
        'Construído a partir de uma necessidade pessoal e evoluído pelo uso real.',
      ],
    },
    visibility: 'Public',
    status: {
      en: 'Experimental',
      'pt-BR': 'Experimental',
    },
  },
];

export const getProjects = (language: Language): Project[] =>
  projectDefinitions.map((project) => ({
    id: project.id,
    name: project.name,
    eyebrow: project.eyebrow[language],
    githubUrl: project.githubUrl,
    hashtags: project.hashtags,
    summary: project.summary[language],
    description: project.description[language],
    highlights: project.highlights[language],
    visibility: project.visibility,
    status: project.status[language],
  }));
