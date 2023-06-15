import React from "react";
import { HomeContainer } from './styles';
import { Footer, Carousel, NavBar } from "../../components";



export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Carousel />
            <Footer />
        </HomeContainer>
    );
}