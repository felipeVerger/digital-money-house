import React, { useEffect, useState } from "react";
import { Button, ErrorMessage, Input } from "./EmailStyle";
import { useFormContext, useWatch } from "react-hook-form";

const Pass = ({ error }: any) => {
  const {
    register,
    resetField,
    formState: { errors },
  } = useFormContext();
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    resetField("password");
  }, []);

  useEffect(() => {
    if (error || errors?.password) setInputError(true);
  }, [error, errors]);


  return (
    <>
      <h1>Ingresá tu contraseña</h1>
      <Input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
        error={inputError}
      />
      <Button type="submit">Ingresar</Button>
      {errors?.password && (
        <ErrorMessage>{errors.password.message?.toString()}</ErrorMessage>
      )}
      {error && (
        <ErrorMessage>Contraseña incorrecta. Vuelve a intentarlo</ErrorMessage>
      )}
    </>
  );
};

export default Pass;
