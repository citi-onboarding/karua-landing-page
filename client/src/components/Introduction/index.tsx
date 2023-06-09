/* Tip from @yasmws: If you find 
a problem with the react, like it has 2 versions
of it, you can just open the package.json and type ctrl + s and it disappears.
*/
import Karuau_BRANCA from "../../assets/karuau_BRANCA.png";
import { Intro, Video, BoxText, BoxImage, SameLevel, IntroBackground, IntroTitle, IntroTitleText, IntroText, IntroImg } from "./styles";
import VideoKarua from './videoKarua.mp4';

export const Introd: React.ElementType = ({}) => {
    return (
        <Intro>
            <IntroBackground>
                <Video src={VideoKarua} autoPlay loop muted style={{ width: "100%" }} />
            </IntroBackground>
            <IntroTitle> QUEM SOMOS? </IntroTitle>
            <SameLevel>
                <BoxText>
                    <IntroTitleText> Somos a Karuá! </IntroTitleText>
                    <IntroText>
                        O Projeto Karuá tem como objetivo principal aprimorar o processo de divulgação da arte pernambucana, otimizar a captação de recursos e assim incentivar com que os artesãos continuem produzindo suas obras e contribuindo assim para a arte pernambucana não morra devido falta de recursos (processo que infelizmente está acontecendo como visto no Alto do Moura em Caruaru/PE onde temos poucos jovens produzindo expressões artísticas devido baixo retorno financeiro para se sustentar. Iremos realizar este processo através de um marketplace, que utiliza os conceitos de omnichannel, pretendemos divulgar os artistas por meio de documentários e aulas de processo criativos, associados à venda das obras exibidas. Isso permitirá que toda expressão artística pernambucana consiga ser divulgada, respeitada e incentivada em todo o mundo, enquanto os recursos obtidos com as vendas no marketplace serão destinados para melhorar a qualidade de vida da população local e projetos de incentivo à promoção artística.
                    </IntroText>
                    <IntroText>
                        Este projeto que estamos executando tem como objetivo inicial ser  executado em Caruaru/PE e após o crescimento ir para outras cidades de Pernambuco como Sertânia, Bonito, Bezerros e demais cidades pernambucanas levando a arte de barro, couro, fibra, madeira e demais materiais para todo o mundo e assim realizar um processo de incentivo de permanência e crescimento da arte pernambucana retirando os intermediadores do processo de venda e trazendo a venda destas obras para os seus verdadeiros donos e assim fazendo com que todo o ciclo artístico evolua e se dinamize.
                    </IntroText>
                </BoxText>
                <BoxImage>
                    <IntroImg src={Karuau_BRANCA}/>
                </BoxImage>
            </SameLevel>
        </Intro>
    );
} 


