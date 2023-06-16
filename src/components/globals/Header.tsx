import { ReactNode } from 'react';
import { ColorModeSwitcher }  from "./ColorModeSwitcher"
import {
  Box,
  Flex,
  Avatar,
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

import logo from "../../images/header/Alan.png"
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
            <Avatar
                src={logo}
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
                  <Avatar
                    size={'sm'}
                    src={'https://media.licdn.com/dms/image/C4D03AQHNlCczs9qcMg/profile-displayphoto-shrink_800_800/0/1643423739332?e=1692230400&v=beta&t=jK3Z-IbcUEjYbZZc4orLEgn2g5tIBvPpDlSqpNkBqgM'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://media.licdn.com/dms/image/C4D03AQHNlCczs9qcMg/profile-displayphoto-shrink_800_800/0/1643423739332?e=1692230400&v=beta&t=jK3Z-IbcUEjYbZZc4orLEgn2g5tIBvPpDlSqpNkBqgM'}
                    />
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