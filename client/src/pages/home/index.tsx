import React from "react";
import { HomeContainer } from "../Home/styles";
import {CarouselPage} from "../../components/Carousel_front";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <CarouselPage/>
        </HomeContainer>
    );
}