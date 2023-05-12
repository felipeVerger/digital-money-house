import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
`

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: -10;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const FrontContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
/**********Card up title**********/

export const CardTitle = styled.div`
    align-self: flex-start;
    width: 50%;
    height: 50%;
    padding: 60px 0px 0px 0px;
    margin-left: 5%;
    /* word-wrap: break-word; */
    @media (min-width: 1440px) {
        width: 35%;
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
    font-size: 28px;
    font-weight: 400;

    &.bold  {
        font-weight: 700;
    }
`

/**********Card down services**********/

export const CardServicesContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const CardServices = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 90%;
    padding: 20px 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 1440px) {
        align-self: flex-start;
        margin-bottom: 0px;
        width: 35%;
        min-height: 75%;
        margin-left: 10px;
        padding: 30px 30px;
    }
`

export const ServiceTitle = styled.h3`
    color: ${(props => props.theme.primary)};
    font-size: 28px;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 34px;
    }
`

export const ServiceLine = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${(props => props.theme.secondary)};
    margin: 10px 0;
`

export const ServiceDescription = styled.p`
    color: ${(props => props.theme.primary)};
    font-size: 20px;
    font-weight: 500;
`

export const GreenBackground = styled.div`
    width: 100%;
    height: 45%;
    background-color: ${(props => props.theme.secondary)};
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    position: absolute;
    bottom: 0;
    left:0;
    z-index: -5;

    @media (min-width: 768px) {
        height: 45%;
    }

    @media (min-width: 1440px) {
        height: 35%;
    }
`