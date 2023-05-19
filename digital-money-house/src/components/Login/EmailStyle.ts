import styled from "styled-components";
import { screenSize, themes } from "@/assets/theme";

interface Button {
  newAccount?: boolean;
}

interface Input {
  error: boolean;
}

export const Input = styled.input<Input>`
  font-family: "Open Sans";
  //width: 300px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: ${(props) =>
    props.error ? `1px solid ${themes.light.error}` : "1px solid #D2FFEC"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  &:focus {
    outline: none;
    border: ${(props) =>
      props.error
        ? `1px solid ${themes.light.error}`
        : `1px solid ${themes.light.secondary}`};
  }
  @media (min-width: ${screenSize.tablet}) {
    height: 64px;
  }
`;

export const Button = styled.button<Button>`
  font-family: "Open Sans";
  background-color: ${(props) =>
    props.newAccount ? themes.light.cuartiary : themes.light.secondary};
  border: ${(props) => (props.newAccount ? "none" : "1px solid #C1FD35")};
  //width: 300px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${themes.light.primary};
  transition: background-color 0.3s ease-in;
  cursor: pointer;
  &:disabled {
    background-color: ${themes.light.tertiary};
    border: none;
  }
  @media (min-width: ${screenSize.tablet}) {
    height: 64px;
  }
  /* ${(props) =>
    props.newAccount &&
    `
        background-color: ${themes.light.cuartiary},        
    `} */
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: ${themes.light.error};
  font-weight: 400;
  font-style: italic;
`;
