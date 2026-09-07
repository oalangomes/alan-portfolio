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
import { useLanguage } from '../i18n/LanguageContext';

type ProjectCardProps = Project & {
  index?: number;
};

export default function ProjectCards(project: ProjectCardProps) {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';

  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const tagBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');

  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      borderWidth={'1px'}
      borderColor={borderColor}
      borderRadius={'3xl'}
      bg={cardBg}
      p={{ base: 6, md: 8 }}
      minH={{ lg: '430px' }}
      boxShadow={'sm'}
      transition={'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
        borderColor: 'orange.300',
      }}>
      <Box
        position={'absolute'}
        top={0}
        right={0}
        w={'140px'}
        h={'140px'}
        borderBottomLeftRadius={'full'}
        bg={useColorModeValue('orange.50', 'whiteAlpha.50')}
        opacity={0.55}
        pointerEvents={'none'}
      />

      <Stack spacing={6} height={'100%'} position={'relative'}>
        <HStack justify={'space-between'} align={'flex-start'}>
          <Stack spacing={2}>
            <Text
              color={'orange.400'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.14em'}>
              {project.eyebrow}
            </Text>
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              letterSpacing={'-0.03em'}>
              {project.name}
            </Heading>
          </Stack>

          <Text
            fontSize={'sm'}
            fontWeight={800}
            color={muted}
            fontVariantNumeric={'tabular-nums'}>
            {String((project.index ?? 0) + 1).padStart(2, '0')}
          </Text>
        </HStack>

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
        </HStack>

        <Text color={subtle} fontSize={'md'} lineHeight={1.8}>
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
              fontSize={'xs'}
              fontWeight={650}>
              {tag}
            </Box>
          ))}
        </HStack>

        <Box flex={1} />

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
          <Button
            as={RouterLink}
            to={`/ProjectDetails/${project.id}`}
            colorScheme={'orange'}
            rounded={'full'}
            rightIcon={<FiArrowUpRight />}>
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
              leftIcon={<FiGithub />}>
              GitHub
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
