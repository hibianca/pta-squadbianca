import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  CardContainer1,
  MinecraftText,
  RestoText,
  StyledImage,
  GridContainer,
} from "./style";
import { IconCardPartidas } from "../../assets";
import axios from "axios";
import { GetServerSideProps } from "next";

type Match = {
  id: number;
  date: string;
  hour: string;
  plataform: string;
  participants: number;
  vacancies: number;
  description: string;
  link: string;
};
interface CardProps {
  participants: number;
  matchs?: Match[];
}


const Card = ({ participants, matchs }: CardProps) => {
  const backgroundColor = Number(participants) < 25 ? "#D2EFFE" : "#D5C6FA";
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/GameDetails/${id}`);
  };

 

  return (
    <GridContainer>
      {matchs?.map((match) => (
        <CardContainer1
          style={{
            background: backgroundColor,
            textAlign: "left",
            marginTop: "80px",
          }}
          onClick={() => handleCardClick(match.id.toString())}
        >
          <MinecraftText>Jogo</MinecraftText>
          <RestoText>
            {match.date} | {match.hour}
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-28px",
                marginLeft: "150px",
              }}
            >
              {match.participants}
              {match.participants !== 1 ? "" : ""}
              <StyledImage src={IconCardPartidas.src} alt="icon" />
            </div>
          </RestoText>
        </CardContainer1>
      ))}
    </GridContainer>
  );
};

export default Card;
