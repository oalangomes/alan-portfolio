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
import { useLanguage } from '../../../i18n/LanguageContext';
import Logo from '../../logos/Logo';
import MyAvatar from '../../logos/MyAvatar';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const navigation = {
  en: [
    { label: 'About', to: '/AboutMe' },
    { label: 'Work', to: '/Projects' },
    { label: 'Contact', to: '/Contact' },
  ],
  'pt-BR': [
    { label: 'Sobre', to: '/AboutMe' },
    { label: 'Projetos', to: '/Projects' },
    { label: 'Contato', to: '/Contact' },
  ],
};

export default function Nav() {
  const { language, toggleLanguage } = useLanguage();
  const links = navigation[language];
  const isPortuguese = language === 'pt-BR';

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      px={4}
      borderBottomWidth={'1px'}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'6xl'}
        mx={'auto'}>
        <Link
          as={RouterLink}
          to={'/'}
          aria-label={isPortuguese ? 'Início' : 'Home'}>
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
          <Stack direction={'row'} spacing={{ base: 2, md: 4 }} align={'center'}>
            <Button
              size={'sm'}
              variant={'ghost'}
              onClick={toggleLanguage}
              aria-label={
                isPortuguese
                  ? 'Switch site language to English'
                  : 'Mudar idioma do site para português'
              }>
              {isPortuguese ? 'EN' : 'PT'}
            </Button>
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
                  {isPortuguese ? 'Arquiteto de Software' : 'Software Architect'}
                </Center>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
