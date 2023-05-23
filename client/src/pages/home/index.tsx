import React from "react";
import { HomeContainer } from './styles';
import { SocialMedia } from "../components/socialMedia";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <SocialMedia />
        </HomeContainer>
    );
}