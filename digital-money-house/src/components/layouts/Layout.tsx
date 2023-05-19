import { FC, ReactNode, useEffect, useState } from 'react';
import { LayoutContainer, SectionContainer } from './LayoutStyle';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { fetchAccountByToken, getAccountData, getIsUserLooged } from '@/store/slices/accountSlice';
import { fetchUserData, getUserData } from '@/store/slices/userSlide';
import LoginHeader from './Header/LoginHeader';

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const dispatch = useAppDispatch()
  const { user_id } = useAppSelector(getAccountData)
  const userData = useAppSelector(getUserData)
  const isUserLooged = useAppSelector(getIsUserLooged)

  const [verifiedUser,setVerifiedUser] = useState(false)
  
  useEffect(()=>{   
      localStorage.getItem('token') && dispatch(fetchAccountByToken(localStorage.getItem('token') || ''))         
  },[])

  useEffect(() => {
    user_id && dispatch(fetchUserData({
      userId : user_id, 
      token : localStorage.getItem('token') || '' 
    }))
  }, [user_id])

  useEffect(() => {
    setVerifiedUser(true)
  },[])

  return (
    <LayoutContainer>      
      {verifiedUser && isUserLooged ? <LoginHeader /> : <Header/>}      
        <SectionContainer>
          {children}
        </SectionContainer>
        <Footer/>
    </LayoutContainer>
  )
}

export default Layout