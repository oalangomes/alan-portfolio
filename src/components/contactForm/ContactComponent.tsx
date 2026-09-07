import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useLanguage } from '../../i18n/LanguageContext';
import { AllAlerts } from '../alerts/AllAlerts';

interface ContactProps {
  emailOnCopy: string;
}

const createAlertState = () => ({
  title: '',
  value: '',
  success: false,
  error: false,
  info: false,
  warning: false,
});

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const copy = {
  en: {
    sentTitle: 'Message sent',
    sentText: 'Thanks! I will get back to you as soon as I can.',
    failedTitle: 'Could not send message',
    failedText: 'Please try again or contact me directly by email.',
    missingTitle: 'Missing information',
    missingText: 'Please fill in all fields.',
    invalidTitle: 'Invalid email',
    invalidText: 'Please enter a valid email address.',
    copied: 'Email copied!',
    copyEmail: 'Copy email',
    direct: 'Direct contact',
    directText: 'Prefer email or social? These are the fastest ways to find me.',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'Your email',
    message: 'Message',
    messagePlaceholder: 'Tell me what you are working on...',
    send: 'Send message',
  },
  'pt-BR': {
    sentTitle: 'Mensagem enviada',
    sentText: 'Obrigado! Responderei assim que puder.',
    failedTitle: 'Não foi possível enviar a mensagem',
    failedText: 'Tente novamente ou entre em contato diretamente por e-mail.',
    missingTitle: 'Informações faltando',
    missingText: 'Preencha todos os campos.',
    invalidTitle: 'E-mail inválido',
    invalidText: 'Informe um endereço de e-mail válido.',
    copied: 'E-mail copiado!',
    copyEmail: 'Copiar e-mail',
    direct: 'Contato direto',
    directText: 'Prefere e-mail ou redes? Estes são os caminhos mais rápidos para me encontrar.',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'E-mail',
    emailPlaceholder: 'Seu e-mail',
    message: 'Mensagem',
    messagePlaceholder: 'Conte no que você está trabalhando...',
    send: 'Enviar mensagem',
  },
};

export default function ContactComponent({ emailOnCopy }: ContactProps) {
  const { language } = useLanguage();
  const content = copy[language];

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { hasCopied, onCopy } = useClipboard(emailOnCopy);
  const [allAlert, setAllAlert] = useState(createAlertState());

  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const subtle = useColorModeValue('gray.600', 'gray.300');
  const muted = useColorModeValue('gray.500', 'gray.400');
  const inputBg = useColorModeValue('gray.50', 'whiteAlpha.50');
  const socialBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_KEY || '');
  }, []);

  const sendEmail = async () => {
    try {
      await emailjs.send('service_7smwktj', 'template_f9i5snb', {
        name,
        email,
        message,
      });

      setAllAlert({
        title: content.sentTitle,
        value: content.sentText,
        success: true,
        error: false,
        info: false,
        warning: false,
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending contact form:', error);
      setAllAlert({
        title: content.failedTitle,
        value: content.failedText,
        success: false,
        error: true,
        info: false,
        warning: false,
      });
    }
  };

  const sendContactForm = () => {
    if (!name || !email || !message) {
      setAllAlert({
        title: content.missingTitle,
        value: content.missingText,
        success: false,
        error: true,
        info: false,
        warning: false,
      });
      nameInputRef.current?.focus();
      return;
    }

    if (!validateEmail(email)) {
      setAllAlert({
        title: content.invalidTitle,
        value: content.invalidText,
        success: false,
        error: true,
        info: false,
        warning: false,
      });
      emailInputRef.current?.focus();
      return;
    }

    void sendEmail();
  };

  return (
    <>
      <AllAlerts
        title={allAlert.title}
        value={allAlert.value}
        successAlertPropActive={allAlert.success}
        errorAlertPropActive={allAlert.error}
        infoAlertPropActive={allAlert.info}
        warningAlertPropActive={allAlert.warning}
      />

      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
        gap={6}
        alignItems={'stretch'}>
        <GridItem colSpan={{ base: 1, lg: 4 }}>
          <Box
            height={'100%'}
            p={{ base: 6, md: 8 }}
            borderWidth={'1px'}
            borderColor={borderColor}
            borderRadius={'3xl'}
            bg={cardBg}
            boxShadow={'sm'}>
            <Stack spacing={6} height={'100%'}>
              <Box>
                <Text
                  color={'orange.400'}
                  fontWeight={800}
                  fontSize={'xs'}
                  textTransform={'uppercase'}
                  letterSpacing={'0.14em'}>
                  {content.direct}
                </Text>
                <Heading mt={3} fontSize={'2xl'} letterSpacing={'-0.02em'}>
                  {emailOnCopy}
                </Heading>
                <Text mt={3} color={subtle} lineHeight={1.75}>
                  {content.directText}
                </Text>
              </Box>

              <Tooltip
                label={hasCopied ? content.copied : content.copyEmail}
                closeOnClick={false}
                hasArrow>
                <Button
                  onClick={onCopy}
                  leftIcon={<MdEmail />}
                  variant={'outline'}
                  rounded={'full'}
                  justifyContent={'flex-start'}>
                  {hasCopied ? content.copied : content.copyEmail}
                </Button>
              </Tooltip>

              <Box flex={1} />

              <HStack spacing={2}>
                <Link
                  href={'https://github.com/oalangomes'}
                  target={'_blank'}
                  rel={'noreferrer'}>
                  <IconButton
                    aria-label={'GitHub'}
                    icon={<FaGithub />}
                    variant={'ghost'}
                    bg={socialBg}
                    borderRadius={'full'}
                  />
                </Link>
                <Link
                  href={'https://x.com/oalangomes'}
                  target={'_blank'}
                  rel={'noreferrer'}>
                  <IconButton
                    aria-label={'X'}
                    icon={<FaTwitter />}
                    variant={'ghost'}
                    bg={socialBg}
                    borderRadius={'full'}
                  />
                </Link>
                <Link
                  href={'https://linkedin.com/in/oalangomes'}
                  target={'_blank'}
                  rel={'noreferrer'}>
                  <IconButton
                    aria-label={'LinkedIn'}
                    icon={<FaLinkedin />}
                    variant={'ghost'}
                    bg={socialBg}
                    borderRadius={'full'}
                  />
                </Link>
              </HStack>
            </Stack>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 8 }}>
          <Box
            p={{ base: 6, md: 8 }}
            borderWidth={'1px'}
            borderColor={borderColor}
            borderRadius={'3xl'}
            bg={cardBg}
            boxShadow={'sm'}>
            <Stack spacing={5}>
              <Text
                fontSize={'xs'}
                fontWeight={800}
                textTransform={'uppercase'}
                letterSpacing={'0.14em'}
                color={muted}>
                {language === 'pt-BR' ? 'Mensagem' : 'Message'}
              </Text>

              <FormControl isRequired>
                <FormLabel>{content.name}</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdPerson />} />
                  <Input
                    type={'text'}
                    name={'name'}
                    placeholder={content.namePlaceholder}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    ref={nameInputRef}
                    bg={inputBg}
                    borderRadius={'xl'}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{content.email}</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdEmail />} />
                  <Input
                    type={'email'}
                    name={'email'}
                    placeholder={content.emailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    ref={emailInputRef}
                    bg={inputBg}
                    borderRadius={'xl'}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{content.message}</FormLabel>
                <Textarea
                  name={'message'}
                  placeholder={content.messagePlaceholder}
                  rows={7}
                  resize={'vertical'}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  bg={inputBg}
                  borderRadius={'xl'}
                />
              </FormControl>

              <Button
                colorScheme={'orange'}
                size={'lg'}
                alignSelf={'flex-start'}
                rounded={'full'}
                rightIcon={<FiSend />}
                onClick={sendContactForm}>
                {content.send}
              </Button>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
