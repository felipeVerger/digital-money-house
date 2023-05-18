import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100vw;
    min-height: 64px;
    background-color: ${(props => props.theme.tertiary)};
    display: block;
`

export const FooterBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    
    @media screen and (min-width: 768px){
        justify-content: flex-start;
    }
`

export const FooterContent = styled.p`
    color: #C1FD35;
    font-family: 'Archivo';
    font-weight: 400;
    font-size: 14px;
    line-height: 140.62%;
`