import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import { PageContainer, Main, TitleCreateGame, ContainerOne, Titles, ContainerTwo, ContainerThree } from './style';
import { TextField } from '@mui/material';
import { ButtonEntrar } from 'components/Buttons/style';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';
import axios from 'axios';

type Match = {
  id: number;
  date: string;
  hour: string;
  plataform: string;
  participants: string;
  vacancies: number;
  description: string;
  link: string;
};

const GameCreation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Match>({
    id: 0,
    date: '',
    hour: '',
    plataform: '',
    participants: '',
    vacancies: 0,
    description: '',
    link: ''
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event === null) {
      return;
    }
    setSelectedDate({
      ...selectedDate,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate({
      ...selectedDate,
      date: date?.format('DD/MM/YYYY') || ''
    });
  };

  const handleTimeChange = (time: Dayjs | null) => {
    setSelectedDate({
      ...selectedDate,
      hour: time?.format('HH:mm') || ''
    });
  };

  const handleSubmit = () => {
    const newMatch = {
      date: selectedDate.date,
      hour: selectedDate.hour,
      plataform: selectedDate.plataform,
      participants: parseInt(selectedDate.participants),
      vacancies: selectedDate.vacancies,
      description: selectedDate.description,
      link: selectedDate.link,
    };
    console.log(newMatch);
    axios.post('http://localhost:3001/match', newMatch)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PageContainer>
      <SideBar></SideBar>
      <Main>
        <TitleCreateGame>Criar Partida</TitleCreateGame>
        <ContainerOne>
          <ContainerTwo>
            <Titles> Nome do jogo</Titles>
            <TextField
              label="Jogo"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                width: "315px",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "9.8px 9.8px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "7px",
                  "& fieldset": {
                    borderColor: "#DEDEDE",
                  },
                },
              }}
            />
          </ContainerTwo>
          <ContainerTwo>
            <Titles> Plataforma de reunião da partida </Titles>
            <TextField
              label="Plataforma"
              variant="outlined"
              fullWidth
              margin="normal"
              name="plataform"
              onChange={handleChangeInput}
              sx={{
                width: "315px",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "9.8px 9.8px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "7px",
                  "& fieldset": {
                    borderColor: "#DEDEDE",
                  },
                },
              }}
            />
          </ContainerTwo>
        </ContainerOne>
        <ContainerOne>
          <ContainerTwo>
            <ContainerThree>
              <Titles> Data da Partida </Titles>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                <DatePicker
                  label="00/00/0000"
                  sx={{
                    width: "175px",
                    "& .MuiOutlinedInput-input": {
                      borderRadius: "7px",
                      backgroundColor: "#FFFFFF",
                      padding: "9.8px 9.8px",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "7px",
                      "& fieldset": {
                        borderColor: "#DEDEDE",
                      },
                    },
                    "& .MuiSvgIcon-root": {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                  name="date"
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </ContainerThree>
          </ContainerTwo>
          <ContainerTwo>
            <ContainerThree>
              <Titles> Horário da partida </Titles>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                <TimePicker
                  label="00:00"
                  sx={{
                    width: "175px",
                    "& .MuiOutlinedInput-input": {
                      borderRadius: "7px",
                      backgroundColor: "#FFFFFF",
                      padding: "9.8px 9.8px",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "7px",
                      "& fieldset": {
                        borderColor: "#DEDEDE",
                      },
                    },
                    "& .MuiSvgIcon-root": {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                  name="hour"
                  onChange={handleTimeChange}
                />
              </LocalizationProvider>
            </ContainerThree>
          </ContainerTwo>
          <ContainerTwo>
            <Titles> Quantidade de pessoas na partida </Titles>
            <TextField
              name="participants"
              onChange={handleChangeInput}
              label="Quantidade"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                width: "175px",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "9.8px 9.8px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "7px",
                  "& fieldset": {
                    borderColor: "#DEDEDE",
                  },
                },
              }}
            />
          </ContainerTwo>
        </ContainerOne>
        <ContainerOne>
          <ContainerTwo>
            <Titles> Link da partida </Titles>
            <TextField
              name="link"
              onChange={handleChangeInput}
              label="Link da partida"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                width: "651px",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "9.8px 9.8px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "7px",
                  "& fieldset": {
                    borderColor: "#DEDEDE",
                  },
                },
              }}
            />
          </ContainerTwo>
        </ContainerOne>
        <ContainerOne>
          <ContainerTwo>
            <Titles> Descrição da partida </Titles>
            <TextField
              name="description"
              onChange={handleChangeInput}
              label="Descrição da partida"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                width: "651px",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "7px",
                  backgroundColor: "#FFFFFF",
                  padding: "35px 35px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "7px",
                  "& fieldset": {
                    borderColor: "#DEDEDE",
                  },
                },
              }}
            />
          </ContainerTwo>
        </ContainerOne>
        <ButtonEntrar
          style={{
            position: "fixed",
            bottom: "14px",
            right: "14px",
            transform: 'scale(0.7)',
            transformOrigin: 'top left',
          }}
          onClick={() => handleSubmit()}
        >
          Criar Partida
        </ButtonEntrar>
      </Main>
    </PageContainer>
  );
};

export default GameCreation;
