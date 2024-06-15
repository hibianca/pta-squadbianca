import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;    
    height: 100vh;          
    background-color: #1E1E1E; 
`

export const ModalLogin = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 501.1px;
    width: 448px;
    border-radius: 16px;
    background-color: #D9D9D9;
    padding-top: 64px;
`
export const LogoContainer = styled.div`
    display: flex 
    flex-direction: column;
    align-items: center;
    gap : 0.5px;
`
export const BoxModal = styled.div`
    display: flex;
    align-items: center;
    font-family:"Barlow", sans-serif; 
    font-size: 16px;
    width : 320px;
    height: 52px;
    background-color:#FFFFFF;
    border-radius:4px;
    color:#787878;
    padding: 7px;

` 
export const PartBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 32px;
    gap: 32px;
`