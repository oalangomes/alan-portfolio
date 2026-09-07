import { Box, useColorModeValue } from '@chakra-ui/react';

export default function ArchitectureMotif() {
  const line = useColorModeValue(
    'rgba(var(--portfolio-accent-rgb),0.22)',
    'rgba(var(--portfolio-accent-rgb),0.18)',
  );
  const dot = 'var(--portfolio-accent)';

  return (
    <Box
      aria-hidden={'true'}
      position={'absolute'}
      right={{ base: -8, md: -4 }}
      bottom={{ base: -10, md: -8 }}
      w={{ base: '170px', md: '220px' }}
      h={{ base: '120px', md: '150px' }}
      opacity={0.55}
      pointerEvents={'none'}>
      <svg
        viewBox="0 0 220 150"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet">
        <line x1="28" y1="92" x2="92" y2="46" stroke={line} strokeWidth="1.5" />
        <line x1="92" y1="46" x2="154" y2="78" stroke={line} strokeWidth="1.5" />
        <line x1="92" y1="46" x2="126" y2="124" stroke={line} strokeWidth="1.5" />
        <line x1="126" y1="124" x2="194" y2="104" stroke={line} strokeWidth="1.5" />

        {[
          [28, 92],
          [92, 46],
          [154, 78],
          [126, 124],
          [194, 104],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r="8" fill="none" stroke={line} strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="2.5" fill={dot} />
          </g>
        ))}
      </svg>
    </Box>
  );
}
