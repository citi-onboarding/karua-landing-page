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
                    <a href="#SobreNós">Sobre Nós</a>
                </NavTag>
                <NavTag>
                    <a href="#Artistas">Artistas</a>
                </NavTag>
                <NavTag>
                    <a href="#Obras">Obras</a>
                </NavTag>
                <NavButton>
                    <NavTag>
                        <a href="#FaleConosco">Fale conosco</a>
                    </NavTag>
                </NavButton>
            </NavPages>   
        </NavegBar>
    );
}


