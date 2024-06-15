import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-size: 1.5rem;
  margin: 0;
`;
