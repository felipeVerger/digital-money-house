import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 64px;
    background-color: ${(props => props.theme.tertiary)};
`

export const FooterBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
`

export const FooterContent = styled.p`
    color: #C1FD35;
    font-family: 'Archivo';
    font-weight: 400;
    font-size: 14px;
    line-height: 140.62%;
`