import { ContainerPage, ImageText, OutputImage, CarouselStyled } from './style';
import React from "react";

export const Carousel = () => {
  const storyArray = [
    {
      image: 'https://picsum.photos/200/300',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/100',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/400',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/400',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/400',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
  ];

  return (
    <CarouselStyled>
      {storyArray.map((item, index) => (
        <ContainerPage key={index}>
          <OutputImage
            src={item.image}
            alt='Imagem gerada'
          />
          <ImageText>{item.image}</ImageText>
        </ContainerPage>
      ))}
    </CarouselStyled>
  );
};

