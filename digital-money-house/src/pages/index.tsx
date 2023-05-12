import Head from 'next/head';
import { MainContainer, ImageBackground, ServicesContainer, CardTitle, GreenBackground, LineTitle, Subtitle, Title } from './indexStyled';
import CardHome from '@/components/CardHome/CardHome';
import { data } from '../assets/dataLanding';

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
        <ImageBackground src="/landingMobile.png" alt="image background" />
        <CardTitle>
          <Title>De ahora en adelante, hacés más con tu dinero</Title>
          <LineTitle />
          <Subtitle>
            Tu nueva <b>billetera virtual</b>
          </Subtitle>
        </CardTitle>
        <ServicesContainer>
          <CardHome
            title={data.service1Title}
            description={data.service1Description}
          />
          <CardHome
            title={data.service2Title}
            description={data.service2Description}
          />
          <GreenBackground />
        </ServicesContainer>
      </MainContainer>
    </>
  );
};

export default Home;
