import {
  Box,
  chakra,
  Container,
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
}) => (
  <chakra.a
    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    rounded={'full'}
    w={8}
    h={8}
    href={href}
    target={'_blank'}
    rel={'noreferrer'}
    display={'inline-flex'}
    alignItems={'center'}
    justifyContent={'center'}
    transition={'background 0.2s ease'}
    _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.a>
);

export default function CenterFooter() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={'1px'}
      mt={12}>
      <Container as={Stack} maxW={'6xl'} py={8} spacing={5} align={'center'}>
        <Logo size={100} />
        <Stack direction={'row'} spacing={6}>
          <Link as={RouterLink} to={'/AboutMe'}>
            {isPortuguese ? 'Sobre' : 'About'}
          </Link>
          <Link as={RouterLink} to={'/Projects'}>
            {isPortuguese ? 'Projetos' : 'Work'}
          </Link>
          <Link as={RouterLink} to={'/Contact'}>
            {isPortuguese ? 'Contato' : 'Contact'}
          </Link>
        </Stack>

        <Stack direction={'row'} spacing={5}>
          <SocialButton label={'X'} href={'https://x.com/oalangomes'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/oalangomes'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://instagram.com/oalangomes'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/oalangomes'}>
            <FaGithub />
          </SocialButton>
        </Stack>

        <Text fontSize={'sm'}>
          {isPortuguese
            ? '© 2026 Alan Gomes. Construído como um portfólio de engenharia em evolução.'
            : '© 2026 Alan Gomes. Built as an evolving engineering portfolio.'}
        </Text>
      </Container>
    </Box>
  );
}
