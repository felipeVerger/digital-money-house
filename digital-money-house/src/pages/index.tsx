import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { HomeData } from '@/types/home.types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MainContainer, ServicesContainer, GreenBackground, ImgTabletDesktop, ImgMobile } from './indexStyled';
import CardTitle from '@/components/CardTitle/CardTitle';
import CardHome from '@/components/CardHome/CardHome';
interface HomeProps {
  dataDb: HomeData;
}

const Home: NextPage<HomeProps> = ({ dataDb }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const {
    urlMobile,
    altMobile,
    urlDesktop,
    altDesktop,
    titulo,
    subtitulo,
    servicio1,
    descripcionServicio1,
    servicio2,
    descripcionServicio2,
  } = dataDb;

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        {isMobile ? (
          <ImgMobile src={urlMobile} alt={altMobile} />
        ) : (
          <ImgTabletDesktop src={urlDesktop} alt={altDesktop} />
        )}
        <CardTitle title={titulo} subtitle={subtitulo} />
        <ServicesContainer>
          <CardHome title={servicio1} description={descripcionServicio1} />
          <CardHome title={servicio2} description={descripcionServicio2} />
          <GreenBackground />
        </ServicesContainer>
      </MainContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/home-content');
  const dataDb = await response.json();

  return {
    props: {
      dataDb: dataDb.data[0],
    },
  };
};

export default Home;
