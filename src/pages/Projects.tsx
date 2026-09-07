import {
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

  return (
    <Container maxW={'6xl'} py={{ base: 14, md: 20 }}>
      <Stack spacing={10}>
        <Stack spacing={3} maxW={'3xl'}>
          <Text
            color={'orange.400'}
            fontWeight={700}
            textTransform={'uppercase'}
            letterSpacing={'wide'}>
            {content.eyebrow}
          </Text>
          <Heading fontSize={{ base: '3xl', md: '5xl' }}>
            {content.heading}
          </Heading>
          <Text
            fontSize={'lg'}
            color={useColorModeValue('gray.600', 'gray.300')}>
            {content.text}
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project) => (
            <ProjectCards key={project.id} {...project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
