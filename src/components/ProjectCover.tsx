import {
  Box,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectVisual } from '../data/projects';

interface ProjectCoverProps {
  visual: ProjectVisual;
}

export default function ProjectCover({ visual }: ProjectCoverProps) {
  const bg = useColorModeValue(
    `${visual.tone}.50`,
    'whiteAlpha.50',
  );
  const border = useColorModeValue(
    `${visual.tone}.100`,
    'whiteAlpha.100',
  );
  const accent = useColorModeValue(
    `${visual.tone}.600`,
    `${visual.tone}.300`,
  );
  const text = useColorModeValue('gray.800', 'gray.100');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const rowBg = useColorModeValue('whiteAlpha.700', 'blackAlpha.200');

  return (
    <Box
      w={'100%'}
      minW={0}
      p={{ base: 4, md: 5 }}
      borderWidth={'1px'}
      borderColor={border}
      borderRadius={'2xl'}
      bg={bg}
      overflow={'hidden'}>
      <HStack justify={'space-between'} gap={3} mb={5}>
        <Text
          minW={0}
          color={accent}
          fontSize={'xs'}
          fontWeight={800}
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
              opacity={dot === 0 ? 1 : 0.45}
            />
          ))}
        </HStack>
      </HStack>

      <Stack spacing={2.5} fontFamily={'mono'}>
        <Box px={3} py={2.5} borderRadius={'lg'} bg={rowBg}>
          <Text
            color={text}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={750}
            overflowWrap={'anywhere'}>
            {visual.primary}
          </Text>
        </Box>
        <Box px={3} py={2.5} borderRadius={'lg'} bg={rowBg}>
          <Text
            color={text}
            fontSize={'sm'}
            fontWeight={650}
            overflowWrap={'anywhere'}>
            {visual.secondary}
          </Text>
        </Box>
        <Text
          px={1}
          color={muted}
          fontSize={'xs'}
          fontWeight={700}
          letterSpacing={'0.06em'}
          overflowWrap={'anywhere'}>
          {visual.tertiary}
        </Text>
      </Stack>
    </Box>
  );
}
