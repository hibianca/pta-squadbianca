import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    background-color:#F5F5F5;
    align-items: center;

`

export const PageContainerTwo = styled.div`
    display: flex;
    background-color:#F5F5F5;
    align-items: center;
    flex-direction: row;
    padding: 0rem 4rem;
    gap: 1.2rem;
`

export const PageContainerThree = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #D1CFCF;
`

export const PageContainerFour =styled.div`
    display: flex;
    background-color:#F5F5F5;
    align-items: flex-start;
    flex-direction: row;
    padding: 1rem;
    gap: 35rem;
`

export const CenterTwo = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 150px;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-family: Barlow;
    font-size: 24px;
    font-weight: regular;
    color: #000000;
    text-align: center;
    white-space: nowrap;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: stretch;
`

export const PageTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    size: 28px;
    color: #000000;
    font-family: 'Barlow';
    font-weight: 400; 
`

export const OutilinedButton = styled.button`
    background: #D5C6FA;
    padding: -1rem;
    width: 230px;
    height: 99px;
    gap: 0px;
    border-radius: 16px 16px 16px 16px;
    opacity: 0px;
    font-family: barlow;
    font-size: 14px;
    font-weight : 500;
    line-height: 25px;
    text-align: left;
`

export const GridContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, auto);
    gap:16px;
    
`

export const BotaoDireito = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    padding: 10px;
    gap: 10px;
    border-radius: 16px 16px 16px 16px;
    background-color: #51E678;
    font-size: 3rem;
    font-weight: 400;
    cursor: pointer;
    border: none;
    outline: none;
    size: 28px;
    color: #F5F5F5;
    font-family: 'Barlow';
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonSearch = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 16px;
    background-color: #58CBFB;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 2.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`

export const NewContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
` 

export const ButtonMatches = styled.div`
    width: 136px;
    height: 37px;
    background-color: #E2F4EC;
    color: #000000;
    font-size: 16px;
    font-weight: regular;
    border-top-left-radius: 8px;  
    border-top-right-radius: 8px;
    border-top: 1px solid #D1CFCF;
    border-left: 1px solid #D1CFCF;  
    border-right: 1px solid #D1CFCF; 
    border-bottom: 1px solid #D1CFCF; 
    outline: none;
    cursor: pointer;
    margin-top: 2.5rem;
    font-size: 16px;
    font-weight: regular;
    font-family: barlow;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content:center;
    
    &:active {
        border-bottom: none;
    }
`

export const ButtonHistoric = styled.div`
    width: 136px;
    height: 37px;
    background-color: #F0F0F0;
    color: #000000;
    font-size: 16px;
    font-weight: regular;
    border-top-left-radius: 8px;  
    border-top-right-radius: 8px;
    border-top: 1px solid #D1CFCF;
    border-left: 1px solid #D1CFCF;  
    border-right: 1px solid #D1CFCF; 
    border-bottom: 1px solid #D1CFCF; 
    outline: none;
    cursor: pointer;
    margin-top: 2.5rem;
    font-size: 16px;
    font-weight: regular;
    font-family: barlow;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content:center;

    &:active {
        border-bottom: none;
    }
`

export const TitleMacthes = styled.h1`
    font-family: barlow;
    font-size: 32px;
    font-weight: medium;
    color: #000000;
    margin-top: 1rem; //navbar sumindo ????
`
