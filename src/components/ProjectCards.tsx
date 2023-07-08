import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  

  interface ProjectProp {
    id: number
    name: string,
    githubId: string,
    githubUrl: string,
    description: string,
    hashtags: string [],
    logo: string
}

  export default function ProjectCards(projectProp : ProjectProp) {
    return (
      <Center key={projectProp.id} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={projectProp.logo
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {projectProp.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {projectProp.githubId}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {projectProp.description}
              <Link href={projectProp.githubUrl} color={'blue.400'}>
                {projectProp.name}
              </Link>
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>

            {projectProp.hashtags.map((hashtag) => (
               <Badge
               key={hashtag}
               px={2}
               py={1}
               // eslint-disable-next-line react-hooks/rules-of-hooks
               bg={useColorModeValue('gray.50', 'gray.800')}
               fontWeight={'400'}>
               #{hashtag}
             </Badge>
            ))}
          
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                See More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }