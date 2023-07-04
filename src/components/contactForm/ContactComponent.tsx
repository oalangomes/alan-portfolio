
import {
    Button,
    Box,
    VStack,
    FormControl,
    FormLabel,
    IconButton,
    useColorModeValue,
    Input,
    InputGroup,
    InputLeftElement,
    useClipboard,
    Link,
    Heading,
    Stack,
    Textarea,
    Tooltip,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useState, useRef, useEffect, MouseEvent } from 'react';
//import { sendEmailValidationRequest } from './ValidateEmail.js';
import { AllAlerts } from '../alerts/AllAlerts';
import emailjs from '@emailjs/browser';

interface ContactProps {
    title: string,
    emailOnCopy: string
}

let allAlertsProp = {
    title: "",
    value: "",
    success: false,
    error: false,
    info: false,
    warning: false,
}

const validateEmail = (email: string) => {
    try {
        ///        const isValid = sendEmailValidationRequest(email);
        const isValid =  /\S+@\S+\.\S+/.test(email);
        return isValid;
    } catch (error) {
        console.error('Error validating email:', error);
        return false;
    }
};

export default function ContactComponent({ title, emailOnCopy }: ContactProps) {
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {hasCopied, onCopy } = useClipboard(emailOnCopy);
    const [allAlert, setAllAlert ] = useState(allAlertsProp);

    const sendContactForm = () => {

        if (!name || !email || !message) {
            allAlertsProp.title = "Error"
            allAlertsProp.value = 'Please, fill all fields'
            allAlertsProp.error = true
            allAlertsProp.success = false
            allAlertsProp.info = false
            allAlertsProp.warning = false
            setAllAlert(allAlertsProp)
            if (nameInputRef.current) {
                nameInputRef.current.focus();
            }
            
        }else if (validateEmail(email)) {

            console.log('Email is valid');
            sendEmail();
            setName("");
            setEmail("");
            setMessage("");
            allAlertsProp.title = "Email Sent"
            allAlertsProp.value = "Thanks for your Attention!"
            allAlertsProp.error = false
            allAlertsProp.success = true
            allAlertsProp.info = false
            allAlertsProp.warning = false
            setAllAlert(allAlertsProp);
        } else {

            if (emailInputRef.current) {
                emailInputRef.current.focus();
                
                allAlertsProp.title = "Invalid Email"
                allAlertsProp.value = "Please, put a correct email!"
                allAlertsProp.error =  true
                allAlertsProp.success = false
                allAlertsProp.info = false
                allAlertsProp.warning = false
                setAllAlert(allAlertsProp);
                setEmail('');
            }
        };
    };

    useEffect(() => emailjs.init("kroFCeiLjtWjh5MW4"), []);

    const sendEmail = () => {
    
        emailjs.send('service_7smwktj', 'template_lbiemcm', {
            name: name,
            email: email,
            message: message
        })
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

    return <>
        <AllAlerts
            title={allAlert.title}
            value={allAlert.value}
            successAlertPropActive={allAlert.success}
            errorAlertPropActive={allAlert.error}
            infoAlertPropActive={allAlert.info}
            warningAlertPropActive={allAlert.warning}
        />
        <VStack spacing={{ base: 4, md: 8, lg: 4 }}>
            <Heading
                fontSize={{
                    base: '2xl',
                    md: '5xl',
                }}>
                {title}
            </Heading>
            <Stack
                spacing={{ base: 4, md: 4, lg: 10 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                    align="center"
                    justify="space-around"
                    direction={{ base: 'row', md: 'column' }}>
                    <Tooltip
                        label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                        closeOnClick={false}
                        hasArrow>
                        <IconButton
                            aria-label="email"
                            variant="ghost"
                            size="lg"
                            fontSize="3xl"
                            icon={<MdEmail />}
                            _hover={{
                                bg: 'blue.500',
                                color: useColorModeValue('white', 'gray.700'),
                            }}
                            onClick={onCopy}
                            isRound />
                    </Tooltip>

                    <Link href="https://github.com/alangomessilva">
                        <IconButton
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            fontSize="3xl"
                            icon={<FaGithub />}
                            _hover={{
                                bg: 'blue.500',
                                color: useColorModeValue('white', 'gray.700'),
                            }}
                            isRound />
                    </Link>

                    <Link href="https://twitter.com/alan_gomessilva">
                        <IconButton
                            aria-label="twitter"
                            variant="ghost"
                            size="lg"
                            icon={<FaTwitter size="28px" />}
                            _hover={{
                                bg: 'blue.500',
                                color: useColorModeValue('white', 'gray.700'),
                            }}
                            isRound />
                    </Link>

                    <Link href="https://www.linkedin.com/in/alan-gomes-da-silva-92b715a3/">
                        <IconButton
                            aria-label="linkedin"
                            variant="ghost"
                            size="lg"
                            icon={<FaLinkedin size="28px" />}
                            _hover={{
                                bg: 'blue.500',
                                color: useColorModeValue('white', 'gray.700'),
                            }}
                            isRound />
                    </Link>
                </Stack>

                <Box
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="lg"
                    p={8}
                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                    shadow="base">
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>

                            <InputGroup>
                                <InputLeftElement children={<MdPerson />} />
                                <Input type="text" name="name"
                                    placeholder="Your Name"
                                    defaultValue={"email"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    ref={nameInputRef} />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>

                            <InputGroup>
                                <InputLeftElement children={<MdEmail />} />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    defaultValue={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    ref={emailInputRef} />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Message</FormLabel>

                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                resize="none"
                                defaultValue={"message"}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </FormControl>

                        <Button
                            colorScheme="blue"
                            bg="blue.400"
                            color="white"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            width="100%"
                            onClick={(e) => sendContactForm()}>
                            Send Message
                        </Button>
                    </VStack>
                </Box>
            </Stack>
        </VStack></>
}