import { Box, useColorModeValue } from '@chakra-ui/react';

export default function ArchitectureMotif() {
  const line = useColorModeValue(
    'rgba(var(--portfolio-accent-rgb),0.20)',
    'rgba(var(--portfolio-accent-rgb),0.18)',
  );
  const nodeStroke = useColorModeValue(
    'rgba(var(--portfolio-accent-rgb),0.28)',
    'rgba(var(--portfolio-accent-rgb),0.24)',
  );

  return (
    <Box
      aria-hidden={'true'}
      position={'absolute'}
      right={{ base: 2, md: 4 }}
      bottom={{ base: 1, md: 2 }}
      w={{ base: '132px', md: '170px' }}
      h={{ base: '86px', md: '108px' }}
      opacity={{ base: 0.34, md: 0.42 }}
      pointerEvents={'none'}>
      <svg
        viewBox="0 0 180 110"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet">
        <path
          d="M18 72 L66 34 L112 54 L154 25"
          fill="none"
          stroke={line}
          strokeWidth="1.4"
        />
        <path
          d="M66 34 L92 88 L144 78"
          fill="none"
          stroke={line}
          strokeWidth="1.4"
        />

        {[
          [18, 72],
          [66, 34],
          [112, 54],
          [154, 25],
          [92, 88],
          [144, 78],
        ].map(([x, y], index) => (
          <rect
            key={index}
            x={x - 4}
            y={y - 4}
            width="8"
            height="8"
            rx="2"
            fill="transparent"
            stroke={nodeStroke}
            strokeWidth="1.3"
          />
        ))}
      </svg>
    </Box>
  );
}
