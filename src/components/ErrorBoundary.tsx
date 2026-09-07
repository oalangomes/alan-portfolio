import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info);
  }

  private reload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box minH={'70vh'} display={'grid'} placeItems={'center'}>
          <Container maxW={'3xl'} py={20}>
            <Stack spacing={5} align={'flex-start'}>
              <Text
                color={'orange.400'}
                fontWeight={800}
                fontSize={'xs'}
                textTransform={'uppercase'}
                letterSpacing={'0.16em'}>
                Runtime recovery
              </Text>
              <Heading fontSize={{ base: '3xl', md: '5xl' }}>
                Something went wrong.
              </Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                Algo deu errado ao renderizar esta página. Você pode recarregar o
                portfólio com segurança.
              </Text>
              <Button colorScheme={'orange'} rounded={'full'} onClick={this.reload}>
                Reload / Recarregar
              </Button>
            </Stack>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}
