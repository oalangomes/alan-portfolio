import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCards from '../components/ProjectCards';
import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    eyebrow: 'Selected work',
    heading: 'Projects that represent how I think and build.',
    text: 'Not every meaningful project can be public. These case studies focus on the engineering problem, the decisions and the capabilities developed — with source links whenever the repository is public.',
  },
  'pt-BR': {
    eyebrow: 'Projetos selecionados',
    heading: 'Projetos que representam como eu penso e construo.',
    text: 'Nem todo projeto relevante pode ser público. Estes estudos de caso focam no problema de engenharia, nas decisões e nas capacidades desenvolvidas — com links para o código sempre que o repositório é público.',
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const content = copy[language];
  const projects = getProjects(language);
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={pageBg} minH={'calc(100vh - 72px)'}>
      <Container maxW={'7xl'} py={{ base: 16, md: 22 }} px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 10, md: 14 }}>
          <Stack spacing={4} maxW={'4xl'} minW={0}>
            <Text
              color={'orange.400'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.16em'}>
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
        </Stack>
      </Container>
    </Box>
  );
}
