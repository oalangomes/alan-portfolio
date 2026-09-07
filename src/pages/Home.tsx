import {
  Badge,
  Box,
  Button,
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
import { FiArrowUpRight, FiCpu, FiLayers, FiTool } from 'react-icons/fi';
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
    focus: ['Coding agents', 'Retrieval benchmarks', 'Local-first infrastructure'],
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
    focus: ['Agentes de código', 'Benchmarks de retrieval', 'Infraestrutura local-first'],
  },
};

const pillarIcons = [FiLayers, FiCpu, FiTool];

export default function Home() {
  const { language } = useLanguage();
  const content = copy[language];

  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const panelBg = useColorModeValue('rgba(255,255,255,0.78)', 'rgba(17,24,39,0.72)');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const softBg = useColorModeValue('orange.50', 'whiteAlpha.100');
  const glow =
    useColorModeValue(
      'radial-gradient(circle at 18% 15%, rgba(237,137,54,0.16), transparent 34%)',
      'radial-gradient(circle at 18% 15%, rgba(237,137,54,0.13), transparent 32%)',
    );

  return (
    <Box bg={pageBg} position={'relative'} overflow={'hidden'}>
      <Box
        position={'absolute'}
        inset={0}
        pointerEvents={'none'}
        backgroundImage={glow}
      />

      <Container
        maxW={'7xl'}
        position={'relative'}
        py={{ base: 16, md: 24, lg: 28 }}
        px={{ base: 5, md: 6 }}>
        <Stack spacing={{ base: 14, md: 20 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={{ base: 10, lg: 12 }}
            alignItems={'center'}>
            <GridItem colSpan={{ base: 1, lg: 7 }}>
              <Stack spacing={7}>
                <Badge
                  alignSelf={'flex-start'}
                  px={3}
                  py={1.5}
                  borderRadius={'full'}
                  colorScheme={'orange'}
                  variant={'subtle'}
                  textTransform={'none'}
                  fontSize={'xs'}
                  letterSpacing={'0.02em'}>
                  {content.badge}
                </Badge>

                <Heading
                  maxW={'900px'}
                  fontWeight={850}
                  fontSize={{ base: '4xl', sm: '5xl', md: '6xl', xl: '7xl' }}
                  lineHeight={{ base: 1.02, md: 0.98 }}
                  letterSpacing={'-0.045em'}>
                  {content.heading}
                </Heading>

                <Text
                  color={subtle}
                  fontSize={{ base: 'lg', md: 'xl' }}
                  lineHeight={1.8}
                  maxW={'3xl'}>
                  {content.intro}
                </Text>

                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                  <Button
                    as={RouterLink}
                    to={'/Projects'}
                    size={'lg'}
                    colorScheme={'orange'}
                    rounded={'full'}
                    rightIcon={<FiArrowUpRight />}
                    px={7}>
                    {content.work}
                  </Button>
                  <Button
                    as={RouterLink}
                    to={'/AboutMe'}
                    size={'lg'}
                    variant={'ghost'}
                    rounded={'full'}
                    px={7}>
                    {content.about}
                  </Button>
                </Stack>
              </Stack>
            </GridItem>

            <GridItem colSpan={{ base: 1, lg: 5 }}>
              <Box
                position={'relative'}
                p={{ base: 6, md: 8 }}
                borderRadius={'3xl'}
                borderWidth={'1px'}
                borderColor={borderColor}
                bg={panelBg}
                backdropFilter={'blur(16px)'}
                boxShadow={'0 24px 80px rgba(0,0,0,0.10)'}>
                <HStack justify={'space-between'} mb={8}>
                  <Text
                    fontSize={'xs'}
                    fontWeight={800}
                    color={'orange.400'}
                    textTransform={'uppercase'}
                    letterSpacing={'0.16em'}>
                    {content.current}
                  </Text>
                  <Box w={2} h={2} borderRadius={'full'} bg={'orange.400'} />
                </HStack>

                <Heading
                  fontSize={{ base: '2xl', md: '3xl' }}
                  lineHeight={1.2}
                  letterSpacing={'-0.03em'}>
                  {content.currentHeading}
                </Heading>

                <Text mt={5} color={subtle} lineHeight={1.8}>
                  {content.currentText}
                </Text>

                <Stack mt={8} spacing={3}>
                  {content.focus.map((item, index) => (
                    <HStack
                      key={item}
                      justify={'space-between'}
                      px={4}
                      py={3}
                      borderRadius={'xl'}
                      bg={softBg}>
                      <Text fontWeight={650}>{item}</Text>
                      <Text
                        fontSize={'xs'}
                        fontWeight={800}
                        color={muted}
                        fontVariantNumeric={'tabular-nums'}>
                        0{index + 1}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </GridItem>
          </Grid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {content.pillars.map((pillar, index) => {
              const PillarIcon = pillarIcons[index];

              return (
                <Box
                  key={pillar.title}
                  p={{ base: 6, md: 7 }}
                  borderWidth={'1px'}
                  borderColor={borderColor}
                  borderRadius={'2xl'}
                  bg={cardBg}
                  transition={'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'}
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                    borderColor: 'orange.300',
                  }}>
                  <HStack justify={'space-between'} mb={7}>
                    <Box
                      display={'grid'}
                      placeItems={'center'}
                      w={11}
                      h={11}
                      borderRadius={'xl'}
                      bg={softBg}
                      color={'orange.400'}>
                      <PillarIcon size={20} />
                    </Box>
                    <Text
                      fontSize={'xs'}
                      fontWeight={800}
                      color={muted}
                      fontVariantNumeric={'tabular-nums'}>
                      0{index + 1}
                    </Text>
                  </HStack>
                  <Heading
                    fontSize={'xl'}
                    mb={3}
                    letterSpacing={'-0.02em'}>
                    {pillar.title}
                  </Heading>
                  <Text color={subtle} lineHeight={1.75}>
                    {pillar.text}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
