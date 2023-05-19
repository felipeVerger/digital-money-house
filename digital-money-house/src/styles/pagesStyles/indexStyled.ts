import { screenSize } from '@/assets/theme';
import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 128px);
    width: 100vw;
    position: relative;
    overflow-y: auto;
`

export const ImgMobile = styled.img`
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: -2;
    object-fit: cover;
    object-position: 40% 50%;
`

export const ImgTabletDesktop = styled.img`
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: -2;
    object-fit: cover;
    object-position: left;

    @media (min-width: ${screenSize.laptop}) {
        object-position: left top;
    }
`

/**********Services**********/

export const ServicesContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-width: ${screenSize.laptop}) {
        flex-direction: row;
        justify-content: center;
        height: 50%;
    }
`

export const GreenBackground = styled.div`
    width: 100%;
    height: 90%;
    background-color: ${(props => props.theme.secondary)};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    position: absolute;
    bottom: 0;
    left:0;
    z-index: -1;

    @media (min-width: ${screenSize.tablet}) {
        height: 82%;
    }

    @media (min-width: ${screenSize.laptop}) {
        height: 80%;
    }

    @media (min-width: ${screenSize.laptopL}) {
        height: 65%;
    }
`