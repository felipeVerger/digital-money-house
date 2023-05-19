import { FC, useEffect, useState } from "react";
import {
  HeaderBody,
  HeaderContainer,
  Logo,
  LogoContainer,
  HeaderBlock,
  LoginButton,
  RegisterButton,
} from "./HeaderStyle";
import { LogoHome, LogoBlack } from "../../../assets";
import { useRouter } from "next/router";

const Header: FC = () => {
  const [switchStyle, setSwitchStyle] = useState<boolean>(false);
  const actualPage: string = useRouter().pathname;
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    if (
      actualPage === "/login" ||
      actualPage === "/register" ||
      actualPage === "/register/successful" ||
      actualPage === "/verify"
    ) {
      setSwitchStyle(true);
    } else {
      setSwitchStyle(false);
    }
    localStorage.getItem("token") ? setIsLogged(true) : setIsLogged(false);
  }, [actualPage]);

  return (
    <HeaderContainer switchStyle={switchStyle}>
      <HeaderBody>
        <LogoContainer href="/">
          {switchStyle ? (
            <Logo src={LogoBlack} alt="logo" width={"86.31"} height={"33"} />
          ) : (
            <Logo src={LogoHome} alt="logo" width={"86.31"} height={"33"} />
          )}
        </LogoContainer>
        {actualPage !== "/login" &&
          actualPage !== "/register/successful" &&
          actualPage !== "/verify" && (
            <HeaderBlock>
              {isLogged ? (
                <LoginButton
                  href="/login"
                  switchStyle={switchStyle}
                  style={{ marginRight: "1rem" }}
                  onClick={() => localStorage.removeItem("token")}
                >
                  Cerrar sesión
                </LoginButton>
              ) : (
                <>
                  <LoginButton href="/login" switchStyle={switchStyle}>
                    {switchStyle ? "Iniciar sesión" : "Ingresar"}
                  </LoginButton>
                  {!switchStyle && (
                    <RegisterButton href="/register">
                      Crear cuenta
                    </RegisterButton>
                  )}
                </>
              )}
            </HeaderBlock>
          )}
      </HeaderBody>
    </HeaderContainer>
  );
};

export default Header;
