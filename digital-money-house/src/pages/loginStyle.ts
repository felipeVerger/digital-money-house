import { themes } from '@/assets/theme'
import styled from 'styled-components'

export const LoginContainer = styled.main`
    background-color : ${themes.light.tertiary};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #272727;    
`

export const LoginForm = styled.form `
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 170px;
    & h1 {
        font-size: 20px;
        font-weight: 700;
        color: #FFF;
        margin-bottom: 35px
    };
    input{
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: "color 9999s ease-out, background-color 9999s ease-out";
            transition-delay: 9999s; 
    }    
    }


`