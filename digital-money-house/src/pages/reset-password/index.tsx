import {
  ErrorMessage,
  Form,
  FormBlock,
  RegisterBody,
  RegisterContainer,
  SubmitButton,
} from "@/components/Register/RegisterStyle";
import { Title } from "../indexStyled";
import { Input } from "@/components/Login/EmailStyle";
import { useState } from "react";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

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

    if (password.length < 6) {
      setErrors({
        text: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    if (password !== passwordRepeat) {
      setErrors({
        text: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    if (password.length === 0 || passwordRepeat.length === 0) {
      setErrors({
        text: "El campo no puede estar vacío",
        error: true,
      });
      return;
    }

    

    if (token) {
      fetch(
        `https://digitalmoney.ctd.academy/api/users/${userId}/reset-password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: password,
          }),
        }
      );
    }
  };

  return (
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
            Continuar
          </SubmitButton>
        </Form>
      </RegisterBody>
    </RegisterContainer>
  );
};

export default ResetPassword;
