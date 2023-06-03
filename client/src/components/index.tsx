import React from "react";
import { useState, useEffect } from "react";
import { CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import axios from "axios";


export const Carousel = () => {
    return (
        <CarouselContainer>
            <VideoContainer> 
            </VideoContainer>
            <ArtistComponent>
                <ArtistName> </ArtistName>
                <ArtistDescription> </ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <ProductBox>
                        <ProductImageBox> </ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> </ProductName>
                            <ProductDescription> </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
            </ProductsComponents>
        </CarouselContainer>
    );
}

