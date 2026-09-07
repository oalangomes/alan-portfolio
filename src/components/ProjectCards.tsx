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

      <Stack spacing={{ base: 5, md: 6 }} height={'100%'} position={'relative'} minW={0}>
        <HStack justify={'space-between'} align={'flex-start'} gap={4} minW={0}>
          <Stack spacing={2} flex={1} minW={0}>
            <Text
              color={'orange.400'}
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
            colorScheme={'orange'}
            rounded={'full'}
            rightIcon={<FiArrowUpRight />}
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
