import styled from 'styled-components';

export const ServiceCard = styled.div`
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
    height: 2px;
    background-color: ${(props => props.theme.secondary)};
    margin: 10px 0;
`

export const ServiceDescription = styled.p`
    color: ${(props => props.theme.primary)};
    font-size: 20px;
    font-weight: 500;
`