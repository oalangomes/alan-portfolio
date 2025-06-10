import {
  Container,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import ProjectCards from "../components/ProjectCards"
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Container maxW={'2xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        py={{ base: 80, md: 20 }}
        p={4}>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((cardInfo, index) => (
            <ProjectCards key={cardInfo.id} {...cardInfo}></ProjectCards>
          ))} 


        </SimpleGrid>
      </Stack>
    </Container>
  );
}
