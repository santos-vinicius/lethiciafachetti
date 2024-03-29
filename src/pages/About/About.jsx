import React from 'react';
import styled from 'styled-components';
import { el3, el4 } from '../../assets/graphics';
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
  
  & .ImgLethicia {
    height: 400px;
    margin-right: 4rem;
    border: 4px solid #FFC0A7;
    border-radius: 20px;
  }
  
  @media (min-width: 1500px) {
    & .el3 {
      display: none;
    }
  }

  & .el3 {
    position: absolute;
    width: 185px;
    height: 226px;
    left: 1300px;
    top: 1000px;
  }

  & .el4 {
    position: absolute;
    width: 486.37px;
    height: 499.83px;
    left: -135px;
    top: 1250.64px;

  }

  @media (max-width: 960px) {
    flex-direction: column;
    
    & .el3 {
      display: none;
    }

    & .el4 {
      max-height: 300px;
      left: -200px;
      top: 1790px;
    }

    & .ImgLethicia {
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
  max-height: 470px;
  margin-bottom: 34px;

  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 10px;
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

  @media (max-width: 960px) {
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
      <img
        src={Imagem}
        alt="Psicóloga Lethícia Fachetti"
        className="ImgLethicia"
      />
      <img src={el3} alt="" className="el3" />
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
      <img src={el4} alt="" className="el4" />
    </StyledAbout>
  );
}

export default About;
