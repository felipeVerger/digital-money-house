import React from 'react'
import { RegisterContainer, RegisterBody, Title, Form, FormBlock, SubmitButton } from './RegisterStyle'
import { useFormContext } from 'react-hook-form'
import Input from './Input/Input';

const Register = () => {
  const { handleSubmit } = useFormContext();

  const onSubmit = async (data: any) => {
    console.log(data);
  }

  return (
    <RegisterContainer>
        <RegisterBody>
            <Title>Crear cuenta</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormBlock>
                    <Input name='firstname' id='firstname' type='text' placeholder='Nombre*'/>
                    <Input name='lastname' id='lastname' type='text' placeholder='Apellido*'/>
                </FormBlock>
                <FormBlock>
                    <Input name='dni' id='dni' type='number' placeholder='DNI*'/>
                    <Input name='email' id='email' type='email' placeholder='Correo electronico*'/>
                </FormBlock>
                <FormBlock>
                    <Input name='password' id='password' type='password' placeholder='Contraseña*'/>
                    <Input name='confirmarContraseña' id='confirmarContraseña' type='password' placeholder='Confirmar contraseña*'/>
                </FormBlock>
                <FormBlock>
                    <Input name='phone' id='phone' type='text' placeholder='Telefono*'/>
                    <SubmitButton type='submit'>Crear cuenta</SubmitButton>
                </FormBlock>
            </Form>
        </RegisterBody>
    </RegisterContainer>
  )
}

export default Register