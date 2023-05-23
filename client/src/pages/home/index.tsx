/* Tip from yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/

import React from "react";
import { HomeContainer } from './styles';
import { NavBar } from "../../components";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
        </HomeContainer>
    );
}