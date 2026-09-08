import {
  Box,
  Grid,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectVisual } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectArchitectureDiagramProps {
  visual: ProjectVisual;
  compact?: boolean;
}

const toneRgb: Record<ProjectVisual['tone'], string> = {
  orange: '251,146,60',
  purple: '168,85,247',
  green: '74,222,128',
  blue: '96,165,250',
  cyan: '34,211,238',
  gray: '148,163,184',
};

function Arrow() {
  const muted = useColorModeValue('gray.400', 'gray.500');
  return (
    <Text color={muted} fontSize={'sm'} fontWeight={800} textAlign={'center'}>
      →
    </Text>
  );
}

function DownArrow() {
  const muted = useColorModeValue('gray.400', 'gray.500');
  return (
    <Text color={muted} fontSize={'sm'} fontWeight={800} textAlign={'center'}>
      ↓
    </Text>
  );
}

function Node({
  children,
  emphasis,
  compact,
  tone,
}: {
  children: string;
  emphasis?: boolean;
  compact?: boolean;
  tone: ProjectVisual['tone'];
}) {
  const rgb = toneRgb[tone];
  const bg = useColorModeValue(
    emphasis ? `${tone}.50` : 'whiteAlpha.800',
    emphasis ? `rgba(${rgb},0.12)` : 'blackAlpha.200',
  );
  const border = useColorModeValue(
    emphasis ? `${tone}.200` : 'blackAlpha.100',
    emphasis ? `${tone}.300` : 'whiteAlpha.200',
  );
  const shadow = useColorModeValue(
    emphasis ? `0 8px 22px rgba(${rgb},0.12), 0 0 20px rgba(${rgb},0.10)` : 'none',
    emphasis ? `0 10px 28px rgba(0,0,0,0.20), 0 0 28px rgba(${rgb},0.24)` : 'none',
  );
  const hoverShadow = useColorModeValue(
    `0 10px 26px rgba(${rgb},0.13), 0 0 22px rgba(${rgb},0.10)`,
    `0 12px 32px rgba(0,0,0,0.24), 0 0 30px rgba(${rgb},0.27)`,
  );

  return (
    <Box
      minW={0}
      px={compact ? 2.5 : 3}
      py={compact ? 2 : 2.5}
      borderWidth={'1px'}
      borderColor={border}
      borderRadius={'lg'}
      bg={bg}
      boxShadow={shadow}
      textAlign={'center'}
      transition={'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'}
      _hover={{
        transform: 'translateY(-1px)',
        boxShadow: hoverShadow,
        borderColor: `${tone}.300`,
      }}>
      <Text
        fontSize={compact ? '10px' : 'xs'}
        fontWeight={800}
        lineHeight={1.25}
        overflowWrap={'anywhere'}>
        {children}
      </Text>
    </Box>
  );
}

export default function ProjectArchitectureDiagram({
  visual,
  compact = false,
}: ProjectArchitectureDiagramProps) {
  const rgb = toneRgb[visual.tone];
  const bg = useColorModeValue(`${visual.tone}.50`, 'whiteAlpha.50');
  const border = useColorModeValue(`${visual.tone}.100`, 'whiteAlpha.100');
  const accent = useColorModeValue(
    `${visual.tone}.600`,
    `${visual.tone}.300`,
  );
  const muted = useColorModeValue('gray.500', 'gray.400');
  const { language } = useLanguage();
  const viewLabel = language === 'pt-BR' ? 'visão do sistema' : 'system view';
  const ambientOpacity = useColorModeValue(0.28, 0.42);
  const diagramShadow = useColorModeValue(
    compact
      ? `0 8px 24px rgba(${rgb},0.05)`
      : `0 16px 42px rgba(${rgb},0.07), 0 0 0 1px rgba(${rgb},0.03)`,
    compact
      ? `0 10px 28px rgba(0,0,0,0.14), 0 0 24px rgba(${rgb},0.08)`
      : `0 20px 54px rgba(0,0,0,0.24), 0 0 42px rgba(${rgb},0.13)`,
  );

  const [a, b, c, d, e] = visual.nodes;

  const node = (label: string, emphasis = false) => (
    <Node compact={compact} emphasis={emphasis} tone={visual.tone}>
      {label}
    </Node>
  );

  const renderDiagram = () => {
    switch (visual.kind) {
      case 'control-plane':
        return (
          <Stack spacing={2.5}>
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              {node(a)}
              <Arrow />
              {node(b, true)}
              <Arrow />
              {node(c)}
            </Grid>
            <Box mx={'auto'} w={'1px'} h={3} bg={border} />
            <Grid templateColumns={'1fr 1fr'} gap={2}>
              {node(d)}
              {node(e)}
            </Grid>
          </Stack>
        );

      case 'governed-context':
        return (
          <Grid
            templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
            gap={2}
            alignItems={'center'}>
            {node(a)}
            <Arrow />
            {node(b)}
            <Arrow />
            {node(c, true)}
            <Arrow />
            {node(d)}
          </Grid>
        );

      case 'product-ecosystem':
        return (
          <Grid
            templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
            gap={2}
            alignItems={'center'}>
            <Stack spacing={2}>
              {node(a)}
              {node(b)}
            </Stack>
            <Arrow />
            {node(c, true)}
            <Arrow />
            <Stack spacing={2}>
              {node(d)}
              {node(e)}
            </Stack>
          </Grid>
        );

      case 'offline-loop':
        return (
          <Stack spacing={2.5}>
            <Grid templateColumns={'1fr 1fr'} gap={2}>
              {node(a)}
              {node(b)}
            </Grid>
            <DownArrow />
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              {node(c, true)}
              <Arrow />
              {node(d)}
            </Grid>
            <HStack justify={'center'} spacing={2}>
              <Text color={muted} fontSize={'xs'} fontWeight={800}>
                ↺
              </Text>
              {node(e)}
            </HStack>
          </Stack>
        );

      case 'data-pipeline':
        return (
          <Stack spacing={2.5}>
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              {node(a)}
              <Arrow />
              {node(b, true)}
              <Arrow />
              {node(c)}
            </Grid>
            <HStack justify={'center'} spacing={2}>
              {node(d)}
              <Text color={muted} fontSize={'xs'} fontWeight={800}>
                +
              </Text>
              {node(e)}
              <Text color={muted} fontSize={'xs'} fontWeight={800}>
                ↑
              </Text>
            </HStack>
          </Stack>
        );

      case 'predictive-system':
        return (
          <Stack spacing={2.5}>
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              {node(a)}
              <Arrow />
              {node(b)}
              <Arrow />
              {node(c, true)}
            </Grid>
            <DownArrow />
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              {node(d, true)}
              <Arrow />
              {node(e)}
            </Grid>
          </Stack>
        );
    }
  };

  return (
    <Box
      role={'img'}
      aria-label={`${visual.label}: ${visual.nodes.join(', ')}`}
      position={'relative'}
      w={'100%'}
      minW={0}
      p={compact ? 4 : { base: 5, md: 6 }}
      borderWidth={'1px'}
      borderColor={border}
      borderRadius={compact ? '2xl' : '3xl'}
      bg={bg}
      boxShadow={diagramShadow}
      overflow={'hidden'}>
      <Box
        position={'absolute'}
        right={'-10%'}
        top={'-35%'}
        w={compact ? '150px' : '220px'}
        h={compact ? '150px' : '220px'}
        borderRadius={'full'}
        bg={`rgba(${rgb},0.12)`}
        filter={'blur(46px)'}
        opacity={ambientOpacity}
        pointerEvents={'none'}
      />

      <HStack position={'relative'} zIndex={1} justify={'space-between'} gap={3} mb={compact ? 4 : 5}>
        <Text
          minW={0}
          color={accent}
          fontSize={compact ? '10px' : 'xs'}
          fontWeight={850}
          textTransform={'uppercase'}
          letterSpacing={'0.12em'}
          overflowWrap={'anywhere'}>
          {visual.label}
        </Text>
        <Box
          flexShrink={0}
          px={2.5}
          py={1}
          borderWidth={'1px'}
          borderColor={border}
          borderRadius={'full'}
          bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.200')}>
          <Text
            color={muted}
            fontSize={'9px'}
            fontWeight={800}
            textTransform={'uppercase'}
            letterSpacing={'0.10em'}>
            {viewLabel}
          </Text>
        </Box>
      </HStack>

      <Box position={'relative'} zIndex={1}>
        {renderDiagram()}
      </Box>
    </Box>
  );
}
