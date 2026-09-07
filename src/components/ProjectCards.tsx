import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Project } from '../data/projects';

export default function ProjectCards(project: Project) {
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box
      borderWidth={'1px'}
      borderRadius={'2xl'}
      bg={useColorModeValue('white', 'gray.900')}
      p={{ base: 6, md: 7 }}
      boxShadow={'sm'}
      height={'100%'}>
      <Stack spacing={5} height={'100%'}>
        <Stack spacing={2}>
          <Text
            color={'orange.400'}
            fontWeight={700}
            fontSize={'sm'}
            textTransform={'uppercase'}
            letterSpacing={'wide'}>
            {project.eyebrow}
          </Text>
          <Heading fontSize={'2xl'}>{project.name}</Heading>
          <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
            <Badge colorScheme={project.visibility === 'Public' ? 'green' : 'purple'}>
              {project.visibility}
            </Badge>
            <Badge>{project.status}</Badge>
          </Stack>
        </Stack>

        <Text color={subtle}>{project.summary}</Text>

        <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
          {project.hashtags.map((tag) => (
            <Badge key={tag} px={2} py={1} variant={'subtle'}>
              {tag}
            </Badge>
          ))}
        </Stack>

        <Box flex={1} />

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
          <Button
            as={RouterLink}
            to={`/ProjectDetails/${project.id}`}
            colorScheme={'orange'}
            rounded={'full'}>
            Read case study
          </Button>
          {project.githubUrl && (
            <Button
              as={'a'}
              href={project.githubUrl}
              target={'_blank'}
              rel={'noreferrer'}
              variant={'outline'}
              rounded={'full'}>
              GitHub
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
