import styled, { css } from 'styled-components';

import { AiFillHome, AiFillYoutube, AiFillFlag, AiFillQuestionCircle } from 'react-icons/ai';
import { GiSoccerBall, GiSoundWaves, GiLightBulb  } from 'react-icons/gi';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';
import { BsCollectionPlayFill, BsNewspaper } from 'react-icons/bs';
import { BiMask, BiPlusCircle, BiMusic } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { IoMdSettings } from 'react-icons/io';
import { RiFeedbackFill, RiFilmFill } from 'react-icons/ri';

export const Container = styled.div`
    margin-top: 4.0%;
    max-height: 100vh;
    max-width: 19%;
    display: block;
    top: 1px;
    right: 0;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    
    
    background: var(--leftside);

    ul {
        padding: 12px 0px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        
        
        li {
            padding: 0 24px;
            min-width: fit-content;
            min-height: 40px;

            display: flex;
            align-items: center;
            
            white-space: nowrap;

            

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-weight: 400;
                color: var(--primary);
                
                cursor: pointer;
            }

            footer {
                width: fit-content;
                display: flex;
                color: var(--secondary);
            }
        }
    }

    ul:nth-child(3) {
        padding: 16px 32px;
        width: fit-content;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        li {
          padding: 0;
          
          display: flex;
          flex-direction: column;
          
          p {
              font-size: 14px;
              font-weight: 400;
              letter-spacing: normal;
              line-height: 1.3rem;
              color: var(--primary);
              margin-bottom: 12px;

          }
        }
    }

    ul:nth-child(4), ul:nth-child(6) {
        padding: 8px 0;
        width: fit-content;

        li:nth-child(1) {
            width: fit-fit-content;
            padding: 8px 24px;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.007px;
            text-transform: uppercase;

            color: var(--secondary);
        }
    }
`;

const iconCSS = css`
    display: inline-flex;
    width: 20px;
    height: 20px;
    margin-right: 24px;
    fill: var(--icon);
`;


export const HomeIcon = styled(AiFillHome)`${iconCSS}`;

export const FireIcon = styled(FaFire)`${iconCSS}`;

export const SubscribeIcon = styled(BsCollectionPlayFill)`${iconCSS}`;

export const LibraryIcon = styled(MdVideoLibrary)`${iconCSS}`;

export const HistoryIcon = styled(MdHistory)`${iconCSS}`;

export const MusicIcon = styled(BiMusic)`${iconCSS}`;

export const BallIcon = styled(GiSoccerBall)`${iconCSS}`;

export const GamesIcon = styled(SiYoutubegaming)`${iconCSS}`;

export const FilmIcon = styled(RiFilmFill)`${iconCSS}`;

export const NewsIcon = styled(BsNewspaper)`${iconCSS}`;

export const StreamingIcon = styled(GiSoundWaves)`${iconCSS}`;

export const LightBulbIcon = styled(GiLightBulb)`${iconCSS}`;

export const YoutubeLogo = styled(AiFillYoutube)`${iconCSS}`;

export const VRIcon = styled(BiMask)`${iconCSS}`;

export const PlusIcon = styled(BiPlusCircle)`${iconCSS}`;

export const PremiumIcon = styled(AiFillYoutube)`${iconCSS}`;

export const SettingsIcon = styled(IoMdSettings)`${iconCSS}`;

export const FlagIcon = styled(AiFillFlag)`${iconCSS}`;

export const HelpIcon = styled(AiFillQuestionCircle)`${iconCSS}`;

export const FeedbackIcon = styled(RiFeedbackFill)`${iconCSS}`;