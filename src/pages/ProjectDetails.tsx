import {
  Container,
  Stack,
  Heading,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";



export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Container maxW={'2xl'}>
        <Stack textAlign={'center'} align={'center'} py={{ base: 20, md: 14 }}>
          <Heading>Project not found</Heading>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW={'2xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={4}
        py={{ base: 20, md: 14 }}>
        <Heading>{project.name}</Heading>
        <Image src={project.logo} boxSize="200px" objectFit="cover" alt={project.name} />
        <Text>{project.description}</Text>
        <Link href={project.githubUrl} color={'blue.400'}>View on GitHub</Link>
      </Stack>
    </Container>
  );
}
