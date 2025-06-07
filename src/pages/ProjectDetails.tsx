import {
  Container,
  Stack,
} from '@chakra-ui/react';
import { useParams } from "react-router-dom"



export default function ProjectDetails() {
  const {id} = useParams();

  return (
    <Container maxW={'2xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        py={{ base: 20, md: 14 }}>
          <div>
            {id}
          </div>

      </Stack>
    </Container>
  );
}
