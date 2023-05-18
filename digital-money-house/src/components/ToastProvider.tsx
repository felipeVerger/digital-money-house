import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

const ToastProvider: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
        <Toaster position='top-center' toastOptions={{ style: { marginTop: "4rem"}}} reverseOrder={false}/>
        {children}
    </>
  )
}

export default ToastProvider