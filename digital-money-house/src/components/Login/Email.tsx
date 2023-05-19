import React, { FC, useEffect, useState } from "react";
import { Button, ErrorMessage, Input } from "./EmailStyle";
import { useFormContext, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/login.types";
import { getLogin } from "@/services/login/login.service";
import Spinner from "../Spinner/Spinner";

interface Props {
  //onValidate : () => void
  setIsValidEmail: (arg: boolean) => void;
  setLoading: (arg: boolean) => void;
}

const Email: FC<Props> = ({ setIsValidEmail, setLoading }) => {
  const { register, getValues } = useFormContext();
  const router = useRouter();
  const email = useWatch({ name: "email" });

  const [responseValidation, setResponseValidation] = useState<LoginResponse>(
    {}
  );

  const disabled = email.length === 0;
  const inputError = !!responseValidation?.error;

  const validateEmail = async () => {
    const { email } = getValues();
    setLoading(true);
    try {
      const response = await getLogin({
        email,
        password: JSON.stringify(Math.random()),
      });
      setResponseValidation(response);
      setLoading(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (responseValidation.error === "invalid credentials") {
      setResponseValidation({});
      setIsValidEmail(true);
    }
  }, [responseValidation.error]);

  return (
    <>
      <h1>¡Hola! Ingresá tu e-mail</h1>
      <Input
        type="text"
        placeholder="Correo electrónico"
        {...register("email")}
        error={inputError}
      />
      <Button onClick={validateEmail} type="button" disabled={disabled}>
        Continuar
      </Button>
      <Button onClick={() => router.push("/register")} newAccount>
        Crear cuenta
      </Button>
      {responseValidation?.error && (
        <ErrorMessage>Usuario inexistente. Vuelve a intentarlo</ErrorMessage>
      )}
    </>
  );
};

export default Email;
