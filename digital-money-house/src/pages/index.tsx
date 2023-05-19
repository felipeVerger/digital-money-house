import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { HomeData } from "@/types/home.types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  MainContainer,
  ServicesContainer,
  GreenBackground,
  ImgTabletDesktop,
  ImgMobile,
} from "./indexStyled";
import CardTitle from "@/components/CardTitle/CardTitle";
import CardHome from "@/components/CardHome/CardHome";
interface HomeProps {
  dataDb: HomeData[];
}

const Home: NextPage<HomeProps> = ({ dataDb }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [dataHome] = dataDb;

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
          <ImgMobile src={dataHome.urlMobile} alt={dataHome.altMobile} />
        ) : (
          <ImgTabletDesktop
            src={dataHome.urlDesktop}
            alt={dataHome.altDesktop}
          />
        )}
        <CardTitle title={dataHome.titulo} subtitle={dataHome.subtitulo} />
        <ServicesContainer>
          <CardHome
            title={dataHome.servicio1}
            description={dataHome.descripcionServicio1}
          />
          <CardHome
            title={dataHome.servicio2}
            description={dataHome.descripcionServicio2}
          />
          <GreenBackground />
        </ServicesContainer>
      </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://${context.req?.headers.host}/api/home-content`
      : `https://${context.req?.headers.host}/api/home-content`
  );
  const dataDb = await res.json();

  return {
    props: {
      dataDb,
    },
  };
};

export default Home;
