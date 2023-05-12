
import { Input } from '@/components/Input/InputStyle'
import Email from '@/components/Login/Email'
import Pass from '@/components/Login/Pass'
import { getLogin } from '@/services/login/login.service'
import { LoginResponse } from '@/types/login.types'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

const LoginPage = () => {

    const methods = useForm({
      defaultValues : {
        email: '',
        password: JSON.stringify(Math.random())
      }
    })
    const {handleSubmit, getValues} = methods
    
    const [isValidEmail , setIsValidEmail] = useState<boolean>(false)
    const [responseValidation , setResponseValidation] = useState<LoginResponse>({})

    
    const validateData = async() => {
      const values = getValues()
      try{
        const response = await getLogin(values)
        setResponseValidation(response)
      }catch(e : any){
        console.log(e);        
      }                
    }
    
    const onSubmit = () => {
        validateData()     
        if (responseValidation.token) console.log('ok');
        if (responseValidation.error) console.log(responseValidation.error);         
    }

    useEffect(()=>{
      responseValidation.error === "invalid credentials" && setIsValidEmail(true)
    },[responseValidation.error])

  return (
    <main>        
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>  
            {!isValidEmail 
              ? <Email onValidate={validateData}/> 
              : <Pass/>
            }               
            </form>
        </FormProvider>
    </main>
  )
}

export default LoginPage
