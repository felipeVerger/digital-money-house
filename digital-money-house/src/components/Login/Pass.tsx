import React, { useEffect } from 'react'
import { Button, ErrorMessage, Input } from './EmailStyle'
import { useFormContext } from 'react-hook-form'

const Pass = ({error} : any) => {

    const {register, resetField} = useFormContext()

    useEffect(()=> {
        resetField('password')
    },[])
    return (
        <>
            <h1>Ingresá tu contraseña</h1>
            <Input type='password' placeholder='Contraseña' {...register('password')}/>
            <Button type='submit'>Ingresar</Button>
            {error && <ErrorMessage>Contraseña incorrecta. Vuelve a intentarlo</ErrorMessage>}  
        </>
    )
}

export default Pass
