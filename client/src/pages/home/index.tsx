import React from "react";
import { HomeContainer } from "../home/styles";
import {CarouselPage} from "../../components";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <CarouselPage/>
        </HomeContainer>
    );
}