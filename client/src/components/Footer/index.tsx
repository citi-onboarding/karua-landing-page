import { FacebookIcon, InstaIcon, YoutubeIcon, TikTokIcon } from "../../assets"; 
import { CenterContainer, FooterContainer, SocialMediaContainer, SocialMediaIcons } from "./style";
import React from 'react'


export const Footer = () => {
    return (
        <FooterContainer>
            <CenterContainer id="FaleConosco"> 
                <a target="_blank" href="https://www.instagram.com/karua.arte/">
                    <SocialMediaContainer>
                        <SocialMediaIcons>
                        <img src={InstaIcon} alt="Ícone do Instagram"/>
                        </SocialMediaIcons>
                    </SocialMediaContainer>
                </a>
            
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100089738528123">
                    <img src={FacebookIcon} alt="Ícone do Facebook"/>
                </a>

                <a target="_blank" href="https://www.youtube.com/channel/UC9ffPWlR4RJ4ymkfWg2DZzg">
                    <img src={YoutubeIcon} alt="Ícone do Youtube"/>
                </a>
                <a target="_blank" href="https://www.tiktok.com/@karua.arte">
                    <img src={TikTokIcon} alt="Ícone do Youtube"/>
                </a>
            </CenterContainer>
        </FooterContainer>
    );
}
