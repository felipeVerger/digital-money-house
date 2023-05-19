import Email from "@/components/Login/Email";
import Pass from "@/components/Login/Pass";
import { getLogin } from "@/services/login/login.service";
import { LoginResponse } from "@/types/login.types";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/components/Login/features/login.schema";
import { LoginContainer, LoginForm } from "./loginStyle";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/hooks/storeHooks";
import { fetchAccountByToken } from "@/store/slices/accountSlice";
import { fetchUserData } from "@/store/slices/userSlide";

const LoginPage = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [error, setError] = useState({
    error: "",
    isError: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  
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
  const dispatch = useAppDispatch();

  const router = useRouter();

  const onSubmit = async () => {
    const { email, password } = getValues();
    try {
      const response = await getLogin({ email, password });
      setResponseValidation(response);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    responseValidation.token &&
      (localStorage.setItem("token", responseValidation.token),
      dispatch(fetchAccountByToken(responseValidation.token)),
      router.push("/"));
  }, [responseValidation]);

  return (
    <LoginContainer>
      <FormProvider {...methods}>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {!isValidEmail ? (
            <Email setIsValidEmail={setIsValidEmail} setError={setError} setLoading={setLoading} />
          ) : (
            <Pass error={responseValidation?.error} />
          )}
        </LoginForm>
      </FormProvider>
    </LoginContainer>
  );
};

export default LoginPage;
