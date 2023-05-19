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
import { fetchAccountByToken } from "@/store/slices/accountSlice";
import { useAppDispatch } from "@/hooks/storeHooks";
import Head from "next/head";
import { ErrorMessage } from "@/components/Login/EmailStyle";

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
  const [responseValidation, setResponseValidation] = useState<LoginResponse>(
    {}
  );
  const { handleSubmit, getValues } = methods;
  const [error, setError] = useState({
    error: "",
    isError: false,
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

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
        localStorage.setItem("token", response.token);
        dispatch(fetchAccountByToken(response.token));
        return router.push("/verify");
      }
      if (response.token && decryptedIsVerified === "true") {
        localStorage.setItem("token", response.token);
        dispatch(fetchAccountByToken(response.token));
        return router.push("/dashboard");
      }
      setLoading(false);
    } catch (e: any) {
      setError({ error: "Hubo un error", isError: true });
      setLoading(false);
    }
  };
  // Logica de reset password
  const resetPassword = async () => {
    const { email } = getValues();
    setError({ error: "", isError: false });

    const token = Math.random().toString(36).substring(2, 15);
    if (!email) return setError({ error: "Ingrese un email", isError: true });
    setLoading(true);

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          token,
        }),
      });
      if (response.status === 200) {
        router.push("/login/reset-password-success");
      } else {
        setError({ error: "Hubo un error", isError: true });
      }
    } catch (e: any) {}
    setLoading(false);
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
                setError={setError}
              />
            ) : (
              <Pass error={responseValidation?.error} />
            )}
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              ¿Olvidaste tu contraseña?
              <span
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "20px",
                  marginLeft: "5px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={resetPassword}
              >
                Click aquí
              </span>
            </p>
            {error.isError && (
              <ErrorMessage style={{ marginTop: "10px" }}>
                {error.error}
              </ErrorMessage>
            )}
          </LoginForm>
        </FormProvider>
        {loading && <Spinner />}
      </LoginContainer>
    </>
  );
};

export default LoginPage;
