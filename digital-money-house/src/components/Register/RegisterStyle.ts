import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primary};
    overflow-y: auto;
`

export const RegisterBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media screen and (min-width: 768px){
        gap: 20px;
    }
`

export const Title = styled.h1`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: white;
`

export const Form = styled.form`
    max-width: 798px;
    width: 100%;
    height: 453px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 768px){
        gap: 40px;
    }
`

export const FormBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 768px){
        flex-direction: row;
        gap: 40px;
    }
`

export const Label = styled.label`
    width: 100%;
    /* flex: 1; */
`

export const InputS = styled.input`
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #D2FFEC;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-indent: 15px;
    font-family: 'Open Sans';
    color: ${props => props.theme.primary};
    font-weight: 400;
    font-size: 16px;
    line-height: 134.77%;
    @media screen and (min-width: 768px) {
        height: 64px;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    height: 50px;
    background: ${props => props.theme.secondary};
    border: 1px solid #C1FD35;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 2rem;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        height: 64px;
    }
`

export const PasswordAdvice = styled.p`
    margin-top: 0;
    margin-bottom: -10px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 15.2px;
    line-height: 140.62%;
    color: #EEEAEA;
    @media screen and (min-width: 768px) {
        margin-top: -15px;
        margin-bottom: -25px;
    }
`

export const ErrorMessage = styled.small`
    color: red;
    font-size: 14px;
`