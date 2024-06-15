import React from "react";
import { BordaFora } from "./style"; // Importe o BordaFora aqui
import { Card } from "./style";
import { IconButtonPerfil } from "assets";
import { Titulo } from "./style";

interface CardPartProps {
  estadoDaSala: string;
  participantes: string;
}

const CardPart: React.FC<CardPartProps> = ({ estadoDaSala, participantes }) => {
    const getBackgroundColor = (): string => {
        if (estadoDaSala === "1") {
            return "#D2EFFE"; // Com vaga
        } else if (estadoDaSala === "2" || participantes.split("/")[0] === participantes.split("/")[1]) {
            return "#D5C6FA"; // Sem vaga
        } else if (estadoDaSala === "3") {
            return "#D0F4E4"; // Sua partida
        } else if (estadoDaSala === "4") {
            return "#DEDEDE"; // Historico
        } else {
            return "#FFFFFF"; // Valor padrão
        }
    };

    // Extrai o número de participantes e o total de participantes da string "participantes"
    const [participantesAtuais, totalParticipantes] = participantes.split("/");

    // Cria uma lista de usuários com base no número de participantes atuais
    const usuarios = [];
    for (let i = 0; i < Number(participantesAtuais); i++) {
        usuarios.push(
            <div key={i} style={{ alignItems: "center", gap: "3px", display: "flex", justifyItems: "center", marginLeft: "24px", marginTop: i === 0 ? "40px" : "10px" }}>                
                <img 
                    src={IconButtonPerfil.src} 
                    alt="" 
                    style={{ height: "32px", width: "32px", filter: "invert(100%)" }}
                />
                <span style={{marginLeft:"3px", fontWeight:400, fontSize:"16px" }}>Usuário</span>  
            </div>
        );
    }

    return (
        <div style={{display:"flex"}}>
            <BordaFora> 
                <div style={{display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Titulo style={{marginLeft: "61px", marginTop:"37px"}}>Participantes</Titulo>  
                    <div style={{marginLeft: "116px", marginTop: "37px", fontWeight:"500", fontSize:"24px"}}>{participantes}</div>
                </div>
                <Card style={{ backgroundColor: getBackgroundColor(), marginLeft: "37px", marginTop: "10px" }}>
                    {usuarios}
                </Card>
            </BordaFora>
        </div>
    );
};

export default CardPart;