import  KaruaBRANCA  from "../../assets/karuaBRANCA.png";
import { Intro, Video, BoxText, BoxImage, SameLevel, IntroBackground, IntroTitle, IntroTitleText, IntroText, IntroImg, IntroContent } from "./styles";
import  videoKarua  from "../../assets/videoKarua.mp4";
import React from 'react' ;


export const Introd: React.ElementType = () => {
    return (
        <Intro>
            <IntroBackground>
                <Video src={videoKarua} autoPlay loop muted style={{ width: "100%" }} />
            </IntroBackground>
            <IntroContent>
                <IntroTitle id="SobreNós"> QUEM SOMOS? </IntroTitle>
                <SameLevel>
                    <BoxText>
                        <IntroTitleText> Somos a Karuá! </IntroTitleText>
                        <IntroText>
                            A Karuá é uma iniciativa dedicada a promover e preservar a arte dos pífanos pernambucanos. Nosso objetivo é valorizar e divulgar os artistas, buscamos conectar esses artistas com um público nacional e internacional, permitindo que suas obras sejam apreciadas e adquiridas em todo o mundo.
                        </IntroText>
                        <IntroText>
                            Além disso, estamos comprometidos em melhorar a qualidade de vida da comunidade local, direcionando os recursos obtidos com as vendas para projetos de incentivo à promoção artística e desenvolvimento da região. Somos apaixonados pela cultura pernambucana e acreditamos no poder transformador da arte.
                        </IntroText>
                        <IntroText>
                            Junte-se a nós nessa jornada de preservação e difusão da nossa rica cultura, ajudando a garantir que a arte pernambucana continue a brilhar e a encantar gerações futuras.
                        </IntroText>
                    </BoxText>
                    <BoxImage>
                        <IntroImg src={KaruaBRANCA} object-fit="contain"/>
                    </BoxImage>
                </SameLevel>
            </IntroContent>
        </Intro>
    );
} 


