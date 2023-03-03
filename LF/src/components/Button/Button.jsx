import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const WaIcon = styled(FaWhatsapp)`
  font-size: 35px;
  font-weight: bold;
  color: #201402;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  border: none;
  color: #201402;
  border-radius: 10px;
  background: #FFF5E9;
  width: 300px;
`;

function Button() {
  return (
    <StyledButton>
      <WaIcon />
      Agende uma consulta
    </StyledButton>
  );
}

export default Button;
