import {
  Box,
  chakra,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import Logo from '../../logos/Logo';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const hoverBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

  return (
    <chakra.a
      bg={bg}
      rounded={'full'}
      w={9}
      h={9}
      href={href}
      target={'_blank'}
      rel={'noreferrer'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'transform 160ms ease, background 160ms ease'}
      _hover={{ bg: hoverBg, transform: 'translateY(-2px)' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.a>
  );
};

export default function CenterFooter() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';

  const bg = useColorModeValue('white', 'gray.900');
  const text = useColorModeValue('gray.700', 'gray.200');
  const subtle = useColorModeValue('gray.500', 'gray.400');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

  return (
    <Box
      as={'footer'}
      bg={bg}
      color={text}
      borderTopWidth={'1px'}
      borderColor={borderColor}>
      <Container maxW={'7xl'} py={{ base: 8, md: 10 }} px={{ base: 5, md: 6 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify={'space-between'}
          gap={8}>
          <HStack spacing={3}>
            <Box
              display={'grid'}
              placeItems={'center'}
              w={10}
              h={10}
              borderRadius={'xl'}
              borderWidth={'1px'}
              borderColor={borderColor}>
              <Logo size={24} />
            </Box>
            <Box>
              <Text fontWeight={800}>Alan Gomes</Text>
              <Text fontSize={'sm'} color={subtle}>
                {isPortuguese ? 'Arquiteto de Software' : 'Software Architect'}
              </Text>
            </Box>
          </HStack>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={{ base: 'flex-start', sm: 'center' }}
            spacing={{ base: 4, sm: 6 }}>
            <HStack spacing={5}>
              <Link as={RouterLink} to={'/AboutMe'} fontWeight={600}>
                {isPortuguese ? 'Sobre' : 'About'}
              </Link>
              <Link as={RouterLink} to={'/Projects'} fontWeight={600}>
                {isPortuguese ? 'Projetos' : 'Work'}
              </Link>
              <Link as={RouterLink} to={'/Contact'} fontWeight={600}>
                {isPortuguese ? 'Contato' : 'Contact'}
              </Link>
            </HStack>

            <HStack spacing={2}>
              <SocialButton label={'X'} href={'https://x.com/oalangomes'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'LinkedIn'}
                href={'https://linkedin.com/in/oalangomes'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://instagram.com/oalangomes'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'GitHub'} href={'https://github.com/oalangomes'}>
                <FaGithub />
              </SocialButton>
            </HStack>
          </Stack>
        </Flex>

        <Text mt={8} pt={6} borderTopWidth={'1px'} borderColor={borderColor} fontSize={'xs'} color={subtle}>
          {isPortuguese
            ? '© 2026 Alan Gomes. Portfólio de engenharia em evolução contínua.'
            : '© 2026 Alan Gomes. An engineering portfolio in continuous evolution.'}
        </Text>
      </Container>
    </Box>
  );
}
