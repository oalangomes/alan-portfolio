import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  Box
} from '@chakra-ui/react';


import mypersonLogo from "../images/home/mypersonLogo.png"
import { SmallAndBigLogo } from "../components/animatedsImage/SmallAndBigLogo"

export default function Home() {
  return (
    <Container maxW={'1xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        py={{ base: 20, md: 14 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'75%'}>
          Portfolio {' '}
          <Text as={'span'} color={'orange.400'}>
            Alan Gomes
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'2xl'}>
          This page was create to showcase my Software Development and Architeture Skills.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={4}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            <Link href="/Projects">
              See Projects
            </Link>
          </Button>
          <Button rounded={'full'} px={6}>
            <Link href="/AboutMe">
              About Me
            </Link>
          </Button>
        </Stack>
        <Stack spacing={6} direction={'row'}>
          <Flex w={'full'}>
            <SmallAndBigLogo
              paddingLeft="5%"
              paddingRight="5%"
              justifyItems="center"
              alignItems="center"
              height="100%"
              width="100%" logo={mypersonLogo} />
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
}
;