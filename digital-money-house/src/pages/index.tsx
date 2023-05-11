import Head from 'next/head'
import {  BackgroundContainer, CardServices, CardServicesContainer, CardTitle, FrontContainer, GreenBackground, ImageBackground, LineTitle, MainContainer, ServiceDescription, ServiceLine, ServiceTitle, Subtitle, Title } from './indexStyled'

const Home = () => {
  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <BackgroundContainer>
          <ImageBackground src="/landingMobile.png" alt="image background"></ImageBackground>
        </BackgroundContainer>
        <FrontContainer>
          <CardTitle>
            <Title>De ahora en adelante, hacés más con tu dinero</Title>
            <LineTitle></LineTitle>
            <Subtitle>Tu nueva <b>billetera virtual</b></Subtitle>
          </CardTitle>
          <CardServicesContainer>
            <CardServices>
              <ServiceTitle>Transferí dinero</ServiceTitle>
              <ServiceLine></ServiceLine>
              <ServiceDescription>Desde Digital money House vas a poder transferir dinero a otras cuentas, asi como tambien recibir transferencias y nuclear tu capital en nuestra billetera virtual.</ServiceDescription>
            </CardServices>
            <CardServices>
              <ServiceTitle>Pago de servicios</ServiceTitle>
              <ServiceLine></ServiceLine>
              <ServiceDescription>Paga mensualmente los servicios en 3 simples clicks. Facil, rapido y conveniente. olvidate de las facturas en papel.</ServiceDescription>
            </CardServices>
            <GreenBackground></GreenBackground>
          </CardServicesContainer>
        </FrontContainer>
      </MainContainer>
    </>
  )
}

export default Home;