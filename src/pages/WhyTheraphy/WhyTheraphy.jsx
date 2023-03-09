import { React } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Autoconhecimento,
  Autoestima,
  EscutaAjuda,
  PerdaLuto,
  // eslint-disable-next-line prettier/prettier
  Relacionamentos
} from '../../components/Cards';
import { Slide, Slider } from '../../components/Slider';

/*  ESTILIZAÇÃO  */
const StyledTheraphy = styled.div`
  background-color: #FFF5E9;
  margin: 40px auto;

  & h1{ 
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
/* FIM DA ESTILIZAÇÃO */

function WhyTheraphy() {
  const settings = {
    spaceBetween: 5,
    pagination: { clickable: true },
    breakpoints: {
      // when window width is >= 320px
      530: {
        slidesPerView: 1,
        // eslint-disable-next-line prettier/prettier
        spaceBetween: 5
      },
      // when window width is >= 480px
      960: {
        slidesPerView: 3,
        // eslint-disable-next-line prettier/prettier
        spaceBetween: 30
      },
      // when window width is >= 640px
      1300: {
        slidesPerView: 4,
        // eslint-disable-next-line prettier/prettier
        spaceBetween: 40
      },
    },
  };

  return (
    <StyledTheraphy>
      <h1>Por que fazer terapia?</h1>
      <div>
        <Slider settings={settings}>
          <Slide>
            <Autoconhecimento />
          </Slide>
          <Slide>
            <Relacionamentos />
          </Slide>
          <Slide>
            <Autoestima />
          </Slide>
          <Slide>
            <EscutaAjuda />
          </Slide>
          <Slide>
            <PerdaLuto />
          </Slide>
        </Slider>
      </div>
    </StyledTheraphy>
  );
}

export default WhyTheraphy;
