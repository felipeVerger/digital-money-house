import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'


interface Input {
    type: string;
    name: string;
    placeholder: string
}

const InputB : FC<Input> = ({type, name, placeholder}) => {

    const {register} = useFormContext()

  return (
    <input type={type} placeholder={placeholder} {...register(name)}/>
  )
}

export default InputB
