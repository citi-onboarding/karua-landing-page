import React from "react";
import { HomeContainer } from "../Home/styles";
import { Introduction } from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Introduction></Introduction>
        </HomeContainer>
    );
}