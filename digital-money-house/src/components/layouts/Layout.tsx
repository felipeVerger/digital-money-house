import { FC, ReactNode, useEffect } from 'react';
import { LayoutContainer, SectionContainer } from './LayoutStyle';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { fetchAccountByToken, getAccountData } from '@/store/slices/accountSlice';
import { fetchUserData } from '@/store/slices/userSlide';

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const dispatch = useAppDispatch()
  const { user_id } = useAppSelector(getAccountData)
  
  useEffect(()=>{   
      localStorage.getItem('token') && dispatch(fetchAccountByToken(localStorage.getItem('token') || ''))         
  },[])

  useEffect(() => {
    user_id && dispatch(fetchUserData({
      userId : user_id, 
      token : localStorage.getItem('token') || '' 
    }))
  }, [user_id])
  
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