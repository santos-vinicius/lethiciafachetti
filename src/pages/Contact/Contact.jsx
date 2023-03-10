import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import { el7, el8 } from '../../assets/graphics';

const StyledContact = styled.div`
  background-color: #FFF5E9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
  height: 300px;
  
  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 0;
  }

  & div{
    margin: 25px auto;
  }

  & .el7 {
    position: absolute;
    width: 300px;
    height: 380px;
    left: -30px;
    top: 3040px;
  }

  & .el8 {
    position: absolute;
    width: 250px;
    height: 300px;
    left: 1200px;
    top: 3090px;
  }

  @media (max-width: 960px) {
    & .el7 {
      height: 180px;
      left: -110px;
      top: 4480px;
    }

    & .el8 {
      display: none;
    }
  }
`;

const Instagram = styled(FaInstagram)`
  font-size: 30px;
  font-weight: bold;
  color: #201402;
  margin-right: 0.6rem;
`;

const Whatsapp = styled(FaWhatsapp)`
  font-size: 30px;
  font-weight: bold;
  color: #201402;
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 25px;
  color: #201402;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

function Contact() {
  return (
    <StyledContact>
      <img src={el7} alt="" className="el7" />
      <h2>Entre em contato</h2>
      <div>
        <StyledLink
          href="https://wa.me/+5511996698537"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp />
          <span>(11) 99669-8537</span>
        </StyledLink>
        <StyledLink
          href="https://www.instagram.com/psico.lethicia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          <span>@psico.lethicia</span>
        </StyledLink>
      </div>
      <img src={el8} alt="" className="el8" />
    </StyledContact>
  );
}

export default Contact;
