import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    height: 100vh; /* Ocupa a altura total da viewport */
    width: 100vw; /* Ocupa a largura total da viewport */
    background-color: #F5F5F5;

`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

`

export const TitleCreateGame = styled.h1`
    font-family: 'Barlow';
    font-size: 32px;
    font-weight: medium;
    color: #000000;
    padding: 1rem 4rem;
    gap: 5rem;
`

export const ContainerOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 0rem 4rem;
`

export const ContainerTwo = styled.div`
    display: flex;
    flex-direction: column;

`

export const ContainerThree = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const Titles = styled.h1`
    font-family: 'Barlow';
    font-size: 16px;
    font-weight: regular; 
    color: #000000;
`;
