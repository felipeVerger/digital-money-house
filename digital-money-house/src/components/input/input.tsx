import React, { FC } from 'react'


interface Input {
    type: string
}

const Input : FC<Input> = ({type}) => {
  return (
    <input type={type} placeholder=''/>
  )
}

export default Input
