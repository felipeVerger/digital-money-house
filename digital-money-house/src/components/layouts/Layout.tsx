import { FC, ReactNode } from 'react';
import { LayoutContainer, SectionContainer } from './LayoutStyle';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
        <Header/>
        <SectionContainer>
          {children}
        </SectionContainer>
        <Footer/>
    </LayoutContainer>
  )
}

export default Layout