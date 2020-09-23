import styled, { css } from 'styled-components';

import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { RiVideoAddFill } from 'react-icons/ri';
import { HiUserCircle } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header);
  padding: 0px 16px;
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const iconCSS = css`
    width: 24px;
    height: 24px;
    fill: var(--primary);
`;

export const YoutubeLogo = styled(AiFillYoutube)`
    width: 24px;
    height: 24px;
    fill: var(--logo);
    background: white;
`;

export const RightSide = styled.div``;

export const SearchIcon = styled(AiOutlineSearch)`${iconCSS}`;

export const CreateIcon = styled(RiVideoAddFill)`${iconCSS}`;

export const UserIcon = styled(HiUserCircle)``;
