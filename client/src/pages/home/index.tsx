import React from "react";
import { HomeContainer } from './styles';
import { Footer, Carousel, NavBar, Introd,CarouselPage } from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Introd></Introd>
            <Carousel />
            <CarouselPage/>
            <Footer />
        </HomeContainer>
    )
}
