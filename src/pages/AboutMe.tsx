import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import MyAvatar from '../components/logos/MyAvatar';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    eyebrow: 'About',
    role: 'Software Architect • Hands-on Engineer • Digital Innovation',
    intro: [
      'I started working in technology in 2012 and learned most of what I know the same way I still learn today: by taking real problems seriously enough to understand them, build something, validate it and improve the result.',
      'My background crosses enterprise commerce, backend engineering, integrations and solution architecture. Over time, my focus expanded from implementing systems to understanding why they become difficult to change — and how architecture, tooling and better engineering feedback loops can reduce that difficulty.',
      'That path has taken me through products and projects in organizations with very different scales and constraints — from Siemens and Bematech to enterprise engagements involving Carrefour, Editora Abril, Suzano, Whirlpool, Marisa and Hering, followed by major architecture chapters at Claro and Vivo.',
      "Today I spend a lot of energy at the intersection of software architecture and AI-assisted engineering. I'm especially interested in coding agents, context engineering, retrieval and lifecycle governance, but I prefer experiments, benchmarks and explicit trade-offs to magical claims.",
      "Outside software, I'm a father, musician and Brazilian Jiu-Jitsu practitioner. Those parts of my life keep me curious, grounded and permanently interested in learning things the hard way.",
    ],
    journeyLabel: 'Journey',
    journeyHeading: 'More than a decade of engineering across different scales',
    journeyText:
      'Some names below were direct employers and others were clients or organizations I worked with through consulting engagements. What matters to me is the progression of the problems: from building software to designing systems and improving how engineering itself gets done.',
    journey: [
      {
        period: '2012 — Foundations',
        title: 'Learning by building',
        text: 'I started my career around software automation and application development, with early experiences at Siemens and Bematech before moving deeper into software engineering.',
      },
      {
        period: '2016 — Enterprise systems',
        title: 'Commerce, integration and scale',
        text: 'SAP Commerce became an important part of my path. Across direct roles and consulting engagements, I worked on enterprise initiatives connected to companies such as Carrefour, Editora Abril, Suzano, Whirlpool, Marisa and Hering.',
      },
      {
        period: '2020 — Architecture',
        title: 'From implementation to system design',
        text: 'At Claro, engineering responsibilities increasingly became architecture responsibilities: understanding wider system impacts, solution boundaries, integrations and how technical decisions survive real operational constraints.',
      },
      {
        period: 'Today',
        title: 'Architecture, innovation and applied AI',
        text: 'At Vivo, my work has expanded across software architecture, technical discovery and digital innovation while I continue exploring developer tooling and AI-assisted engineering through hands-on research and product experiments.',
      },
    ],
    workOn: 'What I work on',
    areas: [
      {
        title: 'Architecture',
        text: 'Solution design, domain boundaries, APIs, integration, distributed systems, SAP Commerce and evolutionary architecture.',
      },
      {
        title: 'Engineering',
        text: 'Java, JavaScript/TypeScript, Node.js, Python, React, automation, testing, CI/CD and enough infrastructure to make the system operable.',
      },
      {
        title: 'Applied AI',
        text: 'Coding agents, context engineering, retrieval, evaluation, local models and experiments that connect AI capabilities to engineering constraints.',
      },
    ],
  },
  'pt-BR': {
    eyebrow: 'Sobre',
    role: 'Arquiteto de Software • Engenheiro Hands-on • Inovação Digital',
    intro: [
      'Comecei a trabalhar com tecnologia em 2012 e aprendi a maior parte do que sei do mesmo jeito que continuo aprendendo hoje: levando problemas reais a sério o suficiente para entendê-los, construir algo, validar e melhorar o resultado.',
      'Minha trajetória passa por comércio enterprise, engenharia backend, integrações e arquitetura de soluções. Com o tempo, meu foco se expandiu da implementação de sistemas para entender por que eles se tornam difíceis de mudar — e como arquitetura, tooling e ciclos melhores de feedback de engenharia podem reduzir essa dificuldade.',
      'Esse caminho me levou por produtos e projetos em organizações de escalas e restrições muito diferentes — de Siemens e Bematech a iniciativas enterprise envolvendo Carrefour, Editora Abril, Suzano, Whirlpool, Marisa e Hering, seguidas por capítulos importantes de arquitetura na Claro e na Vivo.',
      'Hoje concentro muita energia na interseção entre arquitetura de software e engenharia assistida por IA. Tenho interesse especial em agentes de código, engenharia de contexto, retrieval e governança de lifecycle, mas prefiro experimentos, benchmarks e trade-offs explícitos a promessas mágicas.',
      'Fora do software, sou pai, músico e praticante de Jiu-Jitsu Brasileiro. Essas partes da minha vida me mantêm curioso, com os pés no chão e permanentemente interessado em aprender fazendo.',
    ],
    journeyLabel: 'Trajetória',
    journeyHeading: 'Mais de uma década de engenharia em diferentes escalas',
    journeyText:
      'Alguns nomes abaixo foram empregadores diretos e outros foram clientes ou organizações com as quais trabalhei por meio de consultorias. Para mim, o que importa é a progressão dos problemas: de construir software a projetar sistemas e melhorar a própria forma como a engenharia é feita.',
    journey: [
      {
        period: '2012 — Fundamentos',
        title: 'Aprendendo construindo',
        text: 'Comecei minha carreira entre automação de software e desenvolvimento de aplicações, com experiências iniciais na Siemens e na Bematech antes de avançar mais profundamente em engenharia de software.',
      },
      {
        period: '2016 — Sistemas enterprise',
        title: 'Commerce, integração e escala',
        text: 'SAP Commerce se tornou uma parte importante da minha trajetória. Entre posições diretas e projetos de consultoria, trabalhei em iniciativas enterprise ligadas a empresas como Carrefour, Editora Abril, Suzano, Whirlpool, Marisa e Hering.',
      },
      {
        period: '2020 — Arquitetura',
        title: 'Da implementação ao desenho de sistemas',
        text: 'Na Claro, responsabilidades de engenharia foram se transformando cada vez mais em responsabilidades de arquitetura: entender impactos amplos, limites de solução, integrações e como decisões técnicas sobrevivem a restrições operacionais reais.',
      },
      {
        period: 'Hoje',
        title: 'Arquitetura, inovação e IA aplicada',
        text: 'Na Vivo, meu trabalho se expandiu entre arquitetura de software, discovery técnico e inovação digital, enquanto continuo explorando developer tooling e engenharia assistida por IA por meio de pesquisa prática e experimentos de produto.',
      },
    ],
    workOn: 'No que eu trabalho',
    areas: [
      {
        title: 'Arquitetura',
        text: 'Desenho de soluções, limites de domínio, APIs, integração, sistemas distribuídos, SAP Commerce e arquitetura evolutiva.',
      },
      {
        title: 'Engenharia',
        text: 'Java, JavaScript/TypeScript, Node.js, Python, React, automação, testes, CI/CD e infraestrutura suficiente para tornar o sistema operável.',
      },
      {
        title: 'IA Aplicada',
        text: 'Agentes de código, engenharia de contexto, retrieval, avaliação, modelos locais e experimentos que conectam capacidades de IA às restrições reais de engenharia.',
      },
    ],
  },
};

export default function AboutMe() {
  const { language } = useLanguage();
  const content = copy[language];
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.900');

  return (
    <Container maxW={'5xl'} py={{ base: 14, md: 20 }}>
      <Stack spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align={{ base: 'flex-start', md: 'center' }}>
          <MyAvatar size={'xl'} />
          <Box>
            <Text
              color={'orange.400'}
              fontWeight={700}
              textTransform={'uppercase'}
              letterSpacing={'wide'}>
              {content.eyebrow}
            </Text>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} mt={2}>
              Alan Gomes
            </Heading>
            <Text fontSize={'xl'} color={subtle} mt={2}>
              {content.role}
            </Text>
          </Box>
        </Stack>

        <Stack spacing={5} fontSize={{ base: 'md', md: 'lg' }} color={subtle}>
          {content.intro.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </Stack>

        <Box>
          <Text
            color={'orange.400'}
            fontWeight={700}
            textTransform={'uppercase'}
            letterSpacing={'wide'}
            mb={2}>
            {content.journeyLabel}
          </Text>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={3}>
            {content.journeyHeading}
          </Heading>
          <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }} maxW={'3xl'}>
            {content.journeyText}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {content.journey.map((item) => (
            <Box
              key={item.period}
              p={6}
              borderWidth={'1px'}
              borderRadius={'2xl'}
              bg={cardBg}>
              <Text
                color={'orange.400'}
                fontWeight={700}
                fontSize={'sm'}
                textTransform={'uppercase'}
                letterSpacing={'wide'}>
                {item.period}
              </Text>
              <Heading fontSize={'xl'} mt={2} mb={3}>
                {item.title}
              </Heading>
              <Text color={subtle}>{item.text}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={6}>
            {content.workOn}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {content.areas.map((area) => (
              <Box
                key={area.title}
                p={6}
                borderWidth={'1px'}
                borderRadius={'2xl'}
                bg={cardBg}>
                <Heading fontSize={'xl'} mb={3}>
                  {area.title}
                </Heading>
                <Text color={subtle}>{area.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
