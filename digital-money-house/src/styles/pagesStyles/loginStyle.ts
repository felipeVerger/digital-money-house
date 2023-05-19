import { screenSize, themes } from "@/assets/theme";
import styled from "styled-components";

export const LoginContainer = styled.main`
  background-color: ${themes.light.tertiary};
  width: 100vw;
  height: calc(100vh - 128px);
  display: flex;
  justify-content: center;
  background-color: #272727;
`;

export const LoginForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 170px;
  & h1 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 35px;
  }
  @media (min-width: ${screenSize.tablet}) {
    width: 360px;
  }
  /* input{
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: "color 9999s ease-out, background-color 9999s ease-out";
            transition-delay: 9999s; 
    }    
    } */
`;
