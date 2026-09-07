import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useLanguage } from '../../i18n/LanguageContext';
import { AllAlerts } from '../alerts/AllAlerts';

interface ContactProps {
  title: string;
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
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'Your email',
    message: 'Message',
    messagePlaceholder: 'How can I help?',
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
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'E-mail',
    emailPlaceholder: 'Seu e-mail',
    message: 'Mensagem',
    messagePlaceholder: 'Como posso ajudar?',
    send: 'Enviar mensagem',
  },
};

export default function ContactComponent({ title, emailOnCopy }: ContactProps) {
  const { language } = useLanguage();
  const content = copy[language];
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { hasCopied, onCopy } = useClipboard(emailOnCopy);
  const [allAlert, setAllAlert] = useState(createAlertState());

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

      <VStack spacing={{ base: 6, md: 8 }}>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>{title}</Heading>

        <Stack
          spacing={{ base: 6, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack
            align={'center'}
            justify={'space-around'}
            direction={{ base: 'row', md: 'column' }}>
            <Tooltip
              label={hasCopied ? content.copied : content.copyEmail}
              closeOnClick={false}
              hasArrow>
              <IconButton
                aria-label={content.copyEmail}
                variant={'ghost'}
                size={'lg'}
                fontSize={'3xl'}
                icon={<MdEmail />}
                _hover={{ bg: 'orange.400', color: 'white' }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>

            <Link href={'https://github.com/oalangomes'} target={'_blank'} rel={'noreferrer'}>
              <IconButton
                aria-label={'GitHub'}
                variant={'ghost'}
                size={'lg'}
                fontSize={'3xl'}
                icon={<FaGithub />}
                _hover={{ bg: 'orange.400', color: 'white' }}
                isRound
              />
            </Link>

            <Link href={'https://x.com/oalangomes'} target={'_blank'} rel={'noreferrer'}>
              <IconButton
                aria-label={'X'}
                variant={'ghost'}
                size={'lg'}
                icon={<FaTwitter size={'28px'} />}
                _hover={{ bg: 'orange.400', color: 'white' }}
                isRound
              />
            </Link>

            <Link
              href={'https://linkedin.com/in/oalangomes'}
              target={'_blank'}
              rel={'noreferrer'}>
              <IconButton
                aria-label={'LinkedIn'}
                variant={'ghost'}
                size={'lg'}
                icon={<FaLinkedin size={'28px'} />}
                _hover={{ bg: 'orange.400', color: 'white' }}
                isRound
              />
            </Link>
          </Stack>

          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius={'xl'}
            p={{ base: 6, md: 8 }}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow={'base'}>
            <VStack spacing={5}>
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
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{content.message}</FormLabel>
                <Textarea
                  name={'message'}
                  placeholder={content.messagePlaceholder}
                  rows={6}
                  resize={'none'}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </FormControl>

              <Button
                colorScheme={'orange'}
                width={'100%'}
                onClick={sendContactForm}>
                {content.send}
              </Button>
            </VStack>
          </Box>
        </Stack>
      </VStack>
    </>
  );
}
