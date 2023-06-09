import React from "react";
import { HomeContainer } from "../Home/styles";
import {CarouselSection, TitleSection} from "../../components/Carousel_front";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <TitleSection/>
            <CarouselSection/>
        </HomeContainer>
    );
}