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

export default function ContactComponent({ title, emailOnCopy }: ContactProps) {
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
        title: 'Message sent',
        value: 'Thanks! I will get back to you as soon as I can.',
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
        title: 'Could not send message',
        value: 'Please try again or contact me directly by email.',
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
        title: 'Missing information',
        value: 'Please fill in all fields.',
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
        title: 'Invalid email',
        value: 'Please enter a valid email address.',
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
              label={hasCopied ? 'Email copied!' : 'Copy email'}
              closeOnClick={false}
              hasArrow>
              <IconButton
                aria-label={'email'}
                variant={'ghost'}
                size={'lg'}
                fontSize={'3xl'}
                icon={<MdEmail />}
                _hover={{ bg: 'orange.400', color: 'white' }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>

            <Link
              href={'https://github.com/oalangomes'}
              target={'_blank'}
              rel={'noreferrer'}>
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

            <Link
              href={'https://x.com/oalangomes'}
              target={'_blank'}
              rel={'noreferrer'}>
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
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdPerson />} />
                  <Input
                    type={'text'}
                    name={'name'}
                    placeholder={'Your name'}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    ref={nameInputRef}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdEmail />} />
                  <Input
                    type={'email'}
                    name={'email'}
                    placeholder={'Your email'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    ref={emailInputRef}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name={'message'}
                  placeholder={'How can I help?'}
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
                Send message
              </Button>
            </VStack>
          </Box>
        </Stack>
      </VStack>
    </>
  );
}
