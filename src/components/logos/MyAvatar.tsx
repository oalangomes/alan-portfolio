import { Avatar } from '@chakra-ui/react';

interface MyAvatarProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export default function MyAvatar({ size }: MyAvatarProps) {
  return (
    <>
      <Avatar
        size={size}
        src={'https://media.licdn.com/dms/image/C4D03AQHNlCczs9qcMg/profile-displayphoto-shrink_800_800/0/1643423739332?e=1692230400&v=beta&t=jK3Z-IbcUEjYbZZc4orLEgn2g5tIBvPpDlSqpNkBqgM'}
      />
    </>
  );
}
