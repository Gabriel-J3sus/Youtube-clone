import styled, { css } from 'styled-components';

import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { RiVideoAddFill } from 'react-icons/ri';
import { HiUserCircle } from 'react-icons/hi';
import { MdDehaze, MdApps, MdMoreVert } from 'react-icons/md';
import { FaKeyboard } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  height: 56px;
  width: 100%;
  position: fixed;

  background: var(--header);
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    > h2 {
        font-size: 25px;
        color: var(--primary);
    }
`;

const iconCSS = css`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const SelectionIcon = styled(MdDehaze)`
    height: 40px;
    width: 40px;
    fill: var(--primary);
    margin-right: 16px;
    padding: 8px;
    cursor: pointer;
    
`;

export const YoutubeLogo = styled(AiFillYoutube)`
    ${iconCSS}
    fill: var(--logo);
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    flex: 0 1 728px;
`;

export const InputContainer = styled.div`
    padding: 2px 6px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    background: var(--input-background);
    border: 1px solid var(--input-border);
    border-right: none;
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0);
    color: rgba(255, 255, 255, 0.88);
    vertical-align: top;
    width: 100%;
    
`;

export const Input = styled.input`
    border: none;
    padding: 0px;
    margin: 0px;
    height: auto;
    width: 100%;
    outline: none;
    

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 100%;
    flex: 1;
    color: var(--primary);

    ::placeholder {
        font-size: 16px;
    }
`;

export const KeyboardIcon = styled(FaKeyboard)`
    fill: var(--inactive-icon);
    width: 31px;
    height: 24px;
    padding: 0 6px;
    flex-shrink: 0;

    cursor: pointer;
    transition: 0.2s;

    &:hover,
    &:focus {
        fill: var(--secondary);
    }
`;

export const Button = styled.button`
    width: 80px;
    height: 30px;
    padding: 1px 6px;
    border: 1px solid var(--input-border);
    background: rgba(255, 255, 255, 0.08);
    border-radius: 0 2px 2px 0;
    margin: 0;
    cursor: pointer;    
`;

export const SearchIcon = styled(AiOutlineSearch)`
    width: 20px;
    height: 20px;
    fill: var(--inactive-icon);  

    transition: 0.2s;  

    &:hover, 
    &:focus {
        fill: var(--secondary);
    }
`;

export const RightSide = styled.div`
    min-width: 225px;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    button {
        width: 40px;
        height: 40px;
        padding: 8px;
        
        cursor: pointer;
    }

    button:nth-child(4) {
        display: flex;
        align-items: center;
        width: auto;
        height: 40px;
        padding: 5px 11px;

        text-transform: uppercase;
        
        border: 1px solid var(--login-button);

        > span {
            margin-left: 8px;
            color: var(--login-button);
            font-size: 14px;
            font-weight: 500;
            
            display: block;
           
        }
    }

`;

export const CreateIcon = styled(RiVideoAddFill)`
    ${iconCSS}
    fill: var(--primary);
`;

export const AppsIcon = styled(MdApps)`
    ${iconCSS}
    fill: var(--primary);
`;

export const ConfigIcon = styled(MdMoreVert)`
    ${iconCSS}
    fill: var(--primary);
`;

export const UserIcon = styled(HiUserCircle)`
    width: 30px;
    height: 30px;
    fill: var(--login-button);
    flex-shrink: 0;  
`;

