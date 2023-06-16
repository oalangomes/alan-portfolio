import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }`;

interface FadeInLogoProps extends ImageProps {
  logo: string;
}

export const FadeInLogo = forwardRef<FadeInLogoProps, "img">(
  ({ logo, ...props }, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
      ? undefined
      : `${fadeIn} 1s ease-in`;

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
