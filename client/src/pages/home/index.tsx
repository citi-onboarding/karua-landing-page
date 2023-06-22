import React from "react";
import { HomeContainer } from './styles';
import { Footer, NavBar, Introd, CarouselPage } from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Introd></Introd>
            <CarouselPage/>
            <Footer />
        </HomeContainer>
    )
}
