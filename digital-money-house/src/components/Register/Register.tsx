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
import CryptoJS from "crypto-js";
import { toast } from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleVerficationCode = async () => {
    setLoading(true);
    const { email, firstname, lastname } = getValues();
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        code,
        firstname,
        lastname
      }),
    });
    let encryptedCode = CryptoJS.AES.encrypt(
      code,
      secretKey as string
    ).toString();
    let encryptedIsVerified = CryptoJS.AES.encrypt(
      "false",
      secretKey as string
    ).toString();

    localStorage.setItem("code", encryptedCode);
    localStorage.setItem("isVerified", encryptedIsVerified);

    if (response.status !== 200) {
      toast.error("Hubo un error al enviar el código de verificación, por favor intente nuevamente");
      return setLoading(false);
    }
    setLoading(false);
    return true;
  };

  const onSubmit = async () => {
    setLoading(true);
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
      })
      if (response.error) {
        console.log(response.error);
        toast.error(response.error);
        return setLoading(false);
      }
      localStorage.setItem("userId", response.user_id);
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
              error={Boolean(errors?.firstname)}
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
              error={Boolean(errors.lastname)}
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
              error={Boolean(errors.dni)}
              errorText={String(
                errors.dni?.message === undefined ? "" : errors.dni?.message
              )}
            />
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Correo electronico*"
              error={Boolean(errors.email)}
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
              error={Boolean(errors.password)}
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
              error={Boolean(errors.confirmPassword)}
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
              error={Boolean(errors.phone)}
              errorText={String(
                errors.phone?.message === undefined ? "" : errors.phone?.message
              )}
            />
            <SubmitButton type="submit">Crear cuenta</SubmitButton>
          </FormBlock>
        </Form>
        {loading && <Spinner />}
      </RegisterBody>
    </RegisterContainer>
  );
};

export default Register;
