import React, { FC, useEffect, useState } from 'react'
import { Button, ErrorMessage, Input } from './EmailStyle'
import { useFormContext, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { LoginResponse } from '@/types/login.types'
import { getLogin } from '@/services/login/login.service'


interface Props {
    //onValidate : () => void
    setIsValidEmail : (arg: boolean) => void
}

const Email : FC<Props>= ({setIsValidEmail}) => {

    const { register, getValues } = useFormContext()
    const router = useRouter()
    const email = useWatch({name :'email'})

    const [responseValidation , setResponseValidation] = useState<LoginResponse>({})

    const disabled = email.length === 0
  
       const validateEmail = async() => {
        const { email } = getValues()
        try{
            const response = await getLogin({ email, password : JSON.stringify(Math.random()) })
            setResponseValidation(response)
        }
        catch( e : any){
            console.log(e);            
        }
      }
      console.log(email.length);
      

      useEffect(()=>{
        if(responseValidation.error === "invalid credentials") {        
          setResponseValidation({})       
          setIsValidEmail(true); 
        }
      },[responseValidation.error])

    return (
        <>
            <h1>¡Hola! Ingresá tu e-mail</h1>
            <Input type='text' placeholder='Correo electrónico' {...register('email')} />
            <Button onClick={validateEmail} type='button' disabled={disabled}>Continuar</Button>
            <Button onClick={()=> router.push('/register')} newAccount>Crear cuenta</Button>
            {responseValidation?.error && <ErrorMessage>Usuario inexistente. Vuelve a intentarlo</ErrorMessage>}    
        </>
    )
}

export default Email
