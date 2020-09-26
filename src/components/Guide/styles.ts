import styled, { css } from 'styled-components';

import { AiFillHome, AiFillYoutube, AiFillFlag, AiFillQuestionCircle } from 'react-icons/ai';
import { GiSoccerBall, GiSoundWaves, GiLightBulb  } from 'react-icons/gi';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';
import { BsCollectionPlayFill, BsNewspaper } from 'react-icons/bs';
import { CgMusic, CgFilm } from 'react-icons/cg';
import { BiMask, BiPlusCircle } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { IoMdSettings } from 'react-icons/io';
import { RiFeedbackFill } from 'react-icons/ri';

export const Container = styled.div`
    margin-top: 4.0%;
    height: 100vh;
    max-width: 17.5%;
    display: flex;
    top: 1px;
    right: 0;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    
    background: var(--leftside);

    ul {
        padding: 12px 0;

        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        li {
            padding: 0 24px;
            width: 100%;
            min-height: 40px;

            display: flex;
            align-items: center;
            white-space: nowrap;

            cursor: pointer;

            div {
                font-size: 14px;
                font-weight: 400;
                color: var(--primary);
            }
        }
    }
`;

export const Wrapper = styled.div``;


const iconCSS = css`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    fill: var(--icon);
`;


export const HomeIcon = styled(AiFillHome)`${iconCSS}`;

export const FireIcon = styled(FaFire)`${iconCSS}`;

export const SubscribeIcon = styled(BsCollectionPlayFill)`${iconCSS}`;

export const LibraryIcon = styled(MdVideoLibrary)`${iconCSS}`;

export const HistoryIcon = styled(MdHistory)`${iconCSS}`;

export const MusicIcon = styled(CgMusic)``;

export const BallIcon = styled(GiSoccerBall)``;

export const GamesIcon = styled(SiYoutubegaming)``;

export const FilmIcon = styled(CgFilm)``;

export const NewsIcon = styled(BsNewspaper)``;

export const StreamingIcon = styled(GiSoundWaves)``;

export const LightBulbIcon = styled(GiLightBulb)``;

export const YoutubeLogo = styled(AiFillYoutube)``;

export const VRIcon = styled(BiMask)``;

export const PlusIcon = styled(BiPlusCircle)`${iconCSS}`;

export const PremiumIcon = styled(AiFillYoutube)`${iconCSS}`;

export const SettingsIcon = styled(IoMdSettings)`${iconCSS}`;

export const FlagIcon = styled(AiFillFlag)`${iconCSS}`;

export const HelpIcon = styled(AiFillQuestionCircle)`${iconCSS}`;

export const FeedbackIcon = styled(RiFeedbackFill)`${iconCSS}`;