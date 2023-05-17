import Email from "@/components/Login/Email";
import Pass from "@/components/Login/Pass";
import { getLogin } from "@/services/login/login.service";
import { LoginResponse } from "@/types/login.types";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/components/Login/features/login.schema";
import { LoginContainer, LoginForm } from "./loginStyle";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner/Spinner";
import CryptoJS from "crypto-js";
import Head from "next/head";

const LoginPage = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit, getValues } = methods;
  const [responseValidation, setResponseValidation] = useState<LoginResponse>(
    {}
  );

  const router = useRouter();

  const onSubmit = async () => {
    const { email, password } = getValues();

    try {
      setLoading(true);
      const encryptedIsVerified = localStorage.getItem("isVerified");
      const decryptedIsVerified = CryptoJS.AES.decrypt(
        encryptedIsVerified as string,
        secretKey as string
      ).toString(CryptoJS.enc.Utf8);

      const response = await getLogin({ email, password });
      setResponseValidation(response);

      if (response.token && decryptedIsVerified === "false") {
        return router.push("/verify");
      }
      if (response.token && decryptedIsVerified === "true") {
        return router.push("/dashboard");
      }

      setLoading(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title> Iniciar sesión - DMH </title>
      </Head>
      <LoginContainer>
        <FormProvider {...methods}>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            {!isValidEmail ? (
              <Email
                setIsValidEmail={setIsValidEmail}
                setLoading={setLoading}
              />
            ) : (
              <Pass error={responseValidation?.error} />
            )}
          </LoginForm>
        </FormProvider>
        {loading && <Spinner />}
      </LoginContainer>
    </>
  );
};

export default LoginPage;
