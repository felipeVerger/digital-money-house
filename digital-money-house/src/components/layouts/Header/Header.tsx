import { FC, useEffect, useState } from 'react'
import { HeaderBody, HeaderContainer, Logo, LogoContainer, HeaderBlock, LoginButton, RegisterButton } from './HeaderStyle'
import { LogoHome, LogoBlack } from '../../../assets'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/storeHooks'
import { getUserData } from '@/store/slices/userSlide'
import { getAccountData, getIsUserLooged } from '@/store/slices/accountSlice'

const Header: FC = () => {
  const [switchStyle, setSwitchStyle] = useState<boolean>(false);
  const actualPage: string = useRouter().pathname;


  const [verifiedUser,setVerifiedUser] = useState(false)


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
  }, [actualPage]);

  useEffect(() => {
    setVerifiedUser(true)
  },[])

  useEffect(() => {
    setVerifiedUser(true)
  },[])

  return (
    <HeaderContainer switchStyle={switchStyle}>
      <HeaderBody>
        <LogoContainer href="/">
          {switchStyle ? (
            <Logo src={LogoBlack} alt='logo' width={"86.31"} height={"33"} />
          ) : (
            <Logo src={LogoHome} alt='logo' width={"86.31"} height={"33"} />
          )}
        </LogoContainer>
        {verifiedUser &&         
        actualPage !== '/login' && actualPage !== "/register/successful" && actualPage !== "/verify" &&          
            <HeaderBlock>
              <LoginButton href="/login" switchStyle={switchStyle}>
                {switchStyle ? 'Iniciar sesión' : "Ingresar"}
              </LoginButton>
              {!switchStyle && (
                <RegisterButton href="/register">
                  Crear cuenta
                </RegisterButton>
              )}            
            </HeaderBlock> 
        }
      </HeaderBody>
    </HeaderContainer>
  );
};


export default Header
