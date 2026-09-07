import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCards from '../components/ProjectCards';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Container maxW={'6xl'} py={{ base: 14, md: 20 }}>
      <Stack spacing={10}>
        <Stack spacing={3} maxW={'3xl'}>
          <Text
            color={'orange.400'}
            fontWeight={700}
            textTransform={'uppercase'}
            letterSpacing={'wide'}>
            Selected work
          </Text>
          <Heading fontSize={{ base: '3xl', md: '5xl' }}>
            Projects that represent how I think and build.
          </Heading>
          <Text
            fontSize={'lg'}
            color={useColorModeValue('gray.600', 'gray.300')}>
            Not every meaningful project can be public. These case studies focus
            on the engineering problem, the decisions and the capabilities
            developed — with source links whenever the repository is public.
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
