import {
  Box,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useLanguage } from '../i18n/LanguageContext';

const pulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.78;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
`;

const signal = keyframes`
  0% {
    stroke-dashoffset: 42;
    opacity: 0.2;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
`;

const copy = {
  en: {
    label: 'Conceptual architecture map',
    aria:
      'Conceptual architecture map connecting product, context, knowledge, evidence, runtime and guardrails.',
    nodes: [
      { id: 'product', label: 'PRODUCT', sub: 'problems' },
      { id: 'context', label: 'CONTEXT', sub: 'retrieval' },
      { id: 'knowledge', label: 'KNOWLEDGE', sub: 'signals' },
      { id: 'evidence', label: 'EVIDENCE', sub: 'benchmarks' },
      { id: 'runtime', label: 'RUNTIME', sub: 'execution' },
      { id: 'guardrails', label: 'GUARDRAILS', sub: 'governance' },
    ],
  },
  'pt-BR': {
    label: 'Mapa conceitual de arquitetura',
    aria:
      'Mapa conceitual de arquitetura conectando produto, contexto, conhecimento, evidência, runtime e governança.',
    nodes: [
      { id: 'product', label: 'PRODUTO', sub: 'problemas' },
      { id: 'context', label: 'CONTEXTO', sub: 'retrieval' },
      { id: 'knowledge', label: 'CONHECIMENTO', sub: 'sinais' },
      { id: 'evidence', label: 'EVIDÊNCIA', sub: 'benchmarks' },
      { id: 'runtime', label: 'RUNTIME', sub: 'execução' },
      { id: 'guardrails', label: 'GUARDRAILS', sub: 'governança' },
    ],
  },
};

const desktopPositions: Record<string, { left: string; top: string }> = {
  product: { left: '50%', top: '10%' },
  context: { left: '19%', top: '40%' },
  evidence: { left: '50%', top: '40%' },
  knowledge: { left: '81%', top: '40%' },
  runtime: { left: '50%', top: '69%' },
  guardrails: { left: '50%', top: '91%' },
};

interface NodeProps {
  label: string;
  sub: string;
  emphasis?: boolean;
  left: string;
  top: string;
  reducedMotion: boolean;
}

function DesktopNode({
  label,
  sub,
  emphasis,
  left,
  top,
  reducedMotion,
}: NodeProps) {
  const nodeBg = useColorModeValue('rgba(255,255,255,0.94)', 'rgba(17,24,39,0.94)');
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  const emphasisBorder = useColorModeValue('orange.300', 'orange.300');
  const labelColor = useColorModeValue('gray.800', 'gray.100');
  const subColor = useColorModeValue('gray.500', 'gray.400');
  const emphasisBg = useColorModeValue('orange.50', 'rgba(154,52,18,0.24)');

  return (
    <Box
      position={'absolute'}
      left={left}
      top={top}
      transform={'translate(-50%, -50%)'}
      minW={{ md: '112px', lg: '126px' }}
      maxW={'150px'}
      px={{ md: 3, lg: 4 }}
      py={{ md: 2.5, lg: 3 }}
      borderWidth={'1px'}
      borderColor={emphasis ? emphasisBorder : border}
      borderRadius={'2xl'}
      bg={emphasis ? emphasisBg : nodeBg}
      boxShadow={emphasis ? 'lg' : 'sm'}
      zIndex={2}
      animation={
        emphasis && !reducedMotion ? `${pulse} 4.8s ease-in-out infinite` : undefined
      }
      transition={'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease'}
      _hover={{
        transform: 'translate(-50%, -50%) scale(1.035)',
        boxShadow: 'xl',
        borderColor: 'orange.300',
      }}>
      <Text
        color={labelColor}
        fontSize={{ md: '10px', lg: 'xs' }}
        fontWeight={850}
        letterSpacing={'0.09em'}
        lineHeight={1.2}
        overflowWrap={'anywhere'}>
        {label}
      </Text>
      <Text mt={1} color={subColor} fontSize={{ md: '10px', lg: 'xs' }}>
        {sub}
      </Text>
    </Box>
  );
}

export default function ArchitectureConstellation() {
  const { language } = useLanguage();
  const content = copy[language];
  const reducedMotion = usePrefersReducedMotion();

  const panelBg = useColorModeValue('rgba(255,255,255,0.58)', 'rgba(17,24,39,0.42)');
  const border = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const line = useColorModeValue('rgba(221,107,32,0.34)', 'rgba(251,146,60,0.34)');
  const softLine = useColorModeValue('rgba(113,128,150,0.20)', 'rgba(160,174,192,0.18)');
  const mobileNodeBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.50');
  const muted = useColorModeValue('gray.500', 'gray.400');

  const byId = Object.fromEntries(content.nodes.map((node) => [node.id, node]));

  return (
    <Box
      role={'img'}
      aria-label={content.aria}
      w={'100%'}
      minW={0}
      p={{ base: 4, md: 5 }}
      borderWidth={'1px'}
      borderColor={border}
      borderRadius={'2xl'}
      bg={panelBg}
      backdropFilter={'blur(10px)'}
      overflow={'hidden'}>
      <HStack justify={'space-between'} gap={3} mb={4}>
        <Text
          color={'orange.400'}
          fontSize={'10px'}
          fontWeight={850}
          textTransform={'uppercase'}
          letterSpacing={'0.14em'}
          overflowWrap={'anywhere'}>
          {content.label}
        </Text>
        <HStack spacing={1.5} flexShrink={0}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              w={1.5}
              h={1.5}
              borderRadius={'full'}
              bg={dot === 0 ? 'orange.400' : muted}
              opacity={dot === 0 ? 1 : 0.45}
            />
          ))}
        </HStack>
      </HStack>

      <Stack display={{ base: 'flex', md: 'none' }} spacing={0}>
        {content.nodes.map((node, index) => (
          <Box key={node.id}>
            <Box
              px={3.5}
              py={3}
              borderWidth={'1px'}
              borderColor={node.id === 'evidence' ? 'orange.300' : border}
              borderRadius={'xl'}
              bg={mobileNodeBg}>
              <Text fontSize={'xs'} fontWeight={850} letterSpacing={'0.08em'}>
                {node.label}
              </Text>
              <Text mt={1} fontSize={'xs'} color={muted}>
                {node.sub}
              </Text>
            </Box>
            {index < content.nodes.length - 1 && (
              <Box
                mx={'auto'}
                w={'1px'}
                h={4}
                bg={node.id === 'evidence' ? line : softLine}
              />
            )}
          </Box>
        ))}
      </Stack>

      <Box
        display={{ base: 'none', md: 'block' }}
        position={'relative'}
        h={{ md: '320px', lg: '350px' }}
        minW={0}>
        <Box
          as={'svg'}
          position={'absolute'}
          inset={0}
          w={'100%'}
          h={'100%'}
          viewBox={'0 0 600 420'}
          preserveAspectRatio={'none'}
          aria-hidden={'true'}>
          <line x1="300" y1="42" x2="300" y2="168" stroke={line} strokeWidth="1.5" />
          <line x1="114" y1="168" x2="300" y2="168" stroke={softLine} strokeWidth="1.5" />
          <line x1="300" y1="168" x2="486" y2="168" stroke={softLine} strokeWidth="1.5" />
          <line x1="300" y1="168" x2="300" y2="290" stroke={line} strokeWidth="1.5" />
          <line x1="300" y1="290" x2="300" y2="382" stroke={line} strokeWidth="1.5" />

          <g
            style={{
              animation: reducedMotion ? undefined : `${signal} 5.5s linear infinite`,
              strokeDasharray: '7 8',
            }}>
            <line x1="300" y1="42" x2="300" y2="168" stroke={line} strokeWidth="2.5" />
            <line x1="114" y1="168" x2="486" y2="168" stroke={line} strokeWidth="2.5" />
            <line x1="300" y1="168" x2="300" y2="382" stroke={line} strokeWidth="2.5" />
          </g>
        </Box>

        <Box
          position={'absolute'}
          left={'50%'}
          top={'40%'}
          w={'110px'}
          h={'110px'}
          borderRadius={'full'}
          bg={'orange.400'}
          opacity={0.09}
          filter={'blur(30px)'}
          transform={'translate(-50%, -50%)'}
          pointerEvents={'none'}
        />

        {content.nodes.map((node) => (
          <DesktopNode
            key={node.id}
            label={node.label}
            sub={node.sub}
            emphasis={node.id === 'evidence'}
            left={desktopPositions[node.id].left}
            top={desktopPositions[node.id].top}
            reducedMotion={reducedMotion}
          />
        ))}

        <Box
          position={'absolute'}
          left={'50%'}
          bottom={0}
          transform={'translateX(-50%)'}
          color={muted}
          fontSize={'9px'}
          fontWeight={700}
          letterSpacing={'0.12em'}
          textTransform={'uppercase'}>
          {language === 'pt-BR'
            ? 'abstração conceitual • não representa topologia interna'
            : 'conceptual abstraction • not an internal topology'}
        </Box>
      </Box>
    </Box>
  );
}
