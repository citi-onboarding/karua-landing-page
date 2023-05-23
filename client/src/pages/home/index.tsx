/* Tip from yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/

import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <body>
            <nav>
                <h1>Karuá</h1>
                <div>
                    <li><a href="aboutus.asp">Sobre Nós</a></li>
                    <li><a href="artists.asp">Artistas</a></li>
                    <li><a href="works.asp">Obras</a></li>
                    <li><a href="contact.asp">Contato</a></li>
                </div>
            </nav>
            </body>
        </HomeContainer>
    );
}