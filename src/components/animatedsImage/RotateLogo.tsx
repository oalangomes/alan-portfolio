import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

interface PersonLogoProps extends ImageProps {
  logo: string;
}

export const RotateLogo = forwardRef<PersonLogoProps, "img">(
  ({ logo, ...props }, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
      ? undefined
      : `${spin} infinite 20s linear`;

    return (
      <chakra.img
        animation={animation}
        src={logo}
        ref={ref}
        {...props}
      />
    );
  }
);