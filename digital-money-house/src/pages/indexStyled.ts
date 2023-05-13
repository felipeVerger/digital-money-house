import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    position: relative;
    overflow-y: auto;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: -10;
    object-fit: cover;
    object-position: 50% 45%;
`

/**********Card title**********/

export const CardTitle = styled.section`
    align-self: flex-start;
    width: 55%;
    height: 50%;
    padding-top: 60px;
    margin-left: 5%;
    margin-bottom: 12rem;

    @media (min-width: 1440px) {
        width: 35%;
        margin-bottom: 0;
    }
    @media (min-width: 580px) {
        margin-bottom: 4rem;
    }
`

export const Title = styled.h1`
    color:white;
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;

    @media (min-width: 768px) {
        font-size: 42px;
        line-height: 48px;
        margin-bottom: 10px;
    }
`

export const LineTitle = styled.div`
    width: 15%;
    height: 6px;
    background-color: ${(props => props.theme.secondary)};
    margin: 20px 0;

    @media (min-width: 768px) {
        display:none
    }
`

export const Subtitle = styled.p`
    color:${(props => props.theme.secondary)};
    font-size: 26px;
    font-weight: 400;
`

/**********Services**********/

export const ServicesContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: center;
        height: 50%;
    }
`

export const GreenBackground = styled.div`
    width: 100%;
    height: 90%;
    background-color: ${(props => props.theme.secondary)};
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    position: absolute;
    bottom: 0;
    left:0;
    z-index: -5;

    @media (min-width: 768px) {
        height: 87%;
    }

    @media (min-width: 1440px) {
        height: 80%;
    }
`