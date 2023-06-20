import { FadeInLogo } from "./animatedsImage/FadeInLogo"
import { SmallAndBigLogo } from "./animatedsImage/SmallAndBigLogo"
import { ReducedMotionLogo } from "./animatedsImage/ReducedMotionLogo"
import { UpAndDownLogo } from "./animatedsImage/UpAndDownLogo"


import React from "react";
import {  Grid } from "@chakra-ui/react";

interface ImageGridProps {
  images: string[];
}

//Component to show animated images in page, with auto size and auto circular moviment

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {

  const numImages = images.length;
  const radius = 200; // circle
  const center = 250; // circle coordenates

  const calculatePosition = (index: number) => {
    const angle = (2 * Math.PI * index) / numImages; // radian Angle
    const x = center + radius * Math.cos(angle); //  X
    const y = center + radius * Math.sin(angle); //  Y

    return {
      translate_angle_x: x,
      translate_angle_y: y,
    };
  };

  const getRandomSize = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  

  return (
      <Grid
         templateColumns={`repeat(auto-fit, minmax(calc(120% / 8), 1fr))`}
         gap={3}
         paddingTop={5}
         paddingLeft="5%"
         paddingRight="5%"
         justifyItems="center"
         alignItems="center"
         width="100%"
      >
        
        
        {images.map((image, index) => {
        const { translate_angle_x, translate_angle_y } = calculatePosition(index);
        const size = getRandomSize(40, 80).toString().concat("px");
        const rotate = getRandomSize(40, 80).toString().concat("px");
        const sec = (index + 1.1).toString();

        return (
          <ReducedMotionLogo
            key={index}
            logo={image}
            translate_angle_x={translate_angle_x.toString()}
            translate_angle_y={translate_angle_y.toString()}
            angle_x="0"
            angle_y="0"
            rotate="0"
            sec={sec}
            size={size}
          />
        );
      })}
    
    
    </Grid>
  );
};

export default ImageGrid;

