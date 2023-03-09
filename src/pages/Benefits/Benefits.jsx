import React from 'react';
import styled from 'styled-components';
import { el5, el6 } from '../../assets/graphics';

const StyledBenefits = styled.div`
  background-color: #FFF5E9;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0px 20px 20px 20px;
  padding: 0 40px 20px 40px;

  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 0;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }

  & .el5 {
    position: absolute;
    width: 517.62px;
    height: 469.06px;
    left: 1050px;
    top: 1900px;
  }

  & .el6 {
    position: absolute;
    width: 372px;
    height: 400px;
    left: -100px;
    top: 2500px;
  }

  @media (max-width: 960px) {
    & div {
      display: flex;
      flex-direction: column;
    }

    & .el5 {
      height: 300px;
      left: 180px;
      top: 2180px; 
      overflow-x: hidden;
  }

  & .el6 {
    display: none;
  }
  }

`;

const StyledCard = styled.div`
  background-color:#8ACFB2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  margin: 1rem 1rem 1rem 1rem;
  width: 300px;
  height: 200px;

  & h3 {
    text-align:center;
    margin-bottom: 0;
  }

  & p { 
    text-align: justify;
    
  }
  
`;

function Benefits() {
  return (
    <StyledBenefits>
      <img src={el6} alt="" className="el6" />
      <h2>Principais Benefícios da Terapia</h2>
      <div className="benefits-content">
        <StyledCard>
          <h3>Praticidade</h3>
          <p>
            Com a psicoterapia online, você consegue encaixar com maior
            facilidade o autocuidado na sua rotina, fazendo sua consulta em casa
            ou no trabalho. Não precisa se preocupar com locomoção, trânsito e
            tempo gasto no trajeto.
          </p>
        </StyledCard>
        <StyledCard>
          <h3>Autocuidado</h3>
          <p>
            Com a psicoterapia você consegue estabelecer e comunicar seus
            limites, melhorando assim o seu relacionamento com os outros e com
            você mesma. Entende que dias ruins também passam, que acolher seus
            sentimentos é importante e que dizer “não” é necessário.
          </p>
        </StyledCard>
      </div>
      <img src={el5} alt="" className="el5" />
    </StyledBenefits>
  );
}

export default Benefits;
