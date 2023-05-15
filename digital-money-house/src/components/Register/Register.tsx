import React from "react";
import {
  RegisterContainer,
  RegisterBody,
  Title,
  Form,
  FormBlock,
  SubmitButton,
} from "./RegisterStyle";
import { useFormContext } from "react-hook-form";
import Input from "./Input/Input";
import { log } from "console";

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    const resp = await fetch("/api/sendVerificationCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        code,
      }),
    });

    if (resp.status === 200) {
      const data = await resp.json();
      localStorage.setItem("code", code.toString());
      localStorage.setItem("isVerified", "false");
      console.log(data);
    }
  };

  return (
    <RegisterContainer>
      <RegisterBody>
        <Title>Crear cuenta</Title>
        <Form onSubmit={handleFormSubmit}>
          <FormBlock>
            <Input
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Nombre*"
              errorText={String(
                errors.firstname?.message === undefined
                  ? ""
                  : errors.firstname?.message
              )}
            />
            <Input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Apellido*"
              errorText={String(
                errors.lastname?.message === undefined
                  ? ""
                  : errors.lastname?.message
              )}
            />
          </FormBlock>
          <FormBlock>
            <Input
              name="dni"
              id="dni"
              type="number"
              placeholder="DNI*"
              errorText={String(
                errors.dni?.message === undefined ? "" : errors.dni?.message
              )}
            />
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Correo electronico*"
              errorText={String(
                errors.email?.message === undefined ? "" : errors.email?.message
              )}
            />
          </FormBlock>
          <FormBlock>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Contraseña*"
              errorText={String(
                errors.password?.message === undefined
                  ? ""
                  : errors.password?.message
              )}
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña*"
              errorText={String(
                errors.confirmPassword?.message === undefined
                  ? ""
                  : errors.confirmPassword?.message
              )}
            />
          </FormBlock>
          <FormBlock>
            <Input
              name="phone"
              id="phone"
              type="text"
              placeholder="Telefono*"
              errorText={String(
                errors.phone?.message === undefined ? "" : errors.phone?.message
              )}
            />
            <SubmitButton type="submit">Crear cuenta</SubmitButton>
          </FormBlock>
        </Form>
      </RegisterBody>
    </RegisterContainer>
  );
};

export default Register;
