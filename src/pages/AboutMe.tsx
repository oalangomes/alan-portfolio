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

const areas = [
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
];

const journey = [
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
];

export default function AboutMe() {
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
              About
            </Text>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} mt={2}>
              Alan Gomes
            </Heading>
            <Text fontSize={'xl'} color={subtle} mt={2}>
              Software Architect • Hands-on Engineer • Digital Innovation
            </Text>
          </Box>
        </Stack>

        <Stack spacing={5} fontSize={{ base: 'md', md: 'lg' }} color={subtle}>
          <Text>
            I started working in technology in 2012 and learned most of what I
            know the same way I still learn today: by taking real problems
            seriously enough to understand them, build something, validate it
            and improve the result.
          </Text>
          <Text>
            My background crosses enterprise commerce, backend engineering,
            integrations and solution architecture. Over time, my focus expanded
            from implementing systems to understanding why they become difficult
            to change — and how architecture, tooling and better engineering
            feedback loops can reduce that difficulty.
          </Text>
          <Text>
            That path has taken me through products and projects in organizations
            with very different scales and constraints — from Siemens and
            Bematech to enterprise engagements involving Carrefour, Editora
            Abril, Suzano, Whirlpool, Marisa and Hering, followed by major
            architecture chapters at Claro and Vivo.
          </Text>
          <Text>
            Today I spend a lot of energy at the intersection of software
            architecture and AI-assisted engineering. I&apos;m especially
            interested in coding agents, context engineering, retrieval and
            lifecycle governance, but I prefer experiments, benchmarks and
            explicit trade-offs to magical claims.
          </Text>
          <Text>
            Outside software, I&apos;m a father, musician and Brazilian
            Jiu-Jitsu practitioner. Those parts of my life keep me curious,
            grounded and permanently interested in learning things the hard way.
          </Text>
        </Stack>

        <Box>
          <Text
            color={'orange.400'}
            fontWeight={700}
            textTransform={'uppercase'}
            letterSpacing={'wide'}
            mb={2}>
            Journey
          </Text>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={3}>
            More than a decade of engineering across different scales
          </Heading>
          <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }} maxW={'3xl'}>
            Some names below were direct employers and others were clients or
            organizations I worked with through consulting engagements. What
            matters to me is the progression of the problems: from building
            software to designing systems and improving how engineering itself
            gets done.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {journey.map((item) => (
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
            What I work on
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {areas.map((area) => (
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
