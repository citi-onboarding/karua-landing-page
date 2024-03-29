import React from "react";
import {SameLevel, Title, Video, CarouselBox, CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, Link, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';


SwiperCore.use([Navigation, Pagination]);

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

type SliderProps = {
    slideResponsive?: number;
}

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
            <Link target="_blank" href={link}>
                <VideoContainer> 
                    <Video src={video} autoPlay loop muted style={{width: "100%", height: "auto" }} />
                </VideoContainer>
            </Link>
            <ArtistComponent>
                <ArtistName> {artist} </ArtistName>
                <ArtistDescription> {description} </ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <Link target="_blank" href = {linkOne}>
                        <ProductBox>
                        <ProductImageBox><img src = {imageOne} style={{width: "135px", height: "135px"}}/></ProductImageBox>
                            <InfoProductContainer>
                                <ProductName> {productOne} </ProductName>
                                <ProductDescription> {descriptionOne} </ProductDescription>
                            </InfoProductContainer>
                        </ProductBox>
                    </Link>
                    <Link target="_blank" href = {linkTwo}>
                        <ProductBox>
                            <ProductImageBox><img src = {imageTwo} style={{width: "135px", height: "135px"}}/></ProductImageBox>
                            <InfoProductContainer>
                                <ProductName> {productTwo} </ProductName>
                                <ProductDescription> {descriptionTwo} </ProductDescription>
                            </InfoProductContainer>
                        </ProductBox>
                    </Link>
                    <Link target="_blank" href = {linkThree}>
                        <ProductBox>
                            <ProductImageBox><img src = {imageThree}style={{width: "135px", height: "135px"}}/></ProductImageBox>
                            <InfoProductContainer>
                                <ProductName> {productThree} </ProductName>
                                <ProductDescription> {descriptionThree}  </ProductDescription>
                            </InfoProductContainer>
                        </ProductBox>
                    </Link>
            </ProductsComponents>
        </CarouselContainer>
    );
}

export const CarouselPage: React.FC = () => {

    return(
        <SameLevel>
            <Title id="Artistas" >ARTISTAS</Title>
            <CarouselSection/>
        </SameLevel>
    );
}


export const CarouselSection: React.FC = ({slideResponsive}: SliderProps) => {

    const [cardsList, setCardsList] = useState<[]>([]);

    useEffect(() => {
        axios.get('https://api-karua.onrender.com/artist')
        .then(res => {
            const dataFromGet = res.data;

            setCardsList(dataFromGet)

        })
        .catch(err => {console.log(err)})

    }, [])

    var width = window. screen. width;

    if (width < 1100) {
        slideResponsive = 1;
    }

    else if (width > 1900) {
        slideResponsive = 3;
    }

    else {
        slideResponsive = 2;
    }


    return (
        <CarouselBox>
            <Swiper
                spaceBetween={50}
                slidesPerView={slideResponsive}
                navigation
                pagination={{ clickable: true }}

            >
                {cardsList.map((card) => (
                    <SwiperSlide key={card['id']}>
                        <Carousel
                            link={card["link"]}
                            video={card['url']}
                            artist={card['artist']}
                            description={card['description']}
                            productOne={card['productOne']}
                            descriptionOne={card['descriptionOne']}
                            imageOne={card['imageOne']}
                            linkOne={card['linkOne']}
                            productTwo={card['productTwo']}
                            descriptionTwo={card['descriptionTwo']}
                            imageTwo={card['imageTwo']}
                            linkTwo={card['linkTwo']}
                            productThree={card['productThree']}
                            descriptionThree={card['descriptionThree']}
                            imageThree={card['imageThree']}
                            linkThree={card['linkThree']}
                        />
                    </SwiperSlide> 
                ))}
            </Swiper>
        </CarouselBox>
    );
}

