import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowLeft, FiCheck, FiGithub } from 'react-icons/fi';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProjectDetails() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';
  const { id } = useParams<{ id: string }>();
  const project = getProjects(language).find((item) => item.id === Number(id));

  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const softBg = useColorModeValue('orange.50', 'whiteAlpha.100');

  if (!project) {
    return (
      <Box bg={pageBg} minH={'calc(100vh - 72px)'}>
        <Container maxW={'5xl'} py={24}>
          <Stack spacing={5} align={'flex-start'}>
            <Text
              color={'orange.400'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.16em'}>
              404
            </Text>
            <Heading fontSize={{ base: '4xl', md: '5xl' }}>
              {isPortuguese ? 'Projeto não encontrado' : 'Project not found'}
            </Heading>
            <Button
              as={RouterLink}
              to={'/Projects'}
              leftIcon={<FiArrowLeft />}
              rounded={'full'}>
              {isPortuguese ? 'Voltar aos projetos' : 'Back to selected work'}
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={pageBg}>
      <Container maxW={'7xl'} py={{ base: 16, md: 22 }} px={{ base: 5, md: 6 }}>
        <Stack spacing={{ base: 10, md: 14 }}>
          <Stack spacing={5} maxW={'5xl'}>
            <Button
              as={RouterLink}
              to={'/Projects'}
              alignSelf={'flex-start'}
              variant={'ghost'}
              leftIcon={<FiArrowLeft />}
              rounded={'full'}
              px={3}>
              {isPortuguese ? 'Projetos' : 'Selected work'}
            </Button>

            <Text
              color={'orange.400'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.16em'}>
              {project.eyebrow}
            </Text>

            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1}
              letterSpacing={'-0.04em'}>
              {project.name}
            </Heading>

            <HStack flexWrap={'wrap'} gap={2}>
              <Badge
                px={2.5}
                py={1}
                borderRadius={'full'}
                colorScheme={project.visibility === 'Public' ? 'green' : 'purple'}>
                {project.visibility === 'Public'
                  ? isPortuguese
                    ? 'Público'
                    : 'Public'
                  : isPortuguese
                    ? 'Privado'
                    : 'Private'}
              </Badge>
              <Badge px={2.5} py={1} borderRadius={'full'} variant={'subtle'}>
                {project.status}
              </Badge>
              {project.hashtags.map((tag) => (
                <Box
                  key={tag}
                  px={3}
                  py={1.5}
                  borderRadius={'full'}
                  bg={softBg}
                  fontSize={'xs'}
                  fontWeight={650}>
                  {tag}
                </Box>
              ))}
            </HStack>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={subtle}
              lineHeight={1.8}
              maxW={'4xl'}>
              {project.summary}
            </Text>
          </Stack>

          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={6}
            alignItems={'start'}>
            <GridItem colSpan={{ base: 1, lg: 7 }}>
              <Box
                p={{ base: 6, md: 8 }}
                borderWidth={'1px'}
                borderColor={borderColor}
                borderRadius={'3xl'}
                bg={cardBg}
                boxShadow={'sm'}>
                <Text
                  fontSize={'xs'}
                  fontWeight={800}
                  textTransform={'uppercase'}
                  letterSpacing={'0.14em'}
                  color={muted}
                  mb={4}>
                  {isPortuguese ? 'O projeto' : 'The project'}
                </Text>
                <Text color={subtle} fontSize={'lg'} lineHeight={1.9}>
                  {project.description}
                </Text>
              </Box>
            </GridItem>

            <GridItem colSpan={{ base: 1, lg: 5 }}>
              <Box
                p={{ base: 6, md: 8 }}
                borderWidth={'1px'}
                borderColor={borderColor}
                borderRadius={'3xl'}
                bg={cardBg}
                boxShadow={'sm'}>
                <Text
                  fontSize={'xs'}
                  fontWeight={800}
                  textTransform={'uppercase'}
                  letterSpacing={'0.14em'}
                  color={muted}
                  mb={5}>
                  {isPortuguese ? 'O que ele demonstra' : 'What it demonstrates'}
                </Text>

                <Stack spacing={4}>
                  {project.highlights.map((highlight) => (
                    <HStack key={highlight} align={'flex-start'} spacing={3}>
                      <Box
                        mt={1}
                        display={'grid'}
                        placeItems={'center'}
                        w={6}
                        h={6}
                        flex={'0 0 auto'}
                        borderRadius={'full'}
                        bg={softBg}
                        color={'orange.400'}>
                        <FiCheck size={14} />
                      </Box>
                      <Text color={subtle} lineHeight={1.7}>
                        {highlight}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </GridItem>
          </Grid>

          <HStack flexWrap={'wrap'} gap={3}>
            <Button
              as={RouterLink}
              to={'/Projects'}
              rounded={'full'}
              leftIcon={<FiArrowLeft />}>
              {isPortuguese ? 'Voltar aos projetos' : 'Back to selected work'}
            </Button>

            {project.githubUrl && (
              <Button
                as={'a'}
                href={project.githubUrl}
                target={'_blank'}
                rel={'noreferrer'}
                colorScheme={'orange'}
                rounded={'full'}
                leftIcon={<FiGithub />}>
                {isPortuguese ? 'Ver código no GitHub' : 'View source on GitHub'}
              </Button>
            )}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
