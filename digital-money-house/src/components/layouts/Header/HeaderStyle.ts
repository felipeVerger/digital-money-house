import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 64px;
    background-color: ${(props => props.theme.primary)};
`;

export const HeaderBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: clip;
    padding: 1rem;
`;

export const LogoContainer = styled(Link)`
    text-decoration: none;
`

export const Logo = styled(Image)``

export const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LoginButton = styled(Link)`
    width: 99px;
    height: 40px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    background-color: transparent;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;
    display: grid;
    place-content: center;
`

export const RegisterButton = styled(Link)`
    width: 131px;
    height: 40px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    color: black;
    background-color: ${props => props.theme.secondary};
    border-radius: 5px;
    display: grid;
    place-content: center;
`