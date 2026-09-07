import { Image } from '@chakra-ui/react';
import AlanBrand from '../../images/header/Alan.png';

interface MyAvatarProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const dimensions = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 28,
};

export default function MyAvatar({ size }: MyAvatarProps) {
  return (
    <Image
      src={AlanBrand}
      alt={'Alan Gomes'}
      boxSize={dimensions[size]}
      objectFit={'contain'}
      borderRadius={'2xl'}
      flexShrink={0}
    />
  );
}
