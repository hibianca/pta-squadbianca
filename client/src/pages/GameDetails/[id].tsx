import React, { useState } from 'react';
import SidebarTemplate from '../../components/Template';
import CardPart from '../../components/CardsParticipants';
import { Textopronto, Retangulo } from './style';
import { ButtonEntrar, ButtonSair } from 'components/Buttons/style';
import axios from 'axios';

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

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  console.log(id);

  try {
    const response = await axios.get(
      `http://localhost:3001/match/getById/${id}`
    );
    console.log(response.data);
    return {
      props: { match: response.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        match: {
          id: 1,
          date: "06/07/2023",
          hour: "19h",
          plataform: "Discord",
          participants: 1,
          vacancies: 25,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna.",
          link: "https://www.google.com",
        },
      },
    };
  }
}

const GameDetails = ({ match }: { match: Match }) => {
  const [estadoDaSala, setEstadoDaSala] = useState<string>("1");
  const participantes = `${match.participants}/${match.vacancies}`;

  const handleEntrarClick = () => {
    if (participantes.split("/")[0] !== participantes.split("/")[1]) {
      setEstadoDaSala("3");
    }
  };

  const handleSairClick = () => {
    setEstadoDaSala("1");
  };

  const isSalaCheia = participantes.split("/")[0] === participantes.split("/")[1];

  return (
    <SidebarTemplate title=''>
      <div style={{ fontFamily: "barlow", display: "flex" }}>
        <Textopronto>
          <div style={{ color: "#6800E4", width: '40.8px', height: '12px', marginTop: '48px', fontSize: '11.2px', fontWeight: '400', lineHeight: '12px' }}>Partida</div>
          <div style={{ color: '#000000', width: '94.4px', height: '28.8px', marginTop: '4px', fontSize: '22.4px', fontWeight: '500', lineHeight: '28.8px' }}>Minecraft</div>
          <div style={{ color: '#000000', width: '100px', height: '15.2px', marginTop: '16px', fontSize: '12.8px', fontWeight: '400', lineHeight: '15.36px', whiteSpace: "nowrap" }}>{`${match.date} | ${match.hour}`}</div>
          <div style={{ color: '#000000', width: '43.2px', height: '15.2px', marginTop: '8px', fontSize: '12.8px', fontWeight: '400', lineHeight: '15.36px' }}>{match.plataform}</div>
          <div style={{ color: '#000000', width: '60.8px', height: '15.2px', marginTop: '40px', fontSize: '12.8px', fontWeight: '500', lineHeight: '15.36px' }}>Descrição:</div>
          <Retangulo>
            <div style={{ color: '#000000', width: '451.2px', height: '68px', fontSize: '11.2px', fontWeight: '400', lineHeight: '13.44px', marginLeft: '12px', marginTop: '24px' }}>{match.description}</div>
          </Retangulo>
          <div style={{ color: '#000000', width: '28.8px', height: '15.2px', marginTop: '12px', fontSize: '12.8px', fontWeight: '500', lineHeight: '15.36px' }}>Link</div>
          <div style={{ color: '#000000', width: '451.2px', height: '13.6px', fontSize: '11.2px', fontWeight: '400', lineHeight: '13.44px', marginLeft: '12px', marginTop: '16px' }}>{match.link}</div>
          <div style={{ marginLeft: '160px', marginTop: '89.6px' }}>
            {estadoDaSala === "3" ? (
              <ButtonSair
                style={{ transform: 'scale(0.8)', transformOrigin: 'top left', color: '#F5F5F5', fontWeight: '700', fontSize: '16px', lineHeight: '19.2px', alignItems: 'center' }}
                onClick={handleSairClick}
              >
                Sair
              </ButtonSair>
            ) : (
              <ButtonEntrar
                style={{
                  transform: 'scale(0.8)', transformOrigin: 'top left', color: '#F5F5F5', fontWeight: '700', fontSize: '16px', lineHeight: '19.2px', alignItems: 'center',
                  backgroundColor: isSalaCheia ? '#DEDEDE' : undefined,
                  cursor: isSalaCheia ? 'not-allowed' : 'pointer'
                }}
                onClick={handleEntrarClick}
                disabled={isSalaCheia}
              >
                Entrar
              </ButtonEntrar>
            )}
          </div>
        </Textopronto>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'top left' }}>
          <CardPart estadoDaSala={estadoDaSala} participantes={participantes} />
        </div>
      </div>
    </SidebarTemplate>
  );
};

export default GameDetails;
