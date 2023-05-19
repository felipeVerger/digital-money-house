import { useRouter } from "next/router";
import { Check } from "@/assets";
import {
  CheckImage,
  ContinueButton,
  Paragraph,
  SuccessContainer,
} from "@/styles/pagesStyles/SuccessfulStyle";
import { Title } from "@/components/CardTitle/CardTitleStyled";
import Head from "next/head";

const ResetPasswordSuccessful = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Resetear contraseña - DMH</title>
      </Head>
      <SuccessContainer>
        <Title>¡Listo!</Title>
        <CheckImage src={Check} alt="success-image" priority />
        <Paragraph>
          Si se encuentra registrado, le enviaremos un correo electrónico con
          instrucciones para restablecer su contraseña.
        </Paragraph>
        <ContinueButton onClick={() => router.push("/login")} type="button">
          Continuar
        </ContinueButton>
      </SuccessContainer>
    </>
  );
};

export default ResetPasswordSuccessful;
