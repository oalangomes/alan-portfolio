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
import { keyframes } from '@emotion/react';
import { FiArrowLeft, FiCheck, FiGithub } from 'react-icons/fi';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ProjectArchitectureDiagram from '../components/ProjectArchitectureDiagram';
import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const pageEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const toneRgb = {
  orange: '251,146,60',
  purple: '168,85,247',
  green: '74,222,128',
  blue: '96,165,250',
  cyan: '34,211,238',
  gray: '148,163,184',
} as const;

export default function ProjectDetails() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';
  const { id } = useParams<{ id: string }>();
  const project = getProjects(language).find((item) => item.id === Number(id));
  const rgb = project ? toneRgb[project.visual.tone] : toneRgb.orange;

  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const softBg = useColorModeValue(
    'var(--portfolio-accent-soft)',
    'rgba(var(--portfolio-accent-rgb),0.08)',
  );
  const ambientGlow = useColorModeValue(
    `radial-gradient(circle at 82% 8%, rgba(${rgb},0.06), transparent 28%), radial-gradient(circle at 12% 48%, rgba(var(--portfolio-accent-rgb),0.04), transparent 30%)`,
    `radial-gradient(circle at 82% 8%, rgba(${rgb},0.10), transparent 30%), radial-gradient(circle at 12% 48%, rgba(var(--portfolio-accent-rgb),0.06), transparent 32%)`,
  );
  const detailShadow = useColorModeValue(
    `0 14px 34px rgba(15,23,42,0.06)`,
    `0 16px 40px rgba(0,0,0,0.22), 0 0 22px rgba(${rgb},0.035)`,
  );
  const buttonGlow = useColorModeValue(
    '0 8px 22px rgba(var(--portfolio-accent-rgb),0.16)',
    '0 10px 26px rgba(0,0,0,0.22), 0 0 24px rgba(var(--portfolio-accent-rgb),0.18)',
  );
  const buttonHoverGlow = useColorModeValue(
    '0 12px 28px rgba(var(--portfolio-accent-rgb),0.22), 0 0 22px rgba(var(--portfolio-accent-rgb),0.10)',
    '0 14px 34px rgba(0,0,0,0.28), 0 0 34px rgba(var(--portfolio-accent-rgb),0.26)',
  );

  if (!project) {
    return (
      <Box bg={pageBg} minH={'calc(100vh - 72px)'}>
        <Container maxW={'5xl'} py={24}>
          <Stack spacing={5} align={'flex-start'}>
            <Text
              color={'var(--portfolio-accent)'}
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
    <Box bg={pageBg} position={'relative'} overflow={'hidden'}>
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
        px={{ base: 4, md: 6 }}
        animation={`${pageEnter} 180ms ease-out both`}>
        <Stack spacing={{ base: 12, md: 14 }}>
          <Stack spacing={5} maxW={'5xl'} minW={0}>
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
              color={'var(--portfolio-accent)'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.16em'}>
              {project.eyebrow}
            </Text>

            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1}
              letterSpacing={'-0.04em'}
              overflowWrap={'anywhere'}>
              {project.name}
            </Heading>

            <HStack flexWrap={'wrap'} gap={2} minW={0}>
              <Badge
                px={2.5}
                py={1}
                maxW={'100%'}
                borderRadius={'full'}
                whiteSpace={'normal'}
                lineHeight={1.3}
                colorScheme={project.visibility === 'Public' ? 'green' : 'purple'}>
                {project.visibility === 'Public'
                  ? isPortuguese
                    ? 'Público'
                    : 'Public'
                  : isPortuguese
                    ? 'Privado'
                    : 'Private'}
              </Badge>
              <Badge
                maxW={'100%'}
                px={2.5}
                py={1}
                borderRadius={'full'}
                variant={'subtle'}
                whiteSpace={'normal'}
                lineHeight={1.3}>
                {project.status}
              </Badge>
              {project.hashtags.map((tag) => (
                <Box
                  key={tag}
                  px={3}
                  py={1.5}
                  borderRadius={'full'}
                  bg={softBg}
                  maxW={'100%'}
                  fontSize={'xs'}
                  fontWeight={650}
                  overflowWrap={'anywhere'}>
                  {tag}
                </Box>
              ))}
            </HStack>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={subtle}
              lineHeight={1.8}
              maxW={'4xl'}
              overflowWrap={'anywhere'}>
              {project.summary}
            </Text>
          </Stack>

          <Box mt={{ base: 1, md: 0 }}>
            <ProjectArchitectureDiagram visual={project.visual} />
          </Box>

          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={6}
            alignItems={'start'}>
            <GridItem minW={0} colSpan={{ base: 1, lg: 7 }}>
              <Box
                p={{ base: 6, md: 8 }}
                borderWidth={'1px'}
                borderColor={borderColor}
                borderRadius={'3xl'}
                bg={cardBg}
                boxShadow={detailShadow}
                position={'relative'}
                overflow={'hidden'}>
                <Box
                  position={'absolute'}
                  top={0}
                  left={6}
                  right={6}
                  h={'2px'}
                  bg={`linear-gradient(90deg, transparent, rgba(${rgb},0.52), transparent)`}
                  boxShadow={`0 0 12px rgba(${rgb},0.14)`}
                  opacity={0.62}
                  pointerEvents={'none'}
                />
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

            <GridItem minW={0} colSpan={{ base: 1, lg: 5 }}>
              <Box
                p={{ base: 6, md: 8 }}
                borderWidth={'1px'}
                borderColor={borderColor}
                borderRadius={'3xl'}
                bg={cardBg}
                boxShadow={detailShadow}>
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
                        color={'var(--portfolio-accent)'}>
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
                bg={'var(--portfolio-accent)'}
                color={'var(--portfolio-accent-contrast)'}
                rounded={'full'}
                leftIcon={<FiGithub />}
                boxShadow={buttonGlow}
                transition={'transform 180ms ease, box-shadow 180ms ease'}
                _hover={{
                  transform: 'translateY(-1px)',
                  boxShadow: buttonHoverGlow,
                  bg: 'var(--portfolio-accent-strong)',
                }}>
                {isPortuguese ? 'Ver código no GitHub' : 'View source on GitHub'}
              </Button>
            )}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
