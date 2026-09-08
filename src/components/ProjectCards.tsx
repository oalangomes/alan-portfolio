import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { Project } from '../data/projects';
import ProjectCover from './ProjectCover';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectCardProps = Project & {
  index?: number;
};

const toneRgb: Record<Project['visual']['tone'], string> = {
  orange: '251,146,60',
  purple: '168,85,247',
  green: '74,222,128',
  blue: '96,165,250',
  cyan: '34,211,238',
  gray: '148,163,184',
};

export default function ProjectCards(project: ProjectCardProps) {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';

  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const tagBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const accentSurface = useColorModeValue(
    'var(--portfolio-accent-soft)',
    'rgba(var(--portfolio-accent-rgb),0.06)',
  );
  const rgb = toneRgb[project.visual.tone];
  const cardShadow = useColorModeValue(
    `0 12px 30px rgba(15,23,42,0.065), 0 0 0 1px rgba(${rgb},0.025)`,
    `0 16px 40px rgba(0,0,0,0.22), 0 0 24px rgba(${rgb},0.05)`,
  );
  const cardHoverShadow = useColorModeValue(
    `0 18px 42px rgba(15,23,42,0.11), 0 0 0 1px rgba(${rgb},0.08), 0 0 30px rgba(${rgb},0.07)`,
    `0 22px 52px rgba(0,0,0,0.32), 0 0 0 1px rgba(${rgb},0.10), 0 0 38px rgba(${rgb},0.11)`,
  );
  const actionGlow = useColorModeValue(
    '0 7px 20px rgba(var(--portfolio-accent-rgb),0.14)',
    '0 8px 24px rgba(0,0,0,0.20), 0 0 22px rgba(var(--portfolio-accent-rgb),0.16)',
  );
  const actionHoverGlow = useColorModeValue(
    '0 10px 26px rgba(var(--portfolio-accent-rgb),0.20), 0 0 20px rgba(var(--portfolio-accent-rgb),0.10)',
    '0 12px 30px rgba(0,0,0,0.26), 0 0 30px rgba(var(--portfolio-accent-rgb),0.24)',
  );

  return (
    <Box
      position={'relative'}
      w={'100%'}
      maxW={'100%'}
      minW={0}
      overflow={'hidden'}
      borderWidth={'1px'}
      borderColor={borderColor}
      borderRadius={'3xl'}
      bg={cardBg}
      p={{ base: 5, md: 8 }}
      minH={{ lg: '430px' }}
      boxShadow={cardShadow}
      transition={'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: cardHoverShadow,
        borderColor: `${project.visual.tone}.300`,
      }}
      _focusWithin={{
        boxShadow: cardHoverShadow,
        borderColor: `${project.visual.tone}.300`,
      }}>
      <Box
        position={'absolute'}
        top={0}
        left={{ base: 5, md: 8 }}
        right={{ base: 5, md: 8 }}
        h={'2px'}
        bg={`linear-gradient(90deg, transparent, rgba(${rgb},0.78), transparent)`}
        boxShadow={`0 0 16px rgba(${rgb},0.20)`}
        opacity={0.7}
        pointerEvents={'none'}
      />
      <Box
        position={'absolute'}
        top={0}
        right={0}
        w={'110px'}
        h={'110px'}
        borderBottomLeftRadius={'full'}
        bg={accentSurface}
        opacity={0.28}
        pointerEvents={'none'}
      />

      <Stack spacing={{ base: 6, md: 6 }} height={'100%'} position={'relative'} minW={0}>
        <ProjectCover visual={project.visual} />

        <HStack justify={'space-between'} align={'flex-start'} gap={4} minW={0}>
          <Stack spacing={2} flex={1} minW={0}>
            <Text
              color={'var(--portfolio-accent)'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.12em'}
              overflowWrap={'anywhere'}>
              {project.eyebrow}
            </Text>
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              letterSpacing={'-0.03em'}
              overflowWrap={'anywhere'}>
              {project.name}
            </Heading>
          </Stack>

          <Text
            fontSize={'sm'}
            fontWeight={800}
            color={muted}
            flexShrink={0}>
            {String((project.index ?? 0) + 1).padStart(2, '0')}
          </Text>
        </HStack>

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
        </HStack>

        <Text color={subtle} fontSize={'md'} lineHeight={1.75} overflowWrap={'anywhere'}>
          {project.summary}
        </Text>

        <HStack flexWrap={'wrap'} gap={2}>
          {project.hashtags.map((tag) => (
            <Box
              key={tag}
              px={3}
              py={1.5}
              borderRadius={'full'}
              bg={tagBg}
              maxW={'100%'}
              fontSize={'xs'}
              fontWeight={650}
              overflowWrap={'anywhere'}>
              {tag}
            </Box>
          ))}
        </HStack>

        <Box flex={1} />

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} w={'100%'}>
          <Button
            as={RouterLink}
            to={`/ProjectDetails/${project.id}`}
            bg={'var(--portfolio-accent)'}
            color={'var(--portfolio-accent-contrast)'}
            rounded={'full'}
            rightIcon={<FiArrowUpRight />}
            boxShadow={actionGlow}
            transition={'transform 180ms ease, box-shadow 180ms ease'}
            _hover={{
              transform: 'translateY(-1px)',
              boxShadow: actionHoverGlow,
              bg: 'var(--portfolio-accent-strong)',
            }}
            w={{ base: '100%', sm: 'auto' }}>
            {isPortuguese ? 'Ver estudo de caso' : 'Read case study'}
          </Button>

          {project.githubUrl && (
            <Button
              as={'a'}
              href={project.githubUrl}
              target={'_blank'}
              rel={'noreferrer'}
              variant={'ghost'}
              rounded={'full'}
              leftIcon={<FiGithub />}
              w={{ base: '100%', sm: 'auto' }}>
              GitHub
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
