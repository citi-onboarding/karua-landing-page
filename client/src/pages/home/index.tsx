import React from "react";
import { HomeContainer } from './styles';
import {Introd} from "../../components/Introduction";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Introd></Introd>
        </HomeContainer>
    )
}
