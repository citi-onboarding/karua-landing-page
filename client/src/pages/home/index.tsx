import React from "react";
import { HomeContainer } from "../Home/styles";
import {CarouselSection} from "../../components/Carousel_front";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <CarouselSection/>
        </HomeContainer>
    );
}