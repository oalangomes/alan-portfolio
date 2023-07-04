import { Avatar } from '@chakra-ui/react';

interface MyAvatarProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export default function MyAvatar({ size }: MyAvatarProps) {
  return (
    <>
      <Avatar
        size={size}
        src={'https://media.licdn.com/dms/image/D4D03AQEyMoNOTkOUug/profile-displayphoto-shrink_200_200/0/1688024264692?e=1694044800&v=beta&t=Ijs05eQurw6H4gi1BGvy8pL-1tN6bY1uoeXW4tFLIOk'}
      />
    </>
  );
}
