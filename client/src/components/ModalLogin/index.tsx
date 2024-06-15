import React from "react";
import { PageContainer, ModalLogin, LogoContainer, BoxModal, PartBox } from "./style";
import { LogoModalLogin } from "assets";


export default function ModalLoginPage(){
    return (
        
        <PageContainer>
            <ModalLogin>
                <LogoContainer>
                <img src={LogoModalLogin.src} style={{ width: "316px", height: "125.1" }}/>
                </LogoContainer>
                <PartBox>
                    <BoxModal>username</BoxModal>  
                    <BoxModal>e-mail</BoxModal>  
                </PartBox>
                
            </ModalLogin>
        </PageContainer>
    )
}