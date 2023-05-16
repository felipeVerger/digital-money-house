import { ErrorMessage, Input } from "@/components/Login/EmailStyle";
import {
  Form,
  FormBlock,
  RegisterBody,
  RegisterContainer,
  SubmitButton,
  Title,
} from "@/components/Register/RegisterStyle";
import { useRouter } from "next/router";
import { useState } from "react";

const Verify = () => {
  const router = useRouter();
  const [codeInput, setCodeInput] = useState<string>("");

  const [errors, setErrors] = useState({
    text: "",
    error: false,
  });

  const onSubmit = () => {
    const code = localStorage.getItem("code");
    setErrors({
      text: "",
      error: false,
    });

    if (code === codeInput) {
      localStorage.setItem("isVerified", "true");
      return router.push("/home");
    }
    setErrors({
      text: "El código ingresado es incorrecto",
      error: true,
    });

    if (codeInput.length === 0) {
      setErrors({
        text: "El campo no puede estar vacío",
        error: true,
      });
    }
  };
  return (
    <RegisterContainer>
      <RegisterBody>
        <Title>Ingresá el código de verificación</Title>
        <Form>
          <Input
            type="text"
            placeholder="Codigo de verificación"
            onChange={(e) => setCodeInput(e.target.value)}
            error={false}
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          />
          {errors.error && (
            <ErrorMessage
              style={{
                textAlign: "center",
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

export default Verify;
