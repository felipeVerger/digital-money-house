import { ErrorMessage, Input } from "@/components/Login/EmailStyle";
import {
  Form,
  RegisterBody,
  RegisterContainer,
  SubmitButton,
  Title,
} from "@/components/Register/RegisterStyle";
import { useRouter } from "next/router";
import { useState } from "react";
import CryptoJS from "crypto-js";
import Head from "next/head";

const Verify = () => {
  const router = useRouter();
  const [codeInput, setCodeInput] = useState<string>("");

  const [errors, setErrors] = useState({
    text: "",
    error: false,
  });

  const onSubmit = () => {
    const encryptedCode = localStorage.getItem("code");
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    const decryptedCode = CryptoJS.AES.decrypt(
      encryptedCode as string,
      secretKey as string
    ).toString(CryptoJS.enc.Utf8);

    setErrors({
      text: "",
      error: false,
    });

    if (decryptedCode === codeInput) {
      let encryptedIsVerified = CryptoJS.AES.encrypt(
        "true",
        secretKey as string
      ).toString();

      localStorage.setItem("isVerified", encryptedIsVerified);
      router.push("/home");
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
    <>
      <Head>
        <title> Verificar - DMH </title>
      </Head>
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
    </>
  );
};

export default Verify;
