import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiGlobe, FiMenu } from 'react-icons/fi';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import Logo from '../../logos/Logo';
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
  const location = useLocation();
  const links = navigation[language];
  const isPortuguese = language === 'pt-BR';

  const headerBg = useColorModeValue(
    'rgba(255,255,255,0.84)',
    'rgba(17,24,39,0.84)',
  );
  const navBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const activeBg = useColorModeValue('white', 'whiteAlpha.200');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const activeText = useColorModeValue('gray.900', 'white');
  const inactiveText = useColorModeValue('gray.600', 'gray.300');
  const brandSubtle = useColorModeValue('gray.500', 'gray.400');
  const logoBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');

  return (
    <Box
      as={'header'}
      position={'sticky'}
      top={0}
      zIndex={20}
      bg={headerBg}
      backdropFilter={'blur(18px)'}
      borderBottomWidth={'1px'}
      borderColor={borderColor}>
      <Container maxW={'7xl'} px={{ base: 3, sm: 4, lg: 6 }}>
        <Flex
          h={{ base: 16, lg: 18 }}
          align={'center'}
          justify={'space-between'}
          gap={3}>
          <Link
            as={RouterLink}
            to={'/'}
            flexShrink={0}
            aria-label={isPortuguese ? 'Início' : 'Home'}
            _hover={{ textDecoration: 'none' }}>
            <HStack spacing={3}>
              <Box
                display={'grid'}
                placeItems={'center'}
                w={10}
                h={10}
                borderRadius={'xl'}
                bg={logoBg}
                overflow={'hidden'}>
                <Logo size={25} />
              </Box>
              <Box display={{ base: 'none', xl: 'block' }}>
                <Text fontWeight={800} lineHeight={1}>
                  Alan Gomes
                </Text>
                <Text
                  mt={1}
                  fontSize={'xs'}
                  color={brandSubtle}>
                  {isPortuguese ? 'Arquiteto de Software' : 'Software Architect'}
                </Text>
              </Box>
            </HStack>
          </Link>

          <HStack
            as={'nav'}
            spacing={1}
            display={{ base: 'none', lg: 'flex' }}
            p={1}
            borderRadius={'full'}
            bg={navBg}
            borderWidth={'1px'}
            borderColor={borderColor}
            flexShrink={0}>
            {links.map((link) => {
              const active = location.pathname === link.to;

              return (
                <Link
                  as={RouterLink}
                  key={link.to}
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  px={4}
                  py={2}
                  borderRadius={'full'}
                  bg={active ? activeBg : 'transparent'}
                  boxShadow={active ? 'sm' : 'none'}
                  fontSize={'sm'}
                  fontWeight={active ? 700 : 600}
                  color={active ? activeText : inactiveText}
                  _hover={{
                    textDecoration: 'none',
                    color: activeText,
                  }}>
                  {link.label}
                </Link>
              );
            })}
          </HStack>

          <HStack spacing={{ base: 0, sm: 2 }} flexShrink={0}>
            <Tooltip
              label={
                isPortuguese
                  ? 'Switch to English'
                  : 'Mudar para português'
              }>
              <Button
                size={'sm'}
                variant={'ghost'}
                leftIcon={<FiGlobe />}
                onClick={toggleLanguage}
                aria-label={
                  isPortuguese
                    ? 'Switch site language to English'
                    : 'Mudar idioma do site para português'
                }
                borderRadius={'full'}
                px={{ base: 2, sm: 3 }}
                minW={{ base: 'auto', sm: 10 }}>
                {isPortuguese ? 'PT-BR' : 'EN'}
              </Button>
            </Tooltip>

            <ColorModeSwitcher justifySelf={'flex-end'} />

            <Menu>
              <MenuButton
                as={IconButton}
                display={{ base: 'inline-flex', lg: 'none' }}
                aria-label={isPortuguese ? 'Abrir menu' : 'Open menu'}
                icon={<FiMenu />}
                variant={'ghost'}
                borderRadius={'full'}
              />
              <MenuList
                minW={'180px'}
                borderRadius={'xl'}
                p={2}
                boxShadow={'xl'}>
                {links.map((link) => (
                  <MenuItem
                    as={RouterLink}
                    key={link.to}
                    to={link.to}
                    aria-current={location.pathname === link.to ? 'page' : undefined}
                    borderRadius={'lg'}
                    fontWeight={location.pathname === link.to ? 700 : 500}>
                    {link.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
