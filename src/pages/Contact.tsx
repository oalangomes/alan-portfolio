import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import ContactComponent from '../components/contactForm/ContactComponent';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  const subtle = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      bg={pageBg}
      align={'center'}
      justify={'center'}
      direction={'column'}
      px={4}
      py={{ base: 12, md: 16 }}
      id={'contact'}>
      <Box maxW={'3xl'} textAlign={'center'} mb={8}>
        <Text color={'orange.400'} fontWeight={700} textTransform={'uppercase'}>
          {isPortuguese ? 'Contato' : 'Contact'}
        </Text>
        <Text mt={2} color={subtle}>
          {isPortuguese
            ? 'Arquitetura, engenharia, ideias de produto ou um problema técnico interessante — fique à vontade para entrar em contato.'
            : 'Architecture, engineering, product ideas or an interesting technical problem — feel free to reach out.'}
        </Text>
      </Box>

      <Box borderRadius={'lg'} p={{ base: 2, lg: 8 }}>
        <ContactComponent
          title={isPortuguese ? 'Vamos conversar' : "Let's talk"}
          emailOnCopy={'alangssilva@gmail.com'}
        />
      </Box>
    </Flex>
  );
}
