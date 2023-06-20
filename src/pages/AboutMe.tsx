import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import MyAvatar from "../components/logos/MyAvatar"

export default function AboutMe() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={6}
      spacing={{ base: 16, md: 16 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'lg', md: '1xl' }}
        textAlign={'center'}
        maxW={'1x5'}>
        I am a technology professional with over 9 years of experience in the field. I started my career in 2012, working with .NET C#, and later transitioned to the Java platform, specifically Sap Hybris Commerce. Since 2015, I have been working with Hybris Commerce and have had the opportunity to collaborate with major clients such as Carrefour, Abril, Makro, Suzano, Marisa, and Claro, among others.

        Throughout my professional journey, I have also gained experience in solution architecture, which has provided me with a broader and more strategic perspective on projects. Additionally, since 2014, I have been using JavaScript in various contexts and enjoy programming in Node.js for fun. I have a genuine fascination for APIs and microservices, as I believe they are key to creating scalable and efficient solutions.

        It is important to mention that I have ADHD, which allows me to approach challenges in a unique way. I am highly motivated and have a true passion for overcoming obstacles and solving problems that others consider difficult. My dedication to finding innovative and effective solutions is driven by my motivation to embrace constant challenges.

        Furthermore, I would like to emphasize that I am currently recovering from depression. This experience has helped me develop resilience, empathy, and a greater appreciation for the balance between work and personal well-being.

        I am also a father in an atypical family, with two children with Autism Spectrum Disorder (ASD). This experience has taught me to embrace diversity, adapt to different needs, and work inclusively.

        I am seeking new professional challenges that allow me to apply my knowledge and technology expertise while contributing to solving complex problems. I am excited to be part of a dynamic and collaborative team where I can continue to learn and grow as a professional.

        I hope this helps create an effective professional summary. Remember to adapt the text to reflect your own personality and specific experiences.
      </Text>
      <Box textAlign={'center'}>


        <Text fontWeight={600}>Alan Gomes</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer
        </Text>
        <MyAvatar size={'lg'} />

      </Box>
    </Stack>
  );
}