import { FacebookIcon, InstaIcon, YoutubeIcon } from "../../../assets"; 
import { CenterContainer, FooterContainer, SocialMediaContainer, SocialMediaIcons } from "./style";


export const Footer = () => {
    return (
        <FooterContainer>
            <CenterContainer> 
                <a href="https://www.instagram.com/">
                    <SocialMediaContainer>
                        <SocialMediaIcons>
                        <img src={InstaIcon} alt="Ícone do Instagram"/>
                        </SocialMediaIcons>
                    </SocialMediaContainer>
                </a>
            
                <a href="https://www.facebook.com/">
                    <img src={FacebookIcon} alt="Ícone do Facebook"/>
                </a>

                <a href="https://www.youtube.com/">
                    <img src={YoutubeIcon} alt="Ícone do Youtube"/>
                </a>
            </CenterContainer>
        </FooterContainer>
    );
}
