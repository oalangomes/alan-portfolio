import {
  Box,
  Grid,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectVisual } from '../data/projects';

interface ProjectArchitectureDiagramProps {
  visual: ProjectVisual;
  compact?: boolean;
}

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
}: {
  children: string;
  emphasis?: boolean;
  compact?: boolean;
}) {
  const bg = useColorModeValue(
    emphasis ? 'orange.50' : 'whiteAlpha.800',
    emphasis ? 'rgba(154,52,18,0.24)' : 'blackAlpha.200',
  );
  const border = useColorModeValue(
    emphasis ? 'orange.200' : 'blackAlpha.100',
    emphasis ? 'orange.400' : 'whiteAlpha.200',
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
      textAlign={'center'}>
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
  const bg = useColorModeValue(`${visual.tone}.50`, 'whiteAlpha.50');
  const border = useColorModeValue(`${visual.tone}.100`, 'whiteAlpha.100');
  const accent = useColorModeValue(
    `${visual.tone}.600`,
    `${visual.tone}.300`,
  );
  const muted = useColorModeValue('gray.500', 'gray.400');

  const [a, b, c, d, e] = visual.nodes;

  const renderDiagram = () => {
    switch (visual.kind) {
      case 'control-plane':
        return (
          <Stack spacing={2.5}>
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              <Node compact={compact}>{a}</Node>
              <Arrow />
              <Node compact={compact} emphasis>{b}</Node>
              <Arrow />
              <Node compact={compact}>{c}</Node>
            </Grid>
            <Box mx={'auto'} w={'1px'} h={3} bg={border} />
            <Grid templateColumns={'1fr 1fr'} gap={2}>
              <Node compact={compact}>{d}</Node>
              <Node compact={compact}>{e}</Node>
            </Grid>
          </Stack>
        );

      case 'governed-context':
        return (
          <Grid
            templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'}
            gap={2}
            alignItems={'center'}>
            <Node compact={compact}>{a}</Node>
            <Arrow />
            <Node compact={compact}>{b}</Node>
            <Arrow />
            <Node compact={compact} emphasis>{c}</Node>
            <Arrow />
            <Node compact={compact}>{d}</Node>
          </Grid>
        );

      case 'product-ecosystem':
        return (
          <Grid templateColumns={'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)'} gap={2} alignItems={'center'}>
            <Stack spacing={2}>
              <Node compact={compact}>{a}</Node>
              <Node compact={compact}>{b}</Node>
            </Stack>
            <Arrow />
            <Node compact={compact} emphasis>{c}</Node>
            <Arrow />
            <Stack spacing={2}>
              <Node compact={compact}>{d}</Node>
              <Node compact={compact}>{e}</Node>
            </Stack>
          </Grid>
        );

      case 'offline-loop':
        return (
          <Stack spacing={2.5}>
            <Grid templateColumns={'1fr 1fr'} gap={2}>
              <Node compact={compact}>{a}</Node>
              <Node compact={compact}>{b}</Node>
            </Grid>
            <DownArrow />
            <Grid
              templateColumns={'minmax(0,1fr) auto minmax(0,1fr)'}
              gap={2}
              alignItems={'center'}>
              <Node compact={compact} emphasis>{c}</Node>
              <Arrow />
              <Node compact={compact}>{d}</Node>
            </Grid>
            <HStack justify={'center'} spacing={2}>
              <Text color={muted} fontSize={'xs'} fontWeight={800}>↺</Text>
              <Node compact={compact}>{e}</Node>
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
              <Node compact={compact}>{a}</Node>
              <Arrow />
              <Node compact={compact} emphasis>{b}</Node>
              <Arrow />
              <Node compact={compact}>{c}</Node>
            </Grid>
            <HStack justify={'center'} spacing={2}>
              <Node compact={compact}>{d}</Node>
              <Text color={muted} fontSize={'xs'} fontWeight={800}>+</Text>
              <Node compact={compact}>{e}</Node>
              <Text color={muted} fontSize={'xs'} fontWeight={800}>↑</Text>
            </HStack>
          </Stack>
        );
    }
  };

  return (
    <Box
      role={'img'}
      aria-label={`${visual.label}: ${visual.nodes.join(', ')}`}
      w={'100%'}
      minW={0}
      p={compact ? 4 : { base: 5, md: 6 }}
      borderWidth={'1px'}
      borderColor={border}
      borderRadius={compact ? '2xl' : '3xl'}
      bg={bg}
      overflow={'hidden'}>
      <HStack justify={'space-between'} gap={3} mb={compact ? 4 : 5}>
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
        <HStack spacing={1.5} flexShrink={0}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              w={1.5}
              h={1.5}
              borderRadius={'full'}
              bg={dot === 0 ? accent : muted}
              opacity={dot === 0 ? 1 : 0.4}
            />
          ))}
        </HStack>
      </HStack>

      {renderDiagram()}
    </Box>
  );
}
