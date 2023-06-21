import React from "react";
import {SameLevel, Title, Video, CarouselBox, CarouselSectionContainer,CarouselContainer, VideoContainer, ArtistComponent, ArtistName, ArtistDescription,
ProductsComponents, ProductBox, ProductImageBox, InfoProductContainer, ProductName, ProductDescription 
} from "./styles";
import videoKarua2  from "../../assets/videoKarua2.mp4";
import {arte1, arte2, arte3} from "../../assets";

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
    return(
        <CarouselBox>
            <CarouselSectionContainer>
                <Carousel 
                link={""}
                video={videoKarua2}
                artist={"Yasmin Soares"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                productOne={"Nome da Arte1"}
                descriptionOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageOne={arte1}
                linkOne={""}
                productTwo={"Nome da Arte2"}
                descriptionTwo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageTwo={arte2}
                linkTwo={""}
                productThree={"Nome da Arte3"}
                descriptionThree={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. "}
                imageThree={arte3}
                linkThree={""} 
                />
            </CarouselSectionContainer>

            {/* <CarouselSectionContainer>
                <Carousel 
                link={""}
                video={videoKarua2}
                artist={"Yasmin Soares"}
                description={"Essa é uma artista iniciante, mas com grande potencial. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                productOne={"Nome da Arte1"}
                descriptionOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageOne={arte1}
                linkOne={""}
                productTwo={"Nome da Arte2"}
                descriptionTwo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageTwo={arte2}
                linkTwo={""}
                productThree={"Nome da Arte3"}
                descriptionThree={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageThree={arte3}
                linkThree={""} 
                />
            </CarouselSectionContainer>

            <CarouselSectionContainer>
                <Carousel 
                link={""}
                video={videoKarua2}
                artist={"Yasmin Soares"}
                description={"Essa é uma artista iniciante, mas com grande potencial. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                productOne={"Nome da Arte1"}
                descriptionOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageOne={arte1}
                linkOne={""}
                productTwo={"Nome da Arte2"}
                descriptionTwo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageTwo={arte2}
                linkTwo={""}
                productThree={"Nome da Arte3"}
                descriptionThree={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                imageThree={arte3}
                linkThree={""} 
                />
            </CarouselSectionContainer> */}
        </CarouselBox>
    );
}
