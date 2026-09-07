import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={pageBg} minH={'65vh'}>
      <Container maxW={'5xl'} py={{ base: 20, md: 28 }} px={{ base: 4, md: 6 }}>
        <Stack spacing={5} align={'flex-start'}>
          <Text
            color={'var(--portfolio-accent)'}
            fontWeight={800}
            fontSize={'xs'}
            textTransform={'uppercase'}
            letterSpacing={'0.16em'}>
            404
          </Text>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            letterSpacing={'-0.04em'}>
            {isPortuguese ? 'Essa página não existe.' : 'This page does not exist.'}
          </Heading>
          <Text color={subtle} fontSize={{ base: 'md', md: 'lg' }} maxW={'2xl'}>
            {isPortuguese
              ? 'O link pode ter mudado ou nunca ter existido. O restante do portfólio continua por aqui.'
              : 'The link may have moved or never existed. The rest of the portfolio is still here.'}
          </Text>
          <Button
            as={RouterLink}
            to={'/'}
            bg={'var(--portfolio-accent)'}
            color={'var(--portfolio-accent-contrast)'}
            rounded={'full'}
            leftIcon={<FiArrowLeft />}>
            {isPortuguese ? 'Voltar ao início' : 'Back home'}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
