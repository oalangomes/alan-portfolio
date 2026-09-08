import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ContactComponent from '../components/contactForm/ContactComponent';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={pageBg} minH={'calc(100vh - 72px)'} id={'contact'}>
      <Container maxW={'7xl'} py={{ base: 16, md: 22 }} px={{ base: 5, md: 6 }}>
        <Stack spacing={{ base: 10, md: 12 }}>
          <Stack spacing={4} maxW={'4xl'}>
            <Text
              color={'var(--portfolio-accent)'}
              fontWeight={800}
              fontSize={'xs'}
              textTransform={'uppercase'}
              letterSpacing={'0.14em'}>
              {isPortuguese ? 'Contato' : 'Contact'}
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1}
              letterSpacing={'-0.04em'}>
              {isPortuguese ? 'Vamos conversar.' : "Let's talk."}
            </Heading>
            <Text
              maxW={'3xl'}
              color={subtle}
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.8}>
              {isPortuguese
                ? 'Arquitetura, engenharia, ideias de produto ou um problema técnico interessante — fique à vontade para entrar em contato.'
                : 'Architecture, engineering, product ideas or an interesting technical problem — feel free to reach out.'}
            </Text>
          </Stack>

          <ContactComponent emailOnCopy={'alangssilva@gmail.com'} />
        </Stack>
      </Container>
    </Box>
  );
}
