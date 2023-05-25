import React from "react";
import { Intro, IntroBackground, IntroTitle, IntroTitleText, IntroText, IntroImg } from './styles';
import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (
        <Intro>
                <IntroBackground></IntroBackground>
                <IntroTitle>QUEM SOMOS?</IntroTitle>
                <IntroTitleText>Somos a Karuá!</IntroTitleText>
                <IntroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </IntroText>
                <IntroImg></IntroImg>
        </Intro>
    );
}