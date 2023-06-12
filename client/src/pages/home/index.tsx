import React from "react";
import { HomeContainer } from "../home/styles";
import { Introd } from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Introd></Introd>
        </HomeContainer>
    );
}