import styled from 'styled-components';
import { screenSize } from "@/assets/theme"

export const CardContainer = styled.section`
    align-self: flex-start;
    width: 50%;
    height: 50%;
    margin-top: 50px;
    margin-left: 5%;
    margin-bottom: 4rem;

    @media (min-width: ${screenSize.tablet}) {
        width: 35%;
    }

    @media (min-width: ${screenSize.laptop}) {
        width: 30%;
        margin-bottom: 0;
    }

    @media (min-width: ${screenSize.laptopL}) {
        margin-top: 70px;
        width:25%;
    }
`

export const Title = styled.h1`
    color:white;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;

    @media (min-width: ${screenSize.tablet}) {
        margin-bottom: 10px;
    }

    @media (min-width: ${screenSize.laptop}) {
        font-size: 2rem;
        line-height: 2.3rem;
    }

    @media (min-width: ${screenSize.laptopL}) {
        font-size: 2.3rem;
        line-height: 2.6rem;
    }
`

export const LineTitle = styled.div`
    width: 10%;
    height: 3px;
    background-color: ${(props => props.theme.secondary)};
    margin: 15px 0;

    @media (min-width: ${screenSize.tablet}) {
        display:none
    }
`

export const Subtitle = styled.p`
    color:${(props => props.theme.secondary)};
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 15ch;

    @media (min-width: ${screenSize.tablet}) {
        max-width: 100ch;
        font-size: 1.1rem;
    }

    @media (min-width: ${screenSize.laptop}) {
        font-size: 1.3rem;
    }

    @media (min-width: ${screenSize.laptopL}) {
        font-size: 1.5rem;
    }
`