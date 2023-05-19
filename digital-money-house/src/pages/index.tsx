import Head from "next/head";
import {
  MainContainer,
  ServicesContainer,
  CardTitle,
  GreenBackground,
  LineTitle,
  Subtitle,
  Title,
  ImgTabletDesktop,
  ImgMobile,
} from "./indexStyled";
import CardHome from "@/components/CardHome/CardHome";
import { data } from "../assets/dataLanding";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
          <ImgMobile src="/landingMobile.png" alt="image background" />
        ) : (
          <ImgTabletDesktop
            src="/landingDesktopTablet.png"
            alt="image background"
          />
        )}
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
