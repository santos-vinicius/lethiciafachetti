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
    margin-bottom: 2px;
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
  padding: 6px 12px;
  align-items: flex-start;
  
  & span {
    font-family: Playfair Display, serif;
    font-weight: 700;
    font-size: 22px;
    color: #FFF5E9;
  }
`;
/* ------------ */

function Review02() {
  return (
    <StyledCard>
      <p>
        “Uma excelente profissional! Me sinto super confortável para contar as
        coisas que não falo para ninguém! A terapia tem me feito entender melhor
        o que quero e onde posso chegar. Terapia é vida! E quando se encontra
        uma profissional como a Lethícia é melhor ainda!”
      </p>
      <div>
        <Author>
          <span>K</span>
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

export default Review02;
