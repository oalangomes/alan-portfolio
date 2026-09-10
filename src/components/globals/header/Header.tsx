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
import AccentThemeSwitcher from '../AccentThemeSwitcher';
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
    'rgba(255,255,255,0.96)',
    'rgba(17,24,39,0.96)',
  );
  const navBg = 'transparent';
  const navBorder = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const inactiveHoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
  const activeBg = useColorModeValue('white', 'whiteAlpha.200');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const activeText = useColorModeValue('gray.900', 'white');
  const inactiveText = useColorModeValue('gray.600', 'gray.300');
  const brandSubtle = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box
      as={'header'}
      position={'fixed'}
      top={0}
      left={0}
      right={0}
      w={'100%'}
      zIndex={'sticky'}
      bg={headerBg}
      backdropFilter={'blur(18px) saturate(140%)'}
      isolation={'isolate'}
      borderBottomWidth={'1px'}
      borderColor={borderColor}
      boxShadow={'0 1px 0 rgba(var(--portfolio-accent-rgb),0.10), 0 8px 30px rgba(var(--portfolio-accent-rgb),0.035)'}>
      <Container maxW={'7xl'} px={{ base: 3, sm: 4, lg: 6 }}>
        <Flex
          h={{ base: 16, lg: 20 }}
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
                w={{ base: 10, lg: 11 }}
                h={{ base: 10, lg: 11 }}
                borderRadius={'xl'}
                bg={'transparent'}
                overflow={'hidden'}>
                <Logo size={28} />
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
            p={0.5}
            borderRadius={'full'}
            bg={navBg}
            borderWidth={'1px'}
            borderColor={navBorder}
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
                  py={2.5}
                  borderRadius={'full'}
                  bg={active ? activeBg : 'transparent'}
                  boxShadow={
                    active
                      ? '0 4px 16px rgba(15,23,42,0.08), 0 0 16px rgba(var(--portfolio-accent-rgb),0.08)'
                      : 'none'
                  }
                  fontSize={'sm'}
                  fontWeight={active ? 700 : 600}
                  color={active ? activeText : inactiveText}
                  _hover={{
                    textDecoration: 'none',
                    color: activeText,
                    bg: active ? activeBg : inactiveHoverBg,
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

            <AccentThemeSwitcher />
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
