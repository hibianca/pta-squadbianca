import React, { useState } from "react";
import { useRouter } from 'next/router';
import SidebarTemplate from "../../components/Template";
import {
  BotaoDireito,
  ButtonHistoric,
  ButtonMatches,
  ButtonSearch,
  Center,
  CenterTwo,
  GridContainer,
  InfoContainer,
  NewContainer,
  OutilinedButton,
  PageContainer,
  PageContainerFour,
  PageContainerThree,
  PageContainerTwo,
  PageTitle,
  TitleMacthes,
} from "./style";
import { TextField } from "@mui/material";
import Card from "../../components/Card";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import "dayjs/locale/en-gb";
import { Dayjs } from "dayjs";

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

const Profile: React.FC = () => {
  const [showMatches, setShowMatches] = useState(true);
  const [name, setName] = useState("");
  const [matches, setMatches] = useState<Match[]>([]);
  const [vacancies, setVacancies] = useState<Match[]>([]);
  const [nextMatches, setNextMatches] = useState<Match[]>([]);
  const [historic, setHistoric] = useState<Match[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const router = useRouter();

  const hadleMatches = (matchs: Match[]) => {
    const historico = [] as Match[];
    const proximas = [] as Match[];
    const vagas = [] as Match[];
    matchs.map((match) => {
      if (match.date < new Date().toISOString()) {
        historico.push(match);
      } else {
        if (match.participants < match.vacancies) {
          vagas.push(match);
        } else {
          proximas.push(match);
        }
      }
    });
    if (selectedDate !== null) {
      const date = selectedDate.toISOString().split("T")[0];
      setHistoric(historico.filter((match) => match.date === date));
      setNextMatches(proximas.filter((match) => match.date === date));
      setVacancies(vagas.filter((match) => match.date === date));
      return;
    }
    setHistoric(historico);
    setNextMatches(proximas);
    setVacancies(vagas);
  };
  const handleDateChange = (date: Dayjs | null) => {
    if (date === null) return;
    const dateFormated = date?.format("DD/MM/YYYY").toString();
    const dateNew = new Date(dateFormated);
    setSelectedDate(dateNew);
  };
  const handeleGetMatches = async () => {
    await axios
      .get(`http://localhost:3001/user/getByUsername/${name}`)
      .then((response) => {
        console.log(response.data);
        setMatches(response.data);
        hadleMatches(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SidebarTemplate title="">
      <PageContainer>
        <NewContainer>
          <InfoContainer>
            <PageTitle>Qual o username?</PageTitle>
            <TextField
              label="Digite seu username"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ width: "324px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </InfoContainer>
          <ButtonSearch style={{ transformOrigin: 'top left' }} onClick={handeleGetMatches}>Buscar</ButtonSearch>
        </NewContainer>
      </PageContainer>
      <PageContainerThree>
        <PageContainerTwo>
          <ButtonMatches style={{ transformOrigin: 'top left' }} onClick={() => setShowMatches(true)}>
            Partidas
          </ButtonMatches>
          <ButtonHistoric style={{ transformOrigin: 'top left' }} onClick={() => setShowMatches(false)}>
            Histórico
          </ButtonHistoric>
        </PageContainerTwo>
      </PageContainerThree>
      <PageContainerFour>
        {showMatches ? (
          matches.length > 0 ? (
            <div>
              <TitleMacthes style={{ fontSize: '22.4px' }}>Partidas Abertas</TitleMacthes>
              <GridContainer style={{ gap: '11.2px' }}>
                <Card participants={10} matchs={nextMatches} />
              </GridContainer>
              <TitleMacthes style={{ fontSize: '22.4px' }}>Partidas Fechadas</TitleMacthes> 
              <GridContainer style={{ gap: '11.2px' }}>
                <Card participants={25} matchs={vacancies} />
              </GridContainer>
            </div>
          ) : (
            <div>
              <TitleMacthes style={{ fontSize: '22.4px' }}>Partidas abertas</TitleMacthes>
              <CenterTwo>
                <Center style={{ fontSize: '16.8px' }}>
                  Não há partidas abertas
                </Center>
              </CenterTwo>
              <TitleMacthes style={{ fontSize: '22.4px' }}>Partidas fechadas</TitleMacthes>
              <CenterTwo>
                <Center style={{ fontSize: '16.8px' }}>
                  Não há partidas fechadas
                </Center>
              </CenterTwo>
            </div>
          )
        ) : historic.length > 0 ? (
          <div>
            <TitleMacthes style={{ fontSize: '22.4px' }}>Histórico de Partidas</TitleMacthes>
            <GridContainer style={{ gap: '11.2px' }}>
              <Card participants={25} matchs={historic} />
            </GridContainer>
          </div>
        ) : (
          <div>
            <TitleMacthes style={{ fontSize: '22.4px' }}>Histórico de partidas</TitleMacthes>
            <CenterTwo>
              <Center style={{ fontSize: '16.8px' }}>
                Não há partidas
              </Center>
            </CenterTwo>
          </div>
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            label="dd/mm/aa"
            sx={{ width: "144.8px" }}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </PageContainerFour>

      <BotaoDireito style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }} onClick={() => router.push('/GameCreation')}>+</BotaoDireito>
    </SidebarTemplate>
  );
};

export default Profile;
