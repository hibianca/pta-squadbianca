import styled from 'styled-components';

export const Card = styled.div`
  width: 331px;
  height: 750px; // 678px é a altura do projeto do figma. 
 
  top: 241px;
  left: 1037px;
  gap: 0px;
  border-radius: 16px;
  opacity: 1; 
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-family: Barlow;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  color: #454545;
`;

export const BordaFora = styled.div`
  width: 400px;
  height: 850px; // 782px é a altura do projeto do figma
  position: relative;
  top: 1px; // tava 169 no projeto, to tentando diminuir
  left: 250px;
  gap: 0px;
  border-radius: 16px;
  opacity: 0px;
  background: var(--background-light, #F5F5F5);
  box-shadow: 0px 1px 3px 1px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004D;
  color:#000000;
  
`;


export const Titulo = styled.div`
  width: 142px;
  height: 32px;
  
  top: 189px;
  left: 1061px;
  gap: 0px;
  opacity: 0px;
  font-family: Barlow;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  
`; 
