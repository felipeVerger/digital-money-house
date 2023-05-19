import { FC, useEffect, useState } from 'react'
import { HeaderBody, HeaderContainer, Logo, LogoContainer, HeaderBlock, LoginButton, RegisterButton, LogoutButton, WellcomeUser } from './HeaderStyle'
import { LogoHome, LogoBlack } from '../../../assets'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { getUserData, resetuser } from '@/store/slices/userSlide'
import { getAccountData, getIsUserLooged, resetAuthentication } from '@/store/slices/accountSlice'

const LoginHeader: FC = () => {
  const [switchStyle, setSwitchStyle] = useState<boolean>(false);
  const actualPage: string = useRouter().pathname;
  const userData = useAppSelector(getUserData)  

  const dispatch = useAppDispatch()
  const router = useRouter()
  const {firstname} = userData


  useEffect(() => {
    if (actualPage === '/login' || actualPage === '/register') {
      setSwitchStyle(true);
    } else {
      setSwitchStyle(false);
    }
  }, [actualPage])

  const handleLogout = () => {
    dispatch(resetAuthentication())
    dispatch(resetuser())
    router.push('/')
  }

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
        <HeaderBlock>          
           <WellcomeUser>Bienvenido {firstname}</WellcomeUser> 
           <LogoutButton onClick={() =>handleLogout()}>Cerrar sesión</LogoutButton> 
          </HeaderBlock>    
      </HeaderBody>
    </HeaderContainer>
  )
}


export default LoginHeader