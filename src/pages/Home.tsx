import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const pillars = [
  {
    title: 'Software Architecture',
    text: 'I translate messy domains and hard constraints into boundaries, APIs, evolutionary decisions and systems teams can actually operate.',
  },
  {
    title: 'AI Engineering',
    text: 'I explore coding agents, context engineering, retrieval, benchmarks and governed automation with a strong preference for evidence over hype.',
  },
  {
    title: 'Developer Experience',
    text: 'I build tooling and workflows that reduce friction: local infrastructure, automation, diagnostics, reusable conventions and safer delivery paths.',
  },
];

export default function Home() {
  const cardBg = useColorModeValue('white', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Container maxW={'6xl'} py={{ base: 16, md: 24 }}>
        <Stack spacing={10}>
          <Stack spacing={6} maxW={'4xl'}>
            <Badge
              alignSelf={'flex-start'}
              px={3}
              py={1}
              borderRadius={'full'}
              colorScheme={'orange'}>
              Software Architecture • AI Engineering • Developer Tooling
            </Badge>

            <Heading
              fontWeight={800}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1.05}>
              I design systems that make complex software easier to build,
              understand and evolve.
            </Heading>

            <Text color={subtle} fontSize={{ base: 'lg', md: 'xl' }} maxW={'3xl'}>
              I&apos;m Alan Gomes, a software architect and hands-on engineer with
              a career that started in 2012. My work sits between architecture,
              product engineering, automation and the practical use of AI in
              software development.
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={'a'}
                href={'/Projects'}
                size={'lg'}
                colorScheme={'orange'}
                rounded={'full'}>
                View selected work
              </Button>
              <Button
                as={'a'}
                href={'/AboutMe'}
                size={'lg'}
                variant={'outline'}
                rounded={'full'}>
                About me
              </Button>
            </Stack>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {pillars.map((pillar) => (
              <Box
                key={pillar.title}
                p={6}
                borderWidth={'1px'}
                borderRadius={'2xl'}
                bg={cardBg}
                boxShadow={'sm'}>
                <Heading fontSize={'xl'} mb={3}>
                  {pillar.title}
                </Heading>
                <Text color={subtle}>{pillar.text}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            p={{ base: 6, md: 8 }}
            borderRadius={'2xl'}
            bg={useColorModeValue('orange.50', 'whiteAlpha.100')}>
            <Text fontSize={'sm'} fontWeight={700} textTransform={'uppercase'}>
              Current exploration
            </Text>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mt={2} mb={3}>
              Governed coding agents, retrieval benchmarks and local-first
              developer infrastructure.
            </Heading>
            <Text color={subtle} maxW={'4xl'}>
              I like projects where architecture has to survive contact with
              reality: imperfect repositories, constrained context, security
              boundaries, operational friction and changing product needs.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
