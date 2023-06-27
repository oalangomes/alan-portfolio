import { ReactNode } from 'react';
import { ColorModeSwitcher }  from "../ColorModeSwitcher"
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';

import  Logo   from "../../logos/Logo"
import  MyAvatar   from "../../logos/MyAvatar"

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Logo
                size={28}
              />
            </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <ColorModeSwitcher justifySelf="flex-end" />

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <MyAvatar size={'md'}/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <MyAvatar size={'xl'}/>
                  </Center>
                  <br />
                  <Center>
                    <p>Alan Gomes</p>
                  </Center>
                  <br />
                  <MenuDivider />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}