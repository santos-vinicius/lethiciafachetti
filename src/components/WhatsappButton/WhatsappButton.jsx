import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const WaIcon = styled(FaWhatsapp)`
  font-size: 35px;
  font-weight: bold;
  color: #201402;
`;

const StyledButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  color: #201402;
  border-radius: 10px;
  background: #FFF5E9;
  width: 300px;
  text-decoration: none;
  color: #201402;
  font-size: 20px;
  font-weight: 600;
`;

function generateWhatsAppUrl(phoneNumber, message) {
  const base = 'https://wa.me/';
  const url = `${base}${phoneNumber}`;

  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  }

  return url;
}

function WhatsappButton() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  function handleClick() {
    const phoneNumber = '+5511996698537';
    const message = 'Olá, gostaria de mais informações sobre as consultas.';
    const url = generateWhatsAppUrl(phoneNumber, message);
    setWhatsappUrl(url);
  }

  return (
    <StyledButton
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleClick}
    >
      <WaIcon />
      <span>Agende uma consulta</span>
    </StyledButton>
  );
}

export default WhatsappButton;
