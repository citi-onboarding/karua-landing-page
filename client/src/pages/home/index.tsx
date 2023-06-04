import React from "react";
import { HomeContainer } from './styles';
import { Footer, Carousel } from "../../components";
import { NavBar } from "../../components/Navbar";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Carousel />
            <Footer />
        </HomeContainer>
    );
}