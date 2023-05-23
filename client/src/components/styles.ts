import styled from "styled-components";
import {karuauCOLORIDA} from "../assets";

export const NavegBar = styled.div`

    /* Rectangle 9 */
    position: absolute;
    width: 1920px;
    height: 200px;
    left: 0px;
    top: 0px;

    /* Amarelo 40% */
    background: rgba(245, 177, 19, 0.4);
    box-shadow: 0px 4px 90px rgba(0, 0, 0, 0.25);

    display: flex:
    gap: 100px;

    `;

export const TitleBar = styled.div`
    /* karuau-COLORIDA 2 */
    //background: url(karuauCOLORIDA);
    <img src={karuauCOLORIDA} alt="karuau-COLORIDA 2"/>
    `;

export const NavPages = styled.div`
    display: flex; 
    gap: 50px;
`

export const NavTag = styled.div`

    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: right;

    /* Marrom */
    color: #731803;
}

`