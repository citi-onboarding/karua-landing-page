import React from "react";
import { HomeContainer } from "../Home/styles";
import {Carousel} from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Carousel />
        </HomeContainer>
    );
}