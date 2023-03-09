import React from 'react';
import styled from 'styled-components';
import {
  Review01,
  Review02,
  Review03,
  Review04
} from '../../components/ReviewCards';

const StyledReview = styled.div`
  background-color: #FFC0A7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
  padding: 40px;
  max-height: fit-content;

  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 0;
  }
`;

const SyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

  @media (min-width: 530px) and (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

function Review() {
  return (
    <StyledReview>
      <h2>Avaliações dos Pacientes</h2>
      <SyledContainer>
        <Review01 />
        <Review02 />
        <Review03 />
        <Review04 />
      </SyledContainer>
    </StyledReview>
  );
}
export default Review;
