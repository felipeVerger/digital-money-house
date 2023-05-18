import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

const ToastProvider: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
        <Toaster position='bottom-center' toastOptions={{ style: { marginBottom: "4rem"}}} reverseOrder={false}/>
        {children}
    </>
  )
}

export default ToastProvider