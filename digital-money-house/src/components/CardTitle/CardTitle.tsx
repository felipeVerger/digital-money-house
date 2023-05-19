import React, { FC } from 'react';
import { LineTitle, Subtitle, Title, CardContainer } from './CardTitleStyled';

interface CardTitleProps {
  title: string;
  subtitle: string;
}

const CardTitle: FC<CardTitleProps> = ({ title, subtitle }) => {
  const subtitleRegular = subtitle.slice(0, -17);
  const subtitleBold = subtitle.slice(9);
  
  return (
    <CardContainer>
      <Title>{title}</Title>
      <LineTitle />
      <Subtitle>
        {subtitleRegular}
        <b>{subtitleBold}</b>
      </Subtitle>
    </CardContainer>
  );
};

export default CardTitle;
