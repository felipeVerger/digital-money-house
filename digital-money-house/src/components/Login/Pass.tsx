import React from 'react'
import { Input } from '../Input/InputStyle'
import { useFormContext } from 'react-hook-form'

const Pass = () => {

    const {register} = useFormContext()
    return (
        <>
            <h1>Ingresá tu contraseña</h1>
            <Input type='password' placeholder='Contraseña' {...register('password')}/>
            <button type='submit'>Ingresar</button>
        </>
    )
}

export default Pass
