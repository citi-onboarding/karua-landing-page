import {NavegBar, TitleImg, NavPages, NavTag, NavButton} from "./styles";
import { karuaCOLORIDA } from '../../assets';
import React from "react";


export const NavBar: React.FC = () => {
    return(
        <NavegBar>
            <TitleImg
                src = { karuaCOLORIDA }
                alt = ''
            />
            <NavPages>
                <NavTag>
                    <a href="#AboutUs">Sobre Nós</a>
                </NavTag>
                <NavTag>
                    <a href="#Artists">Artistas</a>
                </NavTag>
                <NavTag>
                    <a href="#">Obras</a>
                </NavTag>
                <NavButton>
                    <NavTag>
                        <a href="#Contact">Contato</a>
                    </NavTag>
                </NavButton>
            </NavPages>   
        </NavegBar>
    );
}


