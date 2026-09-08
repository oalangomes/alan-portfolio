import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCards from '../components/ProjectCards';
import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    eyebrow: 'Selected work',
    heading: 'Projects that represent how I think and build.',
    text: 'Not every meaningful project can be public. These case studies focus on the engineering problem, the decisions and the capabilities developed — with source links whenever the repository is public.',
    ctaLabel: 'Work together',
    ctaHeading: 'Interested in architecture, developer tooling or applied AI?',
    ctaText: 'If you have a hard engineering problem, a product that needs clearer boundaries or an AI idea that needs to survive reality, I am always open to a good technical conversation.',
    ctaButton: 'Start a conversation',
  },
  'pt-BR': {
    eyebrow: 'Projetos selecionados',
    heading: 'Projetos que representam como eu penso e construo.',
    text: 'Nem todo projeto relevante pode ser público. Estes estudos de caso focam no problema de engenharia, nas decisões e nas capacidades desenvolvidas — com links para o código sempre que o repositório é público.',
    ctaLabel: 'Vamos trabalhar juntos',
    ctaHeading: 'Interessado em arquitetura, developer tooling ou IA aplicada?',
    ctaText: 'Se você tem um problema difícil de engenharia, um produto que precisa de limites mais claros ou uma ideia de IA que precisa sobreviver à realidade, estou sempre aberto a uma boa conversa técnica.',
    ctaButton: 'Iniciar conversa',
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const content = copy[language];
  const projects = getProjects(language);
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const ambientGlow = useColorModeValue(
    'radial-gradient(circle at 82% 10%, rgba(var(--portfolio-accent-secondary-rgb),0.06), transparent 26%), radial-gradient(circle at 18% 42%, rgba(var(--portfolio-accent-rgb),0.05), transparent 30%)',
    'radial-gradient(circle at 82% 10%, rgba(var(--portfolio-accent-secondary-rgb),0.09), transparent 28%), radial-gradient(circle at 18% 42%, rgba(var(--portfolio-accent-rgb),0.07), transparent 32%)',
  );
  const ctaShadow = useColorModeValue(
    '0 16px 38px rgba(15,23,42,0.07), 0 0 0 1px rgba(var(--portfolio-accent-rgb),0.035)',
    '0 18px 46px rgba(0,0,0,0.25), 0 0 28px rgba(var(--portfolio-accent-rgb),0.06)',
  );
  const buttonGlow = useColorModeValue(
    '0 8px 22px rgba(var(--portfolio-accent-rgb),0.16)',
    '0 10px 26px rgba(0,0,0,0.22), 0 0 24px rgba(var(--portfolio-accent-rgb),0.18)',
  );
  const buttonHoverGlow = useColorModeValue(
    '0 12px 28px rgba(var(--portfolio-accent-rgb),0.22), 0 0 22px rgba(var(--portfolio-accent-rgb),0.10)',
    '0 14px 34px rgba(0,0,0,0.28), 0 0 34px rgba(var(--portfolio-accent-rgb),0.26)',
  );

  return (
    <Box
      bg={pageBg}
      minH={'calc(100vh - 72px)'}
      position={'relative'}
      overflow={'hidden'}>
      <Box
        position={'absolute'}
        inset={0}
        pointerEvents={'none'}
        style={{ backgroundImage: ambientGlow }}
      />
      <Container
        maxW={'7xl'}
        position={'relative'}
        py={{ base: 16, md: 22 }}
        px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 10, md: 14 }}>
          <Stack spacing={4} maxW={'4xl'} minW={0}>
            <Text
              color={'var(--portfolio-accent)'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.14em'}>
              {content.eyebrow}
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1}
              letterSpacing={'-0.04em'}
              overflowWrap={'anywhere'}>
              {content.heading}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} color={subtle} overflowWrap={'anywhere'}>
              {content.text}
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            {projects.map((project, index) => (
              <ProjectCards key={project.id} {...project} index={index} />
            ))}
          </SimpleGrid>

          <Box
            p={{ base: 6, md: 8 }}
            borderWidth={'1px'}
            borderColor={borderColor}
            borderRadius={'3xl'}
            bg={cardBg}
            boxShadow={ctaShadow}
            position={'relative'}
            overflow={'hidden'}>
            <Box
              position={'absolute'}
              top={0}
              left={{ base: 6, md: 8 }}
              right={{ base: 6, md: 8 }}
              h={'2px'}
              bg={'linear-gradient(90deg, transparent, rgba(var(--portfolio-accent-rgb),0.58), transparent)'}
              boxShadow={'0 0 14px rgba(var(--portfolio-accent-rgb),0.12)'}
              opacity={0.6}
              pointerEvents={'none'}
            />
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              justify={'space-between'}
              align={{ base: 'flex-start', lg: 'center' }}
              gap={6}>
              <Box maxW={'3xl'} minW={0}>
                <Text
                  color={'var(--portfolio-accent)'}
                  fontWeight={800}
                  fontSize={'xs'}
                  textTransform={'uppercase'}
                  letterSpacing={'0.14em'}>
                  {content.ctaLabel}
                </Text>
                <Heading
                  mt={3}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  letterSpacing={'-0.03em'}>
                  {content.ctaHeading}
                </Heading>
                <Text mt={4} color={subtle} lineHeight={1.8}>
                  {content.ctaText}
                </Text>
              </Box>

              <Button
                as={RouterLink}
                to={'/Contact'}
                size={'lg'}
                bg={'var(--portfolio-accent)'}
                color={'var(--portfolio-accent-contrast)'}
                rounded={'full'}
                rightIcon={<FiArrowUpRight />}
                flexShrink={0}
                boxShadow={buttonGlow}
                transition={'transform 180ms ease, box-shadow 180ms ease'}
                _hover={{
                  transform: 'translateY(-1px)',
                  boxShadow: buttonHoverGlow,
                  bg: 'var(--portfolio-accent-strong)',
                }}
                w={{ base: '100%', sm: 'auto' }}>
                {content.ctaButton}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
