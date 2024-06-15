import styled from "styled-components";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: auto;
    width: 300px;
    background-color: #58CBFB;
    padding: 1.5rem;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const Button = styled.button`
    padding: 7px;
    border-radius: 4px;
    width: 16rem;
    background-color: #F5F5F566;
    border: none;
    color: #FFFFFF;
    font-family: "Barlow", sans-serif; 
    font-size: 1rem; 
    cursor: pointer;

    &.active {
        background-color: rgba(245, 245, 245, 0.8);
        color: #58CBFB;
    }
`;

export const PartOne = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
`;

export const PartTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const FooterText = styled.div`
    display:flex;
    align-items: center;
    gap:5px;
    padding-top: 25rem;
    color: white;
    font-family:"Barlow", sans-serif; 
    font-size: 1rem; 
`;

export const TemplateContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const ContentContainer = styled.div`
    flex-grow: 1;
    padding: 2rem;
    background-color: #FFFFFF;
`;
