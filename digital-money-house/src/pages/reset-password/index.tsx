import {
  ErrorMessage,
  Form,
  FormBlock,
  RegisterBody,
  RegisterContainer,
  SubmitButton,
  Title,
} from "@/components/Register/RegisterStyle";
import { Input } from "@/components/Login/EmailStyle";
import { useState } from "react";
import Head from "next/head";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [errors, setErrors] = useState({
    text: "",
    error: false,
  });

  const onSubmit = () => {
    setErrors({
      text: "",
      error: false,
    });
  };

  return (
   <>
    <Head>
      <title> Resetear contraseña - DMH </title>
    </Head>
    <RegisterContainer>
      <RegisterBody>
        <Title>Resetear contraseña</Title>
        <Form onSubmit={onSubmit}>
          <FormBlock>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.error}
              style={{
                width: "100%",
              }}
            />
          </FormBlock>
          <FormBlock>
            <Input
              type="password"
              placeholder="Repetir contraseña"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              error={errors.error}
              style={{
                width: "100%",
              }}
            />
          </FormBlock>
          {errors.error && (
            <ErrorMessage
              style={{
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              {errors.text}
            </ErrorMessage>
          )}

          <SubmitButton type="button" onClick={onSubmit}>
            Confirmar
          </SubmitButton>
        </Form>
      </RegisterBody>
    </RegisterContainer>
   </>
  );
};

export default ResetPassword;
