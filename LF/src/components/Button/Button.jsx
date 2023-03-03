import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import './Button.styled.css';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 1em;
  padding: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #FFF5E9;
  width: 300px;
`;

function Button() {
  return (
    <div>
      <StyledButton>
        <FaWhatsapp className="icon" />
        Agende uma consulta
      </StyledButton>
    </div>
  );
}

export default Button;
