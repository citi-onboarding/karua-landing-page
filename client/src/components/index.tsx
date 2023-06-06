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
                <ArtistName> Yasmin </ArtistName>
                <ArtistDescription> Uma ceramista jovem e com grandes ambições. Suas obras são caracterizadas pelo uso de cores fortes e formatos não convencionais para o corpo das suas peças, com detalhes inesperados inspirados na fauna e flora locais.</ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <ProductBox>
                        <ProductImageBox> </ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> Uma mulher e suas conchas</ProductName>
                            <ProductDescription> É uma obra de grande valor agregado. É um retrato da própria ceramista e outras mulheres que ficam encantadas com a beleza das conchas.</ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
            </ProductsComponents>
        </CarouselContainer>
    );
}

