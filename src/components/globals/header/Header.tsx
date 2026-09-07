import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from '../../logos/Logo';
import MyAvatar from '../../logos/MyAvatar';

const links = [
  { label: 'About', to: '/AboutMe' },
  { label: 'Work', to: '/Projects' },
  { label: 'Contact', to: '/Contact' },
];

export default function Nav() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} borderBottomWidth={'1px'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW={'6xl'} mx={'auto'}>
        <Link as={RouterLink} to={'/'} aria-label={'Home'}>
          <Logo size={28} />
        </Link>

        <HStack as={'nav'} spacing={5} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <Link
              as={RouterLink}
              key={link.to}
              to={link.to}
              fontWeight={600}
              _hover={{ textDecoration: 'none', color: 'orange.400' }}>
              {link.label}
            </Link>
          ))}
        </HStack>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={5} align={'center'}>
            <ColorModeSwitcher justifySelf={'flex-end'} />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <MyAvatar size={'md'} />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <Center py={3}>
                  <MyAvatar size={'xl'} />
                </Center>
                <Center>
                  <Box fontWeight={700}>Alan Gomes</Box>
                </Center>
                <MenuDivider />
                <Center pb={2} fontSize={'sm'}>
                  Software Architect
                </Center>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
