import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

interface UpAndDownLogoProps extends ImageProps {
  logo: string;
}

export const UpAndDownLogo = forwardRef<UpAndDownLogoProps, "img">(
  ({ logo, ...props }, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion ? undefined : `${pulse} 2s infinite`;

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
