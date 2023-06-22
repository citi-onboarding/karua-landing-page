import React from "react";
import {SameLevel, Title, Video, CarouselBox, CarouselSectionContainer,CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import videoKarua2  from "../../assets/videoKarua2.mp4";
import {arte1, arte2, arte3} from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



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
                <Video src={video} autoPlay loop muted style={{width: "100%", height: "auto" }} />
            </VideoContainer>
            <ArtistComponent>
                <ArtistName> {artist} </ArtistName>
                <ArtistDescription> {description} </ArtistDescription>
            </ArtistComponent>
            <ProductsComponents>
                    <ProductBox>
                        <ProductImageBox><img src = {imageOne} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productOne} </ProductName>
                            <ProductDescription> {descriptionOne} </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
                    <ProductBox>
                        <ProductImageBox><img src = {imageTwo} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productTwo} </ProductName>
                            <ProductDescription> {descriptionTwo} </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
                    <ProductBox>
                        <ProductImageBox><img src = {imageThree} /></ProductImageBox>
                        <InfoProductContainer>
                            <ProductName> {productThree} </ProductName>
                            <ProductDescription> {descriptionThree}  </ProductDescription>
                        </InfoProductContainer>
                    </ProductBox>
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


export const CarouselSection: React.FC = () => {

    const [link, setLink] = useState('');
    const [url, setUrl] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [productOne, setProductOne,] = useState('');
    const [descriptionOne, setDescriptionOne] = useState('');
    const [dimageOne, setImageOne] = useState('');
    const [linkOne, setLinkOne] = useState('');
    const [productTwo, setProductTwo,] = useState('');
    const [descriptionTwo, setDescriptionTwo] = useState('');
    const [dimageTwo, setImageTwo] = useState('');
    const [linkTwo, setLinkTwo] = useState('');
    const [productThree, setProductThree,] = useState('');
    const [descriptionThree, setDescriptionThree] = useState('');
    const [dimageThree, setImageThree] = useState('');
    const [linkThree, setLinkThree] = useState('');

    const [step, setStep] = useState<CarouselProps[]>([]);
    const [stepsList, setStepsList] = useState<[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/artist')
        .then(res => {
            const dataFromGet = res.data;

            setStepsList(dataFromGet)

        })
        .catch(err => {console.log(err)})

    }, [])

    return (
        <CarouselBox>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {stepsList.map((step) => (
                    <SwiperSlide key={step['id']}>
                        <Carousel
                            link={step["link"]}
                            video={step['url']}
                            artist={step['artist']}
                            description={step['description']}
                            productOne={step['productOne']}
                            descriptionOne={step['descriptionOne']}
                            imageOne={step['imageOne']}
                            linkOne={step['linkOne']}
                            productTwo={step['productTwo']}
                            descriptionTwo={step['descriptionTwo']}
                            imageTwo={step['imageTwo']}
                            linkTwo={step['linkTwo']}
                            productThree={step['productThree']}
                            descriptionThree={step['descriptionThree']}
                            imageThree={step['imageThree']}
                            linkThree={step['linkThree']}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselBox>
    );
}
