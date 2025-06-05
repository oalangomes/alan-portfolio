import {
  Box,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';

import ContactComponent from '../components/contactForm/ContactComponent';

import { CONFETTI_LIGHT, CONFETTI_DARK } from '../assets/confetti';
const confetti = {
  light: {
    primary: '4299E1', // blue.400
    secondary: 'BEE3F8', // blue.100
  },

  dark: {
    primary: '1A365D', // blue.900
    secondary: '2A4365', // blue.800
  },
};


export default function ContactFormWithSocialButtons() {
  
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 2, md: 16, lg: 4 }}
        p={{ base: 2, lg: 8 }}>
        <Box>
                <ContactComponent title='Send Me a Message!' emailOnCopy='alangssilva@gmail.com' ></ContactComponent>
        </Box>
      </Box>
    </Flex>
  );
}