import { FC } from 'react'
import { HeaderBody, HeaderContainer, Logo, LogoContainer, HeaderBlock, LoginButton, RegisterButton } from './HeaderStyle'
import LogoImage from '../../../assets/logo.png'

const Header:FC = () => {
  return (
    <HeaderContainer>
        <HeaderBody>
            <LogoContainer href="/">
                <Logo src={LogoImage} alt='logo' width={"86.31"} height={"33"}/>
            </LogoContainer>
            <HeaderBlock>
              <LoginButton href="/login">
                Ingresar
              </LoginButton>
              <RegisterButton href="/register">
                Crear cuenta
              </RegisterButton>
            </HeaderBlock>
        </HeaderBody>
    </HeaderContainer>
  )
}

export default Header