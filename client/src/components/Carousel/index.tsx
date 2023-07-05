import React from "react";
import {SameLevel, Title, Video, CarouselBox, CarouselSectionContainer,CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, Link, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import videoKarua2  from "../../assets/videoKarua2.mp4";
import {arte1, arte2, arte3} from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import { ClientRequest } from "http";


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
            <Link href={link} target="_blank">
                <VideoContainer> 
                    <Video src={video} autoPlay loop muted style={{width: "100%", height: "auto" }} />
                </VideoContainer>
            </Link>
            <ArtistComponent>
                <ArtistName> {artist} </ArtistName>
                <ArtistDescription> {description} </ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <Link href = {linkOne}>
                        <ProductBox>
                            <ProductImageBox><img src = {imageOne} /></ProductImageBox>
                            <InfoProductContainer>
                                <ProductName> {productOne} </ProductName>
                                <ProductDescription> {descriptionOne} </ProductDescription>
                            </InfoProductContainer>
                        </ProductBox>
                    </Link>
                    <Link href = {linkTwo}>
                        <ProductBox>
                            <ProductImageBox><img src = {imageTwo} /></ProductImageBox>
                            <InfoProductContainer>
                                <ProductName> {productTwo} </ProductName>
                                <ProductDescription> {descriptionTwo} </ProductDescription>
                            </InfoProductContainer>
                        </ProductBox>
                    </Link>
                    <Link href = {linkThree}>
                        <ProductBox>
                            <ProductImageBox><img src = {imageThree} /></ProductImageBox>
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
            <Title>Artistas</Title>
            <CarouselSection/>
        </SameLevel>
    );
}


export const CarouselSection: React.FC = ({slideResponsive}: SliderProps) => {

    const [card, setCard] = useState<CarouselProps[]>([]);
    const [cardsList, setCardsList] = useState<[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/artist')
        .then(res => {
            const dataFromGet = res.data;

            setCardsList(dataFromGet)

        })
        .catch(err => {console.log(err)})

    }, [])




    return (
        <CarouselBox>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
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

