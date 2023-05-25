/* Tip from @yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/
import {NavegBar, TitleImg, NavPages, NavTag, NavButton} from "./styles";
import { karuauCOLORIDA } from '../assets';


export const NavBar: React.FC = () => {
    return(
        <NavegBar>
            <TitleImg
                src = { karuauCOLORIDA }
                alt = ''
            />
            <NavPages>
                <NavTag>Sobre Nós</NavTag>
                <NavTag>Artistas</NavTag>
                <NavTag>Obras</NavTag>
                <NavButton>
                    <NavTag>Contato</NavTag>
                </NavButton>
            </NavPages>   
        </NavegBar>
    );
}


