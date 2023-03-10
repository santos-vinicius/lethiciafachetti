import React from 'react';
import styled from 'styled-components';

const StyledFaq = styled.div`
  background-color: #FFF5E9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;

  & h2 {
    text-align: center;
    font-family: Playfair Display, serif;
    font-weight: 800;
    margin-top: 0;
  }

  & div {
    margin: 10px auto;
    min-width: 350px;
    max-width: 884px;
    width: 90%;
  }

  @media (max-width: 960px) {
    & div {
      width: 70%;
    }

    & summary {
      padding-left: 0rem;
      font-size: 16px;
    }

    & details > summary::before {
    content: '🌻';
    color: #FFF5E9;
    padding-right: 2px;
    padding-left: 0.5rem;
  }
}

  & summary {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    padding: 0.5rem;
    background-color: #8ACFB2;
  }

  & details > summary {list-style: none}
  & summary::-webkit-details-marker {display: none; }
  & details > summary::before {
    content: '🌻';
    color: #FFF5E9;
    padding-right: 0.2rem;
    padding-left: 0.5rem;
    
  }

  & details {
    margin-top: 0.5rem;
    text-align: justify;
  }

  & details > p {
    margin: 0.5rem 0.1rem 0.5rem 0.1rem;
  }

`;

const source = [
  {
    summary: 'Como funciona o atendimento online?',
    detail:
      'A psicoterapia online tem a mesma eficácia da presencial. São consultas realizadas através de vídeo chamadas (Google Meet). O psicólogo, assim como no atendimento presencial, mantem o sigilo sobre tudo o que é conversado com o paciente.',
  },
  {
    summary: 'Posso remarcar ou desmarcar as sessões?',
    detail:
      'Se houver algum imprevisto que impossibilite o comparecimento na consulta, o paciente pode desmarcar desde que seja comunicado com 24 horas de antecedência. Para remarcar a consulta, depende da agenda e horários disponíveis.',
  },
  {
    summary: 'Onde faço o agendamento das consultas?',
    detail:
      'Através do WhatsApp, onde já consigo tirar todas as suas dúvidas e entender um pouquinho de como poderei te ajudar.',
  },
  {
    summary: 'Quanto tempo dura a consulta?',
    detail:
      'Os atendimentos são semanais ou quinzenais e a consulta tem duração de 50 minutos.',
  },
  {
    summary: 'Atende a qual público?',
    detail: 'Atendo adolescentes e adultos.',
  },
];

function Faq() {
  return (
    <StyledFaq>
      <h2>Perguntas Frequentes</h2>
      <div>
        {source.map((item) => (
          <details>
            <summary>{item.summary}</summary>
            <p>{item.detail}</p>
          </details>
        ))}
      </div>
    </StyledFaq>
  );
}

export default Faq;
