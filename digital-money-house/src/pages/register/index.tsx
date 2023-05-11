import Register from '@/components/Register/Register'
import Head from 'next/head'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

const RegisterPage = () => {

  const methods = useForm();

  return (
    <>
        <Head>
            <title>Registro</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <FormProvider {...methods}>
            <Register/>
        </FormProvider>
    </>
  )
}

export default RegisterPage