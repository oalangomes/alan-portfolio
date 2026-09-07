import {
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
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import ArchitectureConstellation from '../components/ArchitectureConstellation';
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
    proofLabel: 'Career context',
    proofLead: 'Engineering across products, consulting and enterprise systems since 2012.',
    proofItems: ['Since 2012', 'Siemens & Bematech', 'Claro & Vivo', 'Enterprise consulting'],
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
    proofLabel: 'Contexto de carreira',
    proofLead: 'Engenharia entre produtos, consultoria e sistemas enterprise desde 2012.',
    proofItems: ['Desde 2012', 'Siemens & Bematech', 'Claro & Vivo', 'Consultoria enterprise'],
  },
};


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
        style={{ backgroundImage: glow }}
      />
      <Box
        position={'absolute'}
        inset={0}
        pointerEvents={'none'}
        opacity={useColorModeValue(0.12, 0.08)}
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container
        maxW={'7xl'}
        position={'relative'}
        py={{ base: 16, md: 24, lg: 28 }}
        px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 14, md: 20 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={{ base: 10, lg: 12 }}
            alignItems={'center'}>
            <GridItem minW={0} colSpan={{ base: 1, lg: 7 }}>
              <Stack spacing={7}>
                <Box
                  alignSelf={'flex-start'}
                  maxW={'100%'}
                  px={3}
                  py={2}
                  borderRadius={{ base: 'xl', md: 'full' }}
                  bg={softBg}
                  color={'orange.300'}
                  fontSize={'xs'}
                  fontWeight={750}
                  lineHeight={1.45}
                  whiteSpace={'normal'}
                  wordBreak={'break-word'}>
                  {content.badge}
                </Box>

                <Heading
                  maxW={'900px'}
                  fontWeight={850}
                  fontSize={{ base: '3xl', sm: '4xl', md: '6xl', xl: '7xl' }}
                  lineHeight={{ base: 1.02, md: 0.98 }}
                  letterSpacing={'-0.045em'}>
                  {content.heading}
                </Heading>

                <Text
                  color={subtle}
                  fontSize={{ base: 'md', md: 'xl' }}
                  lineHeight={{ base: 1.7, md: 1.8 }}
                  maxW={'3xl'}>
                  {content.intro}
                </Text>

                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} w={'100%'}>
                  <Button
                    as={RouterLink}
                    to={'/Projects'}
                    size={'lg'}
                    colorScheme={'orange'}
                    rounded={'full'}
                    rightIcon={<FiArrowUpRight />}
                    px={7}
                    w={{ base: '100%', sm: 'auto' }}>
                    {content.work}
                  </Button>
                  <Button
                    as={RouterLink}
                    to={'/AboutMe'}
                    size={'lg'}
                    variant={'ghost'}
                    rounded={'full'}
                    px={7}
                    w={{ base: '100%', sm: 'auto' }}>
                    {content.about}
                  </Button>
                </Stack>
              </Stack>
            </GridItem>

            <GridItem minW={0} colSpan={{ base: 1, lg: 5 }}>
              <Box
                position={'relative'}
                w={'100%'}
                maxW={'100%'}
                minW={0}
                p={{ base: 5, md: 8 }}
                borderRadius={'3xl'}
                borderWidth={'1px'}
                borderColor={borderColor}
                bg={panelBg}
                backdropFilter={'blur(16px)'}
                boxShadow={'0 24px 80px rgba(0,0,0,0.10)'}>
                <HStack justify={'space-between'} align={'flex-start'} gap={4} mb={{ base: 6, md: 8 }}>
                  <Text
                    fontSize={'xs'}
                    fontWeight={800}
                    color={'orange.400'}
                    textTransform={'uppercase'}
                    letterSpacing={'0.12em'}
                    minW={0}>
                    {content.current}
                  </Text>
                  <Box w={2} h={2} borderRadius={'full'} bg={'orange.400'} />
                </HStack>

                <Heading
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                  lineHeight={1.2}
                  letterSpacing={'-0.03em'}>
                  {content.currentHeading}
                </Heading>

                <Text mt={5} color={subtle} lineHeight={1.75} overflowWrap={'anywhere'}>
                  {content.currentText}
                </Text>

                <Box mt={8}>
                  <ArchitectureConstellation />
                </Box>
              </Box>
            </GridItem>
          </Grid>

          <Box
            p={{ base: 5, md: 6 }}
            borderWidth={'1px'}
            borderColor={borderColor}
            borderRadius={'2xl'}
            bg={cardBg}>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                justify={'space-between'}
                align={{ base: 'flex-start', md: 'flex-end' }}
                gap={4}>
                <Box minW={0}>
                  <Text
                    color={'orange.400'}
                    fontSize={'xs'}
                    fontWeight={800}
                    textTransform={'uppercase'}
                    letterSpacing={'0.14em'}>
                    {content.proofLabel}
                  </Text>
                  <Text
                    mt={2}
                    color={subtle}
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={1.7}>
                    {content.proofLead}
                  </Text>
                </Box>
              </Stack>

              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
                {content.proofItems.map((item) => (
                  <Box
                    key={item}
                    minW={0}
                    px={{ base: 3, md: 4 }}
                    py={3}
                    borderRadius={'xl'}
                    bg={softBg}>
                    <Text
                      fontSize={{ base: 'xs', md: 'sm' }}
                      fontWeight={750}
                      overflowWrap={'anywhere'}>
                      {item}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {content.pillars.map((pillar, index) => (
                <Box
                  key={pillar.title}
                  minW={0}
                  p={{ base: 5, md: 7 }}
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
                      color={'orange.400'}
                      fontSize={'sm'}
                      fontWeight={800}>
                      0{index + 1}
                    </Box>
                  </HStack>
                  <Heading
                    fontSize={'xl'}
                    mb={3}
                    letterSpacing={'-0.02em'}>
                    {pillar.title}
                  </Heading>
                  <Text color={subtle} lineHeight={1.75} overflowWrap={'anywhere'}>
                    {pillar.text}
                  </Text>
                </Box>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
