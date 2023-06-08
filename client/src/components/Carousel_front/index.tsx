import React from "react";
import { useState, useEffect } from "react";
import {Title, CarouselSectionContainer,CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import { videoKarua2 } from "./videoKarua2.mp4";
import axios from "axios";
import { title } from "process";

type CarouselProps = {

    link: string;
    video: 	string;
    artist:	string;
    description:	string;
    productOne:	string;
    descriptionOne:	string;
    imageOne:	string;
    linkOne:	string;
    productTwo:	string;
    descriptionTwo:	string;
    imageTwo:	string;
    linkTwo:	string;
    productThree:	string;
    descriptionThree:	string;
    imageThree:	string;
    linkThree:	string;
};


export const Carousel = ({
    link,
    video, 
    artist,
    description,
    productOne,
    descriptionOne,
    imageOne,
    linkOne,
    productTwo,
    descriptionTwo,
    imageTwo,
    linkTwo,
    productThree,
    descriptionThree,
    imageThree,
    linkThree}: CarouselProps) => {
    return (
        <CarouselContainer>
            <VideoContainer> 
                {video}
            </VideoContainer>
            <ArtistComponent>
                <ArtistName> {artist} </ArtistName>
                <ArtistDescription> {description} </ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <ProductBox>
                        <ProductImageBox><img src = {linkOne} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productOne} </ProductName>
                            <ProductDescription> {descriptionOne} </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
                    <ProductBox>
                        <ProductImageBox><img src = {linkTwo} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productTwo} </ProductName>
                            <ProductDescription> {descriptionTwo} </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
                    <ProductBox>
                        <ProductImageBox><img src = {linkThree} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productThree} </ProductName>
                            <ProductDescription> {descriptionThree}  </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
            </ProductsComponents>
        </CarouselContainer>
    );
}

export const CarouselSection: React.FC = () => {
    return(
        <CarouselSectionContainer>
            <Title>Artistas</Title>
            <Carousel 
            link={""}
            video={"videoKarua2"}
            artist={""}
            description={""}
            productOne={""}
            descriptionOne={""}
            imageOne={""}
            linkOne={""}
            productTwo={""}
            descriptionTwo={""}
            imageTwo={""}
            linkTwo={""}
            productThree={""}
            descriptionThree={""}
            imageThree={""}
            linkThree={""} 
            />
        </CarouselSectionContainer>
    );
}
