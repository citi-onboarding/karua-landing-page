import { FacebookIcon, InstaIcon, YoutubeIcon } from "../../../assets"; 
import { FooterContainer, SocialMediaContainer, SocialMediaIcons } from "./style";


export const SocialMedia = () => {
    return (
        <FooterContainer>
            <a href="https://www.instagram.com/">
                <SocialMediaContainer>
                    <SocialMediaIcons>
                     <img src={InstaIcon} alt="Ícone do Instagram"/>
                     </SocialMediaIcons>
                </SocialMediaContainer>
            </a>
        
            <a href="https://www.facebook.com/">
                <SocialMediaContainer>
                    <SocialMediaIcons>
                        <img src={FacebookIcon} alt="Ícone do Facebook"/>
                    </SocialMediaIcons> 
                </SocialMediaContainer>
            </a>

            <a href="https://www.youtube.com/">
                <SocialMediaContainer>
                    <SocialMediaIcons>
                        <img src={YoutubeIcon} alt="Ícone do Youtube"/>
                    </SocialMediaIcons> 
                </SocialMediaContainer>
            </a>
        </FooterContainer>
    );
}
