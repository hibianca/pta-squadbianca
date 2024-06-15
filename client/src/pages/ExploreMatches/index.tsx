import React from 'react';
import SidebarTemplate from '../../components/Template';
import Card from '../../components/Card';
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

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `http://localhost:3001/match`
    );
    console.log(response.data);
    return {
      props: { match: response.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        match:[
          {
            id: 1,
            date: "06/07/2023",
            hour: "19h",
            plataform: "Discord",
            participants: 1,
            vacancies: 25,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna.",
            link: "https://www.google.com",
          },
        ]
      },
    };
  }
}

const ExploreMatches = ({ match }: { match: Match[] }) => {
  return (
    <SidebarTemplate title="">
      <p style={{
        color: '#000000',
        width: '198px',
        height: '32.4px',
        fontFamily: 'barlow',
        fontWeight: "400",
        fontSize: '25.2px',
        lineHeight: '32.4px',
        marginLeft: '40.5px',
        marginTop: '18px'
      }}>
        Próximas partidas
      </p>
      <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left' }}>
        <Card participants={1} matchs={match} />
      </div>
    </SidebarTemplate>
  );
};

export default ExploreMatches;
