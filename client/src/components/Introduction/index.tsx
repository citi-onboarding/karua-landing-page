import  KaruaBRANCA  from "../../assets/karuaBRANCA.png";
import { Intro, Video, BoxText, BoxImage, SameLevel, IntroBackground, IntroTitle, IntroTitleText, IntroText, IntroImg, IntroContent } from "./styles";
import  videoKarua  from "../../assets/videoKarua.mp4";
import React from 'react' ;


export const Introd: React.ElementType = () => {
    return (
        <Intro>
            <IntroBackground>
                <Video src="https://www.shutterstock.com/shutterstock/videos/1098174247/preview/stock-footage-close-up-of-the-process-of-creating-the-clay-figure-of-woman-s-face-sculptor-modelling-sculpture.webm" autoPlay loop muted style={{ width: "100%" }} />
            </IntroBackground>
            <IntroContent>
                <IntroTitle> QUEM SOMOS? </IntroTitle>
                <SameLevel>
                    <BoxText>
                        <IntroTitleText> Somos a Karuá! </IntroTitleText>
                        <IntroText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </IntroText>
                        <IntroText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </IntroText>
                    </BoxText>
                    <BoxImage>
                        <IntroImg src={KaruaBRANCA}/>
                    </BoxImage>
                </SameLevel>
            </IntroContent>
        </Intro>
    );
} 


