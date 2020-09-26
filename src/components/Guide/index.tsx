import React from 'react';

import LoginButton from '../LoginButton';
import { 
    Container,
    Wrapper,
    HomeIcon,
    FireIcon,
    SubscribeIcon,
    LibraryIcon,
    HistoryIcon,
    MusicIcon,
    BallIcon,
    GamesIcon,
    FilmIcon,
    NewsIcon,
    StreamingIcon,
    LightBulbIcon,
    YoutubeLogo,
    VRIcon,
    PlusIcon,
    SettingsIcon,
    FlagIcon,
    HelpIcon,
    FeedbackIcon,
 } from './styles';

const Guide: React.FC = () => {
  return (
      <Container>
          <Wrapper>
            <ul>
                <li className="active">
                    <div>
                        <HomeIcon />
                        <span> Início </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FireIcon />
                        <span> Em alta </span>
                    </div>
                </li>
                <li>
                    <div>
                        <SubscribeIcon />
                        <span> Inscrições </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <LibraryIcon />
                        <span> Biblioteca </span>
                    </div>
                </li>
                <li>
                    <div>
                        <HistoryIcon />
                        <span> Histórico </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <span>
                        Faça login para curtir vídeos, comentar e se inscrever.
                    </span>
                </li>
                <li>
                    <LoginButton />
                </li>
                
            </ul>
            <ul>
                <li>
                    <p> O melhor do youtube </p>
                </li>
                <li>
                    <div>
                        <MusicIcon />
                        <span> Música </span>
                    </div>
                </li>
                <li>
                    <div>
                        <BallIcon />
                        <span> Esportes </span>
                    </div>
                </li>
                <li>
                    <div>
                        <GamesIcon />
                        <span> Jogos </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FilmIcon />
                        <span> Filmes </span>
                    </div>
                </li>
                <li>
                    <div>
                        <NewsIcon />
                        <span> Notícias </span>
                    </div>
                </li>
                <li>
                    <div>
                        <StreamingIcon />
                        <span> Ao vivo </span>
                    </div>
                </li>
                <li>
                    <div>
                        <LightBulbIcon />
                        <span> Aprender </span>
                    </div>
                </li>
                <li>
                    <div>
                        <YoutubeLogo />
                        <span> Vídeos do momento </span>
                    </div>
                </li>
                <li>
                    <div>
                        <VRIcon />
                        <span> Vídeo em 360º </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <PlusIcon />
                        <span> Procurar canais </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <p> Mais do Youtube </p>
                </li>
                <li>
                    <div>
                        <YoutubeLogo />
                        <span> Youtube Premium </span>
                    </div>
                </li>
                <li>
                    <div>
                        <StreamingIcon />
                        <span> Ao vivo </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <SettingsIcon />
                        <span> Configurações </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FlagIcon />
                        <span> Histórico de denúncias </span>
                    </div>
                    </li>
                <li>
                    <div>
                        <HelpIcon />
                        <span> Ajuda </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FeedbackIcon />
                        <span> Enviar feedback </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <footer>
                        <p> SobreImprensaDireitos autoraisEntre em contatoCriadores de conteúdoPublicidadeDesenvolvedores </p>
                        <p> TermosPrivacidadePolítica e SegurançaComo funciona o YouTubeTestar os novos recursos </p>
                        <p>© 2020 Jesus company</p>
                    </footer>
                </li>
                <li></li>
                <li></li>
            </ul>
          </Wrapper>
      </Container>
  );
}

export default Guide;