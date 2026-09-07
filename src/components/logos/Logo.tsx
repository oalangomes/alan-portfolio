import { chakra } from '@chakra-ui/react';
import Alan from '../../images/header/Alan.png';

interface LogoProps {
  size: number;
}

export default function Logo({ size }: LogoProps) {
  return (
    <chakra.img
      src={Alan}
      alt={'Alan Gomes logo'}
      h={`${size}px`}
      w={'auto'}
      maxW={'100%'}
      maxH={'100%'}
      objectFit={'contain'}
      display={'block'}
      flexShrink={0}
    />
  );
}
