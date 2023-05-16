import React from "react";
import {
  RegisterContainer,
  RegisterBody,
  Title,
  Form,
  FormBlock,
  SubmitButton,
  PasswordAdvice,
  ErrorMessage,
} from "./RegisterStyle";
import { useFormContext } from "react-hook-form";
import Input from "./Input/Input";
import { registerUser } from "@/services/register/register.service";
import { useRouter } from "next/router";
import Spinner from "../Spinner/Spinner";

const Register = () => {
  const router = useRouter();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleVerficationCode = async () => {
    setLoading(true);
    setError("");
    const { email } = getValues();
    const code = Math.floor(100000 + Math.random() * 900000);

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        code,
      }),
    });
    localStorage.setItem("code", String(code));
    localStorage.setItem("isVerified", "false");

    if (response.status !== 200) {
      setError(
        "Hubo un error al enviar el código de verificación, por favor intente nuevamente"
      );
      return setLoading(false);
    }

    setLoading(false);

    return true;
  };

  const onSubmit = async () => {
    setLoading(true);
    setError("");
    const { dni, email, firstname, lastname, password, phone } = getValues();
    const verificationCode = await handleVerficationCode();
    if (verificationCode) {
      const response = await registerUser({
        dni,
        email,
        firstname,
        lastname,
        password,
        phone,
      });
      if (response.error) {
        setError(response.error?.message);
        return setLoading(false);
      }
      setLoading(false);
      return router.push("/register/successful");
    }
  };

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
              type="text"
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
          <PasswordAdvice>
            Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
            carácter especial, una mayúscula y un número)
          </PasswordAdvice>
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
          {error && (
            <ErrorMessage
              style={{
                textAlign: "center",
              }}
            >
              {error}
            </ErrorMessage>
          )}
        </Form>
        {loading && <Spinner />}
      </RegisterBody>
    </RegisterContainer>
  );
};

export default Register;
