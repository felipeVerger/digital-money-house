import React, { FC } from 'react'
import { Input } from '../Input/InputStyle'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/router'


interface Props {
    onValidate : () => void
}

const Email : FC<Props>= ({onValidate}) => {

    const { register } = useFormContext()
    const router = useRouter()

    return (
        <>
            <h1>¡Hola! Ingresá tu e-mail</h1>
            <Input type='text' placeholder='Correo electrónico' {...register('email')} />
            <button onClick={onValidate} type='button'>Continuar</button>
            <button onClick={()=> router.push('/register')}>Crear cuenta</button>
        </>
    )
}

export default Email
