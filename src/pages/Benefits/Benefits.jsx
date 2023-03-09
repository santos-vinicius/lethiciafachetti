import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: 960px) {
    & div {
      display: flex;
      flex-direction: column;
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
    </StyledBenefits>
  );
}

export default Benefits;
