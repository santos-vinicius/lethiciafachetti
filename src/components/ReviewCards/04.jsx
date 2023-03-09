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
  margin-top: 1rem;
  padding: 6px 12px;
  
  & span {
    font-family: Playfair Display, serif;
    font-weight: 700;
    font-size: 22px;
    color: #FFF5E9;
  }
`;

function Review04() {
  return (
    <StyledCard>
      <p>
        “Ótima profissional, minha primeira interação com a terapia foi com ela
        e tive uma ótima experiência. As sessões são com valores acessíveis e a
        Lethícia está sempre disposta à ajudar. Recomendo muitíssimo.”
      </p>
      <div>
        <Author>
          <span>C</span>
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

export default Review04;
