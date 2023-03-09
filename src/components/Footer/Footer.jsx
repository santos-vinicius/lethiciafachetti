import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #8ACFB2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  & p {
    font-weight: 700;
    font-size: 18px;
  }

  & span { font-size: 16px; }
  & span::before {
    content: "🟆";
    color: #FFF5E9;
    margin-right: 10px;
  }

  & a {
    margin-left: 5px;
    text-decoration: none;
    font-weight: 600;
    color:#201402;
    cursor: pointer;
  }

  /* Small screen */
  @media (max-width: 530px) and (max-width: 960px) {
    & div {
      padding: 5px;
      gap: 2px;
      display: flex;
      flex-direction: column;
    }

    & span {
      margin-bottom: 0.5rem;
    }

    & span::before {
      content: none;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Lethícia Fachetti | CRP 06/169593</p>
        <span>
          Criado e desenvolvido por
          <a
            href="https://github.com/santos-vinicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinicius Santos
          </a>
        </span>
      </div>
    </StyledFooter>
  );
}

export default Footer;
