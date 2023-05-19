import { useRouter } from "next/router"
import { CheckImage, ContinueButton, Paragraph, SuccessContainer, Title } from "./SuccessfulStyle"
import { Check } from "@/assets"

const RegisterSuccessful = () => {
  const router = useRouter();

  return (
    <SuccessContainer>
      <Title>Registro Exitoso</Title>
      <CheckImage src={Check} alt="success-image" priority/>
      <Paragraph>Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión.</Paragraph>
      <ContinueButton onClick={() => router.push("/login")} type="button">Continuar</ContinueButton>
    </SuccessContainer>
  )
}

export default RegisterSuccessful