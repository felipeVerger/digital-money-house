import { screenSize } from '@/assets/theme';
import styled from 'styled-components';

export const ServiceCard = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 90%;
    padding: 20px 20px;
    margin-bottom: 15px;

    @media (min-width: ${screenSize.tablet}) {
        width: 65%;
    }

    @media (min-width: ${screenSize.laptop}) {
        align-self: flex-start;
        margin-bottom: 0px;
        width: 40%;
        min-height: 65%;
        margin-left: 10px;
        padding: 30px 30px;
    }

    @media (min-width: ${screenSize.laptopL}) {
        width: 35%;
        min-height: 85%;
    }
`

export const ServiceTitle = styled.h3`
    color: ${(props => props.theme.primary)};
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.05rem;

    @media (min-width: ${screenSize.laptop}) {
        font-size: 1.6rem;
    }

    @media (min-width: ${screenSize.laptopL}) {
        font-size: 1.8rem;
    }
`

export const ServiceLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${(props => props.theme.secondary)};
    margin: 10px 0;
`

export const ServiceDescription = styled.p`
    color: ${(props => props.theme.primary)};
    font-size: 0.9rem;
    font-weight: 500;

    @media (min-width: ${screenSize.laptopL}) {
        font-size: 1.1rem;
    }
`