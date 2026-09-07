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

export default function AboutMe() {
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.900');

  return (
    <Container maxW={'5xl'} py={{ base: 14, md: 20 }}>
      <Stack spacing={10}>
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
      </Stack>
    </Container>
  );
}
