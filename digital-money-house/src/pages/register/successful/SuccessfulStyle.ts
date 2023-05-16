import Image from "next/image";
import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 34px;
  line-height: 140.62%;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

export const CheckImage = styled(Image)``;

export const Paragraph = styled.p`
  width: 250px;
  text-align: center;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 75%;
    line-height: 22px;
  }
  @media screen and (min-width: 1440px) {
    width: 40%;
  }
`;

export const ContinueButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid #c1fd35;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: black;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 360px;
    height: 64px;
  }
`;
