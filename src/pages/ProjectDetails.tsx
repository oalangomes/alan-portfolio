import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === Number(id));
  const subtle = useColorModeValue('gray.600', 'gray.300');

  if (!project) {
    return (
      <Container maxW={'4xl'} py={20}>
        <Stack spacing={4}>
          <Heading>Project not found</Heading>
          <Button as={'a'} href={'/Projects'} alignSelf={'flex-start'}>
            Back to selected work
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW={'4xl'} py={{ base: 14, md: 20 }}>
      <Stack spacing={8}>
        <Stack spacing={4}>
          <Text
            color={'orange.400'}
            fontWeight={700}
            textTransform={'uppercase'}
            letterSpacing={'wide'}>
            {project.eyebrow}
          </Text>
          <Heading fontSize={{ base: '3xl', md: '5xl' }}>{project.name}</Heading>
          <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
            <Badge colorScheme={project.visibility === 'Public' ? 'green' : 'purple'}>
              {project.visibility}
            </Badge>
            <Badge>{project.status}</Badge>
            {project.hashtags.map((tag) => (
              <Badge key={tag} variant={'subtle'}>
                {tag}
              </Badge>
            ))}
          </Stack>
          <Text fontSize={'xl'} color={subtle}>
            {project.summary}
          </Text>
        </Stack>

        <Box
          borderWidth={'1px'}
          borderRadius={'2xl'}
          p={{ base: 6, md: 8 }}
          bg={useColorModeValue('white', 'gray.900')}>
          <Stack spacing={6}>
            <Box>
              <Heading fontSize={'2xl'} mb={3}>
                The project
              </Heading>
              <Text color={subtle} fontSize={'lg'}>
                {project.description}
              </Text>
            </Box>

            <Box>
              <Heading fontSize={'2xl'} mb={3}>
                What it demonstrates
              </Heading>
              <List spacing={3}>
                {project.highlights.map((highlight) => (
                  <ListItem key={highlight} color={subtle}>
                    • {highlight}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </Box>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
          <Button as={'a'} href={'/Projects'} rounded={'full'}>
            Back to selected work
          </Button>
          {project.githubUrl && (
            <Button
              as={'a'}
              href={project.githubUrl}
              target={'_blank'}
              rel={'noreferrer'}
              colorScheme={'orange'}
              rounded={'full'}>
              View source on GitHub
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
