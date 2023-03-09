import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

/* ESTILIZAÇÂO */
const Star = styled(FaStar)`
  font-size: 20px;
  font-weight: bold;
  color: #F58548;
  margin-right: 0.2rem;
`;

const StyledCard = styled.div`
  background-color: #FFF5E9;
  margin: 10px auto;
  border-radius: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  max-width: 400px;
  max-height: 230px;

  & div {
    display: flex;
    align-items: center;
    margin-right: 9px;
    margin-bottom: 0px;
  }

  & p {
    text-align: justify;
    margin-bottom: 1.3rem;
    height: 120px;
  }
`;

const Author = styled.div`
  background-color: #201402;
  border-radius: 50%;
  padding: 6px 10px;
  align-items: flex-start;
  
  & span {
    font-family: Playfair Display, serif;
    font-weight: 700;
    font-size: 22px;
    color: #FFF5E9;
  }
`;
/* ------------ */

function Review01() {
  return (
    <StyledCard>
      <p>
        “Conheci a Lethícia por indicação de outra profissional e foi minha
        primeira vez no mundo da terapia. Está sendo uma experiência ótima e
        muito rica! Me sinto acolhido e ela está sempre atenta, me escutando.
        Todas sessões são ótimas e me fazem refletir bastante na busca pelo
        autoconhecimento.”
      </p>
      <div>
        <Author>
          <span>W</span>
        </Author>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </StyledCard>
  );
}

export default Review01;
