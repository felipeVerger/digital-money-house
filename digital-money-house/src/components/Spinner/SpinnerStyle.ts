import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 0;
  z-index: 100;
`;

export const SpinnerBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const SpinnerS = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.secondary};
  border-top: 5px solid ${(props) => props.theme.primary};
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
