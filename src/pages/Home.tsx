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
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    badge: 'Software Architecture • AI Engineering • Developer Tooling',
    heading:
      'I design systems that make complex software easier to build, understand and evolve.',
    intro:
      "I'm Alan Gomes, a software architect and hands-on engineer with a career that started in 2012. My work sits between architecture, product engineering, automation and the practical use of AI in software development.",
    work: 'View selected work',
    about: 'About me',
    pillars: [
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
    ],
    current: 'Current exploration',
    currentHeading:
      'Governed coding agents, retrieval benchmarks and local-first developer infrastructure.',
    currentText:
      'I like projects where architecture has to survive contact with reality: imperfect repositories, constrained context, security boundaries, operational friction and changing product needs.',
  },
  'pt-BR': {
    badge: 'Arquitetura de Software • Engenharia de IA • Developer Tooling',
    heading:
      'Eu projeto sistemas que tornam software complexo mais fácil de construir, entender e evoluir.',
    intro:
      'Sou Alan Gomes, arquiteto de software e engenheiro hands-on, com uma carreira iniciada em 2012. Meu trabalho está na interseção entre arquitetura, engenharia de produto, automação e uso prático de IA no desenvolvimento de software.',
    work: 'Ver projetos selecionados',
    about: 'Sobre mim',
    pillars: [
      {
        title: 'Arquitetura de Software',
        text: 'Transformo domínios confusos e restrições difíceis em limites claros, APIs, decisões evolutivas e sistemas que os times conseguem operar de verdade.',
      },
      {
        title: 'Engenharia de IA',
        text: 'Exploro agentes de código, engenharia de contexto, retrieval, benchmarks e automação governada com forte preferência por evidência em vez de hype.',
      },
      {
        title: 'Developer Experience',
        text: 'Construo ferramentas e fluxos que reduzem atrito: infraestrutura local, automação, diagnóstico, convenções reutilizáveis e caminhos mais seguros de entrega.',
      },
    ],
    current: 'Exploração atual',
    currentHeading:
      'Agentes de código governados, benchmarks de retrieval e infraestrutura local-first para desenvolvimento.',
    currentText:
      'Gosto de projetos em que a arquitetura precisa sobreviver ao contato com a realidade: repositórios imperfeitos, contexto limitado, fronteiras de segurança, atrito operacional e necessidades de produto em mudança.',
  },
};

export default function Home() {
  const { language } = useLanguage();
  const content = copy[language];
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
              {content.badge}
            </Badge>

            <Heading
              fontWeight={800}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1.05}>
              {content.heading}
            </Heading>

            <Text color={subtle} fontSize={{ base: 'lg', md: 'xl' }} maxW={'3xl'}>
              {content.intro}
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to={'/Projects'}
                size={'lg'}
                colorScheme={'orange'}
                rounded={'full'}>
                {content.work}
              </Button>
              <Button
                as={RouterLink}
                to={'/AboutMe'}
                size={'lg'}
                variant={'outline'}
                rounded={'full'}>
                {content.about}
              </Button>
            </Stack>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {content.pillars.map((pillar) => (
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
              {content.current}
            </Text>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mt={2} mb={3}>
              {content.currentHeading}
            </Heading>
            <Text color={subtle} maxW={'4xl'}>
              {content.currentText}
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
