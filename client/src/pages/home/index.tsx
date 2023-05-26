import React from "react";
import { HomeContainer } from './styles';
import { NavBar } from "../../components";
import { Footer } from "../../components/Footer";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Footer />
        </HomeContainer>
    );
}