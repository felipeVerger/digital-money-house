import React, { FC } from 'react';
import { ServiceCard, ServiceDescription, ServiceLine, ServiceTitle } from './CardHomeStyled';

interface CardHomeProps {
  title: string;
  description: string;
}

const CardHome: FC<CardHomeProps> = ({ title, description }) => {
  return (
    <ServiceCard>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceLine/>
      <ServiceDescription>{description}</ServiceDescription>
    </ServiceCard>
  );
};

export default CardHome;
