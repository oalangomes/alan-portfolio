import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const scale = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

interface SmallAndBigLogoProps extends ImageProps {
  logo: string;
}

export const SmallAndBigLogo = forwardRef<SmallAndBigLogoProps, "img">(
  ({ logo, ...props }, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
      ? undefined
      : `${scale} 3s`;

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
