import React from 'react'
import { RegisterContainer, RegisterBody, Title, Form, FormBlock, SubmitButton, PasswordAdvice } from './RegisterStyle'
import { useFormContext } from 'react-hook-form'
import Input from './Input/Input';
import { registerUser } from '@/services/register/register.service';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const { handleSubmit, getValues, formState: { errors } } = useFormContext();

  const onSubmit = async () => {
    const { dni, email, firstname, lastname, password, phone } = getValues();
    
    try {
      const response = await registerUser({dni, email, firstname, lastname, password, phone});
      if (response.user_id && response.account_id) {
        router.push('/register/successful');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RegisterContainer>
      <RegisterBody>
        <Title>Crear cuenta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormBlock>
            <Input
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Nombre*"
              errorText={String(errors.firstname?.message === undefined ? "" : errors.firstname?.message)}
            />
            <Input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Apellido*"
              errorText={String(errors.lastname?.message === undefined ? "" : errors.lastname?.message)}
            />
          </FormBlock>
          <FormBlock>
            <Input 
                name="dni" 
                id="dni" 
                type="text" 
                placeholder="DNI*" 
                errorText={String(errors.dni?.message === undefined ? "" : errors.dni?.message)}
            />
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Correo electronico*"
              errorText={String(errors.email?.message === undefined ? "" : errors.email?.message)}
            />
          </FormBlock>
          <PasswordAdvice>Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número</PasswordAdvice>
          <FormBlock>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Contraseña*"
              errorText={String(errors.password?.message === undefined ? "" : errors.password?.message)}
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña*"
              errorText={String(errors.confirmPassword?.message === undefined ? "" : errors.confirmPassword?.message)}
            />
          </FormBlock>
          <FormBlock>
            <Input
              name="phone"
              id="phone"
              type="text"
              placeholder="Telefono*"
              errorText={String(errors.phone?.message === undefined ? "" : errors.phone?.message)}
            />
            <SubmitButton type="submit">Crear cuenta</SubmitButton>
          </FormBlock>
        </Form>
      </RegisterBody>
    </RegisterContainer>
  )
}

export default Register