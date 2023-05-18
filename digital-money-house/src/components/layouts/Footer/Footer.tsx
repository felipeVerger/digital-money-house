import { FC } from 'react'
import { FooterBody, FooterContainer, FooterContent } from './FooterStyle'

const Footer:FC = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <FooterContent>© 2022 Digital Money House</FooterContent>
      </FooterBody>
    </FooterContainer>
  )
}

export default Footer