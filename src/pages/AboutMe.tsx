import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
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

  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const primaryText = useColorModeValue('gray.800', 'gray.100');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const softBg = useColorModeValue(
    'var(--portfolio-accent-soft)',
    'rgba(var(--portfolio-accent-rgb),0.08)',
  );

  return (
    <Box bg={pageBg}>
      <Container maxW={'7xl'} py={{ base: 12, md: 22 }} px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 10, md: 18 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={{ base: 6, lg: 12 }}
            alignItems={'center'}>
            <GridItem minW={0} colSpan={{ base: 1, lg: 4 }}>
              <Box
                p={{ base: 2, md: 3 }}
                display={'inline-block'}
                borderRadius={'3xl'}
                borderWidth={'1px'}
                borderColor={borderColor}
                bg={cardBg}
                boxShadow={'xl'}>
                <MyAvatar size={'xl'} />
              </Box>
            </GridItem>

            <GridItem minW={0} colSpan={{ base: 1, lg: 8 }}>
              <Stack spacing={4}>
                <Text
                  color={'var(--portfolio-accent)'}
                  fontWeight={800}
                  fontSize={'xs'}
                  textTransform={'uppercase'}
                  letterSpacing={'0.16em'}>
                  {content.eyebrow}
                </Text>
                <Heading
                  fontSize={{ base: '4xl', md: '6xl' }}
                  lineHeight={1}
                  letterSpacing={'-0.04em'}>
                  Alan Gomes
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={subtle}
                  maxW={'3xl'}
                  overflowWrap={'anywhere'}>
                  {content.role}
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={{ base: 5, lg: 12 }}>
            <GridItem minW={0} colSpan={{ base: 1, lg: 4 }}>
              <Text
                fontSize={'xs'}
                fontWeight={800}
                textTransform={'uppercase'}
                letterSpacing={'0.14em'}
                color={muted}>
                2012 → {language === 'pt-BR' ? 'Hoje' : 'Today'}
              </Text>
            </GridItem>
            <GridItem minW={0} colSpan={{ base: 1, lg: 8 }}>
              <Stack
                spacing={{ base: 4, md: 5 }}
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight={{ base: 1.75, md: 1.9 }}
                color={subtle}>
                {content.intro.map((paragraph, index) => (
                  <Text
                    key={paragraph}
                    fontSize={index === 0 ? { base: 'md', md: 'xl' } : undefined}
                    color={index === 0 ? primaryText : subtle}
                    fontWeight={index === 0 ? 600 : 400}
                    overflowWrap={'anywhere'}>
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </GridItem>
          </Grid>

          <Stack spacing={7}>
            <Stack spacing={3} maxW={'4xl'} minW={0}>
              <Text
                color={'var(--portfolio-accent)'}
                fontWeight={800}
                fontSize={'xs'}
                textTransform={'uppercase'}
                letterSpacing={'0.16em'}>
                {content.journeyLabel}
              </Text>
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight={1.05}
                letterSpacing={'-0.035em'}>
                {content.journeyHeading}
              </Heading>
              <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} overflowWrap={'anywhere'}>
                {content.journeyText}
              </Text>
            </Stack>

            <Stack spacing={0}>
              {content.journey.map((item, index) => (
                <Grid
                  key={item.period}
                  templateColumns={{ base: '1fr', md: '180px 1fr' }}
                  gap={{ base: 3, md: 8 }}
                  py={{ base: 6, md: 8 }}
                  borderTopWidth={'1px'}
                  borderColor={borderColor}>
                  <Box minW={0}>
                    <HStack spacing={3} align={'flex-start'}>
                      <Box
                        w={2}
                        h={2}
                        flex={'0 0 auto'}
                        borderRadius={'full'}
                        bg={'var(--portfolio-accent)'}
                      />
                      <Text
                        color={'var(--portfolio-accent)'}
                        fontWeight={800}
                        fontSize={'sm'}
                        overflowWrap={'anywhere'}>
                        {item.period}
                      </Text>
                    </HStack>
                  </Box>
                  <Box minW={0}>
                    <HStack justify={'space-between'} align={'start'} gap={4} minW={0}>
                      <Heading
                        fontSize={{ base: 'xl', md: '2xl' }}
                        letterSpacing={'-0.02em'}
                        overflowWrap={'anywhere'}>
                        {item.title}
                      </Heading>
                      <Text fontSize={'xs'} fontWeight={800} color={muted}>
                        0{index + 1}
                      </Text>
                    </HStack>
                    <Text mt={3} color={subtle} lineHeight={1.8} overflowWrap={'anywhere'}>
                      {item.text}
                    </Text>
                  </Box>
                </Grid>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={7}>
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              letterSpacing={'-0.03em'}>
              {content.workOn}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {content.areas.map((area, index) => (
                <Box
                  key={area.title}
                  minW={0}
                  p={{ base: 5, md: 7 }}
                  borderWidth={'1px'}
                  borderColor={borderColor}
                  borderRadius={'2xl'}
                  bg={cardBg}>
                  <Box
                    mb={6}
                    px={2.5}
                    py={1}
                    display={'inline-block'}
                    borderRadius={'full'}
                    bg={softBg}
                    color={'var(--portfolio-accent)'}
                    fontSize={'xs'}
                    fontWeight={800}>
                    0{index + 1}
                  </Box>
                  <Heading fontSize={'xl'} mb={3}>
                    {area.title}
                  </Heading>
                  <Text color={subtle} lineHeight={1.75} overflowWrap={'anywhere'}>
                    {area.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
