/* Tip from @yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/
import {NavegBar, TitleBar, NavPages, NavTag} from "./styles";
export const NavBar: React.FC = () => {

    return(
        <NavegBar>
            <TitleBar>
                Karuá
            </TitleBar>
            <NavPages>
                <NavTag>Sobre Nós</NavTag>
                <NavTag>Artistas</NavTag>
                <NavTag>Obras</NavTag>
                <NavTag>Contato</NavTag>
            </NavPages>   
        </NavegBar>
    );
}


