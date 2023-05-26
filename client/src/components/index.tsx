/* Tip from @yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/
import Karuau_BRANCA from "../assets/karuau_BRANCA.png";
import { Intro, Video, IntroBackground, IntroTitle, IntroTitleText, IntroText, IntroImg } from "./styles";
import VideoKarua from './videoKarua.mp4';

export const Introd: React.ElementType = ({}) => {
    return (
        <Intro>
            <IntroBackground>
                <Video src={VideoKarua} autoPlay loop muted/>
            </IntroBackground>
            <IntroTitle>QUEM SOMOS?</IntroTitle>
            <IntroTitleText>Somos a Karuá!</IntroTitleText>
            <IntroText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </IntroText>
            <IntroImg src={Karuau_BRANCA}/>
        </Intro>
    );
}

/*
export const Introd: React.ElementType = ({}) => {
    return (
        <Intro>
            <IntroBackground>
                <video src={VideoKarua} autoPlay loop muted />
            </IntroBackground>
            <IntroTitle>QUEM SOMOS?</IntroTitle>
            <IntroTitleText>Somos a Karuá!</IntroTitleText>
            <IntroText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </IntroText>
            <IntroImg>
                src = {}
                alt = ''
            </IntroImg>
        </Intro>
    );
} 
*/


