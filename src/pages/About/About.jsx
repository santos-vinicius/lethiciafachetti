import React from 'react';
import styled from 'styled-components';
import Imagem from '../../assets/images/02.jpg';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton';

/* Styled Components */
const StyledAbout = styled.div`
  align-items: center;
  background-color: #8ACFB2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 40px;
  max-height: fit-content;
  
  & img {
    height: 400px;
    margin-right: 4rem;
    border: 4px solid #FFC0A7;
    border-radius: 20px;
  }
  
  @media (max-width: 530px) and (max-width: 960px) {
    flex-direction: column;

    & img {
      height: 300px;
      margin-bottom: 20px;
      margin-right: 0;
    }
    
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 571px;
  max-height: 374px;
  margin-bottom: 34px;

  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 0;
  }

  & p {
    text-align: justify;
    margin-bottom: 0;
    line-height: 23px;
  }

  & p:last-child {
    margin-bottom: 20px;
  }

  & span {
    font-weight: 600;
  }

  @media (max-width: 530px) and (max-width: 960px) {
    & h2 {
      margin-top: 50px;
      margin-bottom: 0;
    }
  }

`;

/* ----------- */

function About() {
  return (
    <StyledAbout>
      <img src={Imagem} alt="Psicóloga Lethícia Fachetti" />
      <StyledContent>
        <h2>Sobre mim</h2>
        <div>
          <p>
            Olá, me chamo <span>Lethícia Fachetti</span>. CRP 06/169593
          </p>
          <p>
            Comecei a atuar no atendimento clínico já no primeiro ano após a
            minha formação.
          </p>
          <p>
            Minha atuação está voltada para escuta, acolhimento e
            desenvolvimento. Meu objetivo é te ajudar a desenvolver seu
            autoconhecimento para que consiga lidar com suas outras questões de
            forma mais leve e consciente.
          </p>
          <p>
            Tenho experiência no atendimento de demandas como luto, depressão,
            ansiedade, transtornos alimentares, burnout, autossabotagem,
            dependência emocional, relacionamento tóxico, entre outras.
          </p>
        </div>
        <WhatsappButton />
      </StyledContent>
    </StyledAbout>
  );
}

export default About;
