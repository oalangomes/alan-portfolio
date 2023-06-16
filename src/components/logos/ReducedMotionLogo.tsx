import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react";



interface ReducedMotionLogoProps extends ImageProps {
  logo: string,
  translate_angle_x: string,
  translate_angle_y: string,
  angle_x: string,
  angle_y: string,
  sec: string,
  size: string
}



export const ReducedMotionLogo = forwardRef<ReducedMotionLogoProps, "img">(
  ({ logo, translate_angle_x, translate_angle_y, angle_x, angle_y, sec, size, ...props }, ref) => {

    const moveAndGrow = keyframes`
  0% {
    transform: translate(${translate_angle_x}%, ${translate_angle_y}%) scale(0);
  }
  100% {
    transform: translate(-0%, -0%) scale(1);
  }
`;

    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
      ? undefined
      : `${moveAndGrow} ${sec}s forwards`;

    return (
      <chakra.img
        animation={animation}
        src={logo}
        ref={ref}
        maxW={size}
    
        transform="translate(-50%, -50%)"
        {...props}
      />
    );
  }
);
