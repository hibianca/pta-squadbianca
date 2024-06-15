import React from "react";
import { ButtonAdd, ButtonEntrar, ButtonEntrarC, ButtonSair, Page } from "./style";

export default function ButtonsPage(){
    return(
        <Page>
        <ButtonEntrar> Entrar </ButtonEntrar> 
        <ButtonEntrar> Criar Partida </ButtonEntrar>  
        <ButtonSair> Sair </ButtonSair>
        <ButtonEntrarC> Entrar </ButtonEntrarC>
        <ButtonAdd> + </ButtonAdd>
        </Page>
    )

}