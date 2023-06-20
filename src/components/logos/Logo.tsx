import { chakra } from '@chakra-ui/react';
import Alan from "../../images/header/Alan.png"


interface LogoProps {
  size: number
}

export default function Logo({ size }: LogoProps) {
  return (
    <>
      <chakra.img
        height={size}
        src={Alan}
      />
    </>
  );
}
